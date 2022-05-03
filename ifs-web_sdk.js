var PageWebApiSdkConf = {"ptid":1,"useOldVer":false,"ref":"web","no_visitor_popup":1,"bizId":"1202000231","level":8,"gameUrl":"https:\/\/news.4399.com\/wmpy\/","uid":123321,"is_adult":3,"ip":"111.18.166.70","sid":1,"gid":800207}; 
var Tools = window.Tools || {}; 
var CountDown = window.CountDown|| {}; 
var PageWebApiSdkStyle = '//s1.img4399.com/webgame/home/fcm/game/style.css?20211109'; 
var PageWebApiSdk = { 
 data: { 
 fcmDialog: "", 
 fcmCountTime: "", 
 mainTitle: "", 
 closeBtn: "", 
 submitBtn: "", 
 tId: "", 
 code: "", 
 doTmpIframe: "", 
 fcmTimeoutTId: "", 
 fcmTid: "", 
 Offline: "", 
 final: "", 
 tmpIframe: "", 
 fcmIframe: "", 
 timeRemaining: "", 
 closePop: "", 
 times: 0, 
 isFirstCount: 0, 
 certifyIframe: "", 
 reload: 0, 
 sendErrNum:0, 
 bottomTimeoutTId:"" 
 }, 
 init: function () { 
 PageWebApiSdk.loadStyle(PageWebApiSdkStyle); 
 PageWebApiSdk.createFcmIframe(); 
 PageWebApiSdk.createFcmDialog(); 
 PageWebApiSdk.closeDialog(); 
 PageWebApiSdk.sendFcmData(PageWebApiSdkConf); 
 }, 
 bottomHandle : function(){ 
 if(PageWebApiSdk.data.sendErrNum ){ 
 clearTimeout(PageWebApiSdk.data.bottomTimeoutTId); 
 PageWebApiSdk.data.bottomTimeoutTId = setTimeout(function () { 
 PageWebApiSdk.sendFcmData(PageWebApiSdkConf); 
 }, 60 * 1000); 
 if(PageWebApiSdk.data.sendErrNum >= 3){ 
 clearTimeout(PageWebApiSdk.data.bottomTimeoutTId); 
 PageWebApiSdk.doBottomData(); 
 } 
 
 } 
 }, 
 doBottomData : function(){ 
 PageWebApiSdkConf.is_adult = -99; 
 PageWebApiSdk.doFcmData({ "result": { 
 "pop_config": [{ 
 "content": "", 
 "title": "防沉迷系统检测异常，请关闭当前游戏页或微端，重新进入游戏" 
 }] 
 }, 
 "code": 203, 
 "message": "禁止游戏提示" 
 }, {}); 
 setTimeout(function () { 
 window.location.href = PageWebApiSdkConf.gameUrl; 
 },5*1000); 
 }, 
 createFcmDialog: function() { 
 var dialogElement = PageWebApiSdk.data; 
 dialogElement.fcmDialog = document.createElement("div"); 
 dialogElement.fcmDialog.className = "sdkDialog "; 
 document.body.appendChild(dialogElement.fcmDialog); 
 }, 
 reRenderFcmDialog: function(obj, code) { 
 PageWebApiSdk.data.fcmIframe.style.cssText += ";display:none"; 
 PageWebApiSdk.data.fcmDialog.style.cssText += ";display:none"; 
 PageWebApiSdk.data.fcmIframe.style.cssText += ";display:block"; 
 PageWebApiSdk.data.fcmDialog.style.cssText += ";display:block"; 
 var html = PageWebApiSdk.renderDialogTmp(obj, code); 
 PageWebApiSdk.data.fcmDialog.innerHTML = html; 
 
 if(code == 203 && obj.before_start && obj.before_start_format&& obj.before_start !=0 ){ 
 CountDown.settime( obj.before_start); 
 PageWebApiSdk.data.fcmDialog.className = "sdkDialog lSdkDialog"; 
 } 
 if(code == 203 && obj.before_start_text ){ 
 PageWebApiSdk.data.fcmDialog.className = "sdkDialog lSdkDialog"; 
 } 
 if (code == 203 && PageWebApiSdkConf.is_adult == -99) { 
 PageWebApiSdk.data.fcmDialog.className = "sdkDialog sSdkDialog"; 
 } 
 }, 
 closeDialog: function(certifyType) { 
 PageWebApiSdk.data.fcmDialog.style.cssText += ';display:none'; 
 if (typeof (certifyType) != 'undefined' && certifyType == 1) { 
 PageWebApiSdk.data.fcmIframe.style.cssText += ';display:none'; 
 } 
 if(PageWebApiSdk.data.code !== 203 ){ 
 PageWebApiSdk.data.fcmIframe.style.cssText += ';display:none'; 
 } 
 if (typeof (certifyType) != 'undefined' && certifyType == 2 ||certifyType == 1 ) { 
 PageWebApiSdk.data.certifyIframe.style.cssText += ';display:none'; 
 } 
 
 }, 
 /* 创建底层iframe */ 
 createFcmIframe: function() { 
 PageWebApiSdk.data.fcmIframe = PageWebApiSdk.createDomIframe(PageWebApiSdk.data.fcmIframe,'//my.4399.com/webgame/home/ifs-web_sdk?getConf=1','fcmIframe'); 
 document.body.appendChild(PageWebApiSdk.data.fcmIframe); 
 }, 
 /* 查询用户防沉迷 */ 
 sendFcmData: function(obj) { 
 PageWebApiSdk.data.sendErrNum++; 
 PageWebApiSdk._JSONP.get("https://apps.4399.com/online/heartbeat?999", obj, function (rs) { 
 PageWebApiSdk.data.sendErrNum = 0; 
 PageWebApiSdk.data.code = rs.code; 
 PageWebApiSdk.doFcmData(rs, obj); 
 }); 
 if(obj.is_adult != 1){ 
 PageWebApiSdk.bottomHandle(); 
 } 
 
 }, 
 doFcmData: function(rs, obj) { 
 if(obj.reload && location){ 
 location.reload(); 
 } 
 var data = rs.result; 
 
 obj.token = data.token; 
 
 PageWebApiSdk.data.times = data.interval; 
 switch (rs.code) { 
 case 100: 
 PageWebApiSdk.doSetInterval(data, obj, 100); 
 break; 
 case 200: 
 PageWebApiSdk.doSetInterval(data, obj); 
 break; 
 case 201: 
 PageWebApiSdk.doSetInterval(data, obj); 
 break; 
 case 202: 
 PageWebApiSdk.doSetInterval(data, obj, 202); 
 break; 
 case 203: 
 PageWebApiSdk.createMaxIframe(); 
 window.onresize = function() { 
 PageWebApiSdk.createMaxIframe(); 
 } 
 
 var popWindow = data.pop_config[0]; 
 PageWebApiSdk.data.final = popWindow.final; 
 if (typeof(popWindow) != "undefined") { 
 PageWebApiSdk.reRenderFcmDialog(popWindow, 203); 
 // PageWebApiSdk.doOffline(PageWebApiSdk.data.final.time, PageWebApiSdk.data.final.url_info); 
 } 
 
 if(PageWebApiSdkConf.useOldVer || Tools.getBrowser() == 'Chrome69-'){ 
 PageWebApiSdk.doSetTimeout(PageWebApiSdk.data.final.time, PageWebApiSdk.data.final.url_info); 
 } 
 break; 
 case 401: 
 alert('参数异常'); 
 break; 
 case 402: 
 if (typeof(obj.token) != 'undefined') { 
 obj.token = ''; 
 } 
 PageWebApiSdk.data.times = 0; 
 PageWebApiSdk.doSetInterval({},obj); 
 break; 
 case 403: 
 PageWebApiSdk.data.times = 0; 
 PageWebApiSdk.doSetInterval({},obj); 
 break; 
 } 
 
 }, 
 createMaxIframe: function() { 
 var $fcmIframe = document.getElementById("fcmIframe"); 
 var swith = document.documentElement.clientWidth * 10; 
 var sheight = document.documentElement.clientHeight * 10; 
 $fcmIframe.style.cssText += ";width:" + swith + "px;height:" + sheight + "px; margin-top:-" + Math.floor(sheight / 2) + "px;margin-left:-" + Math.floor(swith / 2) + "px;"; 
 $fcmIframe.onclick = function() { 
 return false; 
 }; 
 }, 
 doSetTimeout: function(time, urlInfo) { 
 clearTimeout(PageWebApiSdk.data.fcmTimeoutTId); 
 PageWebApiSdk.data.fcmTimeoutTId = setTimeout(function() { 
 if (typeof(urlInfo) != 'undefined') { 
 if (urlInfo.target == '_top') { 
 top.location.href = urlInfo.url; 
 } else { 
 PageWebApiSdk.closeDialog(); 
 } 
 } 
 }, 
 time * 1000); 
 }, 
 doSetTimeoutClose: function () { 
 // clearTimeout(PageWebApiSdk.data.closePop); 
 // PageWebApiSdk.data.closePop = setTimeout(function () { 
 // PageWebApiSdk.closeDialog(); 
 // },10*1000); 
 }, 
 doOffline: function(time, urlInfo) { 
 clearTimeout(PageWebApiSdk.data.Offline); 
 PageWebApiSdk.data.Offline = setTimeout(function() { 
 top.location.href = urlInfo.url; 
 PageWebApiSdk.sendFcmData(PageWebApiSdkConf); 
 }, 
 time * 1000); 
 }, 
 doSetInterval: function(data, obj, code) { 
 if (code == 100) { 
 PageWebApiSdk.closeDialog(); 
 if (typeof(PageWebApiSdk.data.timeRemaining) != "undefined") { 
 for (var j = 0; j < PageWebApiSdk.data.timeRemaining.length; j++) { 
 clearTimeout(PageWebApiSdk.data.timeRemaining[j]); 
 } 
 } 
 if (typeof(PageWebApiSdk.data.offline) != "undefined") { 
 clearTimeout(PageWebApiSdk.data.offline); 
 } 
 return false; 
 } 
 if (code == 202) { 
 if (!PageWebApiSdk.data.isFirstCount) { 
 if (typeof(data.pop_config) != "undefined") { 
 PageWebApiSdk.reRenderFcmDialog(data.pop_config[0]); 
 PageWebApiSdk.doSetTimeoutClose(); 
 } 
 PageWebApiSdk.data.isFirstCount = 1; 
 var timeRemaining = data.time_remaining; 
 if (timeRemaining < data.interval) { 
 PageWebApiSdk.data.times = timeRemaining; 
 } 
 PageWebApiSdk.data.timeRemaining = []; 
 if (typeof (data.countdown) !== "undefined") { 
 for (var i = 0; i < data.countdown.length; i++) { 
 PageWebApiSdk.data.timeRemaining[i] = (function (i) { 
 return setTimeout(function () { 
 if (typeof (data.countdown) != "undefined") { 
 PageWebApiSdk.reRenderFcmDialog(data.countdown[i]); 
 PageWebApiSdk.doSetTimeoutClose(); 
 } 
 }, 
 (timeRemaining - data.countdown[i].moment) * 1000) 
 })(i); 
 } 
 } 
 clearTimeout(PageWebApiSdk.data.offline); 
 PageWebApiSdk.data.offline = setTimeout(function() { 
 if (PageWebApiSdk.data.code != 203) { 
 clearTimeout(PageWebApiSdk.data.offline); 
 return false; 
 } 
 if (typeof(data.offline) != "undefined") { 
 PageWebApiSdk.reRenderFcmDialog(data.offline); 
 PageWebApiSdk.doOffline(data.offline.final.time + timeRemaining, data.offline.final.url_info); 
 } 
 }, 
 timeRemaining * 1000); 
 } 
 } 
 if (PageWebApiSdk.data.times) { 
 if (! (code == 202 && PageWebApiSdk.data.isFirstCount)) { 
 if (typeof(data.pop_config) != "undefined") { 
 PageWebApiSdk.reRenderFcmDialog(data.pop_config[0]); 
 PageWebApiSdk.doSetTimeoutClose(); 
 } 
 } 
 } 
 clearTimeout(PageWebApiSdk.data.fcmTid); 
 PageWebApiSdk.data.fcmTid = setTimeout(function() { 
 PageWebApiSdk.sendFcmData(obj); 
 }, 
 PageWebApiSdk.data.times * 1000); 
 
 }, 
 /* 创建iframe节点 */ 
 createDomIframe : function(carrier,url,name){ 
 carrier = document.createElement("iframe"); 
 carrier.src = url; 
 carrier.frameborder = 0; 
 carrier.className = name; 
 carrier.style.cssText += ";border:0 none; background:#000 none;"; 
 carrier.id = name; 
 return carrier; 
 }, 
 doUserInfo: function (userInfo) { 
 var idcard_state = PageWebApiSdk.getUserIdcardState(userInfo.ori_idcard_state); 
 if(userInfo.code === 30000){ 
 PageWebApiSdk.closeDialog(2); 
 } 
 if (idcard_state) { 
 PageWebApiSdkConf.reload = 1; 
 //PageWebApiSdkConf.is_adult = idcard_state; 
 PageWebApiSdk.closeDialog(1); 
 if(PageWebApiSdk.data.code == 203){ 
 clearTimeout(PageWebApiSdk.data.doTmpIframe); 
 clearTimeout(PageWebApiSdk.data.fcmTid); 
 clearTimeout(PageWebApiSdk.data.Offline); 
 PageWebApiSdk.sendFcmData(PageWebApiSdkConf); 
 } 
 } 
 }, 
 /* 中转iframe数据处理 */ 
 doTmpIframe : function(){ 
 var userInfo; 
 PageWebApiSdk.data.doTmpIframe = setInterval(function() { 
 userInfo = Tools.getCookie(); 
 PageWebApiSdk.doUserInfo(userInfo); 
 }, 
 30000); 
 }, 
 /* 调起实名制弹窗 */ 
 showloginCertify: function () { 
 clearTimeout(PageWebApiSdk.data.closePop); 
 var tmpHost = window.location.host; 
 PageWebApiSdk.closeDialog(); 
 if(PageWebApiSdk.data.certifyIframe !='' ){ 
 document.body.removeChild(PageWebApiSdk.data.certifyIframe); 
 PageWebApiSdk.data.certifyIframe =''; 
 } 
 PageWebApiSdk.data.certifyIframe = PageWebApiSdk.createDomIframe(PageWebApiSdk.data.certifyIframe,'https://ptlogin.4399.com/resource/rnverify.html?refer='+tmpHost+'&top=60&level='+ +PageWebApiSdkConf.level+'&bizId='+PageWebApiSdkConf.bizId,'certifyIframe'); 
 document.body.appendChild(PageWebApiSdk.data.certifyIframe); 
 var $certifyIframe = document.getElementById("certifyIframe"); 
 var swith = document.documentElement.clientWidth * 1; 
 var sheight = document.documentElement.clientHeight * 1; 
 var mTop =Math.floor(sheight / 2); 
 $certifyIframe.style.cssText += ";display:block;width:" + swith + "px;height:" + sheight + "px; margin-top:-" + mTop + "px;margin-left:-" + Math.floor(swith / 2) + "px; position: absolute;top: 50%;left: 50%;z-index: 2021;"; 
 PageWebApiSdk.doCertify(PageWebApiSdk.data.code); 
 }, 
 /* 用户中心状态转化 */ 
 getUserIdcardState : function(idcard_state){ 
 var a = 1; 
 if( idcard_state == '0' ){ 
 a = 3; 
 } 
 if( idcard_state == '1' || idcard_state == '2' || idcard_state == '5' ){ 
 a = 2; 
 } 
 if( idcard_state == '3'){ 
 a = 1; 
 } 
 return a; 
 }, 
 /* 与用户中心的通讯 */ 
 doCertify : function(){ 
 var tmpBrowser = Tools.getBrowser(); 
 if(tmpBrowser == 'IE7' || tmpBrowser == 'IE8' || tmpBrowser == '0' ){ 
 PageWebApiSdk.doTmpIframe(); 
 }else{ 
 window.addEventListener('message',function(e) { 
 var userInfo = e.data; //e.data 里面有自己所传的所有参数 可以根据参数做自己的判断 
 PageWebApiSdk.doUserInfo(userInfo); 
 }); 
 } 
 
 }, 
 /* 渲染弹窗模板 */ 
 renderDialogTmp: function(obj, code) { 
 
var modTime = '', 
 modTip = '', 
 tipLi = '', 
 modBtn = '', 
 btns = '', 
 closeBtn = '', 
 modReminder = ''; 
 if (typeof(obj.tips) != "undefined") { 
 var tips = obj.tips; 
 var len = tips.length; 
 for (var i = 1; i <= len; i++) { 
 tipLi += ' <li>' + tips[i - 1] + '</li>'; 
 } 
 modTip = '<div class="mod-tip">' + ' <h3 class="tip-title">温馨提示：</h3>' + ' <ul class="tip-info">' + tipLi + '</ul>' + ' </div>'; 
 } 
 if (typeof(obj.buttons) != "undefined") { 
 var buttons = obj.buttons; 
 var len = buttons.length; 
 for (var i = 0; i < len; i++) { 
 if (typeof(buttons[i].func) != "undefined" && buttons[i].func == 'wssfxx'){ 
 var tmpBrowser = Tools.getBrowser(); 
 if(tmpBrowser == 'IE7' ){ 
 btns += ' <a href="'+ buttons[i].url_info.url + '" target="_blank" class="btn-fcmprimary" >' + buttons[i].name + '</a>'; 
 }else if(tmpBrowser == 'Chrome69-' ||tmpBrowser == 'Chrome69+' || tmpBrowser == 'IE8' || tmpBrowser == '0' || tmpBrowser == "undefined" || PageWebApiSdkConf.useOldVer){ 
 btns += ' <a href="'+ buttons[i].url_info.url + '" target="' + buttons[i].url_info.target + '" class="btn-fcmprimary" onclick="PageWebApiSdk.closeDialog()" >' + buttons[i].name + '</a>'; 
 }else{ 
 btns += '<span onclick="PageWebApiSdk.showloginCertify()" class="btn-fcmprimary">' + buttons[i].name + '</span>'; 
 } 
} else if (typeof(buttons[i].url_info) != "undefined") { 
 
 btns += ' <a href="' + buttons[i].url_info.url + '" target="' + buttons[i].url_info.target + '" class="btn-fcmprimary" onclick="PageWebApiSdk.closeDialog()">' + buttons[i].name + '</a>'; 
 
 } else { 
 btns += '<span onclick="PageWebApiSdk.closeDialog()" class="btn-fcmprimary">' + buttons[i].name + '</span>'; 
 } 
 } 
 modBtn = ' <div class="mod-btn">' + btns + '</div>'; 
 } 
 if (typeof(obj.close_button) != "undefined") { 
 var close = obj.close_button; 
 var urlInfo = close.url_info; 
 
 if (close.show) { 
 if (typeof(urlInfo) != 'undefined') { 
 closeBtn = '<a href="' + urlInfo.url + '" target="' + urlInfo.target + '" class="close-btn">关闭</a>'; 
 } else { 
 closeBtn = '<span onclick="PageWebApiSdk.closeDialog()" class="close-btn">关闭</span>'; 
 } 
 } 
 } 
 if(code == 203&& obj.before_start_text){ 
 modTime = '<div class="mod-time"> <div class="text">'+ obj.before_start_text +'</div></div>'; 
 } 
 if(code == 203&& obj.before_start && obj.before_start_format&& obj.before_start != 0){ 
 modTime = '<div class="mod-time"><h3 class="time-title">距下次可玩游戏剩余</h3><div id="countdown" class="time"></div></div>'; 
 } 
 
 if(code == 203&&PageWebApiSdkConf.is_adult == 3){ 
 modReminder = '<div class="mod-reminder">身份信息成功提交后，请关闭当前页面/微端，重新进入游戏</div>'; 
 } 
 if(code == 203&& PageWebApiSdkConf.is_adult == 2){ 
 modReminder = '<div class="mod-reminder">如果已经到游戏时段，请关闭当前页面/微端，重新进入游戏</div>'; 
 } 
 
 
var b = ' <div class="fcmdialog">' + closeBtn + 
 ' <h2 class="title">' + obj.title + '</h2>' + 
 ' <div class="stitle">' + obj.content + '</div>' + modTime + modTip + modBtn + modReminder + 
 ' </div>'; 
 
 return b; 
 } 
}; 
PageWebApiSdk._JSONP = (function() { 
 var counter = 0, 
 head, window = this, 
 config = {}; 
 
 function load(url, pfnError) { 
 var script = document.createElement('script'), 
 done = false; 
 script.src = url; 
 script.async = false; 
 var errorHandler = pfnError || config.error; 
 if (typeof errorHandler === 'function') { 
 script.onerror = function(ex) { 
 errorHandler({ 
 url: url, 
 event: ex 
 }) 
 } 
 } 
 script.onload = script.onreadystatechange = function() { 
 if (!done && (!this.readyState || this.readyState === "loaded" || this.readyState === "complete")) { 
 done = true; 
 script.onload = script.onreadystatechange = null; 
 if (script && script.parentNode) { 
 script.parentNode.removeChild(script) 
 } 
 } 
 }; 
 if (!head) { 
 head = document.getElementsByTagName('head')[0] 
 } 
 head.appendChild(script); 
 }; 
 
 function encode(str) { 
 return encodeURIComponent(str) 
 }; 
 
 function jsonp(url, params, callback, callbackName) { 
 var query = (url || '').indexOf('?') === -1 ? '?': '&', 
 key; 
 callbackName = (callbackName || config['callbackName'] || 'callback'); 
 var uniqueName = 'callback_' + new Date().getTime(); 
 params = params || {}; 
 for (key in params) { 
 if (params.hasOwnProperty(key)) { 
 query += encode(key) + "=" + encode(params[key]) + "&" 
 } 
 } 
 window[uniqueName] = function(data) { 
 callback(data); 
 try { 
 delete window[uniqueName] 
 } catch(e) {} 
 window[uniqueName] = null 
 }; 
 load(url + query + callbackName + '=' + uniqueName); 
 return uniqueName 
 }; 
 
 function setDefaults(obj) { 
 config = obj 
 
 }; 
 return { 
 get: jsonp, 
 init: setDefaults 
 } 
} ()); 
 
