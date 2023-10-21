import Error from "../../UI/Error";

const TableFetchError = ({ title }) => {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-3xl font-semibold tracking-wide">{title}</h1>
      <Error />
    </div>
  );
};

export default TableFetchError;
