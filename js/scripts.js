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
  return this.visitedCountry + " " + this.visitedCity;
}


// front end
$(document).ready(function() {

  $("form#travel").submit(function(event) {
    event.preventDefault();

    var inputtedVisitedCountry = $("#new-country").val();
    var inputtedVisitedCity = $("#new-city").val();
    var inputtedVisitedSeason = $("#new-season").val();
    var inputtedVisitedCompany = $("#new-company").val();
    var inputtedVisitedSights = $("#new-sights").val();
    var inputtedVisitedNotes = $("#new-notes").val();
    var newPlaces = new Places(inputtedVisitedCountry, inputtedVisitedCity, inputtedVisitedSeason, inputtedVisitedCompany, inputtedVisitedNotes);

    console.log(newPlaces);

    $("#travelblog h2").text(newPlaces.fullTravel());

  });
});
