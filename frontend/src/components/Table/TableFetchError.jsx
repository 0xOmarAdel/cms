import Error from "../../UI/Error";

const TableFetchError = ({ title }) => {
  return (
    <div className="flex flex-col gap-4">
      <h1>{title}</h1>
      <Error />
    </div>
  );
};

export default TableFetchError;
