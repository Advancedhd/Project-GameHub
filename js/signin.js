const formSignup = document.querySelector(".accountsignup");
const firstname = document.querySelector(".firstname");
const lastname = document.querySelector(".lastname");
const emailSignup = document.querySelector(".email");
const phoneSignup = document.querySelector(".phone");
const homeaddress = document.querySelector(".homeaddress");
const username = document.querySelector(".username");
const password = document.querySelector(".password");
const msgboxSignup = document.querySelector(".msgboxSignup");
const validatedSignup = document.querySelector(".validatedSignup");

const confirmSignup = document.querySelector(".signupconfirm");
const cancelSignup = document.querySelector(".signupcancel");

let msg = "";

let validateSignin = () => {
    event.preventDefault();
    msgboxSignup.innerHTML = ""
    validatedSignup.innerHTML = ""
    msg = ""

    validationFlag = true
    event.preventDefault();
    // Check first and last names exist
    if(firstname.value === "") {
        msg += "Firstname is required! <br>"
        validationFlag = false
    } 
    if(lastname.value === "") {
        msg += "Lastname is required! <br>"
        validationFlag = false
    } 

    // Check email and if it is correct
    if(!emailSignup.value) {
        msg += "Email is required! <br>"
        validationFlag = false
    } else if (!verifyEmail(emailSignup.value)) {
        msg += "Please enter a valid email! <br>"
        validationFlag = false
    }

    // Check phonenumber
    if(!checklength(phoneSignup.value, 7)) {
        msg += "Subject must be minimum 8 in length! <br>"
        validationFlag = false
    } 

    // Check home address
    if(homeaddress.value === "") {
        msg += "Home address is required!<br>"
        validationFlag = false
    } 

    // Check username
    if(username.value === "") {
        msg += "Username is required!<br>"
        validationFlag = false
    } 

    // Check passord
    if(!checklength(phoneSignup.value, 7)) {
        msg += "Password must be minimum 8 in length!<br>"
        validationFlag = false
    } 

    msgboxSignup.innerHTML = msg
    setTimeout(() => {
        msgboxSignup.innerHTML = ""
        msg = ""
    }, 10000);
    if (validationFlag === true) {
        validatedSignup.innerHTML = "Success!"
    }
}

function verifyEmail(email) {
 if (/\S+@\S+\.\S+/.test(email)){
    return (true) 
}
    return (false)
}

function checklength(string, len) {
    if (string.length > len) {
        return true;
    } else {
        return false;
    }
}

formSignup.addEventListener("submit", validateSignin)