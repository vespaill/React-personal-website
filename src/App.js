import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import NavBar from './components/navBar';
import AboutMe from './components/aboutMe';
import ProjectList from './components/projectList';
import Training from './components/training';
import NotFound from './components/common/notFound';
import './css/font_styles.css';
import './css/App.css';

function App() {
  return (
    <>
      <NavBar />
      <main className="container">
        <Switch>
          <Route path="/aboutme" component={AboutMe}></Route>
          <Route path="/projects" component={ProjectList}></Route>
          <Route path="/training" component={Training}></Route>
          <Route path="/not-found" component={NotFound} />
          <Redirect from="/" exact to="/aboutme" />
          <Redirect to="/not-found" />
        </Switch>
      </main>
    </>
  );
}

export default App;
