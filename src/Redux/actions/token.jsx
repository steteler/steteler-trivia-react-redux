export const INPUT_TOKEN = 'INPUT_TOKEN';

const inputToken = (token) => ({
  type: INPUT_TOKEN,
  token,
});

export default inputToken;
