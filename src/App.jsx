import React from 'react';
import Homepage from './components/homepage'

class App extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <>
        <Homepage/>
      </>
    )
  }
}

export default App;