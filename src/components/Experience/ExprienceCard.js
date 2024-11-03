import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function ExperienceCard({ title, company, duration, description }) {
  return (
    <Card className="experience-card-view">
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{company}</Card.Subtitle>
        <Card.Text className="duration">{duration}</Card.Text>
        <Card.Text style={{ textAlign: "justify" }}>{description}</Card.Text>
        <Button variant="primary" href="#" target="_blank">
          Learn More
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ExperienceCard;

