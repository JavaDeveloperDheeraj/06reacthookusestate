import React, { useState } from 'react';
import './Fontsize.css';

function Fontsize() {

    const [fsize, setfsize] = useState('');
    function getValue(e){
        //console.log(e.target.value);
        let value = e.target.value+"px";
        setfsize(value);
    }
    let getColor = (e)=>{
      //console.log(e.target.value);  
      let color = e.target.value;
      setfsize(color);
    }
  return (
    <>
    <br></br>
    <hr/>
      <h1 style={{textAlign:'center'}}>Font size changer</h1>
        
        <h1 style={{fontSize: fsize, color:fsize }}>CNC Web World</h1>

        <input type='range' name='range' onChange={getValue} step={5} min={'25px'}/> 
        <input type='color' name='color' onChange={getColor}/>    
    </>
  )
}

export default Fontsize;
