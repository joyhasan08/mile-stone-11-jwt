import { Link } from "react-router-dom";


const NavBar = () => {
    return (
        <div>
            <nav className=" bg-slate-500 flex justify-between items-center  p-2 ">
                <div>
                    <h1>LoGo</h1>
                    <img src="" alt="" />
                </div>
                <div >
                    <ul className="flex gap-4 items-center">
                        <Link to={"/"}>Home</Link>
                        <Link>About</Link>
                        <Link to={"/services"} >Services</Link>
                        <Link to={"/app"} className="btn btn-sm btn-outline">Appointment</Link>
                        <Link to={"/login"} className="btn btn-sm btn-secondary">Login</Link>

                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;