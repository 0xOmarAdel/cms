import "./ScrollableDiv.css";

const ScrollableDiv = (props) => {
  return (
    <div className={`h-[500px] overflow-auto pr-5 ${props.className || ""}`}>
      {props.children}
    </div>
  );
};

export default ScrollableDiv;
