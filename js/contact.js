const form = document.getElementById("contactForm");
const statusText = document.getElementById("formStatus");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    const name = document.getElementById("cname").value.trim();
    const email = document.getElementById("cemail").value.trim();
    const subject = document.getElementById("csubject").value.trim();
    const message = document.getElementById("cmessage").value.trim();

    if (name === "" || email === "" || subject === "" || message === "") {

        statusText.style.color = "red";
        statusText.innerText = "⚠️ Please fill all fields.";

        return;
    }

    statusText.style.color = "green";
    statusText.innerText = "✅ Message sent successfully! We will contact you soon.";

    form.reset();
});
