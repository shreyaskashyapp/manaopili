

export default function SurveyButton({data,title}) {
    return (
        <div>
            <a
                href={data.link}
                className="inline-flex items-center px-6 py-3 text-base font-medium text-zinc-800 bg-blue-100 hover:bg-[#deff00] rounded-full transition-all duration-300"
            >
                {data.text}
            </a>
        </div>
    )
}