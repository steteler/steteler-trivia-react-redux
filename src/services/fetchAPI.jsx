export default (
  async function fetchAPI() {
    const request = await fetch(
      'https://opentdb.com/api_token.php?command=request',
    );
    const { token } = await request.json();
    return token;
  }
);
