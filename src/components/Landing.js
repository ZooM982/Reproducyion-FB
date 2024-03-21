import { useState } from "react"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";
import { auth } from "../firebase";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";



const Landing = () => {

    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const history = useNavigate();

    const db = getFirestore();

    let FnameInp = document.getElementById("fnameInp")
    let LnameInp = document.getElementById("lnameInp")
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");



    // CREATION DE COMPTE 

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
                history("/home");
            })
            .catch((error) => {
                alert(error.message);
                console.log(error.code);
                console.log(error.message);
            })

        if (true) {
            window.alert("Compte créer avec succèes, Merci")
        }
    }


    // CONNECTION AU COMPTE

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
                        email: docSnap.data().email,
                    }))
                    sessionStorage.setItem("user-creds", JSON.stringify(credentials.user));
                }
                history("/home");
            })
            .catch((error) => {
                alert(error.message);
                console.log(error.code);
                console.log(error.message);
            })
    };


    return (
        <section id="signIn">
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
                        <form id="loginForm" onSubmit={(e) => signIn(e)} className="bg-light p-3 rounded-3 text-center">
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
                            <button type="button" className="btn btcc my-3" onClick={handleShow}>Créer nouveau compte</button>
                        </form>
                        <p className="py-4 mx-4 text-center fs-9"> <b>Créer une Page</b> pour une célébrité, une marque ou une entreprise.</p>
                    </div>
                </div >
            </div >

            <Modal show={show} onHide={handleClose}>
                <Modal.Header className="d-grid">
                    <h1 className="d-flex justify-content-between">S'inscrire  <Button onClick={handleClose}>X</Button></h1>
                    <p>c'est rapide et facile</p>
                </Modal.Header>
                <Modal.Body>

                    <form id="registerForm" onSubmit={(e) => RegisterUser(e)} className="bg-light p-3 rounded-3 text-center">
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
                        <div className="mb-2">
                            <fieldset>
                                <legend className="text-start">Date de naissance </legend>
                                <div className="d-flex justify-content-between">
                                    <select className="col-md-3 rounded-3">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                        <option>6</option>
                                        <option>7</option>
                                        <option>8</option>
                                        <option>9</option>
                                        <option>10</option>
                                        <option>11</option>
                                        <option>12</option>
                                    </select>
                                    <select className="col-md-3 rounded-3">
                                        <option>Janvier</option>
                                        <option>Février</option>
                                        <option>Mars</option>
                                        <option>Avril</option>
                                        <option>Main</option>
                                        <option>Juin</option>
                                        <option>Juillet</option>
                                        <option>Aout</option>
                                        <option>Septembre</option>
                                        <option>Octobre</option>
                                        <option>Novembre</option>
                                        <option>Décembre</option>
                                    </select>
                                    <select className="col-md-3 rounded-3">
                                        <option>2011</option>
                                        <option>2012</option>
                                        <option>2013</option>
                                        <option>2014</option>
                                        <option>2016</option>
                                        <option>2017</option>
                                        <option>2018</option>
                                        <option>2019</option>
                                        <option>2020</option>
                                        <option>2022</option>
                                        <option>2023</option>
                                        <option>2024</option>
                                    </select>
                                </div>
                            </fieldset>

                        </div>
                        <div className="mb-2">
                            <fieldset >
                                <legend className="text-start">Genres</legend>
                                <div className="d-flex justify-content-between">
                                    <label className="d-flex justify-content-between col-md-3 p-1 border border-1 border-dark rounded-3">Femme<input type="radio" name="language" value="english" /></label>
                                    <label className="d-flex justify-content-between col-md-3 p-1 border border-1 border-dark rounded-3">Homme<input type="radio" name="language" value="french" /></label>
                                    <label className="d-flex justify-content-between col-md-4 p-1 border border-1 border-dark rounded-3">Personnalisé<input type="radio" name="language" value="greek" /></label>
                                </div>
                            </fieldset>

                        </div>
                        <p className="modal-p">Les personnes qui utilisent notre service ont pu importer vos coordonnées sur Facebook.
                            <a href="https://www.facebook.com/help/637205020878504">En savoir plus</a>.
                        </p>
                        <p className="modal-p">En cliquant sur S’inscrire, vous acceptez nos <a href="https://www.facebook.com/legal/terms/update">Conditions générales</a>,
                            notre <a href="https://www.facebook.com/privacy/policy/?entry_point=data_policy_redirect&entry=0">Politique de confidentialité</a>
                            et notre <a href="https://www.facebook.com/privacy/policies/cookies/?entry_point=cookie_policy_redirect&entry=0">Politique d’utilisation des cookies</a>. Vous recevrez peut-être
                            des notifications par texto de notre part et vous pouvez à tout moment vous désabonner.
                        </p>
                        <button type="submit" className="btn btcc w-50" >S'inscrire</button>
                    </form>
                </Modal.Body>
            </Modal>
            <Footer />
        </section >
    );
}

export default Landing;