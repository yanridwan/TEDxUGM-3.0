function About() {
    return (
      <div className=" relative mt-2 min-h-full">
        <img
          src="/about/About TED.svg"
          className="absolute -z-20 h-64 w-70 mr-10 top-0 right-0 opacity-50 max-sm:hidden"
          alt="about TED"
        />
        <h2 className="absolute bottom-0 left-0 -z-20 leading-tight font-outline-1 font-bold text-white text-[10rem] opacity-50 max-sm:hidden">
          About <br /> TEDx{" "}
        </h2>
  
        <div className="flex md:flex-row flex-col  justify-center items-center gap-10 pt-20 max-md:mx-10">
          <h1 className="text-redTED -z-20 font-bold text-center lg:text-right text-[calc(5vw+1.7em)] leading-none h-full">
            About <br className="max-md:hidden"/> TED{" "}
          </h1>
          <p className="text-black text-xl text-justify lg:w-[40%] md:w-1/2">
            TED is a platform dedicated to researching, finding fresh ideas, and sharing knowledge that matters. TED is devoted to curiosity, reason, eagerness and the pursuit of knowledge with the mission to discover and spread ideas that ignite imagination, embrace possibility, and catalyze impact. TED welcome people, from every background of culture, who seek knowledge and has the desire to discover a deeper understanding of the world by inviting everyone to engage with ideas and initiate them in our community.
          </p>
        </div>
        <p></p>
        <div className="flex md:flex-row-reverse flex-col justify-center items-center gap-10 py-20 pb-40 max-md:mx-10">
          <h1 className="text-redTED -z-20 font-bold text-center lg:text-left text-[calc(5vw+1.7em)] leading-none h-full">
            About <br className="max-md:hidden"/> TEDx{" "}
          </h1>
          <p className="text-black text-xl text-justify lg:w-[40%] md:w-1/2">
            x = Independently Organized Event <br/><br /> TEDx is a program constructed by TED
            to unveil and discover “ideas worth spreading” through local
            communities around the globe. TEDx events are organized by passionate
            individuals who seek to uncover new ideas and to share the latest
            research in their local areas that spark conversations and inspire
            their communities. These local, self-organized TEDx will share
            TED-like experiences that will bring fresh ideas and knowledge for the
            community.{" "}
          </p>
        </div>
      </div>
    );
  }
  
  export default About;