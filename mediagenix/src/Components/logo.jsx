import { VStack } from "@chakra-ui/layout"
import {Image,Text} from "@chakra-ui/react"

export default function Logo(){
    return(
        <VStack>
        <Image
          w="80px"
          display={"block"}
          borderRadius={"50%"}
          src="https://i.postimg.cc/Kz1pzdck/Mediagenix.gif"
          alt="logo"
        />
          <Text fontWeight={"bold"}>Mediagenix</Text>

        </VStack>
    )
}