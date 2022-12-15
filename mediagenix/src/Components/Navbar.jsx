import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Box,
  Button,
  ButtonGroup,
  Container,
  Flex,
  HStack,
  IconButton,
  Image,
  useBreakpointValue,
  useColorModeValue,
  useDisclosure,
  useBoolean,Text,VStack
} from "@chakra-ui/react";
import * as React from "react";
import { FiMenu,FiInstagram } from "react-icons/fi";
import { FaFacebookF,FaPinterestSquare  } from "react-icons/fa";
import {AiOutlineTwitter} from "react-icons/ai"
import {SiTiktok,SiShopify,SiGooglemybusiness} from "react-icons/si"
import {BsLinkedin} from "react-icons/bs"
import {BiPaperPlane,BiMessageDetail} from "react-icons/bi"
import {GrLineChart} from "react-icons/gr"
import {HiOutlinePencilSquare} from "react-icons/hi2"


import Btn from "./Buttons/Btn-1"

  
  
import {
  PhoneIcon,
  AddIcon,
  WarningIcon,
  ChevronDownIcon,
} from "@chakra-ui/icons";
import DrawerExample from "./Drawer/Drawer";
import { NavLink } from "react-router-dom";
import Logo from "./logo";

export const Navbar = () => {
  const isDesktop = useBreakpointValue({
    base: false,
    lg: true,
  });

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [flag, setflag] = useBoolean();

  return (
    <Box
      as="section"
      pb={{
        base: "12",
        md: "24",
      }}
    >
      <Box
        as="nav"
        bg="bg-surface"
        boxShadow={useColorModeValue("sm", "sm-dark")}
      >
        <Container
          marginLeft={{ base: "0px", lg: "200px" }}
          py={{
            base: "4",
            lg: "5",
          }}
        >
          <HStack spacing="100" justify="space-between">
           <Logo/>
           
            {isDesktop ? (
              <Flex gap={"500px"} justify="space-between" flex="1">
                <ButtonGroup variant="link" spacing="8">
                  {/* {['Product', 'Pricing', 'Resources', 'Support'].map((item) => (
                      <Button key={item}>{item}</Button>
                    ))} */}

                  <Menu isOpen={flag}>
                    <MenuButton
                      onMouseEnter={setflag.on}
                      _focus={{ boxShadow: "outline" }}
                      onMouseLeave={setflag.off}
                      as={Button}
                      rightIcon={<ChevronDownIcon />}
                    >
                      Tools
                    </MenuButton>
                    <MenuList onMouseEnter={setflag.on} onMouseLeave={setflag.off}
                      boxShadow="md"
                      border={"1px solid black"}
                      w="200px"
                    
                    >
                      <MenuItem>
                        <Button leftIcon={<BiPaperPlane/>} variant="ghost"><NavLink to={"/publishing"} >Publishing</NavLink></Button>
                      </MenuItem>
                      <MenuItem>
                        <Button leftIcon={<GrLineChart/>}  variant="ghost">Analytics</Button>
                      </MenuItem>
                      <MenuItem>
                        <Button leftIcon={<BiMessageDetail/>}   variant="ghost">Engagements</Button>
                      </MenuItem>
                      <MenuItem>
                        <Button leftIcon={<HiOutlinePencilSquare/>}  variant="ghost">Start Page</Button>
                      </MenuItem>
                    </MenuList>
                  </Menu>
                  <Menu id="2" isOpen={isOpen}>
                    <MenuButton
                      onMouseEnter={onOpen}
                      onMouseLeave={onClose}
                      as={Button}
                      rightIcon={<ChevronDownIcon />}
                    >
                      Channels
                    </MenuButton>
                    <MenuList onMouseEnter={onOpen} onMouseLeave={onClose} boxShadow="md">
                      <MenuItem>
                        <Button leftIcon={<FaFacebookF />} variant="ghost">
                          Facebook
                        </Button>
                      </MenuItem>
                      <MenuItem>
                        <Button leftIcon={<SiGooglemybusiness />} variant="ghost">Google Business Profile</Button>
                      </MenuItem>
                      <MenuItem>
                        <Button leftIcon={<FiInstagram />} variant="ghost">Instagram</Button>
                      </MenuItem>
                      <MenuItem>
                        <Button leftIcon={<BsLinkedin />} variant="ghost">LinkedIn</Button>
                      </MenuItem>
                      <MenuItem>
                        <Button leftIcon={<FaPinterestSquare />} variant="ghost">Pinterest</Button>
                      </MenuItem>
                      <MenuItem>
                        <Button leftIcon={<SiShopify />} variant="ghost">Shopify</Button>
                      </MenuItem>
                      <MenuItem>
                        <Button leftIcon={<SiTiktok />} variant="ghost">Tiktok</Button>
                      </MenuItem>
                      <MenuItem>
                        <Button leftIcon={<AiOutlineTwitter />} variant="ghost">Twitter</Button>
                      </MenuItem>
                    </MenuList>
                  </Menu>
                  <Button>Pricing</Button>
                  <Button>Blog</Button>
                </ButtonGroup>
                <HStack spacing="1">
                  <Btn tc="#2c4bff" text={"Log In"} />
                <Btn clr="#2c4bff" text={"Get Started Now"} />
                 
                </HStack>
              </Flex>
            ) : (
              <>
              <DrawerExample/>
              
              
              </>
              
              
            )}
            
          </HStack>
        </Container>
      </Box>
      
    </Box>
    
  );
};
