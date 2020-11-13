import { SET_CLUB } from "./types";

//Redux-action for updating the global club-state for sorting on clubs
export const setClub = (club: string) => {
  return { 
    type: SET_CLUB, 
    payload: club 
  };
};
