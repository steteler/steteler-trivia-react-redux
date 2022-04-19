import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import inputName from '../Redux/actions/login';
import inputToken from '../Redux/actions/token';
import fetchAPI from '../services/fetchAPI';
import triviaLogo from '../trivia.png';

class Login extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
      email: '',
      isButtonDisable: true,
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.validationForm = this.validationForm.bind(this);
    this.saveOnRedux = this.saveOnRedux.bind(this);
  }

  onInputChange({ target: { id, value } }) {
    this.setState({ [id]: value }, () => this.validationForm());
  }

  validationForm() {
    const minNumber = 1;
    const { name, email } = this.state;

    if (name.length > minNumber && email.length > minNumber) {
      this.setState({ isButtonDisable: false });
    } else {
      this.setState({ isButtonDisable: true });
    }
  }

  async saveOnRedux(name, email) {
    const { dispatch, history } = this.props;
    dispatch(inputName(name, email));
    dispatch(inputToken(await fetchAPI()));
    history.push('/game');
  }

  render() {
    const { name, email, isButtonDisable } = this.state;

    return (
      <div>
        <img src={ triviaLogo } alt="trivia logo" />
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
        <Link to="/Settings">
          <button
            className="button"
            data-testid="btn-settings"
            type="button"
          >
            Configurações
          </button>
        </Link>
      </div>
    );
  }
}

Login.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect()(Login);
