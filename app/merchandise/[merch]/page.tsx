export default function Page({ params, searchParams }: { params: { merch: string }, searchParams: { description: string, price: number, image: string } }) {
    const productName = params.merch.replace(/%20/g, " ");
    return (
        <main className="relative">
            <div className="max-lg:hidden absolute min-h-screen w-screen">
            <h2 className="absolute -top-10 -right-[calc(10vw+2em)] opacity-100 font-outline-1 font-bold text-white text-[calc(10vw+3em)]">Merchandise</h2>
            <h2 className="absolute bottom-0 -left-[calc(10vw+2em)] font-outline-1 font-bold text-white text-[calc(10vw+3em)]">Merchandise</h2>
            </div>
            <section className="bgMerch flex items-center justify-center h-screen">
                <div className="flex flex-col md:flex-row gap-5 md:gap-20 mx-10  relative z-50 sm:mx-20 aspect-square md:items-center justify-center">
                <img src={`/${searchParams.image}`} alt={productName} className="w-[30vw] rounded-3xl aspect-square" placeholder="blur"/>
                <div className="flex flex-col gap-1 md:w-[calc(30%+5rem)]">
                    <h1 className="text-black font-bold text-3xl">{productName}</h1>
                    <h1 className="font-bold text-redTED text-xl">{searchParams.price}</h1>
                    <p className="text-justify">{searchParams.description}</p>
                    <div className="mt-5 flex justify-center">
                        <button className="buttonRed text-center">BUY NOW</button>
                    </div>
                </div>
                </div>
            </section>
        </main>

    )
}