// var Twitter = require('twitter');
 
// var client = new Twitter({
//   consumer_key: '4uZar1TiC1NG8of7dS8MxTWdx',
//   consumer_secret: 'eUJCkoseed2hnGP4bIS9HKmJ9j65ed3hQ56LwscQpCGQJQrMRo',
//   access_token_key: '149079184-CypBdMMuxKBcmeEvCBEC7JBnQm7D9DBcjFchnJsj',
//   access_token_secret: 'dffMzyCHkNkJsAHyIQKPYuZwoqFlBZXZu6C91dfTHXDXK'
// });

// var params = {screen_name: 'nodejs'};
// client.get('https://api.twitter.com/1.1/search/tweets.json?q=%23haiku&result_type=recent', params, function(error, tweets, response) {
//   if (!error) {
//     console.log(tweets);
//   }
// });
 
var client = {
  consumer_key: '4uZar1TiC1NG8of7dS8MxTWdx',
  consumer_secret: 'eUJCkoseed2hnGP4bIS9HKmJ9j65ed3hQ56LwscQpCGQJQrMRo',
  access_token_key: '149079184-CypBdMMuxKBcmeEvCBEC7JBnQm7D9DBcjFchnJsj',
  access_token_secret: 'dffMzyCHkNkJsAHyIQKPYuZwoqFlBZXZu6C91dfTHXDXK'
}

// var params = {screen_name: 'nodejs'};
client.get('https://api.twitter.com/1.1/search/tweets.json?q=%23haiku&result_type=recent', params, function(error, tweets, response) {
  if (!error) {
    console.log(tweets);
  }
});

$.ajax({
  url: "https://api.twitter.com/1.1/search/tweets.json?q=%23haiku&result_type=recent",
  context: document.body
}).done(function() {
  $( this ).addClass( "done" );
});

