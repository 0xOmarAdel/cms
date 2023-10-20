import Loading from "../../UI/Loading";

const TableDataLoading = ({ title }) => {
  return (
    <div className="row">
      <div className="col-12">
        <h1 className="mb-4">{title}</h1>
        <Loading />
      </div>
    </div>
  );
};

export default TableDataLoading;
