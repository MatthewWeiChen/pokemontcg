import React from 'react';
import Navbar from './navbar';


class Homepage extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <>
        <Navbar />
        <div>Hello, Homepage</div>
      </>
    )
  }
}

export default Homepage;