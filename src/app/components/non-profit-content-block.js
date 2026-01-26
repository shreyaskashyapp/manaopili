/**
 * Variant E: Magazine-Style with Full Images
 * Editorial layout with large image and staggered text blocks
 */
export default function NonProfitContentBlock() {
    return (
        <section className="bg-[#141414]">
            <div className="container mx-auto">
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                    {/* Left - Coconut Tree */}
                    <div className="lg:border-r border-border/30">
                        <div className="aspect-[16/9] overflow-hidden">
                            <img
                                src="/non-profit/coconut-tree.webp"
                                alt="Sacred coconut palm tree silhouette against Hawaiian sunset"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="py-4 px-2 md:px-12 lg:py-12">
                            <p className="text-gray-400 text-sm tracking-wide mb-6">
                                About the <span className="font-semibold text-[#DEFF00]">Coconut Tree</span>
                            </p>
                            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-white mb-8 leading-none">
                                The Tree of Life
                            </h2>
                            <p className="text-gray-400 leading-relaxed lg:text-lg text-md ">
                                The coconut tree is more than just a food source—it's a sacred, life-sustaining
                                symbol of adaptation, creativity, and unity with nature. For Native Hawaiians
                                and Pacific Islanders, it truly earns the title "Tree of Life" because it
                                sustains the body, spirit, and culture.
                            </p>
                        </div>
                    </div>

                    {/* Right - Preservation Fund */}
                    <div>
                        <div className="aspect-[16/9] overflow-hidden">
                            <img
                                src="/non-profit/nonprofit_1.png"
                                alt="Lush green Anahulu Valley in Hawaii"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="py-4 px-2 md:px-12 lg:py-12">
                            <p className="text-gray-400 text-sm tracking-wide mb-6">
                                About the <span className="font-semibold text-[#DEFF00]">Anahulu Valley</span>
                            </p>
                            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-white mb-8 leading-none">
                                Anahulu Valley
                            </h2>
                            <p className="text-gray-400 leading-relaxed text-lg">
                                Nestled in the heart of Hawaii, the Anahulu Valley Preservation Fund is dedicated
                                to protecting the sacred lands, cultural treasures, and natural beauty of our
                                cherished valley. Mana'o Pili partners with the Anahulu Valley Preservation Fund.
                                Each month, a portion of our proceeds is directed toward restoring, safeguarding,
                                and preserving the valley's rich history.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
