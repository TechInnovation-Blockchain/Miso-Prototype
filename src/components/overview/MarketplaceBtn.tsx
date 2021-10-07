import Image from "next/image";

const MarketplaceBtn = () => {
  return (
    <div>
      <Btn img="ncg" title="Wrapped NCG" time="Tue, 10 Aug 2021 13:00:00 GMT" />
      <Btn img="bitdao" title="BitDAO" time="Mon, 16 Aug 2021 13:00:00 GMT" />
      <Btn img="meowshi" title="M E O W S H I" time="Mon, 16 Aug 2021 13:00:00 GMT" />

      <style scoped>{`
        .marketplaceBtn {
            display: flex;
            align-items: center;

            // width: 258px;
            // height: 72px;
            
            background: #121319;
            border: 1px solid #7F7F7F;
            box-sizing: border-box;
            box-shadow: 0px 4px 15px 4px rgba(0, 0, 0, 0.15);
            border-radius: 50px;
            flex: none;
            order: 0;
            flex-grow: 0;
            margin: 10px 0px;
            padding: 1px 20px;
        }
      `}</style>
    </div>
  );
};

interface BtnProps {
    img: string;
    title: string;
    time: string;
}

const Btn = ({ img, title, time }: BtnProps) => {
  return (
    <button className="marketplaceBtn">
      {/* <Image src={`/assets/overview/${img}.png`} alt={img} height={60} width={60} /> */}
      <Image src={`/assets/overview/${img}.png`} alt={img} height={50} width={50} />
      <div style={{ textAlign: "left" }}>
        <p style={{ color: "#fff" }}>{title}</p>
        <p style={{ fontSize: "9px", color: "#fff" }}>
          {time}
        </p>
      </div>
    </button>
  );
};

export default MarketplaceBtn;
