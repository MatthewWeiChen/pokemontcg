import React from 'react';
import Homepage from './components/homepage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <Router>
          <Switch>
            <Route exact path="/" component={Homepage} />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
