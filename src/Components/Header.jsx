import React, { Component } from 'react';
import md5 from 'crypto-js/md5';
// import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  constructor() {
    super();
    this.state = {
      imgURL: '',
      gravatarEmail: '',
    };
  }

  componentDidMount() {
    this.getImage();
  }

  getImage = () => {
    const { email } = this.props;
    const Hash = md5(email).toString();
    const imgURL = `https://www.gravatar.com/avatar/${Hash}`;
    this.state({ imgURL });
  }

  render() {
    const { imgURL } = this.state;
    return (
      <div>
        <img data-testid="header-profile-picture" src={ imgURL } alt="imgURL" />
        <p
          data-testid="header-player-name"
        >
          Player Name
        </p>
        <p data-testid="header-score">
          Score
        </p>

      </div>
    );
  }
}

// const mapStateToProps = (dispatch) => ({
//   email:
// });

Header.propTypes = ({
  email: PropTypes.string,
}).isRequired;

export default Header;
