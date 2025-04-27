export const metadata = {
    title: "Contact Us | Mana'o Pili, LLC",
    description: "Let’s connect. Fill out the contact form, or book time directly with our team using Online Booking. Click the link to schedule a meeting.",
    openGraph: {
      title: "Contact Us - Mana’o Pili",
      description: "Let’s connect with some ideas! Fill out the contact form or schedule a meeting directly with our team using Online Booking.",
      url: "https://manaopili.com/contact",
    },
  };

export default function ContactLayout({ children }) {
  return (
    <div>
      {children}
    </div>
  );
}