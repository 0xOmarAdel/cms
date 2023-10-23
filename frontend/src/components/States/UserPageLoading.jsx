import Hero from "../../UI/Hero";
import Loading from "../../UI/Loading";

const UserPageLoading = ({ title }) => {
  return (
    <>
      <Hero title={title} />
      <section className="relative h-[60vh]">
        <Loading />
      </section>
    </>
  );
};

export default UserPageLoading;
