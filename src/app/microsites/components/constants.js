import AccordionSection from "./accordion"
import ContactBanner from "./contact-banner"
import ContentBlock from "./content-block"
import { FeatureSection } from "./features"
import HeroSection from "./hero-1"
import ServicesCards from "./service-cards"
import TestimonialsSection from "./testimonials"


export const COMPONENTS = {
    // heroBanner: (props, index) =>
    //     <Hero
    //         key={index}
    //         title={props?.title}
    //         subtitle={props?.subtitle}
    //         ctaText={props?.ctaText}
    //         ctaLink={props?.ctaLink}
    //         image={props?.image}
    //         background={props?.background}
    //         className={props?.className}
    //         trustedCompanies={props?.trustedCompanies}
    //         stats={props?.stats}
    //         viewport={props?.viewport}
    //     />,
    heroSection: (props, index) =>
        <HeroSection
            key={index}
            title={props?.title}
            subtitle={props?.subtitle}
            viewport={props?.viewport}
        />,
    servicesCards: (props, index) =>
        <ServicesCards
            key={index}
            title={props?.title}
            subtitle={props?.subtitle}
            services={props?.services}
            viewport={props?.viewport}
        />,
    featureSection: (props, index) =>
        <FeatureSection
            key={index}
            title={props?.title}
            points={props?.points}
            viewport={props?.viewport}
        />,
    accordionSection: (props, index) =>
        <AccordionSection
            key={index}
            title={props?.title}
            subtitle={props?.subtitle}
            items={props?.items}
            viewport={props?.viewport}
        />,
    contentSection: (props, index) =>
        <ContentBlock
            key={index}
            title={props?.title}
            content={props?.content}
            centered={props?.centered}
            viewport={props?.viewport}

        />,
    testimonialsSection: (props, index) =>
        <TestimonialsSection
            key={index}
            title={props?.title}
            subtitle={props?.subtitle}
            testimonials={props?.testimonials}
            viewport={props?.viewport}
        />,
    contactBanner: (props, index) =>
        <ContactBanner
            key={index}
            title={props?.title}
            subtitle={props?.subtitle}
            features={props?.features}
            ctaData={props?.ctaData}
            viewport={props?.viewport}
        />
}