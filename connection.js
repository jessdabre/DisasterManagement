<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDeOqeLcqGVfjAPFfvbWjKhbphwxHDR5Mo",
    authDomain: "disastermanagement-402118.firebaseapp.com",
    projectId: "disastermanagement-402118",
    storageBucket: "disastermanagement-402118.appspot.com",
    messagingSenderId: "646530051011",
    appId: "1:646530051011:web:98d15e0321a6ec9400ab76",
    measurementId: "G-D42ZG3BYN2"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>
