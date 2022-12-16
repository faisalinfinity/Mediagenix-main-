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
  Image,
  Button,
} from "@chakra-ui/react";
import Btn from "../Components/Buttons/Btn-1";
import Faq from "../Components/Faq";
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
      <PublishParaA
        text1={"Build your audience and grow your brand on social media"}
        text2={
          "Plan and publish your content for Instagram, TikTok, Facebook, Twitter, Pinterest, and LinkedIn, all from one simple dashboard."
        }
        src="https://buffer.com/static/animation/hero-buffer-publish-animation-v2.mp4"
        btntext={"Start Your Free Trial"}
      />
      <BehindImg />

      <Midpara
        text1={text1}
        text2={text2}
        src={Midpara_publish_image}
        colorMode={colorMode}
      />

      <ParaB
        src={
          "https://static.buffer.com/cdn-cgi/image/w=640,quality=90,format=auto/marketing/static/illustrations/buffer-publish-instagram@2x-2.png"
        }
        text1={"Take your Instagram marketing to the next level"}
        text2="Build your brand on Instagram. Work together with your team to plan, preview, and schedule your upcoming Instagram posts, carousels, and campaigns"
      />
      <ParaC
        src={
          "https://static.buffer.com/cdn-cgi/image/w=640,quality=90,format=auto/marketing/static/screenshots/publish-instragram-stories.jpg"
        }
        text1="Plan and prepare your TikToks and Stories"
        text2={
          "Plan and set reminders for your Stories and TikTok videos. You will receive a mobile notification when it’s time to share."
        }
      />
      <ParaD
        src="https://static.buffer.com/cdn-cgi/image/w=640,quality=90,format=auto/marketing/static/illustrations/buffer-publish-planning@2x.jpeg"
        text2={
          "Queue up content on an automated schedule or choose a custom time for each post. You're in total command of what you share and when."
        }
        text1={"Plan out the perfect posting schedule"}
      />
      <ParaC
        src="https://buffer.com/static/testimonials/luis-cancel-huckberry-v2.png"
        text1="Buffer has made sharing our story and building our brand on social media so much easier."
      />
      <Center>
        <Flex flexWrap={"wrap"}>
          <Box>
            <VStack>
              <Image src="https://static.buffer.com/cdn-cgi/image/w=384,quality=90,format=auto/marketing/static/ui/buffer-publish-scheduling@2x.jpeg"></Image>
              <Text fontWeight={"bold"}>Scheduling</Text>
              <Text>
                Create a preset publishing schedule for each social account
              </Text>
            </VStack>
          </Box>
          <Box>
            <VStack>
              <Image src="https://static.buffer.com/cdn-cgi/image/w=384,quality=90,format=auto/marketing/static/ui/buffer-publish-tailored-posts-v2@2x.jpg"></Image>
              <Text fontWeight={"bold"}>Tailored posts</Text>
              <Text>Custom tailor your posts for each social network</Text>
            </VStack>
          </Box>
          <Box>
            <VStack>
              <Image src="https://static.buffer.com/cdn-cgi/image/w=384,quality=90,format=auto/marketing/static/ui/buffer-publish-calendar@2x.jpeg"></Image>
              <Text fontWeight={"bold"}>Calendar</Text>
              <Text>
                Get an at-a-glance view of all the content you have lined up
              </Text>
            </VStack>
          </Box>
        </Flex>
      </Center>

      <Faq/>
      
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
