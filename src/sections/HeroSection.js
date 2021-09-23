import Goat1 from "../assets/images/goat1.png";
import Goat2 from "../assets/images/goat2.png";
import { Button } from "../components";
const HeroSection = () => {
  return (
    <section className="hero-section" id="buyviralgoat">
      <div className="moving-bg pt-20 pb-32">
        <div className="container md:flex md:items-center md:justify-between h-full">
          <div className="md:w-1/4 md:self-end ">
            <img src={Goat1} alt="" className="mx-auto" />
          </div>
          <div className="text-center mt-10 md:w-2/4">
            <h1 className="text-primary text-4xl uppercase font-bold mb-8 md:text-6xl">
              Viral goats
            </h1>
            <p className="text-black font-serif text-sm max-w-lg mx-auto mb-8">
              Viral Goats are a pack of coolest, hand made, algorithmically
              generated NFTs on the Ethereum network.
            </p>
            <a href="https://minter.viralgoats.io/">
              <Button>Mint Viral Goats</Button>
            </a>
          </div>
          <div className="md:w-1/4 hidden md:block">
            <img src={Goat2} alt="" className="mx-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
