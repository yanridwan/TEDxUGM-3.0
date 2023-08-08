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
            <h1 className="text-red-600 font-italic text-5xl">Coming Soon</h1>
          </div>
      </div>
    </div>
    )
}
export default Main