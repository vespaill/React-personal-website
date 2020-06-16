import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './css/font_styles.css';
import './css/App.css';
import NavBar from './components/navBar';
import Footer from './components/footer';
import NotFound from './components/notFound';
import Interests from './components/interests';

function App() {
  return (
    <div className="text-center">
      <header className="text-right">
        <h1>
          <span className="headerText">Victor.</span>
        </h1>
      </header>
      <main className="container">
        <NavBar />
        <Switch>
          <Route path="/home" component={Interests}></Route>
          <Route path="/not-found" component={NotFound} />
          <Redirect from="/" exact to="/home" />
          <Redirect to="/not-found" />
        </Switch>
        <Footer />
      </main>
    </div>
  );
}

export default App;
