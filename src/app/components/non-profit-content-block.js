export default function NonProfitContentBlock({ data }) {
  return (
    <section className="bg-[#141414]">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
          {data.items.map((item) => (
            <div
              key={item.id}
              className={item.bordered ? "lg:border-r border-border/30" : ""}
            >
              {/* Image */}
              <div className="aspect-[16/9] overflow-hidden">
                <img
                  src={item.image.src}
                  alt={item.image.alt}
                  className="w-full h-full object-cover"
                />
              </div>
              {item.image.credit && (
                <p className="text-zinc-500 text-xs mt-2 text-right px-2 md:px-12">
                  Photo credit: {item.image.credit}
                </p>
              )}

              {/* Content */}
              <div className="py-4 px-2 md:px-12 lg:py-12">
                <p className="text-gray-400 text-sm tracking-wide mb-6">
                  {item.eyebrow.label}{" "}
                  <span className="font-semibold text-[#DEFF00]">
                    {item.eyebrow.highlight}
                  </span>
                </p>

                <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-white mb-8 leading-none">
                  {item.title}
                </h2>

                <p className="text-gray-400 leading-relaxed text-md lg:text-lg">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <p className="text-zinc-500 text-xs mt-4 text-center">
        {data.footerNote.text}{" "}
        <a href={`mailto:${data.footerNote.email}`} className="underline hover:text-zinc-300">{data.footerNote.email}</a>.
      </p>
    </section>
  );
}
