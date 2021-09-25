import React, { Fragment, useState } from 'react';
import { tableConfig } from './tableConfig';
import Table from '../Reusable/Table/Table';
import TableCard from '../Reusable/Table/TableCard';
import AddressBookRow from './AddressBookRow';
import Modal from '../Reusable/Modal';
import * as modalTypes from '../../utils/modals';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';

const AddressBookTable = (props) => {
  const [show, setShow] = useState(false);

  const handlePreviewClose = (name) => {
    const { modalHide, deleteError } = props || {};
    modalHide(name);
    deleteError();
  };

  const handleAdd = (user) => {
    // props.createAddressBook(user, () =>
    //   handlePreviewClose(modalTypes.ADDRESS_BOOK_UPDATE)
    // );
  };

  const isModalOpened = () => {
    props.isModalOpened(show);
  };

  const {
      t,
      addressBookList,
      deleteError,
      modalShow,
      modals,
      error,
      gt,
    } = props || {},
    { HeaderColumns, titleTable, Tooltips } = t || {};

  const table = (
   <div>
          <TableCard
            title={titleTable}
            //shouldRenderAdd
           // addAction={() => modalShow(modalTypes.ADDRESS_BOOK_UPDATE)}
            tooltipText="Dodaj"
            tableId="addressBook"
            //noSearchColums={2}
          />
          <Table
            config={tableConfig({
              editAction: (item) =>
              modalShow(modalTypes.ADDRESS_BOOK_UPDATE, findAddressBookById(item.id)),
            deleteAction: (item) => onDeleteClick(item?.id),
            })}
            id="addressBook"
            items={props.addressBookList}
            // translations={HeaderColumns}
          />
          </div>
  );

  const addressBook = props.addressBookList.map((addressBook) => (
    <AddressBookRow
      key = {addressBook.id}
      addressBook={addressBook}
      modalShow={props.modalShow}
      modalHide={props.modalHide}
      modals={props.modals}
      updateAddressBook = {props.updateAddressBook}
      deleteAddressBook = {props.deleteAddressBook}
    />
  ));


  return (
    <Fragment>
       <table className="table table-hover">
          <thead className="thead-light">
            <tr className="card-body table-success">
            <th scope="col">#</th>
        <th scope="col">Name</th>
        <th scope="col">Address</th>
        <th scope="col">Phone number</th>
        <th scope="col">Birthday</th>
        <th scope="col" className="text-center">
          Edit
        </th>
        <th scope="col" className="text-center">
         Delete
        </th>
      </tr>
    </thead>
    <tbody>{addressBook}</tbody>
  </table>

    </Fragment>
  );
};

export default AddressBookTable;
