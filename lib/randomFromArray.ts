const getRandomIntInclusive = ({
  min = 0,
  max,
}: {
  min?: number;
  max: number;
}) => {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
};

const randomFromArray = (input: string[]) => {
  const randomIndex = getRandomIntInclusive({ max: input.length - 1 });
  return input[randomIndex];
};

export { randomFromArray };
