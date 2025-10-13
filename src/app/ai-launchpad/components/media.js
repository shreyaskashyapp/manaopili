export default function Media({url}) {
    return (
        <div className="flex flex-col items-center justify-center pt-4 md:pb-10">
            <div className="w-full max-w-5xl md:px-10 py-4 flex flex-col gap-6 ">
                {/* <Image src='/non-profit/nonprofit_1.png' alt="Beach" className="w-full" width={500} height={500} /> */}
                <iframe
                    src={url}
                    title="wait"
                    className="w-full aspect-video rounded-xl"
                    allow=""
                    allowFullScreen
                />
            </div>
        </div>
    )
}