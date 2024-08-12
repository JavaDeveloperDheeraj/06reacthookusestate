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

    const obj = {
      class : "show",
      btnText : "Hide"
    }

    const [show, setShow] = useState(obj);

    function myfun(){
      if(show.class=== "show"){
        setShow({
          class : "hide",
          btnText : "Show"
        })

      } else {
        setShow({
          class : "show",
          btnText : "Hide"
        })

      }
    }
  return (
    <>
    <br></br>
    <hr/>
      <h1 style={{textAlign:'center'}}>Font size changer</h1>
        
        <h1 style={{fontSize: fsize, color:fsize }}>CNC Web World</h1>

        <input type='range' name='range' onChange={getValue} step={5} min={'25px'}/> 
        <input type='color' name='color' onChange={getColor}/>    

        <h1 className={show.class} >Hide me by click on below button</h1>
        <button onClick={myfun}>{show.btnText}</button>
    </>
  )
}
 
export default Fontsize;
