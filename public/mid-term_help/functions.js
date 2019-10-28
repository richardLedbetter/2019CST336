
        $(document).ready(function(){

            //Event Listeners
            $(".qty").change(calculateTotal);
            $("#shipping").on("change", calculateTotal);
            $("#applyPromo").click(getDiscount);

            //Global Variables
            var discount = 0;


            //Making AJAX call as soon as the page loads to get a random product
            $.ajax({

                method: "GET",
                   url: "https://cst336.herokuapp.com/projects/api/promo_products.php",
              dataType: "json",
                  //data: { },  //data is NOT needed, the end point doesn't use any parameter
               success: function(result,status) {
                    let index = Math.floor(Math.random() * result.length);
                    $("#product").html(result[index].productName);
                    $("#price").html(result[index].price);
                    $("#qty").val(result[index].qty);
                    calculateTotal();
                }

            });//ajax


        });//document.ready

        function calculateTotal(){

            let totalItem1 = $("#price").html() * $("#qty").val();
            $("#totalItem1").html( `$${totalItem1}`);

            let appliedDiscount =  (totalItem1 * (discount/100))
            $("#appliedDiscount").html( `-$${appliedDiscount}`);

            let shipping = $("#shipping").val();
            document.getElementById("shippingCost").innerHTML = "$" + shipping;

            let subtotal =  totalItem1 - appliedDiscount + parseInt(shipping);

            document.getElementById("subtotal").innerHTML = "$" + parseInt(subtotal);

            document.getElementById("tax").innerHTML = "$" + parseInt(subtotal * .10);
            document.getElementById("total").innerHTML = "$" + (Math.round(subtotal * 1.10));

        }

        function getDiscount(){

            $("#promoError").html("");

            $.ajax({

                method: "GET",
                   url: "https://cst336.herokuapp.com/projects/api/promo_codes.php",
              dataType: "json",
                  data: { "promoCode": $("#promo").val()},
               success: function(result,status) {
                    discount = result.discount;
                    if (!discount) {
                        $("#promoError").html("Promo code doesn't exist!");
                        $("#discount").html("")
                        discount = 0;
                    }
                    else{
                      $("#discount").html(result.discount + "%");
                    }
                    calculateTotal();
                }

            });//ajax

        }
