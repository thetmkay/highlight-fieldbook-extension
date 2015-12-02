


function activate(tab){

	var Fieldbook = require('fieldbook-promise'),
		url = require('url'),
		config = require('../../config');

	var book = new Fieldbook({
	  user: config.fieldbook.username,
	  password: config.fieldbook.password,
	  book: config.fieldbook.book
	});

	function sendMessage(method) {
		return new Promise(function(resolve, reject){
			chrome.tabs.sendMessage(tab.id,{method:method},resolve);
		});
	}

	function createNotification(title,message,pageId,elementId){

		var options = {
			title: title,
			message: message,
			type: 'basic',
			iconUrl:'/img/extension-icon.png',
 		};

		if(pageId || elementId) {
			options.buttons = [{
				title:'Undo'
			}];
		}

		var notifications = {};

		chrome.notifications.create(null,options,function(notificationId){
			notifications[notificationId] = {
				element: elementId,
				page: pageId	
			}
			
			setTimeout(function(){
				console.log('Deleting... (' + notificationId + ')');
				delete notifications[notificationId];
			}, 5000);
		});

		chrome.notifications.onButtonClicked.addListener(function(notifId,btnId){
			if(btnId === 0) {
				var notification = notifications[notifId];

				if(!notification){
					return;
				}	
				
				if(notification.page) {
					book.deleteRecord('page',notification.page);	
				}	

				if(notification.element) {
					book.deleteRecord('element', notification.element);
				}
	
			}
		});
	}

	function findFirst(arr, callback){
		for(var i = 0; i < arr.length; i++){
			if(callback(arr[i])){
				return arr[i];
			}
		}
		return null;
	}

	var PAGE_SHEET = 'page';
	var ELEMENT_SHEET = 'element';

	var pageData;

	var pageAdded = true;
	var pageId = false, 
		elementId = false;

	sendMessage('getPageData').then(function(data){
		pageData = data;
		return book.getSheet(PAGE_SHEET);
	}).then(function(sheet){
		var urlObj = url.parse(pageData.url);

		var fullUrl = urlObj.href;

		var samePage = findFirst(sheet, function(obj){
			return obj.domain === urlObj.hostname && obj.path === urlObj.path;
		});

		if(samePage) {
			console.log('samepage');
			pageAdded = false;
			return samePage;
		}
		var page = {
			domain: urlObj.hostname,
			path: urlObj.path,
			protocol: urlObj.protocol,
			meta: pageData.meta,
			title: pageData.title,
			url: fullUrl
		}
			
		return book.addRecord(PAGE_SHEET, page); 
	}).then(function(page){

		pageId = page.id;

		if(!pageData.element){
			return Promise.resolve(false);
		}
		var element = pageData.element;
		element.page = page;

		return book.addRecord(ELEMENT_SHEET, element);
	}).then(function(element){

		elementId = element.id;
		
		var title, message;

		if(pageAdded && element){
			title = 'New Page & Selection Added';
			message = pageData.title + ":\n\n\"" + element.highlighted + "\"";
		} else if(pageAdded && !element) {
			elementId = false;
			title = 'New Page Added'
			message = pageData.title;
		} else if(!pageAdded && element) {
			pageId = false;
			title = 'New Selection Added'
			message = pageData.title + ":\n\n\"" + element.highlighted + "\"";
		} else if(!pageAdded && !element) {
			pageId = false;
			elementId = false;
			title = 'Nothing was added'
			message = '';
		} 

		createNotification(title,message,pageId,elementId);	
	}).catch(function(err){
		console.log(err);
	});
}


chrome.browserAction.onClicked.addListener(activate);
console.log('background-script');
