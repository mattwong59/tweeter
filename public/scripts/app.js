$(function() {
  $('.new-tweet').hide();

  $('form').on('submit', function(event) {
    event.preventDefault();
    let text = $(this).find('textarea').val().trim();
    if (text.length && text.length <= 140) {
      $.post('/tweets', {text}).done(function(response) {
        $('textarea').val('');
        $('#tweets-container').empty();
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
      console.log(tweetsData.length)
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


