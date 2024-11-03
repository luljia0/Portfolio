import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import ExperienceCard from "./ExprienceCard"; // Ensure this import matches your file name

function Experience() {
  const experiences = [
    {
      title: "Software Engineer Intern",
      company: "SisterGlobal",
      duration: "Jun 2024 - Aug 2024",
      description: "Developed a secure, user-friendly platform tailored to women's safety needs."
    },
    {
      title: "Content Operation Intern",
      company: "China Intercontinental Communication Center",
      duration: "Jul 2018 - Sep 2018",
      description: "Reviewed documentaries and managed social media accounts."
    },
    // Add more experience objects here
  ];

  return (
    <Container fluid className="experience-section" id="experience">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Experiences</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few experiences I'm proud of.
        </p>
        {experiences.map((exp, index) => (
          <Row key={index} className="experience-col" >
            <Col md={6} className={index % 2 === 0 ? "offset-md-6" : ""}>
              <ExperienceCard
                title={exp.title}
                company={exp.company}
                duration={exp.duration}
                description={exp.description}
              />
            </Col>
          </Row>
        ))}
      </Container>
    </Container>
  );
}

export default Experience;
