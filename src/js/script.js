
function findMeta(){
	var meta = Array.prototype.map.call(document.querySelectorAll('meta'), function(node){
    if(node.name) {
        return{
			name:node.name,
			content:node.content
		};
    }
	if(node.property){
		return {
			property: node.property,
			content: node.content
		};
	}
	return null;
});

	return JSON.stringify(meta) || "";
}

function findNodePath(node){

    if(!node.nodeName){
        return "";
    }

    if(node.nodeName === 'HTML') {
        return node.nodeName;
    }

    return findNodePath(node.parentNode) + " " + node.nodeName;
}

function today(){
    var now = new Date();
    return now.getUTCFullYear() +  "-" + now.getUTCMonth() + "-" + now.getUTCDate();
}

function collectPageData(){
	return {
		meta: findMeta(),
		url: window.location.href,
		title: document.title,
		element: collectElementData()
	}
}

function collectElementData(){

	var selection = window.getSelection();

	if(!selection || selection.type === "None"){
		return null;
	}

	return {
		date: today(),
		anchor_path: findNodePath(selection.anchorNode),
		focus_path: findNodePath(selection.focusNode),
		anchor_offset: selection.anchorOffset,
		focus_offset: selection.focusOffset,
		highlighted: selection.toString()
	}
}

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.method === "getPageData"){
      sendResponse(collectPageData());
	}
    else {
      sendResponse({}); // snub them.
	}
});

