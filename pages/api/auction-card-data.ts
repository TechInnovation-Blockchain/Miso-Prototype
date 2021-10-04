// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from "next";
import { auctionCardsData } from "../../src/data";

const auctionCards = (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({ data: auctionCardsData });
};

export default auctionCards;
