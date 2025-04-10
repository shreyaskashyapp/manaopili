import HeroSection from "@/app/components/hero-section";
import NonProfit from "../non-profit/page";
import NonProfitAccordion from "../components/non-profit-accordion";

const data = {
    title: "FAQ",
}

const faqData = [
    {
      "title": "What is Mana’o Pili?",
      "text": "Mana’o Pili is a leading IT consulting firm that specializes in delivering and supporting development activities on SaaS-based solutions, with a strong focus on information security and cybersecurity. Our mission is to empower organizations to navigate the complexities of the digital landscape while safeguarding their critical assets."
    },
    {
      "title": "What is the origin of the name?",
      "text": "Mana’o Pili’s founders have deep roots in Hawai’i, embodying the spirit of the islands in our work. The name \"Mana’o Pili,\" which translates to \"Connecting Ideas,\" reflects our core belief that collaboration is the key to mutual success. We understand that achieving meaningful outcomes requires a thorough appreciation of an organization’s origins, values, and traditions. By integrating this understanding with digital solutions, we empower organizations to realize their digital transformation objectives effectively."
    },
    {
      "title": "What makes Mana’o Pili different?",
      "text": "At Mana’o Pili, we prioritize a collaborative approach, engaging with our clients to understand their unique challenges and crafting solutions that are both effective and sustainable. Our goal is to provide organizations with the confidence and tools they need to thrive in an increasingly complex business automation and cybersecurity landscape."
    },
    {
      "title": "What technologies does Mana’o Pili specialize in?",
      "text": "Mana’o Pili provides professional services in cutting-edge SaaS platforms such as zScaler and ServiceNow to provide comprehensive security and business automation solutions. Our expertise in these platforms enables us to design and implement robust systems that effectively prevent cyber attacks, facilitate rapid response to security incidents, and ensure timely remediation. Our approach emphasizes not only reactive measures but also proactive strategies to manage and mitigate known vulnerabilities, thereby enhancing overall security posture. In addition to our cybersecurity services, we are committed to supporting governance, risk, and compliance (GRC) initiatives. We work closely with organizations to align their security strategies with their risk management objectives, ensuring they remain compliant with relevant regulations and industry standards. Our team conducts thorough assessments and develops tailored frameworks that enable organizations to manage risks effectively while achieving their business goals."
    },
    {
      "title": "Does Mana’o Pili specialize in only Information Security and CyberSecurity?",
      "text": "We possess extensive capabilities across a wide range of functionalities within the ServiceNow and zScaler platforms. Our implementation approach emphasizes that information security and cybersecurity should not be treated as isolated solutions; rather, they should be integrated with existing data sources and processes. As a result, our capabilities extend beyond just information security and cybersecurity to encompass essential processes, including IT Service Management, Risk Management, Asset Management, Customer Service Management, IT Operations Management, and custom application development. This holistic approach ensures that our solutions are comprehensive and aligned with the overall objectives of the organization."
    },
    {
      "title": "What Services does Mana’o Pili provide?",
      "text": "We offer a comprehensive array of services on the zScaler and ServiceNow platforms, including individual resource staff augmentation, dedicated development pods, and full managed services for SaaS solutions."
    },
    {
      "title": "What type of resources does Mana’o Pili provide?",
      "text": "Mana’o Pili provides skilled professionals across a broad spectrum of roles, including System Administrators, Developers, Architects, Business Analysts, Scrum Masters, Site Reliability Engineers (SRE), and Project Managers. Our talent pool encompasses various experience levels, with the majority being mid to senior-level experts in their fields. Junior-level professionals are also available upon request."
    },
    {
      "title": "Where are Mana’o Pili resources located?",
      "text": "Mana’o Pili boasts a global presence and aims to assemble highly skilled resource teams that combine international and local expertise. Our priority is to provide clients with highly qualified and experienced resources at competitive pricing. If you have specific requirements regarding physical location, role, or skill level, please reach out to our account team. We are committed to identifying and assembling the optimal resources to meet your needs."
    },
    {
      "title": "Is Mana’o Pili a reseller of SaaS solutions?",
      "text": "Mana’o Pili does not engage in reselling, licensing, or receiving incentives from software manufacturers for software licenses. This independence allows us to offer an objective perspective on your organization’s true licensing needs. Our initial approach involves thoroughly understanding your organization before proposing digital transformation solutions that leverage the capabilities of existing solutions you already own. If your organization would benefit from additional licensing, we will facilitate a direct connection to the software manufacturer's account team for further assistance."
    }
  ]
  

export default function FAQ() {
    return(
        <div className="w-full " >
            <HeroSection data={data} bgColor={`from-[#455CFF] to-[#141414]`} />
            <NonProfitAccordion data1={faqData}/>
        </div>
    )
}