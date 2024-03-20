import { signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import React, { useState } from "react";
import { auth } from "../../firebase";

const SignIn = () => {

    const db = getFirestore();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
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


                }
            })
            .catch((error) => {
                alert(error.message);
                console.log(error.code);
                console.log(error.message);
            })
    };

    return (
        <div className="container-fluid sibg">
            <div className="row">
                <div className="col-md-4 mx-auto left-side">
                    <div className="letfside-fb">
                        <img className="fb_logo _8ilh img" src="https://static.xx.fbcdn.net/rsrc.php/y1/r/4lCu2zih0ca.svg" alt="Facebook" />
                    </div>
                    <div className="leftside-text">
                        <h4>Avec Facebook, partagez et restez en contact avec votre entourage.</h4>
                    </div>
                </div>
                <div className="col-md-4 mx-auto right-side">
                    <form id="loginForm" onSubmit={signIn} className="bg-light p-3 rounded-3 text-center">
                        <div className="mb-3">
                            <input type="email" className="form-control" value={email}
                                onChange={(e) => setEmail(e.target.value)} placeholder="Adresse e-mail ou numéro de tél" />
                        </div>
                        <div className="mb-3">
                            <input type="password" className="form-control" value={password}
                                onChange={(e) => setPassword(e.target.value)} placeholder="Mot de passe" />
                        </div>
                        <button type="submit" className="btn btn-primary w-100 my-2">Se connecter</button>
                        <a className="my-3" href="...">Mot de passe oublié ?</a>
                        <hr />
                        <a href="./SignUp"><button type="button" className="btn btcc my-3">Créer nouveau compte</button></a>
                    </form>
                </div>
            </div >
        </div >
    )
}

export default SignIn;