import Link from "next/link"

export default function Merchandise() {
    const merchs: { name: string, image: string, price: number, desc: string }[] = []
    for (let i = 0; i < 9; i++) {
        merchs.push({
            name: 'Sticker TEDxUGM', image: 'logoBlack.png', price: 10000 + i * 1000, desc: 'To fully support our TEDxUGM event, we have sticker merchandise everyone can buy that can spark conversations and make a statement wherever you go.'
        })
    }
    return (
        <main className="relative w-full h-full bgMerch">
            <div className="absolute -z-20 w-full h-full max-md:hidden">
                <h2 className="absolute -top-[calc(2vh+0.1em)] -right-[calc(10vw+2em)] layoutTitle">Merchandise</h2>
                <h2 className="absolute top-10 -left-[calc(10vw+2em)] layoutTitle">Merchandise</h2>
                <h2 className="absolute bottom-[calc(2vh+0.5em)] -right-[calc(10vw+2em)] layoutTitle">Merchandise</h2>
                <h2 className="absolute bottom-0 -left-[calc(10vw+2em)] layoutTitle">Merchandise</h2>
            </div>
            <div>
            <section className="w-full text-center">
                <h1 className="pt-20 titleRed">OUR MERCHANDISE</h1>
            </section>
            <section className="md:max-w-[80%] pb-14 mx-auto gap-10 grid grid-flow-rows-dense grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 max-md:mx-20 mt-20">
                {merchs.length != 0 ?
                    merchs.map(merch => (
                        <Link key={merch.name} href={{
                            pathname: `/merchandise/${merch.name}`,
                            query: {
                                description: merch.desc,
                                price: merch.price,
                                image: merch.image
                            }
                        }}>
                            <div className="">
                                <div className="merchCard border-black border bg-white rounded-3xl aspect-square px-2 flex items-center justify-center mb-2">
                                    <img src={merch.image} alt={merch.name} />
                                </div>
                                <h2 className="font-bold text-lg">{merch.name}</h2>
                                <p className="text-lg">{merch.price.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}</p>
                            </div>
                        </Link>
                    )) :
                    <div>
                        <h1>COMING SOON</h1>
                    </div>
                }
            </section>
            </div>
        </main>
    )
}