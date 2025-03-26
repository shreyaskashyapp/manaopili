export default function GlobalImage({ data }) {
    return (
        <div className="relative w-full py-10 px-4 lg:px-10 flex flex-col gap-10 justify-center lg:flex-row">
            <div className="lg:w-3/4">
                <img src={data?.imagePath} alt="Beach" className="w-full" />
            </div>
            <div className="lg:w-1/4 flex flex-col gap-5 px-4">
                <h2 className="lg:text-6xl text-3xl font-semibold text-[#e2e2e2]">
                    {data?.title}
                </h2>
                <p className="text-base text-gray-400">{data?.description}</p>
            </div>
        </div>
    )
}