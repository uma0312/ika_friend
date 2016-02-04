chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
	var response = {data: request.msg};
	console.log("test")

	// 通知を出す
	chrome.notifications.create('', {title:'イカリング',message:request.msg,type:'basic',iconUrl:'./icon.png'}, function(){});
	sendResponse(response);

})