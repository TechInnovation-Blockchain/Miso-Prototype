import Layout from "../src/components/layout";
import CommitAdd from "../src/components/auction-page/CommitAdd";
import AuctionCard from "../src/components/common/AuctionCard";
import CommitTable from "../src/components/auction-page/CommitTable";

// data
import auctionCardsData from "../src/data/overviewAuctionCards.data";

const AuctionPage = () => {
  return (
    <Layout>
      <div style={{ display: "flex" }}>
        <section>
          <div style={{ width: "530px" }}>
            <AuctionCard data={auctionCardsData[0]} />
          </div>
        </section>

        <section className="w-full flex flex-col items-center">
          <CommitAdd />
        </section>
      </div>

      <CommitTable />
    </Layout>
  );
};

export default AuctionPage;
