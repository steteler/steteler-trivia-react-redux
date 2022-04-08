export default (

  async function fetchAPI() {
    const endPoint = 'https://opentdb.com/api_token.php?command=request';
    const request = await fetch(endPoint);
    const data = await request.json();
    return data.token;
  }
);
