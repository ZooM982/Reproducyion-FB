import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import Logo from "../Image/logo.png"
import Acceuil from "../Image/aceuil.png"
import MarketplaceTop from "../Image/marketplaceTop.png"
import AmiTop from "../Image/amiTop.png"
import VideoTop from "../Image/vidéoTop.png"
import groupTop from "../Image/groupeTop.png"
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import { Tooltip } from "react-bootstrap";


const Navbar = () => {
    const history = useNavigate()

    const handleClick = () => {
        signOut(auth).then(val => {
            console.log(val, "val")
            history('/')
        })
    }


    return (
        < nav class="navbar navbar-expand-lg bg-body-dark" >
            <div class="container-fluid">
                <a class="navbar-brand" href="/">
                    <img src={Logo} alt="" />
                </a>
                <div className="recherche d-flex justify-content-between col-md-3">
                    <i class="fa-solid fa-magnifying-glass"></i>
                    <input type="text" placeholder="Rechercher sur facebook" />
                </div>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav col-md-6 mx-auto">
                    <li class="nav-item">
                            <a class="nav-link" href="/">
                                <OverlayTrigger placement="bottom" overlay={<Tooltip id="button-tooltip-2">Acceuil</Tooltip>}>
                                    {({ ref, ...triggerHandler }) => (
                                        <Button
                                            variant="dark" {...triggerHandler} className="d-inline-flex align-items-center">
                                            <Image ref={ref} className="w-100" src={Acceuil} />
                                            
                                        </Button>
                                    )}
                                </OverlayTrigger>
                            </a>
                        </li><li class="nav-item">
                            <a class="nav-link" href="/">
                                <OverlayTrigger placement="bottom" overlay={<Tooltip id="button-tooltip-2">Ami(es)</Tooltip>}>
                                    {({ ref, ...triggerHandler }) => (
                                        <Button
                                            variant="dark" {...triggerHandler} className="d-inline-flex align-items-center">
                                            <Image ref={ref} className="w-100" src={AmiTop} />
                                            
                                        </Button>
                                    )}
                                </OverlayTrigger>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/">
                                <OverlayTrigger placement="bottom" overlay={<Tooltip id="button-tooltip-2">Vidéos</Tooltip>}>
                                    {({ ref, ...triggerHandler }) => (
                                        <Button
                                            variant="dark" {...triggerHandler} className="d-inline-flex align-items-center">
                                            <Image ref={ref} className="w-100" src={VideoTop} />
                                            
                                        </Button>
                                    )}
                                </OverlayTrigger>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/">
                                <OverlayTrigger placement="bottom" overlay={<Tooltip id="button-tooltip-2">Marketplaces</Tooltip>}>
                                    {({ ref, ...triggerHandler }) => (
                                        <Button
                                            variant="dark" {...triggerHandler} className="d-inline-flex align-items-center">
                                            <Image ref={ref} className="w-100" src={MarketplaceTop} />
                                            
                                        </Button>
                                    )}
                                </OverlayTrigger>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/">
                                <OverlayTrigger placement="bottom" overlay={<Tooltip id="button-tooltip-2">Groupes</Tooltip>}>
                                    {({ ref, ...triggerHandler }) => (
                                        <Button
                                            variant="dark" {...triggerHandler} className="d-inline-flex align-items-center">
                                            <Image ref={ref} className="w-100" src={groupTop} />
                                            
                                        </Button>
                                    )}
                                </OverlayTrigger>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <button onClick={handleClick}>SignOut</button>
        </nav >
    )
}

export default Navbar