import { useEffect, useState, useRef } from "react"
import Home from "../components/Home"
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const SignIn = () => {

    const [showHome, setShowHome] = useState(false)
    const [show, setShow] = useState(false)
    const localSignUp = localStorage.getItem("signUp")
    const localEmail = localStorage.getItem("email")
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        if (localSignUp) {
            setShowHome(true)
        }
        if (localEmail) {
            setShow(true)
        }
    })



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
                                <form className="bg-light p-3 rounded-3 text-center">
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
                                <Button variant="primary" >
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
                                    <form className="bg-light p-3 rounded-3 text-center">
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