export default function ImageContentBlock({ data }) {
    const isReversed = data?.reverse;
    return (
        <section>
            <div className="mx-auto">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Image */}
                    <div className={isReversed ? "order-1 md:order-2" : ""}>
                        <div className="aspect-square rounded-lg overflow-hidden">
                            <img
                                src={data?.image?.src}
                                alt={data?.image?.alt}
                                className="w-full h-full object-cover opacity-80"
                            />
                        </div>
                    </div>

                    {/* Content */}
                    <div className="space-y-6">
                        <div>
                            <p className="text-[#deff00] md:text-sm text-xs font-medium tracking-widest uppercase mb-2">
                                {data?.label}
                            </p>
                            <h2 className="font-display text-3xl md:text-4xl font-semibold text-white mb-4">
                                {data?.title}
                            </h2>

                            {data?.subTitle && (
                                <p className="text-zinc-400 italic mb-4">
                                    {data?.subTitle}
                                </p>
                            )}
                        </div>

                        {Array.isArray(data?.description) ? (
                            data.description.map((text, index) => (
                                <p
                                    key={index}
                                    className="text-zinc-300 leading-relaxed"
                                >
                                    {text}
                                </p>
                            ))
                        ) : (
                            <p className="text-zinc-300 leading-relaxed">
                                {data?.description}
                            </p>
                        )}

                        {data?.infoBlocks?.map((block, index) => (
                            <div
                                key={index}
                                className="bg-zinc-900 rounded-xl p-5 border border-zinc-800"
                            >
                                <h3 className="font-medium text-[#DEFF00] mb-3">
                                    {block?.heading}
                                </h3>

                                {block?.type === "text" && (
                                    <p className="text-zinc-400 text-sm leading-relaxed">
                                        {block?.content}
                                    </p>
                                )}

                                {block?.type === "list" && (
                                    <ul className="text-zinc-400 text-sm space-y-2">
                                        {block?.content?.map((item, i) => (
                                            <li key={i}>• {item}</li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
