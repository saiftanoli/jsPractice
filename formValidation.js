
function validate(){
    var name = document.myForm.name.value;
    var email = document.myForm.email.value;
    var password = document.myForm.password.value;
    var conpassword = document.myForm.conpassword.value;
    var phone = document.myForm.phone.value;
   
       if(name==""){
        alert("enter your name");
        document.myForm.name.focus();
        return false;
    }

    else if (email==""){
        alert("email is mandatort");
        document.myForm.email.focus();
        return false;
    }
    else if (password==""){
        alert("password is mandatort");
        document.myForm.password.focus();
        return false;
    }
    else if (conpassword==""){
        alert("conpassword is mandatort");
        document.myForm.conpassword.focus();
        return false;
    }
    else if((password.length <8 || password.length >12)){
        alert("password must be 8 to 12 characters");
        return false;
    }
    else if (password != conpassword){
        alert("passwords nare not matching");
        return false;
    }
    else if (phone==""){
        alert("enter your phone number");
        document.myForm.phone.focus();
        return false;
    }
    else if(isNaN(phone)){
        alert("phone must be numbers");
        return false;
    }
    else if(phone.length!=11){
        alert("phone must be 11 digits");
        return false;
    }
    else{
    alert("validation sucessful");
    return true;
    }
}
