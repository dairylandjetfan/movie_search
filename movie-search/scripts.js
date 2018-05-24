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

				if ( !response.results.Error) {

					response.results.Search.sort(dynamicSort("Title"));

					for (i = 0; response.results.Search.length > i; i++) {
						tbodyEl.append('\
							<li>' + response.results.Search[i].Title + '</li>\
						');
					};
				}
			}
		});
	});
});