import { SET_AGE } from "./types";

//Redux-action for updating the global age-state for sorting on age
export const setAge = (age: number) => {
  return {
    type: SET_AGE,
    payload: age,
  };
};
