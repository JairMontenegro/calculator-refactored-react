import './App.css';
import Button from './components/button.js';
import './styles-shets/button.css'


function App() {
  return (
      <div className='App'>
        <div className='pincipal_container'>
          <div className='calculator'>
            <div className='display'>
                <div className='value-1'></div>
                <div className='value-2'></div>
            </div>
            <Button>C</Button>
            <Button>DEL</Button>
            <Button>%</Button>
            <Button>÷</Button>
            <Button>7</Button>
            <Button>8</Button>
            <Button>9</Button>
            <Button>*</Button>
            <Button>4</Button>
            <Button>5</Button>
            <Button>6</Button>
            <Button>-</Button>
            <Button>1</Button>
            <Button>2</Button>
            <Button>3</Button>
            <Button>+</Button>
            <Button>.</Button>
            <Button>=</Button>
        </div>

        </div>
      </div>
  )
}


export default App;