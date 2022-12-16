import { Route, Routes } from "react-router-dom";
import Homepage from "../Pages/Homepage";
import Login from "../Pages/Login";
import PublishB from "../Pages/Publish-b";

export default function AllRoutes({colorMode}){
    return(
        <Routes>
         <Route path="/" element={<Homepage colorMode={colorMode}/>} ></Route>
         <Route path="/publishing"  element={<PublishB colorMode={colorMode} />}></Route>
         <Route path="/login" element={<Login/>} ></Route>
            
        </Routes>
    )
}