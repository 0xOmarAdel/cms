import Section from "./Section";

const Main = ({ children }) => {
  return (
    <Section className="relative pt-28 z-[1] min-h-screen mb-[50px] bg-sky-500 bg-no-repeat bg-scroll bg-center bg-cover flex flex-col lg:flex-row lg:items-center justify-center lg:justify-between gap-14 lg:gap-20">
      {children}
    </Section>
  );
};

export default Main;
