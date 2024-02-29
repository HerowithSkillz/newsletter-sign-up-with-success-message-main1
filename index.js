console.log("Lets  write some JavaScript!");
let btn = document.getElementsByTagName("button");
var conf = document.getElementById("confirmed");
conf.style.display = "none";
let error = document.getElementById("red");
error.style.display = "none";
let warn = document.getElementById("warn")

let emailInput = document.querySelector('input[type="email"]');

for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", () => {
    //This begins after clicking on the submit button
    let cont = document.getElementById("cont");
    cont.style.display = "flex";

    if (conf.style.display === "flex") {
      conf.style.display = "none";
    } else {
      if (emailInput.value === "") {
        //When no value is recieved

        console.log(error);
        error.style.display = "block";
        warn.style.borderColor = "var(--Tomato)"
       

      } else {
        //The value is confirmed over here and fixed
        let emailValue = emailInput.value;
        if (isValidEmail(emailValue)) {
            console.log("Valid email address");
            conf.style.display = "flex";
            cont.style.display = "none";
            emailInput.value = "";
            error.style.display = "none"
            let email = document.getElementById("eid")
            email.textContent = emailValue;
          } else {
            console.log("Invalid email address");
            console.log(error);
            error.style.display = "block";
          }
        ;
        
      }
    }
  });
}
function isValidEmail(email) {
    // Regular expression for a simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    // Test the email against the regex
    return emailRegex.test(email);
  }