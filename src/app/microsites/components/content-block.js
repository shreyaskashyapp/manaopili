"use client"

export default function ContentBlock({
  title = "Our Story",
  content = [
    "We started with a simple mission: to help businesses leverage technology to achieve their full potential. Over the years, we've grown from a small team of passionate developers to a full-service digital agency trusted by companies worldwide.",
    "Our approach combines technical excellence with strategic thinking. We don't just build solutions – we partner with our clients to understand their challenges, identify opportunities, and create innovative solutions that drive measurable results.",
    "Today, we're proud to work with clients across industries, from startups to Fortune 500 companies, helping them navigate the complexities of digital transformation and achieve their business objectives.",
  ],
  centered = true,
  viewport,
}) {
  const titleClass =
    viewport === "mobile"
      ? "text-3xl"
      : viewport === "tablet"
        ? "text-4xl"
        : "text-3xl md:text-4xl lg:text-5xl"

  const paragraphClass =
    viewport === "mobile"
      ? "text-sm"
      : viewport === "tablet"
        ? "text-base"
        : "text-sm md:text-base lg:text-lg"

  const sectionPadding =
    viewport === "mobile"
      ? "pb-10 px-2"
      : viewport === "tablet"
        ? "pb-10 px-2"
        : "pb-10 px-2 lg:pb-20 px-20"

  const containerPadding =
    viewport === "mobile"
      ? "px-4"
      : viewport === "tablet"
        ? "px-6"
        : "px-4 md:px-6 lg:px-10"

  const paragraphSpacing =
    viewport === "mobile"
      ? "space-y-4"
      : viewport === "tablet"
        ? "space-y-5"
        : "space-y-4 md:space-y-5 lg:space-y-6"

  return (
    <section className={`relative bg-[#141414] overflow-hidden ${sectionPadding}`}>
      <div className={`container relative z-10 mx-auto ${containerPadding}`}>
        <div
          className={`max-w-4xl space-y-8 animate-in fade-in slide-in-from-bottom-6 duration-1000 ${
            centered ? "mx-auto text-center" : ""
          }`}
        >
          <h2
            className={`${titleClass} font-medium text-white tracking-tight text-balance`}
          >
            {title}
          </h2>

          <div className={paragraphSpacing}>
            {content?.map?.((paragraph, index) => (
              <p
                key={index}
                className={`${paragraphClass} text-gray-400 leading-relaxed`}
                style={{ animationDelay: `${200 + index * 100}ms` }}
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
