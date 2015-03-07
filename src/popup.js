document.addEventListener('DOMContentLoaded', function init() 
{
    var changesCounter = chrome.extension.getBackgroundPage().changesCounter;
	var msgIP = "Last <b>" + changesCounter + "</b> IP's changes <br/>" 
	msgIP += chrome.extension.getBackgroundPage().msgIP;
	document.getElementById("messageIP").innerHTML = msgIP;
	
	chrome.extension.getBackgroundPage().changesCounter = 0;
	chrome.extension.getBackgroundPage().msgIP = "";
	chrome.browserAction.setBadgeText({text: ""});
	chrome.browserAction.disable();
});

