export const getAllSubstrings = (str: string): string[] => {
  let result = [];
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length + 1; j++) {
      result.push(str.slice(i, j));
    }
  }
  return result;
};

export const makeGroupStringFromNumbers = (components: number[]): string => {
  return makeGroupString(components.map((c) => c.toString()));
};

export const makeGroupString = (components: string[]): string => {
  switch (components.length) {
    case 1:
      return components[0];
    case 2:
      return `${components[0]} and ${components[1]}`;
    case 3:
      return `${components[0]}, ${components[1]}, and ${components[2]}`;
    case 4:
      return `${components[0]}, ${components[1]}, ${components[2]}, and ${components[3]}`;
  }

  return 'OVERLOAD OVERLOAD OVERLOAD';
};
