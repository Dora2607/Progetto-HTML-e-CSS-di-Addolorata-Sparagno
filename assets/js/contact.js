addEventListener("submit", (event) => {});

onsubmit = (event) => {};

function logSubmit(event) {
    event.preventDefault();
  }
  
  const form = document.getElementById("form");
  const log = document.getElementById("log");
  form.addEventListener("submit", logSubmit);



function SendMail() {
    var params = {

        name : document.getElementById("name").value,
        surname : document.getElementById("surname").value,
        email : document.getElementById("email").value,
        textarea : document.getElementById("textarea").value,
    };

    const serviceID = "frontend_AS"; // Email Service ID 
    const templateID = "template_yqpr55o"; //Email Template ID

    emailjs
        .send(serviceID, templateID, params)
        .then((res) => {
                document.getElementById("name").value = "";
                document.getElementById("surname").value = "";
                document.getElementById("email").value = "";
                document.getElementById("textarea").value = "";
                console.log(res);
                alert("Il messaggio è stato inviato correttamente");
            })
        .catch((err) => console.log(err));
}


