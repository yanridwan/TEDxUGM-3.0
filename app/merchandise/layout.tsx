
export default function MerchLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <main className="overflow-x-hidden w-screen">
            <h2 className="absolute -top-20 -right-[25vw] font-outline-1 text-white text-[10rem]">Merchandise</h2>
            <h2 className="absolute top-0 -left-[35vw] font-outline-1 text-white text-[10rem]">Merchandise</h2>
            <div className="relative z-20">{children}</div>
        </main>
    )
}
