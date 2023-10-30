import { createBrowserRouter } from "react-router-dom";
import "./../index.css"
import App from "../App";
import Home from "../Page/Home/Home";
import Appoinment from "../Page/Appointmment/Appoinment";


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
                path: "app",
                element: <Appoinment></Appoinment>
            }
        ]
    },
]);

export default router;

