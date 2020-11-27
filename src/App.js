import React, { useState } from 'react';
import './App.css';


function App() {
  const [inputValue, setInpitValue] = useState('');
  const [divValue, setDivValue] = useState('');
  const [bgkColor, setBgkColor] = useState({ backgroundColor: "#FFFFFF" })

  const onChangeInput = (event) => {
    setInpitValue(prev => event.target.value);
    if (event.target.value.length === 7) {
      Convert(event.target.value);
    } else {
      setDivValue(prev => '');
      setBgkColor(prev => ({ ...prev, backgroundColor: "#FFFFFF" }));
    }


  }

  const Convert = (value) => {
    if (/^#([0-9a-f]{3}|[0-9a-f]{6})$/ig.test(value)) {

      var hex = value.substr(1);
      console.log(hex);
      hex = hex.length === 3 ? hex.replace(/(.)/g, '$1$1') : hex;
      var rgb = parseInt(hex, 16);
      let rgbstr = 'rgb(' + [(rgb >> 16) & 255, (rgb >> 8) & 255, rgb & 255].join(',') + ')';
      setDivValue(prev => rgbstr);
      setBgkColor(prev => ({ ...prev, backgroundColor: rgbstr }));
    }
    else {
      setDivValue(prev => 'Ошибка');
      setBgkColor(prev => ({ ...prev, backgroundColor: "#FFFFFF" }));
    }


  }



  return (
    <div style={bgkColor} className="App">
      <div id='forInput'>
        <input className='hex' id="name" name="name" value={inputValue} onChange={onChangeInput} />
        <div className='rgb'>{divValue}</div>
      </div>
    </div>
  );
}

export default App;
