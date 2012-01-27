$(document).ready(function () {
	//All our jQuery code goes inside the document ready event
	
	/*
		Everything we do in jQuery goes through the $() function:
		1. We select an element using a Css selector
		2. We do something to that element
		We can write any CSS selector you can think up in the $() function
		
		$('#thing') --> get by id
		$('.thing') --> get by class
		$('dov p') --> get by tags: all the <p> elements inside <div> elements
		$('div p:firstchild') --> the first <p> element inside a <div> element
		etc.
	*/
	
	$('a').on('click', function (ev) {
		console.log('Hello');
	});
	
		
});