import Navbar from "../src/components/layout/Navbar";
import SalesDetailsCard from "../src/components/past-sales/SalesDetailsCard";

const PastSales = () => {
  const pageName = "PastSales";

  return (
    <div>
      <Navbar title={pageName} />
      <SalesDetailsCard />

      {/* <div className="w-screen h-screen flex justify-center items-center">
        <h1 className="text-5xl font-bold">MISO-Prototype | {pageName}</h1>
      </div> */}
    </div>
  );
};

export default PastSales;
