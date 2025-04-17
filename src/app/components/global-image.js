export default function GlobalImage({ data }) {
    return (
        <div className="relative w-full py-8 px-4 lg:px-20 gap-10 flex justify-center">
            <img src={data?.imagePath} alt="Beach" className="w-full" />
            <div className="absolute md:max-w-7xl md:py-10 lg:py-16 py-2 md:px-7 px-4 gap-2 lg:gap-6 flex flex-col items-center justify-center overflow-hidden">
                <h2 className=" md:text-5xl lg:text-6xl xl:text-7xl text-2xl text-black">{data.title}</h2>
                <p className="lg:text-xl md:text-lg text-xs text-zinc-700 md:px-14 text-center">{data.description}</p>
            </div>
        </div>
    )
}
// <div className="lg:w-1/4 flex flex-col gap-5 px-4">
// </div>