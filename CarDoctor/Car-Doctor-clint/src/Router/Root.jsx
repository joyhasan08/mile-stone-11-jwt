import { createBrowserRouter } from "react-router-dom";
import "./../index.css"
import App from "../App";
import Home from "../Page/Home/Home";


const router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
        ]
    },
]);

export default router;

