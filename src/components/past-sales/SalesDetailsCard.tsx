import Image from "next/image";
import { LineChart, Line, ResponsiveContainer } from "recharts";

const spoon = "/assets/past-sales/spoon.svg";
const dot = "/assets/past-sales/dot.png";
const showPublic = "/assets/past-sales/public.svg";
const showPrivate = "/assets/past-sales/private.svg";

const chartData = [
  {
    name: "Page A",
    uv: 2000,
    pv: 2000,
    amt: 2000,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 3000,
    amt: 3000,
  },
  {
    name: "Page C",
    uv: 4000,
    pv: 4000,
    amt: 4000,
  },
  {
    name: "Page D",
    uv: 5000,
    pv: 5000,
    amt: 5000,
  },
  {
    name: "Page E",
    uv: 6000,
    pv: 6000,
    amt: 6000,
  },
  {
    name: "Page F",
    uv: 7000,
    pv: 7000,
    amt: 8000,
  },
  {
    name: "Page G",
    uv: 9000,
    pv: 9000,
    amt: 9000,
  },
];

const products = [
  {
    id: 1,
    title: "Sake (SAK3)",
    show: "Public",
    currency: "SUSHI",
    startingPriceValue: 88000,
    totalRaised: 245740,
    AuctionTokenPrice: 1228.7,
    reservePrice: 88.8,
  },
  {
    id: 2,
    title: "Manifold Finance (Fold)",
    show: "Private",
    currency: "SUSHI",
    startingPriceValue: 1380,
    totalRaised: 10839,
    AuctionTokenPrice: 541.95,
  },
  {
    id: 3,
    title: "Sunder Governance Token (Sunder)",
    show: "Public",
    currency: "USDC",
    startingPriceValue: 3,
    totalRaised: 2486300,
    AuctionTokenPrice: 0.497326,
    reservePrice: 0.2,
  },
  {
    id: 4,
    title: "I Bet You (IBY)",
    show: "Public",
    currency: "SUSHI",
    minRaiseValue: 1380,
    totalRaised: 10839,
    AuctionTokenPrice: 541.95,
  },
  {
    id: 5,
    title: "Volatility Protocol Token (VOL)",
    show: "Public",
    currency: "ETH",
    minRaiseValue: 88000,
    totalRaised: 245740,
    AuctionTokenPrice: 1228.7,
    reservePrice: 88.8,
  },
  {
    id: 6,
    title: "Attrace (ATTR)",
    show: "Private",
    currency: "SUSHI",
    minRaiseValue: 1380,
    totalRaised: 10839,
    AuctionTokenPrice: 541.95,
    // reservePrice: 0.2
  },
  {
    id: 7,
    title: "Non-Fungible Bible (PAGE)",
    show: "Public",
    currency: "SUSHI ",
    minRaiseValue: 1380,
    totalRaised: 10839,
    AuctionTokenPrice: 541.95,
  },
  {
    id: 8,
    title: "Rainbow Token (RNBW)",
    show: "Public",
    currency: "SUSHI",
    minRaiseValue: 88000,
    totalRaised: 245740,
    AuctionTokenPrice: 1228.7,
    reservePrice: 88.8,
  },
  {
    id: 9,
    title: "ITrust Governance Token (SITG)",
    show: "Private",
    currency: "SUSHI",
    minRaiseValue: 1380,
    totalRaised: 10839,
    AuctionTokenPrice: 541.95,
  },
];

const SalesDetailsCard = () => {
  return (
    <div className="mt-6 bg-black text-gray-500 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
      {products.map((product) => (
        <div
          key={product.id}
          className="p-4 font-bold group relative border border-gray-600 rounded-xl"
        >
          <div className="flex mb-8">
            <div className="w-2/4 text-left">
              <h3 className="mb-3 text-white text-xl font-bold">
                {product.title}
              </h3>
              <p className="float-left mr-2">{product.show}</p>
              {product.show === "Public" ? (
                <Image
                  className="mt-4"
                  src={showPublic}
                  alt="show"
                  width="15"
                  height="15"
                />
              ) : (
                <Image
                  className="mt-4"
                  src={showPrivate}
                  alt="show"
                  width={15}
                  height={15}
                />
              )}
            </div>
            <div className="w-2/4 text-right">
              <div className="flex float-right items-center mb-3">
                <h5 className="mr-2 text-white font-bold ">
                  Auction Ended
                </h5>
                <Image
                  className="float-right"
                  src={dot}
                  alt="dot"
                  width={13}
                  height={13}
                />
              </div>
              <div className="flex float-right">
                <p className="mr-2 float-left">Batch auction</p>
                <Image
                  className="float-right"
                  src={spoon}
                  alt="spoon"
                  width={20}
                  height={20}
                />
              </div>
            </div>
          </div>
          <div className="pl-3 pb-3 border-l border-b border-gray-600">
            <div className="flex">
              <div className="w-2/4 text-left">
                {product.startingPriceValue ? (
                  <>
                    <p>Starting Price</p>
                    <p style={{ color: "#524BB8" }}>
                      {product.startingPriceValue} {product.currency}
                    </p>
                  </>
                ) : (
                  <>
                    <p>Min Raise</p>
                    <p style={{ color: "#524BB8" }}>
                      {product.minRaiseValue} {product.currency}
                    </p>
                  </>
                )}
              </div>
              <div className="w-2/4 text-right">
                <p>Total Price</p>
                <p style={{ color: "#524BB8" }}>
                  {product.totalRaised} {product.currency}
                </p>
              </div>
            </div>
            <div>
              <Chart />
            </div>
            <div className="flex">
              <div className="w-2/4 text-left">
                <p>Auction Token Price</p>
                <p style={{ color: "#524BB8" }}>
                  {product.AuctionTokenPrice} {product.currency}
                </p>
              </div>
              <div className="w-2/4 text-right">
                {product.reservePrice && (
                  <>
                    <p>Reserve Price</p>
                    <p style={{ color: "#524BB8" }}>
                      {product.reservePrice} {product.currency}
                    </p>
                  </>
                )}
              </div>
            </div>
          </div>
          <div className="flex font-normal">
            <div className="w-2/4 text-left">
              <p>Start</p>
            </div>
            <div className="w-2/4 text-right">
              <small>End</small>
            </div>
          </div>
        </div>
      ))}
    </div>
    // </div>
  );
};

const Chart = () => {
  return (
    <ResponsiveContainer width="100%" aspect={3}>
      <LineChart width={300} height={100} data={chartData}>
        <Line type="monotone" dataKey="pv" stroke="#524BB8" strokeWidth={2} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default SalesDetailsCard;
