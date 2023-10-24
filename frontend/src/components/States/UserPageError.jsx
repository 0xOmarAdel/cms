import Hero from "../../UI/Hero";
import ErrorText from "../../UI/ErrorText";

const UserPageError = ({ title }) => {
  return (
    <>
      <Hero title={title} />
      <section>
        <ErrorText text="An Error occurred" className="!text-xl text-center" />
      </section>
    </>
  );
};

export default UserPageError;
