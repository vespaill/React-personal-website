import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './css/font_styles.css';
import './css/App.css';
import NavBar from './components/navBar';
import Footer from './components/footer';
import NotFound from './components/notFound';
import Interests from './components/interests';
import Class from './components/class';
import Projects from './components/projects';
import StrengthTraining from './components/strengthTraining';
import Header from './components/header';

function App() {
  return (
    <main className="container">
      <Header />
      <NavBar />
      <Switch>
        <Route path="/home" component={Interests}></Route>
        <Route path="/class" component={Class}></Route>
        <Route path="/projects" component={Projects}></Route>
        <Route path="/strengthTraining" component={StrengthTraining}></Route>
        <Route path="/not-found" component={NotFound} />
        <Redirect from="/" exact to="/home" />
        <Redirect to="/not-found" />
      </Switch>
      <Footer />
    </main>
  );
}

export default App;
