document.querySelector("#login-btn").addEventListener("click", function () {
  const emailField = document.querySelector("#email");
  const emailValue = emailField.value;
  const passwordField = document.querySelector("#password");
  const passwordValue = passwordField.value;
  if (emailValue === "money@muhib.com" && passwordValue === "billion") {
    window.location.href = "bank.html";
  } else {
    alert("Wrong Password or email");
  }
});
// --------------->login page script done <--------------------//

// --------------->Bank page script starts <--------------------//

