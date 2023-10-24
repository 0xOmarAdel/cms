const Section = ({ children, className }) => {
  return (
    <section
      className={`px-10 sm:px-16 md:px-28 lg:px-40 xl:px-60 py-12 ${
        className || ""
      }`}
    >
      {children}
    </section>
  );
};

export default Section;
