// Front- End Logic
$(document).ready(function(){
    $('#button').click(function(){
        var antibiot = parseInt($('#amoxi:checked').val());
        var antibiot500 = parseInt($('#amoxi500:checked').val());
        var painKiller = parseInt($('#Ibuprofen:checked').val());
        var painKiller500 = parseInt($('#Ibuprofen500:checked').val());
        var AntimalarialDrugs = parseInt($('#Amodiaquine:checked').val());
        var data = [antibiot, antibiot500, painKiller, painKiller500, AntimalarialDrugs]
        var price = 0
        // console.log(data);
        data.forEach(function(item){
            price = item + price
            $("#correctNumber").text("HERE IS YOUR TOTAL PRICE: " + price )
        })
        // $("#correctNumber").text("HERE IS YOUR TOTAL PRICE: " + price )
        // var price = 0;
        // if (antibiot == 0) {
        //         price += 1000;
        // };
    })
})
// function check() {
//     // var antibiot = document.querySelector('#amoxi:checked').value;
//     var antibiot500 = document.querySelector('#amoxi500:checked').value;
//     console.log(antibiot500);
// //     var painKiller = document.pharmacy.painKiller.value;
// //     console.log("painKiller")
// //     var AntimalarialDrugs = document.pharmacy.AntimalarialDrugs.value;
// //     console.log("AntimalarialDrugs")
// //     var price = 0;
// //    var ad=0;

// //     if (antibiot == 0) {
// //         price = price + 1000;
// //     };
    
    
// //     if (!painKiller ==true ) {
// //         price += ad;
// //     }else{
// //   price +=400;
// //     }
// //     ;
    
// //     if (AntimalarialDrugs == 0) {
// //         price = price + 2500;
// //     }

// //     console.log("price")
// //     document.getElementById("price").style.visibility = "visible";
// //     document.getElementById("correctNumber").innerHTML = "HERE IS YOUR TOTAL PRICE: " + price ;
// //     console.log("price")

// };

// Business-Logic


