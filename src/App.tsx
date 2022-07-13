import React, { FC, useState, ChangeEvent, FormEventHandler } from "react";
import { Todoform } from "./Components/todoform";
import { Clock } from "./Components/clock";
import { Quotes } from "./Components/quotes";
import "./App.css";

const App: FC = () => {
  return (
    <div className="App">
      <div className="container main">
        <Clock />
        <Todoform />
      </div>
      <div className="container sub">
        <Quotes />
      </div>
    </div>
  );
};

export default App;
