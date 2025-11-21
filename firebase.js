<script type="module">
  // --- Firebase IMPORTS (12.6.0) ---
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js";
  import { getAuth, signInAnonymously, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-auth.js";
  import {
    getFirestore,
    doc,
    setDoc,
    getDoc,
    updateDoc,
    onSnapshot,
    arrayUnion,
    arrayRemove,
    serverTimestamp
  } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-firestore.js";

  // --- Deine Firebase Config ---
  const firebaseConfig = {
    apiKey: "AIzaSyAwIyqQou1GKlL9cztwjCHMYm0g-FVQo5U",
    authDomain: "frontwars-6cd56.firebaseapp.com",
    projectId: "frontwars-6cd56",
    storageBucket: "frontwars-6cd56.firebasestorage.app",
    messagingSenderId: "426115388998",
    appId: "1:426115388998:web:4b94ddc0a3939dc7e59c47",
    measurementId: "G-BL1BWCQZFS"
  };

  // --- Init Firebase ---
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const auth = getAuth(app);

  // --- Login (Anonymous) ---
  signInAnonymously(auth).catch(err => console.error(err));

  onAuthStateChanged(auth, user => {
    if (user) {
      console.log("Logged in as:", user.uid);
    }
  });

  // --- Beispiel: Party erstellen ---
  async function createParty() {
    const partyId = Math.random().toString(36).substring(2, 8).toUpperCase();
    await setDoc(doc(db, "parties", partyId), {
      host: auth.currentUser.uid,
      created: serverTimestamp(),
      players: [auth.currentUser.uid],
      status: "waiting"
    });
    console.log("Party created:", partyId);
  }

  // --- Beispiel: Lobby hören ---
  function listenParty(partyId) {
    const ref = doc(db, "parties", partyId);
    onSnapshot(ref, snap => {
      if (!snap.exists()) return console.log("Party not found");
      console.log("LIVE UPDATE:", snap.data());
    });
  }
</script>

