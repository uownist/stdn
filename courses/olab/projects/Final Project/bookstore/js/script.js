function showDateTime() {
    const now = new Date();
    const date = now.toLocaleDateString();
    const time = now.toLocaleTimeString();
    document.getElementById('displayDateTime').textContent = date+ ' '+time;
}

setInterval(showDateTime,1000)



function checkFristName(){
    var fristName = $('#fristName').val();
    var regex= /^[a-zA-Z-._ ]{2,10}$/;
    if(regex.test(fristName)){
        $('#fristNameError').html('');
        return true;
    }else{
        $('#fristNameError').html('Invalid frist name.you can use' +
            'Alphabetic character.(dot)-(hi-pen)_(underscore)');
        return false;
    }
}

$('#fristName').keyup(function () {
    var res = checkFristName();
    if(res == true){
        $('#fristNameError').html('');
        $('#regButton').prop("disabled" ,false);
    }else{
        $('#fristNameError').html('Invalid frist name.you can use' +
            'Alphabetic character.(dot)-(hi-pen)_(underscore)');
        $('#regButton').prop("disabled" ,true);
    }
});

function checkLastName(){
    var lastName = $('#lastName').val();
    var regex= /^[a-zA-Z-._ ]{2,10}$/;
    if(regex.test(lastName)){
        $('#lastNameError').html('');
        return true;
    }else{
        $('#lastNameError').html('Invalid last name.you can use' +
            'Alphabetic character.(dot)-(hi-pen)_(underscore)');
        return false;
    }
}

$('#lastName').keyup(function () {
    var res = checkLastName();
    if(res == true){
        $('#lastNameError').html('');
        $('#regButton').prop("disabled" ,false);
    }else{
        $('#lastNameError').html('Invalid last name.you can use' +
            'Alphabetic character.(dot)-(hi-pen)_(underscore)');
        $('#regButton').prop("disabled" ,true);
    }
});

function checkUserName(){
    var UserName = $('#UserName').val();
    var regex= /^[a-zA-Z][a-zA-Z0-9_]{2,15}$/;
    if(regex.test(UserName)){
        $('#userNameError').html('');
        return true;
    }else{
        $('#userNameError').html("Invalid username. Must start with a letter, contain letters, numbers, or underscores, and be 3-16 characters long.");
        return false;
    }
}

$('#UserName').keyup(function () {
    var res = checkUserName();
    if(res == true){
        $('#userNameError').html('');
        $('#regButton').prop("disabled" ,false);
    }else{
        $('#userNameError').html("Invalid username. Must start with a letter, contain letters, numbers, or underscores, and be 3-16 characters long.");
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

$('#email').keyup(function () {
    var res = checkEmail();
    if(res == true){
        $('#emailErrorText').html('');
        $('#regButton').prop("disabled" ,false);
    }else{
        $('#emailErrorText').html('Invalid Email address please provide valid email format');
        $('#regButton').prop("disabled" ,true);
    }
});

function checkPassword(){
    var password = $('#password').val();
    var regex= /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if(regex.test(password)){
        $('#passwordErrorText').html('');
        return true;
    }else{
        $('#passwordErrorText').html("Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character:");
        return false;
    }
}

$('#password').keyup(function () {
    var res = checkPassword();
    if(res == true){
        $('#passwordErrorText').html('');
        $('#regButton').prop("disabled" ,false);
    }else{
        $('#passwordErrorText').html("Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character:");
        $('#regButton').prop("disabled" ,true);
    }
});

function checkConfirmPassword(){
    var confirmPassword = $('#confirmPassword').val();
    var password = $('#password').val();
    if(password == confirmPassword ){
        $('#confirmPasswordErrorText').html('');
        return true;
    }else{
        $('#confirmPasswordErrorText').html("password not match");
        return false;
    }
}
$('#confirmPassword').keyup(function () {
    checkConfirmPassword();

})

function checkDateOfBirth(){
    var dateOfBirth = $('#dateOfBirth').val();
    if(dateOfBirth){
        $('#dateOfBirth').prop('required',false)
        $('#dateOfBirthError').html('');
        return true;
    }else {
        $('#dateOfBirth').prop('required',true)
        $('#dateOfBirthError').html('Must be fillup');
        return false;
    }

}

$('#dateOfBirth').blur(function () {
    var res = checkDateOfBirth();
    if (res == true){
        $('#regButton').prop('disabled',false);
    }else {
        $('#regButton').prop('disabled',true);
    }

})


function checkGender(){
    if($('input[name="gender"]:checked').length){
        $('#genderErrorText').html('');
        return true;
    } else {$('#genderErrorText').html('select Gender');
        return false;
    }
}

$('.gender').click(function () {
    var res = checkGender();
    if (res == true){
        $('#genderErrorText').html('');
        $('#regButton').prop("disabled",false);
    }else {
        $('#genderErrorText').html('Select Gender');
        $('#regButton').prop("disabled",true);
    }

});


function checkCountry(){
    var country = $('#country').val();
    if (country){
        $('#countryErrorText').html('');
        return true;
    }else {
        $('#countryErrorText').html('select country');
        return false;
    }
}

$('#country').change(function () {
    var res = checkCountry();
    if (res == true){
        $('#countryErrorText').html('');
        $('#regButton').prop("disabled",false);
    }else {
        $('#countryErrorText').html('select country');
        $('#regButton').prop("disabled",true);
    }
});

$('#regForm').submit(function(){

    if(
        checkFristName() == true &&
        checkLastName() == true &&
        checkUserName() == true &&
        checkEmail() == true &&
        checkPassword() == true &&
        checkDateOfBirth() == true &&
        checkGender() == true &&
        checkCountry() == true
    ){
        $('#regButton').prop("disabled" ,false);
        return true;
    }else{
        $('#regButton').prop("disabled",true);
        return false;
    }

});

