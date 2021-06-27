import React from 'react';
import { Form, FormControl, InputGroup } from 'react-bootstrap';
import snorlax from '../images/snorlax.png';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      search: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.search(this.state.search);
  }

  handleChange(event) {
    this.props.setParameter({ search: event.target.value });
    this.setState({ search: event.target.value });
  }

  render() {
    return (
      <>
        <Form className="mt-3" onSubmit={this.handleSubmit}>
          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text>
                <img src={snorlax} alt="snorlax" width="25" />
              </InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              type="text"
              placeholder="Search for a Card"
              className="search-bar"
              onChange={this.handleChange}
            />
          </InputGroup>
        </Form>
      </>
    );
  }
}

export default SearchBar;
