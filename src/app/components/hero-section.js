export default function HeroSection({data, bgColor}) {

    return (
        <div className={`w-full h-[70vh] flex justify-start items-center bg-gradient-to-b ${bgColor} `}>
            <div className=" px-8 md:mx-20 lg:mx-44 max-w-5xl flex flex-col gap-5">
                <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font text-white leading-tight">
                    {data?.title}
                </h2>
                <p className="text-gray-200 md:text-xl text-base leading-relaxed flex-1">{data.description}</p>
            </div>
        </div>
    )
}