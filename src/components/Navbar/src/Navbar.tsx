import Image from "next/image";
import React from "react";
import {
  NavContainer,
  Nav,
  NavbarMail,
} from "./styled";

type NavigationItem = {
  text: string;
  link: string;
};

const navigationItems: NavigationItem[] = [
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
    text: "",
    link: "",
  },
];

export default function Navbar() {
  return (
    <NavContainer>
      <Nav>
        <ul>
          {navigationItems.map((navItem, index) => (
            <li>{navItem.text}</li>
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
