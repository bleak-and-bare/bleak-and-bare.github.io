import styled, { keyframes } from "styled-components";
import BaseContainer from "./Container";
import { device } from "./Breakpoints";

const Container = styled(BaseContainer)`
  display: grid;
  grid-template-columns: 35% 50%;
  gap: 15%;

  @media ${device.lg} {
    grid-template-columns: 1fr;
    gap: 0;
  }
`;

const Appearing = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translate(0);
  }
`;

const Photo = styled.div<{ inView: boolean }>`
  animation: ${({ inView }) => inView && Appearing} 1s 300ms both;

  opacity: 0;
  width: 100%;
  aspect-ratio: 1/1;
  border-radius: 2rem;
  background: linear-gradient(
    45deg,
    transparent,
    ${({ theme }) => theme.colors.primary},
    transparent
  );
  display: grid;
  place-items: center;

  div {
    border-radius: 2rem;
    overflow: hidden;
    transform: rotate(-7deg);
    transition: ${({ theme }) => theme.transition};

    &:hover {
      transform: rotate(0);
    }

    img {
      display: block;
      width: 100%;
      object-fit: cover;
    }
  }

  @media ${device.lg} {
    width: 50%;
    margin: 2rem auto 4rem;
  }

  @media ${device.md} {
    width: 65%;
    margin: 0 auto 3rem;
  }
`;

const Rotating = keyframes`
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Content = styled.div`
  div {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
  }

  p {
    margin: 2rem 0;
    user-select: none;
    color: ${({ theme }) => theme.colors.primary};

    a {
      margin-top: 1rem;
    }
  }

  @media ${device.lg} {
    span {
      display: block;
      width: 100%;
      position: relative;

      a {
        position: absolute;
        right: 0;
      }
    }

    p {
      margin: 1rem 0 1.5rem;
    }
  }

  @media ${device.md} {
    text-align: center;

    div {
      grid-template-columns: 1fr 1fr;
      gap: 1rem;
    }

    p {
      margin: 1.5rem 0;
    }
  }
`;

const CardStyled = styled.article<{ inView: boolean; index?: number }>`
  animation: ${({ inView }) => inView && Appearing} 1s
    ${({ index }) => 500 + (index! + 1) * 200}ms both;

  opacity: 0;
  background: ${({ theme }) => theme.colors.backgroundVariant};
  border: 1px solid transparent;
  border-radius: 1rem;
  padding: 2rem;
  text-align: center;
  transition: ${({ theme }) => theme.transition};

  &:nth-of-type(2) {
    svg {
      animation: ${Rotating} 5s infinite linear;
    }
  }

  &:hover {
    background: transparent;
    border-color: ${({ theme }) => theme.colors.primaryVariant};
    cursor: default;
  }

  h5 {
    font-size: 0.95rem;
    margin-bottom: 0.75rem;
    font-weight: bold;
  }

  small {
    font-size: 0.75rem;
    color: ${({ theme }) => theme.colors.light};
  }

  svg {
    color: ${({ theme }) => theme.colors.primary};
    font-size: 1.4rem;
  }
`;

export { Container, CardStyled, Photo, Content };
