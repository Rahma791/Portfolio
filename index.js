const textElement = document.getElementById('text');
const texts = ["Web Developer", "Front End Developer", "Web Designer"];
var currentTextIndex = 0;
var currentText = texts[currentTextIndex];
var index = currentText.length;

function eraseText() {
    if (index >= 0) {
        textElement.textContent = currentText.slice(0, index);
        index--;
        setTimeout(eraseText, 100); // Speed of erasing
    } else {
        currentTextIndex = (currentTextIndex + 1) % texts.length; // Switch to the next text
        currentText = texts[currentTextIndex];
        index = 0; // Reset index for new text
        setTimeout(displayNewText, 100); // Pause before displaying new text
    }
}

function displayNewText() {
    if (index < currentText.length) {
        textElement.textContent = currentText.slice(0, index + 1);
        index++;
        setTimeout(displayNewText, 150); // Speed of displaying
    } else {
        setTimeout(eraseText, 1000); // Pause before starting to erase
    }
}

// Start the process
setTimeout(eraseText, 1000); // Start erasing after 2 seconds

window.onload = function () {
    // Counter for Happy Clients
    var clientCount = 0;
    var clientCounterElement = document.getElementById('counter');
    var clientInterval = setInterval(function () {
        if (clientCount < 7) {
            clientCount++;
            clientCounterElement.textContent = clientCount;
        } else {
            clearInterval(clientInterval);
        }
    }, 100);

    // Counter for Projects Completed
    var projectCount = 0;
    var projectCounterElement = document.getElementById('count');
    var projectInterval = setInterval(function () {
        if (projectCount < 10) {
            projectCount++;
            projectCounterElement.textContent = projectCount;
        } else {
            clearInterval(projectInterval);
        }
    }, 100);
};

var s = document.getElementById("Education");
var m = document.getElementById("Experience");

// if (l == Education) {
//     s.style.backgroundColor = "white";
// }

function Education() {
    s.style.display = "block";
    m.style.display = "none";
    Education.style.backgroundColor = "black";
    Education.style.color = "white";

}
function Experience() {
    m.style.display = "block";
    s.style.display = "none";
    Experience.style.backgroundColor = "black";
    Experience.style.color = "white";
}
function sendEmail() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;


    let ebody = `
      <b>Name:</b> ${name}<br>
      <b>Email:</b> ${email}<br>
      <b>Subject:</b> ${subject}<br>
      <b>Message:</b> ${message}<br>
    `;

    Email.send({
        SecureToken: "35f03cfa-53b3-48ef-93a9-f22c5a1c7c35", // Your actual Secure Token from smtpjs.com
        To: 'rahmamaryam895@gmail.com',  // Your recipient email address
        From: 'YOUR_ACTUAL_EMAIL@gmail.com', // USE YOUR REAL EMAIL ADDRESS HERE
        Subject: "New Inquiry from Portfolio",
        Body: ebody
    }).then(
       () => {
         alert("Message Sent Successfully");
         document.querySelector("form").reset();
       }
     ).catch(
      (error) => {
         alert("Error Sending Message: "+ error);
         console.log("Error", error); // Log the error for debugging.
      }
     );
    }
 