import { useState } from "react";

const LiveGraph = () => {
  const [currentPosition, setCurrentPosition] = useState(40);

  return (
    <div
      className="p-6 shadow-lg font-bold rounded-xl"
      style={{
        width: "533px",
        marginTop: ".5rem",
        border: "1px solid var(--card-background)",
        background: "var(--card-background)",
        color: "var(--card-color)",
      }}
    >
      <div className="flex">
        <div className="w-1/4 text-left">
          <p className="text-gray-400 text-sm">Amount for Sale</p>
          <p className="-mt-1.5">2000000</p>
        </div>
        <div className="w-1/4 text-left">
          <p className="text-gray-400 text-sm">Amount Raised</p>
          <p className="-mt-1.5">906.97 ETH</p>
        </div>
        <div className="w-1/4 text-left">
          <p className="text-gray-400 text-sm">Remaining</p>
          <p className="-mt-1.5">100%</p>
        </div>
        <div className="w-1/4 text-left">
          <p className="text-gray-400 text-sm">Participants</p>
          <p className="-mt-1.5">620</p>
        </div>
      </div>
      <div className="w-1/4 mt-5 text-left">
        <p className="text-gray-400 text-sm">Min Raise</p>
        <p className="-mt-1.5">0.000024 ETH</p>
      </div>
      <div
        className="mt-5 text-left"
        style={{ marginLeft: currentPosition + "%", marginBottom: "-76px" }}
      >
        <p className="text-gray-400 text-sm">Current Token Price</p>
        <p className="-mt-1.5">0.000453 ETH</p>
        <div
          className="h-4 border-l"
          style={{ borderLeft: "1px solid lightgray" }}
        ></div>
      </div>
      <div
        className="h-44"
        style={{
          borderLeft: "1px solid lightgray",
          borderBottom: "1px solid lightgray",
          borderRight: "1px solid lightgray",
          borderTop: "1px solid transparent",
        }}
      >
        {/* transformDiv custom class */}
        <div className="mt-4 mb-8 flex transformDiv">
          <div
            className="rounded-full flex"
            style={{
              width: "100%",
              height: "5px",
              background: "rgba(41, 240, 121, 0.4)",
            }}
          >
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
            <div
              className="rounded-full float-left"
              style={{
                width: currentPosition + "%",
                background: "#29F079",
                height: "5px",
              }}
            ></div>
          </div>
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
      <div className="flex">
        <div className="w-1/4 -mt-2 h-3 border-r border-gray-400"></div>
        <div className="w-1/4 -mt-2 h-3 border-r border-gray-400"></div>
        <div className="w-1/4 -mt-2 h-3 border-r border-gray-400"></div>
        <div className="w-1/4 -mt-2 h-3 border-r border-gray-400"></div>
        <div className="w-1/4 -mt-2 h-3"></div>
      </div>
      <div className="flex">
        <div className="w-1/2 text-xs text-left text-gray-400">
          <p>Auction Start</p>
        </div>
        <div className="w-1/2 text-xs text-right text-gray-400">
          <p>Auction Ending</p>
        </div>
      </div>
    </div>
  );
};

export default LiveGraph;
