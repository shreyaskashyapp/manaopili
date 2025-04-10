import HeroSection from "../components/hero-section";
import StaticContent from "../components/static-content";

const terms = [
    {
      title: "Introduction",
      content: {
        text: "Last Updated: November 18th, 2024\n\nWelcome to Mana'o Pili (the \"Site\"). By accessing or using our Site, you agree to comply with and be bound by these Terms of Service (\"Terms\"). If you do not agree to these Terms, please do not use our Site.",
        
      }
    },
    {
      title: "Acceptance of Terms",
      content: {
        text: "By accessing or using our Site, you confirm that you accept these Terms and that you agree to comply with them. If you do not agree, you must not use our Site.",
        
      }
    },
    {
      title: "Changes to Terms",
      content: {
        text: "We may revise these Terms from time to time. The most current version will always be posted on this page. Your continued use of the Site after any changes means you accept the new Terms.",
        
      }
    },
    {
      title: "Use of the Site",
      content: {
        text: "You agree to use the Site only for lawful purposes and in a manner that does not infringe on the rights of, restrict, or inhibit anyone else's use of the Site.",
        
      }
    },
    {
      title: "Account Registration",
      content: {
        text: "If you create an account on our Site, you agree to provide accurate, current, and complete information. You are responsible for maintaining the confidentiality of your account and password.",
        
      }
    },
    {
      title: "User Content",
      content: {
        text: "You retain ownership of any content you submit, post, or display on or through the Site (\"User Content\"). By submitting User Content, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, publish, and distribute such content.",
        
      }
    },
    {
      title: "Consent to Receive Marketing Communications",
      content: {
        text: "By providing your contact information and submitting this form, you expressly consent to receive marketing communications, including emails, promotional offers, newsletters, and other marketing-related materials from Mana'o Pili. You understand that these communications may be sent via email, SMS, or other electronic means, and may include information related to our products, services, updates, and events.\n\nYou may withdraw your consent at any time by clicking the \"unsubscribe\" link in any marketing email you receive or by contacting us directly at info@manaopili.com. Your consent to receive marketing communications is not a condition of purchasing any products or services from Mana'o Pili.",
        
      }
    },
    {
      title: "Prohibited Conduct",
      content: {
        text: "You agree not to:",
        bulletPoints: [
          "Use the Site for any illegal or unauthorized purpose",
          "Transmit any viruses or harmful code.",
          "Harass, threaten, or intimidate any other users."
        ]
      }
    },
    {
      title: "Intellectual Property",
      content: {
        text: "All content on the Site, including text, graphics, logos, and software, is the property of Mana'o Pili or its licensors. You may not reproduce, distribute, or create derivative works without our permission.",
        
      }
    },
    {
      title: "Disclaimers",
      content: {
        text: "The Site is provided on an \"as-is\" and \"as-available\" basis. We do not warrant that the Site will be uninterrupted or error-free. To the fullest extent permitted by law, we disclaim all warranties, express or implied.",
        
      }
    },
    {
      title: "Limitation of Liability",
      content: {
        text: "In no event shall Mana'o Pili be liable for any direct, indirect, incidental, special, consequential, or punitive damages arising out of or in connection with your use of the Site.",
        
      }
    },
    {
      title: "Limitation of Liability for Recommendations",
      content: {
        text: "Mana'o Pili makes no representations or warranties regarding the accuracy, completeness, or suitability of any recommendations provided. Any advice, suggestion, or recommendation given by Mana'o Pili, whether verbal or written, is for informational purposes only and does not constitute professional advice. Mana'o Pili shall not be held liable for any direct, indirect, incidental, consequential, or punitive damages arising out of the use or reliance on any such recommendation.",
        
      }
    },
    {
      title: "Safe Harbor Protection",
      content: {
        text: "The Parties acknowledge and agree that, in compliance with applicable law, the provisions of this agreement or policy shall not subject any party to liability or penalties for actions or omissions undertaken in good faith reliance on the terms herein, provided such actions or omissions are within the scope of the law and the reasonable interpretation of the relevant statutory or regulatory provisions.\n\nTo qualify for Safe Harbor protection, the Party must demonstrate that:",
        bulletPoints: [
          "The actions or omissions were taken in good faith and without knowledge of any material violation of applicable law.",
          "The Party followed any established procedures or guidelines designed to ensure compliance with the law.",
          "The Party promptly corrected any unintentional errors or violations upon discovery."
        ]
      }
    },
    {
      title: "Limitations and Exclusions",
      content: {
        text: "This Safe Harbor provision shall not apply if the Party acted with willful misconduct, gross negligence, or engaged in fraudulent conduct. The protection under this Safe Harbor clause shall not extend to actions or omissions that result in harm to third parties or in circumstances where the law expressly prohibits such protections.",
        
      }
    },
    {
      title: "Indemnification",
      content: {
        text: "You agree to indemnify and hold harmless Mana'o Pili, its affiliates, and their respective officers, directors, and employees from any claims, losses, liabilities, damages, costs, or expenses arising out of your use of the Site.",
        
      }
    },
    {
      title: "Governing Law",
      content: {
        text: "These Terms shall be governed by and construed in accordance with the laws of Hawaii, without regard to its conflict of law principles.",
        
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

export default function Terms() {
    return (
        <div>
            <HeroSection data={{ title: "Terms of Services" }} bgColor={`from-[#455CFF] to-[#141414]`}  />
            <StaticContent data={terms} />
        </div>
    )
}