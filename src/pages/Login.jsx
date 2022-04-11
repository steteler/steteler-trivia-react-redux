import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import inputName from '../Redux/actions/login';
import inputToken from '../Redux/actions/token';
import fetchAPI from '../services/fetchAPI';
// import gravatarUrl from '../Redux/actions/gravatarImg';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      name: '',
      email: '',
      isButtonDisable: true,
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
    const { dispatch, history } = this.props;
    dispatch(inputName(name, email));
    dispatch(inputToken(returnAPI));
    // dispatch(gravatarUrl(imgURL));
    history.push('/game');
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
