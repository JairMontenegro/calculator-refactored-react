import "./App.css";
import Button from "./components/button.js";
import Display from "./components/display.js";
import ButtonCLear from "./components/clearButton.js";
import { useState } from "react";
import { evaluate } from "mathjs";
import Footer from "./components/footer.js";

function App() {
  const [input, setInput] = useState("");

  const addInput = (val) => {
    setInput(input + val);
  };

  const calculate = () => {
    if (input) {
      setInput(evaluate(input));
    } else {
      alert("please insert values to calculate");
    }
  };

  return (
    <div className="App">
      <div className="pincipal_container">
        <div className="calculator">
          <Display input={input} />
          <ButtonCLear mClear={() => setInput("")}>C</ButtonCLear>
          <Button id="del" mClick={addInput}>
            DEL
          </Button>
          <Button id="percent" mClick={addInput}>
            %
          </Button>
          <Button id="divide" mClick={addInput}>
            /
          </Button>
          <Button id="seven" mClick={addInput}>
            7
          </Button>
          <Button id="eight" mClick={addInput}>
            8
          </Button>
          <Button id="nine" mClick={addInput}>
            9
          </Button>
          <Button id="multiply" mClick={addInput}>
            *
          </Button>
          <Button id="four" mClick={addInput}>
            4
          </Button>
          <Button id="five" mClick={addInput}>
            5
          </Button>
          <Button id="six" mClick={addInput}>
            6
          </Button>
          <Button id="subtract" mClick={addInput}>
            -
          </Button>
          <Button id="one" mClick={addInput}>
            1
          </Button>
          <Button id="two" mClick={addInput}>
            2
          </Button>
          <Button id="three" mClick={addInput}>
            3
          </Button>
          <Button id="add" mClick={addInput}>
            +
          </Button>
          <Button id="zero" mClick={addInput}>
            0
          </Button>
          <Button id="decimal" mClick={addInput}>
            .
          </Button>
          <Button id="equals" mClick={calculate}>
            =
          </Button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
