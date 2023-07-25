const email = document.getElementById("email_id");
const request = document.getElementById("request-btn");
const error = document.getElementById("error");
const success = document.getElementById("success");

const regexPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

request.addEventListener("click", function () {
  if (regexPattern.test(email.value)) {
    success.style.display = "block";
  } else {
    error.style.display = "block";
  }
});
