import Error from "../../UI/Error";

const TableFetchError = ({ title }) => {
  return (
    <div className="row">
      <div className="col-12">
        <h1 className="mb-4">{title}</h1>
        <Error />
      </div>
    </div>
  );
};

export default TableFetchError;
