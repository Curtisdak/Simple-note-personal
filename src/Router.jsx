import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { Login } from "./page/Login/Login";
import { HomePage } from "./page/HomePage/HomePage";
import { TodoPage } from "./page/TodoPage/TodoPage";




const router = createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        children:[
            {
                path:"/",
                element:<Login/>,
                index:true,
         },
        {
            path:"/home",
            element:<HomePage/>
        },
        {
            path:"/listpage/:id/:type",
            element:<TodoPage/>
        },
    ]
    }
])


export default router;