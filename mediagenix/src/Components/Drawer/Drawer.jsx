import {
  Drawer,
  DrawerContent,
  DrawerBody,
  DrawerCloseButton,
  DrawerOverlay,
  DrawerHeader,
  useDisclosure,
  ButtonGroup,
} from "@chakra-ui/react";
import { useEffect } from "react";


import { IconButton } from "@chakra-ui/react";
import * as React from "react";
import { FiMenu, FiInstagram } from "react-icons/fi";
import { FaFacebookF, FaPinterestSquare } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { SiTiktok, SiShopify, SiGooglemybusiness } from "react-icons/si";
import { BsLinkedin } from "react-icons/bs";
import { BiPaperPlane, BiMessageDetail } from "react-icons/bi";
import { GrLineChart } from "react-icons/gr";
import { HiOutlinePencilSquare } from "react-icons/hi2";

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  MenuItem,
  Button,
  VStack,
  Flex,
  Image,
  Text
} from "@chakra-ui/react";

export default function DrawerExample() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleopen = () => {
    onOpen();
  };

  return (
    <>
      <IconButton
        onClick={handleopen}
        variant="ghost"
        icon={<FiMenu fontSize="1.25rem" />}
        aria-label="Open Menu"
      />
      <Drawer onClose={onClose} isOpen={isOpen} size={"full"}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>{<>
            <Image
              w="80px"
              display={"block"}
              borderRadius={"50%"}
              src="https://i.postimg.cc/Kz1pzdck/Mediagenix.gif"
              alt="logo"
            />

            <Text fontWeight={"bold"}>Mediagenix</Text>
          
          </>}</DrawerHeader>
          <DrawerBody>
            <Accordion allowToggle>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box fontWeight={"bold"} as="span" flex="1" textAlign="left">
                   Tools
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <ButtonGroup
                    display={"flex"}
                    flexDirection="column"
                    justifyContent={"flex-start"}
                    textAlign={"start"}
                  >
                    <Button w="30%" leftIcon={<BiPaperPlane />} variant="ghost">
                      Publishing
                    </Button>

                    <Button w="25%" leftIcon={<GrLineChart />} variant="ghost">
                      Analytics
                    </Button>

                    <Button
                      w="30%"
                      leftIcon={<BiMessageDetail />}
                      variant="ghost"
                    >
                      Engagements
                    </Button>

                    <Button
                      w="25%"
                      leftIcon={<HiOutlinePencilSquare />}
                      variant="ghost"
                    >
                      Start Page
                    </Button>
                  </ButtonGroup>
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box fontWeight={"bold"} as="span" flex="1" textAlign="left">
                      Channels
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <ButtonGroup
                    display={"flex"}
                    flexDirection="column"
                    justifyContent={"flex-start"}
                    textAlign={"start"}
                  >
                    <Button w="30%" leftIcon={<FaFacebookF />} variant="ghost">
                      Facebook
                    </Button>
                    <Button  w="45%" leftIcon={<SiGooglemybusiness />} variant="ghost">
                      Google Business Profile
                    </Button>
                    <Button w="30%" leftIcon={<FiInstagram />} variant="ghost">
                      Instagram
                    </Button>
                    <Button w="30%" leftIcon={<BsLinkedin />} variant="ghost">
                      LinkedIn
                    </Button>
                    <Button w="30%" leftIcon={<FaPinterestSquare />} variant="ghost">
                      Pinterest
                    </Button>
                    <Button w="30%" leftIcon={<SiShopify />} variant="ghost">
                      Shopify
                    </Button>
                    <Button w="30%" leftIcon={<SiTiktok />} variant="ghost">
                      Tiktok
                    </Button>
                    <Button w="30%" leftIcon={<AiOutlineTwitter />} variant="ghost">
                      Twitter
                    </Button>
                  </ButtonGroup>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
