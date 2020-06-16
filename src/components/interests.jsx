import React, { Component } from 'react';
import '../css/App.css';
import Intro from './common/intro';
import ArticleList from './common/articleList';

class Interests extends Component {
  state = {
    interests: [
      { assetName: 'vegetables', title: 'Nutrition' },
      { assetName: 'deadlift', title: 'Strength Training' },
      { assetName: 'desktop', title: 'Gaming' },
      {
        assetName: 'darksouls',
        title: 'Hidetaka Miyazaki&rsquo;s Works 2009 – present',
        link: 'https://en.wikipedia.org/wiki/Hidetaka_Miyazaki#Works'
      }
    ]
  };

  render() {
    return (
      <React.Fragment>
        <Intro>
          Welcome, my name is Victor M. Espaillat. I&rsquo;m a computer science
          major at UMass Lowell, and I am also passionate about strength
          training and nutrition.
        </Intro>

        <div id="interests">
          <h2>interests.</h2>

          <ArticleList data={this.state.interests} />
        </div>
      </React.Fragment>
    );
  }
}

export default Interests;
