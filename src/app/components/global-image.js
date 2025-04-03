export default function GlobalImage({ data }) {
    return (
        <div className="relative w-full py-10 px-2 lg:px-10 gap-10 flex justify-center">
            <img src={data?.imagePath} alt="Beach" className=" w-full" />
            <div className="absolute md:max-w-7xl md:py-10 lg:py-16 py-2 md:px-10 px-4 gap-2 lg:gap-6 flex flex-col items-center justify-center overflow-hidden">
                <h2 className="lg:text-6xl md:text-5xl text-2xl text-[#455CFF]">{data.title}</h2>
                <p className="lg:text-xl md:text-sm text-xs text-zinc-600 text-center">{data.description}</p>
            </div>
        </div>
    )
}
// <div className="lg:w-1/4 flex flex-col gap-5 px-4">
// </div>