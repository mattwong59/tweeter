/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
const tweetData = {
  "user": {
    "name": "Newton",
    "avatars": {
      "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
      "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
      "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
    },
    "handle": "@SirIsaac"
  },
  "content": {
    "text": "If I have seen further it is by standing on the shoulders of giants"
  },
  "created_at": 1461116232227
}

$(function() {
  function createTweetElement(tweet) {
    let $tweet = $('<article>').addClass('tweet');
    let $header = $('<header>');
    let $username = $('<h2>').text(tweet.user.name);
    let $handle = $('<h4>').text(tweet.handle)
    let $avatar = $('<img>')
    let $content = $('<p>').text(tweet.content.text);
    let $footer = $('<footer>');
    let $date = $('<h5>').text(tweet.created_at);

    $('header').appendTo('tweet');
    $('username').appendTo('header');
    $('handle').appendTo('header');
    $('avatar').appendTo('header')
    $('content').appendTo('tweet');
    $('footer').appendTo('tweet');
    $('date').appendTo('footer');

    return $tweet;
    //console.log($tweet);

  }
var $tweet = createTweetElement(tweetData);
$('#tweets-container').append($tweet);

// Test / driver code (temporary)
console.log($tweets);
});


