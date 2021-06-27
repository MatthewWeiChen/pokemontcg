import React from 'react';
import Homepage from './components/homepage';
import Navbar from './components/navbar';
import CardList from './components/cardList';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [],
      search: '',
      isSearching: false
    };

    this.searchForCard = this.searchForCard.bind(this);
    this.setSearchParamters = this.setSearchParamters.bind(this);
  }

  async searchForCard(pokemon) {
    const headers = { 'X-Api-Key': '6ac7ac45-69ff-4e59-ba49-b98b7d5b8b4e' };
    const response = await fetch(
      `https://api.pokemontcg.io/v2/cards?q=name:${pokemon}`,
      {
        headers
      }
    );
    const json = await response.json();
    this.setState({ list: json, isSearching: true });
  }

  setSearchParamters(keyword) {
    this.setState({ search: keyword.search });
  }

  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Router>
          <Switch>
            <Route
              exact
              path="/"
              render={props => (
                <Homepage
                  search={this.searchForCard}
                  setParameter={this.setSearchParamters}
                />
              )}
            />
            <Route
              exact
              path="/list"
              render={() => <CardList valid={this.state.isSearching} />}
              cardList={this.state.list}
            />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
