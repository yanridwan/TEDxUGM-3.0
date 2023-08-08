import Image from "next/image";
import shine from '../../public/talkshow/redShine.svg'
function TalkshowLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-white bg-[url('/talkshow/bgTalk.svg')] ">
      <div className="relative box-content bg-white w-full h-16">
        <img
          src="interview/arrow.svg"
          className="w-5 h-5 absolute left-10 top-5"
        />
        <h1 className="absolute left-16 font-bold top-5">Talkshow</h1>
        <img
          src="interview/logo.svg"
          className="w-25 h-10 absolute right-5 bottom-4"
        />
      </div>
      <Image src={shine} alt='shine' className="absolute top-0 opacity-50"/>
      <Image src={shine} alt='shine' className="absolute top-0 right-0 opacity-50 rotate-180"/>
      {children}
    </div>
  );
}

export default TalkshowLayout;

