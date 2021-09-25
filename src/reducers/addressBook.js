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
  } from '../actions/types';
  
  const initialState = {
    addressBookList: [],
    addressBook: {},
    loading: false,
    error: undefined,
    totalElements: '',
  };
  
  const clearError = (state) => {
    return {
      ...state,
      error: undefined,
    };
  };
  
  const addAddressBookStart = (state) => {
    return {
      ...state,
    };
  };
  
  const addAddressBook = (state, action) => {
    return {
      ...state,
      loading: false,
      addressBookList: state.addressBookList.concat(action.payload),
    };
  };
  
  const addAddressBookError = (state, action) => {
    return {
      ...state,
      error: action.payload,
      loading: false,
    };
  };
  
  const updateAddressBookStart = (state) => {
    return {
      ...state,
    };
  };
  
  const updateAddressBook = (state, action) => {
    return {
      ...state,
  
      addressBookList: state.addressBookList.map((addressBook) =>
      addressBook.id === action.payload.id ? action.payload : addressBook
      ),
      loading: false,
    };
  };
  
  const updateAddressBookError = (state, action) => {
    return {
      ...state,
      error: action.payload,
      loading: false,
    };
  };
  
  const findAddressBookByIdStart = (state) => {
    return {
      ...state,
      loading: true,
    };
  };
  
  const findAddressBookById = (state, action) => {
    return {
      ...state,
      loading: false,
      addressBook: action.payload,
    };
  };
  
  const findAddressBookByIdError = (state, action) => {
    return {
      ...state,
      error: action.payload,
      loading: false,
    };
  };
  
  const findAllAddressBookStart = (state) => {
    return {
      ...state,
      loading: true,
    };
  };
  
  const findAllAddressBook = (state, action) => {
    return {
      ...state,
      loading: false,
      addressBookList: action.payload,
    };
  };
  
  const findAllAddressBookError = (state, action) => {
    return {
      ...state,
      error: action.payload,
      loading: false,
    };
  };
  
  const deleteAddressBookStart = (state) => {
    return {
      ...state,
      loading: true,
    };
  };
  
  const deleteAddressBook = (state, action) => {
    return {
      ...state,
      loading: false,
      addressBookList: state.addressBookList.filter(
        (addressBook) => addressBook.id !== action.payload
      ),
    };
  };
  
  const deleteAddressBookError = (state, action) => {
    return {
      ...state,
      error: action.payload,
      loading: false,
    };
  };
  
  const findAllAddressBookPageable = (state, action) => {
    return {
      ...state,
      loading: false,
      addressBookList: action.payload[0],
      numberOfPages: action.payload[1],
      totalElements: action.payload[2],
    };
  };
  
  export default function (state = initialState, action) {
    switch (action.type) {
      case ADD_ADDRESS_BOOK:
        return addAddressBook(state, action);
      case ADD_ADDRESS_BOOK_START:
        return addAddressBookStart(state);
      case ADD_ADDRESS_BOOK_ERROR:
        return addAddressBookError(state, action);
  
      case UPDATE_ADDRESS_BOOK:
        return updateAddressBook(state, action);
      case UPDATE_ADDRESS_BOOK_START:
        return updateAddressBookStart(state);
      case UPDATE_ADDRESS_BOOK_ERROR:
        return updateAddressBookError(state, action);
  
      case GET_ADDRESS_BOOK:
        return findAddressBookById(state, action);
      case GET_ADDRESS_BOOK_START:
        return findAddressBookByIdStart(state);
      case GET_ADDRESS_BOOK_ERROR:
        return findAddressBookByIdError(state, action);
  
      case GET_ADDRESS_BOOK_LIST:
        return findAllAddressBook(state, action);
      case GET_ADDRESS_BOOK_LIST_START:
        return findAllAddressBookStart(state);
      case GET_ADDRESS_BOOK_LIST_ERROR:
        return findAllAddressBookError(state, action);
  
      case DELETE_ADDRESS_BOOK:
        return deleteAddressBook(state, action);
      case DELETE_ADDRESS_BOOK_START:
        return deleteAddressBookStart(state);
      case DELETE_ADDRESS_BOOK_ERROR:
        return deleteAddressBookError(state, action);
        
      case CLEAR_ERROR_ADDRESS_BOOK:
        return clearError(state);
  
      case GET_ADDRESS_BOOK_LIST_PAGEABLE:
        return findAllAddressBookPageable(state, action);
  
      default:
        return state;
    }
  }
  