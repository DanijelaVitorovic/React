import * as actionTypes from './types';

export const modalShow = (name, item) => {
  return {
    type: actionTypes.MODAL_SHOW,
    name: name,
    item: item,
  };
};

export const modalHide = (name) => {
  return {
    type: actionTypes.MODAL_HIDE,
    name: name,
  };
};
