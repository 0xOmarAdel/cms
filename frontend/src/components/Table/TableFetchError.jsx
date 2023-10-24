import ErrorText from "../../UI/ErrorText";

const TableFetchError = ({ title }) => {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-3xl font-semibold tracking-wide">{title}</h1>
      <ErrorText text="An Error occurred" className="!text-xl" />
    </div>
  );
};

export default TableFetchError;
