import Goat1 from "../assets/images/goat3.png";
import Goat2 from "../assets/images/goat4.png";
import { Button } from "../components";
const AboutSection = () => {
  return (
    <section className="bg-black text-white py-24" id="about">
      <div className="container flex items-center  justify-between">
        <div className=" hidden md:block w-1/4 self-start">
          <img src={Goat1} alt="Goat" className="" />
        </div>
        <div className="md:w-2/4 text-center">
          <h2 className="text-secondary font-bold uppercase text-3xl md:text-4xl">
            What Are Viral Goats?
          </h2>
          <p className="font-serif mt-8  text-md ">
            Viral Goats are a pack of coolest, hand made, algorithmically
            generated NFTs splooting around on the Ethereum blockchain. Only
            3,000 of these goats will ever exist. Each with six attributes from
            over 100 unique traits. Several unique Viral Goats will include an
            additional surpise! Lovingly inspired by our very own Viral Goats.
            🐐
          </p>
          <div
            style={{ border: "3px solid #C98769" }}
            className="bg-white flex justify-between items-center py-3 pl-6 pr-3 my-5 mt-14 rounded-lg"
          >
            <h6 className="text-primary ">Comming soon.</h6>
            <Button> Comming soon</Button>
          </div>
          <div
            style={{ border: "3px solid #C98769" }}
            className="bg-white flex justify-between items-center py-3 pl-6 pr-3 my-5 rounded-lg"
          >
            <h6 className="text-primary ">Comming soon.</h6>
            <Button>Comming soon</Button>
          </div>
        </div>
        <div className="w-1/4 self-end   hidden md:block">
          <img src={Goat2} alt="Goat" className="ml-auto" />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
