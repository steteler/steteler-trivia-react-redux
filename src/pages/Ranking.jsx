import React from 'react';
import PropTypes from 'prop-types';

class Ranking extends React.Component {
    homeScreen = () => {
      const { history } = this.props;
      history.push('/');
    }

    render() {
      return (
        <div>

          <div
            data-testid="ranking-title"
          >
            <div>
              {/* data-testid={ `player-name-${index}` }
              data-testid={ `player-score-${index}` } */}
              <p>colocar o name</p>
              <p>colocar o score</p>
            </div>
            <button
              onClick={ this.homeScreen }
              type="button"
              data-testid="btn-go-home"
            >
              home screen
            </button>
          </div>
        </div>
      );
    }
}

Ranking.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Ranking;
