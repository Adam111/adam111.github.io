// const projectName = 'random-quote-machine';
// localStorage.setItem('example_project', 'Random Quote Machine');

var quotes;

$(document).ready(function() {
	$.getJSON('./json/quotes.json', function(data) {
		quotes = data;

		getQuote();
	});

	$('#new-quote').click(function() {
		getQuote();
	});
});

function getQuote() {
	var i = randomIntFromInterval(0, quotes.length);
	var quote = quotes[i]['text'];
	var author = quotes[i]['author'];
	var tweetText = '"' + quote + '" - ' + author;

	$('blockquote p').html(quote);
	$('blockquote footer cite').html(author).attr('title', author);
	$('#tweet-quote').attr('href', 'https://twitter.com/intent/tweet?text=' + encodeURIComponent(tweetText));
}

function randomIntFromInterval(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}