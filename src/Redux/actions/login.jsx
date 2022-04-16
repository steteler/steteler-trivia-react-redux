export const INPUT_NAME = 'INPUT_NAME';

const inputName = (name, gravatarEmail, score) => ({
  type: INPUT_NAME,
  name,
  // assertions,
  score,
  gravatarEmail,
});

export default inputName;
