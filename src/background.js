function startExtension(idTable, changeInfo, tab) {
	chrome.pageAction.show(idTable);
}
chrome.tabs.onUpdated.addListener(startExtension);

// Listeners
chrome.extension.onMessage.addListener(
	function(request, sender, sendResponse)
	{
		switch (request.name)
		{
		case "setFlag":
			if (request.data !== "") {
				changeIP(request.data)
				chrome.browserAction.setTitle({
					title: request.data.ip + "\n" + request.data.country_name
				});
				chrome.browserAction.setIcon({ 
          			path: "images/iconFlags/24/" + request.data.country_code + ".png"
          		});
      		}
			
		break;
			default:
			sendResponse({});
		}
	}
);

// Onclick
chrome.browserAction.onClicked.addListener(
	function(tab) {
		chrome.browserAction.setBadgeText({text: ""});
		changesCounter = 0;
	}
);

function changeIP(data) {
	if (old_IP == "" ) {
		old_IP = data.ip;
	} else if (old_IP !== data.ip ) {
		changesCounter++;
		chrome.browserAction.setBadgeText({text: changesCounter.toString()});
		old_IP = data.ip;
	}
}

var old_IP = "";
var changesCounter = 0;

