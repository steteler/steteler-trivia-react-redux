import React from 'react';
import Header from '../Components/Header';

class Game extends React.Component {
  componentDidMount() {
    // console.log('OLÁ MUNDO');
  }

  render() {
    return (
      <>
        <Header />
        <div>
          <p>Page game</p>
        </div>
      </>
    );
  }
}
export default Game;
