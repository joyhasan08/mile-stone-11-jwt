import { Link } from "react-router-dom";


const NavBar = () => {
    return (
        <div>
            <nav className=" bg-slate-500 flex justify-between px-2 ">
                <div>
                    <h1>LoGo</h1>
                </div>
                <div >
                    <ul className="flex gap-4">
                        <Link>Home</Link>
                        <Link>About</Link>
                        <Link>Coming soon</Link>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;