import React from "react";
import FAQCard from "../components/FAQCard";
import Hero from "../UI/Hero";

const FAQ = () => {
  const cards = [
    { icon: "fa-faucet-drip", text: "Water", path: "water" },
    { icon: "fa-plug", text: "Electricity", path: "electricity" },
    { icon: "fa-gas-pump", text: "Gas", path: "gas" },
    { icon: "fa-trash-can", text: "Garbage", path: "garbage" },
    { icon: "fa-traffic-light", text: "Traffic", path: "traffic" },
    { icon: "fa-road", text: "Roads", path: "roads" },
    { icon: "fa-train", text: "Railways", path: "railways" },
    { icon: "fa-cloud-rain", text: "Rain", path: "rain" },
    { icon: "fa-phone", text: "Telephone", path: "telephone" },
    { icon: "fa-wifi", text: "Internet", path: "internet" },
  ];

  return (
    <>
      <Hero title="frequently asked questions" />
      <section className="py-5">
        <div className="container">
          <div className="row justify-content-center">
            {cards.map((card, index) => (
              <FAQCard key={index} card={card} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQ;
