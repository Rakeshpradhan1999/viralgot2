import { useState } from "react";
import Goat from "../assets/images/goat8.png";
const accordianData = [
  {
    question: "What Are Viral Goats?",
    answer:
      "Viral Goats are a pack of the coolest, hand-drawn, algorithmically generated NFTs splooting around on the Ethereum blockchain. ",
  },
  {
    question: "How Much is a Viral Goat?",
    answer:
      "When you own a GoosePunk this is your own character in the metaverse, a cyberpunk/steampunk themed character. Owner ship of a GoosePunk is your exclusive invitation into the Gaggle, a place where other Geese meetup, hangout, relax, exchange art and talk about strategies moving forward inside the dystopian world of Ayame. ",
  },
  {
    question: "How Many Viral Goats are There?",
    answer:
      "When you own a GoosePunk this is your own character in the metaverse, a cyberpunk/steampunk themed character. Owner ship of a GoosePunk is your exclusive invitation into the Gaggle, a place where other Geese meetup, hangout, relax, exchange art and talk about strategies moving forward inside the dystopian world of Ayame. ",
  },
  {
    question: "How Many Can I Mint?",
    answer:
      "When you own a GoosePunk this is your own character in the metaverse, a cyberpunk/steampunk themed character. Owner ship of a GoosePunk is your exclusive invitation into the Gaggle, a place where other Geese meetup, hangout, relax, exchange art and talk about strategies moving forward inside the dystopian world of Ayame. ",
  },
  {
    question: "What Wallets are Supported?",
    answer:
      "When you own a GoosePunk this is your own character in the metaverse, a cyberpunk/steampunk themed character. Owner ship of a GoosePunk is your exclusive invitation into the Gaggle, a place where other Geese meetup, hangout, relax, exchange art and talk about strategies moving forward inside the dystopian world of Ayame. ",
  },
  {
    question: "What Will the Royalties Percent be?",
    answer:
      "When you own a GoosePunk this is your own character in the metaverse, a cyberpunk/steampunk themed character. Owner ship of a GoosePunk is your exclusive invitation into the Gaggle, a place where other Geese meetup, hangout, relax, exchange art and talk about strategies moving forward inside the dystopian world of Ayame. ",
  },
  {
    question: "How Many Viral Goats Will be Kept by the Team?",
    answer:
      "When you own a GoosePunk this is your own character in the metaverse, a cyberpunk/steampunk themed character. Owner ship of a GoosePunk is your exclusive invitation into the Gaggle, a place where other Geese meetup, hangout, relax, exchange art and talk about strategies moving forward inside the dystopian world of Ayame. ",
  },
];
const Faq = () => {
  const [clicked, setClicked] = useState(0);

  const toggle = (index) => {
    if (clicked === index) {
      return setClicked(null);
    }
    setClicked(index);
  };

  return (
    <section className="py-20 md:py-60 bg-white text-primary" id="faq">
      <div className="container md:flex md:items-center">
        <div className="hidden md:block md:w-1/5">
          <img src={Goat} alt="" className="mx-auto" />
        </div>
        <div className="md:w-4/5">
          <h2 className="text-primary uppercase text-4xl">FAQ</h2>
          <div className="">
            {accordianData.map((v, i) => (
              <div
                key={i}
                className=" border-b-2 border-dark border-sloid py-4 "
              >
                <div
                  className="flex  justify-between cursor-pointer py-4"
                  onClick={() => toggle(i)}
                >
                  <h6 className="md:text-2xl " style={{ userSelect: "none" }}>
                    {v.question}
                  </h6>
                  <span>
                    <i
                      className={`fas ${
                        clicked === i ? "fa-minus" : "fa-plus"
                      } md:text-2xl `}
                    ></i>
                  </span>
                </div>
                <div
                  className={` text-xs ${
                    clicked === i
                      ? "h-auto max-h-72 py-4"
                      : "overflow-hidden max-h-0 h-0"
                  }`}
                >
                  <p className="max-w-4xl w-full font-serif text-md">
                    {v.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
