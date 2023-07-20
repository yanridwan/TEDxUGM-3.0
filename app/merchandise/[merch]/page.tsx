import Image from "next/legacy/image";
export default function Page({ params, searchParams }: { params: { merch: string }, searchParams: { description: string, price: number, image: string } }) {
    const productName = params.merch.replace(/%20/g, " ");
    return (
        <main>
            <section className="bgMerch flex items-center justify-center h-screen">
                <div className="flex flex-col md:flex-row gap-5 md:gap-20 mx-5 sm:mx-20 md:items-center justify-center">
                <Image src={`/${searchParams.image}`} alt={productName} width={500} height={300} />
                <div className="flex flex-col gap-1 md:w-[calc(30%+5rem)]">
                    <h1 className="text-black text-3xl">{productName}!</h1>
                    <h1 className="text-xl">Rp{searchParams.price}</h1>
                    <p className="text-justify">{searchParams.description}</p>
                    <div className="mt-2">
                        <button className="text-center">BUY NOW</button>
                    </div>
                </div>
                </div>
            </section>
        </main>

    )
}