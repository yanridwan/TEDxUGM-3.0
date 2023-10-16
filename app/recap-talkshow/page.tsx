import Image from 'next/image';
import bgPreEvent from 'public/bgPreEvent.png';
import recap1 from 'public/recap-talkshow/recap1.png';
import recap2 from 'public/recap-talkshow/recap2.png';
import recap3 from 'public/recap-talkshow/recap3.png';
import recap4 from 'public/recap-talkshow/recap4.png';
import recap5 from 'public/recap-talkshow/recap5.png';
import recap6 from 'public/recap-talkshow/recap6.png';
import recap7 from 'public/recap-talkshow/recap7.png';
import recap8 from 'public/recap-talkshow/recap8.png';
import recap9 from 'public/recap-talkshow/recap9.png';
import recap10 from 'public/recap-talkshow/recap10.png';
import recap11 from 'public/recap-talkshow/recap11.png';
import recap12 from 'public/recap-talkshow/recap12.png';

function RecapTalkshow() {
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
        <div className="flex flex-row justify-between py-8 gap-6 items-center">
          <h2 className="text-redTED font-bold text-3xl">#1</h2>
          <div className="bg-white h-10 w-[0.1rem]"></div>
          <h2 className="font-bold text-3xl">#2</h2>
          <div className="bg-white h-10 w-[0.1rem]"></div>
          <h2 className="font-bold text-3xl">#3</h2>
        </div>
        <div className="grid grid-cols-4 grid-rows-4 gap-2 w-full">
          <Image src={recap1} alt="" className="w-full h-full"/>
          <Image src={recap2} alt="" className="w-full h-full row-span-2"/>
          <Image src={recap3} alt="" className="w-full h-full"/>
          <Image src={recap4} alt="" className="w-full h-full"/>
          <Image src={recap5} alt="" className="w-full h-full row-span-2"/>
          <Image src={recap6} alt="" className="w-full h-full row-span-2"/>
          <Image src={recap7} alt="" className="w-full h-full"/>
          <Image src={recap8} alt="" className="w-full h-full row-span-2"/>
          <Image src={recap9} alt="" className="w-full h-full"/>
          <Image src={recap10} alt="" className="w-full h-full"/>
          <Image src={recap11} alt="" className="w-full h-full"/>
          <Image src={recap12} alt="" className="w-full h-full"/>
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
