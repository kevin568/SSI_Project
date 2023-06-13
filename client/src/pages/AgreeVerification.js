import React from "react";
import { Navbar } from "../component/navbar";

const AgreeVerification = () => {
  function handleTOEIC() {
    alert("Success send TOEIC proof");
  }
  function handleDegree() {
    alert("Success send Degree proof");
  }
  function handleAge() {
    alert("Success send Adult proof");
  }
  return (
    <div class="container">
      <Navbar></Navbar>
      <table class="table caption-top">
        <caption>List of Verification State</caption>
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">DIDs</th>
            <th scope="col">Job </th>
            <th scope="col">Recieved Verification</th>
            <th scope="col">TOEIC</th>
            <th scope="col">Degree</th>
            <th scope="col">Age</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>1db7ca3291f7be75188bbb7426b4b3d3334d5d7a</td>
            <td>Software Enginer</td>
            <td>true</td>
            <td>required</td>
            <td>required</td>
            <td>required</td>
            <td></td>
          </tr>
        </tbody>
      </table>
      <div class="row justify-content-center">
        <h2>Degree proof </h2>
        <img
          src="/images/NYCUCS.jpeg"
          alt="NYCU"
          height={800}
          width={200}
        ></img>
      </div>
      <button type="button" class="btn btn-primary" onClick={handleDegree}>
        sendDegreeProof
      </button>
      <div class="row justify-content-center">
        <h2>TOEIC proof </h2>
        <img src="/images/TOEIC.png" alt="TOEIC" height={800} width={200}></img>
      </div>
      <button type="button" class="btn btn-primary" onClick={handleTOEIC}>
        sendTOEICProof
      </button>
      <div class="row justify-content-center">
        <h2>Age Zero-knowledge-proof </h2>
        <img src="/images/ages.png" alt="AGE=20" height={800} width={200}></img>
      </div>
      <button type="button" class="btn btn-primary" onClick={handleAge}>
        sendAdultProof
      </button>
    </div>

    // <div class="container">

    //   <div class="row justify-content-center">
  );
};

export { AgreeVerification };
