const data = [
  {
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
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": {
        "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
        "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
        "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
      },
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  },
  {
    "user": {
      "name": "Johann von Goethe",
      "avatars": {
        "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
        "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
        "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
      },
      "handle": "@johann49"
    },
    "content": {
      "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
    },
    "created_at": 1461113796368
  }
];

$(function() {
  $('.new-tweet').hide();

  $('form').on('submit', function(event) {
    event.preventDefault();
    const text = $(this).find('textarea').val().trim();
    if (text.length && text.length <= 140) {
      $.post('/tweets', {text}).done(function(response) {
        $('textarea').val('');
        loadTweets();
        });
    } else if (text.length > 140) {
        $.flash("Your tweets too long. Tweet must be 140 characters or less!");
    } else {
        $.flash("Please input some text to send out your tweet.");
    }
  })
//GET REQUEST TO /TWEETS
  function loadTweets() {
    $.get('/tweets').done(function(tweetsData) {
      renderTweets(tweetsData);
    });
  }
  loadTweets();

  function renderTweets(tweets) {
    for (let eachTweet in tweets) {
      let tweet = tweets[eachTweet];
      let newTweet = createTweetElement(tweet);
      $('#tweets-container').prepend(newTweet);
    }
  }

  function createTweetElement(tweet) {
    //Data from tweet
    let username = tweet.user.name;
    let handle = tweet.user.handle;
    let avatar = tweet.user.avatars.small;
    let content = tweet.content.text;
    let time = moment(tweet.created_at).fromNow();

    let $tweet = $('<article>').addClass('tweet');

    let $header = $('<header>');
    $tweet.append($header);

    let $avatar = $('<img>').addClass('avatar');
    $avatar.attr('src', avatar);
    $header.append($avatar);

    let $username = $('<h2>').addClass('userName');
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

    let $time = $('<h5>')
    $time.text(time);
    $footer.append($time);

    let $iconHeart = $('<i>').addClass('icon fas fa-heart');
    $time.append($iconHeart);

    let $iconRetweet = $('<i>').addClass('icon fas fa-retweet');
    $time.append($iconRetweet);

    let $iconFlag = $('<i>').addClass('icon fas fa-flag');
    $time.append($iconFlag);

    return $tweet;
  }

});


