import React from "react";
import { Navbar } from "../component/navbar";

const RecievedCase = () => {
  function applyJob() {
    alert("Apply Success");
  }
  return (
    <div class="container">
      <Navbar></Navbar>
      <div class="row justify-content-center">
        <table class="table caption-top">
          <caption>List of Verification State</caption>
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">DIDs</th>
              <th scope="col">Name</th>
              <th scope="col">State</th>
              <th scope="col">TOEIC</th>
              <th scope="col">Degree</th>
              <th scope="col">Adult</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>did:verified:1db7ca3291f7be75188bbb7426b4b3d3334d5d7a</td>
              <td>Kevin</td>
              <td>Verified</td>
              <td>TOEIC920-R485L435</td>
              <td>NYCU-CS</td>
              <td>IsAdult</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>did:verified:b135ceae8668211e90ae566850c8adda02700c6a</td>
              <td>Alice</td>
              <td>Provided_Untrue_information</td>
              <td>TOEIC820-R385L435=true</td>
              <td>NTHU-CS=true</td>
              <td>IsAdult=untrue</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>did:verified:def5037d925ea735c38d0a0df420360226bdbfcd</td>
              <td>Bob</td>
              <td>UnVerified</td>
              <td>Unknown</td>
              <td>Unknown</td>
              <td>Unknown</td>
            </tr>
          </tbody>
        </table>
        <h3>The Zeroknowledge Proof Process</h3>
        <text>
          <h4>The First Verified Candidate Kevin:</h4>
          Kevin's Age: {"we don't know "} , Age to prove: 18 <br />
          NRamdom number = 356
          <br />
          Provided Proof: {
            "######generate with age 20 using SHA-256#######"
          }{" "}
          <br />
          6df1d066cfedb9f743f764fb9174f0d940c43170a814d76e09a2483f1c4322db{" "}
          <br />
          Encrypeted Age:
          1305cd4643b801a7701c9a779b923ad11c79eafab70db791fd341736ac913919
          <br />
          Verified Age:
          1305cd4643b801a7701c9a779b923ad11c79eafab70db791fd341736ac913919{" "}
          <br />
          <h4>
            {" "}
            Proven your age Successfully, please continue recruit processing
          </h4>
        </text>
        <text>
          <h4>The Second Verified Candidate Alice:</h4>
          Alice's Age: {"we don't know "} , Age to prove: 18 <br />
          NRamdom number = 731
          <br />
          Provided Proof: {
            "######generate with age 17 using SHA-256#######"
          }{" "}
          <br />
          d775733141dfa3e2f4eca2512b9929d58e2e89a36b0adb50f0a16db98a1634a2{" "}
          <br />
          Encrypeted Age:
          6544a7987cf1860de54ece39dd32efc67d4ffce0d738f5c2203fd152e6af36b6
          <br />
          Verified Age:
          053ace88d1d3f4d8511c0ba046a0738154ee3e675f954f3a0a21c2e92a22cb35{" "}
          <br />
          <h4> Your age is below 18, please leave recruit processing</h4>
        </text>
      </div>
    </div>
  );
};

export { RecievedCase };
