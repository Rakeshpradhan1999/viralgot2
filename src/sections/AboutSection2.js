import Goat1 from "../assets/images/goat10.png";
import Goat2 from "../assets/images/goat11.png";

const AboutSection2 = () => {
  return (
    <section className="py-16 md:py-24 text-white text-center">
      <div className="container md:flex">
        <div className="w-full md:w-1/2 my-8">
          <div
            className="bg-cardbg  py-8 px-14 rounded-lg mb-8"
            style={{ border: "3px solid #C98769 ", minHeight: 300 }}
          >
            <h3 className="text-3xl md:text-4xl">Goatanomics</h3>
            <p
              className="font-serif mt-6 text-sm"
              style={{ lineHeight: "24px" }}
            >
              The team has reserved 100 Viral Goats for community giveaways,
              contests, and the team. These will be chosen at random and will
              not be early editions. All remaining Viral Goats are up for sale.
              Everyone should have an equal opportunity to be a member of the
              Viral Goats community. This means there will be no bidding war and
              no bonding curves. Viral Goats will be available for a fixed and
              affordable price.
            </p>
          </div>
          <div className="flex items-center justify-center mt-10">
            <img
              src={Goat2}
              alt=""
              style={{ maxWidth: "90%" }}
              className="mx-auto"
            />
          </div>
        </div>
        <div className="md:w-1/2 my-8">
          <div
            className="bg-violet py-8 px-14 rounded-lg md:ml-4 "
            style={{ border: "3px solid #C98769", minHeight: 300 }}
          >
            <h3 className="text-3xl md:text-4xl">The Value of Viral Goats</h3>
            <p
              className="font-serif mt-6 text-sm"
              style={{ lineHeight: "24px" }}
            >
              A select handful of Viral Goats have stumbled on a trove of
              treasure! A portion of the initial sale proceeds will be
              airdropped to these unique Viral Goat holders. Viral Goats will be
              deflationary over time. 10% of all future royalties from secondary
              sales will be dedicated to purchasing Viral Goats at the floor
              price to be burnt.
            </p>
          </div>
          <div className="flex items-center justify-center mt-10">
            <img
              src={Goat1}
              alt=""
              style={{ maxWidth: "90%" }}
              className="mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection2;
