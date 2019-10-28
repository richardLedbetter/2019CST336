$(document).ready(function() {
    
    var score = 0;

    $("button").on("click", gradeQuiz);

    //Question 5 images
    $(".q5Choice").on("click", function() {
        $(".q5Choice").css("background", "");
        $(this).css("background", "rgb(255, 255, 0)");
    });

    //Question 4 shuffle
    displayQ4Choices();

    //Question 8 shuffle
    displayQ8Choices();

    function displayQ4Choices() {
        let q4ChoicesArray = ["Maine", "Rhode Island", "Maryland", "Delaware"];
        q4ChoicesArray = _.shuffle(q4ChoicesArray);

        for (let i = 0; i < q4ChoicesArray.length; i++) {
            $("#q4Choices").append(` <input type="radio" name="q4" id="${q4ChoicesArray[i]}"
                        value="${q4ChoicesArray[i]}"> <label for="${q4ChoicesArray[i]}"> ${
                            q4ChoicesArray[i]}</label>`);
        }
    }

    function displayQ8Choices() {
        let q8ChoicesArray = ["Bald Eagle", "Lion", "Unicorn", "Elephant"];
        q8ChoicesArray = _.shuffle(q8ChoicesArray);

        for (let i = 0; i < q8ChoicesArray.length; i++) {
            $("#q8Choices").append(` <input type="radio" name="q8" id="${q8ChoicesArray[i]}"
                        value="${q8ChoicesArray[i]}"> <label for="${q8ChoicesArray[i]}"> ${
                            q8ChoicesArray[i]}</label>`);
        }
    }

    function gradeQuiz() {

        $("#validationFdbk").html("");

        function rightAnswer(index) {
            $(`#q${index}Feedback`).html("Correct!");
            $(`#q${index}Feedback`).attr("class", "bg-success text-white");
            $(`#markImg${index}`).html("<img src='img/checkmark.png' alt='checkmark'>");
            score += 20;
        }

        function rightAnswer2(index) {
            $(`#q${index}Feedback`).html("Correct!");
            $(`#q${index}Feedback`).attr("class", "bg-success text-white");
            $(`#markImg${index}`).html("<img src='img/checkmark.png' alt='checkmark'>");
            score += 12.5;
        }

        function wrongAnswer(index) {
            $(`#q${index}Feedback`).html("Incorrect!");
            $(`#q${index}Feedback`).attr("class", "bg-warning text-white");
            $(`#markImg${index}`).html("<img src='img/xmark.png' alt='xmark'>");
        }

        //variables
        score = 0;
        let q1Response = $("#q1").val().toLowerCase();
        let q2Response = $("#q2").val();
        let q4Response = $("input[name=q4]:checked").val();
        let q6Response = $("#q6").val();
        let q7Response = $("#q7").val().toLowerCase();
        let q8Response = $("input[name=q8]:checked").val();

        //Question 1
        if (q1Response == "sacramento") {
            rightAnswer(1);
        }
        else {
            wrongAnswer(1);
        }

        //Question 2
        if (q2Response == "mo") {
            rightAnswer(2);
        }
        else {
            wrongAnswer(2);
        }

        //Question 3
        if ($("#Jefferson").is(":checked") && $("#Roosevelt").is(":checked") &&
            !$("#Jackson").is(":checked") && !$("Franklin").is(":checked")) {
            rightAnswer(3);
        }
        else {
            wrongAnswer(3);
        }

        //Question 4
        if (q4Response == "Rhode Island") {
            rightAnswer(4);
        }
        else {
            wrongAnswer(4);
        }

        //Question 5
        if ($("#seal2").css("background-color") == "rgb(255, 255, 0)") {
            rightAnswer(5);
        }
        else {
            wrongAnswer(5);
        }

        //Question 6
        if (q6Response == "ca") {
            rightAnswer2(6);
        }
        else {
            wrongAnswer(6);
        }

        //Question 7
        if (q7Response == "barack obama") {
            rightAnswer2(7);
        }
        else {
            wrongAnswer(7);
        }

        //Question 8
        if (q8Response == "Bald Eagle") {
            rightAnswer2(8);
        }
        else {
            wrongAnswer(8);
        }

        // Change text color
        if (score < 80) {
            $("#totalScore").css("color", "red");
        }
        else {
            $("#totalScore").css("color", "green");
            
            if (score => 100) {
                $("#congrats").html("Congratulations on 100!!!")
            }
        }

        $("#totalScore").html(`Total Score: ${score}`);
         $(function(){
           // localStorage.clear();
            let prev_scores = "";
            if(window.localStorage){
                prev_scores = window.localStorage.getItem("prev_scores")||"";
                //null collilessions ???
                //$("h1").html("counter");
            }else{
                //counter = parseInt($("h1").html()||0);
            }
            console.log("scores:",typeof prev_scores)
            prev_scores = prev_scores+","+String(score);
            if(window.localStorage){
                window.localStorage.setItem("prev_scores",prev_scores);
            }
            console.log("scores",prev_scores)
            $('#prev_scores').html(`previous scores: ${prev_scores}`);
           // localStorage.clear();
           
            
        })
    }

});
