const Hero = (props) => {
  return (
    <div className="pb-12 pt-24 px-2  md:py-36 flex flex-col gap-4 bg-sky-500 text-white text-center capitalize">
      {props?.headTitle && <h1 className="text-4xl">{props.headTitle}</h1>}
      <h1 className="text-3xl">{props.title}</h1>
      {props.children}
    </div>
  );
};

export default Hero;
