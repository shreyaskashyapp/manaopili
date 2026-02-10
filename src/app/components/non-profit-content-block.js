const nonProfitContent = [
  {
    id: "coconut-tree",
    image: {
      src: "/non-profit/coconut-tree.webp",
      alt: "Sacred coconut palm tree silhouette against Hawaiian sunset"
    },
    eyebrow: {
      label: "About the",
      highlight: "Coconut Tree"
    },
    title: "The Tree of Life",
    description:
      "The coconut tree is more than just a food source—it's a sacred, life-sustaining symbol of adaptation, creativity, and unity with nature. For Native Hawaiians and Pacific Islanders, it truly earns the title \"Tree of Life\" because it sustains the body, spirit, and culture.",
    bordered: true
  },
  {
    id: "anahulu-valley",
    image: {
      src: "/non-profit/nonprofit_1.png",
      alt: "Lush green Anahulu Valley in Hawaii"
    },
    eyebrow: {
      label: "About the",
      highlight: "Anahulu Valley"
    },
    title: "Anahulu Valley",
    description:
      "Nestled in the heart of Hawaii, the Anahulu Valley Preservation Fund is dedicated to protecting the sacred lands, cultural treasures, and natural beauty of our cherished valley. Mana'o Pili partners with the Anahulu Valley Preservation Fund. Each month, a portion of our proceeds is directed toward restoring, safeguarding, and preserving the valley's rich history.",
    bordered: false
  }
];

export default function NonProfitContentBlock() {
  return (
    <section className="bg-[#141414]">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
          {nonProfitContent.map((item) => (
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
    </section>
  );
}
