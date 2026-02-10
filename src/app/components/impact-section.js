const ImpactSection = ({ data }) => {
    return (
        <section className="">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                    {/* Left Column */}
                    <div className="space-y-8">
                        <h2 className="text-5xl md:text-6xl lg:text-7xl tracking-wider uppercase text-white">
                            What <span className="text-[#DEFF00]"> Supporting</span><br />Makes Possible
                        </h2>
                        <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-lg">
                            Every contribution creates tangible, measurable impact. Your
                            support flows directly toward protecting Hawaii{`'`}s sacred lands
                            and ecosystems.
                        </p>
                    </div>

                    {/* Right Column - Impact Items */}
                    <div className="space-y-10 lg:space-y-12">
                        {data.map((item, index) => {
                            const Icon = item.icon;
                            return (
                                <div key={index} className="flex items-center gap-6 md:gap-8">
                                    <Icon className="w-10 h-10 text-[#DEFF00]" />
                                    <div className="">
                                        <h3 className="text-xl md:text-2xl lg:text-3xl text-white uppercase tracking-wide leading-tight">
                                            {item.title}
                                        </h3>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ImpactSection;
