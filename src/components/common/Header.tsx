import Image from "next/image";

const Header = () => {
  return (
    <div className="flex justify-between py-3">
      <section className="flex align-center">
        {/* <Image src="/assets/icons/ellipse.svg" alt="" height={35} width={35} /> */}
        <svg
          width="50"
          height="28"
          viewBox="0 0 50 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M24.7059 28.0001C38.3506 28.0001 49.4118 16.9389 49.4118 3.29419C49.4118 3.29419 47.8333 5.5589 24.7059 5.5589C1.57843 5.5589 0 3.29419 0 3.29419C0 16.9389 11.0612 28.0001 24.7059 28.0001Z"
            fill="var(--card-color)"
          />
          <ellipse
            cx="24.7059"
            cy="2.40196"
            rx="24.7059"
            ry="2.40196"
            fill="var(--card-color)"
          />
        </svg>
        <h3 className="title">MISO IDO</h3>
      </section>
      <section>
        <button className="auction-live-btn mr-4">
          Auction is Live{" "}
          <Image
            src="/assets/icons/green-dot.svg"
            alt=""
            height={20}
            width={20}
          />
        </button>
      </section>

      <style scoped>{`
        .title {
          font-family: SF Pro Rounded;
          font-weight: bold;
          font-size: 22px;
          margin-left: 10px;
          // color: #EEEEEE;
          color: var(--card-color);
        }
        .auction-live-btn {
          padding: 8px 16px;
          width: 139px;
          height: 33px;
          color: var(--card-color);
          font-size: 11px;
          display: flex;

          border: 2px solid var(--card-color);
          box-sizing: border-box;
          border-radius: 50px;
        }
      `}</style>
    </div>
  );
};

export default Header;
