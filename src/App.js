import React from "react";
import "./App.css";
import LoginPage from "./components/pages/LoginPage/index";
import HeaderTemplate from "./components/templates/HeaderTemplate/index";
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
      <HeaderTemplate/>
      <LoginPage/>
    </div>
  );
}

export default App;
