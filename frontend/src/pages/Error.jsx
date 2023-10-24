import Navbar from "../layout/Navbar";
import Hero from "../UI/Hero";
import Footer from "../layout/Footer";

const ErrorPage = () => {
  return (
    <>
      <Navbar />
      <Hero title="an error occurred!">
        <p>This page doesn&apos;t exist!</p>
      </Hero>
      <Footer />
    </>
  );
};

export default ErrorPage;
