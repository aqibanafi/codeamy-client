import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import AboutUs from "../../Pages/AboutUS/AboutUs";
import Blog01 from "../../Pages/Blogs/Blog01/Blog01";
import Blog02 from "../../Pages/Blogs/Blog02/Blog02";
import Blog03 from "../../Pages/Blogs/Blog03/Blog03";
import Blog04 from "../../Pages/Blogs/Blog04/Blog04";
import BlogMain from "../../Pages/Blogs/BlogMain/BlogMain";
import Category from "../../Pages/Category/Category";
import Courses from "../../Pages/Courses/Courses";
import FAQ from "../../Pages/FAQ/FAQ";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login/Login";
import Registration from "../../Pages/Login/Registration/Registration";
import PremiumAccessForm from "../../Pages/PremiumAccessForm/PremiumAccessForm";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                loader: () => fetch('http://localhost:5000/courses-categories'),
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/registration',
                element: <Registration></Registration>
            },
            {
                path: '/aboutus',
                element: <AboutUs></AboutUs>
            },
            {
                path: '/faq',
                element: <FAQ></FAQ>
            },
            {
                path:'/courses-categories/:id',
                loader: ({params}) => fetch(`http://localhost:5000/category/${params.id}`),
                element: <Category></Category>
            },
            {
                path: '/course/:id',
                loader: ({params}) => fetch(`http://localhost:5000/course/${params.id}`),
                element: <Courses></Courses>
            },
            {
                path: '/premium-access/:id',
                loader: ({params}) => fetch(`http://localhost:5000/course/${params.id}`),
                element: <PremiumAccessForm></PremiumAccessForm>
            },
            {
                path: '/blogs',
                element: <BlogMain></BlogMain>
            },
            {
                path: '/blog01',
                element: <Blog01></Blog01>
            },
            {
                path: '/blog02',
                element: <Blog02></Blog02>
            },
            {
                path: '/blog03',
                element: <Blog03></Blog03>
            },
            {
                path:'/blog04',
                element: <Blog04></Blog04>
            }
        ]
    }
])