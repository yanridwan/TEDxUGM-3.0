function Main() {
    return (
        <div>
            <div className="relative box-content bg-white w-full h-16 z-20">
             <img alt="main" src="interview/arrow.svg" className="w-5 h-5 absolute left-10 top-5"/>
            <h1 className="absolute left-16 font-bold top-5">Main Event</h1>
             <img alt="main" src="interview/logo.svg" className="w-25 h-10 absolute right-5 bottom-4"/>
            </div>
        <div
      className="h-screen bg-cover bg-center flex justify-center items-center"
      style={{
        backgroundImage: `url('/main/bg.png')`,
      }}>
        <div>
        <img 
        src="/main/damar.png"
        width={800}
        height={500}
        alt="Picture of the author"/>
        <div className="flex flex-col items-center">
        <button className="bg-red-600 text-white font-bold py-2 px-6 rounded-full mt-5">
          Purchase Ticket Now
        </button>
        </div>
        <p className="text-white font-bold text-2xl mt-20">
        A little glimpse of what’s about to come!
        </p>
        </div>
      </div>
      <div
      className="h-screen bg-cover bg-center flex justify-center items-center"
      style={{
        backgroundImage: `url('/main/bg2.png')`,
      }}>
         <div className="block mx-auto -mt-10">
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
      <img
      src="/main/orang.png"
      width={1300}
      height={500}
      alt="Picture of the author"
    />
    <div class="w-full h-full flex  justify-center items-center 
             bg-slate-50 backdrop-brightness-75">
      <img src="/main/bg1.svg" className="w-full h-full">

      </img>
      </div>
    </div>
    )
}
export default Main