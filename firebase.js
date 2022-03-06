import "firebase/auth";
import "firebase/firestore";

import * as firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyByl0_pN_RJQTQCdQ8YeKzh2YmlEuTzasE",
    authDomain: "signal-clone-by-keval.firebaseapp.com",
    projectId: "signal-clone-by-keval",
    storageBucket: "signal-clone-by-keval.appspot.com",
    messagingSenderId: "32872680899",
    appId: "1:32872680899:web:61c1ce300519371048c176",
    measurementId: "G-D5MGEN7XDY",
};

let app;
if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
