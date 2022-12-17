import { createBrowserRouter } from "react-router-dom";
import Blog from "../Blog/Blog";
import Home from "../Home/Home/Home";
import Main from "../Layout/Main";
import ProjectDetails from "../ProjecDetails/ProjectDetails";

const route = createBrowserRouter([
    {
        path:'/', 
        element: <Main></Main>,
        children:[
            {
                path: '/', 
                element: <Home></Home>
            } , 
            {
                path: '/blog', 
                element: <Blog></Blog>
            }
           
        ]
    } , 
    {
        path: '/project/:id', 
        element: <ProjectDetails></ProjectDetails>
    }
])
export default route;