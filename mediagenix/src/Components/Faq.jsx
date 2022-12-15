import {
  Accordion,
  AccordionItem,
  AccordionButton,
  Box,
  AccordionPanel,
  AccordionIcon,
  Heading,
  Center,
} from "@chakra-ui/react";

export default function Faq() {
  return (
    <Center>
         <Accordion w={{base:"90%",md:"50%",lg:"60%"}} allowToggle>
      <br />
      <Center>
        <Heading>FAQ</Heading>{" "}
      </Center>
      <br />
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box fontWeight={"bold"} as="span" flex="1" textAlign="left">
              1.What is social media scheduling?
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          If you enjoy planning your social media content ahead of time instead
          of creating and publishing content spontaneously, then social media
          scheduling might be the solution for you. Social media scheduling is
          the process of publishing your content automatically at your preferred
          time and to your preferred social media accounts. All you have to do
          is add all your content to the calendar or queue, customize each post
          according to the social network you’d like to publish to, adda
          preferred time and date, and then let Buffer do the rest of the work
          for you. This process saves you time and allows you to reach your
          audience when they are most likely to engage with your content.
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box fontWeight={"bold"} as="span" flex="1" textAlign="left">
              2. How does Buffer’s publishing and scheduling tool work?
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          With Buffer’s social media publishing and scheduling tool, you can
          plan, collaborate, and publish content that drives meaningful
          engagement and growth for your brand. Features include customizable
          posting schedules, a composer that allows you to craft a different
          message for each social network, a drafting feature that allows you to
          save your post ideas and come back to them later, a browser extension
          to quickly share content from anywhere on the web, drafts and approval
          process, and much more.
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box fontWeight={"bold"} as="span" flex="1" textAlign="left">
              3.Can I use the publishing and scheduling tool for free?
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          Yes, our free plan is perfect for individuals and businesses that are
          just getting started with social media. You can connect up to 3 social
          media channels and schedule up to 10 posts per channel at a time.
          There is no monthly, or yearly limit. Our free plan also includes a
          landing page builder, so you can create a beautiful landing page for
          your brand.
        </AccordionPanel>
      </AccordionItem>{" "}
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box fontWeight={"bold"} as="span" flex="1" textAlign="left">
              4. What social media channels are supported on Buffer’s publishing
              tool?
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          With Buffer’s publishing tool, you can plan, schedule, and publish
          your content for Instagram, TikTok, Facebook, Twitter, Pinterest,
          LinkedIn, and Google Business Profile all from one simple dashboard.
        </AccordionPanel>
      </AccordionItem>{" "}
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box fontWeight={"bold"} as="span" flex="1" textAlign="left">
              5.How do I schedule my social media posts for free?
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          Scheduling posts through Buffer is super easy (and it’s free!) Here’s
          how: To get started, log in to your Buffer account Click the Create
          Post button at the top right corner of your calendar or queue Select
          the social media channel you'd like to schedule to by clicking on the
          avatar at the top of the composer Craft your post by adding your photo
          or video, then customize the post based on what network you’ll post to
          Then click on Add to Queue, Share Now, Schedule Post, or Save as Draft
          depending on your scheduling preference
        </AccordionPanel>
      </AccordionItem>{" "}
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box fontWeight={"bold"} as="span" flex="1" textAlign="left">
              6. Why should I schedule my social media posts?
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          If you’re a small business owner, or social media manager, there are
          many benefits to scheduling your social media posts. Here are a few
          reasons why people prefer to schedule: It saves you time and mental
          energy It ensures that you post consistently (and keeping a consistent
          schedule helps you maximize engagement) It gives you better control
          over your social media content It enables you to plan and post to
          Instagram, Facebook, TikTok, Pinterest, Twitter, LinkedIn, and Google
          Business Profile from your desktop or mobile app, which makes it easy
          to plan campaigns and monitor results, all in one place.
        </AccordionPanel>
      </AccordionItem>{" "}
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box fontWeight={"bold"} as="span" flex="1" textAlign="left">
              7. Can I schedule social media posts to publish automatically?
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          Yes, Buffer offers both direct scheduling (posts that can be published
          automatically) and reminders (posts that you’ll receive a push
          notification for).
        </AccordionPanel>
      </AccordionItem>{" "}
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box fontWeight={"bold"} as="span" flex="1" textAlign="left">
              8. Can I schedule Instagram Stories to publish automatically?
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          At the moment, you can only use reminders, which means you’ll receive
          a push notification to your phone with everything you need to complete
          your story on Instagram. But, you can still use our platform to plan
          and prepare your Instagram stories on web or mobile.
        </AccordionPanel>
      </AccordionItem>{" "}
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box fontWeight={"bold"} as="span" flex="1" textAlign="left">
              9. Can I schedule multi-photo posts to publish automatically?
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          Yes, you can schedule multi-photo posts (up to 10 images) to be
          published automatically to Instagram, Facebook, and Twitter with
          Buffer—no need for reminders.
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box fontWeight={"bold"} as="span" flex="1" textAlign="left">
              10. Can I schedule Instagram Reels for free?
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          You sure can! With our platform, you can plan, edit, draft, and
          schedule Reels to Instagram, for free. We’ve got you covered when it
          comes to maximizing your Instagram Reel strategy
        </AccordionPanel>
      </AccordionItem>{" "}
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box fontWeight={"bold"} as="span" flex="1" textAlign="left">
              11. How do I create a posting schedule?
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          Instead of selecting a time for every single post you’re scheduling,
          Buffer allows you to create a posting schedule that can help take all
          that hassle away. With this feature, when you schedule a social media
          post on Buffer, the post will automatically fill the next available
          time slot on your posting schedule. The best part is that your posting
          schedule is unique to each of your connected social media accounts.
          Here’s how to set up your posting schedule: To get started, log in to
          your Buffer account Select the social media account you’d like to add
          a posting schedule to on the left-hand sidebar Once you’re there,
          click on Settings > Posting Schedule Add new times to your schedule by
          selecting the day or days you'd like to add the times to, as well as
          the time itself
        </AccordionPanel>
      </AccordionItem>{" "}
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box fontWeight={"bold"} as="span" flex="1" textAlign="left">
              12. How many social media posts can I schedule?
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          With our free plan, you can schedule up to 10 posts at a time per
          social media channel, while with our paid plan (starting at $5 per
          month) you can schedule up to 2,000 pins. There is no monthly, or
          yearly limit.
        </AccordionPanel>
      </AccordionItem>{" "}
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box fontWeight={"bold"} as="span" flex="1" textAlign="left">
              13. How do I start scheduling my social media posts?
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          With Buffer, you can schedule,plan, analyze, and much more. Get
          started with a 14-day free trial, connect your social media channels,
          and start scheduling immediately.
        </AccordionPanel>
      </AccordionItem>
    </Accordion>

    </Center>
   
  );
}
