import React from 'react';
import CardList from './common/cards/cardList';

const Projects = () => {
  const commonPath = `${process.env.PUBLIC_URL}/images/covers/projects`;
  const bigProjects = [
    {
      title: 'QuickFit',
      href: 'https://quickfit.herokuapp.com/',
      imgSrc: `${commonPath}/quickfit_176x99.png`,
      tags: ['REST', 'MVC', 'Pug', 'Bootstrap', 'MongoDB', 'API']
    },
    {
      title: 'Ted’s Trip',
      href: 'https://vespaill.github.io/teds-trip/',
      imgSrc: `${commonPath}/ted-cover_176x99.png`,
      tags: ['Phaser.io', 'ES6', 'Webpack', 'Babel', 'Adobe Photoshop']
    },
    {
      title: 'Birthday Bash',
      href: 'https://vespaill.github.io/birthday-bash/',
      imgSrc: `${commonPath}/bbash-cover_176x99.png`,
      tags: ['Phaser.io', 'ES6', 'Webpack', 'Babel', 'Adobe Photoshop']
    }
  ];

  const smallProjects = [
    {
      title: 'Multiplication table generator',
      href:
        'https://vespaill.github.io/public_html/src/GUI1/assignments/8/index.html',
      imgSrc: `${commonPath}/mult-tab_176x99.png`,
      tags: ['jQuery', 'Bootstrap', 'DOM']
    },
    {
      title: 'A bit of scramble',
      href:
        'https://vespaill.github.io/public_html/src/GUI1/assignments/9/index.html',
      imgSrc: `${commonPath}/scramble_176x99.png`,
      tags: ['jQuery', 'Bootstrap', 'DOM']
    },
    {
      title: 'Vidly',
      href: 'https://vidly-react-01251996.herokuapp.com/movies',
      imgSrc: `${commonPath}/vidly_176x99.png`,
      tags: ['React', 'Bootstrap', 'MongoDB', 'API']
    },
    {
      title: 'Forkify',
      href: 'https://vespaill.github.io/Forkify/dist/index.html',
      imgSrc: `${commonPath}/forkify_176x99.png`,
      tags: ['ES6', 'MVC', 'Webpack', 'Babel', 'API', 'DOM']
    },
    {
      title: 'Budgety',
      href: 'https://vespaill.github.io/Budgety/',
      imgSrc: `${commonPath}/budgety_176x99.png`,
      tags: ['ES5', 'jQuery', 'DOM']
    },
    {
      title: 'Pig Dice',
      href: 'https://vespaill.github.io/pig-dice-game/index.html',
      imgSrc: `${commonPath}/pig-dice_176x99.png`,
      tags: ['ES5', 'jQuery', 'DOM']
    }
  ];

  return (
    <React.Fragment>
      <CardList items={bigProjects} colNum={4}>
        Collaborative
      </CardList>
      <CardList items={smallProjects} colNum={3}>
        Solo
      </CardList>
    </React.Fragment>
  );
};

export default Projects;
