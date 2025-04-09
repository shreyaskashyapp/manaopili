import HeroSection from "../components/hero-section";
import StaticContent from "../components/static-content";

const privacyPolicy = [
    {
        title: "Introduction",
        content: {
            text: "Effective Date: October 15th, 2024\n\nMana'o Pili (\"we,\" \"us,\" or \"our\") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website http://manaopili.com (the \"Site\"). By using our Site, you consent to the practices described in this policy.",

        }
    },
    {
        title: "Information We Collect",
        content: {
            text: "We may collect personal information that you provide directly to us, such as:",
            bulletPoints: [
                "Contact Information: Name, email address, phone number, etc.",
                "Communication Data: Any messages you send us, including feedback and support inquiries."
            ]
        }
    },
    {
        title: "Information We Collect (Continued)",
        content: {
            text: "We may also automatically collect certain information about your device and usage, such as:",
            bulletPoints: [
                "IP Address",
                "Browser Type",
                "Operating System",
                "Pages Viewed",
                "Time Spent on Pages",
                "Referring URL"
            ]
        }
    },
    {
        title: "How We Use Your Information",
        content: {
            text: "We may use the information we collect for various purposes, including:",
            bulletPoints: [
                "To provide, operate, and maintain our Site.",
                "To improve, personalize, and expand our Site.",
                "To process your transactions and send you related information.",
                "To communicate with you, including responding to your comments and questions.",
                "To send you marketing and promotional communications, if you opt in.",
                "To detect, prevent, and address technical issues."
            ]
        }
    },
    {
        title: "Disclosure of Your Information",
        content: {
            text: "We may share your information in the following situations:",
            bulletPoints: [
                "With Service Providers: We may share your information with third-party vendors and service providers to perform functions on our behalf (e.g., payment processing, email delivery).",
                "For Legal Reasons: We may disclose your information if required to do so by law or in response to valid requests by public authorities.",
                "Business Transfers: If we are involved in a merger, acquisition, or asset sale, your information may be transferred as part of that transaction."
            ]
        }
    },
    {
        title: "Your Rights",
        content: {
            text: "You have certain rights regarding your personal information, including:",
            bulletPoints: [
                "The right to access, correct, or delete your personal data.",
                "The right to object to or restrict the processing of your personal data.",
                "The right to withdraw your consent at any time, where we rely on your consent to process your information."
            ]
        }
    },
    {
        title: "Your Rights (Continued)",
        content: {
            text: "To exercise these rights, please contact us using the information below.",

        }
    },
    {
        title: "Security of Your Information",
        content: {
            text: "We take reasonable measures to protect your information from unauthorized access, use, or disclosure. However, no method of transmission over the internet or method of electronic storage is 100% secure. Therefore, while we strive to protect your personal information, we cannot guarantee its absolute security.",

        }
    },
    {
        title: "Changes to This Privacy Policy",
        content: {
            text: "We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. We encourage you to review this policy periodically for any updates.",

        }
    },
    {
        title: "Contact Us",
        content: {
            text: "If you have any questions or concerns about this Privacy Policy, please contact us at:",
            bulletPoints: [
                "By email: info@manaopili.com",
                "By visiting this page on our website: http://manaopili.com"
            ]
        }
    }
];

export default function Privacy() {
    return (
        <div>
            <HeroSection data={{ title: "Privacy Policy" }} bgColor={`from-[#141414] via-[#455CFF] to-[#141414]`}  />
            <StaticContent data={privacyPolicy} />
        </div>
    )
}