import Image from "next/image";
import React from "react";
import { Headshot, Triangle } from "./styled";

export default function Navbar() {
  return (
    <>
      <Triangle />
      <Headshot>
        <Image
          src={"/imgs/headshot01-right-sm.png"}
          width={900}
          height={900}
          alt="Milan Kubala"
        />
      </Headshot>
    </>
  );
}
