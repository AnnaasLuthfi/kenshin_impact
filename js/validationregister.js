function validateForm() {
    const checkTOS = document.getElementById("tos").checked;
    const username = document.getElementById("username")
    const emailuser = document.getElementById("emailuser")
    const passworduser = document.getElementById("passworduser")
    const passwordconfirm = document.getElementById("passwordconfirmuser")

    if(!checkTOS){
        alert("You must agree with terms and condition to register");
    }
    if(username.value ==="" || username.value === null){
        alert("Username required!")
    }
    if(username.value.length <=8){
        alert("Username using minimal 8 character!")
    }
    if(username.value.length >=50){
        alert("Username using maximal 50 character!")
    }
    if(emailuser.value ==="" || emailuser.value === null){
        alert("Email required!")
    }
    if(emailuser.value.length >=100){
        alert("Email using maximal 100 character!")
    }
    if(passworduser.value ==="" || passworduser.value === null){
        alert("Password required!")
    }
    if(passworduser.value.length <=8){
        alert("Password using minimal 8 character!")
    }
    if(passworduser.value.length >=20){
        alert("Password using maximal 20 character!")
    }
    if(passwordconfirm.value ==="" || passwordconfirm.value === null){
        alert("Password Confirmation required!")
    }
    if(passworduser.value !== passwordconfirm.value){
        alert("Password and Password Confirmation doesn't Match!")
    }
}