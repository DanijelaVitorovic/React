import { combineReducers } from 'redux';
import addressBook from './addressBook';
import modals from './modals';

export default combineReducers({
  addressBook: addressBook,
  modals: modals,
});
