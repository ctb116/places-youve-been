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
  return this.visitedSeason + this.visitedCompany + this.visitedSights + this.visitedNotes;
}

function resetFields() {
    $("input#new-country").val("");
    $("input#new-city").val("");
    $("input#new-season").val("");
    $("input#new-company").val("");
    $("input#new-sights").val("");
    $("input#new-notes").val("");
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


    $("#travelblog h2").append("<h2>" + newPlaces.fullTravel() + "</h2>");

    
    $("#travelblog ul").append("<li>" + newDetails.visitedSeason + "</li>");
    $("#travelblog ul").append("<li>" + newDetails.visitedCompany + "</li>");
    $("#travelblog ul").append("<li>" + newDetails.visitedSights + "</li>");
    $("#travelblog ul").append("<li>" + newDetails.visitedNotes + "</li>");
// $("ul#addresses").append("<li>" + address.fullAddress() + "</li>");

    $("#travelblog h2").click(function(){
      $("#travelblog ul").toggle();
    });

  resetFields();

  });
});
