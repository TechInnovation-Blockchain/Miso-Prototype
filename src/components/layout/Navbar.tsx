import Head from "next/head";
import { NavbarProps } from "../../interfaces";

const Navbar = ({ title }: NavbarProps) => {
  return (
    <div>
      <Head>
        <title>MISO | {title ? title : "Home"}</title>
        <meta
          name="description"
          content="MISO-Prototype || https://miso-prototype.vercel.app"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>{/* navbar items */}</main>
    </div>
  );
};

export default Navbar;
