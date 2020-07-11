import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import ProjectCard from './cards/projectCard';

class ProjectList extends Component {
  commonPath = `${process.env.PUBLIC_URL}/images/covers/projects`;
  state = {
    projects: [
      {
        title: 'QuickFit',
        href: 'https://quickfit.herokuapp.com/',
        imgSrc: `${this.commonPath}/quickfit_348x196.png`,
        tags: ['REST', 'MVC', 'Pug', 'Bootstrap', 'MongoDB', 'API']
      },
      {
        title: 'Ted’s Trip',
        href: 'https://vespaill.github.io/teds-trip/',
        imgSrc: `${this.commonPath}/ted_348x196.png`,
        tags: ['Phaser.io', 'ES6', 'Webpack', 'Babel', 'Adobe Photoshop']
      },
      {
        title: 'Birthday Bash',
        href: 'https://vespaill.github.io/birthday-bash/',
        imgSrc: `${this.commonPath}/bbash-cover_176x99.png`,
        tags: ['Phaser.io', 'ES6', 'Webpack', 'Babel', 'Adobe Photoshop']
      },
      {
        title: 'Multiplication table generator',
        href:
          'https://vespaill.github.io/public_html/src/GUI1/assignments/8/index.html',
        imgSrc: `${this.commonPath}/mult-tab_348x196.png`,
        tags: ['jQuery', 'Bootstrap', 'DOM']
      },
      {
        title: 'A bit of Scrabble',
        href:
          'https://vespaill.github.io/public_html/src/GUI1/assignments/9/index.html',
        imgSrc: `${this.commonPath}/scrabble_348x196.png`,
        tags: ['jQuery', 'Bootstrap', 'DOM']
      },
      {
        title: 'Vidly',
        href: 'https://vidly-react-01251996.herokuapp.com/movies',
        imgSrc: `${this.commonPath}/vidly_348x196.png`,
        tags: ['React', 'Bootstrap', 'MongoDB', 'API', 'tutorial']
      },
      {
        title: 'Natours',
        href: 'https://vespaill.github.io/Natours/',
        imgSrc: `${this.commonPath}/natours_348x196.png`,
        tags: ['CSS3', 'Sass', 'HTML5', 'tutorial']
      },
      {
        title: 'Forkify',
        href: 'https://vespaill.github.io/Forkify/dist/index.html',
        imgSrc: `${this.commonPath}/forkify_348x196.png`,
        tags: ['ES6', 'MVC', 'Webpack', 'Babel', 'API', 'DOM', 'tutorial']
      },
      {
        title: 'Budgety',
        href: 'https://vespaill.github.io/Budgety/',
        imgSrc: `${this.commonPath}/budgety_348x196.png`,
        tags: ['ES5', 'jQuery', 'DOM', 'tutorial']
      },
      {
        title: 'Pig Dice',
        href: 'https://vespaill.github.io/pig-dice-game/index.html',
        imgSrc: `${this.commonPath}/pig-dice_348x196.png`,
        tags: ['ES5', 'jQuery', 'DOM', 'tutorial']
      }
    ]
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
          {this.state.projects.map((project, index) => (
            <Col key={index} md="4" className="mb-4">
              <ProjectCard key={index} data={project} />
            </Col>
          ))}
        </Row>
      </>
    );
  }
}

export default ProjectList;
