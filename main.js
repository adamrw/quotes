// $(document).on('ready', function() {
//   var quotes = [
// 	{
// 		author: 'Dick Spinner',
// 		quote: 'This is a fucking quote.',
// 		rating: 4
// 	},
// 	{
// 		author: 'Crack Hore',
// 		quote: 'I want some fucking crack!',
// 		rating: 2
// 	},
// 	{
// 		author: 'Some Bitch',
// 		quote: "I'm a fucking bitch and I want some fucking crack right now!",
// 		rating: 3
// 	}
// ];
// var filteredAuthor = '';


// $(function() {


// 	var renderQuotes = function() {
// 		$("#quotes").empty().append(createQuotesList(quotes, filteredAuthor));
// 	};


// 	var createQuotesList = function(quotes, filteredAuthor) {

// 		var quotesToRender = !filteredAuthor ?
// 			quotes : 
// 			quotes.filter(function(quote) {
// 				return quote.author === filteredAuthor;
// 			});

// 		var quoteItems = quotesToRender.map(function(quote, i) {
// 			return $('<li>').append(createQuote(quotes[i], i));
// 		});

// 		return $('<ul class="list-unstyled">').append(quoteItems);
// 	};


// 	var createQuote = function(quote, i) {
// 		var quoteEl = $('<div class="quote clearfix" data-index="{0}"></div>'.supplant([i]));
// 		var quoteControls = $('<div class="quote-controls"></div>');
// 		var ratingEl = createRating(quote.rating);
// 		var deleteEl = $('<a class="quote-delete btn btn-xs btn-danger">&times;</a>');
// 		var quoteTextEl = $('<q class="quote-text">{quote}</q>'.supplant(quote));
// 		var authorEl = $('<div class="quote-author"><a href="#" class="quote-author-link">-{author}</a></div>'.supplant(quote));

// 		quoteEl.append(quoteTextEl);
// 		quoteEl.append(authorEl);

// 		quoteControls.append(ratingEl);
// 		quoteControls.append(deleteEl);
// 		quoteEl.append(quoteControls);

// 		return quoteEl;
// 	};


// 	var createRating = function(rating) {
// 		var ratingEl = $('<div class="quote-rating">');
// 		var buttonGroup = $('<div class="btn-group btn-group-xs" data-toggle="buttons">');

// 		buttonGroup.append([1,2,3,4,5].map(function(n) {
// 			return createRatingLabel(rating, n);
// 		}))

// 		ratingEl.append(buttonGroup);

// 		return ratingEl;
// 	};

// 	/** Creates a single rating label element to be used in a button group. */
// 	var createRatingLabel = function(rating, n) {
// 		var label = $('<label class="btn btn-default">').text(n);
//     var radio = $('<input type="radio" name="options">').attr('value', n);

//   	label.append(radio);

//   	if(rating === n) {
//   		label.addClass('active');
//   	}
//   	return label;
// 	};


// 	var showByAuthor = function(author) {
// 		$('#author-form-group').addClass('animate-left-collapsed');
// 		$('#author-shown').removeClass('animate-left-collapsed');
// 		$('#author-shown-author').text(author);
// 		$('#inputAuthor').val(author);
// 		$('#inputQuote').focus();
// 	};


// 	var hideByAuthor = function(author) {
// 		$('#author-form-group').removeClass('animate-left-collapsed');
// 		$('#author-shown').addClass('animate-left-collapsed');
// 		$('#inputAuthor').val(author);
// 		$('#inputAuthor').focus();
// 	};


	
// 	var getQuote = function() {
// 		return {
// 			author: $('#inputAuthor').val(),
// 			quote:  $('#inputQuote').val()
// 		};
// 	};


// 	var clearQuoteForm = function() {
// 		$('#add-quote-form input').val('');
// 		clearValidation();
// 		$('#inputAuthor').focus();
// 	};


// 	var clearValidation = function() {
// 		$('#validation-message').addClass('hidden');
// 		$('#add-quote-form .has-error').removeClass('has-error');
// 	};

// 	var validateForm = function() {

// 		clearValidation();

// 		var valid = true;

// 		if($('#inputAuthor').val().length === 0) {
// 			$('#inputAuthor').closest('.form-group').addClass('has-error');
// 			valid = false;
// 		}

// 		if($('#inputQuote').val().length === 0) {
// 			$('#inputQuote').closest('.form-group').addClass('has-error');
// 			valid = false;

// 		}
// 		return valid;
// 	};

	
// 	var displayValidationError = function() {

// 		$('#validation-message')
// 			.removeClass('hidden')
// 			.text('Please fill out all fields.');
// 	};



// 	$('#add-quote-form').on('submit', function(e) {
// 		e.preventDefault();

// 		if(validateForm()) {
// 			quotes.splice(0,0,getQuote());
// 			renderQuotes();
// 			clearQuoteForm();
// 		}
// 		else {
// 			displayValidationError();
// 		}
// 	});


// 	$(document).on('click', '.quote-delete', function() {
// 		$('#random-quote-modal').modal('hide');
// 		var quote = $(this).closest('.quote');
// 		var index = quote.attr('data-index');
// 		quotes.splice(index,1);
// 		renderQuotes();
// 	});


// 	$(document).on('click', '.quote-rating .btn', function() {
// 		var index = $(this).closest('.quote').attr('data-index');
// 		quotes[index].rating = +$(this).text();
// 		quotes.sort(compareByReverseRating);
// 		renderQuotes();
// 	});

	
// 	$(document).on('click', '.quote-author-link', function() {
// 		var author = $(this).text().substring(1);
// 		filteredAuthor = author;
// 		showByAuthor(author);
// 		$('#random-quote-modal').modal('hide');
// 		clearValidation();
// 		renderQuotes();
// 	});


