import React from 'react';
import logo from './logo.svg';
import './App.css';
import MainComponent from "./Components/MainComponent/index";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainController from "./Containers/MainContainer";

function App() {
  return (
      <MainController/>
  );
}

export default App;
