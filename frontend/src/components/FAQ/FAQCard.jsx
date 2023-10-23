import { Link } from "react-router-dom";

const FAQCard = ({ card }) => {
  return (
    <Link
      to={card.path}
      className="faq-card relative py-8 flex flex-col items-center gap-3 border-2 rounded-2xl cursor-pointer transition-all duration-300 ease-out hover:bg-sky-500 group"
    >
      <card.icon className="group-hover:text-white relative z-[10] text-3xl text-gray-600 transition duration-300" />
      <p className="group-hover:text-white relative z-[10] text-2xl text-gray-600 font-semibold transition duration-300">
        {card.text}
      </p>
    </Link>
  );
};

export default FAQCard;