Tools = { 
 /* 检查浏览器 */ 
 getBrowser: function(){ 
 var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串 
 var isOpera = userAgent.indexOf("Opera") > -1; //判断是否Opera浏览器 
 var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera; //判断是否IE浏览器 
 var isEdge = userAgent.indexOf("Windows NT 6.1; Trident/7.0;") > -1 && !isIE; //判断是否IE的Edge浏览器 
 var isFF = userAgent.indexOf("Firefox") > -1; //判断是否Firefox浏览器 
 var isSafari = userAgent.indexOf("Safari") > -1 && userAgent.indexOf("Chrome") == -1; //判断是否Safari浏览器 
 var isIos = !!userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); 
 var isChrome = userAgent.indexOf("Chrome") > -1 && userAgent.indexOf("Safari") > -1; //判断Chrome浏览器 
 var isUC = userAgent.indexOf('UCBrowser') > -1; 
 var isWX = userAgent.indexOf('MicroMessenger') > -1; 
 if (isUC){ return "UC";} 
 if (isWX){ return "WX";} 
 if (isIE) 
 { 
 var reIE = new RegExp("MSIE (\\d+\\.\\d+);"); 
 reIE.test(userAgent); 
 var fIEVersion = parseFloat(RegExp["$1"]); 
 if(fIEVersion == 7) 
 { return "IE7";} 
 else if(fIEVersion == 8) 
 { return "IE8";} 
 else if(fIEVersion == 9) 
 { return "IE9";} 
 else if(fIEVersion == 10) 
 { return "IE10";} 
 else if(fIEVersion == 11) 
 { return "IE11";} 
 else 
 { return "0"}//IE版本过低 
 }//isIE end 
 
 if (isFF) { return "FF";} 
 if (isOpera) { return "Opera";} 
 if (isSafari) { return "Safari";} 
 if (isChrome) { 
 if(Tools.getChromeVersion()) { 
 var version = Tools.getChromeVersion(); 
 if(version <= 69) { 
 return "Chrome69-"; 
 }else{ 
 return "Chrome69+"; 
 } 
 } 
 } 
 if (isEdge) { return "Edge";} 
 }, 
 getChromeVersion : function() { 
 var arr = navigator.userAgent.split(' '); 
 var chromeVersion = ''; 
 for(var i=0;i < arr.length;i++){ 
 if(/chrome/i.test(arr[i])) 
 chromeVersion = arr[i] 
 } 
 if(chromeVersion){ 
 return Number(chromeVersion.split('/')[1].split('.')[0]); 
 } else { 
 return false; 
 } 
 }, 
 getCookie: function (name) { 
 if (document.cookie.indexOf("uid")) { 
 var arr = [],tmpArr=[],obj ={}; 
 arr = document.cookie.split(';'); 
 for(var i = 0 ; i<arr.length;i++){ 
 tmpArr = arr[i].split('='); 
 obj[tmpArr[0]]=tmpArr[1]; 
 } 
 return obj 
 } else { 
 return null 
 } 
 } 
}; 
 
