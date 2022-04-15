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
      score: 0,
    };

    this.getImage = this.getImage.bind(this);
  }

  componentDidMount() {
    this.getImage();
  }

  getImage() {
    const { email } = this.props;
    const Hash = md5(email).toString();
    const imgURL = `https://www.gravatar.com/avatar/${Hash}`;
    this.setState({
      gravatarUrl: imgURL,
    });
  }

  render() {
    const { gravatarUrl, score } = this.state;
    const { nameUser } = this.props;
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
        <span data-testid="header-score">
          { `Pontos: ${score}` }
        </span>

      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  nameUser: state.loginReducer.name,
  email: state.loginReducer.gravatarEmail,
});

Header.propTypes = ({
  nameUser: PropTypes.string,
}).isRequired;

export default connect(mapStateToProps)(Header);
