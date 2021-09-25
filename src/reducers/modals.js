import * as actionTypes from '../actions/types';
import * as modalsTypes from '../utils/modals';

const initialState = {
  modals: [
      { name: modalsTypes.ADDRESS_BOOK_UPDATE, show: false, item: {} },
  ],
};

const showModal = (state, action) => {
  const modals = state.modals.map((modal) =>
    changeModalApearing(action.name, true, action.item, modal)
  );

  return {
    ...state,
    modals,
  };
};

const hideModal = (state, action) => {
  const modals = state.modals.map((modal) =>
    changeModalApearing(action.name, false, {}, modal)
  );

  return {
    ...state,
    modals,
  };
};

const changeModalApearing = (name, show, item, modal) => {
  if (modal.name === name) {
    return { name, show, item };
  } else {
    return modal;
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.MODAL_SHOW:
      return showModal(state, action);
    case actionTypes.MODAL_HIDE:
      return hideModal(state, action);
    default:
      return state;
  }
};

export default reducer;
