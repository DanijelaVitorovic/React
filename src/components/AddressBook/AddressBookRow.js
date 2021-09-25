import React, {Fragment, useState} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {Button, Badge} from 'react-bootstrap';
import * as modalTypes from '../../utils/modals';
import { getModalInfo } from '../../../utils';
import ModalForUpdateAddressBook from './ModalForUpdateAddressBook';
import { confirmDialog } from '../Reusable/ConfirmDialog';

const AddressBookRow = (props) => {
  const[show, setShow] = useState(false);

  const showModal = () => {
    setShow(true);
  };

  const closeModal = () => {
    setShow( false);
  };

  const handlePreviewClose = (name) => {
    const { modalHide } = props || {};
    modalHide(name);
    props.modals[0].show = false;
  };


  const handleEdit = (addressBook) => {
    props.updateAddressBook(addressBook);
    closeModal();
  };

  const onDeleteClick = (id) => {
    // const translation = "Do you really want to delete?"
    // const action = () => {
    //   props.deleteAddressBook(id);
    // };
    // console.log('sassss', id);
    
    // confirmDialog(
    //   translation,
    //   action,
    //   translation,
    // );

    if (
      window.confirm(
        "Are you sure? This will delete the address book and all the data related to it"
      )
    ) {
      props.deleteAddressBook(id);
    }

  };

 
    const {addressBook} =
      props || {};
      
    const modalUpdate = getModalInfo(props.modals, modalTypes.ADDRESS_BOOK_UPDATE);

    const row = (
      <tr>
      <td>{addressBook.id}</td>
        <td>{addressBook.name}</td>
        <td>{addressBook.address}</td>
        <td>{addressBook.phoneNumber}</td>
        <td>{addressBook.birthday || ""}</td>
        <td className="text-center">
        <Button onClick= { () => showModal()}>
        <i className="fas fa-edit" />
      </Button>
        </td>
        <td className="text-center">
        <Button  onClick={() => onDeleteClick(addressBook.id)}>
        <i className="fas fa-trash-alt" />
      </Button>
        </td>
      </tr>
    );
console.log('shh', show);

    return (
      <Fragment>
        {row}
          {show && (
            <ModalForUpdateAddressBook
            id={addressBook.id}
            show={show}
            addressBookForUpdate={addressBook}
            modals = {props.modals}
            updateAddressBook = {props.updateAddressBook}
            handleEdit = {handleEdit}
            closeModal={closeModal}
            // handleUpdate={this.handleUpdate}
            // getProcess={getProcess}
          />
      )}
      </Fragment>
    );
}

export default AddressBookRow;
