import Image from "next/image";

const CommitAdd = () => {
  return (
    <div
      className="p-6 shadow-lg font-bold rounded-xl"
      style={{
        width: "533px",
        height: "274px",
        // marginTop: "1rem",
        border: "1px solid var(--card-background)",
        background: "var(--card-background)",
        color: "var(--card-color)",
      }}
    >
      <div className="flex">
        <div className="w-2/4 flex">
          <Image
            className="-ml-2"
            src="/assets/icons/ethIcon.svg"
            alt="ethIcon"
            height={60}
            width={60}
          />
          <div className="mt-2.5">
            <p className="text-gray-400 ">Amount</p>
            <p className="-mt-1.5">7.25 ETH</p>
          </div>
        </div>
        <div className="w-2/4 text-right">
          <p className="text-gray-400">Balace</p>
          <p>32 ETH</p>
        </div>
      </div>
      <div className="mt-4 mb-8">
        <div
          className="rounded-full flex"
          style={{
            width: "100%",
            height: "5px",
            background: "rgba(41, 240, 121, 0.4)",
          }}
        >
          <div
            className="rounded-full float-left"
            style={{
              width: "40%",
              background: "#29F079",
              height: "5px",
            }}
          ></div>
          <div
            className="rounded-full"
            style={{
              width: "12px",
              background: "#29F079",
              height: "12px",
              border: "2px solid white",
              marginTop: "-4px",
            }}
          ></div>
        </div>
      </div>
      <div className="text-left">
        <p className="text-xl">Commitment</p>
        <div className="my-4 font-bold border border-gray-400 rounded-full">
          <input
            className="p-0.5 pl-3 w-9/12 rounded-full font-bold"
            placeholder="7.25 ETH"
            type="text"
            style={{
              background: "transparent",
              border: "none",
              color: "var(--card-color)",
            }}
          />
          <button
            // className="px-6 p-1 -mt-0.5 -mr-0.5 shadow-2xl float-right font-bold rounded-full text-white"
            className="shadow-2xl float-right font-bold rounded-full text-white"
            style={{
              background: "#F94FA2",
              height: "30px",
              width: "110px",
              marginTop: "-1px",
              marginRight: "-1px",
              boxShadow: "0px 0px 10px #F94FA2",
            }}
          >
            Commit
          </button>
        </div>
      </div>
      <div className="flex">
        {/* <Image
          src="/assets/icons/clock.svg"
          alt="time"
          width={25}
          height={25}
        /> */}
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
            stroke="var(--card-color)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 6V12L16 14"
            stroke="var(--card-color)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <p className="ml-2 font-bold">03d: 15h: 15m: 42s </p>
      </div>
    </div>
  );
};

export default CommitAdd;
