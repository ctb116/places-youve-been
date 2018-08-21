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
    console.log(newTravel);

    $("#locationList ul").append("<li>" + newTravel.location() + "</li>");

    // $("#travelblog h2").append("<h2>" + newPlaces.fullTravel() + "</h2>");
    //
    //
    // $("#travelblog ul").append("<li>" + newDetails.visitedSeason + "</li>");
    // $("#travelblog ul").append("<li>" + newDetails.visitedCompany + "</li>");
    // $("#travelblog ul").append("<li>" + newDetails.visitedSights + "</li>");
    // $("#travelblog ul").append("<li>" + newDetails.visitedNotes + "</li>");
// $("ul#addresses").append("<li>" + address.fullAddress() + "</li>");


    });
    resetFields();
  });
// });
