import React from "react";
import styled, { keyframes } from "styled-components";
import { NavLink } from "react-router-dom";
import { MdArrowForward } from "react-icons/md";

const categories = [
  {
    title: "Beef",
    description: "Hearty steaks, stews, and slow-cooked classics from around the world.",
    image:
      "https://images.pexels.com/photos/361184/asparagus-steak-veal-stew-veal-361184.jpeg?auto=compress&cs=tinysrgb&w=800",
    path: "/beefPage",
    accent: "#c0392b",
  },
  {
    title: "Chicken",
    description: "Crispy, grilled, and one-pan chicken dishes for every night of the week.",
    image:
      "https://images.pexels.com/photos/60616/fried-chicken-chicken-fried-crunchy-60616.jpeg?auto=compress&cs=tinysrgb&w=800",
    path: "/chickenpage",
    accent: "#e67e22",
  },
  {
    title: "Cocktails",
    description: "Refreshing mixes and classic pours to elevate any gathering.",
    image:
      "https://images.pexels.com/photos/1283219/pexels-photo-1283219.jpeg?auto=compress&cs=tinysrgb&w=800",
    path: "/cocktailPage",
    accent: "#8e44ad",
  },
];

const FeaturedCategories = () => {
  return (
    <Section id="categories">
      <Container>
        <Header>
          <Eyebrow>Browse Collections</Eyebrow>
          <Title>Pick a Category, Start Cooking</Title>
          <Subtitle>
            Jump straight into curated recipe lists powered by TheMealDB — beef,
            chicken, and cocktails ready to explore.
          </Subtitle>
        </Header>

        <Grid>
          {categories.map((category, index) => (
            <Card key={category.title} $delay={index * 0.1}>
              <CardLink to={category.path}>
                <ImageWrapper>
                  <CardImage src={category.image} alt={category.title} />
                  <ImageOverlay $accent={category.accent} />
                </ImageWrapper>
                <CardBody>
                  <CardTitle>{category.title}</CardTitle>
                  <CardDescription>{category.description}</CardDescription>
                  <ExploreLink>
                    View recipes <MdArrowForward />
                  </ExploreLink>
                </CardBody>
              </CardLink>
            </Card>
          ))}
        </Grid>
      </Container>
    </Section>
  );
};

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(24px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Section = styled.section`
  padding: 5rem 0;
  background: var(--color-surface);
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 3.5rem;
  animation: ${fadeInUp} 0.7s ease-out;
`;

const Eyebrow = styled.span`
  display: inline-block;
  background: var(--gradient-primary);
  color: white;
  padding: 0.45rem 1.25rem;
  border-radius: 999px;
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: 1rem;
`;

const Title = styled.h2`
  font-family: var(--font-display);
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
  color: var(--color-text);
  margin: 0 0 1rem;
`;

const Subtitle = styled.p`
  max-width: 620px;
  margin: 0 auto;
  font-size: 1.1rem;
  line-height: 1.7;
  color: var(--color-text-muted);
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    max-width: 480px;
    margin: 0 auto;
  }
`;

const Card = styled.article`
  animation: ${fadeInUp} 0.7s ease-out both;
  animation-delay: ${({ $delay }) => `${$delay}s`};
`;

const CardLink = styled(NavLink)`
  display: block;
  text-decoration: none;
  background: white;
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-md);
  border: 1px solid rgba(0, 0, 0, 0.04);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-6px);
    box-shadow: var(--shadow-lg);
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  height: 220px;
  overflow: hidden;
`;

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;

  ${CardLink}:hover & {
    transform: scale(1.06);
  }
`;

const ImageOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    ${({ $accent }) => `${$accent}cc`} 0%,
    transparent 55%
  );
`;

const CardBody = styled.div`
  padding: 1.75rem;
`;

const CardTitle = styled.h3`
  font-family: var(--font-display);
  font-size: 1.5rem;
  margin: 0 0 0.75rem;
  color: var(--color-text);
`;

const CardDescription = styled.p`
  margin: 0 0 1.25rem;
  line-height: 1.6;
  color: var(--color-text-muted);
  font-size: 0.95rem;
`;

const ExploreLink = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  font-weight: 600;
  font-size: 0.95rem;
  color: var(--color-primary);
  transition: gap 0.25s ease;

  ${CardLink}:hover & {
    gap: 0.6rem;
  }

  svg {
    font-size: 1.1rem;
  }
`;

export default FeaturedCategories;
