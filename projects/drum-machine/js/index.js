const projectName = 'drum-machine';
localStorage.setItem('example_project', 'Drum Machine');

const keys = {
	81: 'Q',
	87: 'W',
	69: 'E',
	65: 'A',
	83: 'S',
	68: 'D',
	90: 'Z',
	88: 'X',
	67: 'C'
}

$(document).ready(function() {
	$('.drum-pad').click(function() {
		$(this).find('audio')[0].play();
		$('#display').html($(this).data('name'));
	});
	
	$('audio').bind('ended', function() {
		$('#display').html('');
	});

	$('body').keydown(function(event) {
		$('#'+keys[event.which]).trigger('click');
	});
});