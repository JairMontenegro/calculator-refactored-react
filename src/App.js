import './App.css';
import Button from './components/button.js';
import Display from './components/display.js';
import ButtonCLear from './components/clearButton.js';
import {useState} from 'react';


function App() {

  const [input , setInput] = useState('');

  const addInput = val =>{
    setInput(input + val)
  };



  return (
      <div className='App'>
        <div className='pincipal_container'>
          <div className='calculator'>
          
            <Display input={input}/>
            <ButtonCLear mClear={()=> setInput('')}>
              C
            </ButtonCLear>
            <Button mClick={addInput}>DEL</Button>
            <Button mClick={addInput}>%</Button>
            <Button mClick={addInput}>/</Button>
            <Button mClick={addInput}>7</Button>
            <Button mClick={addInput}>8</Button>
            <Button mClick={addInput}>9</Button>
            <Button mClick={addInput}>*</Button>
            <Button mClick={addInput}>4</Button>
            <Button mClick={addInput}>5</Button>
            <Button mClick={addInput}>6</Button>
            <Button mClick={addInput}>-</Button>
            <Button mClick={addInput}>1</Button>
            <Button mClick={addInput}>2</Button>
            <Button mClick={addInput}>3</Button>
            <Button mClick={addInput}>+</Button>
            <Button mClick={addInput}>0</Button>
            <Button mClick={addInput}>.</Button>
            <Button mClick={addInput}>=</Button>
        </div>

        </div>
      </div>
  )
}


export default App;
