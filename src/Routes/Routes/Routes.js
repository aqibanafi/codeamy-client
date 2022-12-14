import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import AboutUs from "../../Pages/AboutUS/AboutUs";
import AllCourse from "../../Pages/AllCourse/AllCourse/AllCourse";
import AskedQuestions from "../../Pages/AskedQuestions/AskedQuestions";
import Blog01 from "../../Pages/Blogs/Blog01/Blog01";
import Blog02 from "../../Pages/Blogs/Blog02/Blog02";
import Blog03 from "../../Pages/Blogs/Blog03/Blog03";
import Blog04 from "../../Pages/Blogs/Blog04/Blog04";
import BlogMain from "../../Pages/Blogs/BlogMain/BlogMain";
import Category from "../../Pages/Category/Category";
import ConditionPage from "../../Pages/ConditionPage/ConditionPage";
import Courses from "../../Pages/Courses/Courses";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login/Login";
import Registration from "../../Pages/Login/Registration/Registration";
import PremiumAccessForm from "../../Pages/PremiumAccessForm/PremiumAccessForm";
import TrialPage from "../../Pages/TrialPage/TrialPage";
import UserProfile from "../../Pages/UserProfile/UserProfile";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";


export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                loader: () => fetch('https://codeamy-server-side.vercel.app/courses-categories'),
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
                path: '/frequently-asked-questions',
                element: <AskedQuestions></AskedQuestions>
            },
            {
                path:'/courses-categories/:id',
                loader: ({params}) => fetch(`https://codeamy-server-side.vercel.app/category/${params.id}`),
                element: <Category></Category>
            },
            {
                path: '/course/:id',
                loader: ({params}) => fetch(`https://codeamy-server-side.vercel.app/course/${params.id}`),
                element: <Courses></Courses>
            },
            {
                path: '/premium-access/:id',
                loader: ({params}) => fetch(`https://codeamy-server-side.vercel.app/course/${params.id}`),
                element: <PrivateRoutes><PremiumAccessForm></PremiumAccessForm></PrivateRoutes>
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
            },
            {
                path: '/courses',
                element: <AllCourse></AllCourse>,
                loader: () => fetch('https://codeamy-server-side.vercel.app/courses')
            },
            {
                path: '/profile',
                element: <PrivateRoutes><UserProfile></UserProfile></PrivateRoutes>
            },
            {
                path: '*',
                element: <ErrorPage></ErrorPage>
            },
            {
                path:'/termsnconditions',
                element: <ConditionPage></ConditionPage>
            },
            {
                path: '/trial',
                element: <TrialPage></TrialPage>
            }
        ]
    }
])