import { Route, Routes } from "react-router-dom";
import Blank from "../Pages/blank";
import Dashboard from "../Pages/dashboard";
import Homepage from "../Pages/Homepage";
import Login from "../Pages/Login";
import Payment from "../Pages/Payment";
import Pricing from "../Pages/Pricing";
import PublishB from "../Pages/Publish-b";
import Signup from "../Pages/Signup";
import PrivateRoute from "./PrivateRoute";

export default function AllRoutes({colorMode}){
    return(
        <Routes>
         <Route path="/" element={<Homepage colorMode={colorMode}/>} ></Route>
         <Route path="/publishing"  element={<PublishB colorMode={colorMode} />}></Route>
         <Route path="/login" element={<PrivateRoute><Login/></PrivateRoute>} ></Route>
         <Route path="/dashboard" element={<PrivateRoute><Dashboard/></PrivateRoute>} ></Route>
         <Route path="/signup" element={<Signup/>} ></Route>
         <Route path="/payment" element={<PrivateRoute><Payment/></PrivateRoute>} ></Route>
         <Route path="/pricing" element={<Pricing/>} ></Route>
         <Route path="*" element={<Blank/>} ></Route>
            
        </Routes>
    )
}