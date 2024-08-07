
import React from "react";
import styled from "styled-components";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import BlurFade from "@/components/magicui/blur-fade";
// import video1 from "@/assets/videos/video1.mp4";
import { BorderBeam } from "@/components/magicui/border-beam";

const Home = () => {
  return (
    
    <PageContainer>
        <section id="header">
      <BlurFade delay={0.25} inView>
        <h2 className="text-3xl   font-bold tracking-tighter sm:text-5xl xl:text-6xl/none from-stone-800">
          Hello World 👋
        </h2>
      </BlurFade>
      <BlurFade delay={0.25 * 2} inView>
        <span className="text-xl text-pretty tracking-tighter sm:text-3xl xl:text-4xl/none">
          Nice to meet you
        </span>
      </BlurFade>
    </section>
      <HeroSection>
   
      {/* <VideoBackground autoPlay muted loop>
        <source src={video1} type="video/mp4 "/>
      </VideoBackground> */}
      <BlurFade delay={0.50} inView>
        <HeroContent>
          <HeroTitle>Find Your Dream Job</HeroTitle>
          <HeroDescription>
            Search from thousands of job listings from top companies and apply
            today.

          </HeroDescription>
          <SearchContainer>
            <SearchInput
              type="text"
              placeholder="Job title, keywords, or company"
            />
            <SearchButton>Search Jobs</SearchButton>
          </SearchContainer>
        </HeroContent>
        </BlurFade>
      </HeroSection>
      <Section>
      <BlurFade delay={0.50} inView>
        <SectionTitle className=" from-stone-800">

          Popular Job Categories
          </SectionTitle>
        <CategoryGrid>
          <CategoryCard>
            <CategoryTitle>Software Development</CategoryTitle>
            <CategoryDescription>
              Find jobs in software engineering, web development, and more.
            </CategoryDescription>
          </CategoryCard>
          <CategoryCard>
            <CategoryTitle>Marketing</CategoryTitle>
            <CategoryDescription>
              Explore opportunities in marketing, advertising, and content
              creation.
            </CategoryDescription>
          </CategoryCard>
          <CategoryCard>
            <CategoryTitle>Finance</CategoryTitle>
            <CategoryDescription>
              Discover careers in finance, accounting, and investment banking.
            </CategoryDescription>
          </CategoryCard>
        </CategoryGrid>
    </BlurFade>
      </Section>
      <Section>
      <BlurFade delay={0.50} inView>
        <SectionTitle>Featured Jobs</SectionTitle>
        <FeaturedGrid>
          <FeaturedCard>
            <FeaturedTitle>Frontend Developer</FeaturedTitle>
            <FeaturedCompany>ABC Company - San Francisco, CA</FeaturedCompany>
            <ApplyButton>Apply Now</ApplyButton>
          </FeaturedCard>
          <FeaturedCard>
            <FeaturedTitle>Marketing Specialist</FeaturedTitle>
            <FeaturedCompany>XYZ Inc - New York, NY</FeaturedCompany>
            <ApplyButton>Apply Now</ApplyButton>
          </FeaturedCard>
        </FeaturedGrid>
      </BlurFade>
      </Section>
    </PageContainer>
  );
};

export default Home;

// Styled Components
const PageContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  // background: linear-gradient(to right, #f8f9fa, #e9ecef);
  padding: 2rem;
`;

const Header = styled.header`
  width: 100%;
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;

const Logo = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  color: #007bff;
`;

const Nav = styled.nav`
  display: flex;
`;

const NavButton = styled(Button)`
  margin-left: 1rem;
`;

const HeroSection = styled.section`
  width: 100%;
  max-width: 1200px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 4rem 2rem;
  background: #007bff;
  color: #fff;
  border-radius: 8px;
  margin-top: 2rem;
  
`;

const HeroContent = styled.div`
  max-width: 600px;
`;

const HeroTitle = styled.h2`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const HeroDescription = styled.p`
  font-size: 1.25rem;
  margin-bottom: 2rem;
`;

const SearchContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 600px;
`;

const SearchInput = styled(Input)`
  flex: 2;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
`;

const SearchButton = styled(Button)`
  flex: 1;
  background: #0069d9;
  color: #fff;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
`;

const Section = styled.section`
  width: 100%;
  max-width: 1200px;
  margin-top: 3rem;
  padding: 2rem;
  // background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const SectionTitle = styled.h3`
  font-size: 2rem;
  margin-bottom: 1.5rem
  ;
`;

const CategoryGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const CategoryCard = styled.div`
  padding: 2rem;
  background: #f8f9fa;
  border-radius: 8px;
  text-align: center;
`;

const CategoryTitle = styled.h4`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
    color: green;

`;

const CategoryDescription = styled.p`
  font-size: 1rem;
  color: #6c757d;
`;

const FeaturedGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const FeaturedCard = styled.div`
  padding: 2rem;
  background: #f8f9fa;
  border-radius: 8px;
  text-align: center;
`;
const VideoBackground = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
`;
const FeaturedTitle = styled.h4`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

const FeaturedCompany = styled.p`
  font-size: 1rem;
  color: #6c757d;
  margin-bottom: 1rem;
`;

const ApplyButton = styled(Button)`
  background: #007bff;
  color: #fff;
  width: 100%;
`;
