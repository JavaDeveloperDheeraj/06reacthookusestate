import React, { useState } from 'react';

function Stylechanger() {
    
    const styleChange = {
        title : "CNC WEB WORLD",
       css : {
         color : "red",
        fontSize : "20px",
        border : "4px dotted blue"
       }
    }
    const [fontStyle, setFontStyle] = useState(styleChange);

    function newStyle(){
        setFontStyle({
            title : "CNC Web world by Prashant Sir",
            css : {
                color : "blue",
               fontSize : "40px",
               border : "2px solid blue"
              }
        })
    }
  
    return (
    <div>
        <h1 style={{textAlign:'center'}}>Style changer</h1>
        <h1 style={fontStyle.css}>{fontStyle.title}</h1>
        <button onClick={newStyle}>Click me</button>
    </div>
  )
}

export default Stylechanger;
