'use client';

import schedules from './schedules';
import {useState, useEffect} from 'react';

export default function Schedule() {
    const [active, setActive] = useState<boolean[]>(schedules.map(()=>false));
    const today =new Date();
    function fillState(){
        let isFound = false;

        const isActive = schedules.map((schedule)=>{
            if(!isFound && today <= new Date(schedule.date)){
                isFound = true;
                return true;
            }
            else return false;
        });
        setActive(isActive);
    }

    useEffect(()=>{
        fillState();
    }, [today.getDate()]);
    
    return (
        <main className="relative py-5 bg-[url('/bgMerch.png')]">
            <div className="absolute -z-20 w-full h-full max-md:hidden">
                <h2 className="absolute -top-[calc(2vh+0.3em)] -right-[calc(10vw+0.5em)] layoutTitle">Schedule</h2>
                <h2 className="absolute top-0 -left-[calc(10vw+0.5em)] layoutTitle">Schedule</h2>
                <h2 className="absolute bottom-0 -right-[calc(10vw+0.5em)] layoutTitle">Schedule</h2>
                <h2 className="absolute -bottom-[calc(2vh+0.5em)] -left-[calc(10vw+0.5em)] layoutTitle">Schedule</h2>
            </div>
            <h1 className='text-center titleRed pt-10'>OUR SCHEDULE</h1>
            <div
                className="md:h-full grid grid-cols-1 md:auto-rows-fr overflow-hidden md:mx-10 mx-2 p-1 lg:mx-20"
            >
                {schedules.map((schedule, index) =>
                    <section key={schedule.title} className={`${active[index]?'bg-red-500 ':''} px-1 rounded-2xl w-full basis-1 flex flex-row max-md:flex-row-reverse`}>
                        <div
                            className="flex flex-col flex-[4] gap-2 justify-center items-start p-4 my-4"
                        >
                            <h3 className={` font-semibold text-lg mb-1 ${active[index]?'text-orange-active':'text-redTED'}`}>{new Date(schedule.date).toLocaleDateString("en-US", {day:"numeric",month:"long", year:"numeric"})}</h3>
                            <h2 className={`leading-tight font-bold ${index==active.length-1?'text-[calc(1vw+2rem)]':'text-[calc(1vw+0.9rem)]'} ${active[index]?'text-white':'text-black'}`}>
                                {schedule.title}
                            </h2>
                            <p dangerouslySetInnerHTML={{__html: schedule.description}} className={`md:hidden text-justify ${active[index]?'text-white':'text-black'}`} >
                                
                            </p>
                        </div>
                        <div className=" md:mx-auto top-1/2 min-h-full relative md:mr-10">
                            <div className={`${index==active.length-1?'h-0':'h-full max-md:h-[200%]'} w-5 flex items-center justify-center`}>
                                <div className="lineSchedule"></div>
                            </div>
                            <div
                                className={`dotSchedule ${active[index]?'bg-white transform scale-100':' bg-black'}`}
                            ></div>
                        </div>

                        <div
                            className={`max-md:hidden flex-[5] ${active[index]?'text-white':'text-black'} flex items-center p-4 rounded-xl my-4 mr-auto`}>
                            <p dangerouslySetInnerHTML={{__html: schedule.description}} className="text-justify">
                                
                            </p>
                        </div>
                    </section>
                )}
            </div>
        </main>
    )
}