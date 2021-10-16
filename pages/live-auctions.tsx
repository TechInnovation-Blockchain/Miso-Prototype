import Layout from "../src/components/layout";
import AuctionCard from "../src/components/common/AuctionCard";

// data
import auctionCardsData from "../src/data/overviewAuctionCards.data";

const LiveAuctions = () => {
  return (
    <Layout title="Live Auctions">
      <section
        className="flex"
        style={{ minHeight: "91vh" }}
      >
        {auctionCardsData?.map((data, index) => (
          <div style={{ width: "530px" }} key={index}>
            <AuctionCard data={data} />
          </div>
        ))}
      </section>
    </Layout>
  );
};

export default LiveAuctions;
