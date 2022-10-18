import React, {Fragment} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import InputStudent from "./components/InputStudent";
import ListStudents from "./components/ListStudents";
import Login from "./components/Login";

import './App.css';

function App() {

  return ( 
    <Fragment>
      <div className="container">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Login />}/>
            <Route path='/input' element={<InputStudent />}/>
          </Routes>
        </BrowserRouter>
        <ListStudents />
      </div>
    </Fragment>
  )
}

export default App;
