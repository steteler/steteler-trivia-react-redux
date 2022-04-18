const getQuestions = async (token) => {
  const endPoint = `https://opentdb.com/api.php?amount=5&token=${token}`;
  const request = await fetch(endPoint);
  const { results } = await request.json();
  return results;
};

export default getQuestions;
