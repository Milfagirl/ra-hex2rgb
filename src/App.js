import React, { useState } from 'react';
import './App.css';


function App() {
  const [inputValue, setInpitValue] = useState('');
  const [divValue, setDivValue] = useState('');
  const [bgkColor, setBgkColor] = useState({ backgroundColor: "#ff" })

  const onChangeInput = (event) => {
    setInpitValue(prev => event.target.value);
  }

  const onSubmitForm = (e) => {
    e.preventDefault();
    if (/^#([0-9a-f]{3}|[0-9a-f]{6})$/ig.test(inputValue)) {
      var hex = inputValue.substr(1);
      hex = hex.length === 3 ? hex.replace(/(.)/g, '$1$1') : hex;
      var rgb = parseInt(hex, 16);
      let rgbstr = 'rgb(' + [(rgb >> 16) & 255, (rgb >> 8) & 255, rgb & 255].join(',') + ')';
      setDivValue(prev => rgbstr);
      setBgkColor(prev => ({ ...bgkColor, backgroundColor: rgbstr }))
    }
    setDivValue(prev => 'Ошибка');
  }



  return (
    <div style={bgkColor} className="App">
      <form onSubmit={onSubmitForm}>
        <input className='hex' id="name" name="name" value={inputValue} onChange={onChangeInput} />
        <div className='rgb'>{divValue}</div>
      </form>
    </div>
  );
}

export default App;
