import Header from "../HomePage/Header";
import AsSeenOn from "../HomePage/AsSeenOn";
import Certs from "../HomePage/Certs";
import Products from "../HomePage/Products";
import FAQAccordion from "../HomePage/FAQAccordion";
import StarterKits from "../HomePage/StarterKits";
import EmailSignUp from "../HomePage/EmailSignUp";
import VideoSection from "../HomePage/VideoSection";
import campFire from "../components/assets/campFire.mp4"

import { useState, useEffect } from "react";

const Home = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
    <video
        className="header-container-video"
        src={campFire}
        autoPlay
        loop
        muted
        playsInline
      />
      <div style={{overflow: "hidden"}}>
      <Header />
      <AsSeenOn />
      <Certs />
      <Products />

      <VideoSection />
      <FAQAccordion />
      <StarterKits windowWidth={windowWidth} />
      <EmailSignUp />
      </div>
    </div>
  );
};

export default Home;
