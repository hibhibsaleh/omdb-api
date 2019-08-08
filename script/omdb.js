$( document ).ready(function() {
    console.log("ready!");
});

function searchBy() {
    $("#returned").empty();
    $("#image").empty();
    $("#filmInfo").empty();

    let searchString = $("#searchBar").val();

    if ($("#quicksearch option:selected").val() == 'all') {

        var jqxhrAll = $.get(`http://www.omdbapi.com/?apikey=3c431273&type=movie&s=${searchString}`);

        jqxhrAll.done(function(response) {
            let searchAll = response.Search

            console.log(typeof(response.Search));

            console.log(response);

            for (i in searchAll) {
                $("#returned").append(`<div>
                    <br>
                    <img src='${searchAll[i].Poster}'/>
                    <b>${searchAll[i].Title}</b>,
                    ${searchAll[i].Year}
                </div>`);
            }
        });
     } else if ($("#quicksearch option:selected").val() == 'titles') {

        var jqxhrTitle = $.get(`http://www.omdbapi.com/?apikey=3c431273&type=movie&t=${searchString}`);

        jqxhrTitle.done(function(response) {

            console.log(typeof(response));

            console.log(response);

            $("#image").append(`<div>
                <img src='${response.Poster}'/>
                </div>`);

            $("#filmInfo").append(`<div>
                <b>Title:</b> ${response.Title}<br>
                <b>Year:</b> ${response.Year}<br>
                <b>Rated:</b> ${response.Rated}<br>
                <b>Released:</b> ${response.Released}<br>
                <b>Runtime:</b> ${response.Runtime}<br>
                <b>Genre:</b> ${response.Genre}<br>
                <br>
                <b>Director:</b> ${response.Director}<br>
                <b>Writer:</b> ${response.Writer}<br>
                <b>Cast:</b> ${response.Actors}<br>
                <br>
                <b>Plot:</b> ${response.Plot}<br>
                <b>Language:</b> ${response.Language}<br>
                <b>Country:</b> ${response.Country}<br>
                <br>
                <b>Awards:</b> ${response.Awards}<br>
                </div>`);
        });
    }
}