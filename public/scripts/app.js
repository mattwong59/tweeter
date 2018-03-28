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

  var $tweet = createTweetElement(tweetData);

  function createTweetElement(tweet) {

    //Data from tweet
    let username = tweet.user.name;
    let handle = tweet.user.handle;
    let avatar = tweet.user.avatars.small;
    let content = tweet.content.text;
    let day = new Date(tweet.created_at);
    let today = new Date();
    let oneDay = 24*60*60*1000;
    let days = Math.round(Math.abs((day-today)/oneDay)) + ' days ago.'

    let $tweet = $('<article>').addClass('tweet');

    let $header = $('<header>');
    $tweet.append($header);

    let $avatar = $('<img>').addClass('avatar');
    $avatar.attr('src', avatar);
    $header.append($avatar);

    let $username = $('<h2>');
    $username.text(username);
    $header.append($username);

    let $handle = $('<h4>');
    $handle.text(handle);
    $header.append($handle);

    let $content = $('<p>')
    $content.text(content);
    $tweet.append($content);

    let $footer = $('<footer>');
    $tweet.append($footer);

    let $days = $('<h5>')  //.addClass("Days");
    $days.text(days);
    $footer.append($days);

    let $iconHeart = $('<i>').addClass('icon fas fa-heart');
    $days.append($iconHeart);

    let $iconRetweet = $('<i>').addClass('icon fas fa-retweet');
    $days.append($iconRetweet);

    let $iconFlag = $('<i>').addClass('icon fas fa-flag');
    $days.append($iconFlag);

    return $tweet;
  }

$('#tweets-container').append($tweet);

// Test / driver code (temporary)
console.log($tweets);
});


