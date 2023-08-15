import { StaticImageData } from "next/image";
import Image from "next/image";
import calendar from "../../public/talkshow/calendar.svg";
import clock from "../../public/talkshow/jam.svg";
import location from "../../public/talkshow/location.svg";
export default function CardOpen({
  title,
  image,
  place,
  time,
  date,
  desc,
  url,
  isOpen,
}: {
  title: string;
  image: StaticImageData;
  place: string;
  time: string;
  date: string;
  desc: string;
  url: string;
  isOpen: boolean;
}) {
  return (
    <section className="mb-16">
      <div className="lg:rounded-full flex flex-col gap-10 items-center bg-black text-white p-10 lg:py-5 px-5 mx-10">
        <div className="flex flex-col lg:flex-row justify-center items-center gap-5">
          <h1 className={`font-semibold lg:w-[30%] text-5xl ml-16 italic ${isOpen ? "" : "hidden"}`}>
            {title}
          </h1>
          <Image width={400} height={400} src={image} alt={title} />
          <div className="grid grid-cols-1">
            <h1
              className={`font-bold text-5xl italic ${isOpen ? "hidden" : ""}`}
            >
              {title}
            </h1>
            <div className={`grid grid-cols-2 mt-5 ${isOpen?'':'w-1/2'}`}>
              <Image className="mb-2 -ml-3 " width={45} height={45} src={calendar} alt="date icon" />
              <p className="my-auto -ml-24">{date}</p>

              <Image className="mb-2" width={25} height={25} src={location} alt="loc icon" />
              <p className="my-auto -ml-24">{place}</p>

              <Image className="mb-2  " width={30} height={30} src={clock} alt="clock icon" />
              <p className="my-auto -ml-24">{time}</p>
            </div>
          </div>
        </div>
        <p className="w-3/4 mx-auto">{desc}</p>
      </div>
      <button className={`buttonRed block mx-auto px-10 text-center`}>
        {isOpen ? "REGISTER NOW!" : "CLOSED!"}
      </button>
    </section>
  );
}
