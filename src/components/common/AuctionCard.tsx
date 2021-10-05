const file = "/assets/icons/file.svg";
const book = "/assets/icons/book.svg";
const copy = "/assets/icons/copy.svg";
const spoon = "/assets/icons/spoon.svg";
const globe = "/assets/icons/globe.svg";
const github = "/assets/icons/github.svg";
const twitter = "/assets/icons/twitter.svg";

const AuctionCard = ({ data }: any) => {
  const {
    image,
    subImage,
    title,
    rate,
    auction,
    time,
    amount,
    description,
    auctionProgress,
    raised,
    progress,
    remainingTimeTitle,
    remainingTime,
    token,
  } = data;
  return (
    <>
      <div
        style={{ border: "1px solid gray" }}
        className="pb-5 m-1 text-white rounded-lg"
      >
        <div>
          <img
            className="w-full rounded-t-lg"
            src={image}
            alt="wrapped_ncg"
            height="300"
            width="650"
          />
        </div>
        <div>
          <img
            className="-mt-6 ml-4"
            src={subImage}
            alt="wrapped_ncg"
            height="40"
            width="40"
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
                View Aucion
              </button>
            </div>
          </div>
          <div className=" text-left">
            <small className="text-xs text-gray-500">{rate}</small>
          </div>
          <div className="flex">
            <div className="w-3/12 text-left flex test-xs">
              <small>{auction}</small>
              <img
                className="ml-1.5"
                src={spoon}
                alt="spoon"
                height="15"
                width="15"
              />
            </div>
            <div className="w-3/6 text-center test-xs">
              <small>{time}</small>
            </div>
            <div className="w-3/12 text-right test-xs">
              <small>{amount}</small>
            </div>
          </div>
          <div className="mt-2.5 mb-3.5 text-gray-500 text-left">
            <small className="test-xs">{description}</small>
          </div>
          <div className="flex">
            <img
              className="mr-1.5"
              src={globe}
              alt="globe"
              height="12"
              width="12"
            />
            <img
              className="mr-1.5"
              src={file}
              alt="file"
              height="12"
              width="12"
            />
            <img
              className="mr-1.5"
              src={twitter}
              alt="twitter"
              height="12"
              width="12"
            />
            <img
              className="mr-1.5"
              src={github}
              alt="github"
              height="12"
              width="12"
            />
            <img
              className="mr-1.5"
              src={book}
              alt="book"
              height="12"
              width="12"
            />
          </div>
          <div className="flex mt-2.5">
            <div className="w-2/5 text-left">
              <small className="text-gray-500">{auctionProgress}</small>
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
              <small>{raised}</small>
            </div>
            <div className="w-1/4 text-center">
              <div className="text-left">
                <small className="text-gray-500">{remainingTimeTitle}</small>
                <br />
                <small>{remainingTime}</small>
              </div>
            </div>
            <div className="w-2/6 text-right">
              <small className="text-gray-500">Token</small>
              <br />
              <div className="flex justify-end">
                <small>{token}</small>
                <img src={copy} alt="copy" height="12" width="12" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AuctionCard;
