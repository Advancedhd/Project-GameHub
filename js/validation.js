
const form = document.querySelector(".checkform");
const namefield = document.querySelector(".NameField");
const subject = document.querySelector(".SubjectField");
const email = document.querySelector(".EmailField");
const submitbutton = document.querySelector(".feedbacksend");
const msgbox = document.querySelector(".msg");
const validated = document.querySelector(".validated");

let msg = "";

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

let validateForm = () => {
    msgbox.innerHTML = ""
    msg = ""
    validated.innerHTML = ""
    validationFlag = true
    event.preventDefault();
    if(namefield.value === "") {
        msg += "Name is required! <br>"
        validationFlag = false
    } 
    if(!email.value) {
        msg += "Email is required! <br>"
        validationFlag = false
    } else if (!verifyEmail(email.value)) {
        msg += "Please enter a valid email! <br>"
        validationFlag = false
    }
    if(!checklength(subject.value, 14)) {
        msg += "Subject must be minimum 15 in length! <br>"
        validationFlag = false
    } 

    msgbox.innerHTML = msg
    setTimeout(() => {
        msgbox.innerHTML = ""
        msg = ""
    }, 10000);
    if (validationFlag === true) {
        validated.innerHTML = "Feedback sent!"
    }
}

form.addEventListener("submit", validateForm)