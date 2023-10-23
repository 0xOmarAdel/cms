import { Link } from "react-router-dom";

const FAQCard = ({ card }) => {
  return (
    <Link
      to={card.path}
      className="faq-card relative py-8 flex flex-col items-center gap-3 border-2 rounded-2xl cursor-pointer transition-all duration-500 ease-out hover:before:opacity-100 before:absolute before:content-[''] before:inset-0 before:bg-gradient-to-r before:from-blue-800 before:to-sky-400 before:rounded-xl before:opacity-0 before:transition-all before:duration-500 before:ease-linear"
      style={{
        background:
          "linear-gradient(white, white), linear-gradient(to right, #1e40af, #38bdf8)",
      }}
    >
      <card.icon className="gradient-text-color relative z-[10] text-3xl transition duration-500" />
      <p className="gradient-text-color relative z-[10] text-2xl font-semibold transition duration-500">
        {card.text}
      </p>
    </Link>
  );
};

export default FAQCard;
