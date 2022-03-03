import React, { useState } from "react";
import "./Calculator.css";

const Calculator = () => {
  const [input, setInput] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    setInput(input.concat(e.target.name));
  };

  const clear = () => {
    setInput("");
  };

  const backspace = (e) => {
    e.preventDefault();
    setInput(input.slice(0, input.length - 1));
  };

  const calculate = (e) => {
    e.preventDefault();

    try{
        setInput(eval(input).toString());
    }
    catch(error){
        setInput(error)
    }
   
  };

  return (
    <div className="calculator">
      <form>
        <input type="text" name="display" id="display" value={input} />
        <div className="buttons">
          <button className="btn" onClick={handleClick} name="7" id="seven">
            7
          </button>
          <button className="btn" onClick={handleClick} name="8" id="eight">
            8
          </button>
          <button className="btn" onClick={handleClick} name="9" id="nine">
            9
          </button>
          <button className="btn" onClick={handleClick} name="/" id="divide" style={{ backgroundColor:"purple"}}>
            /
          </button>
          <br />
          <button className="btn" onClick={handleClick} name="4" id="four">
            4
          </button>
          <button className="btn" onClick={handleClick} name="5" id="five">
            5
          </button>
          <button className="btn" onClick={handleClick} name="6" id="six">
            6
          </button>
          <button className="btn" onClick={handleClick} name="*" id="multiply" style={{ backgroundColor:"purple"}}>
            *
          </button>
          <br />
          <button className="btn" onClick={handleClick} name="1" id="one">
            1
          </button>
          <button className="btn" onClick={handleClick} name="2" id="two">
            2
          </button>
          <button className="btn" onClick={handleClick} name="3" id="three">
            3
          </button>
          <button className="btn" onClick={handleClick} name="-" id="minus" style={{ backgroundColor:"purple"}}>
            -
          </button>
          <br />
          <button
            className="btn"
            onClick={backspace}
            name="C"
            id="backspace"
            style={{ backgroundColor: "red" }}
          >
            C
          </button>
          <button className="btn" onClick={handleClick} name="0" id="zero">
            0
          </button>
          <button className="btn" onClick={handleClick} name="." id="point">
            .
          </button>
          <button className="btn" onClick={handleClick} name="+" id="add" style={{ backgroundColor:"purple"}}>
            +
          </button>
          <br />

          <button className="btn" onClick={calculate} id="equal" style={{ backgroundColor:"purple"}}>
            =
          </button>
          <button className="btn" onClick={clear} id="clear">
            clear
          </button>
        </div>
      </form>
    </div>
  );
};

export default Calculator;
