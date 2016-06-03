var player_names = "";
var player_names_array = new Array();

$.getJSON("https://splatoon.nintendo.net/friend_list/index.json", function(json){
	$.each(json, function(key, value) {
		console.log(value.mii_name);
		player_names += value.mii_name + '\n';
		player_names_array.push(value.mii_name);
	});
});

console.log(sessionStorage.online_friends === void 0);
player_names += 'がSplatoonをプレイ中です！'

if (String(player_names_array) !== String(sessionStorage.online_friends)) {
	if (player_names !== "") {
		chrome.runtime.sendMessage({msg: player_names}, function(response) {
			console.log(response);
		});
	} else {
		chrome.runtime.sendMessage({msg: 'Splatoonをプレイ中のフレンドはいません…'}, function(response) {
			console.log(response);
		});
	}
}
	
// 30秒後にリロード
setTimeout(function(){
	location.reload();
}, 30000)