import { createBrowserRouter} from "react-router-dom";
import Root from "../layout/Root";
import Home from "../Page/Home/Home";
import About from "../Page/About/About";
import Service from "../Page/Service/Service";
import Contact from "../Page/Contact/Contact";
const router = createBrowserRouter ([

    {
        path: "/",
        element: <Root/>,
        children:[
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/about',
                element: <About/>
            },
            {
                path: '/service',
                element: <Service/>
            },
            {
                path: '/contact',
                element: <Contact/>
            },
        ]
    }
])
export default router;