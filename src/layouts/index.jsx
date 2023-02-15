import React from "react";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Layout({ title, children }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/synapsis.png" />
      </Head>

      <div
        id="container"
        className="bg-gradient-to-b from-[#315325] to-[#6fa8dc] to-[#111810] text-black font-patrick relative">
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
}
