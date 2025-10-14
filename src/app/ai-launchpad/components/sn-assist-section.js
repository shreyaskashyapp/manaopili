import ServiceNowAssistDiagram from "./sn-assist-diagram"

export default function SnAssistSection() {

    const data = {
        title: "Deliver the right response for every Al-powered request.",
        description: "Use ServiceNow Al Starter to power Al Launchpad with smart workflows, role-based routing, and automated escalations-getting each request to the right team fast. Built-in visibility and tracking ensure issues are resolved with speed and accountability."
    }
    return (
        <section className="relative md:py-16 py-10 ">
            <div className="flex flex-col lg:flex-row items-center gap-4">
                <div className="lg:w-1/3 flex flex-col gap-4">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 lg:mb-0 text-white">
                        {data.title}
                    </h2>
                    <p className="text-md md:text-lg text-gray-400 leading-relaxed">
                        {data.description}
                    </p>
                </div>
                <div className="lg:w-2/3 ">
                    <ServiceNowAssistDiagram />
                </div>
            </div>
        </section>
    )
}