function Movie (name, score, release) {
  this.movieTitle = name;
  this.rottenScore = score;
  this.movieYear = release;
}

function Score () {
  this.scoreArray = [];
}

Score.prototype.sortFunction = function() {
  scoreArray.sort(function(a, b) {return a-b});
  return scoreArray;
}

$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    var movieName = $("input#moviename").val();
    var movieScore = parseInt($("input#moviescore").val());
    var movieRelease = $("input#movierelease").val();
    var newMovie = new Movie(movieName, movieScore, movieRelease);

    // var scores = new Score(movieScore);
    var scoreArray = [];
    scores.scoreArray.push(scores);


    $("tbody").append("<tr>" + "<td>" + movieName + "</td>" + "<td>" + movieScore + "</td>" + "<td>" + movieRelease + "</td>" + "</tr>");


    $("p#output").append("<p>" + Score.scoreArray + "<p>");
    // var arrayPoints = [];
    // for (var i=1; i<=movieScore; i++) {
    //   arrayPoints.push(i);
    // }
    //
    // arrayPoints.sort(function(a,b) {
    //   return a-b
    // });


  });
});
