import Image from "next/image";
import { LineChart, Line, ResponsiveContainer } from "recharts";
import { ChartProps } from "../../interfaces";

// data
import { salesDetailsCard } from "../../data";

// images
const spoon = "/assets/past-sales/spoon.svg";
const dot = "/assets/past-sales/dot.png";
const showPublic = "/assets/past-sales/public.svg";
const showPrivate = "/assets/past-sales/private.svg";

const SalesDetailsCard = () => {
  const { chartData, products } = salesDetailsCard;

  return (
    <div className="mt-6 text-gray-500 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:gap-x-4">
      {products.map((product) => (
        <div
          key={product.id}
          // style={{ background: "#121319" }}
          style={{ background: "var(--card-background)" }}
          className="p-4 font-bold group relative border border-gray-600 rounded-xl"
        >
          <div className="flex mb-8">
            <div className="w-2/4 text-left">
              <h3
                className="mb-3 font-bold"
                style={{ color: "var(--card-color)", fontSize: "18px" }}
              >
                {product.title}
              </h3>
              <p className="float-left mr-2" style={{ fontSize: "14px" }}>
                {product.show}
              </p>
              {product.show === "Public" ? (
                <Image
                  className="mt-4"
                  src={showPublic}
                  alt="show"
                  width={15}
                  height={15}
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
            <div className="w-2/4 text-right flex flex-col items-end">
              <div className="flex float-right items-center mb-3">
                <h5
                  className="mr-2 font-bold"
                  style={{ color: "var(--card-color)", fontSize: "14px" }}
                >
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
                <p className="mr-2 float-left" style={{ fontSize: "14px" }}>
                  Batch auction
                </p>
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
              <div className="w-2/4 text-left" style={{ fontSize: "14px" }}>
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
              <div className="w-2/4 text-right" style={{ fontSize: "14px" }}>
                <p>Total Price</p>
                <p style={{ color: "#524BB8" }}>
                  {product.totalRaised} {product.currency}
                </p>
              </div>
            </div>
            <div>
              <Chart chartData={chartData} />
            </div>
            <div className="flex">
              <div className="w-2/4 text-left" style={{ fontSize: "14px" }}>
                <p>Auction Token Price</p>
                <p style={{ color: "#524BB8" }}>
                  {product.AuctionTokenPrice} {product.currency}
                </p>
              </div>
              <div className="w-2/4 text-right" style={{ fontSize: "14px" }}>
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
          <div className="flex font-normal" style={{ fontSize: "12px" }}>
            <div className="w-2/4 text-left">
              <p>Start</p>
            </div>
            <div className="w-2/4 text-right">
              <p>End</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const Chart = ({ chartData }: ChartProps) => {
  return (
    <ResponsiveContainer width="100%" aspect={3}>
      <LineChart width={300} height={100} data={chartData}>
        <Line type="monotone" dataKey="pv" stroke="#524BB8" strokeWidth={2} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default SalesDetailsCard;
