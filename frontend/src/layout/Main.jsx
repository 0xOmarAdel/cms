import Section from "./Section";

const Main = ({ children }) => {
  return (
    <Section className="relative z-[1] min-h-screen mb-[50px] bg-[url(https://wallpapercave.com/wp/wp3077568.jpg)] bg-no-repeat bg-scroll bg-center bg-cover flex flex-col lg:flex-row lg:items-center justify-center lg:justify-between gap-14 lg:gap-20 after:absolute after:content-[''] after:inset-0 after:z-[-2] after:w-full after:h-full after:bg-sky-600 after:bg-opacity-95">
      {children}
    </Section>
  );
};

export default Main;
