import {
  Center,
  HStack,
  Box,
  Text,
  VStack,
  Heading,
  Flex,
  Grid,
  Container,
  Button
} from "@chakra-ui/react";
import Btn from "../Components/Buttons/Btn-1";
import Footer from "../Components/Footer";
import { Navbar } from "../Components/Navbar";
import {
  BehindImg,
  Midpara,
  Para,
  ParaB,
  ParaC,
  ParaD,
} from "../Components/para/Para";
import Testimonials from "../Components/Testimonials/Testimonial";

export default function Homepage({ colorMode }) {
  const testimonials = [
    {
      src: "https://buffer.com/static/testimonials/luis-cancel-huckberry-mobile.jpg",
      text1:
        "Mediagenix has made sharing our story and building our brand on social media so much easier.",
      text2: "Luis Cancel, Managing Editor",
    },
    {
      src: "https://buffer.com/static/testimonials/liz-gillis-dress-up@2x-mobile.jpg",
      text1:
        "On social, we need to be fast, efficient, and intentional. Buffer allows us to be exactly that.",
      text2: "Liz Gillis, Digital Marketer",
    },
    {
      src: "https://buffer.com/static/testimonials/troy-petrunoff@mobile.jpg",
      text1:
        "For a marketing team with a lot on our plates, Buffer is a crucial tool in our brand-building efforts.",
      text2: "Luis Cancel, Managing Editor",
    },
    {
      src: "https://buffer.com/static/testimonials/rodrigo-hyago-happysocks@mobile.jpg",
      text1:
        "Mediagenix makes it easy for us to monitor all of our engagement and strengthen the connection with our audience.",
      text2: "Rodrigo Hyago, Social Media Content Manager",
    },
    {
      src: "https://buffer.com/static/testimonials/joe-mercy-for-animals@mobile.jpg",
      text1:
        "Mediagenix saves us, literally, hours and in turn helps us spread our message even further.",
      text2: "Joe Loria, Content Manager",
    },
  ];

  const Midpara_homepage =
    "https://buffer.com/static/misc/buffer-loop-v2-variant.svg";
  const Midpara_homepage_text1 =
    " Grow your following without draining your time";
  const text2 =
    "  Social media can be the fastest and cheapest way to build your following and grow your business. But it can also take up all your time. Here are four ways Buffer can help.";


    
  return (
    <>
      <Navbar />
      <Para colorMode={colorMode} />
      <BehindImg />

      <Midpara
        src={Midpara_homepage}
        colorMode={colorMode}
        text1={Midpara_homepage_text1}
      />
      <ParaB src="https://buffer.com/static/illustrations/thumb-stop-content-2.webp" text1="Get the clicks you deserve" text2=" Mediagenix will tell you when and what to publish to make your
              content stand out." />
      <ParaC src={"https://buffer.com/static/illustrations/collaborate-more-efficiently@2x.webp"} text1={"Grow your following"} text2='Mediagenix will share your content on the right channels, with
              suggested hashtags to help you grow.' />
      <ParaD src={"https://buffer.com/static/illustrations/hero-reply@2x-2.webp"} text1={"Halve your workload"} text2=" Mediagenix will publish everything for you to save time and it’ll
              showcase your work with automated reports."  />
      <Center>
        <HStack spacing={100} overflowX="scroll">
          {testimonials.map((el, i) => (
            <Testimonials
              key={i + 1}
              src={el.src}
              text1={el.text1}
              text2={el.text2}
            />
          ))}
        </HStack>
      </Center>
      <Center>
        <Grid
          templateColumns={{ base: "repeat(2,1fr)", lg: "repeat(4,1fr)" }}
          w={"80%"}
          justifyContent={"space-between"}
        >
          <Box>
            <Heading color={"#2c4bff"}>10 years</Heading>
            <Text>in business</Text>
          </Box>
          <Box>
            <Heading color={"#2c4bff"}>140,000</Heading>
            <Text>users</Text>
          </Box>
          <Box>
            <Heading color={"#2c4bff"}>100k+</Heading>
            <Text>monthly blog readers</Text>
          </Box>
          <Box>
            <Heading color={"#2c4bff"}>1.2m+</Heading>
            <Text>social followers</Text>{" "}
          </Box>
        </Grid>
      </Center>
      <HStack bg={"#2c4bff"} mt={"70px"} w={"100%"} h="500px">
        <Center>
          <VStack>
          <Heading w="50%">
            140,000+ people like you use Buffer to build their brand on social
            media every month
            
            
          </Heading>
          <Button h={"80px"} bg={"#e97284"} w={{base:"50%",md:"60%",lg:"40%"}} >Get Started Now</Button>

          </VStack>
          
        </Center>
      </HStack>

      <Footer />
    </>
  );
}
