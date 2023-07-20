import Link from "next/link"

export default function Merchandise(){
    const merchs:{name:string, image:string, price:number, desc:string}[] = []
    for(let i =0; i<9; i++){
        merchs.push({
            name:'TEDxUGM', image:'logoBlack.png', price:10000+i*1000, desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis eligendi atque harum soluta maiores inventore ipsam officia, at, nam rerum voluptas reiciendis in eius dolorem quod consequuntur explicabo nesciunt sequi?'
        })
    }
    return(
        <>
            <section className="w-full text-center">
                <h1 className="mt-10">OUR MERCHANDISE</h1>
            </section>
            <section className="grid grid-flow-rows-dense grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-5 mx-20 mt-20">
                {merchs.length!=0 ?
                    merchs.map(merch=>(
                        <Link key={merch.name} href={{pathname:`/merchandise/${merch.name}`,
                        query:{
                            description: merch.desc,
                            price: merch.price,
                            image:merch.image
                        }}}>    
                            <div>
                                <div className="merchCard border-black border bg-white rounded-xl aspect-square px-2 flex items-center justify-center">
                                <img className="max-md:w-[21rem]" src={merch.image} alt={merch.name}/>
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

        </>
    )
}