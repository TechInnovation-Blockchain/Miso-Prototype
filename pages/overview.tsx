// import { useEffect, useState } from "react";
import AuctionCard from "../src/components/common/AuctionCard";
import Layout from "../src/components/layout";
import MarketplaceBtn from "../src/components/overview/MarketplaceBtn";
import auctionCardsData from "../src/data/overviewAuctionCards.data";
// import Sidebar from "../src/components/layout/Sidebar";

const Overview = () => {
  // const [overviewData, setOverviewData] = useState<any>();

  // useEffect(() => {
  //   fetch(`/api/overview-data`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setOverviewData(data);
  //     });
  // }, []);

  // console.log(overviewData)

  return (
    <Layout>
      <div style={{ display: "flex" }}>
        <section>
          {auctionCardsData?.map((item: any) => (
            <div key={item.id} style={{ width: "550px" }}>
              <AuctionCard data={item} />
            </div>
          ))}
        </section>

        <section className="w-full flex flex-col items-end mr-2">
          <MarketplaceBtn />
        </section>
      </div>
    </Layout>
  );
};

export default Overview;
