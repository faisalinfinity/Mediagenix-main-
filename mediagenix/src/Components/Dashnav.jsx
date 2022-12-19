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
  useBoolean,
  Text,
  VStack,
  Grid,
  GridItem,
  Avatar,
  Divider
} from "@chakra-ui/react";
import * as React from "react";
import { FiMenu, FiInstagram, FiBell, FiChevronDown } from "react-icons/fi";
import { FaFacebookF, FaPinterestSquare } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { SiTiktok, SiShopify, SiGooglemybusiness } from "react-icons/si";
import { BsLinkedin } from "react-icons/bs";
import { BiPaperPlane, BiMessageDetail } from "react-icons/bi";
import { GrLineChart } from "react-icons/gr";
import { HiOutlinePencilSquare,HiOutlineRectangleStack } from "react-icons/hi2";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import {BsCalendarDate} from "react-icons/bs"
import {SlGraph} from "react-icons/sl"

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react'

import Btn from "./Buttons/Btn-1";

import {
  PhoneIcon,
  AddIcon,
  WarningIcon,
  ChevronDownIcon,
} from "@chakra-ui/icons";
import DrawerExample from "./Drawer/Drawer";
import { NavLink, useNavigate } from "react-router-dom";
import Logo from "./logo";
import { useState } from "react";
import Content from "./Content";
import CalendarExp from "./Calender"
import { AuthContext } from "../AuthContext/AuthContext";


export const DashNav = () => {
  const isDesktop = useBreakpointValue({
    base: false,
    lg: true,
  });


 

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [flag, setflag] = useBoolean();
  const [Index, setIndex] = useState(0);
  const [Index2,setIndex2]=useState(0)
 const navigate=useNavigate()
  console.log(Index2)
  const {LogoutButton,profile}=React.useContext(AuthContext)
  console.log(profile.imageUrl)
 

  //

  // 3. Pass the props and chill!

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
          marginLeft={{ base: "0px", lg: "10px" }}
          py={{
            base: "4",
            lg: "5",
          }}
        >
          <HStack  gap={"1px"} spacing="1" >
            <Logo />

            {isDesktop ? (
              <Flex gap={"500px"} justify="space-between" flex="1">
                <ButtonGroup variant="link" spacing="8">
                  
                  <Tabs onChange={(index) => setIndex(index)}>
                    <TabList >
                      <Tab   fontSize={"17px"} fontWeight={"bold"} >Publishing</Tab>
                      <Tab fontSize={"17px"} fontWeight={"bold"} >Analytics</Tab>
                      <Tab fontSize={"17px"} fontWeight={"bold"} >Engagements</Tab>
                      <Tab fontSize={"17px"} fontWeight={"bold"} >StartPage</Tab>
                    </TabList>
                  </Tabs>
                </ButtonGroup>
                <HStack spacing={{ base: "0", md: "1" }}>
                  <Button onClick={()=>navigate("/pricing")} color={"#2c4bff"} variant={"link"}>See Plans</Button>
                  <IconButton
                    size="lg"
                    variant="ghost"
                    aria-label="open menu"
                    icon={<FiBell />}
                  />
                  <Flex alignItems={"center"}>
                    <Menu>
                      <MenuButton
                        py={2}
                        transition="all 0.3s"
                        _focus={{ boxShadow: "none" }}
                      >
                        <HStack>
                          <Avatar
                            size={"sm"}
                            alt={profile?.src}
                            src={profile.imageUrl}
                          />
                          <VStack
                            display={{ base: "none", md: "flex" }}
                            alignItems="flex-start"
                            spacing="1px"
                            ml="2"
                          >
                            <Text fontSize="sm">{profile.email}</Text>
                            <Text fontSize="xs" color="gray.600">
                              Admin
                            </Text>
                          </VStack>
                          <Box display={{ base: "none", md: "flex" }}>
                            <FiChevronDown />
                          </Box>
                        </HStack>
                      </MenuButton>
                      <MenuList borderColor={"gray.200"}>
                        <MenuItem>Profile</MenuItem>
                        <MenuItem>Settings</MenuItem>
                        <MenuItem>Billing</MenuItem>
                        <MenuDivider />
                        <MenuItem><LogoutButton/></MenuItem>
                      </MenuList>
                    </Menu>
                  </Flex>
                </HStack>
              </Flex>
            ) : (
              <>
                <DrawerExample />
              </>
            )}
          </HStack>
        </Container>
        <Grid
         
          templateColumns={{base:"repeat(1,1fr)",lg:"15% 85%"}}
          templateRows={{base:"auto",lg:"auto"}}
        >
          <GridItem border={"1px solid grey"}>
            <VStack >
              <Tabs onChange={(index) => setIndex2(index)}>
                <Tab>
                  <Text fontWeight={"bold"}>
                    {" "}
                    <IconButton
                      size="lg"
                      variant="ghost"
                      aria-label="open menu"
                      icon={<HiOutlineRectangleStack />}
                    />{" "}
                    Contents
                  </Text>
                </Tab>
                <Tab>
                  <Text fontWeight={"bold"}>
                    {" "}
                    <IconButton
                      size="lg"
                      variant="ghost"
                      aria-label="open menu"
                      icon={<BsCalendarDate />}
                    />{" "}
                   Calender
                  </Text>
                </Tab>
                <Tab>
                  <Text fontWeight={"bold"}>
                    {" "}
                    <IconButton
                      size="lg"
                      variant="ghost"
                      aria-label="open menu"
                      icon={<SlGraph />}
                    />{" "}
                   Campaigns
                  </Text>
                </Tab>
    
              </Tabs>
              <Accordion allowToggle>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
          Queued
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
     
    </AccordionPanel>
  </AccordionItem>

</Accordion>
            </VStack>
          </GridItem>
          <GridItem >

           {Index2==0?<Content/>:null}
           {Index2==1?<CalendarExp/>:null}
            
            
          
          </GridItem>
        </Grid>
      </Box>
    </Box>
  );
};
