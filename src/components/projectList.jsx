import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import ProjectCard from './cards/projectCard';

class ProjectList extends Component {
  state = {
    projects: require('../projects.json')
  };

  render() {
    return (
      <>
        <Row className="mt-5">
          <Col md="12" className="text-center">
            <h2 className="bold paragraphFirstLetter underline mb-4">
              Projects
            </h2>
          </Col>
          {this.state.projects.map((project, index) => {
            return (
              <Col key={index} md="4" className="mb-4">
                <ProjectCard key={index} data={project} />
              </Col>
            );
          })}
        </Row>
      </>
    );
  }
}

export default ProjectList;
