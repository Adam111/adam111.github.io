const projectName = 'javascript-calculator';
localStorage.setItem('example_project', 'Javascript Calculator');

const keys = {
	48: 'zero',
	96: 'zero',
	49: 'one',
	97: 'one',
	50: 'two',
	98: 'two',
	51: 'three',
	99: 'three',
	52: 'four',
	100: 'four',
	53: 'five',
	101: 'five',
	54: 'six',
	102: 'six',
	55: 'seven',
	103: 'seven',
	56: 'eight',
	104: 'eight',
	57: 'nine',
	105: 'nine',
	190: 'decimal',
	110: 'decimal',
	107: 'add',
	109: 'subtract',
	106: 'multiply',
	111: 'divide',
	13: 'equals',
	46: 'clear'
}

var input = 0;
var operation = '';
var operator = '';

function decimalNumber(number) {
	return /\./g.test(number);
}

function handleNumber(number) {
	if (input.toString().length < 14) {
		if (decimalNumber(input)) {
			input = input.toString() + number;
		} else {
			input = (input === 0 ? number : parseFloat(input.toString() + number));
		}

		$('#display').html(input);
	}
}

function handleOperator(operatorThis) {
	if (operator === '=') {
		operation = '(' + operation + ')' + operatorThis;
	} else if (input === 0 && operator !== '') {
		operation = operation.replace(/.$/, operatorThis);
	} else {
		operation += input + operatorThis;
	}
	
	operator = operatorThis;
	input = 0;
	
	$('#operation').html(operation.length > 14 ? '...' + operation.substring(operation.length - 14) : operation);
	$('#display').html(input);
}

$(document).ready(function() {
	$('#clear').click(function() {
		input = 0;
		operation = '';
		operator = '';
		$('#operation').html('&nbsp;');
		$('#display').html('0');
	});

	$('#equals').click(function() {
		if (operator !== '=') {
			operation += input;
			operator = '=';
		}
		
		input = eval(operation);
		
		$('#operation').html(operation.length > 14 ? '...' + operation.substring(operation.length - 14) : operation);
		$('#display').html(input.toString().length > 14 ? Number.parseFloat(input).toPrecision(10).replace(/0+$/, '') : input);
	});

	$('#decimal').click(function() {
		if (!decimalNumber(input)) {
			input = input + '.';
			$('#display').html(input);
		}
	});
	
	$('#add').click(function() {
		handleOperator('+');
	});
	
	$('#subtract').click(function() {
		handleOperator('-');
	});
	
	$('#multiply').click(function() {
		handleOperator('*');
	});
	
	$('#divide').click(function() {
		handleOperator('/');
	});
	
	$('#zero').click(function() {
		handleNumber(0);
	});
	
	$('#one').click(function() {
		handleNumber(1);
	});
	
	$('#two').click(function() {
		handleNumber(2);
	});
	
	$('#three').click(function() {
		handleNumber(3);
	});
	
	$('#four').click(function() {
		handleNumber(4);
	});
	
	$('#five').click(function() {
		handleNumber(5);
	});
	
	$('#six').click(function() {
		handleNumber(6);
	});
	
	$('#seven').click(function() {
		handleNumber(7);
	});
	
	$('#eight').click(function() {
		handleNumber(8);
	});
	
	$('#nine').click(function() {
		handleNumber(9);
	});

	$('body').keydown(function(event) {
		// event.preventDefault();
		$('#'+keys[event.which]).trigger('click');
	});
});