import React, { useState } from "react";

function Paragraph() {
  const [title, setTitle] = useState("Login");
  const changeTitleFn = () => {
    setTitle("Register");
  };
  return <p onClick={changeTitleFn}>{title}</p>;
}
export default Paragraph;
