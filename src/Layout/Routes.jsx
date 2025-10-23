import { createBrowserRouter } from "react-router"
import MainLayout from "./MainLayout"
import Home from "../Pages/Home"
import GameSection from "../Components/GameSection"
import GameDetails from "../Pages/GameDetails"
import Login from "../Pages/Login"
import AuthLayout from "./AuthLayout"
import Register from "../Pages/Register"

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
                Component: GameDetails,
                loader: ()=> fetch('/gameInfo.json')
            }
            
           
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
            }
        ]
    }

])