export const TIMER = 'TIMER';

const timerCount = (timer) => ({
  type: TIMER,
  timer,
});

export default timerCount;
