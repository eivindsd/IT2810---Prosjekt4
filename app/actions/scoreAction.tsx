import { GET_SCORE } from "./types";

export const getScore = (score: number) => {
  return {
    type: GET_SCORE,
    payload: score,
  };
};
