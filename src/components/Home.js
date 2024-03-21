import Navbar from "./Navbar";

const Home = () => {
    
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="header ">
                    <Navbar />
                </div>
                <hr />
                <div className="body">
                    <div className=" col-md-3 bg-primary body-left">FFF</div>
                    <div className=" col-md-6 bg-success body-center">hhh</div>
                    <div className=" col-md-3 bg-primary body-right">kkk</div>
                </div>

            </div>
        </div>
    )
}

export default Home;
