import React, { Component } from 'react';
import { Navbar, Nav, NavItem, Well, Button, FormGroup,ControlLabel,FormControl,HelpBlock } from 'react-bootstrap';
import './forge-sha256.min';
import EthUtil from 'ethereumjs-util';
import Web3 from 'web3';


const web3 = new Web3(Web3.givenProvider || "http://localhost:8545");

var $ = require('jquery');


var hexToBytes = function(hex) {
  for (var bytes = [], c = 0; c < hex.length; c+=2)
  bytes.push(parseInt(hex.substr(c, 2), 16));
  return bytes;
}

var privateKeyToAddress = function(privateKey) {
  return `0x${EthUtil.privateToAddress(hexToBytes(privateKey)).toString('hex')}`
}

class Tools extends Component {
  constructor(props, context) {
      super(props, context);

      this.handleChange = this.handleChange.bind(this);

      this.state = {
        value: '',
        private: '',
        public: ''
      };
    }


    handleChange(e) {
      this.setState({ value: e.target.value,
                      private: web3.utils.sha3(e.target.value).substr(2),
                      public: privateKeyToAddress(web3.utils.sha3(e.target.value).substr(2))
                    });
{/*
      var privateKeyVar = web3.utils.sha3(this.state.value);
      this.setState({ private: privateKeyVar });

      var publicKeyVar = privateKeyToAddress(privateKeyVar.substr(2));
      this.setState({ public: publicKeyVar});
*/}

    }

  render() {
    return (

      <div className="Tools" >
          <h1>Wallet address generator</h1>
          <h6>Enter puzzle answer below. Private key will be generated using sha256. Wallet address will be generated from private key. </h6>
          <form>
            <FormGroup controlId="formBasicText">
              <ControlLabel>Working example with validation</ControlLabel>
              <FormControl type="text" onChange={this.handleChange}/>
              <FormControl.Feedback />
              <HelpBlock>Validation is based on string length.</HelpBlock>
            </FormGroup>
          </form>
          <h4> private key: {this.state.private}</h4>
          <h4>wallet address: {this.state.public}</h4>

      </div>

    );
  }
}

export default Tools;
