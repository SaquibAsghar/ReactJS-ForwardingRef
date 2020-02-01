import React, { useRef, useEffect } from "react";
import "./styles.css";
import Input from "./components/InputComponent";

const style = {
  marginBottom: "15px",
  padding: "10px",
  borderRadius: "5px",
  border: "1px solid",
  background: "#fcdcdc",
  width: "400px",
  height: "50px",
  fontSize: "15px"
};
export default function App() {
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const buttonSubmitRef = useRef(null);

  useEffect(() => {
    firstNameRef.current.focus();
  }, []);

  const firstNameHandler = e => {
    if (e.keyCode === 13 || e.keyCode === 40) {
      // 13 code is for "Enter" & 40 for down key
      lastNameRef.current.focus();
    }
  };

  const lastNameHandler = e => {
    if (e.keyCode === 13 || e.keyCode === 40) {
      // 13 code is for "Enter"
      buttonSubmitRef.current.focus();
    } else if (e.keyCode === 38) {
      // 38 is for Up key
      firstNameRef.current.focus();
    }
  };

  const submitButtonHandler = e => {
    if (e.keyCode === 13) {
      alert("Form submitted");
    } else if (e.keyCode === 38) {
      // 38 is for Up key
      lastNameRef.current.focus();
    }
  };
  return (
    <div className="App">
      <h1>Forwarding Refs</h1>
      <Input
        style={style}
        placeholder="Type your first name here..."
        ref={firstNameRef}
        onKeyDownHandler={firstNameHandler}
      />
      <Input
        style={style}
        placeholder="Type your last name here..."
        ref={lastNameRef}
        onKeyDownHandler={lastNameHandler}
      />
      <button
        style={submit_button_style}
        ref={buttonSubmitRef}
        onKeyDown={submitButtonHandler}
      >
        Submit
      </button>
    </div>
  );
}

const submit_button_style = {
  marginBottom: "10px",
  borderRadius: "5px",
  cursor: "Pointer",
  background:"green",
  padding: "10px",
  border: "1px solid green"
};
