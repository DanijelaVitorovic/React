import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';
import AddressBookList from './components/Containers/AdressBookList';
import Contact from './components/Containers/Contact';
import Footer from './components/Navigation/Footer';
import Header from './components/Navigation/Header';
import About from './components/Navigation/About';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

const App = (props) => {

          return (
                <div className="App">
                  <div
                    className="pcoded-main-container"
                  >
                    <div className="pcoded-wrapper">
                      <div className="pcoded-content">
                        <div className="pcoded-inner-content">
                          <div className="main-body">
                            <div className="page-wrapper">
                           
                            <Header />
                            <br /><br />
                            <br /><br />
                            
                            <Route exact path="/" component={AddressBookList} />
                            <Route exact path="/about" component={Contact} />
                       
                        
                      <Footer />
                       
                       
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
    
}


export default App;