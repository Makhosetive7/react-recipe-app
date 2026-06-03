import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { MdSearch } from "react-icons/md";

const mealRoutes = [
  { label: "Beef", path: "/beefPage" },
  { label: "Chicken", path: "/chickenpage" },
];

const Search = () => {
  const [activeTab, setActiveTab] = useState("Meals");
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const normalized = query.trim().toLowerCase();

    if (activeTab === "Cocktails") {
      navigate("/cocktailPage");
      return;
    }

    if (normalized.includes("chicken")) {
      navigate("/chickenpage");
      return;
    }

    navigate("/beefPage");
  };

  return (
    <Section id="search">
      <Container>
        <Header>
          <Eyebrow>Quick Start</Eyebrow>
          <Title>What Are You Craving Today?</Title>
          <Subtitle>
            Choose meals or cocktails, then browse the full collection on the
            category page.
          </Subtitle>
        </Header>

        <SearchCard>
          <TabRow>
            <TabButton
              type="button"
              className={activeTab === "Meals" ? "active" : ""}
              onClick={() => setActiveTab("Meals")}
            >
              Meals
            </TabButton>
            <TabButton
              type="button"
              className={activeTab === "Cocktails" ? "active" : ""}
              onClick={() => setActiveTab("Cocktails")}
            >
              Cocktails
            </TabButton>
          </TabRow>

          <Form onSubmit={handleSubmit}>
            <InputWrapper>
              <SearchIcon aria-hidden="true">
                <MdSearch />
              </SearchIcon>
              <Input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={
                  activeTab === "Meals"
                    ? 'Try "chicken" or leave blank for beef recipes'
                    : "Browse our cocktail collection"
                }
                aria-label="Search recipes"
              />
            </InputWrapper>
            <SubmitButton type="submit">
              {activeTab === "Meals" ? "Browse Meals" : "Browse Cocktails"}
            </SubmitButton>
          </Form>

          {activeTab === "Meals" && (
            <QuickLinks>
              {mealRoutes.map(({ label, path }) => (
                <QuickLink key={path} type="button" onClick={() => navigate(path)}>
                  {label}
                </QuickLink>
              ))}
            </QuickLinks>
          )}
        </SearchCard>
      </Container>
    </Section>
  );
};

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Section = styled.section`
  padding: 4rem 0 5rem;
  background: linear-gradient(180deg, #f8f9fa 0%, #eef1f5 100%);
`;

const Container = styled.div`
  max-width: 760px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 2.5rem;
  animation: ${fadeInUp} 0.7s ease-out;
`;

const Eyebrow = styled.span`
  display: inline-block;
  background: var(--gradient-accent);
  color: white;
  padding: 0.4rem 1.1rem;
  border-radius: 999px;
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: 0.85rem;
`;

const Title = styled.h2`
  font-family: var(--font-display);
  font-size: clamp(1.75rem, 3.5vw, 2.5rem);
  margin: 0 0 0.75rem;
  color: var(--color-text);
`;

const Subtitle = styled.p`
  margin: 0;
  color: var(--color-text-muted);
  line-height: 1.6;
`;

const SearchCard = styled.div`
  background: white;
  border-radius: var(--radius-xl);
  padding: 2rem;
  box-shadow: var(--shadow-md);
  border: 1px solid rgba(0, 0, 0, 0.04);
  animation: ${fadeInUp} 0.7s ease-out 0.15s both;
`;

const TabRow = styled.div`
  display: flex;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
`;

const TabButton = styled.button`
  flex: 1;
  padding: 0.85rem 1rem;
  border-radius: var(--radius-md);
  border: 1px solid rgba(102, 126, 234, 0.25);
  background: transparent;
  color: var(--color-text);
  font-weight: 600;
  cursor: pointer;
  transition: all 0.25s ease;

  &.active {
    background: var(--gradient-primary);
    color: white;
    border-color: transparent;
    box-shadow: 0 8px 20px rgba(102, 126, 234, 0.25);
  }

  &:not(.active):hover {
    background: rgba(102, 126, 234, 0.06);
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: 640px) {
    flex-direction: row;
    align-items: stretch;
  }
`;

const InputWrapper = styled.div`
  position: relative;
  flex: 1;
`;

const SearchIcon = styled.span`
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: var(--color-text-muted);
  font-size: 1.25rem;
  display: flex;
  pointer-events: none;
`;

const Input = styled.input`
  width: 100%;
  height: 3.25rem;
  padding: 0 1rem 0 3rem;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: var(--radius-md);
  font-size: 1rem;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;

  &:focus {
    outline: none;
    border-color: var(--color-primary);
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.15);
  }
`;

const SubmitButton = styled.button`
  height: 3.25rem;
  padding: 0 1.75rem;
  border: none;
  border-radius: var(--radius-md);
  background: var(--gradient-accent);
  color: white;
  font-weight: 600;
  cursor: pointer;
  white-space: nowrap;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 8px 20px rgba(238, 90, 36, 0.3);
  }
`;

const QuickLinks = styled.div`
  display: flex;
  gap: 0.75rem;
  margin-top: 1.25rem;
  flex-wrap: wrap;
`;

const QuickLink = styled.button`
  padding: 0.5rem 1rem;
  border-radius: 999px;
  border: 1px solid rgba(102, 126, 234, 0.25);
  background: rgba(102, 126, 234, 0.06);
  color: var(--color-primary);
  font-weight: 600;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: var(--gradient-primary);
    color: white;
    border-color: transparent;
  }
`;

export default Search;
