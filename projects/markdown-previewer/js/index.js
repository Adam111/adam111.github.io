const projectName = "markdown-previewer";
localStorage.setItem('example_project', 'Markdown Previewer');

const renderer = new marked.Renderer();
const linkRenderer = renderer.link;
renderer.link = function(href, title, text) {
	const html = linkRenderer.call(renderer, href, title, text);
	return html.replace(/^<a /, '<a target="_blank" rel="nofollow" ');
};

function parseMarkdown() {
	$('#preview').html(marked($('#editor').val(), { renderer: renderer, gfm: true, breaks: true }));
}

$(document).ready(function() {
	parseMarkdown();
	
  $('#editor').on('change keypress keyup keydown', function() {
		parseMarkdown();
	})
});