function dynamicSort(property) {
    var sortOrder = 1;
    
    if(property[0] === "-") {

        sortOrder = -1;
        property = property.substr(1);
    }
    return function (a,b) {

        var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
        return result * sortOrder;
    }
};

$(function() {
	// SEARCH/READ
	$('#search-button').on('click', function(event) {

		event.preventDefault();
		var serachInput = $('#search-input');

		$.ajax({
			url: '/movies/' + serachInput.val(),
			method: 'GET',
			contentType: 'application/json',
			success: function(response) {

				var tbodyEl = $('tbody');
				tbodyEl.html('');

				if ( !response.results.Error ) {

					response.results.Search.sort(dynamicSort("Title"));

					tbodyEl.append('<tr><td align="center">Place the mouse over the links to see their posters.</td>');

					for (i = 0; response.results.Search.length > i; i++) {

						tbodyEl.append('\
							<li><a href="#">' + response.results.Search[i].Title + ' - ' + response.results.Search[i].Year + '</a><div align="right" class="box"><iframe src="' + response.results.Search[i].Poster + '" width="300px" height="450px"></iframe></div></li>\
						</tr>');
					};

				} else {

					tbodyEl.append('<td align="center">NO RESULTS FOUND.</td>');
				}
			}
		});
	});
});