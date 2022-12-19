import { createContext } from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import { gapi } from "gapi-script";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Center } from "@chakra-ui/layout";


export const AuthContext = createContext();



export default function AuthContextProvider({ children }) {
  const clientId =
    "753388848937-vvg5pjh87cdg02uc6fa4m21k66p3d3im.apps.googleusercontent.com";

  const [profile, setProfile] = useState({});
  const [isAuth,setisAuth]=useState(false)
  const navigate=useNavigate();


 

  useEffect(() => {
    const initClient = () => {
      gapi.client.init({
        clientId: clientId,
        scope: "",
      });
    };
    gapi.load("client:auth2", initClient);
  },[]);

  const onSuccess = (res) => {
    setProfile(res.profileObj);
    localStorage.setItem("profile",JSON.stringify(res.profileObj))
    setisAuth(true)
    navigate("/dashboard")
  };

  const onFailure = (err) => {
    console.log("failed", err);
  };

  const logOut = (e) => {
   
    setProfile(null);
    setisAuth(false)
    localStorage.setItem("profile",JSON.stringify({}))
   

  };

  console.log(profile);

  const GoogleAuthUI=()=>{

   

    return(
        <div  class="g-signin2" data-width="900" data-height="200" data-longtitle="true">
      
            <br />
            <br />
            {profile&&profile?.name && profile? (
                <div>
                    {/* <img src={profile.imageUrl} alt="user image" />
                    <h3>User Logged in</h3>
                    <p>Name: {profile.name}</p>
                    <p>Email Address: {profile.email}</p>
                    <br />
                    <br /> */}
                   
                  
                </div>
            ) : (
                <Center>
                     <GoogleLogin 
                    clientId={clientId}
                    buttonText="Sign in with Google"
                    onSuccess={onSuccess}
                    onFailure={onFailure}
                    cookiePolicy={'single_host_origin'}
                    isSignedIn={true}
                    data-height="standard"
                    data-width="1000px"
                />


                </Center>
               
            )}
        </div>
    )
  }

  //Masai Authentication
  const [name,setname]=useState("")
  const  LogoutButton=()=>{
    return(
      <GoogleLogout clientId={clientId}  buttonText="Log out" onLogoutSuccess={logOut} />
    )
  }


  


  return <AuthContext.Provider value={{LogoutButton,GoogleAuthUI,profile,setname,isAuth,setisAuth,setProfile}} >{children}</AuthContext.Provider>;
}
