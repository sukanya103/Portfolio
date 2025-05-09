import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="PizzaHut Sales Analytics & Management System"
              description="Relational database project built with MySQL to manage and analyze sales data of a pizza store. Includes SQL queries for insights like revenue, popular sizes, and top-priced items"
             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Sales Management System"
              description="Full-stack sales tracker built with the MERN stack. Includes JWT auth, real-time WebSocket updates, advanced search/filtering, and a responsive TailwindCSS-based UI."
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="real-Time Chat Application"
              description="Feature-rich MERN stack chat app using Socket.io for real-time messaging, JWT authentication, and Zustand for global state. Includes user status tracking, error handling, and a clean UI with TailwindCSS + DaisyUI."
                           
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
