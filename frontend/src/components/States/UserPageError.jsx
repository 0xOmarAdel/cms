import Hero from "../../UI/Hero";
import ErrorText from "../../UI/ErrorText";
import Section from "../../layout/Section";

const UserPageError = ({ title }) => {
  return (
    <>
      <Hero title={title} />
      <Section>
        <ErrorText text="An Error occurred" className="!text-xl text-center" />
      </Section>
    </>
  );
};

export default UserPageError;
