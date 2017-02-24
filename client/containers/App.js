import React from 'react';
import Nav from '../components/Nav';
import Buckets from '../components/buckets/buckets';

class App extends React.Component {
  componentDidMount() {
    $(".button-collapse").sideNav();
  }

  render() {
    return (
      <div>
        <Nav />
        <Buckets />
      </div>
    );
  }
}

export default App;
