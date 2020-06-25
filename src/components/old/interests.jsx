import React, { Component } from 'react';
import '../css/App.css';
import Intro from './common/intro';
import CardList from './cardList';

class Interests extends Component {
  state = {
    introText:
      'Welcome, my name is Victor M. Espaillat. I’m a computer science major at UMass Lowell, and I am also passionate about strength training and nutrition.',
    interests: [
      { assetName: 'vegetables', title: 'Nutrition', extension: 'jpg' },
      {
        assetName: 'deadlift',
        title: 'Strength Training',
        link: '/strengthTraining',
        extension: 'png'
      },
      { assetName: 'desktop', title: 'Gaming', extension: 'jpg' },
      {
        assetName: 'darksouls',
        title: 'Hidetaka Miyazaki’s Works 2009 – present',
        link: 'https://en.wikipedia.org/wiki/Hidetaka_Miyazaki#Works',
        externalLink: true,
        extension: 'jpg'
      }
    ]
  };

  render() {
    return (
      <React.Fragment>
        <Intro>{this.state.introText}</Intro>
        <div id="interests">
          <h2 className="text-left active-link pb-5">interests.</h2>
          <CardList data={this.state.interests} />
        </div>
      </React.Fragment>
    );
  }
}

export default Interests;
