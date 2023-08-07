function Main() {
    return (
        <div>
            <div className="fixed box-content bg-white w-full h-16 z-20">
             <img src="interview/arrow.svg" className="w-5 h-5 absolute left-10 top-5"/>
            <h1 className="absolute left-16 font-bold top-5">Main Event</h1>
             <img src="interview/logo.svg" className="w-25 h-10 absolute right-5 bottom-4"/>
            </div>
        <div
      className="h-screen bg-cover bg-center flex justify-center items-center"
      style={{
        backgroundImage: `url('/main/bg.png')`,
      }}>
        <div>
        <button class=" bg-red-600 text-white font-bold py-2 px-4 rounded-full">
            PURCHASE TICKET NOW
        </button>
        </div>
    </div>
    <div>
        <img src="/main/orang.svg" className="w-full h-full" />
    </div>
      <div
      className="h-screen bg-cover bg-center flex justify-center items-center"
      style={{
        backgroundImage: `url('/main/bg1.svg')`,
      }}>
        <div>
        </div>
    </div>
    </div>
    )
}
export default Main