import {
  FacebookCircle,
  Instagram,
  InstagramAlt,
} from "@styled-icons/boxicons-logos";
import { Container } from "./styled";

export default function Socials() {
  return (
    <Container>
      <a href={"https://www.facebook.com/MKVettel"} target="_blank">
        <FacebookCircle />
      </a>
      <a href="https://www.instagram.com/rubikovasocka/" target="_blank">
        <Instagram />
      </a>
    </Container>
  );
}
