import logo from "./logo.svg";
import "./App.css";
import { Navbar } from "./Components/Navbar";

import Homepage from "./Pages/Homepage";
import { useColorMode, Button, Container } from "@chakra-ui/react";
import { MdDarkMode } from "react-icons/md";
import { PublishParaA } from "./Components/para/Para";
import PublishB from "./Pages/Publish-b";
import AllRoutes from "./Components/AllRoutes";
import Login from "./Pages/Login";

function App() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Button
        borderRadius={"50%"}
        w="60px"
        h={"60px"}
        position={"fixed"}
        left="6"
        right={"100px"}
        top="650px"
        onClick={toggleColorMode}
      >
        <MdDarkMode />
      </Button>

      <AllRoutes colorMode={colorMode} />
      {/* <Login/> */}
    </>
  );
}

export default App;
