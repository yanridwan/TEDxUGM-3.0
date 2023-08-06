function Cycling() {
  return (
<div className=" bg-black min-h-screen">
    <div className="fixed box-content bg-white w-full h-16 z-20">
      <img src="interview/arrow.svg" className="w-5 h-5 absolute left-10 top-5"/>
      <h1 className="absolute left-16 font-bold top-5">Cycling</h1>
      <img src="interview/logo.svg" className="w-25 h-10 absolute right-5 bottom-4"/>
    </div>
    <div className="flex flex-row items-center">
      <img src="/cycling/pics.svg" className=" absolute h-80 w-80 left-[40px] top-[40px]"/>
      <h1 className="absolute text-2xl text-white font-bold left-[400px] top-[100px]">Upcoming Tour de Frances</h1>
      <h2 className="absolute text-white left-[400px] top-[160px] text-justify md">Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> 
      Sed earum, voluptate aliquid reiciendis minima nihil incidunt. <br />
      Corporis beatae eos suscipit labore voluptatem nostrum eligendi natus<br />
      quod dolor? Voluptatem, soluta corporis.<br /></h2>
    </div>
    <div className="flex flex-row items-center">
      <img src="/cycling/pics2.svg" className=" absolute h-80 w-80 right-[40px] top-[300px]"/>
    </div>
    <div className="flex flex-row items-center">
      <img src="/cycling/pics3.svg" className=" absolute h-80 w-80 left-[40px] top-[560px]"/>
    </div>
</div>
  )
}

export default Cycling
