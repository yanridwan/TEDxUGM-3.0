import Image from "next/legacy/image";
export default function Page({ params, searchParams }: { params: { merch: string }, searchParams: { description: string, price: number, image: string } }) {
    const productName = params.merch.replace(/%20/g, " ");
    return (
        <main>
            <div className="max-md:hidden">
            <h2 className="absolute -top-[calc(2vh+0.4em)] -right-[calc(10vw+2em)] font-outline-1 text-white text-[calc(10vw+3em)]">Merchandise</h2>
            <h2 className="absolute bottom-0 -left-[calc(10vw+2em)] font-outline-1 text-white text-[calc(10vw+3em)]">Merchandise</h2>
            </div>
            <div className="absolute z-20 overflow-x-hidden">
            <section className="bgMerch flex items-center justify-center h-screen">
                <div className="flex flex-col md:flex-row gap-5 md:gap-20 mx-10 sm:mx-20 md:items-center justify-center">
                <Image src={`/${searchParams.image}`} alt={productName} width={500} height={300} />
                <div className="flex flex-col gap-1 md:w-[calc(30%+5rem)]">
                    <h1 className="text-black font-bold text-3xl">{productName}</h1>
                    <h1 className="font-bold text-redTED text-xl">Rp{searchParams.price}</h1>
                    <p className="text-justify">{searchParams.description}</p>
                    <div className="mt-5 flex justify-center">
                        <button className="buttonRed text-center">BUY NOW</button>
                    </div>
                </div>
                </div>
            </section>
            </div>
        </main>

    )
}