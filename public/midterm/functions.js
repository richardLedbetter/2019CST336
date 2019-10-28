   $(document).ready(function() {
    $('#cancel_dislike').hide();
    $('#cancel_like').hide();
     $("#final_q").hide();
       //Making AJAX call as soon as the page loads to get a random product
       $.ajax({

           method: "GET",
           url: "https://cst336.herokuapp.com/projects/api/videoLikesAPI.php?videoId=EK32jo7i5LQ",
           dataType: "json",
           //data: { },  //data is NOT needed, the end point doesn't use any parameter
           success: function(result, status) {
               console.log(result);
               $("#likes").html(result["likes"]);
               $("#dislikes").html(result["dislikes"]);
           }

       }); //ajax


   }); //document.ready
    $('#see_comments').on("click",show_comments);
    $('#answer_question').on("click",q);
    function q (){
        $("#final_q").show();
    }
    $('#final_q').on("click",up);
    function up(){
        if($("#question").val()!=1){
             $('#page').css("background-color", "red")
        }else{
             $('#page').css("background-color", "green")
        }
       
        
    }
    function show_comments(){
         $.ajax({
           method: "GET",
           url: "https://cst336.herokuapp.com/projects/api/videoLikesAPI.php?videoId=EK32jo7i5LQ&action=comments",
           dataType: "json",
           //data: { "promoCode": $("#promo").val()},
           success: function(result, status) {
               console.log(result);
               for (var i = 0; i < 5; i++) {
                   $("#author_"+(i+1).toString()).html(result[i]['author']);
                   $("#date_"+(i+1).toString()).html(result[i]['date']);
                   $("#text_"+(i+1).toString()).html(result[i]['comment']);
                   for (var j = 0; j < result[i]['rating']; j++) {
                       $("#rating_"+(i+1).toString()).prepend('<img id="rating_1" src="img/star.jpg" />')
                   }
               }
               
           }
       })
    }


   $("#like").on("click", like);

   function like() {
       $('#like').hide();
        $('#cancel_like').show();   
       console.log("clicked");
       $.ajax({
           method: "GET",
           url: "https://cst336.herokuapp.com/projects/api/videoLikesAPI.php?videoId=EK32jo7i5LQ&action=like",
           dataType: "json",
           //data: { "promoCode": $("#promo").val()},
           success: function(result, status) {
               console.log(result);
               $("#likes").html(result["likes"]);
               $("#dislikes").html(result["dislikes"]);
           }
       })
   }

   $("#cancel_like").on("click", cancel_like);

   function cancel_like() {
       console.log("clicked");
        $('#like').show();
        $('#cancel_like').hide();
       $.ajax({
           method: "GET",
           url: "https://cst336.herokuapp.com/projects/api/videoLikesAPI.php?videoId=EK32jo7i5LQ&action=cancel_like",
           dataType: "json",
           //data: { "promoCode": $("#promo").val()},
           success: function(result, status) {
               console.log(result);
               $("#likes").html(result["likes"]);
               $("#dislikes").html(result["dislikes"]);
           }
       })
   }

   $("#dislike").on("click", dislike);

   function dislike() {
       console.log("clicked");
       $('#dislike').hide();
        $('#cancel_dislike').show();
       $.ajax({
           method: "GET",
           url: "https://cst336.herokuapp.com/projects/api/videoLikesAPI.php?videoId=EK32jo7i5LQ&action=dislike",
           dataType: "json",
           //data: { "promoCode": $("#promo").val()},
           success: function(result, status) {
               console.log(result);
               $("#likes").html(result["likes"]);
               $("#dislikes").html(result["dislikes"]);
           }
       })
   }
   
   $("#cancel_dislike").on("click", cancel_dislike);

   function cancel_dislike() {
       console.log("clicked");
       $('#dislike').show();
        $('#cancel_dislike').hide();
       $.ajax({
           method: "GET",
           url: "https://cst336.herokuapp.com/projects/api/videoLikesAPI.php?videoId=EK32jo7i5LQ&action=cancel_dislike",
           dataType: "json",
           //data: { "promoCode": $("#promo").val()},
           success: function(result, status) {
               console.log(result);
               $("#likes").html(result["likes"]);
               $("#dislikes").html(result["dislikes"]);
           }
       })
   }
  
   