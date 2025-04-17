export default function StaticContent({ data }) {
    return(
        <div className="container mx-auto max-w-7xl px-6 py-12 text-white space-y-3">
                {data.map((section, index) => (
                    <div key={index} className="mb-8 p-6 rounded-lg space-y-3">
                        <h2 className="text-2xl font-medium">{section?.title}</h2>
                        <p className="text-gray-400">{section?.content.text}</p>
                        {section?.content?.bulletPoints && (
                            <ul className="list-disc pl-5 space-y-2">
                                {section?.content?.bulletPoints?.map((point, pointIndex) => (
                                    <li key={pointIndex} className="text-gray-400">{point}</li>
                                ))}
                            </ul>
                        )}
                    </div>
                ))}
            </div>
    )
}