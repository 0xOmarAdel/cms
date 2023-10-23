import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Alert from "../UI/Alert";
import Hero from "../UI/Hero";
import Questions from "../components/FAQ/Questions";
import { faq } from "../data/faq";
import { FaArrowLeftLong } from "react-icons/fa6";

const FAQItem = () => {
  const questions = [
    {
      id: 1,
      title: "Pariatur excepteur ipsum laboris tempor?",
      answer:
        "Unicorn vinyl poutine brooklyn, next level direct trade iceland. Shaman copper mug church-key coloring book, whatever poutine normcore fixie cred kickstarter post-ironic street art.",
    },
    {
      id: 2,
      title: "Incididunt nisi commodo nostrud commodo?",
      answer:
        "Unicorn vinyl poutine brooklyn, next level direct trade iceland. Shaman copper mug church-key coloring book, whatever poutine normcore fixie cred kickstarter post-ironic street art.",
    },
    {
      id: 3,
      title: "Magna duis sunt sunt qui consectetur?",
      answer:
        "Unicorn vinyl poutine brooklyn, next level direct trade iceland. Shaman copper mug church-key coloring book, whatever poutine normcore fixie cred kickstarter post-ironic street art.",
    },
    {
      id: 4,
      title: "Fugiat ex eiusmod laboris pariatur ea?",
      answer:
        "Unicorn vinyl poutine brooklyn, next level direct trade iceland. Shaman copper mug church-key coloring book, whatever poutine normcore fixie cred kickstarter post-ironic street art.",
    },
  ];

  const [activeId, setActiveId] = useState(null);

  const toggleQuestion = (id) => {
    const newActiveId = id === activeId ? null : id;
    setActiveId(newActiveId);
  };

  const navigate = useNavigate();
  const { item } = useParams();

  useEffect(() => {
    if (!faq.includes(item)) {
      navigate("/faq");
    }
  }, [item, navigate]);

  return (
    <>
      <Hero title="Frequently Asked Questions" />
      <section className="flex flex-col gap-5">
        <Link
          to="/faq"
          className="w-fit flex flex-row items-center gap-2 text-3xl text-sky-500"
        >
          <FaArrowLeftLong />
          <h1 className="font-semibold tracking-wide capitalize">{item}</h1>
        </Link>
        <div className="flex flex-col lg:flex-row gap-10">
          <Questions
            questions={questions}
            activeId={activeId}
            toggleQuestion={toggleQuestion}
          />
          <div className="order-1 lg:order-2 flex flex-col gap-4">
            <Alert
              path="/create-complaint"
              icon={true}
              text="Couldn't find your answer? Create a new complaint from here."
            />
            <Alert
              path="/my-complaints"
              icon={true}
              text="View your previously created complaints from here."
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQItem;
