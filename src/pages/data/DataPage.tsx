import DataTable from "../../feature/dataTable/ui";
import Header from "../../feature/header/ui";

const DataPage = () => {
  return (
    <>
      <Header />
      <div className='my-[50px] mx-5'>
      <DataTable/>
      </div>
      
    </>
  );
};

export default DataPage;
