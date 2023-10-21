import { useState, useEffect } from "react";
import { PiNavigationArrowFill } from "react-icons/pi";

const TextareaForm = ({
  text,
  setText,
  placeholder,
  submitFunction,
  conditionToSend,
}) => {
  const classes =
    "absolute bottom-4 right-6 text-lg sm:text-xl text-gray-600 opacity-0 cursor-pointer rotate-[135deg] transition duration-500";

  const [showSendIcon, setShowSendIcon] = useState(false);
  const [iconClasses, setIconClasses] = useState(classes);

  useEffect(() => {
    if (conditionToSend(text)) {
      setShowSendIcon(conditionToSend(text));
      setIconClasses(classes + " !text-sky-500 opacity-100");
    }
  }, [classes, conditionToSend]);

  const changeHandler = (e) => {
    setText(e.target.value);

    setShowSendIcon(true);
    setIconClasses(
      conditionToSend(e.target.value)
        ? classes +
            " !text-sky-500 opacity-100 hover:text-sky-600 hover:scale-110"
        : classes
    );
  };

  const focusHandler = () => {
    setIconClasses((prevState) => prevState + " !opacity-100");
  };

  const submitHandler = () => {
    if (!conditionToSend(text)) return;

    submitFunction();
    setIconClasses(classes);
  };

  const keyDownHandler = (e) => {
    if (!conditionToSend(text)) return;

    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      submitFunction();
    }
  };

  return (
    <form className="w-full">
      <div className="relative w-full">
        <textarea
          className="w-full min-h-[2.5rem] h-fit max-h-[8rem] resize-y pl-4 pr-7 py-1.5 border rounded-xl outline-none text-sm sm:text-base dark:bg-primarylessDarker dark:text-textLighter dark:border-none"
          placeholder={placeholder}
          value={text}
          onChange={changeHandler}
          onFocus={focusHandler}
          onKeyDown={keyDownHandler}
        />
        <PiNavigationArrowFill
          className={showSendIcon ? iconClasses + " !opacity-100" : iconClasses}
          onClick={submitHandler}
        />
      </div>
    </form>
  );
};

export default TextareaForm;
