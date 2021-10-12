import React, { useState } from "react";
import Head from "next/head";
import SidebarBtn from "../common/SidebarBtn";
import { LayoutProps } from "../../interfaces";
import styles from "../../../styles/sidebar.module.scss";
import MobileSidebar from "./MobileSidebar";
import Navbar from "./Navbar";

const Layout = ({ title, children }: LayoutProps) => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Head>
        <title>MISO | {title ? title : "Home"}</title>
        <meta
          name="description"
          content="MISO-Prototype || https://miso-prototype.vercel.app"
        />
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <section
        // className="bg-white"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1,
          // background: "#121319",
          background: "var(--card-background)",
        }}
      >
        <MobileSidebar open={open} setOpen={setOpen} />
        <Navbar setOpen={setOpen} />
      </section>

      {/* sidebar section */}
      <section>
        <div className={styles.sidebar}>
          <SidebarBtn />
        </div>
        <div className={styles.main}>{children}</div>
      </section>
    </div>
  );
};

export default Layout;
