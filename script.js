
document.addEventListener("DOMContentLoaded", function () {
  const homeButtons = document.querySelectorAll(".homeBtn");
  const loginButtons = document.querySelectorAll(".loginBtn");
  const aboutButtons = document.querySelectorAll(".aboutBtn");

  homeButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      e.preventDefault();
      alert("Home button was clicked!");
    });
  });

  loginButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      e.preventDefault();
      alert("Login successfully");
    });
  });

  aboutButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      e.preventDefault();
      alert("Login successfully");
    });
  });

  const tinInput = document.getElementById("tin");

  
  tinInput.addEventListener("input", function (e) {
    let value = e.target.value.replace(/\D/g, ""); 
    if (value.length > 14) value = value.slice(0, 14);

    if (value.length > 9) {
      value = value.replace(/^(\d{3})(\d{3})(\d{3})(\d{0,4}).*/, "$1-$2-$3-$4");
    } else if (value.length > 6) {
      value = value.replace(/^(\d{3})(\d{3})(\d{0,3}).*/, "$1-$2-$3");
    } else if (value.length > 3) {
      value = value.replace(/^(\d{3})(\d{0,3}).*/, "$1-$2");
    }

    e.target.value = value;
  });

  const loginForm = document.getElementById("loginForm");
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const tin = loginForm.tin.value.trim();
    const username = loginForm.username.value.trim();
    const password = loginForm.password.value.trim();

    const tinPattern = /^\d{3}-\d{3}-\d{3}-\d{4}$/;

    if (!tinPattern.test(tin)) {
      alert("Please enter a valid TIN (format: 000-000-000-0000).");
      return;
    }

    if (username === "" || password === "") {
      alert("Please fill in both username and password.");
      return;
    }

    alert(`Welcome, ${username}! Login functionality coming soon.`);
    loginForm.reset();
  });

  
  const announcementText = document.getElementById("announcementText");
  setTimeout(() => {
    announcementText.textContent =
      "THIS IS ME DOM MANIPULATING YOU TO HIRE ME PLEASE!!!🥺";
  }, 5000);
});