function registerStudent() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
  
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
  
    const studentData = {
      name: name,
      email: email,
      password: password
    };
  
    localStorage.setItem("studentData", JSON.stringify(studentData));
    window.location.href = "login.html";
  }
  