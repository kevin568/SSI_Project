import React from "react";
import { Navbar } from "../component/navbar";
const Issuer = () => {
  function sendVC() {
    alert("Send VC Successfully");
  }
  return (
    // <div className="container"></div>
    <div class="container">
      <Navbar></Navbar>
      <div class="row justify-content-center">
        <h2>Send VCs Type</h2>
      </div>
      <div class="border d-flex align-items-center justify-content-center">
        <select
          class="form-select form-select-lg mb-3"
          aria-label=".form-select-lg example"
        >
          <option selected>VC list</option>
          <option value="1">TOEIC VC</option>
          <option value="2">Degree VC</option>
          <option value="3">Age VC</option>
        </select>
      </div>
      <div class="row justify-content-center">
        <h2>Choose Reciever</h2>
      </div>
      <div class="border d-flex align-items-center justify-content-center">
        <select
          class="form-select form-select-lg mb-3"
          aria-label=".form-select-lg example"
        >
          <option selected>Reciever list</option>
          <option value="1">Kevin</option>
          <option value="2">Alice</option>
          <option value="3">Bob</option>
        </select>
      </div>
      <div>
        <button type="button" class="btn btn-primary" onClick={sendVC}>
          send VC
        </button>
      </div>
    </div>
  );
};

export { Issuer };
