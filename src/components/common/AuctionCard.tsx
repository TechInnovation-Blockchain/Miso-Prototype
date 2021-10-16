import Image from "next/image";
import {
  GlobeIcon,
  FileIcon,
  TwitterIcon,
  GithubIcon,
  BookIcon,
} from "../../icons";

// icons
const copy = "/assets/icons/copy.svg";
const spoon = "/assets/icons/spoon.svg";

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
    // countdown,
    countdownValue,
    contract,
    contractAddress,
    token,
    active,
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
            height={336}
            width={536}
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
          <div className="flex justify-between">
            <h1 className="text-xl font-semibold">
              {title}
              {active ? (
                <Image
                  src="/assets/icons/green-dot.svg"
                  alt="green-dot"
                  height={20}
                  width={20}
                />
              ) : (
                <Image
                  src="/assets/icons/brown-dot.svg"
                  alt="brown-dot"
                  height={20}
                  width={20}
                />
              )}
            </h1>
            <button
              className="py-1.5 px-4 text-xs rounded-full"
              style={{
                background: active ? "#F94FA2" : "#000",
                boxShadow: active ? "0px 0px 10px #F94FA2" : "",
                color: "#fff",
              }}
            >
              View Auction
            </button>
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
            {/* <Icons icons={[globe, file, twitter, github, book]} /> */}
            {/* {theme === "light" ? (
              <Icons icons={[globe, file, twitter, github, book]} />
              ) : (
              <Icons icons={[globe2, file2, twitter2, github2, book2]} />
            )} */}

            <GlobeIcon />
            <FileIcon />
            <TwitterIcon />
            <GithubIcon />
            <BookIcon />
          </div>
          <div className="flex mt-2.5">
            <div className="w-2/5 text-left">
              <small className="text-gray-500">
                {progress ? "Auction Progress" : "Countdown"}
              </small>
              <br />
              {progress && (
                <small>
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
                          boxShadow: "0px 0px 10px #29F079",
                          height: "10px",
                        }}
                      ></div>
                    </div>
                  </div>
                </small>
              )}
              {countdownValue && (
                <small
                  className="flex align-center"
                  style={{
                    color: "#29F079",
                    fontSize: "12px",
                    textShadow: "0px 0px 10px #29F079",
                  }}
                >
                  {countdownValue}
                </small>
              )}
              {raised && <small style={{ fontSize: "12px" }}>{raised}</small>}
            </div>
            <div className="w-1/4 text-center">
              <div className="text-left">
                <small className="text-gray-500">
                  {remainingTimeTitle ? remainingTimeTitle : contract}
                </small>
                {/* <br /> */}
                <p style={{ fontSize: "12px" }}>
                  {remainingTime ? remainingTime : contractAddress}
                </p>
              </div>
            </div>
            <div className="w-2/6 text-right">
              <small className="text-gray-500">Token</small>
              {/* <br /> */}
              <div className="flex justify-end items-center">
                <small style={{ fontSize: "12px" }}>{token}</small>
                {/* <br /> */}
                <small className="ml-1.5">
                  <Image src={copy} alt="copy" height={10} width={12} />
                </small>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

// interface IconsProps {
//   icons: any;
// }

// const Icons = ({ icons }: IconsProps) => {
//   return (
//     <>
//       {icons?.map((icon: any) => (
//         <div className="mr-1.5" key={icon}>
//           <Image src={icon} alt={icon} height={12} width={12} />
//         </div>
//       ))}
//     </>
//   );
// };

export default AuctionCard;
