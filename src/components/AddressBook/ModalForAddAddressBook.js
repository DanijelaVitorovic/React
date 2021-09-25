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
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { TextField } from '@material-ui/core';

const ModalForAddAddressBook = (props) => {
    const [count, setCount] = useState(1);
  const [state, setState] = useState({
    name:"",
    firstName:"",
    address:"",
    phoneNumber:[],
    phone:"",
    homepage:"",
    birthday: "",
    note:"",
    errors:{},
  });

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
    console.log('name', name, value);
    
    setState({ ...state, [name]: value });
  };

  const onChangeCount = () => {
      setCount(count + 1);
    }


    const handleOnChange = (event, i) => {
        //onChange(event.target?.value ? event.target.value : '');
        state.phoneNumber[i ] = event.target?.value ? event.target.value : '';
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
      homepage,
      birthday,
      note,
    };

    props.addressBookList = props.addressBookList.concat(newAddressBook);

    let formData = new FormData();
       formData.append(
          'addressBook',
          new Blob([JSON.stringify(newAddressBook)], {
            type: 'application/json',
          })
        );
        formData.append(
          'photo',
          new Blob([JSON.stringify(state.photo)], {
            type: 'application/json',
          })
        );
      
      console.log('formData', formData);
      
    props.handleEdit(formData);
  };

    const {errors} = state;
    const {addressBook, show, closeModal} = props || {};

    const sequence = [];
    sequence.length = count || 1;
    
        for (let i = 0; i < count; i++) {
            sequence[i] = (
            <div className="form-group">
            <TextField
            placeholder="Phone"
            name="phoneNumber"
            style={{ marginLeft: '-2.5%', width: '130%' }}
            onChange={(event) => handleOnChange(event, i)}
            variant='outlined'
            size='small'
          />
          </div>
            );
          }
    
console.log('state', state);

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
                <TextField
                placeholder="Name"
                name="name"
                style={{ marginLeft: '-1.5%', width: '110%' }}
                onChange={(event) => onChange(event)}
                variant='outlined'
                size='small'
              />
                {errors.name && (
                  <div className="invalid-feedback">
                    {errors.name}
                  </div>
                )}
              </div>

              <div className="form-group">
              <TextField
              placeholder="First name"
              name="firstName"
              style={{ marginLeft: '-1.5%', width: '110%' }}
              onChange={(event) => onChange(event)}
              variant='outlined'
              size='small'
            />
              {errors.firstName && (
                <div className="invalid-feedback">
                  {errors.firstName}
                </div>
              )}
            </div>

            <div className="form-group">
            <TextField
            placeholder="Address"
            value={state.address}
            name="address"
            style={{ marginLeft: '-1.5%', width: '110%' }}
            onChange={(event) => onChange(event)}
            variant='outlined'
            size='small'
          />
              {errors.address && (
                <div className="invalid-feedback">
                  {errors.address}
                </div>
              )}
            </div>

            <div>
            <Row >
            <Col md={8}>
            {sequence}
            </Col>
            
            <Col md={1} style = {{marginLeft:"20%"}}>
            <Tooltip title="Add phone" placement="top" arrow="true">
            <Link
              onClick={() => onChangeCount()}
            >
              <i className= 'fas fa-plus fa-2x' />
            </Link>
          </Tooltip>
            </Col>
            </Row></div>
          

            <div className="form-group">
            <TextField
            placeholder="Homepage"
            value={state.homepage}
            name="homepage"
            style={{ marginLeft: '-1.5%', width: '110%' }}
            onChange={(event) => onChange(event)}
            variant='outlined'
            size='small'
          />
          {errors.homepage && (
                <div className="invalid-feedback">
                  {errors.homepage}
                </div>
              )}
            </div>

            <div className="form-group" >
            <TextField
              type="date" 
              placeholder="Birthday"
              name="birthday"
              onChange={(event) => onChange(event)} 
              size='small'
              margin="none"
              format="dd/MM/yyyy"
              id={`date-picker-dialog-${name}`}
              />
            </div>

              <div className="form-group">
              <TextField
              placeholder="Note"
              value={state.note}
              name="note"
              style={{ marginLeft: '-1.5%', width: '110%' }}
              onChange={(event) => onChange(event)}
              variant='outlined'
              size='small'
            />
              {errors.note && (
                <div className="invalid-feedback">
                  {errors.note}
                </div>
              )}
            </div>
            <div className="d-flex" style={{ paddingTop: '3%' }}>
            <label className="col-md-1" style={{ cursor: 'pointer' }}>
              <input
              type="file"
              id="file"
                name="phone"
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


export default ModalForAddAddressBook;
