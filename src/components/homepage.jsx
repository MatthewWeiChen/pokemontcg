import React from 'react';
import SearchBar from './searchbar';
import { Container, Row, Col } from 'react-bootstrap';

class Homepage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <div className="wrapper">
          <Container>
            <Row>
              <Col>
                <div className="text-center text-white title pokemon-font">
                  Pokémon TCG Search
                </div>
                <div className="text-center subtitle">Gotta Catch 'Em All </div>
                <SearchBar
                  search={this.props.search}
                  setParameter={this.props.setParameter}
                />
                <div className="text-center text-white">
                  Try <span>"Charizard"</span> or <span>"Pikachu"</span> or any{' '}
                  <span>Pokémon name</span>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </>
    );
  }
}

export default Homepage;
