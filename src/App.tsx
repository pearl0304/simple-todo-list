import React, { FC } from "react";
import { Todoform } from "./Components/todoform";
import { Clock } from "./Components/clock";
import { Quotes } from "./Components/quotes";
import "./css/App.css";

const App: FC = () => {
  return (
    <div className="App">
      <div className="container">
        <Clock />
        <Todoform />
        <Quotes />
      </div>
    </div>
  );
};

export default App;
