import React from "react";
import Navlink from "./Navlink";
import Image from "next/image";
import Logo from "../../public/synapsis.png";

export default function Header() {
  return (
    <header className="flex justify-flex-start items-center pt-8 pb-8 mb-8 bg-gray-700 ">
      <ul className="flex text-xl ml-10 gap-x-12">
        <li>
          <Image src={Logo} className="w-10 h-10" alt={"Synapsis Logo"} />
        </li>
        <li>
          <Navlink href={"/"}>Blog</Navlink>
        </li>
        <li>
          <Navlink href={"/user"}>User</Navlink>
        </li>
      </ul>
    </header>
  );
}
