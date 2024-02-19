$('#search-button').on('click', function () {
    $.ajax({
        url: 'http://omdbapi.com',
        type: 'get',
        dataType: 'json',
        data: {
            'apikey' : '132wsa',
            's' : $('#search-input').val()
        },
    });
});