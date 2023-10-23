const Hero = (props) => {
  return (
    <div className="py-12 md:py-36 flex flex-col gap-4 bg-primary-color text-white text-center capitalize">
      {props?.headTitle && <h1 className="text-4xl">{props.headTitle}</h1>}
      <h1 className="text-3xl">{props.title}</h1>
      {props.children}
    </div>
  );
};

export default Hero;
