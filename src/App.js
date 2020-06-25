import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import NavBar from './components/navBar';
import AboutMe from './components/aboutme';
import NotFound from './components/notFound';
import './css/font_styles.css';
import './css/App.css';

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <main className="container">
        <Switch>
          <Route path="/aboutme" component={AboutMe}></Route>
          <Route path="/not-found" component={NotFound} />
          <Redirect from="/" exact to="/aboutme" />
          <Redirect to="/not-found" />
        </Switch>
        {/* <Footer /> */}
      </main>
    </React.Fragment>
  );
}

export default App;
