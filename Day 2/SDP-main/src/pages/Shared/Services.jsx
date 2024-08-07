import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const MainPageWrapper = styled.div`
  text-align: center;
  font-family: Arial, sans-serif;
`;

const Header = styled.div`
  background-color: #f8f9fa;
  padding: 20px;
  border-bottom: 1px solid #dee2e6;
`;

const HeaderTitle = styled.h1`
  margin: 0;
  font-size: 36px;
  color: #343a40;
`;

const ServicesSection = styled.div`
  padding: 20px;
`;
const ServiceCircle = styled.button`
  background: linear-gradient(135deg, #ff7e5f, #feb47b); /* Example gradient */
  border: none; /* Remove the border if the gradient should cover the entire button */
  border-radius: 50%;
  width: 150px;
  height: 150px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }

  .icon {
    font-size: 50px;
    color: #ffffff; /* Ensure the icon is visible against the gradient */
    margin-bottom: 10px;
  }

  p {
    position: relative;
    margin: 0;
    font-size: 18px;
    color: #ffffff; /* Ensure the text is visible against the gradient */
    z-index: 1; /* Ensure the text is above the gradient */
  }
`;

const ServicesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;


const Services = () => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <MainPageWrapper>
      <Header>
        <HeaderTitle>JOB CATEGORIES</HeaderTitle>
      </Header>
      <ServicesSection>
        <ServicesContainer>
          <ServiceCircle onClick={() => handleNavigate('/tech-jobs')}>
            {/* <img src={techJobsImg} alt="Tech Jobs" /> */}
            <p>Tech Jobs</p>
          </ServiceCircle>
          <ServiceCircle onClick={() => handleNavigate('/healthcare-jobs')}>
            {/* <img src={healthcareJobsImg} alt="Healthcare Jobs" /> */}
            <p>Healthcare Jobs</p>
          </ServiceCircle>
          <ServiceCircle onClick={() => handleNavigate('/finance-jobs')}>
            {/* <img src={financeJobsImg} alt="Finance Jobs" /> */}
            <p>Finance Jobs</p>
          </ServiceCircle>
          <ServiceCircle onClick={() => handleNavigate('/education-jobs')}>
            {/* <img src={educationJobsImg} alt="Education Jobs" /> */}
            <p>Education Jobs</p>
          </ServiceCircle>
          <ServiceCircle onClick={() => handleNavigate('/retail-jobs')}>
            {/* <img src={retailJobsImg} alt="Retail Jobs" /> */}
            <p>Retail Jobs</p>
          </ServiceCircle>
          <ServiceCircle onClick={() => handleNavigate('/marketing-jobs')}>
            {/* <img src={marketingJobsImg} alt="Marketing Jobs" /> */}
            <p>Marketing Jobs</p>
          </ServiceCircle>
          <ServiceCircle onClick={() => handleNavigate('/construction-jobs')}>
            {/* <img src={constructionJobsImg} alt="Construction Jobs" /> */}
            <p>Construction Jobs</p>
          </ServiceCircle>
          <ServiceCircle onClick={() => handleNavigate('/hospitality-jobs')}>
            {/* <img src={hospitalityJobsImg} alt="Hospitality Jobs" /> */}
            <p>Hospitality Jobs</p>
          </ServiceCircle>
        </ServicesContainer>
      </ServicesSection>
    </MainPageWrapper>
  );
};

export default Services;
