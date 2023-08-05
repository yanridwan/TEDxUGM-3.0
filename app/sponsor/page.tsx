import Link from "next/link";
import sponsors from "./sponsors";

export default function Sponsor() {
  const pics:{name:string, src:string}[] =[];
  const picsSec:{name:string, src:string}[] =[];
  for(let i = 1; i<=5 ; i++){
    pics.push({name:`foot${i}`, src:`sponsorship/sponsorFoot/foot${i}.png`});
  }
  for(let i = 6; i<=9 ; i++){
    picsSec.push({name:`foot${i}`, src:`sponsorship/sponsorFoot/foot${i}.png`});
  }

  return (
    <main className="overflow-hidden mt-10">
      <section className="md:mx-20 mx-5">
        <div className="mx-auto lg:w-1/2 text-center">
          <h1 className="titleRed">OUR SUPPORT</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus impedit cumque placeat! Voluptatem aliquid tenetur eligendi, dolores quae sit rerum in totam porro nemo consectetur eius, culpa earum. Nesciunt, quo!</p>
        </div>
        <div className="mt-10 p-5 bg-white max-md:flex flex-wrap flex-row justify-center md:grid md:grid-cols-5 gap-10 border-black border-4 rounded-xl items-center shadow-[rgba(0,0,15,0.5)_10px_10px_10px_5px]">
          {sponsors.map(sponsor => 
            <img className="max-md:max-w-[20%] max-sm:max-w-[40%] shrink" src={sponsor.link} key={sponsor.name} alt={sponsor.name}/>
          )}
          {sponsors.map(sponsor => 
            <img className="max-md:max-w-[20%] max-sm:max-w-[40%] shrink" src={sponsor.link} key={sponsor.name} alt={sponsor.name}/>
          )}
          {sponsors.map(sponsor => 
            <img className="max-md:max-w-[20%] max-sm:max-w-[40%] shrink" src={sponsor.link} key={sponsor.name} alt={sponsor.name}/>
          )}
        </div>
      </section>
      <section className="mt-10 md:mx-10 mx-5">
        <div className="lg:w-1/2 lg:mx-auto md:mx-10 text-center">
          <h1 className="titleRed">JOIN OUR SUPPORT</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae voluptatem quod at, consectetur similique harum ullam a repellat voluptatum ad. Odio maiores cumque quo accusantium nisi tempora? Labore, rem minus!</p>
          <Link href='#'><button className="buttonRed mt-5">JOIN</button></Link>
        </div>
        <div>
        </div>
      </section>
      <section className="mt-10">
        <div className="grid grid-flow-row-dense grid-cols-4">
          {picsSec.map(pic=>
            <img className="w-full h-full" src={pic.src} alt={pic.name} key={pic.name} />  
          )}
        </div>
        <div className="grid grid-flow-row-dense grid-cols-5">
          {pics.map(pic=>
            <img className="w-full h-full" src={pic.src} alt={pic.name} key={pic.name} />  
          )}
        </div>
      </section>
    </main>
  )
}

