import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, doc, setDoc, getDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyB6j-z-7UbUE4EZ-tnNI6GA52aUihwzuDk",
    authDomain: "reproduction-fb.firebaseapp.com",
    projectId: "reproduction-fb",
    storageBucket: "reproduction-fb.appspot.com",
    messagingSenderId: "734979697819",
    appId: "1:734979697819:web:83980f54f50d4788f12a3e",
    measurementId: "G-XMHJY4CKZF"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth(app);

let FnameInp = document.getElementById("fnameInp")
let LnameInp = document.getElementById("lnameInp")
let Email = document.getElementById("email")
let Password = document.getElementById("password")
let registerForm = document.getElementById("registerForm")
let loginForm = document.getElementById("loginForm")
let Email2 = document.getElementById("email2")
let Password2 = document.getElementById("password2")

// function pour la connexion 

let signInUser = evt => {
    evt.preventDefault();
    signInWithEmailAndPassword(auth, Email.value = Email2.value, Password.value = Password2.value)
        .then(async (credentials) => {
            var ref = doc(db, "UserAutList", credentials.user.uid);
            const docSnap = await getDoc(ref);

            if (docSnap.exists()) {
                sessionStorage.setItem("user-info", JSON.stringify({
                    firstname: docSnap.data().firstname,
                    lastname: docSnap.data().lastname,
                    email: docSnap.data().email
                }))
                sessionStorage.setItem("user-creds", JSON.stringify(credentials.user));


                var checkbox = document.querySelector("input[type=checkbox]")
                if (checkbox.checked) {
                    checkbox.checked = window.location.href = 'adminDashboard.html'
                } else {
                    checkbox.checked = window.location.href = 'test.html'
                }

            }
        })

        .catch((error) => {
            alert(error.message);
            console.log(error.code);
            console.log(error.message);
        })

}

loginForm.addEventListener('submit', signInUser);

// function pour la création

let RegisterUser = evt => {
    evt.preventDefault();

    createUserWithEmailAndPassword(auth, Email.value, Password.value)
        .then(async (credentials) => {
            var ref = doc(db, "UserAutList", credentials.user.uid);
            await setDoc(ref, {
                firstname: FnameInp.value,
                lastname: LnameInp.value,
                email: Email.value
            });
        })
        .catch((error) => {
            alert(error.message);
            console.log(error.code);
            console.log(error.message);
        })


}

registerForm.addEventListener('submit', RegisterUser);