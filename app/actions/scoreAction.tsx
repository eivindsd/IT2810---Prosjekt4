import { GET_SCORE } from "./types";

//Redux-action for updating the global score-state for sorting on score
export const getScore = (score: number) => {
  return {
    type: GET_SCORE,
    payload: score,
  };
};
