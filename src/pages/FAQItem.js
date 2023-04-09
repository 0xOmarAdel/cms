import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Alert from "../UI/Alert";
import Hero from "../UI/Hero";
import faq from "./FAQ-Questions";

import classes from "./FAQItem.module.css";
import Questions from "./Questions";

const FAQItem = () => {
  const [questions, setQuestions] = useState(faq);
  const [activeId, setActiveId] = useState(null);

  const toggleQuestion = (id) => {
    const newActiveId = id === activeId ? null : id;
    setActiveId(newActiveId);
  };

  const params = useParams();
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
            <div className="col-md-8 pe-5">
              <Questions
                questions={questions}
                activeId={activeId}
                toggleQuestion={toggleQuestion}
              />
            </div>
            <div className="col-4 ">
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
