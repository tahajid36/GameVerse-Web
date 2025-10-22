import { createBrowserRouter } from "react-router"
import MainLayout from "./MainLayout"
import Home from "../Pages/Home"
import GameSection from "../Components/GameSection"

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
                path: '/gamessection',
                element: <GameSection></GameSection>,
                
            }
           
        ]
    }

])