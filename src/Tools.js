import React, { Component } from 'react';
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


$("#pageContent").change(function(){

	var hash=document.getElementById("number").value;
/*
    var loginField;
    loginField ='<div class="col-md-10">' +
                    '<div id="addressBox">' +
                      '<h4> private key: <br>' + forge_sha256(hash) +
                      '<br> <br> wallet address: <br>' + privateKeyToAddress(forge_sha256(hash)) + '</h4>'+
                    '</div>'+
                  '</div>';

    $('#addressBox').remove();

    var $jloginField = $(loginField);
    $("#pageContent").append($jloginField);
    */

});
var key = "bryan";

var privateKeyVar = web3.utils.sha3(key);
var shavedPrivates = privateKeyVar.substr(2);
var publicKeyVar = privateKeyToAddress(shavedPrivates);

//alert("Private Key:   " + privateKeyVar);
alert("Private Key:   " + shavedPrivates);
alert("Public Key:   " + publicKeyVar);



class Tools extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert("yo");

    event.preventDefault();
  }

  render() {
    return (

      <div className="Tools" >
{/*
          <h1>Wallet address generator</h1>
          <h6>Enter puzzle answer below. Private key will be generated using sha256. Wallet address will be generated from private key. </h6>
          <div className="form-group">
            <input type="text" id="number" name="number" className="form-control" placeholder />
          </div>
*/}
          <form onSubmit={this.handleSubmit}>
            <label>
              Name:
              <input type="text" value={this.state.value} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Submit" />
          </form>


      </div>

    );
  }
}

export default Tools;
