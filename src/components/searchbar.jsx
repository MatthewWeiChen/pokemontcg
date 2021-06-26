import React from 'react';
import { Form, FormControl, InputGroup } from 'react-bootstrap';
import snorlax from '../images/snorlax.png';

class SearchBar extends React.Component {
  render() {
    return (
      <>
        <Form className="mt-3">
          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text>
                <img src={snorlax} alt="snorlax" width="25" />
              </InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              type="text"
              placeholder="Type a Card Name"
              className="search-bar"
            />
          </InputGroup>
        </Form>
      </>
    );
  }
}

export default SearchBar;
