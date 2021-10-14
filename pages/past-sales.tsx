import SalesDetailsCard from "../src/components/past-sales/SalesDetailsCard";
import Layout from "../src/components/layout";

const PastSales = () => {
  return (
    <Layout title="Past Sales">
      <div style={{ margin: "1rem" }}>
        <SalesDetailsCard />
      </div>
    </Layout>
  );
};

export default PastSales;
