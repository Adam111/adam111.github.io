$(document).ready(function() {
	$('#contact-form').submit(function(event) {
		event.preventDefault();
		grecaptcha.reset();
		grecaptcha.execute();
	});
});

function onloadCallback() {
	grecaptcha.render('recaptcha', {
		'sitekey': '6Lew3SMUAAAAAJ82QoS7gqOTkRI_dhYrFy1f7Sqy',
		'callback': onSubmit,
		'size': 'invisible'
	});
}

function onSubmit(token) {
	$('#submit-button').attr('disabled', 'disabled').html('<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> <span>Sending...</span>');
	$('#contact-form-result .alert').alert('close');

	$.ajax({
		url: 'https://usebasin.com/f/f8a55f3aacfc.json',
		method: 'POST',
		data: {
			'Name': $('#name').val(),
			'Email': $('#email').val(),
			'Message': $('#message').val(),
			'g-recaptcha-response': token
		},
		dataType: 'json'
	})
	.done(function() {
		$('#submit-button').removeAttr('disabled').html('Send');
		$('#contact-form-result').html('<div class="alert alert-success alert-dismissible fade show mt-2 mb-0" role="alert"><span>Email sent successfully.</span><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>');
		// $('#name, #email, #message').val('');
		$('#contact-form').trigger('reset');
	})
	.fail(function() {
		$('#submit-button').removeAttr('disabled').html('Send');
		$('#contact-form-result').html('<div class="alert alert-danger alert-dismissible fade show mt-2 mb-0" role="alert"><span>Error. Please try again.</span><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>');
	});
}