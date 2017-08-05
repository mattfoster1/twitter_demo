var output = [];
var handleClick;
var live_element;

$(document).ready(function(){
	// call_twitter_api();
	initBtns();
	handleClick = 'ontouchstart' in document.documentElement ? 'touchstart': 'click';
	initSubmitBtn();
})

function initSubmitBtn() {
	$('#btn_submit-hashtag, #btn_submit-handle').on(handleClick, function(e){
		live_element = e.target.id;
		go();	
	});
	$('form input').keypress(function(e) {
		if (e.charCode == 13) {
			live_element = e.target.id;
			go();
		}
	})

	function go(live_element) {
		if ($('#search_term').attr('value').length > 1) { // checks content filled
			custom_call();
		} else {
			alert("Please enter a search term");
		}
	}
}


function custom_call() {
		var hashtag_call = "&hashtag_val=" + $("#search_term").attr("value");
		var handle_call = "";

	console.log(hashtag_call + ", " + handle_call);
	
	var data;
		$.ajax({
		  url: "twitter.php?type=2"+hashtag_call + handle_call,
		  data: data,
		  success: function(result) {
		  	if (result) {
				var data1 = JSON.parse(result)
				console.log(data1);
				console.log(data1.statuses[0]);
				console.log(data1.statuses[0].entities.urls[0].expanded_url);
				console.log(data1.statuses[0].user.profile_image_url);
				for (var i = $('#ticker .tweet_copy').length; i > 0; i--) {
					var obj = { tweet: data1.statuses[i].text, screen_name: data1.statuses[i].user.screen_name };
					output.push(obj);
				}
				console.log($('#handle').attr('value').length);
				if ($('#handle').attr('value').length > 1) { // checks content filled
					for (var i = 0; i < data1.length; i++) {
						if (data1[i].user.screen_name != $('#handle').attr('value')) {
							data1.splice(i, 1)
						}
					}
				}
				// output[2].screen_name = data1.statuses[2].user.screen_name;
				populateTicker(output);
				output = [];
				console.log(output);
		  	} else {
		  		console.log("___no data___");
		  		return "...0";
		  	}
		}
	});
}


function populateTicker(output) {
	for (var i = $('#ticker .tweet_copy').length; i > 0; i--) {
		console.log("___" + i);
		// if ($('#tweet_copy_1' + i).html().length == 0) {
			$('#tweet_copy_' + i).html(output[i-1].screen_name + ' says : "' + output[i-1].tweet + '"');
			// console.log(output[i]);
		// }
	}
	console.log(output);
}

// ticks along the page. When animation finishes, call_twitter_api(); again


function call_twitter_api() {
	var data;
		$.ajax({
		  url: "twitter.php?type=1",
		  data: data,
		  success: function(result) {
		  	if (result) {
		  		var data1 = JSON.parse(result)
		  		output.push(data1.statuses[0].text);
		  		output.push(data1.statuses[1].text);
		  		output.push(data1.statuses[2].text);
		  		// console.log(output);
		  		populateTicker(output);
		  	} else {
		  		console.log("___no data___");
		  		return "...0";
		  	}
		}
	});
}

function initBtns() {
	$('#btn_submit-hashtag').click(function(){
		show_notification();
	})
}

function show_notification() {
	// 1. populate with ticker_2's content
	// 2. appear
	// 3. disappear
	// 4. Repeat 2&3 every 20s
}