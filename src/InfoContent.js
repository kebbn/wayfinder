import { motion } from "framer-motion";

import {
  Flex,
  Spacer,
  Text,
  Center,
  Button,
  SimpleGrid,
  Stack,
  Card,
  CardBody,
  Heading,
  useToast,
} from "@chakra-ui/react";
import WayfinderCard from "./components/WayfinderCard";
import heroplanet from "./img/heroplanet.jpg";
import aliensky from "./img/aliensky.jpg";
import mars from "./img/mars.png";
import proxima from "./img/proxima.png";
import kepler from "./img/kepler.png";
import spaceship from "./img/spaceship.jpg";
import HeroCard from "./components/HeroCard";

export default function InfoContent() {
  const toast = useToast();
  const showToast = () => {
    toast({
      position: "bottom",
      duration: 1500,
      render: () => (
        <Center
          p="1rem 0.5rem"
          borderRadius="0.5rem"
          shadow="2xl"
          bg="white"
          borderColor="mediumGray"
          fontFamily="mono"
          fontSize="sm"
          fontWeight="light"
        >
          *the button does nothing* 🤔
        </Center>
      ),
    });
  };

  return (
    <motion.main
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.6, -0.05, 0.01, 0.99] }}
    >
      <Center w="calc(100vw - (100vw-100%))" p="0 1.5rem" m="1.5rem 0">
        <Stack w="80rem" gap="1.5rem">
          <HeroCard
            bgImage={heroplanet}
            bgSize="cover"
            bgPosition={{
              base: "center",
              sm: "center",
              lg: "center -20rem",
            }}
            bgRepeat="no-repeat"
            w="100%"
            h={{ base: "24rem", sm: "40rem" }}
            contentWidth="36rem"
            tag="Welcome to Shuddle"
            descriptionfontsize={{ base: "4xl", sm: "6xl" }}
            description="Explore the Beyond of tomorrow today."
          />

          <WayfinderCard
            direction="row"
            columns={{ base: "1", md: "2" }}
            w="100%"
            imgsrc={aliensky}
            imgalt="Alien Planet Vista"
            cardbodypadding={{ base: "1.5rem", md: "3rem" }}
            cardbodytitle="Interplanetary Travel"
            cardbodycontent="With our advancements in Stargate and wormhole traversal technology,
          Shuddle has since become the premier provider of spacecraft travel
          and space mission execution planning."
            buttoncontent="About Shuddle"
            buttononClick={showToast}
          />

          <Flex alignItems="center" flexWrap="wrap" gap="1.5rem">
            <Heading
              fontSize={{ base: "xl", sm: "2xl", md: "3xl" }}
              fontFamily="mono"
              fontWeight="bold"
            >
              Premier Destinations
            </Heading>
            <Spacer display={{ base: "none", sm: "flex" }} />
            <Button variant="primary" onClick={showToast}>
              See All Destinations
            </Button>
          </Flex>

          <SimpleGrid w="100%" minChildWidth="16rem" spacing="1.5rem">
            <WayfinderCard
              variant="button"
              direction="column"
              minH={{ base: "15rem", sm: "20rem", md: "30rem" }}
              w="100%"
              imgsrc={mars}
              imgalt="Mars"
              tagcontent="Trending Planet"
              cardbodytitle="Mars"
              cardbodycontent="Discover our closest neighbor and the home of interplanetary exploration."
              onClick={showToast}
            />
            <WayfinderCard
              variant="button"
              direction="column"
              minH={{ base: "15rem", sm: "20rem", md: "30rem" }}
              w="100%"
              imgsrc={proxima}
              imgalt="Proxima Centauri b"
              tagcontent="Spacegate Destination"
              cardbodytitle="Proxima Centauri b"
              cardbodycontent="Our closest exoplanet located in Alpha Centauri."
              onClick={showToast}
            />
            <WayfinderCard
              variant="button"
              direction="column"
              minH={{ base: "15rem", sm: "20rem", md: "30rem" }}
              w="100%"
              imgsrc={kepler}
              imgalt="Kepler-186f"
              tagcontent="Frontier Exploration"
              cardbodytitle="Kepler-186f"
              cardbodycontent="Growing interest and funding for this promising exoplanet."
              onClick={showToast}
            />
          </SimpleGrid>

          <WayfinderCard
            direction="row"
            columns={{ base: "1", md: "2" }}
            w="100%"
            imgsrc={spaceship}
            imgalt="Alien Planet Vista"
            cardbodypadding={{ base: "1.5rem", md: "3rem" }}
            cardbodytitle="Technology & Innovation"
            cardbodycontent="Discover the groundbreaking technologies that Shuddle uses to make interplanetary travel possible, such as Ion Propulsion, Autonomous Spacecraft, and the Stargate system."
            buttoncontent="Shuddle Technologies"
            buttononClick={showToast}
          />

          <SimpleGrid
            w="100%"
            spacing="1.5rem"
            columns={{ base: 1, sm: 2, lg: 4 }}
          >
            <WayfinderCard
              variant="button"
              direction="row"
              minH={{ base: "10rem", sm: "12.5rem", md: "15rem" }}
              cardbodytitlesize="2xl"
              cardbodytitle="Glossary"
              cardbodycontent="Understand key terms and concepts related to interplanetary travel."
              onClick={showToast}
            />
            <WayfinderCard
              variant="button"
              direction="row"
              minH={{ base: "10rem", sm: "12.5rem", md: "15rem" }}
              cardbodytitlesize="2xl"
              cardbodytitle="Timeline"
              cardbodycontent="Explore a timeline of major milestones in interplanetary exploration."
              onClick={showToast}
            />
            <WayfinderCard
              variant="button"
              direction="row"
              minH={{ base: "10rem", sm: "12.5rem", md: "15rem" }}
              cardbodytitlesize="2xl"
              cardbodytitle="Media Gallery"
              cardbodycontent="View stunning image and video content captured throughout the galaxy."
              onClick={showToast}
            />
            <WayfinderCard
              variant="button"
              direction="row"
              minH={{ base: "10rem", sm: "12.5rem", md: "15rem" }}
              cardbodytitlesize="2xl"
              cardbodytitle="Browse All Topics"
              cardbodycontent="Access a curated list of articles, websites, and books for deeper exploration."
              onClick={showToast}
            />
          </SimpleGrid>

          <Card bgColor="naplesYellow" w="100%" minH="18rem" variant="solid">
            <Center>
              <CardBody
                maxW="60rem"
                alignItems="center"
                p={{ base: "0", sm: "1.5rem" }}
              >
                <Stack
                  p="1.5rem"
                  spacing="1rem"
                  alignItems="center"
                  textAlign="center"
                >
                  <Heading
                    color="midnight"
                    fontSize={{ base: "xl", sm: "2xl", md: "3xl" }}
                    fontWeight="bold"
                    fontFamily="mono"
                  >
                    Journey Beyond The Stars
                  </Heading>
                  <Text color="midnight" fontSize={{ base: "md", sm: "lg" }}>
                    Whether you're an aspiring explorer, trader, defense
                    specialist, or scientist, Shuddle is your go-to destination
                    for accurate and up-to-date information about interplanetary
                    space travel. Register with us to receive news, apply for
                    travel permissions, and prepare successfully to embark on an
                    incredible journey to the stars within our cosmos.
                  </Text>
                  <Button variant="tertiary" onClick={showToast}>
                    Register With Shuddle
                  </Button>
                </Stack>
              </CardBody>
            </Center>
          </Card>
        </Stack>
      </Center>
    </motion.main>
  );
}
