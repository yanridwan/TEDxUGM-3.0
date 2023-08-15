import Link from 'next/link';
import sponsors from './sponsors';

export default function Partnership() {
  const pics: { name: string; src: string }[] = [];
  const picsSec: { name: string; src: string }[] = [];
  for (let i = 1; i <= 5; i++) {
    pics.push({
      name: `foot${i}`,
      src: `sponsorship/sponsorFoot/foot${i}.png`,
    });
  }
  for (let i = 6; i <= 9; i++) {
    picsSec.push({
      name: `foot${i}`,
      src: `sponsorship/sponsorFoot/foot${i}.png`,
    });
  }

  return (
    <main>
      <section className="md:mx-20 mx-5 pt-10">
        <div className="mx-auto lg:w-1/2 text-center pt-10">
          <h1 className="titleRed">OUR SPONSORS</h1>
          <p>
            We extend our heartfelt gratitude to our valued partners
            contribution, whose support and collaboration played a pivotal role
            in the success of this remarkable event
          </p>
        </div>
        <div className="mt-10 p-5 bg-white max-md:flex flex-wrap flex-row justify-center md:grid md:grid-cols-5 gap-10 border-black border-4 rounded-xl items-center shadow-[rgba(0,0,15,0.5)_10px_10px_10px_5px]">
          {sponsors.map((sponsor) => (
            <img
              className="max-md:max-w-[20%] max-sm:max-w-[40%] shrink"
              src={sponsor.link}
              key={sponsor.name}
              alt={sponsor.name}
            />
          ))}
          {sponsors.map((sponsor) => (
            <img
              className="max-md:max-w-[20%] max-sm:max-w-[40%] shrink"
              src={sponsor.link}
              key={sponsor.name}
              alt={sponsor.name}
            />
          ))}
          {sponsors.map((sponsor) => (
            <img
              className="max-md:max-w-[20%] max-sm:max-w-[40%] shrink"
              src={sponsor.link}
              key={sponsor.name}
              alt={sponsor.name}
            />
          ))}
        </div>
        <div className="mx-auto mt-20 lg:w-1/2 text-center">
          <h1 className="titleRed">OUR PARTNERS</h1>
          <p>
            We extend our heartfelt gratitude to our valued partners
            contribution, whose support and collaboration played a pivotal role
            in the success of this remarkable event
          </p>
        </div>
        <div className="mt-10 p-5 bg-white max-md:flex flex-wrap flex-row justify-center md:grid md:grid-cols-5 gap-10 border-black border-4 rounded-xl items-center shadow-[rgba(0,0,15,0.5)_10px_10px_10px_5px]">
          {sponsors.map((sponsor) => (
            <img
              className="max-md:max-w-[20%] max-sm:max-w-[40%] shrink"
              src={sponsor.link}
              key={sponsor.name}
              alt={sponsor.name}
            />
          ))}
          {sponsors.map((sponsor) => (
            <img
              className="max-md:max-w-[20%] max-sm:max-w-[40%] shrink"
              src={sponsor.link}
              key={sponsor.name}
              alt={sponsor.name}
            />
          ))}
          {sponsors.map((sponsor) => (
            <img
              className="max-md:max-w-[20%] max-sm:max-w-[40%] shrink"
              src={sponsor.link}
              key={sponsor.name}
              alt={sponsor.name}
            />
          ))}
        </div>
      </section>
      <section className="mt-20 md:mx-10 mx-5">
        <div className="lg:w-1/2 lg:mx-auto md:mx-10 text-center pb-10">
          <h1 className="titleRed">Be Our Support</h1>
          <p>
            Embrace the opportunity to align your compassion with action by
            joining our support, where your contribution can amplify our efforts
            to elevate our organization.
          </p>
          <Link href="#">
            <button className="buttonRed mt-5">Support Us</button>
          </Link>
        </div>
        <div></div>
      </section>
      <section className="mt-10">
        <div className="grid grid-flow-row-dense grid-cols-4">
          {picsSec.map((pic) => (
            <img
              className="w-full h-full"
              src={pic.src}
              alt={pic.name}
              key={pic.name}
            />
          ))}
        </div>
        <div className="grid grid-flow-row-dense grid-cols-5">
          {pics.map((pic) => (
            <img
              className="w-full h-full"
              src={pic.src}
              alt={pic.name}
              key={pic.name}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
