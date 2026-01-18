import { useContext } from "react";
import Button from "../styles/Button";
import styled from "styled-components";
import {
  Inner,
  Buttons,
  Socials,
  Photo,
  Container,
} from "../styles/Header.styled";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import { ActiveLinkContext } from "../App";
import { useInView } from "react-intersection-observer";

function Header() {
  const LightTitle = styled.h5`
    color: ${({ theme }) => theme.colors.light};
  `;

  const [activeLink, setActiveLink] = useContext(ActiveLinkContext);

  const { ref, inView } = useInView();

  return (
    <Container>
      <Inner>
        <h5>Hello I'm</h5>
        <h1>Patrick Miharisoa</h1>
        <LightTitle>Software Developer</LightTitle>
        <Buttons>
          <Button
            target="_blank"
            href="https://patrick-miharisoa-resume.vercel.app"
          >
            View CV
          </Button>
          <Button
            href="#contact"
            onClick={() => {
              setActiveLink("contact");
            }}
            primary
          >
            Get in Touch
          </Button>
        </Buttons>
        <Socials>
          <a
            href="https://www.linkedin.com/in/patrick-miharisoa-8b8633227/"
            target="_blank"
          >
            <FaLinkedin />
          </a>
          <a href="https://github.com/bleak-and-bare" target="_blank">
            <FaGithub />
          </a>
          <a href="https://web.facebook.com/profile.php?id=100009539585801">
            <FaFacebook />
          </a>
        </Socials>
        <Photo ref={ref} inView={inView}>
          <img src="/assets/images/photo-1.png" alt="photo" />
        </Photo>
      </Inner>
    </Container>
  );
}

export default Header;
