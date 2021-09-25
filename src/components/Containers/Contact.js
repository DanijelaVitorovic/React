import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Grid } from '@material-ui/core';

class Contact extends Component {
  constructor() {
    super();
    this.state = {
      showUpdate: false,
    };
  }


  render() {
   

    return (
      <form style = {{width:"60%", marginLeft:"23%"}}>
  <div class="form-group" >
    <label for="exampleFormControlInput1">Email address</label>
    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@mail.com" />
  </div>
  <div class="form-group" >
  <label for="exampleFormControlInput1">Name</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Name" />
</div>
  <div class="form-group" >
  <label for="exampleFormControlInput1">Phone</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Phone" />
</div>
  <div class="form-group">
    <label for="exampleFormControlTextarea1">Message</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Message"></textarea>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
  <br/> 
  <br/> <br/>
</form>
    )
  }
}

export default Contact;
