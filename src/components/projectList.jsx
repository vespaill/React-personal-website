import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import ProjectCard from './cards/projectCard';
import Loader from './common/loader';
import axios from 'axios';

class ProjectList extends Component {
  state = {
    loading: false,
    projects: [],
    tutorialProjs: []
  };

  async componentDidMount() {
    const { data } = await axios.get(
      'https://portfolio-api-01251996.herokuapp.com/api/projects'
    );

    let allProjs = data
      .map(project => {
        let cpy = { ...project };
        cpy.imgData = new Buffer(project.data.data).toString('base64');
        cpy.created = new Date(project.created);
        delete cpy.data;
        return cpy;
      })
      .sort((a, b) => {
        return b.created - a.created;
      });

    const projects = allProjs.filter(project => !project.tutorial);
    const tutorialProjs = allProjs.filter(project => project.tutorial);
    console.log(projects);
    this.setState({ loading: true, projects, tutorialProjs });
  }

  render() {
    const { loading, projects, tutorialProjs } = this.state;

    const projsJSX = projects.map((project, index) => (
      <Col key={index} md="4" className="mb-4">
        <ProjectCard key={index} data={project} />
      </Col>
    ));

    const tutorialProjcsJSX = tutorialProjs.map((project, index) => (
      <Col key={index} md="3" className="mb-4">
        <ProjectCard key={index} data={project} />
      </Col>
    ));

    return (
      <>
        <Row className="mt-5">
          <Col md="12" className="text-center">
            <h2 className="bold paragraphFirstLetter underline mb-4">
              Projects
            </h2>
          </Col>
          {!loading && <Loader />}
          {loading && projsJSX}
        </Row>
        <Row className="mt-5">
          <Col md="12" className="text-center">
            <h2 className="bold paragraphFirstLetter underline mb-4">
              Lessons
            </h2>
          </Col>
          {!loading && <Loader />}
          {loading && tutorialProjcsJSX}
        </Row>
      </>
    );
  }
}

export default ProjectList;
