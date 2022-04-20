import React, { Component } from 'react';
import { connect } from 'react-redux';
import md5 from 'crypto-js/md5';
import PropTypes from 'prop-types';
import '../style/Header.css';

class Header extends Component {
  constructor() {
    super();

    this.state = {
      gravatarUrl: '',
    };

    this.getImage = this.getImage.bind(this);
  }

  componentDidMount() {
    this.getImage();
  }

  getImage() {
    const { email } = this.props;
    const hash = md5(email).toString();
    this.setState({
      gravatarUrl: `https://www.gravatar.com/avatar/${hash}`,
    });
  }

  render() {
    const { gravatarUrl } = this.state;
    const { nameUser, score } = this.props;
    return (
      <header className="header-container">
        <div className="header-img-user">
          <img
            data-testid="header-profile-picture"
            className="header-img"
            src={ gravatarUrl }
            alt={ nameUser }
          />
          <span data-testid="header-player-name">
            { `Jogador: ${nameUser}` }
          </span>
        </div>
        <section>
          <span>Pontos: </span>
          <span data-testid="header-score">
            {score}
          </span>
        </section>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  nameUser: state.player.name,
  email: state.player.gravatarEmail,
  score: state.player.score,
});

Header.propTypes = {
  nameUser: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
};

export default connect(mapStateToProps)(Header);
