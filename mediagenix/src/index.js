import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ChakraProvider, ThemeProvider } from "@chakra-ui/react";
import { ColorModeScript } from '@chakra-ui/react'
import theme from "./Components/theme"
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    
  <ChakraProvider>
    <>
    
    </>
     
    <ColorModeScript initialColorMode={theme.config.initialColorMode}/>
      <App />
      
  
  </ChakraProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
