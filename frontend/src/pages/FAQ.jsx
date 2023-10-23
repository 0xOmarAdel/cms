import FAQCard from "../components/FAQ/FAQCard";
import { faqCards } from "../data/faqCards";
import Hero from "../UI/Hero";

const FAQ = () => {
  return (
    <>
      <Hero title="frequently asked questions" />
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 items-center">
        {faqCards.map((card, index) => (
          <FAQCard key={index} card={card} />
        ))}
      </section>
    </>
  );
};

export default FAQ;
