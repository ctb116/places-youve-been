// business logic
function Travel(country, city, season, company, landmarks, notes) {
  this.visitedCountry = country;
  this.visitedCity = city;
  this.visitedSeason = season;
  this.visitedCompany = company;
  this.visitedLandmarks = landmarks;
  this.visitedNotes = notes;
}
console.log(Travel())

Travel.prototype.location = function() {
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
    $("input#new-sights").val("");
    $("input#new-notes").val("");
}


// front end
$(document).ready(function() {

  $("form#travel").submit(function(event) {
    event.preventDefault();

    var inputCountryStr = $("#new-country").val();
    var inputCityStr = $("#new-city").val();
    var inputSeasonStr = $("#new-season").val();
    var inputCompanyStr = $("#new-company").val();
    var inputLandmarkStr = $("#new-marks").val();
    var inputNotesStr = $("#new-notes").val();

    var newTravel = new Travel(inputCountryStr, inputCityStr, inputSeasonStr, inputCompanyStr, inputLandmarkStr, inputNotesStr);

    $("#locationList ul").append("<li>" + newTravel.location() + "</li>");

    $("#locationList").last().click(function() {
      $("#travelEntry").show();
      $("#travelEntry h2").text(newTravel.location());
      $("#visitedSeason").text(newTravel.visitedSeason);
      $("#visitedCompany").text(newTravel.visitedCompany);
      $("#visitedLandmarks").text(newTravel.visitedLandmarks);
      $("#visitedNotes").text(newTravel.visitedNotes);
      });
    });
  resetFields();
  });
