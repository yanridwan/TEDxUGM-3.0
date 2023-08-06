function TalkshowLayout({children}:{children:React.ReactNode}) {
    return (
      <div class="bg-white ">
      <div class="fixed box-content bg-white w-full h-16">
        <img src="interview/arrow.svg" className="w-5 h-5 absolute left-10 top-5"/>
        <h1 className="absolute left-16 font-bold top-5">Talkshow</h1>
        <img src="interview/logo.svg" className="w-25 h-10 absolute right-5 bottom-4"/>
      </div>
      {children}
    </div>
    )
  }
  
  export default TalkshowLayout
  
