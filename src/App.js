import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import NavBar from './components/navBar';
import AboutMe from './components/aboutMe';
import ProjectList from './components/projectList';
import Training from './components/training';
import NotFound from './components/common/notFound';
import Footer from './components/footer';
import './css/fontStyles.css';
import './css/App.css';

function App() {
  return (
    <>
      <NavBar />
      <main className="container">
        <Switch>
          <Route path="/aboutme" component={AboutMe} />
          <Route path="/projects" component={ProjectList} />
          <Route path="/training" component={Training} />
          <Route path="/not-found" component={NotFound} />
          <Redirect from="/" exact to="/aboutme" />
          <Redirect to="/not-found" />
        </Switch>
      </main>
      <Footer />
    </>
  );
}

export default App;
