import { SET_MODAL } from "./types";

export const setModal = (pmodal: boolean) => {
  return {
    type: SET_MODAL,
    payload: pmodal,
  };
};
