$(document).ready (function(){
    $("button#new").click (function(){
        $(".container-fluid").hide();
        $(".container").show();



var amount =$('#JACK').val();
console.log(amount)
 $('#client').text(amount);

 var student =$('#ininitial').val();
console.log(student)
 $('#initial1').text(student);
if($("button#btn")){
    $("button#btn").click(function(){
        var kub =parseInt($('input#deposit').val());
        console.log(kub);
        var withdr = parseInt($('#Withdraw').val());
        
        var sum = kub + parseInt(student);
        $('#initial1').text(sum);});
}
 
$("button#send").click(function(){

    var withdr = parseInt($('#Withdraw').val());
    
    var kuramo =  parseInt(student)-withdr;
    $('#initial1').text(kuramo);
    // var sum = withdr - parseInt(student);
    // $('#initial1').text(sum);

 });
    });
});
