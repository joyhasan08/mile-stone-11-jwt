import { createBrowserRouter } from "react-router-dom";
import "./../index.css"
import App from "../App";
import Home from "../Page/Home/Home";
import Appoinment from "../Page/Appointmment/Appoinment";
import Login from "../Page/Login/Login";
import Registration from "../Page/Login/Registration";


const router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/app",
                element: <Appoinment></Appoinment>
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/reg",
                element: <Registration />
            }
        ]
    },

]);

export default router;

