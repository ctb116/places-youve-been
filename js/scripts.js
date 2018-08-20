// business logic
function Places(country, city, season, company, sights, notes) {
  this.visitedCountry = country;
  this.visitedCity = city;
  this.visitedSeason = season;
  this.visitedCompany = company;
  this.visitedSights = sights;
  this.visitedNotes = notes;

}

Places.prototype.fullTravel = function() {
  return this.visitedCity + ", " + this.visitedCountry;
}


function Details(season, company, sights, notes) {
  this.visitedSeason = season;
  this.visitedCompany = company;
  this.visitedSights = sights;
  this.visitedNotes = notes;

}

Details.prototype.travelBlog = function() {
  return "I visted in " + this.visitedSeason + ". " + "Friends who went with me: " + this.visitedCompany + " I saw several things such as: " + this.visitedSights + " My final thoughts are: " + this.visitedNotes;
}


// front end
$(document).ready(function() {

  $("form#travel").submit(function(event) {
    event.preventDefault();

    var inputtedVisitedCountry = $("#new-country").val();
    var inputtedVisitedCity = $("#new-city").val();
    var newPlaces = new Places(inputtedVisitedCountry, inputtedVisitedCity);

    var inputtedVisitedSeason = $("#new-season").val();
    var inputtedVisitedCompany = $("#new-company").val();
    var inputtedVisitedSights = $("#new-sights").val();
    var inputtedVisitedNotes = $("#new-notes").val();
    var newDetails = new Details(inputtedVisitedSeason, inputtedVisitedCompany, inputtedVisitedSights, inputtedVisitedNotes);

    console.log(newPlaces);
    console.log(newDetails);


    $("#travelblog h2").text(newPlaces.fullTravel());

    $("#travelblog p").text(newDetails.travelBlog());

  });
  // $("#travelblog h2").toggle(function(){
  //   $(".travelInfo").show();

  // });
});
