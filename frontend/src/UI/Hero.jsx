const Hero = (props) => {
  return (
    <div className="bg-primary-color py-12 md:py-36 text-white text-center">
      <h1 className="text-4xl">{props?.headTitle}</h1>
      <h1 className="text-3xl mt-4">{props.title}</h1>
      {props.children}
    </div>
  );
};

export default Hero;
