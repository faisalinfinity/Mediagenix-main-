import { Grid ,Text} from "@chakra-ui/layout"
import Logo from "../Components/logo"
export default function  Blank(){
    return(
        <Grid ml={"40px"} mt={"30px"} templateColumns={"10% 90%"}>
              <Logo/>
              <Text></Text>

        </Grid>
      
        
    )
}