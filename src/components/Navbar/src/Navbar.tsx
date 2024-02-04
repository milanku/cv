import Image from "next/image";
import React from "react";
import { NavContainer, Nav, NavbarMail } from "./styled";
import Logo from "../../../assets/mk-logo.svg";
import Link from "next/link";

type NavigationItem = {
  text: string;
  link: string;
};

const navigationItems: NavigationItem[] = [
  {
    text: "Domov",
    link: "/",
  },
  {
    text: "O mne",
    link: "",
  },
  {
    text: "Skúsenosti",
    link: "",
  },
  {
    text: "Vzdelanie",
    link: "",
  },
  {
    text: "Jazyky",
    link: "",
  },
  {
    text: "Kontakt",
    link: "",
  },
];

export default function Navbar() {
  return (
    <NavContainer>
      <Logo />
      <Nav>
        <ul>
          {navigationItems.map((navItem, index) => (
            <li>
              <Link href={navItem.link}>{navItem.text}</Link>
            </li>
          ))}
        </ul>
      </Nav>
      <NavbarMail>
        <a href="mailto:kubala@post.com">
          <span>kubala@post.com</span>
        </a>
      </NavbarMail>
    </NavContainer>
  );
}
