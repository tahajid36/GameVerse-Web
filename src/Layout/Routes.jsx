import { createBrowserRouter } from "react-router"
import MainLayout from "./MainLayout"
import Home from "../Pages/Home"
import GameSection from "../Components/GameSection"
import GameDetails from "../Pages/GameDetails"
import Login from "../Pages/Login"
import AuthLayout from "./AuthLayout"
import Register from "../Pages/Register"
import PrivateRoute from "./PrivateRoute"
import MyProfile from "../Pages/MyProfile"
import ForgetPassword from "../Pages/ForgetPassword"
import Loading from "../Pages/Loading"
import Error from "../Components/Error"

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                index:true,
                element: <Home></Home>,
                loader: ()=> fetch('/gameInfo.json')
                
            },
            {
                path: '/gamedetails/:id',
                element: <PrivateRoute>
                    <GameDetails></GameDetails>
                </PrivateRoute>,
                loader: ()=> fetch('/gameInfo.json'),
                hydrateFallbackElement: <Loading></Loading>,
                errorElement: <Error></Error>
            },
            {
                path: '/myprofile',
                element: <PrivateRoute>
                    <MyProfile> </MyProfile>
                </PrivateRoute>
            },
            
           
        ]
    },
    {
        path: '/gamessection',
        element: <GameSection></GameSection>,
        loader: ()=> fetch('/gameInfo.json')    
    },
    
    {
        path: '/auth',
        element: <AuthLayout></AuthLayout>,
        children: [
            {
                path: '/auth/login',
                Component: Login
            },
            {
                path: '/auth/register',
                Component: Register
            },
            {
                path: '/auth/paswordreset',
                Component: ForgetPassword
            }
        ]
    }

])