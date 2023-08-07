function Documentaries() {
  return (
    <div class="relative bg-red-600 min-h-screen ">
    <div class="fixed box-content bg-white w-full h-16">
      <img src="interview/arrow.svg" className="w-5 h-5 absolute left-10 top-5"/>
      <h1 className="absolute left-16 font-bold top-5">Documentaries</h1>
      <img src="interview/logo.svg" className="w-25 h-10 absolute right-5 bottom-4"/>
    </div>
    <div className=" flex flex-row">
      <h1 className="text-white font-bold text-4xl mt-36 ml-20 -mb-10">The Local Project</h1>
    </div>
    <div className="flex justify-center items-center h-screen">
      <iframe
        width="560"
        height="315"
        src="https://youtube.com/embed/K5H-GvnNz2Y"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
    <div className=" flex flex-row">
      <h1 className="text-white font-bold text-4xl mt-10 ml-20 -mb-10">A point of View</h1>
    </div>
    <div className="flex justify-center items-center h-screen">
      <iframe
        width="560"
        height="315"
        src="https://youtube.com/embed/K5H-GvnNz2Y"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
    <div class="box-content bg-white w-full h-16 object-bottom">
      <h1 className="font-bold justify-center items-center text-2xl">histtorycal gap is due to xxxxxxxx</h1>
    </div>
  </div>
  )
}

export default Documentaries
