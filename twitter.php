<?php
	/** Set access tokens here - see: https://dev.twitter.com/apps/ **/
	// /** Perform a POST request and echo the response **/
	// $twitter = new TwitterAPIExchange($settings);
	// echo $twitter->buildOauth($url, $requestMethod)
	//              ->setPostfields($postfields)
	//              ->performRequest();

	/** Perform a GET request and echo the response **/
	/** Note: Set the GET field BEFORE calling buildOauth(); **/
	// $url = 'https://api.twitter.com/1.1/followers/ids.json';
	// $getfield = '?screen_name=J7mbo';
	// $requestMethod = 'GET';
	// $twitter = new TwitterAPIExchange($settings);
	// echo $twitter->setGetfield($getfield)
	//              ->buildOauth($url, $requestMethod)
	//              ->performRequest();

	$settings = array(
	    'oauth_access_token' => "149079184-CypBdMMuxKBcmeEvCBEC7JBnQm7D9DBcjFchnJsj",
	    'oauth_access_token_secret' => "dffMzyCHkNkJsAHyIQKPYuZwoqFlBZXZu6C91dfTHXDXK",
	    'consumer_key' => "4uZar1TiC1NG8of7dS8MxTWdx",
	    'consumer_secret' => "eUJCkoseed2hnGP4bIS9HKmJ9j65ed3hQ56LwscQpCGQJQrMRo"
	);

	/** URL for REST request, see: https://dev.twitter.com/docs/api/1.1/ **/
	$url = 'https://api.twitter.com/1.1/blocks/create.json';
	$requestMethod = 'POST';

	/** POST fields required by the URL above. See relevant docs as above **/
	$postfields = array(
	    'screen_name' => 'usernameToBlock', 
	    'skip_status' => '1'
	);

	// Your specific requirements
	$url = 'https://api.twitter.com/1.1/search/tweets.json';
	$requestMethod = 'GET';

	ini_set('display_errors', 1);
	require_once('twitter-api-php-master/TwitterAPIExchange.php');
	
	if($_GET["type"] <= 1 && $_GET["type"] > 0) {
		
		$twitter = new TwitterAPIExchange($settings);

		$getfield = '?q=%23haiku&result_type=recent';
		$raw_output = $twitter->setGetfield($getfield)
						->buildOauth($url, $requestMethod)
						->performRequest();

		// include "twitter-api-php-master/index.php";
	}

	if($_GET["type"] <= 2 && $_GET["type"] > 1) {
		$hashtag_val = $_GET["hashtag_val"];
		$handle_val = $_GET["handle_val"];
		$twitter = new TwitterAPIExchange($settings);

		$getfield_custom = '?q=%23'.$hashtag_val.$handle_val.'&result_type=recent';
		$raw_output = $twitter->setGetfield($getfield_custom)
			->buildOauth($url, $requestMethod)
			->performRequest();
	}

	$parsed_output = json_decode($raw_output);
	// $home = file_get_contents("index.html");
	// print json_encode($raw_output);
	

	// include "twitter-api-php-master/TwitterAPIExchange.php";

	print $raw_output;

?>