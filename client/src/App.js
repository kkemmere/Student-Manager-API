import React, {Fragment} from "react";
import InputStudent from "./components/InputStudent";
import ListStudents from "./components/ListStudents";
import './App.css';

function App() {
  return ( 
    <Fragment>
      <div className="container">
        <InputStudent />
        <ListStudents />
      </div>
    </Fragment>
  )
}

export default App;
