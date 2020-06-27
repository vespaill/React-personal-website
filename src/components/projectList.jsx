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
        imgSrc: `${this.commonPath}/quickfit_176x99.png`,
        tags: ['REST', 'MVC', 'Pug', 'Bootstrap', 'MongoDB', 'API'],
        hide: true
      },
      {
        title: 'Ted’s Trip',
        href: 'https://vespaill.github.io/teds-trip/',
        imgSrc: `${this.commonPath}/ted-cover_176x99.png`,
        tags: ['Phaser.io', 'ES6', 'Webpack', 'Babel', 'Adobe Photoshop'],
        hide: true
      },
      {
        title: 'Birthday Bash',
        href: 'https://vespaill.github.io/birthday-bash/',
        imgSrc: `${this.commonPath}/bbash-cover_176x99.png`,
        tags: ['Phaser.io', 'ES6', 'Webpack', 'Babel', 'Adobe Photoshop'],
        hide: true
      },
      {
        title: 'Multiplication table generator',
        href:
          'https://vespaill.github.io/public_html/src/GUI1/assignments/8/index.html',
        imgSrc: `${this.commonPath}/mult-tab_176x99.png`,
        tags: ['jQuery', 'Bootstrap', 'DOM'],
        hide: true
      },
      {
        title: 'A bit of scramble',
        href:
          'https://vespaill.github.io/public_html/src/GUI1/assignments/9/index.html',
        imgSrc: `${this.commonPath}/scramble_176x99.png`,
        tags: ['jQuery', 'Bootstrap', 'DOM'],
        hide: true
      },
      {
        title: 'Vidly',
        href: 'https://vidly-react-01251996.herokuapp.com/movies',
        imgSrc: `${this.commonPath}/vidly_176x99.png`,
        tags: ['React', 'Bootstrap', 'MongoDB', 'API', 'tutorial'],
        hide: true
      },
      {
        title: 'Forkify',
        href: 'https://vespaill.github.io/Forkify/dist/index.html',
        imgSrc: `${this.commonPath}/forkify_176x99.png`,
        tags: ['ES6', 'MVC', 'Webpack', 'Babel', 'API', 'DOM', 'tutorial'],
        hide: true
      },
      {
        title: 'Budgety',
        href: 'https://vespaill.github.io/Budgety/',
        imgSrc: `${this.commonPath}/budgety_176x99.png`,
        tags: ['ES5', 'jQuery', 'DOM', 'tutorial'],
        hide: true
      },
      {
        title: 'Pig Dice',
        href: 'https://vespaill.github.io/pig-dice-game/index.html',
        imgSrc: `${this.commonPath}/pig-dice_176x99.png`,
        tags: ['ES5', 'jQuery', 'DOM', 'tutorial'],
        hide: true
      }
    ]
  };

  toggleHidden = title => {
    console.log('TOGGLEHIDDEN');
    const projects = [...this.state.projects];
    const index = projects.findIndex(value => value.title === title);
    projects[index].hide = !projects[index].hide;
    this.setState({ projects });
  };

  render() {
    return (
      <>
        <Row className="mt-5">
          <Col md="12" className="text-center">
            <h2 className="bold paragraphFirstLetter underline mb-4">Projects</h2>
          </Col>
          {this.state.projects.map((project, index) => (
            <Col key={index} md="4" className="mb-4">
              <ProjectCard
                key={index}
                item={project}
                onExpand={this.toggleHidden}
                onCollapse={this.toggleHidden}
              />
            </Col>
          ))}
        </Row>
      </>
    );
  }
}

export default ProjectList;
