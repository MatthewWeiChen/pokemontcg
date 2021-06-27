import React from 'react';
import Homepage from './components/homepage';
import Navbar from './components/navbar';
import CardList from './components/Cards/cardList';
import { Route, Switch, Redirect } from 'react-router-dom';

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
    this.redirect = this.redirect.bind(this);
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
    this.redirect();
  }

  redirect() {
    <Redirect to="/list" />;
  }

  setSearchParamters(keyword) {
    this.setState({ search: keyword.search });
  }

  render() {
    return (
      <React.Fragment>
        <Navbar />

        {this.state.isSearching ? <Redirect push to="/list" /> : null}
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
            render={() => (
              <CardList
                valid={this.state.isSearching}
                cardList={this.state.list}
              />
            )}
          />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
