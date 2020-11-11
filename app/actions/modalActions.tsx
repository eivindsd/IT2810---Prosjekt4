import { SET_MODAL } from "./types";

export const setModal = (pmodal: boolean) => {
  console.log("Modal");
  return {
    type: SET_MODAL,
    payload: pmodal,
  };
};
