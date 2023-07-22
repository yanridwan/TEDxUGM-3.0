import schedules from './schedules'

export default function Schedule() {
    return (
        <div className="">
            <h1 className='text-center titleRed'>OUR SCHEDULE</h1>
            <div
                className="flex flex-col max-md:justify-start max-md:items-start md:grid grid-cols-9 mx-auto p-2"
            >
                {schedules.map(schedule =>

                    <div className="flex flex-row-reverse justify-start md:contents">
                        <div
                            className="col-start-1 col-end-5 flex flex-col justify-center p-4 rounded-xl my-4 ml-auto"
                        >
                            <h3 className="font-semibold text-md mb-1 text-redTED">{schedule.date}</h3>
                            <h2 className="leading-tight font-bold text-xl text-black text-justify">
                                {schedule.title}
                            </h2>
                            <p className="leading-tight md:hidden text-justify">
                                {schedule.description}
                            </p>
                        </div>
                        <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
                            <div className="h-full w-6 flex items-center justify-center">
                                <div className="lineSchedule"></div>
                            </div>
                            <div
                                className="dotSchedule"
                            ></div>
                        </div>

                        <div
                            className="max-md:hidden text-black col-start-6 flex items-center col-end-10 p-4 rounded-xl my-4 mr-auto">
                            <p className="leading-tight text-justify">
                                {schedule.description}
                            </p>
                        </div>
                    </div>

                )}

            </div>
        </div>
    )
}