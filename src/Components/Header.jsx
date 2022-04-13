import React, { Component } from 'react';
import { connect } from 'react-redux';
import md5 from 'crypto-js/md5';
import PropTypes from 'prop-types';

class Header extends Component {
  constructor() {
    super();
    this.state = {
      gravatarUrl: '',
      score: 0,
    };
  }

  componentDidMount() {
    this.getImage();
  }

  getImage = () => {
    const { email } = this.props;
    const Hash = md5(email).toString();
    const imgURL = `https://www.gravatar.com/avatar/${Hash}`;
    // console.log(imgURL);
    this.setState({
      gravatarUrl: imgURL,
    });
  }

  render() {
    const { gravatarUrl, score } = this.state;
    const { nameUser } = this.props;
    // console.log(nameUser);
    return (
      <div>
        <img data-testid="header-profile-picture" src={ gravatarUrl } alt="imgURL" />
        <p
          data-testid="header-player-name"
        >
          { nameUser }
        </p>
        <p data-testid="header-score">
          { score }
        </p>

      </div>
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
