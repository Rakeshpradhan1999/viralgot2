import React from "react";
import { Layout } from "../components";
import {
  HeroSection,
  AboutSection,
  AboutSection2,
  RoadmapSection,
  Faq,
} from "../sections";
const Home = () => {
  return (
    <div>
      <Layout>
        <HeroSection />
        <AboutSection />
        <AboutSection2 />
        <RoadmapSection />
        <Faq />
      </Layout>
    </div>
  );
};

export default Home;
