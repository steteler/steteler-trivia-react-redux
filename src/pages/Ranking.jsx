import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Ranking extends Component {
  render() {
    return (
      <div>
        <div data-testid="ranking-title">
          <div>
            {/* data-testid={ `player-name-${index}` }
              data-testid={ `player-score-${index}` } */}
            <p>colocar o name</p>
            <p>colocar o score</p>
          </div>
          <Link
            to="/"
            data-testid="btn-go-home"
          >
            home screen
          </Link>
        </div>
      </div>
    );
  }
}

export default Ranking;