CountDown = { 
 btnCountDown : '', 
 time : '', 
 defaultTime : '100005', 
 settime : function(seconds){ 
 
 var ctx = this; 
 var text = ''; 
 
 if(typeof(seconds)=='undefined'){ 
 seconds = seconds || ctx.defaultTime; 
 } 
 
 
 ctx.formatTime(seconds); 
 ctx.counting = 1; 
 
 if(seconds <= 0){ 
 document.getElementById("countdown").innerHTML= "可以开始愉快的游戏时间啦"; 
 PageWebApiSdkConf["token"]=""; 
 PageWebApiSdkConf.reload = 1; 
 PageWebApiSdk.sendFcmData(PageWebApiSdkConf); 
 clearTimeout(ctx.timer); 
 return false; 
 } 
 seconds--; 
 ctx.timer = setTimeout(function() { 
 ctx.settime(seconds); 
 
 },1000); 
 
 }, 
 formatTime : function (seconds) { 
 var ctx = this; 
 var time = [ 
 parseInt(seconds / 60 / 60), 
 parseInt(seconds / 60 % 60), 
 parseInt(seconds % 60) 
 ].join(":").replace(/\b(\d)\b/g, "0$1"); 
 var _arr = time.split(':'); 
 var str = + _arr[1] + '分钟' + _arr[2] + '秒'; 
 document.getElementById("countdown").innerHTML= str; 
 } 
} 
 
PageWebApiSdk.loadStyle = function(url) { 
 var link = document.createElement('link'); 
 var head = document.getElementsByTagName('head')[0]; 
 link.type = 'text/css'; 
 link.rel = 'stylesheet'; 
 link.href = url; 
 head.appendChild(link); 
}; 
 
PageWebApiSdk.init();