// 	$('#author-shown-close').on('click', function() {
// 		hideByAuthor();
// 		filteredAuthor = '';
// 		renderQuotes();
// 	});

	
// 	$('#random-quote-button').on('click', function() {
// 		var index = Math.floor(Math.random() * quotes.length);
// 		var quote = createQuote(quotes[index], index);
// 		$('#random-quote-modal .modal-body').empty().append(quote);
// 		$('#random-quote-modal').modal('show');
// 	});



// 	quotes.sort(compareByReverseRating);
// 	renderQuotes();
// 	$('#inputAuthor').focus();

// });
// });

$(document).on('ready', function() {

$(function() {

	var getQuoteData = function() {
		var quotes = [
			{
				author: 'Some Dick',
				text: "Go fuck you and your quotes.",
				rating: 4
			},
			{
				author: 'Another Dick.',
				text: "Don't read this dick's quote.",
				rating: 2
			},
			{
				author: 'Last Dick',
				text: "This guy is a maaaajor fucking dick!!!",
				rating: 3
			}
		];

		return quotes;
	};


	var renderQuotes = function(quotes) {

		var filteredQuotes = quotes;
		if(authorFilter.length > 0) {
			filteredQuotes = filter(quotes, function(quote) {
				return quote.author === authorFilter;
			});
		}

		$('#quotes').empty();
		var listEl = $('<ul class="list-unstyled"></ul>');

		for(var i=0; i<filteredQuotes.length; i++) {
			var quote = createQuote(filteredQuotes[i], i);
			var item = $('<li></li>');
			item.append(quote);
			listEl.append(item);
		}

		$('#quotes').append(listEl);
	};

	var createQuote = function(quote, i) {
		var quoteEl = $('<div class="quote" data-index="{0}"></div>'.supplant([i]));
		var textEl = $('<q class="quote-text">{text}</q>'.supplant(quote));
		var authorEl = $('<cite><a href="#" class="quote-author">{author}</a></cite>'.supplant(quote));

		var ratingEl = createRating(quote.rating);
		var deleteEl = $('<a class="quote-delete btn btn-xs btn-danger">&times;</a>');

		quoteEl.append(textEl);
		quoteEl.append(authorEl);
		quoteEl.append(ratingEl);
		quoteEl.append(deleteEl);

		return quoteEl;
	};

	var createRating = function(rating) {
		return $(('<div class="quote-rating"><div class="btn-group btn-group-xs" data-toggle="buttons">' + 
  		'<label class="btn btn-default{0}">' + 
	    	'<input type="radio" name="options" id="rating1" value="1">1' + 
	  	'</label>' + 
	  	'<label class="btn btn-default{1}">' + 
	    	'<input type="radio" name="options" id="rating2" value="2">2' + 
	  	'</label>' + 
	  	'<label class="btn btn-default{2}">' + 
	    	'<input type="radio" name="options" id="rating3" value="3">3' + 
	  	'</label>' + 
	  	'<label class="btn btn-default{3}">' + 
	    	'<input type="radio" name="options" id="rating4" value="4">4' + 
	  	'</label>' + 
	  	'<label class="btn btn-default{4}">' + 
	    	'<input type="radio" name="options" id="rating5" value="5">5' + 
	  	'</label>' + 
		'</div></div>').supplant([
			rating === 1 ? ' active' : '',
			rating === 2 ? ' active' : '',
			rating === 3 ? ' active' : '',
			rating === 4 ? ' active' : '',
			rating === 5 ? ' active' : ''
		]));
	};


	var getFormQuote = function() {
		return {
			author: 	$('#inputAuthor').val(),
			text: 		$('#inputQuote').val(),
			rating: 	null
		};
	};


	$('#add-quote-form').on('submit', function() {
		var newQuote = getFormQuote();
		quotes.push(newQuote);
		renderQuotes(quotes);
		$('#add-quote-form input').val('');
		$('#inputAuthor').focus();
		return false;
	});

	$(document).on('click', '.quote-rating', function() {
		var parent = $(this).parents('[data-index]:first');
		var index = parent.data('index');
		var rating = $('.active input', this).val();
		quotes[index].rating = +rating;

		sortByKeyReverse(quotes, 'rating');
		renderQuotes(quotes);
	});

	$(document).on('click', '.quote-delete', function() {
		var parent = $(this).parents('[data-index]:first');
		var index = parent.data('index');
		quotes.splice(index, 1);
		renderQuotes(quotes);
	});

	$(document).on('click', '.quote-author', function() {
		var author = $(this).text();
		$('#author-shown-name').text(author);
		$('#author-form-group').addClass('animate-left-collapsed');
		$('#author-shown').removeClass('animate-left-collapsed');
		$('#inputAuthor').val(author);

		authorFilter = author;
		renderQuotes(quotes);
	});

	$(document).on('click', '#author-shown-close', function() {
		$('#author-form-group').removeClass('animate-left-collapsed');
		$('#author-shown').addClass('animate-left-collapsed');
		$('#inputAuthor').val('');
		authorFilter = '';
		renderQuotes(quotes);
	});

	var quotes = getQuoteData();
	var authorFilter = '';
	sortByKeyReverse(quotes, 'rating');
	renderQuotes(quotes);

});
});