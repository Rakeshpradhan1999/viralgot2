import React from "react";

const Index = () => {
  return (
    <footer className="py-8 text-center text-primary ">
      <div className="container flex justify-between items-center flex-wrap flex-col  sm:flex-row-reverse">
        <div className="flex items-center text-xl">
          <span>
            <a href="http://instagram.com/viralgoats.io">
              <i className="fab fa-instagram"></i>
            </a>
          </span>
          <span className="block ml-10">
            <a href="https://twitter.com/themviralgoats">
              <i className="fab fa-twitter"></i>
            </a>
          </span>
        </div>
        <div className=" font-serif text-xs text-center sm:text-left mt-8  sm:mt-0">
          <p className="pb-4">
            Copyright © 2021. All Rights Reserved by ViralGoats
          </p>
          <span className="inline-block pr-4 underline">Terms of Service</span>
          <span className="inline-block underline">Privacy Policy</span>
        </div>
      </div>
    </footer>
  );
};

export default Index;
