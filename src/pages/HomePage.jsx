import React from "react";

const HomePage = () => {
  return (
    <div>
      <h1 className="text-center text-[40px] text-[#9b4427] font-bold">
        A BAKERY FOR ALL
      </h1>
      <p className="mt-5 text-center text-[20px] text-[#8f4c36] font-extralight">
        Little Red Hen Bakery is a place where we share our most <br />
        cherished (and sometimes secret) recipes. In the Little Red <br /> Hen
        folktale, the Hen had to do all the work herself. At our <br /> bakery,
        it's a team effort. From family recipes that have <br /> passed through
        generations to original creations that we've <br /> fine-tuned together,
        everything on our menu has a story to <br /> tell.
      </p>
      <div className="mt-10 grid grid-cols-2 gap-4">
        <img src="/images/item1.jpg" alt="" />
        <img src="/images/item2.jpg" alt="" />
        <img src="/images/item3.jpg" alt="" />
        <img src="/images/item4.jpg" alt="" />
        <img src="/images/item5.jpg" alt="" />
        <img src="/images/item6.jpg" alt="" />
      </div>
      <div className="ml-5 mt-[100px] grid grid-cols-2 gap-1">
        <img className="w-[100%]" src="/images/tittle.jpg" alt="" />
        <div className="2xl:ml-[50px] md:ml-[20px]">
          <h1 className="2xl:text-[40px] md:text-[20px]  text-[#9b4427] font-bold">
            LOCAL, ORGANIC AND MILLED FRESH
          </h1>
          <p className="mt-5 2xl:text-[20px] md:text-[15px] text-[#8f4c36] font-extralight">
            We only feed our community the best! That's why we mill daily
            in-house for the freshest and most nutritious flour. We proudly use
            organic ingredients at every chance and source from our thriving
            local farming community, including organic grains from Mountain Mama
            Milling (Monte Vista, CO) and dairy from Morning Fresh (Bellevue,
            CO). Love to bake at home? We've got our flour for sale and we're
            always happy to share a dollop of “Carl” the sourdough starter for
            FREE! Carl has been in Emily's family for over 40 years!
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
