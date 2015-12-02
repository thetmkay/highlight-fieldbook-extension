!function t(e,r,n){function o(i,a){if(!r[i]){if(!e[i]){var h="function"==typeof require&&require;if(!a&&h)return h(i,!0);if(s)return s(i,!0);var u=new Error("Cannot find module '"+i+"'");throw u.code="MODULE_NOT_FOUND",u}var c=r[i]={exports:{}};e[i][0].call(c.exports,function(t){var r=e[i][1][t];return o(r?r:t)},c,c.exports,t,e,r,n)}return r[i].exports}for(var s="function"==typeof require&&require,i=0;i<n.length;i++)o(n[i]);return o}({1:[function(t,e,r){e.exports={fieldbook:{username:"key-1",password:"VO-_ve-_ve-_vSgrWO-_vWQgbu-_ve-_vQTvv70",book:"565c77a80935760300b7201d"}}},{}],2:[function(t,e,r){function n(t){return t?o(t):void 0}function o(t){for(var e in n.prototype)t[e]=n.prototype[e];return t}e.exports=n,n.prototype.on=n.prototype.addEventListener=function(t,e){return this._callbacks=this._callbacks||{},(this._callbacks[t]=this._callbacks[t]||[]).push(e),this},n.prototype.once=function(t,e){function r(){n.off(t,r),e.apply(this,arguments)}var n=this;return this._callbacks=this._callbacks||{},r.fn=e,this.on(t,r),this},n.prototype.off=n.prototype.removeListener=n.prototype.removeAllListeners=n.prototype.removeEventListener=function(t,e){if(this._callbacks=this._callbacks||{},0==arguments.length)return this._callbacks={},this;var r=this._callbacks[t];if(!r)return this;if(1==arguments.length)return delete this._callbacks[t],this;for(var n,o=0;o<r.length;o++)if(n=r[o],n===e||n.fn===e){r.splice(o,1);break}return this},n.prototype.emit=function(t){this._callbacks=this._callbacks||{};var e=[].slice.call(arguments,1),r=this._callbacks[t];if(r){r=r.slice(0);for(var n=0,o=r.length;o>n;++n)r[n].apply(this,e)}return this},n.prototype.listeners=function(t){return this._callbacks=this._callbacks||{},this._callbacks[t]||[]},n.prototype.hasListeners=function(t){return!!this.listeners(t).length}},{}],3:[function(t,e,r){e.exports={errors:{NO_CONFIG_OBJECT:"No config object",NO_CONFIG_USER:"No user passed in config object",NO_CONFIG_PASSWORD:"No password passed in config object",NO_CONFIG_BOOK:"No book id passed in config object"}}},{}],4:[function(t,e,r){e.exports=function(e){function r(t){return t.set("accept","application/json").auth(o.user,o.password).end().then(function(t){return t.body},function(t){return console.log(t),Promise.reject(t.response.error)})}function n(){var t;if(arguments){var e=Array.prototype.slice.call(arguments);e.unshift(o.book),t=e.join("/")}else t=o.book;return i.resolve("https://api.fieldbook.com/v1/",t)}var o,s=t("superagent-promise")(t("superagent"),Promise),i=t("url"),a=t("./constants");return function(t){if(!t)throw new Error(a.errors.NO_CONFIG_OBJECT);if(!t.user)throw new Error(a.errors.NO_CONFIG_USER);if(!t.password)throw new Error(a.errors.NO_CONFIG_PASSWORD);if(!t.book)throw new Error(a.errors.NO_CONFIG_BOOK);o=e}(e),{getSheets:function(){var t=n();return r(s.get(t))},getSheet:function(t){var e=n(t);return r(s.get(e))},getRecord:function(t,e){var o=n(t,e);return r(s.get(o))},addRecord:function(t,e){var o=n(t);return r(s.post(o).send(e))},updateRecord:function(t,e,o){var i=n(t,e);return r(s.patch(i).send(o))},deleteRecord:function(t,e){var o=n(t,e);return r(s.del(o))}}}},{"./constants":3,superagent:11,"superagent-promise":10,url:12}],5:[function(t,e,r){(function(t){!function(n){function o(t){throw RangeError(I[t])}function s(t,e){for(var r=t.length,n=[];r--;)n[r]=e(t[r]);return n}function i(t,e){var r=t.split("@"),n="";r.length>1&&(n=r[0]+"@",t=r[1]),t=t.replace(N,".");var o=t.split("."),i=s(o,e).join(".");return n+i}function a(t){for(var e,r,n=[],o=0,s=t.length;s>o;)e=t.charCodeAt(o++),e>=55296&&56319>=e&&s>o?(r=t.charCodeAt(o++),56320==(64512&r)?n.push(((1023&e)<<10)+(1023&r)+65536):(n.push(e),o--)):n.push(e);return n}function h(t){return s(t,function(t){var e="";return t>65535&&(t-=65536,e+=U(t>>>10&1023|55296),t=56320|1023&t),e+=U(t)}).join("")}function u(t){return 10>t-48?t-22:26>t-65?t-65:26>t-97?t-97:x}function c(t,e){return t+22+75*(26>t)-((0!=e)<<5)}function l(t,e,r){var n=0;for(t=r?P(t/k):t>>1,t+=P(t/e);t>S*j>>1;n+=x)t=P(t/S);return P(n+(S+1)*t/(t+C))}function p(t){var e,r,n,s,i,a,c,p,f,d,m=[],v=t.length,y=0,g=q,b=A;for(r=t.lastIndexOf(T),0>r&&(r=0),n=0;r>n;++n)t.charCodeAt(n)>=128&&o("not-basic"),m.push(t.charCodeAt(n));for(s=r>0?r+1:0;v>s;){for(i=y,a=1,c=x;s>=v&&o("invalid-input"),p=u(t.charCodeAt(s++)),(p>=x||p>P((O-y)/a))&&o("overflow"),y+=p*a,f=b>=c?_:c>=b+j?j:c-b,!(f>p);c+=x)d=x-f,a>P(O/d)&&o("overflow"),a*=d;e=m.length+1,b=l(y-i,e,0==i),P(y/e)>O-g&&o("overflow"),g+=P(y/e),y%=e,m.splice(y++,0,g)}return h(m)}function f(t){var e,r,n,s,i,h,u,p,f,d,m,v,y,g,b,w=[];for(t=a(t),v=t.length,e=q,r=0,i=A,h=0;v>h;++h)m=t[h],128>m&&w.push(U(m));for(n=s=w.length,s&&w.push(T);v>n;){for(u=O,h=0;v>h;++h)m=t[h],m>=e&&u>m&&(u=m);for(y=n+1,u-e>P((O-r)/y)&&o("overflow"),r+=(u-e)*y,e=u,h=0;v>h;++h)if(m=t[h],e>m&&++r>O&&o("overflow"),m==e){for(p=r,f=x;d=i>=f?_:f>=i+j?j:f-i,!(d>p);f+=x)b=p-d,g=x-d,w.push(U(c(d+b%g,0))),p=P(b/g);w.push(U(c(p,0))),i=l(r,y,n==s),r=0,++n}++r,++e}return w.join("")}function d(t){return i(t,function(t){return E.test(t)?p(t.slice(4).toLowerCase()):t})}function m(t){return i(t,function(t){return R.test(t)?"xn--"+f(t):t})}var v="object"==typeof r&&r&&!r.nodeType&&r,y="object"==typeof e&&e&&!e.nodeType&&e,g="object"==typeof t&&t;(g.global===g||g.window===g||g.self===g)&&(n=g);var b,w,O=2147483647,x=36,_=1,j=26,C=38,k=700,A=72,q=128,T="-",E=/^xn--/,R=/[^\x20-\x7E]/,N=/[\x2E\u3002\uFF0E\uFF61]/g,I={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},S=x-_,P=Math.floor,U=String.fromCharCode;if(b={version:"1.3.2",ucs2:{decode:a,encode:h},decode:p,encode:f,toASCII:m,toUnicode:d},"function"==typeof define&&"object"==typeof define.amd&&define.amd)define("punycode",function(){return b});else if(v&&y)if(e.exports==v)y.exports=b;else for(w in b)b.hasOwnProperty(w)&&(v[w]=b[w]);else n.punycode=b}(this)}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],6:[function(t,e,r){"use strict";function n(t,e){return Object.prototype.hasOwnProperty.call(t,e)}e.exports=function(t,e,r,s){e=e||"&",r=r||"=";var i={};if("string"!=typeof t||0===t.length)return i;var a=/\+/g;t=t.split(e);var h=1e3;s&&"number"==typeof s.maxKeys&&(h=s.maxKeys);var u=t.length;h>0&&u>h&&(u=h);for(var c=0;u>c;++c){var l,p,f,d,m=t[c].replace(a,"%20"),v=m.indexOf(r);v>=0?(l=m.substr(0,v),p=m.substr(v+1)):(l=m,p=""),f=decodeURIComponent(l),d=decodeURIComponent(p),n(i,f)?o(i[f])?i[f].push(d):i[f]=[i[f],d]:i[f]=d}return i};var o=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)}},{}],7:[function(t,e,r){"use strict";function n(t,e){if(t.map)return t.map(e);for(var r=[],n=0;n<t.length;n++)r.push(e(t[n],n));return r}var o=function(t){switch(typeof t){case"string":return t;case"boolean":return t?"true":"false";case"number":return isFinite(t)?t:"";default:return""}};e.exports=function(t,e,r,a){return e=e||"&",r=r||"=",null===t&&(t=void 0),"object"==typeof t?n(i(t),function(i){var a=encodeURIComponent(o(i))+r;return s(t[i])?n(t[i],function(t){return a+encodeURIComponent(o(t))}).join(e):a+encodeURIComponent(o(t[i]))}).join(e):a?encodeURIComponent(o(a))+r+encodeURIComponent(o(t)):""};var s=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)},i=Object.keys||function(t){var e=[];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.push(r);return e}},{}],8:[function(t,e,r){"use strict";r.decode=r.parse=t("./decode"),r.encode=r.stringify=t("./encode")},{"./decode":6,"./encode":7}],9:[function(t,e,r){e.exports=function(t,e,r){for(var n=0,o=t.length,s=3==arguments.length?r:t[n++];o>n;)s=e.call(null,s,t[n],++n,t);return s}},{}],10:[function(t,e,r){function n(t,e){function r(){t.Request.apply(this,arguments)}r.prototype=Object.create(t.Request.prototype),r.prototype.end=function(r){var n=t.Request.prototype.end,o=this;return new e(function(t,e){n.call(o,function(n,o){r&&r(n,o),n?e(n):t(o)})})},r.prototype.then=function(r,n){var o=t.Request.prototype.end,s=this;return new e(function(t,e){o.call(s,function(r,n){r?e(r):t(n)})}).then(r,n)};var n=function(t,e){return new r(t,e)};return n.options=function(t){return n("OPTIONS",t)},n.head=function(t,e){var r=n("HEAD",t);return e&&r.send(e),r},n.get=function(t,e){var r=n("GET",t);return e&&r.query(e),r},n.post=function(t,e){var r=n("POST",t);return e&&r.send(e),r},n.put=function(t,e){var r=n("PUT",t);return e&&r.send(e),r},n.patch=function(t,e){var r=n("PATCH",t);return e&&r.send(e),r},n.del=function(t){return n("DELETE",t)},n}e.exports=n},{}],11:[function(t,e,r){function n(){}function o(t){var e={}.toString.call(t);switch(e){case"[object File]":case"[object Blob]":case"[object FormData]":return!0;default:return!1}}function s(t){return t===Object(t)}function i(t){if(!s(t))return t;var e=[];for(var r in t)null!=t[r]&&e.push(encodeURIComponent(r)+"="+encodeURIComponent(t[r]));return e.join("&")}function a(t){for(var e,r,n={},o=t.split("&"),s=0,i=o.length;i>s;++s)r=o[s],e=r.split("="),n[decodeURIComponent(e[0])]=decodeURIComponent(e[1]);return n}function h(t){var e,r,n,o,s=t.split(/\r?\n/),i={};s.pop();for(var a=0,h=s.length;h>a;++a)r=s[a],e=r.indexOf(":"),n=r.slice(0,e).toLowerCase(),o=y(r.slice(e+1)),i[n]=o;return i}function u(t){return t.split(/ *; */).shift()}function c(t){return v(t.split(/ *; */),function(t,e){var r=e.split(/ *= */),n=r.shift(),o=r.shift();return n&&o&&(t[n]=o),t},{})}function l(t,e){e=e||{},this.req=t,this.xhr=this.req.xhr,this.text="HEAD"!=this.req.method&&(""===this.xhr.responseType||"text"===this.xhr.responseType)||"undefined"==typeof this.xhr.responseType?this.xhr.responseText:null,this.statusText=this.req.xhr.statusText,this.setStatusProperties(this.xhr.status),this.header=this.headers=h(this.xhr.getAllResponseHeaders()),this.header["content-type"]=this.xhr.getResponseHeader("content-type"),this.setHeaderProperties(this.header),this.body="HEAD"!=this.req.method?this.parseBody(this.text?this.text:this.xhr.response):null}function p(t,e){var r=this;m.call(this),this._query=this._query||[],this.method=t,this.url=e,this.header={},this._header={},this.on("end",function(){var t=null,e=null;try{e=new l(r)}catch(n){return t=new Error("Parser is unable to parse the response"),t.parse=!0,t.original=n,r.callback(t)}if(r.emit("response",e),t)return r.callback(t,e);if(e.status>=200&&e.status<300)return r.callback(t,e);var o=new Error(e.statusText||"Unsuccessful HTTP response");o.original=t,o.response=e,o.status=e.status,r.callback(o,e)})}function f(t,e){return"function"==typeof e?new p("GET",t).end(e):1==arguments.length?new p("GET",t):new p(t,e)}var d,m=t("emitter"),v=t("reduce");d="undefined"!=typeof window?window:"undefined"!=typeof self?self:this,f.getXHR=function(){if(!(!d.XMLHttpRequest||d.location&&"file:"==d.location.protocol&&d.ActiveXObject))return new XMLHttpRequest;try{return new ActiveXObject("Microsoft.XMLHTTP")}catch(t){}try{return new ActiveXObject("Msxml2.XMLHTTP.6.0")}catch(t){}try{return new ActiveXObject("Msxml2.XMLHTTP.3.0")}catch(t){}try{return new ActiveXObject("Msxml2.XMLHTTP")}catch(t){}return!1};var y="".trim?function(t){return t.trim()}:function(t){return t.replace(/(^\s*|\s*$)/g,"")};f.serializeObject=i,f.parseString=a,f.types={html:"text/html",json:"application/json",xml:"application/xml",urlencoded:"application/x-www-form-urlencoded",form:"application/x-www-form-urlencoded","form-data":"application/x-www-form-urlencoded"},f.serialize={"application/x-www-form-urlencoded":i,"application/json":JSON.stringify},f.parse={"application/x-www-form-urlencoded":a,"application/json":JSON.parse},l.prototype.get=function(t){return this.header[t.toLowerCase()]},l.prototype.setHeaderProperties=function(t){var e=this.header["content-type"]||"";this.type=u(e);var r=c(e);for(var n in r)this[n]=r[n]},l.prototype.parse=function(t){return this.parser=t,this},l.prototype.parseBody=function(t){var e=this.parser||f.parse[this.type];return e&&t&&(t.length||t instanceof Object)?e(t):null},l.prototype.setStatusProperties=function(t){1223===t&&(t=204);var e=t/100|0;this.status=this.statusCode=t,this.statusType=e,this.info=1==e,this.ok=2==e,this.clientError=4==e,this.serverError=5==e,this.error=4==e||5==e?this.toError():!1,this.accepted=202==t,this.noContent=204==t,this.badRequest=400==t,this.unauthorized=401==t,this.notAcceptable=406==t,this.notFound=404==t,this.forbidden=403==t},l.prototype.toError=function(){var t=this.req,e=t.method,r=t.url,n="cannot "+e+" "+r+" ("+this.status+")",o=new Error(n);return o.status=this.status,o.method=e,o.url=r,o},f.Response=l,m(p.prototype),p.prototype.use=function(t){return t(this),this},p.prototype.timeout=function(t){return this._timeout=t,this},p.prototype.clearTimeout=function(){return this._timeout=0,clearTimeout(this._timer),this},p.prototype.abort=function(){return this.aborted?void 0:(this.aborted=!0,this.xhr.abort(),this.clearTimeout(),this.emit("abort"),this)},p.prototype.set=function(t,e){if(s(t)){for(var r in t)this.set(r,t[r]);return this}return this._header[t.toLowerCase()]=e,this.header[t]=e,this},p.prototype.unset=function(t){return delete this._header[t.toLowerCase()],delete this.header[t],this},p.prototype.getHeader=function(t){return this._header[t.toLowerCase()]},p.prototype.type=function(t){return this.set("Content-Type",f.types[t]||t),this},p.prototype.accept=function(t){return this.set("Accept",f.types[t]||t),this},p.prototype.auth=function(t,e){var r=btoa(t+":"+e);return this.set("Authorization","Basic "+r),this},p.prototype.query=function(t){return"string"!=typeof t&&(t=i(t)),t&&this._query.push(t),this},p.prototype.field=function(t,e){return this._formData||(this._formData=new d.FormData),this._formData.append(t,e),this},p.prototype.attach=function(t,e,r){return this._formData||(this._formData=new d.FormData),this._formData.append(t,e,r),this},p.prototype.send=function(t){var e=s(t),r=this.getHeader("Content-Type");if(e&&s(this._data))for(var n in t)this._data[n]=t[n];else"string"==typeof t?(r||this.type("form"),r=this.getHeader("Content-Type"),"application/x-www-form-urlencoded"==r?this._data=this._data?this._data+"&"+t:t:this._data=(this._data||"")+t):this._data=t;return!e||o(t)?this:(r||this.type("json"),this)},p.prototype.callback=function(t,e){var r=this._callback;this.clearTimeout(),r(t,e)},p.prototype.crossDomainError=function(){var t=new Error("Origin is not allowed by Access-Control-Allow-Origin");t.crossDomain=!0,this.callback(t)},p.prototype.timeoutError=function(){var t=this._timeout,e=new Error("timeout of "+t+"ms exceeded");e.timeout=t,this.callback(e)},p.prototype.withCredentials=function(){return this._withCredentials=!0,this},p.prototype.end=function(t){var e=this,r=this.xhr=f.getXHR(),s=this._query.join("&"),i=this._timeout,a=this._formData||this._data;this._callback=t||n,r.onreadystatechange=function(){if(4==r.readyState){var t;try{t=r.status}catch(n){t=0}if(0==t){if(e.timedout)return e.timeoutError();if(e.aborted)return;return e.crossDomainError()}e.emit("end")}};var h=function(t){t.total>0&&(t.percent=t.loaded/t.total*100),e.emit("progress",t)};this.hasListeners("progress")&&(r.onprogress=h);try{r.upload&&this.hasListeners("progress")&&(r.upload.onprogress=h)}catch(u){}if(i&&!this._timer&&(this._timer=setTimeout(function(){e.timedout=!0,e.abort()},i)),s&&(s=f.serializeObject(s),this.url+=~this.url.indexOf("?")?"&"+s:"?"+s),r.open(this.method,this.url,!0),this._withCredentials&&(r.withCredentials=!0),"GET"!=this.method&&"HEAD"!=this.method&&"string"!=typeof a&&!o(a)){var c=this.getHeader("Content-Type"),l=f.serialize[c?c.split(";")[0]:""];l&&(a=l(a))}for(var p in this.header)null!=this.header[p]&&r.setRequestHeader(p,this.header[p]);return this.emit("request",this),r.send(a),this},p.prototype.then=function(t,e){return this.end(function(r,n){r?e(r):t(n)})},f.Request=p,f.get=function(t,e,r){var n=f("GET",t);return"function"==typeof e&&(r=e,e=null),e&&n.query(e),r&&n.end(r),n},f.head=function(t,e,r){var n=f("HEAD",t);return"function"==typeof e&&(r=e,e=null),e&&n.send(e),r&&n.end(r),n},f.del=function(t,e){var r=f("DELETE",t);return e&&r.end(e),r},f.patch=function(t,e,r){var n=f("PATCH",t);return"function"==typeof e&&(r=e,e=null),e&&n.send(e),r&&n.end(r),n},f.post=function(t,e,r){var n=f("POST",t);return"function"==typeof e&&(r=e,e=null),e&&n.send(e),r&&n.end(r),n},f.put=function(t,e,r){var n=f("PUT",t);return"function"==typeof e&&(r=e,e=null),e&&n.send(e),r&&n.end(r),n},e.exports=f},{emitter:2,reduce:9}],12:[function(t,e,r){"use strict";function n(){this.protocol=null,this.slashes=null,this.auth=null,this.host=null,this.port=null,this.hostname=null,this.hash=null,this.search=null,this.query=null,this.pathname=null,this.path=null,this.href=null}function o(t,e,r){if(t&&u.isObject(t)&&t instanceof n)return t;var o=new n;return o.parse(t,e,r),o}function s(t){return u.isString(t)&&(t=o(t)),t instanceof n?t.format():n.prototype.format.call(t)}function i(t,e){return o(t,!1,!0).resolve(e)}function a(t,e){return t?o(t,!1,!0).resolveObject(e):e}var h=t("punycode"),u=t("./util");r.parse=o,r.resolve=i,r.resolveObject=a,r.format=s,r.Url=n;var c=/^([a-z0-9.+-]+:)/i,l=/:[0-9]*$/,p=/^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,f=["<",">",'"',"`"," ","\r","\n","	"],d=["{","}","|","\\","^","`"].concat(f),m=["'"].concat(d),v=["%","/","?",";","#"].concat(m),y=["/","?","#"],g=255,b=/^[+a-z0-9A-Z_-]{0,63}$/,w=/^([+a-z0-9A-Z_-]{0,63})(.*)$/,O={javascript:!0,"javascript:":!0},x={javascript:!0,"javascript:":!0},_={http:!0,https:!0,ftp:!0,gopher:!0,file:!0,"http:":!0,"https:":!0,"ftp:":!0,"gopher:":!0,"file:":!0},j=t("querystring");n.prototype.parse=function(t,e,r){if(!u.isString(t))throw new TypeError("Parameter 'url' must be a string, not "+typeof t);var n=t.indexOf("?"),o=-1!==n&&n<t.indexOf("#")?"?":"#",s=t.split(o),i=/\\/g;s[0]=s[0].replace(i,"/"),t=s.join(o);var a=t;if(a=a.trim(),!r&&1===t.split("#").length){var l=p.exec(a);if(l)return this.path=a,this.href=a,this.pathname=l[1],l[2]?(this.search=l[2],e?this.query=j.parse(this.search.substr(1)):this.query=this.search.substr(1)):e&&(this.search="",this.query={}),this}var f=c.exec(a);if(f){f=f[0];var d=f.toLowerCase();this.protocol=d,a=a.substr(f.length)}if(r||f||a.match(/^\/\/[^@\/]+@[^@\/]+/)){var C="//"===a.substr(0,2);!C||f&&x[f]||(a=a.substr(2),this.slashes=!0)}if(!x[f]&&(C||f&&!_[f])){for(var k=-1,A=0;A<y.length;A++){var q=a.indexOf(y[A]);-1!==q&&(-1===k||k>q)&&(k=q)}var T,E;E=-1===k?a.lastIndexOf("@"):a.lastIndexOf("@",k),-1!==E&&(T=a.slice(0,E),a=a.slice(E+1),this.auth=decodeURIComponent(T)),k=-1;for(var A=0;A<v.length;A++){var q=a.indexOf(v[A]);-1!==q&&(-1===k||k>q)&&(k=q)}-1===k&&(k=a.length),this.host=a.slice(0,k),a=a.slice(k),this.parseHost(),this.hostname=this.hostname||"";var R="["===this.hostname[0]&&"]"===this.hostname[this.hostname.length-1];if(!R)for(var N=this.hostname.split(/\./),A=0,I=N.length;I>A;A++){var S=N[A];if(S&&!S.match(b)){for(var P="",U=0,H=S.length;H>U;U++)P+=S.charCodeAt(U)>127?"x":S[U];if(!P.match(b)){var D=N.slice(0,A),L=N.slice(A+1),F=S.match(w);F&&(D.push(F[1]),L.unshift(F[2])),L.length&&(a="/"+L.join(".")+a),this.hostname=D.join(".");break}}}this.hostname.length>g?this.hostname="":this.hostname=this.hostname.toLowerCase(),R||(this.hostname=h.toASCII(this.hostname));var G=this.port?":"+this.port:"",M=this.hostname||"";this.host=M+G,this.href+=this.host,R&&(this.hostname=this.hostname.substr(1,this.hostname.length-2),"/"!==a[0]&&(a="/"+a))}if(!O[d])for(var A=0,I=m.length;I>A;A++){var X=m[A];if(-1!==a.indexOf(X)){var z=encodeURIComponent(X);z===X&&(z=escape(X)),a=a.split(X).join(z)}}var B=a.indexOf("#");-1!==B&&(this.hash=a.substr(B),a=a.slice(0,B));var $=a.indexOf("?");if(-1!==$?(this.search=a.substr($),this.query=a.substr($+1),e&&(this.query=j.parse(this.query)),a=a.slice(0,$)):e&&(this.search="",this.query={}),a&&(this.pathname=a),_[d]&&this.hostname&&!this.pathname&&(this.pathname="/"),this.pathname||this.search){var G=this.pathname||"",J=this.search||"";this.path=G+J}return this.href=this.format(),this},n.prototype.format=function(){var t=this.auth||"";t&&(t=encodeURIComponent(t),t=t.replace(/%3A/i,":"),t+="@");var e=this.protocol||"",r=this.pathname||"",n=this.hash||"",o=!1,s="";this.host?o=t+this.host:this.hostname&&(o=t+(-1===this.hostname.indexOf(":")?this.hostname:"["+this.hostname+"]"),this.port&&(o+=":"+this.port)),this.query&&u.isObject(this.query)&&Object.keys(this.query).length&&(s=j.stringify(this.query));var i=this.search||s&&"?"+s||"";return e&&":"!==e.substr(-1)&&(e+=":"),this.slashes||(!e||_[e])&&o!==!1?(o="//"+(o||""),r&&"/"!==r.charAt(0)&&(r="/"+r)):o||(o=""),n&&"#"!==n.charAt(0)&&(n="#"+n),i&&"?"!==i.charAt(0)&&(i="?"+i),r=r.replace(/[?#]/g,function(t){return encodeURIComponent(t)}),i=i.replace("#","%23"),e+o+r+i+n},n.prototype.resolve=function(t){return this.resolveObject(o(t,!1,!0)).format()},n.prototype.resolveObject=function(t){if(u.isString(t)){var e=new n;e.parse(t,!1,!0),t=e}for(var r=new n,o=Object.keys(this),s=0;s<o.length;s++){var i=o[s];r[i]=this[i]}if(r.hash=t.hash,""===t.href)return r.href=r.format(),r;if(t.slashes&&!t.protocol){for(var a=Object.keys(t),h=0;h<a.length;h++){var c=a[h];"protocol"!==c&&(r[c]=t[c])}return _[r.protocol]&&r.hostname&&!r.pathname&&(r.path=r.pathname="/"),r.href=r.format(),r}if(t.protocol&&t.protocol!==r.protocol){if(!_[t.protocol]){for(var l=Object.keys(t),p=0;p<l.length;p++){var f=l[p];r[f]=t[f]}return r.href=r.format(),r}if(r.protocol=t.protocol,t.host||x[t.protocol])r.pathname=t.pathname;else{for(var d=(t.pathname||"").split("/");d.length&&!(t.host=d.shift()););t.host||(t.host=""),t.hostname||(t.hostname=""),""!==d[0]&&d.unshift(""),d.length<2&&d.unshift(""),r.pathname=d.join("/")}if(r.search=t.search,r.query=t.query,r.host=t.host||"",r.auth=t.auth,r.hostname=t.hostname||t.host,r.port=t.port,r.pathname||r.search){var m=r.pathname||"",v=r.search||"";r.path=m+v}return r.slashes=r.slashes||t.slashes,r.href=r.format(),r}var y=r.pathname&&"/"===r.pathname.charAt(0),g=t.host||t.pathname&&"/"===t.pathname.charAt(0),b=g||y||r.host&&t.pathname,w=b,O=r.pathname&&r.pathname.split("/")||[],d=t.pathname&&t.pathname.split("/")||[],j=r.protocol&&!_[r.protocol];if(j&&(r.hostname="",r.port=null,r.host&&(""===O[0]?O[0]=r.host:O.unshift(r.host)),r.host="",t.protocol&&(t.hostname=null,t.port=null,t.host&&(""===d[0]?d[0]=t.host:d.unshift(t.host)),t.host=null),b=b&&(""===d[0]||""===O[0])),g)r.host=t.host||""===t.host?t.host:r.host,r.hostname=t.hostname||""===t.hostname?t.hostname:r.hostname,r.search=t.search,r.query=t.query,O=d;else if(d.length)O||(O=[]),O.pop(),O=O.concat(d),r.search=t.search,r.query=t.query;else if(!u.isNullOrUndefined(t.search)){if(j){r.hostname=r.host=O.shift();var C=r.host&&r.host.indexOf("@")>0?r.host.split("@"):!1;C&&(r.auth=C.shift(),r.host=r.hostname=C.shift())}return r.search=t.search,r.query=t.query,u.isNull(r.pathname)&&u.isNull(r.search)||(r.path=(r.pathname?r.pathname:"")+(r.search?r.search:"")),r.href=r.format(),r}if(!O.length)return r.pathname=null,r.search?r.path="/"+r.search:r.path=null,r.href=r.format(),r;for(var k=O.slice(-1)[0],A=(r.host||t.host||O.length>1)&&("."===k||".."===k)||""===k,q=0,T=O.length;T>=0;T--)k=O[T],"."===k?O.splice(T,1):".."===k?(O.splice(T,1),q++):q&&(O.splice(T,1),q--);if(!b&&!w)for(;q--;q)O.unshift("..");!b||""===O[0]||O[0]&&"/"===O[0].charAt(0)||O.unshift(""),A&&"/"!==O.join("/").substr(-1)&&O.push("");var E=""===O[0]||O[0]&&"/"===O[0].charAt(0);if(j){r.hostname=r.host=E?"":O.length?O.shift():"";var C=r.host&&r.host.indexOf("@")>0?r.host.split("@"):!1;C&&(r.auth=C.shift(),r.host=r.hostname=C.shift())}return b=b||r.host&&O.length,b&&!E&&O.unshift(""),O.length?r.pathname=O.join("/"):(r.pathname=null,r.path=null),u.isNull(r.pathname)&&u.isNull(r.search)||(r.path=(r.pathname?r.pathname:"")+(r.search?r.search:"")),r.auth=t.auth||r.auth,r.slashes=r.slashes||t.slashes,r.href=r.format(),r},n.prototype.parseHost=function(){var t=this.host,e=l.exec(t);e&&(e=e[0],":"!==e&&(this.port=e.substr(1)),t=t.substr(0,t.length-e.length)),t&&(this.hostname=t)}},{"./util":13,punycode:5,querystring:8}],13:[function(t,e,r){"use strict";e.exports={isString:function(t){return"string"==typeof t},isObject:function(t){return"object"==typeof t&&null!==t},isNull:function(t){return null===t},isNullOrUndefined:function(t){return null==t}}},{}],14:[function(t,e,r){function n(e){function r(t){return new Promise(function(r,n){chrome.tabs.sendMessage(e.id,{method:t},r)})}function n(t,e,r,n){var o={title:t,message:e,type:"basic",iconUrl:"/img/extension-icon.png"};(r||n)&&(o.buttons=[{title:"Undo"}]);var s={};chrome.notifications.create(null,o,function(t){s[t]={element:n,page:r},setTimeout(function(){console.log("Deleting... ("+t+")"),delete s[t]},5e3)}),chrome.notifications.onButtonClicked.addListener(function(t,e){if(0===e){var r=s[t];if(!r)return;r.page&&u.deleteRecord("page",r.page),r.element&&u.deleteRecord("element",r.element)}})}function o(t,e){for(var r=0;r<t.length;r++)if(e(t[r]))return t[r];return null}var s,i=t("fieldbook-promise"),a=t("url"),h=t("../../config"),u=new i({user:h.fieldbook.username,password:h.fieldbook.password,book:h.fieldbook.book}),c="page",l="element",p=!0,f=!1,d=!1;r("getPageData").then(function(t){return s=t,u.getSheet(c)}).then(function(t){var e=a.parse(s.url),r=e.href,n=o(t,function(t){return t.domain===e.hostname&&t.path===e.path});if(n)return console.log("samepage"),p=!1,n;var i={domain:e.hostname,path:e.path,protocol:e.protocol,meta:s.meta,title:s.title,url:r};return u.addRecord(c,i)}).then(function(t){if(f=t.id,!s.element)return Promise.resolve(!1);var e=s.element;return e.page=t,u.addRecord(l,e)}).then(function(t){d=t.id;var e,r;p&&t?(e="New Page & Selection Added",r=s.title+':\n\n"'+t.highlighted+'"'):p&&!t?(d=!1,e="New Page Added",r=s.title):!p&&t?(f=!1,e="New Selection Added",r=s.title+':\n\n"'+t.highlighted+'"'):p||t||(f=!1,d=!1,e="Nothing was added",r=""),n(e,r,f,d)})["catch"](function(t){console.log(t)})}chrome.browserAction.onClicked.addListener(n),console.log("background-script")},{"../../config":1,"fieldbook-promise":4,url:12}]},{},[14]);
//# sourceMappingURL=background.js.map
