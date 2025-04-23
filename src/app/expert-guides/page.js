import BlogAndVideosPage from "../components/blogs";

export const metadata = {
    title: "Expert Guides | Mana'o Pili, LLC",
    description: "Access expert guides on implementing ServiceNow solutions to drive digital transformation.",
    openGraph: {
      title: "Expert Guides - Mana'o Pili, LLC",
      description: "Access expert guides on implementing ServiceNow solutions to drive digital transformation.",
      url: "https://manaopili.com/expert-guides",
    },
  };

export default function ExpertGuides() {
    return <BlogAndVideosPage/>
}