import { useContext } from "react";
import { AuthContext } from "../AuthContext/AuthContext";
import Login from "../Pages/Login";


export default function PrivateRoute({children}){
     
    const {isAuth}=useContext(AuthContext)

    if(!isAuth){
        return <Login/>
    }

    return children;

   
}