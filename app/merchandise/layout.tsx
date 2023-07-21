
export default function MerchLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <main className="overflow-x-hidden">
            <div className="max-md:hidden">
            <h2 className="absolute -top-[calc(2vh+0.4em)] -right-[calc(10vw+2em)] font-outline-1 text-white text-[calc(10vw+3em)]">Merchandise</h2>
            <h2 className="absolute top-0 -left-[calc(10vw+2em)] font-outline-1 text-white text-[calc(10vw+3em)]">Merchandise</h2>
            </div>
            <div className="absolute z-20">{children}</div>
        </main>
    )
}
