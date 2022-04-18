export default (
  async function fetchAPI() {
    const endPoint = 'https://opentdb.com/api_token.php?command=request';
    const request = await fetch(endPoint);
    const { token } = await request.json();
    return token;
  }
);
