import Layout from "../src/components/layout";
import CommitAdd from "../src/components/auction-page/CommitAdd";
import AuctionCard from "../src/components/common/AuctionCard";
import CommitTable from "../src/components/auction-page/CommitTable";
import LiveGraph from "../src/components/auction-page/LiveGraph";

// data
import auctionCardsData from "../src/data/overviewAuctionCards.data";
import Header from "../src/components/common/Header";

const AuctionPage = () => {
  return (
    <Layout title="Auction Page">
      <Header />
      
      <div style={{ display: "flex" }}>
        <section>
          <div style={{ width: "530px" }}>
            <AuctionCard data={auctionCardsData[0]} />
          </div>
        </section>

        <section className="w-full flex flex-col items-center">
          <LiveGraph />
          <CommitAdd />
        </section>
      </div>

      <div className="py-4">
        <CommitTable />
      </div>
    </Layout>
  );
};

export default AuctionPage;
