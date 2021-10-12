import Image from "next/image";
import { BtnProps } from "../../interfaces";

const MarketplaceBtn = () => {
  return (
    <div>
      <Btn img="ncg" title="Wrapped NCG" time="Tue, 10 Aug 2021 13:00:00 GMT" />
      <Btn img="bitdao" title="BitDAO" time="Mon, 16 Aug 2021 13:00:00 GMT" />
      <Btn
        img="meowshi"
        title="M E O W S H I"
        time="Mon, 16 Aug 2021 13:00:00 GMT"
      />
    </div>
  );
};

const Btn = ({ img, title, time }: BtnProps) => {
  return (
    <button className="marketplaceBtn">
      {/* <Image src={`/assets/overview/${img}.png`} alt={img} height={60} width={60} /> */}
      <Image
        src={`/assets/overview/${img}.png`}
        alt={img}
        height={50}
        width={50}
      />
      <div style={{ textAlign: "left" }}>
        <p style={{ color: "var(--card-color)" }}>{title}</p>
        <p style={{ fontSize: "9px", color: "var(--card-color)" }}>{time}</p>
      </div>
    </button>
  );
};

export default MarketplaceBtn;
