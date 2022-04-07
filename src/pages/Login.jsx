import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { nameInput } from '../Redux/actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      isLoginButtonDisabled: true,
    };
  }

  onInputChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value }, () => this.validationForm());
  }

  validationForm = () => {
    const minimNumber = 1;
    const { name, email } = this.state;

    if (name.length > minimNumber && email.length > minimNumber) {
      this.setState({ isLoginButtonDisabled: false });
    } else {
      this.setState({ isLoginButtonDisabled: true });
    }
  }

  render() {
    const { isLoginButtonDisabled, name, email } = this.state;
    const { savedUser } = this.props;

    return (
      <div>
        <form>
          <label htmlFor="nameInput">
            Nome:
            <input
              type="text"
              name="name"
              data-testid="input-player-name"
              placeholder="Name"
              onChange={ this.onInputChange }
              value={ name }

            />
          </label>
          <label htmlFor="emailInput">
            email:
            <input
              type="email"
              name="email"
              data-testid="input-gravatar-email"
              placeholder="email"
              onChange={ this.onInputChange }
              value={ email }
            />
          </label>
          <Link to="/game">
            <button
              data-testid="btn-play"
              type="button"
              disabled={ isLoginButtonDisabled }
              onClick={ () => savedUser(name, email) }
            >
              Play
            </button>
          </Link>
          <Link to="/Settings">
            <button
              className="button"
              data-testid="btn-settings"
              type="button"
            >
              Configurações
            </button>
          </Link>
        </form>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  savedUser: (nome, email) => dispatch(nameInput(nome, email)),
});

Login.propTypes = ({
  savedUser: PropTypes.func.isRequired,
});

export default connect(null, mapDispatchToProps)(Login);
