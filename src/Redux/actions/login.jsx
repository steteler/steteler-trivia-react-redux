export const INPUT_NAME = 'INPUT_NAME';

const inputName = (name, gravatarEmail) => ({
  type: INPUT_NAME,
  name,
  gravatarEmail,
});

export default inputName;
