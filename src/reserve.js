import { useEffect, useState, useRef } from "react"
import Home from "../components/Home"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";
import { auth } from "./FiresBase";


const SignIn = () => {

    const [showHome, setShowHome] = useState(false)
    const [show, setShow] = useState(false)
    const localSignUp = localStorage.getItem("signUp")
    const localEmail = localStorage.getItem("email")
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        if (localSignUp) {
            setShowHome(true)
        }
        if (localEmail) {
            setShow(true)
        }
    })
    
    const db = getFirestore();


    let FnameInp = document.getElementById("fnameInp")
    let LnameInp = document.getElementById("lnameInp")
    let Email = document.getElementById("email")
    let Password = document.getElementById("password")
    let Email2 = document.getElementById("email2")
    let Password2 = document.getElementById("password2")
    let registerForm = document.getElementById("registerForm")
    let loginForm = document.getElementById("loginForm")


    const RegisterUser = (e) => {
        e.preventDefault();

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

    const signInUser = (e) => {
        e.preventDefault();
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

                }
            })

            .catch((error) => {
                alert(error.message);
                console.log(error.code);
                console.log(error.message);
            })

    }
    



    return (
        <section id="signIn">
            <div>
                {showHome ? <Home /> :
                    (show ?
                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>S’inscrire
                                    <p className="text-muted fs-6">C’est rapide et facile.</p>
                                </Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <form id="registerForm" onSubmit={RegisterUser} className="bg-light p-3 rounded-3 text-center">
                                    <div className="mb-2 d-flex">
                                        <input type="text" className="form-control" id="fnameInp" placeholder="Prenom" />
                                        <input type="text" className="form-control" id="lnameInp" placeholder="Nom de famille" />
                                    </div>
                                    <div className="mb-2">
                                    </div>
                                    <div className="mb-2">
                                        <input type="email" className="form-control" id="email" placeholder="Numéro mobile ou e-mail" />
                                    </div>
                                    <div className="mb-2">
                                        <input type="password" className="form-control" id="password" placeholder="Nouveau mot de passe" />
                                    </div>
                                    <p className="modal-p">Les personnes qui utilisent notre service ont pu importer vos coordonnées sur Facebook.
                                        <a href="https://www.facebook.com/help/637205020878504">En savoir plus</a>.
                                    </p>
                                    <p className="modal-p">En cliquant sur S’inscrire, vous acceptez nos <a href="https://www.facebook.com/legal/terms/update">Conditions générales</a>,
                                        notre <a href="https://www.facebook.com/privacy/policy/?entry_point=data_policy_redirect&entry=0">Politique de confidentialité</a>
                                        et notre <a href="https://www.facebook.com/privacy/policies/cookies/?entry_point=cookie_policy_redirect&entry=0">Politique d’utilisation des cookies</a>. Vous recevrez peut-être
                                        des notifications par texto de notre part et vous pouvez à tout moment vous désabonner.
                                    </p>
                                </form>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="primary" type="submit">
                                    Save Changes
                                </Button>
                            </Modal.Footer>
                        </Modal>
                        :
                        <div className="container-fluid sibg">
                            <div className="row">
                                <div className="col-md-4 mx-auto left-side">
                                    <div className="letfside-fb">
                                        <img class="fb_logo _8ilh img" src="https://static.xx.fbcdn.net/rsrc.php/y1/r/4lCu2zih0ca.svg" alt="Facebook" />
                                    </div>
                                    <div className="leftside-text">
                                        <h4>Avec Facebook, partagez et restez en contact avec votre entourage.</h4>
                                    </div>
                                </div>
                                <div className="col-md-4 mx-auto right-side">
                                    <form id="loginForm" onSubmit={signInUser} className="bg-light p-3 rounded-3 text-center">
                                        <div className="mb-3">
                                            <input type="email" className="form-control" id="email2" placeholder="Adresse e-mail ou numéro de tél" />
                                        </div>
                                        <div className="mb-3">
                                            <input type="password" className="form-control" id="password2" placeholder="Mot de passe" />
                                        </div>
                                        <button type="submit" className="btn btn-primary w-100 my-2">Se connecter</button>
                                        <a className="my-3" href="...">Mot de passe oublié ?</a>
                                        <hr />
                                        <button type="button" className="btn btcc my-3" onClick={handleShow}>Créer nouveau compte</button>
                                    </form>
                                </div>
                            </div >
                        </div >
                    )}
            </div >
        </section >
    );
}

export default SignIn;