import apiService from '../utils/apiServices';

import {
    ADD_ADDRESS_BOOK,
    ADD_ADDRESS_BOOK_START, 
    ADD_ADDRESS_BOOK_ERROR,
    UPDATE_ADDRESS_BOOK,
    UPDATE_ADDRESS_BOOK_START,
    UPDATE_ADDRESS_BOOK_ERROR,
    GET_ADDRESS_BOOK,
    GET_ADDRESS_BOOK_START,
    GET_ADDRESS_BOOK_ERROR,
    GET_ADDRESS_BOOK_LIST,
    GET_ADDRESS_BOOK_LIST_START,
    GET_ADDRESS_BOOK_LIST_ERROR,
    GET_ADDRESS_BOOK_LIST_PAGEABLE,
    DELETE_ADDRESS_BOOK,
    DELETE_ADDRESS_BOOK_START,
    DELETE_ADDRESS_BOOK_ERROR,
    CLEAR_ERROR_ADDRESS_BOOK
} from './types';

import {
    addressBookAddPath,
    addressBookUpdatePath,
    addressBookFindByIdPath,
    addressBookFindAllPath,
    addressBookFindAllPageablePath,
    addressBookDeletePath,
} from '../constants/apiEndpoints';

const clearError = () => {
  return {
    type: CLEAR_ERROR_ADDRESS_BOOK,
  };
};

const addAddressBookStart = () => {
  return {
    type: ADD_ADDRESS_BOOK_START,
  };
};
const addAddressBookSuccessfully = (data) => {
  return {
    type: ADD_ADDRESS_BOOK,
    payload: data,
  };
};
const addAddressBookUnsuccessfully = (err) => {
  return {
    type: ADD_ADDRESS_BOOK_ERROR,
    payload: err,
  };
};

const updateAddressBookStart = () => {
  return {
    type: UPDATE_ADDRESS_BOOK_START,
  };
};
const updateAddressBookSuccessfully = (data) => {
  return {
    type: UPDATE_ADDRESS_BOOK,
    payload: data,
  };
};
const updateAddressBookUnsuccessfully = (err) => {
  return {
    type: UPDATE_ADDRESS_BOOK_ERROR,
    payload: err,
  };
};

const getAddressBookStart = () => {
  return {
    type: GET_ADDRESS_BOOK_START,
  };
};
const getAddressBookSuccessfully = (data) => {
  return {
    type: GET_ADDRESS_BOOK,
    payload: data,
  };
};
const getAddressBookUnsuccessfully = (err) => {
  return {
    type: GET_ADDRESS_BOOK_ERROR,
    payload: err,
  };
};

const getAddressBookListStart = () => {
  return {
    type: GET_ADDRESS_BOOK_LIST_START,
  };
};
const getAddressBookListSuccessfully = (data) => {
  return {
    type: GET_ADDRESS_BOOK_LIST,
    payload: data,
  };
};

const getAddressBookPageableListSuccessfully = (
  data,
  pageNumber,
  totalElements
) => {
  return {
    type: GET_ADDRESS_BOOK_LIST_PAGEABLE,
    payload: [data, pageNumber, totalElements],
  };
};

const getAddressBookListUnsuccessfully = (err) => {
  return {
    type: GET_ADDRESS_BOOK_LIST_ERROR,
    payload: err,
  };
};

const deleteAddressBookStart = () => {
  return {
    type: DELETE_ADDRESS_BOOK_START,
  };
};
const deleteAddressBookSuccessfully = (id) => {
  return {
    type: DELETE_ADDRESS_BOOK,
    payload: id,
  };
};
const deleteAddressBookUnsuccessfully = (err) => {
  return {
    type: DELETE_ADDRESS_BOOK_ERROR,
    payload: err,
  };
};

export const createAddressBook = (addressBook, callback) => {
  return (dispatch) => {
    dispatch(addAddressBookStart());
    return apiService
      .post(addressBookAddPath(), addressBook)
      .then((response) => {
        dispatch(addAddressBookSuccessfully(response.data));
        callback();
      })
      .catch((err) => {
        dispatch(addAddressBookUnsuccessfully(err?.response?.data));
      });
  };
};

export const updateAddressBook = (addressBook, callback) => {
  return (dispatch) => {
    dispatch(updateAddressBookStart());
    return apiService
      .post(addressBookUpdatePath(), addressBook)
      .then((response) => {
        dispatch(updateAddressBookSuccessfully(response.data));
        callback();
      })
      .catch((err) => {
        dispatch(updateAddressBookUnsuccessfully(err?.response?.data));
      });
  };
};

export const findAddressBookById = (id) => {
  return (dispatch) => {
    dispatch(getAddressBookStart());
    return apiService
      .get(addressBookFindByIdPath(id))
      .then((response) => {
        dispatch(getAddressBookSuccessfully(response.data));
      })
      .catch((err) => {
        dispatch(getAddressBookUnsuccessfully(err?.response?.data));
      });
  };
};

export const findAllAddressBooks = () => {
  return (dispatch) => {
    dispatch(getAddressBookListStart());
    return apiService
      .get(addressBookFindAllPath())
      .then((response) => {
        dispatch(getAddressBookListSuccessfully(response.data));
      })
      .catch((err) => {
        dispatch(getAddressBookListUnsuccessfully(err?.response?.data));
      });
  };
};

export const findAllAddressBookPageble = (pageNumber, pageSize) => {
  return (dispatch) => {
    dispatch(getAddressBookListStart());
    return apiService
      .get(addressBookFindAllPageablePath(pageNumber, pageSize))
      .then((response) => {
        dispatch(
            getAddressBookPageableListSuccessfully(
            response.data.content,
            response.data.totalPages,
            response.data.totalElements
          )
        );
      })
      .catch((err) => {
        dispatch(getAddressBookListUnsuccessfully(err?.response?.data));
      });
  };
};

export const deleteAddressBook = (id) => {
  return (dispatch) => {
    dispatch(deleteAddressBookStart());
    return apiService
      .delete(addressBookDeletePath(id))
      .then(() => {
        dispatch(deleteAddressBookSuccessfully(id));
      })
      .catch((err) => {
        dispatch(deleteAddressBookUnsuccessfully(err?.response?.data));
      });
  };
};

export const deleteErrorAddressBook = () => {
  return (dispatch) => {
    dispatch(clearError());
  };
};
