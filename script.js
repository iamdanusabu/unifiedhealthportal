
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Patient Sign Up</title>
    <link rel="stylesheet" href="Css/style.css" />
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap" rel="stylesheet" />
    <style>
      /* CSS styling code here */
    </style>
  </head>
  <body>
    <div class="signup-box">
      <h1>Sign Up</h1>
      <a class="home" href="home.html">Take me Home</a>

      <form id="signup-form">
        <label>First Name</label>
        <input type="text" id="firstName" placeholder="" />
        <label>Last Name</label>
        <input type="text" id="lastName" placeholder="" />
        <label>Email</label>
        <input type="email" id="email" placeholder="" />
        <label>Password</label>
        <input type="password" id="password" placeholder="" />
        <label>Confirm Password</label>
        <input type="password" id="confirmPassword" placeholder="" />
        <input type="submit" value="Submit" />
      </form>
    </div>
    <p class="para-2">
      Already have an account? <a href="patientlogin.html">Login here</a>
    </p>

    <script src="https://www.gstatic.com/firebasejs/9.0.2/firebase-app.js"></script>
    <script src="https://www.gstatic.com/firebasejs/9.0.2/firebase-auth.js"></script>
    <script>
      // Initialize Firebase with your project credentials
      var firebaseConfig = {
        apiKey: "YOUR_API_KEY",
        authDomain: "YOUR_AUTH_DOMAIN",
        projectId: "YOUR_PROJECT_ID",
        // Add more Firebase config options if needed
      };
      firebase.initializeApp(firebaseConfig);

      // Handle registration form submission
      const signupForm = document.getElementById('signup-form');
      signupForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent form submission

        // Get user input values
        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;

        // Check if passwords match
        if (password !== confirmPassword) {
          alert("Passwords do not match");
          return;
        }

        // Create user with email and password
        firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .then(function (userCredential) {
            // Registration successful
            alert("Registration successful!");
            // You can redirect to another page here if needed
          })
          .catch(function (error) {
            // Registration failed
            alert("Registration failed: " + error.message);
          });
      });
    </script>
  </body>
</html>
