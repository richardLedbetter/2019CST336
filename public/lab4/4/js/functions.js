var usernameAvailable = false;
var validZipcode = false;

// Populate states

$.ajax({
    method: "GET",
    url: "https://cst336.herokuapp.com/projects/api/state_abbrAPI.php",
    dataType: "json",
    data: { "state": $("#state").val() },
    success: function(result, status) {
        $("#state").html("<option> Select One </option>");
        for (let i = 0; i < result.length; i++) {
            $("#state").append("<option>" + result[i].usps + "</option");
        }
    }
})

// Displaying City from API aafter typing a zip code
$("#zip").on("change", function() {


    $.ajax({

        method: "GET",
        url: "http://cst336.herokuapp.com/projects/api/cityInfoAPI.php",
        dataType: "json",
        data: { "zip": $("#zip").val() },
        success: function(result, status) {

            if (result) {
                $("#city").html(result.city);
                $("#latitude").html(result.latitude);
                $("#longitude").html(result.longitude);
                validZipcode = true;

            }

            else {
                $("#zipcodeNotFound").html("Zip code not found");
                validZipcode = false;
            }


        }

    }); //ajax

});

$("#state").on("change", function() {

    //alert($("state").val());

    $.ajax({
        method: "GET",
        url: "http://cst336.herokuapp.com/projects/api/countyListAPI.php",
        dataType: "json",
        data: { "state": $("#state").val() },
        success: function(result, status) {

            //alert(result[0].county);
            $("#county").html("<option> Select One </option>");
            for (let i = 0; i < result.length; i++) {
                $("#county").append("<option>" + result[i].county + "</option");
            }
        }
    });

});

$("#username").on("change", function() {

    //alert($("#username").val());

    $.ajax({
        method: "GET",
        url: "http://cst336.herokuapp.com/projects/api/usernamesAPI.php",
        dataType: "json",
        data: { "username": $("#username").val() },
        success: function(result, status) {

            if (result.available) {
                $("#usernameError").html("Username is availible!");
                $("#usernameError").css("color", "green");
                usernameAvailable = true;
            }
            else {
                $("#usernameError").html("Username is unavailible!");
                $("#usernameError").css("color", "red");
                usernameAvailable = false;
            }
        }
    })

});

$("#signupForm").on("submit", function(e) {

    if (!isFormValid()) {
        e.preventDefault();
    }
});

function isFormValid() {
    isValid = true;
    if (!usernameAvailable) {
        isValid = false;
    }

    if (!zipcodeNotFound) {
        isValid = false;
    }

    if ($("#username").val().length == 0) {
        isValid = false;
        $("#usernameError").html("Username is required");
    }

    if ($("#password").val() != $("#passwordAgain").val()) {
        $("#passwordAgainError").html("Password Mismatch!");
        isValid = false;
    }

    if ($("#password").val().length < 6) {
        $("#passwordLength").html("Password needs a lenth of 6 or greater!");
        isValid = false;
    }


    return isValid;
}
