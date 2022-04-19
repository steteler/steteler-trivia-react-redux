export const INPUT_TIMER = 'INPUT_TIMER';

const timerCount = (timer) => ({
  type: INPUT_TIMER,
  timer,
});

export default timerCount;
