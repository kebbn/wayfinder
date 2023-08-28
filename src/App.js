import "./App.css";
import { Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { ChakraProvider, Flex } from "@chakra-ui/react";
import Nav from "./components/Nav";
import InfoContent from "./InfoContent";
import VisitContent from "./VisitContent";
import RideContent from "./RideContent";
import Footer from "./components/Footer";
import Wayfinder from "./components/WayfinderTheme";

function App() {
  return (
    <ChakraProvider theme={Wayfinder}>
      <Flex direction="column" minH="100vh">
        <Nav />
        <AnimatePresence>
          <Routes>
            <Route path="/" element={<InfoContent />} />
            <Route path="/visit" element={<VisitContent />} />
            <Route path="/ride" element={<RideContent />} />
          </Routes>
        </AnimatePresence>

        <Footer />
      </Flex>
    </ChakraProvider>
  );
}

export default App;
