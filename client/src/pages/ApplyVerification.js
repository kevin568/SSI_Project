import React from "react";
import { Navbar } from "../component/navbar";

const ApplyVerification = () => {
  function applyWorkerVerification() {
    alert("Apply Verification Success");
  }
  return (
    // <div className="container"></div>
    <div class="container">
      <Navbar></Navbar>
      <div class="row justify-content-center">
        <h2>Choose Worker to Verification </h2>
      </div>
      <div class="border d-flex align-items-center justify-content-center">
        <select
          class="form-select form-select-lg mb-3"
          aria-label=".form-select-lg example"
        >
          <option selected>Worker list</option>
          <option value="1">Kevin-NYCU-CS</option>
          <option value="2">Alice-NTHU-CS</option>
          <option value="3">Bob-NTU-CS</option>
        </select>
      </div>
      <div class="row justify-content-center">
        <h2>Choose Verification </h2>
      </div>
      <div class="border d-flex align-items-center justify-content-center">
        <select
          class="form-select form-select-lg mb-3"
          aria-label=".form-select-lg example"
        >
          <option selected>Verification list</option>
          <option value="1">TOEIC</option>
          <option value="2">Degree</option>
          <option value="3">Age</option>
        </select>
      </div>
      <div>
        <button
          type="button"
          class="btn btn-primary"
          onClick={applyWorkerVerification}
        >
          ApplyVerification
        </button>
      </div>
    </div>
  );
};

export { ApplyVerification };
