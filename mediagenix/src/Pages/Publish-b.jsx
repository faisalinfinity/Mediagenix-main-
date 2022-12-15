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
  PublishParaA,
} from "../Components/para/Para";
import Testimonials from "../Components/Testimonials/Testimonial";

export default function PublishB({ colorMode }) {
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

  const Midpara_publish_image =
    "https://buffer.com/static/google-business-profile/webp/screenshot-all-channels.webp";
  const text1 =
    "Craft the perfect post for each social network, all in one place";
  const text2 =
    "Publishing content on all of your channels shouldn’t be a time-drain. Plan and publish on every channel in one simple-to-use dashboard.";

  return (
    <>
      <Navbar />
    
      {/* <BehindImg /> */}

      <Midpara
        text1={text1}
        text2={text2}
        src={Midpara_publish_image}
        colorMode={colorMode}
      />
      <PublishParaA
        text1={"Build your audience and grow your brand on social media"}
        text2={
          "Plan and publish your content for Instagram, TikTok, Facebook, Twitter, Pinterest, and LinkedIn, all from one simple dashboard."
        }
        src="https://buffer.com/static/animation/hero-buffer-publish-animation-v2.mp4"
        btntext={"Start Your Free Trial"}
      />
      <ParaB />
      <ParaC />
      <ParaD />
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
          <Heading w="50%">
            140,000+ people like you use Buffer to build their brand on social
            media every month
            <Btn wd={"60px"} clr={"#e97284"} text={"Get Started Now"} />
          </Heading>
        </Center>
      </HStack>

      <Footer />
    </>
  );
}
