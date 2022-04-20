export const ASSERTIONS_COUNT = 'ASSERTIONS_COUNT';

const assertionsCount = (assertions) => ({
  type: ASSERTIONS_COUNT,
  assertions,
});

export default assertionsCount;
