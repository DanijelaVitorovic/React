import React, { useState, useEffect, Fragment } from 'react';
import {Modal, Button} from 'react-bootstrap';
import classnames from 'classnames';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import 'date-fns';
import moment from 'moment';
import Tooltip from '@material-ui/core/Tooltip';

const ModalForUpdateAddressBook = (props) => {
  const [state, setState] = useState({
    name:"",
    firstName:"",
    address:"",
    phoneNumber:"",
    photo:"",
    homepage:"",
    birthday: new Date(),
    note:"",
    errors:{},
  });

  useEffect(() => {});

  useEffect(() => {
    let addressBookForUpdate = props.addressBookForUpdate;
    setState({
      ...state,
      name: addressBookForUpdate.name,
      firstName: addressBookForUpdate.firstName,
      address: addressBookForUpdate.address,
      phoneNumber: addressBookForUpdate.phoneNumber,
      photo: addressBookForUpdate.photo,
      homepage: addressBookForUpdate.homepage,
      birthday: addressBookForUpdate.birthday,
      note: addressBookForUpdate.note,
    });

     }, []);

  const handleValidation = () => {
    let errors = {};
    let hasErrors = false;
    let {name, firstName, address} = this.state;

    if (name.length < 2) {
      errors['name'] = "The name must be longer than two characters";
      hasErrors = true;
    }

    if (firstName.length < 2) {
      errors['firstName'] = "The first name must be longer than two characters"
      hasErrors = true;
    }

    if (address) {
      errors['address'] = "Address is a required field";
      hasErrors = true;
    }

    this.setState({errors: errors});
    return hasErrors;
  };

  const onChange = (e) => {
    var {name, value} = e.target;
    setState({ ...state, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    //  if (handleValidation()) {
    //    return;
    //  }

     const  {
      name,
      firstName,
      address,
      phoneNumber,
      photo,
      homepage,
      birthday,
      note,
      } = state || {};


    const newAddressBook = {
      ...state,
      name,
      firstName,
      address,
      phoneNumber,
      photo,
      homepage,
      birthday,
      note,
    };

    props.handleEdit(newAddressBook);
  };

    const {errors} = state;
    const {addressBook, show, closeModal} = props || {};

    return (
      <Modal show={show} centered onHide={closeModal} size="lg">
        <Modal.Header closeButton>
          <h5>Add new address book</h5>
        </Modal.Header>
        <div className="register">
          <div className="container">
            <div className="row">
              <div className="col-md-8 m-auto">
              <br/>
                <form onSubmit={onSubmit}>
                <div className="form-group">
                <input
                  type="text"
                  className={classnames('form-control', {
                    'is-invalid': errors.name,
                  })}
                  placeholder="Name"
                  name="name"
                  value={state.name}
                  onChange={onChange}
                />
                {errors.name && (
                  <div className="invalid-feedback">
                    {errors.name}
                  </div>
                )}
              </div>

              <div className="form-group">
              <input
                type="text"
                className={classnames('form-control', {
                  'is-invalid': errors.firstName,
                })}
                placeholder="First name"
                name="firstName"
                value={state.firstName}
                onChange={onChange}
              />
              {errors.firstName && (
                <div className="invalid-feedback">
                  {errors.firstName}
                </div>
              )}
            </div>

            <div className="form-group">
              <input
                type="text"
                className={classnames('form-control', {
                  'is-invalid': errors.address,
                })}
                placeholder="Address"
                name="address"
                value={state.address}
                onChange={onChange}
              />
              {errors.address && (
                <div className="invalid-feedback">
                  {errors.address}
                </div>
              )}
            </div>

            <div className="form-group">
              <input
                type="text"
                className={classnames('form-control', {
                  'is-invalid': errors.homepage,
                })}
                placeholder="Homepage"
                name="homepage"
                value={state.homepage}
                onChange={onChange}
              />
              {errors.homepage && (
                <div className="invalid-feedback">
                  {errors.homepage}
                </div>
              )}
            </div>

            <div className="form-group">
            <input  name="requested_order_ship_date"  type="date" 
              disabled={false}
              value={ moment(state.birthday).format("DD-MM-YYYY") } 
              className="form-control" 
              onChange={ onChange } 
              />
            </div>

              <div className="form-group">
              <input
                type="text"
                className={classnames('form-control', {
                  'is-invalid': errors.note,
                })}
                placeholder="Note"
                name="note"
                value={state.note}
                onChange={onChange}
              />
              {errors.note && (
                <div className="invalid-feedback">
                  {errors.note}
                </div>
              )}
            </div>
            <div>         
            <label className="col-md-1" style={{ cursor: 'pointer' }}>
                <input 
                id="uploadInput" 
                type="file" 
                name="myFiles"
                accept=".png, .jpg .jpeg" 
                style={{ display: 'none' }}
                fullWidth={true}
                variant='outlined'
                size='small' 
                // style={{ marginTop:"3%" }}
                />
                <Tooltip
                title="Upload photo"
                // placement="top"
                arrow="true"
                style={{marginBottom:"-10%", color:"grey"}}
              >
                <i className="fas fa-paperclip fa-2x" />
              </Tooltip>
              </label>
              <label className="col-md-11" style = {{ color:"grey"}}>
                Upload photo
                <hr />
              </label>
            </div>

                  <div className="text-center">
                    <Button variant="success" type="submit">
                      <i class="fas fa-check fa-2x"></i>
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <br></br>
      </Modal>
    );
  }


export default ModalForUpdateAddressBook;
