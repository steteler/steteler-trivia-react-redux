export const SCORE_COUNT = 'SCORE_COUNT';

const scoreCount = (score) => ({
  type: SCORE_COUNT,
  score,
});

export default scoreCount;
