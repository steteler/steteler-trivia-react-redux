/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import inputName from '../Redux/actions/login';
import inputToken from '../Redux/actions/token';
import fetchAPI from '../services/fetchAPI';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      name: '',
      email: '',
      isButtonDisable: true,
      token: '',
    };

    this.saveOnRedux = this.saveOnRedux.bind(this);
  }

  onInputChange = ({ target }) => {
    const { id, value } = target;
    this.setState(
      { [id]: value }, () => this.validationForm(),
    );
  }

  validationForm = () => {
    const minNumber = 1;
    const { name, email } = this.state;

    if (name.length > minNumber && email.length > minNumber) {
      this.setState({ isButtonDisable: false });
    } else {
      this.setState({ isButtonDisable: true });
    }
  }

  async saveOnRedux(name, email) {
    const returnAPI = await fetchAPI();
    this.setState({ token: returnAPI }, () => {
      const { dispatch, history } = this.props;
      const { token } = this.state;
      dispatch(inputName(name, email));
      dispatch(inputToken(token));
      history.push('/game');
    });
  }

  render() {
    const { isButtonDisable, name, email } = this.state;

    return (
      <div>
        <label htmlFor="name">
          Nome:
          <input
            type="text"
            id="name"
            onChange={ this.onInputChange }
            value={ name }
            data-testid="input-player-name"
          />
        </label>

        <label htmlFor="email">
          Email:
          <input
            type="email"
            id="email"
            onChange={ this.onInputChange }
            value={ email }
            data-testid="input-gravatar-email"
          />
        </label>

        <button
          type="button"
          onChange={ this.onInputChange }
          disabled={ isButtonDisable }
          data-testid="btn-play"
          onClick={ () => this.saveOnRedux(name, email) }
        >
          Play
        </button>

      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    props1: state.loginReducer.name,
  };
}

Login.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default connect(mapStateToProps)(Login);
