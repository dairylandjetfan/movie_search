$(function() {
	// SEARCH/READ
	$('#search-button').on('click', function(event) {
		event.preventDefault();

		var serachInput = $('#search-input');

		$.ajax({
			url: '/movies',
			method: 'POST',
			contentType: 'application/json',
			data: JSON.stringify({ searchText : serachInput.val() }),
			success: function(response) {
				var tbodyEl = $('tbody');

				tbodyEl.html('');

				for (x in response.movies) {
					tbodyEl.append('\
						<tr>\
							<td><input type="text" class="name" value="' +  response.movies[x].Title + '"></td>\
						</tr>\
					');
				};
			}
		});
	});
});