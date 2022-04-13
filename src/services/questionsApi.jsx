const getQuestions = async (token) => {
  const endPoint = `https://opentdb.com/api.php?amount=5&token=${token}`;
  const request = await fetch(endPoint);
  const data = await request.json();
  // console.log(data);
  return data;
};

export default getQuestions;
