<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAwIyqQou1GKlL9cztwjCHMYm0g-FVQo5U",
    authDomain: "frontwars-6cd56.firebaseapp.com",
    projectId: "frontwars-6cd56",
    storageBucket: "frontwars-6cd56.firebasestorage.app",
    messagingSenderId: "426115388998",
    appId: "1:426115388998:web:4b94ddc0a3939dc7e59c47",
    measurementId: "G-BL1BWCQZFS"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>
