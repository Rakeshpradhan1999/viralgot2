import React from "react";
import Goat from "../assets/images/goat9.png";
const Contact = () => {
  return (
    <section className="py-32 bg-primaryDark text-white">
      <div className="container md:flex md:items-center">
        <div className="md:w-1/2">
          <h2 className="text-4xl capitalize mb-8">
            Lorem Ipsum Dolor Sit Amet
          </h2>
          <p className="font-serif text-xs max-w-xl w-full">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin at
            etiam viverra neque ante pretium. Donec non nunc posuere risus. Ac
            neque id cras facilisi pellentesque augue vitae volutpat. Eget cras
            at erat adipiscing quam n
          </p>
        </div>
        <div className="md:w-1/2">
          <img src={Goat} alt="" className="ml-auto" />
        </div>
      </div>
    </section>
  );
};

export default Contact;
