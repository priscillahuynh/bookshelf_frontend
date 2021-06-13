import './App.css';
import React from 'react'
import {connect} from 'react-redux';
import {fetchShelves} from './actions/fetchShelves'
import ShelvesContainer from './containers/ShelvesContainer'

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <ShelvesContainer />
      </div>
    );
  }

  
}

export default connect(null, {fetchShelves})(App);
