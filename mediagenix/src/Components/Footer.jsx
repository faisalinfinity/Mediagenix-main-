import { ReactNode } from "react";

import {
  Box,
  Container,
  Image,
  Link,
  SimpleGrid,
  Stack,
  Text,
  VStack,
  Center,
  useColorModeValue,
  HStack,
} from "@chakra-ui/react";

import { FiMenu, FiInstagram } from "react-icons/fi";
import { FaFacebookF, FaPinterestSquare } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { SiTiktok, SiShopify, SiGooglemybusiness } from "react-icons/si";
import { BsLinkedin } from "react-icons/bs";
import { BiPaperPlane, BiMessageDetail } from "react-icons/bi";
import { GrLineChart } from "react-icons/gr";
import { HiOutlinePencilSquare } from "react-icons/hi2";

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container as={Stack} maxW={"6xl"} py={10}>
        <SimpleGrid
          templateColumns={{
            base: "1fr 1fr",
            sm: "1fr 1fr",
            md: "2fr 1fr 1fr 1fr 1fr",
          }}
          spacing={8}
        >
          <Stack spacing={6}>
            <Box>
              {/* <Logo color={useColorModeValue('gray.700', 'white')} /> */}
              <VStack>
                <Image
                  w="80px"
                  display={"block"}
                  borderRadius={"50%"}
                  src="https://i.postimg.cc/Kz1pzdck/Mediagenix.gif"
                  alt="logo"
                />
                <Text fontWeight={"bold"}>Mediagenix</Text>
                <br />
                <HStack>
                  <Link>
                    <FiInstagram />
                  </Link>
                  <Link>
                    <FaFacebookF />
                  </Link>
                  <Link>
                    <AiOutlineTwitter />
                  </Link>
                  <Link>
                    <SiTiktok />
                  </Link>
                  <Link>
                    <BsLinkedin />
                  </Link>
                  <Link>
                    <FaPinterestSquare />
                  </Link>
                </HStack>
              </VStack>
            </Box>
            <Center>
              <Text fontSize={"sm"}>
                © 2022 Mediagenix. All rights reserved
              </Text>
            </Center>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Tools</ListHeader>
            <Link href={"#"}>Publishing</Link>
            <Link href={"#"}>Analytics</Link>
            <Link href={"#"}>Engagement</Link>
            <Link href={"#"}>Start Page</Link>
            <Link href={"#"}>Extras</Link>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Resources</ListHeader>
            <Link href={"#"}>Blog</Link>
            <Link href={"#"}>Content Library</Link>
            <Link href={"#"}>Browser Extension</Link>
            <Link href={"#"}>Free Image Editor</Link>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Support</ListHeader>
            <Link href={"#"}>Help Center</Link>
            <Link href={"#"}>Status</Link>
            <Link href={"#"}>What's New</Link>
            <Link href={"#"}>Product</Link>
            <Link href={"#"}>Roadmap</Link>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Company</ListHeader>
            <Link href={"#"}>About</Link>
            <Link href={"#"}>Transparency</Link>
            <Link href={"#"}>Careers</Link>
            <Link href={"#"}>Accessibility</Link>
            <Link href={"#"}>Press</Link>
            <Link href={"#"}>Sitemap</Link>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
