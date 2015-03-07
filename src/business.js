
$(document).ready(function() {
	getIP_data(function(data){
		chrome.extension.sendMessage({name: "setFlag", data: data}, function(response) {
			// Nothing to do - :-(	
		});
	});
});

// get info about our IP 
function getIP_data(callback) {
	var url = 'https://freegeoip.net/json/';
	$.ajax({ 
  		url: url, 
  		type: 'GET', 
  	})
  	.done(function (data) {
		callback(data);
	});
};


