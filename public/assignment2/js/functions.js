$(document).ready(function() {
            $("button").on("click", lever);

            function lever() {
                let x = rand();
                let amount = parseFloat($("#wager").val())
                $('#slot_1').attr("src",set_img(Math.round((x/100)%3)));
                let slot1 = $("#slot_1").attr('src');
                $('#slot_2').attr("src",set_img(Math.round((x/10)%3)));
                let slot2 = $("#slot_2").attr('src');
                $('#slot_3').attr("src",set_img(Math.round((x/1)%3)));
                let slot3 = $("#slot_3").attr('src');
                if(slot1== slot2){
                    if(slot1==slot3){
                        if(slot1=="img/cherry.png"){
                            amount = amount *2;
                        }else if (slot1 == "img/bell.png") {
                            amount = amount *4;
                        } else {
                            amount =0;
                        }
                    }
                }else{
                    amount = amount*(-1);
                }
                console.log( $("#total").text());
                let total = parseFloat( $('#total').text());
                console.log(total);
                total = total+amount;
                console.log(total);
                $('#total').text(total.toString());
                
                //console.log(x);
            }
            function set_img(num){
                if (num == 1) {
                    return "img/cherry.png";
                } else if(num ==2) {
                    return "img/bell.png";
                } else{
                    return "img/bar.png";
                }
            }
            function rand() {
                var d = new Date();
                var t = Date.now();
                var y =t;
                //console.log(y);
                return Math.round(Math.abs(Math.sin(y*y*y) * 10000));
            }
        })
