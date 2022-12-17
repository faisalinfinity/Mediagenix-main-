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
import { NavLink } from "react-router-dom";
import Logo from "./logo";
import { useState } from "react";
import Content from "./Content";

export const DashNav = () => {
  const isDesktop = useBreakpointValue({
    base: false,
    lg: true,
  });

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [flag, setflag] = useBoolean();
  const [Index, setIndex] = useState(0);
  const [Index2,setIndex2]=useState(0)

  console.log(Index2)

 

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
          marginLeft={{ base: "0px", lg: "80px" }}
          py={{
            base: "4",
            lg: "5",
          }}
        >
          <HStack gap={"40px"} spacing="1" justify="space-between">
            <Logo />

            {isDesktop ? (
              <Flex gap={"500px"} justify="space-between" flex="1">
                <ButtonGroup variant="link" spacing="8">
                  
                  <Tabs onChange={(index) => setIndex(index)}>
                    <TabList>
                      <Tab>Publishing</Tab>
                      <Tab>Analytics</Tab>
                      <Tab>Engagements</Tab>
                      <Tab>StartPage</Tab>
                    </TabList>
                  </Tabs>
                </ButtonGroup>
                <HStack spacing={{ base: "0", md: "6" }}>
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
                            src={
                              "https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                            }
                          />
                          <VStack
                            display={{ base: "none", md: "flex" }}
                            alignItems="flex-start"
                            spacing="1px"
                            ml="2"
                          >
                            <Text fontSize="sm">mujtabafaisal944</Text>
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
                        <MenuItem>Sign out</MenuItem>
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
          border={"1px solid black"}
          templateColumns={"15% 85%"}
          templateRows={"600px"}
        >
          <GridItem border={"1px solid grey"}>
            <VStack>
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
          <GridItem border={"1px solid black"}><Content/></GridItem>
        </Grid>
      </Box>
    </Box>
  );
};
