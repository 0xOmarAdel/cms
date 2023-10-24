const Intro = (props) => {
  return (
    <div className=" max-w-xl flex flex-col gap-4">
      <h1 className="text-5xl text-gray-200 font-bold">{props.title}</h1>
      <p className="text-2xl text-gray-300">{props.text}</p>
    </div>
  );
};

export default Intro;
