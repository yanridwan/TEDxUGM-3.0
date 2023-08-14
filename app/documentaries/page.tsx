import star from "../../public/documentaries/star.svg";
import Image from "next/image";
function Documentaries() {
  return (
    <div className="relative z-20 bg-red-600 min-h-screen ">
      <Image src={star} alt="star" width={500} height={300} className="absolute -right-0 top-1/4 -z-20"/>
    <div className="relative box-content bg-white w-full h-16">
      <img alt="docs" src="interview/arrow.svg" className="w-5 h-5 absolute left-10 top-5"/>
      <h1 className="absolute left-16 font-bold top-5">Documentaries</h1>
      <img alt="docs" src="interview/logo.svg" className="w-25 h-10 absolute right-5 bottom-4"/>
    </div>
    <div className=" flex flex-col gap-20">
      <h1 className="text-white font-bold  text-4xl mt-36 md:ml-20 max-md:text-center -mb-10">The Local Assets</h1>
    <div className="block mx-auto">
      <iframe
        className="rounded-3xl max-md:w-[80vw] aspect-auto"
        width="560" 
        height="315"
        src="https://youtube.com/embed/K5H-GvnNz2Y"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      </div>
    </div>
    <hr className=" border-b-2 border-white mt-20 mb-10 mx-20"/>
    <div className=" flex flex-col gap-20 pb-28">
      <h1 className="text-white font-bold text-4xl mt-10 md:ml-20 max-md:text-center -mb-10">A point of View</h1>
    <div className="block mx-auto">
      <iframe
      className="rounded-3xl max-md:w-[80vw]"
        width="560"
        height="315"
        src="https://youtube.com/embed/K5H-GvnNz2Y"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      </div>
    </div>
    <div className="box-content bg-white w-full h-16 object-bottom">
      <h1 className="font-bold justify-center items-center md:text-2xl italic text-center py-5">Historycal gap is created due to missing written records -Lailah Gifty Akita</h1>
    </div>
  </div>
  )
}

export default Documentaries
