import Image from "next/image";

// icons
const file = "/assets/icons/file.svg";
const file2 = "/assets/icons/AuctionCard/file.svg";
const book = "/assets/icons/book.svg";
const book2 = "/assets/icons/AuctionCard/book.svg";
const copy = "/assets/icons/copy.svg";
const spoon = "/assets/icons/spoon.svg";
const globe = "/assets/icons/globe.svg";
const globe2 = "/assets/icons/AuctionCard/globe.svg";
const github = "/assets/icons/github.svg";
const github2 = "/assets/icons/AuctionCard/github.svg";
const twitter = "/assets/icons/twitter.svg";
const twitter2 = "/assets/icons/AuctionCard/twitter.svg";

const AuctionCard = ({ data }: any) => {
  const {
    id,
    image,
    subImage,
    title,
    rate,
    auction,
    time,
    amount,
    description,
    subDescription,
    auctionProgress,
    progress,
    raised,
    remainingTimeTitle,
    remainingTime,
    countdown,
    countdownValue,
    contract,
    contractAddress,
    token,
  } = data;
  return (
    <>
      <div
        style={{
          border: "var(--border)",
          background: "var(--card-background)",
          color: "var(--card-color)",
          boxShadow: "var(--box-shadow)",
        }}
        className="pb-5 m-1 rounded-lg"
      >
        <div>
          <Image
            className="w-full rounded-t-lg"
            src={image}
            alt="wrapped_ncg"
            height="300"
            width="650"
          />
        </div>
        <div style={{ marginTop: "-2rem", marginLeft: "1rem" }}>
          <Image
            className="-mt-6 ml-4"
            src={subImage}
            alt="wrapped_ncg"
            height={40}
            width={40}
          />
        </div>
        <section className="ml-4 mr-4 ">
          <div className="flex">
            <div className="w-9/12 text-left">
              <h1 className="text-xl font-semibold">{title}</h1>
            </div>
            <div className="text-right">
              <button
                className="py-1 px-3 text-xs rounded-full"
                style={{ background: "#F94FA2" }}
              >
                View Auction
              </button>
            </div>
          </div>
          <div className=" text-left">
            <small className="text-xs text-gray-500">{rate}</small>
          </div>
          <div className="flex">
            <div className="w-3/12 text-left flex test-xs">
              <small style={{ fontSize: "12px" }}>{auction}</small>
              <div className="ml-1.5">
                <Image src={spoon} alt="spoon" height={15} width={15} />
              </div>
            </div>
            <div className="w-3/6 text-center test-xs">
              <small style={{ fontSize: "12px" }}>{time}</small>
            </div>
            <div className="w-3/12 text-right test-xs">
              <small style={{ fontSize: "12px" }}>{amount}</small>
            </div>
          </div>
          <div className="mt-2.5 mb-3.5 text-gray-500 text-left">
            <small style={{ fontSize: "12px" }}>{description}</small>
          </div>
          {subDescription && (
            <div className="mt-2.5 mb-3.5 text-left">
              <small style={{ fontSize: "12px", color: "#f945a2" }}>
                {subDescription}
              </small>
            </div>
          )}
          <div className="flex">
            <Icons icons={[globe, file, twitter, github, book]} />
          </div>
          <div className="flex mt-2.5">
            <div className="w-2/5 text-left">
              <small className="text-gray-500">
                {progress ? "Auction Progress" : "Countdown"}
              </small>
              <br />
              {progress && (
                <div style={{ width: "70%" }}>
                  <div
                    className="bg-green-700 rounded-full"
                    style={{ width: "100%", height: "10px" }}
                  >
                    <div
                      className="rounded-full"
                      style={{
                        width: "40%",
                        background: "#29F079",
                        height: "10px",
                      }}
                    ></div>
                  </div>
                </div>
              )}
              <small style={{ fontSize: "12px" }}>{raised}</small>
            </div>
            <div className="w-1/4 text-center">
              <div className="text-left">
                <small className="text-gray-500">{remainingTimeTitle}</small>
                <br />
                <small style={{ fontSize: "12px" }}>{remainingTime}</small>
              </div>
            </div>
            <div className="w-2/6 text-right">
              <small className="text-gray-500">Token</small>
              <br />
              <div className="flex justify-end">
                <small style={{ fontSize: "12px" }}>{token}</small>
                <div className="ml-1.5">
                  <Image src={copy} alt="copy" height={12} width={12} />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

interface IconsProps {
  icons: any;
}

const Icons = ({ icons }: IconsProps) => {
  return (
    <>
      {icons?.map((icon: any) => (
        <div className="mr-1.5" key={icon}>
          <Image src={icon} alt={icon} height={12} width={12} />
        </div>
      ))}
    </>
  );
};

export default AuctionCard;
