import { Navigate,Outlet } from "react-router-dom";

export const ProtectedRoute= ({user})=>{
    if (!user.isSignedIn){
        return <Navigate to='/' replace/>
    }
    return <Outlet/>
}