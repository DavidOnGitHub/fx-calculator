import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Error from './components/Error';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

import styles from './App.module.scss';

class App extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    return (
      <div className={styles.container}>
        <Header />
        <Router>
          {this.state.hasError ? (
            <Error />
          ) : (
            <main className={styles.main}>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route component={NotFound} />
              </Switch>
            </main>
          )}
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
