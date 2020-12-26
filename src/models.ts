export enum TokenType {
  PRIME = "prime",
  SQUARE = "square",
  CUBE = "cube",
  FIBONACCI = "fibonacci",
  BIRTHDAY = "birthday",
  MISC = "misc",
}

export interface Token {
  type: TokenType;
  relevance: number;
  description: string;
}
