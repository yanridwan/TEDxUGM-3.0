import React from 'react'

function Interview() {
  return (
    <div className="min-h-screen bg-red-600 relative">
        <div className=" relative box-content bg-white w-full h-16">
           <img src="interview/arrow.svg" className="w-5 h-5 absolute left-10 top-5"/>
             <h1 className="absolute left-16 font-bold top-5">Interview</h1>
           <img src="interview/logo.svg" className="w-25 h-10 absolute right-5 bottom-4"/>
        </div>
        <div className='relative pl-10'>
            <img src='interview/pic1.svg' className='w-80 h-80 '/>
        </div>
        <div className='relative -right-10'>
            <img src="interview/pic2.svg" className="w-80 h-80 "/>
        </div>
        <div className='relative '>
        <img src="interview/pic3.png" className="w-80 h-40 "/>
        </div>
        
    </div>
  )
}

export default Interview
