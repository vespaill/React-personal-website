import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import ProjectCard from './cards/projectCard';
import axios from 'axios';

class ProjectList extends Component {
  state = {
    projects: []
  };

  async componentDidMount() {
    const { data: projects } = await axios.get(
      'https://portfolio-api-01251996.herokuapp.com/api/projects'
    );
    projects.map(project => {
      project.imgData = new Buffer(project.data.data).toString('base64');
      delete project.data;
    });
    this.setState({ projects });
  }

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
