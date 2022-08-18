import React from "react";
import List from "./Components/List";
import "./App.css";
function App() {
  return (
    <div className="app">
      <h1 className="app_head">
        Internship Assessment: Hexadecimal Software Private Limited
      </h1>
      <div className="field">
        <h4 className="f1 f">S.no.</h4>
        <h4 className="f2 f">Name</h4>
        <h4 className="f3 f">Username</h4>
        <h4 className="f4 f">Email Address</h4>
        <h4 className="f5 f">Address</h4>
        <h4 className="f6 f">Phone No.</h4>
        <h4 className="f7 f">Website</h4>
        <h4 className="f8 f">Company Name</h4>
      </div>
      <List />
    </div>
  );
}

export default App;
