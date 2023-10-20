import Loading from "../../UI/Loading";

const TableDataLoading = ({ title }) => {
  return (
    <div className="flex flex-col gap-4">
      <h1>{title}</h1>
      <Loading />
    </div>
  );
};

export default TableDataLoading;
