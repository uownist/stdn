function displayDateTime() {
   const dateTime = new Date();
   const date = dateTime.toLocaleDateString();
   const time = dateTime.toLocaleTimeString();
   document.getElementById('dateTime').innerText = date+' '+time;
}
setInterval(displayDateTime,1000);








function checkName(){
   var name = $('#name').val();
   var regex= /^[a-zA-Z-._ ]{2,10}$/;
   if(regex.test(name)){
      $('#nameErrorText').html('');
      return true;
   }else{
      $('#nameErrorText').html('Invalid name.you can use' +
          'Alphabetic character.(dot)-(hi-pen)_(underscore)');
      return false;
   }
}

$('#name').keyup(function () {
   var res = checkName();
   if(res == true){
      $('#nameErrorText').html('');
      $('#regButton').prop("disabled" ,false);
   }else{
      $('#nameErrorText').html('Invalid name.you can use' +
          'Alphabetic character.(dot)-(hi-pen)_(underscore)');
      $('#regButton').prop("disabled" ,true);
   }
});


function checkEmail(){
   var email = $('#email').val();
   var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z]{2,4})+$/;
   if (regex.test(email)){
      $('#emailErrorText').html('');
      return true;
   }else {
      $('#emailErrorText').html('Invalid Email address please provide valid email format');
      return false;
   }
}

$('#email').blur(function () {
   var res = checkEmail();
   if(res == true){
      $('#emailErrorText').html('');
      $('#regButton').prop("disabled" ,false);
   }else{
      $('#emailErrorText').html('Invalid Email address please provide valid email format');
      $('#regButton').prop("disabled" ,true);
   }
});

function checkPhone(){
   var Phone = $('#phone').val();
   var regex= /(^(\+88|0088)?(01){1}[3456789]{1}(\d){8})$/;
   if(regex.test(Phone) && Phone.length == 11){
      $('#phoneErrorText').html('');
      return true;
   }else{
      $('#phoneErrorText').html('Invalid Number.you can use'+
          'Numerical character');
      return false;
   }
}

$('#phone').keyup(function () {
   var res = checkPhone();
   if(res == true){
      $('#phoneErrorText').html('');
      $('#regButton').prop("disabled" ,false);
   }else{
      $('#phoneErrorText').html('Invalid Number.you can use'+
          'Numerical character');
      $('#regButton').prop("disabled" ,true);
   }
});


function checkAddress(){
   var address = $('#address').val();
   var regex= /^([a-zA-Z0-9#_. ()/\@:-]){10,}$/;
   if(regex.test(address)){
      $('#addressErrorText').html('');
      return true;
   }else{
      $('#addressErrorText').html('Invalid address.you can use' +
          'Alphabetic character.(dot)-(hi-pen)_(underscore)');
      return false;
   }
}

$('#address').keyup(function () {
   var res = checkAddress();
   if(res == true){
      $('#addressErrorText').html('');
      $('#regButton').prop("disabled" ,false);
   }else{
      $('#addressErrorText').html('Invalid address.you can use' +
          'Alphabetic character.(dot)-(hi-pen)_(underscore)');
      $('#regButton').prop("disabled" ,true);
   }
});

function checkMessage(){
   var message = $('#message').val();
   var regex= /^([a-zA-Z0-9#_. ()/\@:-]){10,}$/;
   if(regex.test(message)){
      $('#messageErrorText').html('');
      return true;
   }else{
      $('#messageErrorText').html('Invalid name.you can use' +
          'Alphabetic character.(dot)-(hi-pen)_(underscore)');
      return false;
   }
}

$('#message').blur(function () {
   var res = checkMessage();
   if(res == true){
      $('#messageErrorText').html('');
      $('#regButton').prop("disabled" ,false);
   }else{
      $('#messageErrorText').html('Invalid name.you can use' +
          'Alphabetic character.(dot)-(hi-pen)_(underscore)');
      $('#regButton').prop("disabled" ,true);
   }
});


$('#regForm').submit(function(){

   if(
       checkName() == true && checkEmail() == true && checkPhone() == true
       && checkAddress() == true && checkMessage() == true
   ){
      $('#regButton').prop("disabled" ,false);
      return true;
   }else{
      $('regButton').prop("disabled",true);
      return false;
   }

});

