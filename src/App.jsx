import React from 'react';
import Homepage from './components/homepage';
import Navbar from './components/navbar';
import CardList from './components/Cards/cardList';
import CardDetail from './components/Cards/cardDetail';
import { Route, Switch, Redirect } from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    const storage = localStorage.getItem('pokemon');
    const selectedPokemon = localStorage.getItem('selectedCard');
    this.state = {
      list: {},
      search: '',
      isSearching: false,
      storage: storage ? JSON.parse(storage) : null,
      selectedCard: selectedPokemon ? JSON.parse(selectedPokemon) : null,
      madeSelection: false
    };

    this.searchForCard = this.searchForCard.bind(this);
    this.setSearchParamters = this.setSearchParamters.bind(this);
    this.handleSingleCardClick = this.handleSingleCardClick.bind(this);
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
    localStorage.setItem('pokemon', JSON.stringify(json));
    this.setState({ list: json, isSearching: true });
  }

  setSearchParamters(keyword) {
    this.setState({ search: keyword.search });
  }

  async handleSingleCardClick(card) {
    const headers = { 'X-Api-Key': '6ac7ac45-69ff-4e59-ba49-b98b7d5b8b4e' };
    const response = await fetch(`https://api.pokemontcg.io/v2/cards/${card}`, {
      headers
    });
    const json = await response.json();
    localStorage.setItem('selectedCard', JSON.stringify(json));
    this.setState({ madeSelection: true, selectedCard: json.data });
  }

  render() {
    const cardDetailRoute = `/card/${this.state.selectedCard.name}`;

    return (
      <React.Fragment>
        <Navbar />
        {this.state.isSearching ? <Redirect push to="/list" /> : null}
        {this.state.madeSelection ? (
          <Redirect push to={cardDetailRoute} />
        ) : null}
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
                cardList={
                  Object.keys(this.state.list).length > 0
                    ? this.state.list
                    : this.state.storage
                }
                cardClick={this.handleSingleCardClick}
              />
            )}
          />
          <Route
            exact
            path={cardDetailRoute}
            render={() => <CardDetail card={this.state.selectedCard} />}
          />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
