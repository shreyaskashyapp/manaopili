import { Card } from "@/components/ui/card";
import SurveyButton from "./surveyButton";
import { CheckCircle } from "lucide-react";

export default function ContactBanner({ color="[#deff00]" }) {
  const content = {
    title: <>
      Ready to Transform Your <span className={`text-${color}`}>ServiceNow</span> Journey?
    </>,
    subtitle:
      "Let our experts guide you through every step of your ServiceNow transformation. From discovery to ongoing innovation, we're here to help you succeed.",
    features: [
      "Easy consultation process",
      "Tailored to your specific needs",
      "Expert guidance throughout",
    ],
  };

  return (

    <section className="w-full pb-10">
      <div className="max-w-6xl mx-auto">
        <Card className="bg-gradient-to-r from-zinc-900 via-[#141414] to-zinc-900 border border-zinc-800 shadow-md shadow-zinc-900 p-8 md:p-12 relative overflow-hidden">
          <div className="relative z-10 grid lg:grid-cols-3 gap-8 items-center">

            {/* Left Content */}
            <div className="lg:col-span-2 space-y-6">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-5xl font-semibold text-[#ffffff] leading-tight">
                  {content.title}
                </h2>
                <p className="md:text-lg text-gray-300">
                  {content.subtitle}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <SurveyButton
                  title="Book Consultation"
                  url={process.env.NEXT_PUBLIC_OUTLOOK_BOOKING_LINK}
                />
              </div>
            </div>

            {/* Right Content */}
            <div className="space-y-6">
              <div className="flex flex-col gap-4 text-center">
                <div className="space-y-4">
                  {content?.features?.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className={`h-5 w-5 text-${color} flex-shrink-0`} />
                      <span className="text-gray-300 md:text-base text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
