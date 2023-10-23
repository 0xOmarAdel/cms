import Hero from "../../UI/Hero";
import Error from "../../UI/Error";

const UserPageError = ({ title }) => {
  return (
    <>
      <Hero title={title} />
      <section>
        <Error />
      </section>
    </>
  );
};

export default UserPageError;
