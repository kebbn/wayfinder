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
  Tag,
  Image,
  Divider,
  useToast,
} from "@chakra-ui/react";
import ringplanet from "./img/ringplanet.jpg";
import ride from "./img/shuddle.logoRide.svg";
import MapView from "./img/MapView.svg";
import TravelSearch from "./components/TravelSearch";
import WayfinderCard from "./components/WayfinderCard";
import HeroCard from "./components/HeroCard";
import { TravelGraph } from "./components/TravelCard";
import AlertCard from "./components/AlertCard";
import { BiChevronDown, BiChevronLeft, BiChevronRight } from "react-icons/bi";

export default function RideContent() {
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
            bgImage={ringplanet}
            bgSize="cover"
            bgPosition={{
              base: "top",
            }}
            bgRepeat="no-repeat"
            w="100%"
            h="24rem"
            contentWidth="28rem"
            tag="Solar System Transit"
            logosrc={ride}
            logoheight="6.5rem"
            description="Visit planets and other celestial objects with our FTL network"
          />

          <TravelSearch
            systemsearch={1}
            defaultdeparture="Earth USCA003 - Vandenberg Space Force Base"
            defaultarrival="Mars Gamma Station"
            defaultdeparturewindow="Jan 01 2123"
            onClick={showToast}
          />

          <Flex
            gap="1.5rem"
            flexWrap={{ base: "wrap-reverse", lg: "nowrap" }}
            alignItems="stretch"
          >
            <Card flex="1 1 20rem">
              <Stack spacing="0">
                <TravelGraph
                  travelColor="darkGray"
                  buttononClick={showToast}
                  divider2={true}
                  divider3={false}
                  duration="16h22m"
                  stops="2 stops"
                  departLocation="Earth USCA003"
                  arriveLocation="Mars Gamma"
                  departTime="Jan 01 2123 16:15"
                  arriveTime="22:13 MTC MSD 100996"
                  tagvariant="warning"
                  tagcontent="In 1 Day"
                  showGraphControls={true}
                />
                <TravelGraph
                  travelColor="darkGray"
                  buttononClick={showToast}
                  divider2={true}
                  divider3={true}
                  duration="18h55m"
                  stops="3 stops"
                  departLocation="Earth USCA003"
                  arriveLocation="Mars Gamma"
                  departTime="Jan 02 2123 16:15"
                  arriveTime="22:13 MTC MSD 100997"
                  tagvariant="neutral"
                  tagcontent="In 2 Days"
                  showGraphControls={true}
                />
                <TravelGraph
                  travelColor="darkGray"
                  buttononClick={showToast}
                  divider2={true}
                  divider3={true}
                  duration="18h55m"
                  stops="3 stops"
                  departLocation="Earth USCA003"
                  arriveLocation="Mars Gamma"
                  departTime="Jan 03 2123 16:15"
                  arriveTime="22:13 MTC MSD 100998"
                  tagvariant="neutral"
                  tagcontent="In 3 Days"
                  showGraphControls={true}
                />
              </Stack>
            </Card>
            <Card
              minH={{ base: "24rem", sm: "32rem" }}
              bg="black"
              flex="1 1 40rem"
              justifyContent="center"
            >
              <Image src={MapView} bgPosition="center"></Image>
              <Button
                variant="flushed"
                color="white"
                position="absolute"
                m="1.5rem"
                top={0}
                left={0}
                leftIcon={<BiChevronLeft />}
                _hover={{ bgColor: "none" }}
                onClick={showToast}
              >
                To Venus
              </Button>
              <Button
                variant="flushed"
                color="white"
                position="absolute"
                m="1.5rem"
                top={0}
                right={0}
                rightIcon={<BiChevronRight />}
                _hover={{ bgColor: "none" }}
                onClick={showToast}
              >
                To Jupiter
              </Button>
              <Button
                variant="outline"
                color="white"
                position="absolute"
                m="1.5rem"
                bottom={0}
                rightIcon={<BiChevronDown />}
                _hover={{ bgColor: "midnight" }}
                onClick={showToast}
              >
                Zoom: Overview
              </Button>
            </Card>
          </Flex>

          <Flex w="100%" gap="1.5rem" flexWrap={{ base: "wrap", lg: "nowrap" }}>
            <Card flex="1 1 20rem">
              <Heading
                p="1.5rem 1.5rem 1rem 1.5rem"
                fontSize={{ base: "xl", sm: "3xl", md: "3xl" }}
              >
                Service Alerts
              </Heading>
              <Divider
                color="mediumGray"
                borderBottom="1px solid"
                opacity="1"
              />
              <Stack p="1.5rem" spacing="1.5rem">
                <AlertCard
                  title="Rail Lines"
                  entry1="RL330"
                  entry1tagvariant="warning"
                  entry1tag="Queue Delay"
                  entry2="RL226"
                  entry2tagvariant="error"
                  entry2tag="Recalibrating"
                  entry3="RL321"
                  entry3tagvariant="neutral"
                  entry3tag="Reduced Capacity"
                />
                <AlertCard
                  title="Ship Networks"
                  entry1="Thames"
                  entry1tagvariant="error"
                  entry1tag="Rerouted"
                  entry2="Yamuna"
                  entry2tagvariant="neutral"
                  entry2tag="At Capacity"
                  entry3="Nile"
                  entry3tagvariant="warning"
                  entry3tag="Delays"
                />

                <AlertCard
                  title="Stations"
                  entry1="Rainier"
                  entry1tagvariant="warning"
                  entry1tag="Delays"
                  entry2="Matterhorn"
                  entry2tagvariant="neutral"
                  entry2tag="At Capacity"
                />
              </Stack>
            </Card>
            <SimpleGrid
              spacing="1.5rem"
              columns={{ base: 1, sm: 2 }}
              flex="1 1 40rem"
              alignContent="flex-start"
            >
              <WayfinderCard
                variant="button"
                direction="row"
                minH={{ base: "10rem", sm: "12.5rem", md: "15rem" }}
                cardbodytitlesize={{
                  base: "xl",
                  sm: "2xl",
                }}
                cardbodytitle="Planned Service Changes"
                cardbodycontent="Check for planned closures and service changes"
                onClick={showToast}
              />
              <WayfinderCard
                variant="button"
                direction="row"
                minH={{ base: "10rem", sm: "12.5rem", md: "15rem" }}
                cardbodytitlesize={{
                  base: "xl",
                  sm: "2xl",
                }}
                cardbodytitle="Book or Manage Trip"
                cardbodycontent="Check status or make changes to accommodations"
                onClick={showToast}
              />
              <WayfinderCard
                variant="button"
                direction="row"
                minH={{ base: "10rem", sm: "12.5rem", md: "15rem" }}
                cardbodytitlesize={{
                  base: "xl",
                  sm: "2xl",
                }}
                cardbodytitle="Solar System Travel Policies"
                cardbodycontent="Find out how to best prepare for travel to other systems"
                onClick={showToast}
              />
              <WayfinderCard
                variant="button"
                direction="row"
                minH={{ base: "10rem", sm: "12.5rem", md: "15rem" }}
                cardbodytitlesize={{
                  base: "xl",
                  sm: "2xl",
                }}
                cardbodytitle="Contact Spaceship Control"
                cardbodycontent="Reach out to connect with our travel specialists"
                onClick={showToast}
              />
            </SimpleGrid>
          </Flex>

          <Flex alignItems="center" flexWrap="wrap" gap="1rem">
            <Heading
              fontSize={{ base: "xl", sm: "2xl", md: "3xl" }}
              fontFamily="mono"
              fontWeight="bold"
            >
              Latest News
            </Heading>
          </Flex>

          <SimpleGrid columns={{ base: 1, sm: 2, lg: 4 }} spacing="1.5rem">
            <WayfinderCard
              variant="button"
              direction="row"
              minH="17.5rem"
              tagcontent="Service Update"
              cardbodytitlesize={{
                base: "xl",
                sm: "2xl",
              }}
              cardbodytitle="Rail service changes: 2124"
              cardbodycontent="Oct 3, 2123"
              onClick={showToast}
            />
            <WayfinderCard
              variant="button"
              direction="row"
              minH="17.5rem"
              tagcontent="Feature"
              cardbodytitlesize={{
                base: "xl",
                sm: "2xl",
              }}
              cardbodytitle="Shuddle Ride app beta launch"
              cardbodycontent="Oct 1, 2123"
              onClick={showToast}
            />
            <WayfinderCard
              variant="button"
              direction="row"
              minH="17.5rem"
              tagcontent="Service Update"
              cardbodytitlesize={{
                base: "xl",
                sm: "2xl",
              }}
              cardbodytitle="Shuddle adds service for customers heading to Moon Alpha"
              cardbodycontent="Sept 10, 2123"
              onClick={showToast}
            />
            <WayfinderCard
              variant="button"
              direction="row"
              minH="17.5rem"
              tagcontent="Feature"
              cardbodytitlesize={{
                base: "xl",
                sm: "2xl",
              }}
              cardbodytitle="New payment options on Shuddle Ride starts next year"
              cardbodycontent="Sep 1, 2123"
              onClick={showToast}
            />
          </SimpleGrid>
        </Stack>
      </Center>
    </motion.main>
  );
}
