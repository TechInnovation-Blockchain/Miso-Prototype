import { useEffect, useState } from "react";
import AuctionCard from "../src/components/common/AuctionCard";
import Layout from "../src/components/layout";
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
    <>
      <Layout />
      {/* <Sidebar> */}
      <div>
        {auctionCardsData?.map((item: any) => (
          <div key={item.id} style={{ maxWidth: "650px" }}>
            <AuctionCard data={item} />
          </div>
        ))}
      </div>
      {/* </Sidebar> */}
    </>
  );
};

export default Overview;
