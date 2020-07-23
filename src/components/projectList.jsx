import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import ProjectCard from './cards/projectCard';
import Loader from './common/loader';
import axios from 'axios';

class ProjectList extends Component {
  state = {
    loading: false,
    projects: []
  };

  async componentDidMount() {
    const { data } = await axios.get(
      'https://portfolio-api-01251996.herokuapp.com/api/projects'
    );

    let projects = data
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

    this.setState({ loading: true, projects });
  }

  render() {
    const { loading, projects } = this.state;
    return (
      <>
        <Row className="mt-5">
          <Col md="12" className="text-center">
            <h2 className="bold paragraphFirstLetter underline mb-4">
              Projects
            </h2>
          </Col>
          {!loading && <Loader />}
          {loading &&
            projects.map((project, index) => {
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
