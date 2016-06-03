/*
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
	var response = {data: request.msg};
	console.log("test")

	// 通知を出す
	chrome.notifications.create('', {title:'イカリング',message:request.msg,type:'basic',iconUrl:'./icon.png'}, function(){});
	sendResponse(response);

})
*/
//$(function(){
	chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
		var response = {data: request.msg};
		console.log("test")

		// 通知を出す
		console.log(notify.isSupported);
		//notify.config({autoClose: 0}); // 1000000[ミリ秒後]に通知を閉じる
		notify.createNotification( 'イカリング', { body: request.msg, icon: './icon.png' } );
		sendResponse(response);
	})
//})