import HeroSection from "../components/hero-section";
import StaticContent from "../components/static-content";

const cookiePolicy = [
    {
      title: "Introduction",
      content: {
        text: "Effective Date: October 15th, 2024\n\nThis Cookie Policy explains how Mana'o Pili (\"we,\" \"us,\" or \"our\") uses cookies and similar tracking technologies on our website http://manaopili.com (the \"Site\"). By continuing to use our Site, you consent to the use of cookies in accordance with this policy.",
        
      }
    },
    {
      title: "What Are Cookies?",
      content: {
        text: "Cookies are small text files that are stored on your device (computer, smartphone, or tablet) when you visit a website. They help the website recognize your device and remember information about your visit.",
        
      }
    },
    {
      title: "Types of Cookies We Use",
      content: {
        text: "",
        bulletPoints: [
          `Essential Cookies:These cookies are necessary for the website to function and cannot be turned off. They are usually set in response to actions you take, such as filling out forms or logging in.`,
          "Performance Cookies:\n These cookies collect information about how visitors use our Site, such as which pages are most visited. This helps us improve the performance and functionality of our Site.",
          "Functional Cookies:\n These cookies allow our Site to remember choices you make (such as your username or language preference) and provide enhanced, more personalized features.",
          "Advertising Cookies:\n These cookies may be set through our Site by our advertising partners. They can be used to build a profile of your interests and show you relevant ads on other sites."
        ]
      }
    },
    {
      title: "How to Manage Cookies",
      content: {
        text: "You can manage your cookie preferences through your browser settings. Most browsers allow you to refuse cookies or alert you when cookies are being sent. However, if you choose to refuse cookies, you may not be able to use the full functionality of our Site.",
        
      }
    },
    {
      title: "Third-Party Cookies",
      content: {
        text: "We may also use third-party cookies from our service providers and partners. These cookies are governed by the privacy policies of the respective third parties.",
        
      }
    },
    {
      title: "Changes to This Cookie Policy",
      content: {
        text: "We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We encourage you to review this policy periodically for the latest information on our cookie practices.",
        
      }
    },
    {
      title: "Contact Us",
      content: {
        text: "If you have any questions or concerns about this Cookie Policy, please contact us at:",
        bulletPoints: [
          "By email: info@manaopili.com",
          "By visiting this page on our website: http://manaopili.com"
        ]
      }
    }
  ];

export default function Cookies() {
    return (
        <div>
            <HeroSection data={{ title: "Cookies" }} bgColor={`from-[#455CFF] to-[#141414]`}/>
            <StaticContent data={cookiePolicy} />
        </div>
    )
}