// business logic
function Place(country, city) {
  this.visitedCountry = country;
  this.visitedCity = city;
}

function Travel(season, company, landmarks, notes) {
  this.visitedSeason = season;
  this.visitedCompany = company;
  this.visitedLandmarks = landmarks;
  this.visitedNotes = notes;
}

Place.prototype.location = function() {
  return this.visitedCity + ", " + this.visitedCountry;
}

Travel.prototype.entry = function() {
  return this.visitedSeason + this.visitedCompany + this.visitedLandmarks + this.visitedNotes;
}

function resetFields() {
    $("input#new-country").val("");
    $("input#new-city").val("");
    $("input#new-season").val("");
    $("input#new-company").val("");
    $("input#new-marks").val("");
    $("input#new-notes").val("");
}


// front end
$(document).ready(function() {

  $("form#travel").submit(function(event) {
    event.preventDefault();

    var inputCountryStr = $("#new-country").val();
    var inputCityStr = $("#new-city").val();
    var newPlace = new Place(inputCountryStr, inputCityStr);


    var inputSeasonStr = $("input.new-season").val();
    var inputCompanyStr = $("input.new-company").val();
    var inputLandmarkStr = $("input.new-marks").val();
    var inputNotesStr = $("input.new-notes").val();
    var newTravel = new Travel(inputSeasonStr, inputCompanyStr, inputLandmarkStr, inputNotesStr);


    $("#locationList ul").append("<li><span class='list'>" + newPlace.location() + "</span></li>");

    $(".list").last().click(function() {
      $("#travelEntry").show();
      $("#travelEntry h2").text(newPlace.location());
      $("#visitedSeason").text(newTravel.visitedSeason);
      $("#visitedCompany").text(newTravel.visitedCompany);
      $("#visitedLandmarks").text(newTravel.visitedLandmarks);
      $("#visitedNotes").text(newTravel.visitedNotes);
  });

    resetFields();
    });
  });
