import { createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import React, { useState } from "react";
import { auth } from "../../firebase";

const SignUp = () => {

    const db = getFirestore();

    let FnameInp = document.getElementById("fnameInp")
    let LnameInp = document.getElementById("lnameInp")
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");



    const RegisterUser = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then(async (credentials) => {
                var ref = doc(db, "UserAutList", credentials.user.uid);
                await setDoc(ref, {
                    firstname: FnameInp.value,
                    lastname: LnameInp.value,
                    email: email,
                    password: password
                });
            })
            .catch((error) => {
                alert(error.message);
                console.log(error.code);
                console.log(error.message);
            })

        if (true) {
            window.alert("Compte créer avec succèes, Merci")
        } else {
            window.alert("Compte non créer")
        }
    }


    return (
        <div className="container">
            <form id="registerForm" onSubmit={RegisterUser} className="bg-light p-3 rounded-3 text-center">
                <div className="mb-2 d-flex">
                    <input type="text" className="form-control" id="fnameInp" placeholder="Prenom" />
                    <input type="text" className="form-control" id="lnameInp" placeholder="Nom de famille" />
                </div>
                <div className="mb-2">
                    <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Numéro mobile ou e-mail" />
                </div>
                <div className="mb-2">
                    <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Nouveau mot de passe" />
                </div>
                <p className="modal-p">Les personnes qui utilisent notre service ont pu importer vos coordonnées sur Facebook.
                    <a href="https://www.facebook.com/help/637205020878504">En savoir plus</a>.
                </p>
                <p className="modal-p">En cliquant sur S’inscrire, vous acceptez nos <a href="https://www.facebook.com/legal/terms/update">Conditions générales</a>,
                    notre <a href="https://www.facebook.com/privacy/policy/?entry_point=data_policy_redirect&entry=0">Politique de confidentialité</a>
                    et notre <a href="https://www.facebook.com/privacy/policies/cookies/?entry_point=cookie_policy_redirect&entry=0">Politique d’utilisation des cookies</a>. Vous recevrez peut-être
                    des notifications par texto de notre part et vous pouvez à tout moment vous désabonner.
                </p>
                <button type="submit" >Sign Up</button>
            </form>
        </div>
    )
}

export default SignUp;