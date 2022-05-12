import React, { useState } from "react";

const Index = () => {
  const [question, setQuestion] = useState([
    "Which is your fav programming language?",
    "Which is your non-fav programming language?",
    "Which language is best for begginers?",
  ]);
  const [input, setInput] = useState("");
  const [toggle, setToggle] = useState([false, false, false]);

  const handleClick = (index) => {
    let array = [...toggle];
    array[index] = true;
    setToggle(array);
  };
    
  const handleInput = (e) => {
    setInput(e.target.value);
  };
    
    const handleSave = () => {
        if (input) {
          
      }
  };

  return (
    <div className="container-fluid my-5">
      <h1 className="my-5">QUIZ GAME</h1>

      {question.map((item, index) =>
        !toggle[index] ? (
          <div key={index} className="d-flex justify-content-center">
            <button
              type="text"
              className="btn btn-danger my-5 "
              onClick={() => {
                handleClick(index);
              }}
            >
              Click me
            </button>
          </div>
        ) : (
          <div className="d-flex justify-content-center my-5">
            <label>
              {item}
              <input
                value={input}
                className="mx-4"
                type="text"
                name="ques1"
                autoComplete="off"
                onChange={handleInput}
              ></input>
            </label>
            <button
              type="submit"
              className="btn btn-primary"
              onClick={() => {
                handleSave(index);
              }}
            >
              Save
            </button>
          </div>
        )
      )}

      <button className="btn btn-success my-5">submit</button>
    </div>
  );
};

export default Index;
