export default (
  async function getQuestions(token) {
    const request = await fetch(
      `https://opentdb.com/api.php?amount=5&token=${token}`,
    );
    const { results } = await request.json();
    return results;
  }
);
