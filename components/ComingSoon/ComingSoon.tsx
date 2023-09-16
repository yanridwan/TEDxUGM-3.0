import Image from 'next/image';
import bg from '/public/main/Rectangle.svg';
import awan from '/public/main/awan.svg';
import podium from '/public/main/podium.svg';
export default function ComingSoon() {
  return (
    <main className="relative   ">
      <Image src={bg} alt="background" className="object-cover min-h-screen" />
      <div className="w-full flex items-center flex-col justify-center absolute z-20 top-0 h-full">
        <Image src={awan} alt="awan" className="" />
        <Image src={podium} alt="podium" className="max-sm:hidden" />
        <div className='absolute flex justify-center flex-col items-center text-white'>
            <h1 className='text-[calc(2rem+4vw)] font-extrabold italic font-mono'>COMING SOON</h1>
            <p className=' font-serif text-[calc(1rem+2vw)]'>STAY TUNED</p>
        </div>
      </div>
    </main>
  );
}
