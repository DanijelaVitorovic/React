import React, { useEffect, useState, useReducer , Fragment} from 'react';
import {
    createAddressBook,
    updateAddressBook,
    findAddressBookById,
    findAllAddressBooks,
    findAllAddressBookPageble,
    deleteAddressBook,
    deleteErrorAddressBook,
} from '../../actions/addressBook';
import AddressBookTable from '../AddressBook/AddressBookTable';
import apiService from '../../utils/apiServices';
import { TablePagination } from '@material-ui/core';
import { connect } from 'react-redux';
import { modalShow, modalHide } from '../../actions/index';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import { Row, Col } from 'react-bootstrap';
import {Button, Badge} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ModalForAddAddressBook from '../AddressBook/ModalForAddAddressBook';

const initialState = {
    loading: false,
    data: '',
    error: null,
    totalElements: 10,
    rowsPerPage: 10,
  };
  
  let type1 = 'addressBookListStart';
  let type2 = 'addressBookListSuccess';
  let type3 = 'addressBookListError';
         
  const reducer = (state, action) => {
    switch (action.type) {
      case type1:
        return {
          ...state,
          loading: true,
          data: '',
        };
      case type2:
        return {
          ...state,
          loading: false,
          data: action.data,
          error: null,
        };
      case type3:
        return {
          ...state,
          loading: false,
          data: null,
          error: 'greska',
        };
      default:
        return state;
    }
  };

  let list = [
    {
      id: 1,
      name: 'Petar Petrovic',
      address: 'Beograd',
      phoneNumber: '0631010101',
    },
    { id: 2, name: 'Nikola Nikolic', address: 'Nis', phoneNumber: '065483927' },
  ]

const AddressBookList = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [activePage, setActivePage] = useState(0);
    const [numberOfItems, setNumberOfItems] = useState(10);
    const[show, setShow] = useState(false);

    const showModal = () => {
      setShow(true);
    };
  
    const closeModal = () => {
      setShow( false);
    };

    const handleAdd = (addressBook) => {
      props.createAddressBook(addressBook);
      closeModal();
    };
  
    const fetchData = (type1, type2, type3, path) => {
      dispatch({ type: type1 });
      apiService
        .get(path)
        .then((res) => {
          dispatch({
            type: type2,
            data: res.data,
          });
        })
        .catch((error) => {
          dispatch({ type: type3 });
        });
    };
    // console.log('state', state);

    
  let path = `/ap/v1/addressBook`;
  useEffect(() => {
   //fetchData(type1, type2, type3, path);
   props.findAllAddressBooks();
    }, []);

  const { isLoadingNeeded, modalShow, modalHide, modals, addressBook } = props || {};

  // if (isLoadingNeeded) {
  //   return <LoadingIndicator />;
  // }

  return (
    <Fragment>
    <div className="container">
    <div className="row">
      <div className="col-md-12 m-auto">
        <div className="card text-left mb-3">
          <div className="card-header text-black">
          <Row>
          <Col md={10}>
            <h3>Address Book</h3>
            </Col>
            <Col md={1} style = {{marginLeft:"8%", marginBottom:"1%"}}>
            <Tooltip title="Add new" arrow>
            <Link style = {{marginRight: "0px", color: "grey"}}
              onClick={() => {
                showModal();
              }}
              to=""
            >
              <i className = 'fas fa-plus fa-3x' />
            </Link>
          </Tooltip>
          </Col>
          </Row>
            <AddressBookTable
            addressBookList={list}
            updateAddressBook = {props.updateAddressBook}
            deleteAddressBook = {props.deleteAddressBook}  
            findAddressBookById = {props.findAddressBookById}
            modalShow={modalShow}
            modalHide={modalHide}
            modals={modals}
            />
            </div>
          </div>
        </div>
      </div>
    </div>
    {show && (
      <ModalForAddAddressBook
      id={addressBook.id}
      show={show}
      modals = {props.modals}
      handleEdit = {handleAdd}
      closeModal={closeModal}
      addressBookList={list}
    /> )}
    </Fragment>
  );
};

function mapStateToProps(state) {
  return {
    addressBook: state.addressBook,
    isLoadingNeeded: state.addressBook.loading,
    modals: state.modals.modals,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    createAddressBook: (addressBook, callback) => {
      dispatch(createAddressBook(addressBook, callback));
    },
    updateAddressBook: (addressBook, callback) => {
      dispatch(updateAddressBook(addressBook, callback));
    },
    deleteErrorAddressBook: () => {
      dispatch(deleteErrorAddressBook());
    },
    deleteAddressBook: (id) => {
      dispatch(deleteAddressBook(id));
    },
    findAddressBookById: (addressBook, callback) => {
      dispatch(findAddressBookById(addressBook, callback));
    },
    findAllAddressBooks: ( callback) => {
      dispatch(findAllAddressBooks( callback));
    },
    modalShow: (name, item) => dispatch(modalShow(name, item)),
    modalHide: (name) => dispatch(modalHide(name)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddressBookList);
