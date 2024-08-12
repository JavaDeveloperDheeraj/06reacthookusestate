import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Stylechanger from './Stylechanger/Stylechanger';
import Fontsize from './Fontsize/Fontsize';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button } from 'bootstrap';
function App() {
  //console.log(useState());
  //const [change, update] = useState("CNC Web World");
  let [count, setCount] = useState(1);
  let [bg, setBg] = useState('bg-info');

  function subt() {
    if (count > 1) {
      count -= 1;
      setCount(count);
    }

  }
  return (
    <>
      <div style={{height:'100vh'}} className={bg}>
            {/* <h1>{change}</h1>
            <button onClick={()=>update("programming site")}>click me</button>
        */}

            <h1>Counter</h1>
            <h2>{count}</h2>
            <button onClick={() => setCount(count + 1)}>Add</button> &nbsp;
            <button onClick={subt}>Subtract</button>
            <br></br><hr></hr>   <br></br>
            <Stylechanger />
            <Fontsize />

            <div className='d-flex justify-content-evenly'>
                <button className='btn btn-danger' onClick={()=>setBg('bg-danger')}>Red</button>
                <button className='btn btn-danger' onClick={()=>setBg('bg-success')}>Green</button>
              </div>
      </div>
    </>

  );
}

export default App;
