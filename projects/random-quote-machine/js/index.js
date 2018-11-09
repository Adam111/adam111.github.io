$(document).ready(function() {
  getQuote();
});

$('#new_quote').click(function() {
  getQuote();
});

function getQuote() {
  $.getJSON('https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&_='+$.now(), function(data) {
    var quote = $.trim($($.parseHTML(data[0].content)).text());
    var author = data[0].title;
    var tweetText = '"' + quote + '" - ' + author;
    
    $('blockquote p').html(quote);
    $('blockquote footer cite').html(author).attr('title', author);
    $('#tweet_quote').attr('href', 'https://twitter.com/intent/tweet?text=' + encodeURIComponent(tweetText));
  });
}