export const generateRandomNumber = (
  min: number,
  step: number,
  maxSteps: number
) => {
  return Math.floor(Math.random() * maxSteps) * step + min;
};
