import { ActiveLinkContext } from "../App";
import { useContext } from "react";
import { CardStyled, Container, Content, Photo } from "../styles/About.styled";
import Section from "../styles/Section";
import { FaAward } from "react-icons/fa";
import { GiFamilyTree } from "react-icons/gi";
import { GrReactjs } from "react-icons/gr";
import Button from "../styles/Button";
import { useInView } from "react-intersection-observer";

type ICardProps = {
  icon: any;
  title: String;
  description?: String;
  index?: number;
};

function Card({ icon, title, description, index }: ICardProps) {
  const { ref, inView } = useInView();

  return (
    <CardStyled index={index} ref={ref} inView={inView}>
      {icon}
      <h5>{title}</h5>
      <small>{description}</small>
    </CardStyled>
  );
}

function computeXP() {
    const start = new Date(2022, 2);
    const now = new Date();

    const avgYearMs = 1000 * 60 * 60 * 24 * 365.2425;
    const years = (now.getTime() - start.getTime()) / avgYearMs;

    const iYears = Math.floor(years);
    return years - iYears > 0.5 ? iYears + 1 : (iYears + 0.5);
}

function About() {
  const cards: ICardProps[] = [
    {
      icon: <FaAward />,
      title: "Experience",
      description: `${computeXP()} Years Working`,
    },
    {
      icon: <GrReactjs />,
      title: "Techno",
      description: "agnostic",
    },
    {
      icon: <GiFamilyTree />,
      title: "Algorithm",
      description: "optimizer",
    },
  ];

  // active link state
  const [_, setActiveLink] = useContext(ActiveLinkContext);

  const { ref, inView } = useInView();

  return (
    <Section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <Container>
        <Photo inView={inView} ref={ref}>
          <div>
            <img src="/assets/images/photo-2.jpeg" alt="photo" />
          </div>
        </Photo>

        <Content>
          <div>
            {cards.map((card, index) => {
              card.index = index;
              return <Card {...card} key={index} />;
            })}
          </div>
          <p>
            Hi! My name is Patrick Miharisoa. I am interested in new technologies, mathematics and
            problem solving. I have a solid background in mathematics and algorithms, whether theoretical or applied.
            I am particularly interested in new technologies as well, drifted by the current Machine Learning/AI era
            and uprising programming languages like Go, Zig and Rust. I am able to adapt quickly from one stack to another...
            In fact, the technology used by the project has never been the source of challenge to me. I come from a relatively
            low-level background to web development realm and can guarantee productivity in delivering reliable softwares as you need.
            <br />
            <Button
              primary
              href="#contact"
              onClick={() => {
                setActiveLink("contact");
              }}
            >
              Let's Talk
            </Button>
          </p>
        </Content>
      </Container>
    </Section>
  );
}

export default About;
