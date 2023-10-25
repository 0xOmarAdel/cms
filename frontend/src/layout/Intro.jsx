const Intro = (props) => {
  return (
    <div className="max-w-xl pt-20 lg:pt-0 flex flex-col gap-4">
      <h1 className="text-5xl text-gray-100 font-bold">{props.title}</h1>
      <p className="text-2xl text-gray-50">{props.text}</p>
    </div>
  );
};

export default Intro;
