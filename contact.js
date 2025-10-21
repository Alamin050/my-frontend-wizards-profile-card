const form = document.getElementById("contactForm");
const successMsg = document.getElementById("success-message");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Input fields
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const subject = document.getElementById("subject");
  const message = document.getElementById("message");

  // Error fields
  const nameErr = document.getElementById("error-name");
  const emailErr = document.getElementById("error-email");
  const subjectErr = document.getElementById("error-subject");
  const messageErr = document.getElementById("error-message");

  // Reset previous errors
  [nameErr, emailErr, subjectErr, messageErr].forEach((el) => (el.textContent = ""));
  successMsg.style.display = "none";

  let valid = true;

  // Validate Name
  if (name.value.trim() === "") {
    nameErr.textContent = "Full name is required.";
    valid = false;
  }

  // Validate Email
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (email.value.trim() === "") {
    emailErr.textContent = "Email is required.";
    valid = false;
  } else if (!email.value.match(emailPattern)) {
    emailErr.textContent = "Please enter a valid email (e.g., name@example.com).";
    valid = false;
  }

  // Validate Subject
  if (subject.value.trim() === "") {
    subjectErr.textContent = "Subject is required.";
    valid = false;
  }

  // Validate Message
  if (message.value.trim().length < 10) {
    messageErr.textContent = "Message must be at least 10 characters long.";
    valid = false;
  }

  // Show success message if valid
  if (valid) {
    successMsg.textContent = "✅ Message sent successfully!";
    successMsg.style.display = "block";
    form.reset();
  }
});
