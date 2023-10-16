import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Alert from "../UI/Alert";
import Hero from "../UI/Hero";

import classes from "./FAQItem.module.css";
import Questions from "./Questions";

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

  const params = useParams();

  useEffect(() => {
    const validItems = [
      "water",
      "electricity",
      "gas",
      "garbage",
      "traffic",
      "roads",
      "railways",
      "rain",
      "telephone",
      "internet",
    ];

    if (!validItems.includes(params.item)) {
      navigate("/faq");
    }
  }, [params.item, navigate]);

  return (
    <>
      <Hero title="Frequently Asked Questions" />
      <section className={`${classes["faq-item"]} faq-item py-5`}>
        <div className="container w-90vw">
          <div className="row">
            <div className="col-auto p-0">
              <Link to="/faq">
                <i
                  className={`fa-solid fa-arrow-left-long ${classes.arrow}`}
                ></i>
              </Link>
            </div>
            <div className="col mb-4">
              <h1>{params.item}</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-8 p-0 pe-md-5">
              <Questions
                questions={questions}
                activeId={activeId}
                toggleQuestion={toggleQuestion}
              />
            </div>
            <div className="col-4 d-none d-md-block">
              <Alert path="/create-complaint" icon>
                Couldn't find your answer? Create a new complaint from here.
              </Alert>
              <Alert path="/my-complaints" icon>
                View your previously created complaints from here.
              </Alert>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQItem;
