$(function(){

	// 3秒後に処理開始
	setTimeout(function(){

		var player_names = "";
		var player_names_array = new Array();

		// オンラインのプレイヤー名を保存
		$(".friend.status-online.status-playing > .friend-name-wrapper > .friend-text-box > .typography-player-name > .text-link").each(function(index, element) {
			var player_name = $(element).text() // プレイヤー名
			player_names += player_name + "\n";
			player_names_array.push(player_name);
		});

		if (player_names !== "") {
			player_names += "がSplatoonをプレイ中です！";
		}

		if (sessionStorage.length === 0) {
			sessionStorage.setItem("online_friends", player_names_array);
			if (player_names === "") {
				chrome.runtime.sendMessage({msg: 'Splatoonをプレイ中のフレンドはいません…'}, function(response) {
    				console.log(response);
				});
			} else {
				chrome.runtime.sendMessage({msg: player_names}, function(response) {
    				console.log(response);
				});
			}
		}
		
		// 前回の確認から変化があれば通知を出す
		if (player_names_array.toString() !== sessionStorage.online_friends.toString()) {
			//console.log("bbb")
			sessionStorage.setItem("online_friends", player_names_array);
			chrome.runtime.sendMessage({msg: player_names}, function(response) {
    			console.log(response);
			});
		} else {
			console.log("No changes");
		}
	}, 3000)
	
	// 30秒後にリロード
	setTimeout(function(){
		location.reload();
	}, 30000)
});