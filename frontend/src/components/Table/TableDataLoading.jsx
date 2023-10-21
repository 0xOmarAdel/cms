import Loading from "../../UI/Loading";

const TableDataLoading = ({ title }) => {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-3xl font-semibold tracking-wide">{title}</h1>
      <Loading />
    </div>
  );
};

export default TableDataLoading;
