"use client";
import { useState } from "react";
import Image from 'next/image';
import bgPreEvent from 'public/bgPreEvent.png';

function RecapTalkshow() {
  const [openTab, setOpenTab] = useState(1);

  return (
    <div className="bg-grey min-h-screen text-white">
      <div className="relative">
        <Image src={bgPreEvent} alt="background" className="object-cover max-w-screen pointer-events-none" />
        <h1 className="absolute font-bold text-3xl lg:text-7xl w-full text-white top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 items-center text-center">
            Pre-Event
        </h1>
      </div>
      <div className="flex flex-col items-center mx-40">
        <h2 className="text-redTED font-bold text-4xl">Recap Talkshow</h2>
        <p className="text-2xl text-center pt-2">
          We extend our heartfelt gratitude to our valued partners contribution, whose<br/>
          support and collaboration played a pivotal role in the success of this remarkable<br/>
          event
        </p>
        <div className="flex flex-row justify-between py-8 gap-2 items-center">
          <button className={"font-bold text-3xl px-4 py-2 rounded-lg  transform ease-out duration-300 " + 
            (openTab === 1 ? "text-redTED hover:bg-white": "hover:bg-redTED")}
            onClick={() => setOpenTab(1)}>#1</button>
          <div className="bg-white h-10 w-[0.1rem]"></div>
          <button className={"font-bold text-3xl px-4 py-2 rounded-lg  transform ease-out duration-300 " + 
            (openTab === 2 ? "text-redTED hover:bg-white": "hover:bg-redTED")}
            onClick={() => setOpenTab(2)}>#2</button>
          <div className="bg-white h-10 w-[0.1rem]"></div>
          <button className={"font-bold text-3xl px-4 py-2 rounded-lg  transform ease-out duration-300 " + 
            (openTab === 3 ? "text-redTED hover:bg-white": "hover:bg-redTED")}
            onClick={() => setOpenTab(3)}>#3</button>
        </div>
        <div className={"grid grid-cols-4 grid-rows-4 gap-2 w-full " + (openTab === 1 ? "block" : "hidden")}>
          <Image src="/recap-talkshow/1-1.png" width={1000} height={1000} alt="" className="w-full h-full"/>
          <Image src="/recap-talkshow/1-2.png" width={1000} height={1000} alt="" className="w-full h-full row-span-2"/>
          <Image src="/recap-talkshow/1-3.png" width={1000} height={1000} alt="" className="w-full h-full"/>
          <Image src="/recap-talkshow/1-4.png" width={1000} height={1000} alt="" className="w-full h-full"/>
          <Image src="/recap-talkshow/1-5.png" width={1000} height={1000} alt="" className="w-full h-full row-span-2"/>
          <Image src="/recap-talkshow/1-6.png" width={1000} height={1000} alt="" className="w-full h-full row-span-2"/>
          <Image src="/recap-talkshow/1-7.png" width={1000} height={1000} alt="" className="w-full h-full"/>
          <Image src="/recap-talkshow/1-8.png" width={1000} height={1000} alt="" className="w-full h-full row-span-2"/>
          <Image src="/recap-talkshow/1-9.png" width={1000} height={1000} alt="" className="w-full h-full"/>
          <Image src="/recap-talkshow/1-10.png" width={1000} height={1000} alt="" className="w-full h-full"/>
          <Image src="/recap-talkshow/1-11.png" width={1000} height={1000} alt="" className="w-full h-full"/>
          <Image src="/recap-talkshow/1-12.png" width={1000} height={1000} alt="" className="w-full h-full"/>
        </div>
        <div className={"grid grid-cols-4 grid-rows-4 gap-2 w-full " + (openTab === 2 ? "block" : "hidden")}>
          <Image src="/recap-talkshow/2-1.png" width={1000} height={1000} alt="" className="w-full h-full row-span-2"/>
          <Image src="/recap-talkshow/2-2.png" width={1000} height={1000} alt="" className="w-full h-full"/>
          <Image src="/recap-talkshow/2-3.png" width={1000} height={1000} alt="" className="w-full h-full row-span-2"/>
          <Image src="/recap-talkshow/2-4.png" width={1000} height={1000} alt="" className="w-full h-full"/>
          <Image src="/recap-talkshow/2-5.png" width={1000} height={1000} alt="" className="w-full h-full"/>
          <Image src="/recap-talkshow/2-6.png" width={1000} height={1000} alt="" className="w-full h-full row-span-2"/>
          <Image src="/recap-talkshow/2-7.png" width={1000} height={1000} alt="" className="w-full h-full"/>
          <Image src="/recap-talkshow/2-8.png" width={1000} height={1000} alt="" className="w-full h-full row-span-2"/>
          <Image src="/recap-talkshow/2-9.png" width={1000} height={1000} alt="" className="w-full h-full"/>
          <Image src="/recap-talkshow/2-10.png" width={1000} height={1000} alt="" className="w-full h-full"/>
          <Image src="/recap-talkshow/2-11.png" width={1000} height={1000} alt="" className="w-full h-full"/>
          <Image src="/recap-talkshow/2-12.png" width={1000} height={1000} alt="" className="w-full h-full"/>
        </div>
        <div className={"grid grid-cols-4 grid-rows-4 gap-2 w-full " + (openTab === 3 ? "block" : "hidden")}>
          <Image src="/recap-talkshow/2-1.png" width={1000} height={1000} alt="" className="w-full h-full row-span-2" />
          <Image src="/recap-talkshow/2-2.png" width={1000} height={1000} alt="" className="w-full h-full" />
          <Image src="/recap-talkshow/2-3.png" width={1000} height={1000} alt="" className="w-full h-full row-span-2" />
          <Image src="/recap-talkshow/2-4.png" width={1000} height={1000} alt="" className="w-full h-full" />
          <Image src="/recap-talkshow/2-5.png" width={1000} height={1000} alt="" className="w-full h-full" />
          <Image src="/recap-talkshow/2-6.png" width={1000} height={1000} alt="" className="w-full h-full row-span-2" />
          <Image src="/recap-talkshow/2-7.png" width={1000} height={1000} alt="" className="w-full h-full" />
          <Image src="/recap-talkshow/2-8.png" width={1000} height={1000} alt="" className="w-full h-full row-span-2" />
          <Image src="/recap-talkshow/2-9.png" width={1000} height={1000} alt="" className="w-full h-full" />
          <Image src="/recap-talkshow/2-10.png" width={1000} height={1000} alt="" className="w-full h-full" />
          <Image src="/recap-talkshow/2-11.png" width={1000} height={1000} alt="" className="w-full h-full" />
          <Image src="/recap-talkshow/2-12.png" width={1000} height={1000} alt="" className="w-full h-full" />
        </div>
      </div>
      <div className="flex flex-col items-center text-white mx-36 pt-16 pb-8">
        <h2 className="text-redTED font-bold text-4xl">After Movie Talkshow #1</h2>
        <p className="text-2xl text-center pt-2">
          We extend our heartfelt gratitude to our valued partners contribution, whose<br/>
          support and collaboration played a pivotal role in the success of this remarkable<br/>
          event
        </p>
        <div className="block my-10 mx-40">
          <iframe
            className="rounded-xl w-[55vw] h-[30vw]"
            src="https://www.youtube.com/embed/mFOPCfyRe3s?si=T4_59U49zdtDVkWg"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <button className="bg-redTED py-1 px-3 rounded-full text-center text-xl font-bold">See Full On Youtube</button>
      </div>
      <div className="flex flex-col gap-10 mx-40 pb-48">
        <div className="flex flex-row gap-4">
          <div className="flex flex-col w-1/2">
            <p className="text-redTED font-bold text-xl pb-2">Talkshow #1</p>
            <h2 className="font-bold text-4xl">GLOBAL ENCHANTMENT,<br/>HOMEGROWN PERFECTION</h2>
            <p className="pt-4 text-2xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam facilisis purus non turpis consectetur, non porttitor ante consectetur.</p>
          </div>
          <div className="w-1/2">
            <iframe
              className="rounded-xl w-full h-72"
              src="https://www.youtube.com/embed/mFOPCfyRe3s?si=T4_59U49zdtDVkWg"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <div className="flex flex-row gap-4">
          <div className="w-1/2">
            <iframe
              className="rounded-xl w-full h-72"
              src="https://www.youtube.com/embed/1ZUTAbPrkWk?si=ijYmyR5DTxkgEvLr"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="flex flex-col w-1/2">
            <p className="text-redTED font-bold text-xl pb-2 text-right">Talkshow #2</p>
            <h2 className="font-bold text-4xl text-right">THE FLOURISHING TAPESTRY<br/>OF CREATIVE INDUSTRY</h2>
            <p className="pt-4 text-2xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam facilisis purus non turpis consectetur, non porttitor ante consectetur.</p>
          </div>
        </div>
        <div className="flex flex-row gap-4">
          <div className="flex flex-col w-1/2">
            <p className="text-redTED font-bold text-xl pb-2">Talkshow #3</p>
            <h2 className="font-bold text-4xl">GLOBAL ENCHANTMENT,<br/>HOMEGROWN PERFECTION</h2>
            <p className="pt-4 text-2xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam facilisis purus non turpis consectetur, non porttitor ante consectetur.</p>
          </div>
          <div className="w-1/2">
            <iframe
              className="rounded-xl w-full h-72"
              src="https://www.youtube.com/embed/mFOPCfyRe3s?si=T4_59U49zdtDVkWg"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div> 
  )
}

export default RecapTalkshow
