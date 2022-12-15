import logo from "./logo.svg";
import "./App.css";
import { Navbar } from "./Components/Navbar";

import Homepage from "./Pages/Homepage";
import { useColorMode,Button } from "@chakra-ui/react";
import {MdDarkMode} from "react-icons/md"
import { PublishParaA } from "./Components/para/Para";
import PublishB from "./Pages/Publish-b";
import AllRoutes from "./Components/AllRoutes";
import Login from "./Pages/Login";


function App() {
 
    const { colorMode, toggleColorMode } = useColorMode()
    
  

  return (
    <>
     <header  >
        <Button position={"absolute"} onClick={toggleColorMode}>
        <MdDarkMode/>
        </Button>
      </header>
      {/* <AllRoutes colorMode={colorMode}  /> */}
      <Login/>
     
    </>
  );
}

export default App;
