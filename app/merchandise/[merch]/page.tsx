import Image from "next/legacy/image";
export default function Page({ params, searchParams }: { params: { merch: string }, searchParams: { description: string, price: number, image: string } }) {
    const productName = params.merch.replace(/%20/g, " ");
    return (
        <main className="relative">
            <div className="max-md:hidden absolute min-h-screen w-screen">
            <h2 className="absolute top-0 -right-[calc(10vw+2em)] opacity-100 font-outline-1 font-bold text-white text-[calc(10vw+3em)]">Merchandise</h2>
            <h2 className="absolute bottom-0 -left-[calc(10vw+2em)] font-outline-1 font-bold text-white text-[calc(10vw+3em)]">Merchandise</h2>
            </div>
            <section className="bgMerch flex items-center justify-center h-screen">
                <div className="flex flex-col md:flex-row gap-5 md:gap-20 mx-10 sm:mx-20 md:items-center justify-center">
                <Image src={`/${searchParams.image}`} alt={productName} width={500} height={300} placeholder="blur" blurDataURL="data:image/svg+xml,%0A%3Csvg xmlns='http://www.w3.org/2000/svg' height='800' width='1200' viewBox='-120.01695 -39.28975 1040.1469 235.7385'%3E%3Cdefs%3E%3CclipPath clipPathUnits='userSpaceOnUse' id='a'%3E%3Cpath d='M0 1178.69V0h6000.85v1178.69z'/%3E%3C/clipPath%3E%3C/defs%3E%3Cg clip-path='url(%23a)' transform='matrix(.13333 0 0 -.13333 0 157.159)'%3E%3Cpath d='M1656.86 568.617l57.57 57.578h-117.91v139.981h-62.27V324.172c0-63.141 36.33-114.18 108.99-114.18h44.11v53.629h-32.87c-39.79 0-57.96 23.359-57.96 62.281v242.715zm3224.51-225.105v482.734h-110.62V336.699c0-62.972 38.29-126.793 129.34-126.793h62.96v93.61h-42.54c-28.08 0-39.14 13.609-39.14 39.996zM5884.28 653.25l-71.49-274.008-91.05 274.008h-80.83l-90.21-274.008-71.47 274.008h-117.44l136.15-443.344h91.05l92.75 278.258 92.76-278.258h91.05l135.3 443.344zM5225.5 323.938c-12.76-12.766-29.79-19.575-51.91-19.575-22.13 0-38.3 6.809-51.06 19.575C5099.55 346.902 5097 386.055 5097 432c0 45.961 2.55 84.254 25.53 107.219 12.76 12.765 28.93 19.574 51.06 19.574 22.12 0 39.15-6.809 51.91-19.574 22.97-22.965 25.53-61.258 25.53-107.219 0-45.945-2.56-85.098-25.53-108.062zm-51.91 334.417c-65.53 0-109.77-25.523-137-54.457-40-41.699-50.21-91.91-50.21-171.898 0-80.832 10.21-131.043 50.21-172.742 27.23-28.93 71.47-54.457 137-54.457 65.52 0 110.62 25.527 137.85 54.457 40 41.699 50.21 91.91 50.21 172.742 0 79.988-10.21 130.199-50.21 171.898-27.23 28.934-72.33 54.457-137.85 54.457zm-647.76 41.11V210.359h110.63V559.91h81.69v84.238h-81.69v48.508c0 25.528 12.76 39.992 39.13 39.992h42.56v93.598h-62.98c-90.2 0-129.34-63.816-129.34-126.781zm-250.45-88.758v42.543h-108.07V209.906h110.62v267.196c0 56.164 37.45 81.691 71.49 81.691 27.23 0 41.34-9.051 58.37-26.066l83.73 83.933c-30.63 30.637-61.27 41.695-104.67 41.695-47.65 0-90.2-22.121-111.47-47.648zM3834.8 472.852c.84 19.578 3.4 31.48 10.21 47.652 11.91 26.383 36.59 45.945 74.03 45.945s62.12-19.562 74.03-45.945c6.81-16.172 9.36-28.074 10.22-47.652zm84.24 185.503c-114.88 0-193.16-81.687-193.16-226.355 0-179.551 100.4-227.199 205.07-227.199 79.99 0 123.39 24.679 168.49 69.785l-67.22 65.519c-28.09-28.085-51.91-41.695-100.42-41.695-62.12 0-97 41.695-97 98.703h277.41v49.352c0 121.687-69.79 211.89-193.17 211.89zm-304.77-5.105l-89.35-274.008-90.2 274.008h-116.58l163.38-443.344h86.8l162.53 443.344zm-430.72-329.312c-12.76-12.766-29.79-19.575-51.91-19.575-22.12 0-38.29 6.809-51.06 19.575-22.98 22.964-25.53 62.117-25.53 108.062 0 45.961 2.55 84.254 25.53 107.219 12.77 12.765 28.94 19.574 51.06 19.574s39.15-6.809 51.91-19.574c22.97-22.965 25.53-61.258 25.53-107.219 0-45.945-2.56-85.098-25.53-108.062zm-51.91 334.417c-65.52 0-109.77-25.523-137-54.457-39.99-41.699-50.21-91.91-50.21-171.898 0-80.832 10.22-131.043 50.21-172.742 27.23-28.93 71.48-54.457 137-54.457s110.62 25.527 137.85 54.457c40 41.699 50.21 91.91 50.21 172.742 0 79.988-10.21 130.199-50.21 171.898-27.23 28.934-72.33 54.457-137.85 54.457zm-292.6-22.16h-77.64l-192.97-187.859.3 377.531h-62.28V209.992h62.28l-.3 155.324 75.55 75.817 142.74-231.141h76.97l-176.57 274.281zm-533.4-50.804c40.65 0 65.74-12.102 97.74-47.563 0 0 41.7 40.524 41.35 40.891-43.66 46.711-80.73 62.035-139.09 62.035-107.26 0-188.57-72.656-188.57-217.981 0-145.304 81.31-217.972 188.57-217.972 58.82 0 96.01 15.578 140.12 63.14l-42.38 40.653c-32-35.461-57.09-48.434-97.74-48.434-41.52 0-76.12 16.434-98.61 48.434-19.9 27.679-27.68 60.554-27.68 114.179 0 53.629 7.78 86.504 27.68 114.184 22.49 32.012 57.09 48.434 98.61 48.434zm-306.2-224.883c0-35.477-6.93-59.696-21.63-73.528-26.82-25.949-58.82-28.55-95.15-28.55-67.47 0-97.74 23.355-97.74 72.668 0 49.293 31.14 75.242 95.15 75.242h119.37zm-108.12 280.246c-68.28 0-111.29-13.469-148.98-61.184-.52-.648 40.85-40.882 40.85-40.882 25.09 35.46 52.77 48.437 107.26 48.437 77.85 0 108.99-31.145 108.99-93.414v-40.652h-128.02c-95.15 0-147.05-48.45-147.05-122.836 0-33.731 11.25-65.731 32-86.5 26.82-27.68 61.42-38.922 120.24-38.922 57.09 0 88.22 11.242 122.83 45.844v-40.653h62.27v288.91c0 92.555-56.22 141.852-170.39 141.852zm-532.58-191.156l-68.34 6.05c-53.62 4.321-74.38 25.95-74.38 62.282 0 43.246 32.86 70.062 95.15 70.062 44.11 0 83.04-10.383 113.3-33.726l40.67 40.652c-38.07 31.129-92.56 45.836-153.11 45.836-90.83 0-156.56-46.707-156.56-124.555 0-70.066 44.11-107.258 127.15-114.179l70.07-6.051c49.3-4.336 70.93-25.09 70.93-62.285 0-50.164-43.25-75.254-113.32-75.254-52.76 0-98.61 13.843-132.35 49.304l-41.51-41.523c46.71-44.977 102.93-61.41 174.73-61.41 102.93 0 172.99 47.578 172.99 129.742 0 79.594-51.03 108.129-125.42 115.055' fill='%23212325'/%3E%3Cpath d='M840.719 105.18v315.511h105.164V0H0v420.691h105.164V105.18h735.555' fill='%23bcbbbc'/%3E%3Cpath d='M210.445 210.359h525.821v105.164H210.445zm471.266 968.331l-84.383-62.76 313.817-421.914 84.382 62.761zM420.879 929.949l404.047-336.504 67.301 80.813L488.18 1010.76zM288.973 696.102l476.664-221.993 44.398 95.332-476.664 221.993zm-68.086-246.391l514.582-108.149 21.629 102.918-514.582 108.149-21.629-102.918' fill='%23f48023'/%3E%3C/g%3E%3C/svg%3E"
       />
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
        </main>

    )
}