import SurveyButton from "./surveyButton";

export default function ContactBanner() {
  const content = {
    title: "Ready to Transform Your ServiceNow Journey?",
    subtitle:
      "Let our experts guide you through every step of your ServiceNow transformation. From discovery to ongoing innovation, we're here to help you succeed.",
    features: [
      "Easy consultation",
      "Tailored to your needs",
      "Expert guidance",
    ],
  };

  return (
    <section className="bg-gradient-to-r from-[#141414] via-zinc-900 to-[#141414] py-8 md:py-16">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-normal text-[#e2e2e2] mb-4">
          {content.title}
        </h2>
        <p className="text-muted-foreground md:text-lg mb-8 max-w-2xl mx-auto">
          {content.subtitle}
        </p>
        <div className="flex flex-row gap-4 justify-center items-center">
          <SurveyButton title="Take Our Survey" url="/survey-list" />
          <SurveyButton
            title="Book Consultation"
            url="https://outlook.office.com/bookwithme/user/2d20486392d94cf9b823bc508a230121@manaopili.com?anonymous&ep=plink"
          />
        </div>
        {/* Features */}
        <div className="mt-8 flex flex-col sm:flex-row gap-6 justify-center items-center text-gray-400 text-sm">
          {content.features.map((item, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#deff00] rounded-full"></div>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
