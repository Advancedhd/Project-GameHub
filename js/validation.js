/* <div class="feedback">
    <h1 class="feedbacktext"><b>Feedback</b></h1>
        <div class="feedbackcontent">
            <label for="firstname" class="signuplabel" >Your Name</label>
            <input type="text" name="firstname" id="firstname">
        </div>
         <div class="feedbackcontent">
            <label for="email"  class="signuplabel">Email Address</label>
            <input type="text" name="email" id="email">
        </div>
        <div class="feedbackcontent">
            <label for="subject">Subject</label>
            <textarea id="subject" name="subject" placeholder="Your Feedback" style="height:200px"></textarea>
        </div>
        <div>
            <button class="feedbacksend">Send</button>
        </div>
</div> */




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
    if(!checklength(subject.value, 19)) {
        msg += "Subject must be minimum 20 in length! <br>"
        validationFlag = false
    } 

    msgbox.innerHTML = msg
    setTimeout(() => {
        msgbox.innerHTML = ""
        msg = ""
    }, 10000);
    if (validationFlag === true) {
        validated.innerHTML = "Succesfully Validated"
    }
}

form.addEventListener("submit", validateForm)