import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";




const Home = () => {
    const history = useNavigate()

    const handleClick = () =>{
        signOut(auth).then(val=>{
            console.log(val,"val")
            history('/')
        })
    }
    return(
        <div>
            <h1>Home</h1>
            <button onClick={handleClick}>SignOut</button>
        </div>
    )
}

export default Home;
