import FAQCard from "../components/FAQCard";
import Hero from "../UI/Hero";
import {faqCards} from '../data/faqCards';

const FAQ = () => {
  return (
    <>
      <Hero title="frequently asked questions" />
      <section className="py-5">
        <div className="container">
          <div className="row justify-content-center">
            {faqCards.map((card, index) => (
              <FAQCard key={index} card={card} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQ;
