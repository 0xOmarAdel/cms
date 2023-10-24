import MainNavigation from "../components/Navbar/MainNavigation";
import Footer from "../layout/Footer";
import Hero from "../UI/Hero";

const ErrorPage = () => {
  return (
    <>
      <MainNavigation />
      <Hero title="an error occurred!">
        <p>This page doesn&apos;t exist!</p>
      </Hero>
      <Footer />
    </>
  );
};

export default ErrorPage;
