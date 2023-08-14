"use client";
import React, { useEffect, useState } from "react";
import CountdownTimer from "@/components/Talkshow/CountdownTimer";
import CardOpen from "@/components/Talkshow/CardOpen";
import talkshowData from "./talkshow";
import Image from "next/image";
import pulau from '../../public/talkshow/jawa.svg'
import star from '../../public/talkshow/shining.svg'
const Talkshow = () => {
  const targetDates = talkshowData.map((data) => data.date);
  const [active, setActive] = useState<boolean[]>(targetDates.map(() => true));
  
  const today = new Date();
  function fillState() {
    const isActive = talkshowData.map((schedule) => {
      if (today <= new Date(schedule.date)) {
        return true;
      } else return false;
    });
    setActive(isActive);
  }

  useEffect(() => {
    fillState();
  }, [today.getHours()]); 
  return (
    <main className="pt-40">
      <section>
        <CountdownTimer targetDates={targetDates} />
      </section>
      <section className="relative mt-10 bg-redTED rounded-[5rem] md:w-1/2 px-10 max-md:mx-5 max-sm:mx-1 mx-auto text-center text-white">
        <h2 className="lg:text-3xl text-lg font-bold  pt-5">TIME LEFT UNTIL PRE-EVENT</h2>
        <button className="bg-black mt-10 px-16 py-10 rounded-3xl mb-20 font-semibold text-xl lg:text-5xl">
          REGISTER NOW
        </button>
        <Image src={pulau} alt="bintang" className="absolute bottom-0 opacity-70"/>
        <Image src={star} alt="bintang" className="absolute bottom-0 opacity-80"/>
      </section>
      <section className="flex flex-col gap-20 mt-10 ">
        {talkshowData.map((data, index) => {
          return (
            <div key={data.title} className={`${active[index]?'':'lowest'}`}>
              <CardOpen
                title={data.title}
                image={data.image}
                place={data.place}
                time={data.time}
                date={new Date(data.date).toLocaleDateString("id-ID", {day:"numeric",month:"long"})}
                isOpen={new Date() < new Date(data.date)}
                url="null"
                desc={data.desc}
              />
            </div>
          );
        })}
      </section>
    </main>
  );
};

export default Talkshow;
