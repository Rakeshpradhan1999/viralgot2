import Roadmap from "../assets/images/roadmap.png";
const data = [
  {
    title: "Art and Website",
    text: "Finalize the Viral Goats art and website. Focus on ironing out the details to ensure a fair and smooth launch.",
  },
  {
    title: "Giveaways and Contests",
    text: "Begin community Viral Goats giveaways and contests for Twitter followers and Discord members. Special perks will be given to early followers",
  },
  {
    title: "Reveals",
    text: "Announce mint price and launch date. Reveal unique Viral Goats and the rarities for each trait.",
  },
  {
    title: "Launch and Listings",
    text: "Get Viral Goat listed on all major Ethereum NFT marketplaces after the launch.",
  },
  {
    title: "Distribute Airdrops",
    text: "Distribute initial sale airdrop to holders of unique Viral Goats and begin purchasing Viral Goats at the floor price once a month..",
  },
  {
    title: "Website Updates",
    text: "Create a detailed view where each Viral Goat can be filtered by rarity rank and trait values.",
  },
  {
    title: "Play-to-earn Game",
    text: "Begin work on the future of Viral Goats, with exclusive merchandise, airdrops, and a play-to-earn game funded by future royalties only available to Viral Goats holders. Deck out your Viral Goats with new in-game collected traits and earn all future royalties for the new Viral Goats you create!.",
  },
];
const RoadmapSection = () => {
  return (
    <section className=" py-20 md:py-24" id="roadmap">
      <div className="container">
        <h2 className="text-3xl md:text-5xl text-primary uppercase text-center">
          Our Roadmap
        </h2>
        <div className=" hidden md:block my-32">
          <img src={Roadmap} alt="" />
        </div>
        <div className="md:hidden">
          {data.map((item, i) => (
            <Box title={item.title} text={item.text} key={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;

const Box = ({
  title = "Art and Website",
  text = "Finalize the Viral Goats art and website. Focus on ironing out the details to ensure a fair and smooth launch.",
}) => (
  <div
    style={{ border: "3px solid #C98769" }}
    className="bg-white py-1 px-3 my-5 mt-14 rounded-lg text-primary"
  >
    <h6>{title}</h6>
    <p className="text-black font-serif text-xs mt-4">{text}</p>
  </div>
);
