import { useState } from 'react'
import React from 'react';

const Color = ({ color, setSelectedColor, selected }) => {
  const handleClick = () => {
    setSelectedColor(color);
  };

  return (
    <div
      className={color + (selected ? ' selected' : '')}
      style={
        selected
          ? color === 'Black'
            ? { border: '5px solid white' }
            : { border: '5px solid black' }
          : {}
      }
      onClick={handleClick}
    ></div>
  );
};


const App = () => {
  const [selectedColor, setSelectedColor] = useState('');

  return (
    <div id="container">
      <div id="navbar">
        <div>Currently selected: </div>
        <div className={selectedColor}>{selectedColor}</div>
      </div>

      
      <div id="colors-list">
        <Color
          color="Yellow" setSelectedColor={setSelectedColor}
          selected={selectedColor === 'Yellow'}
        />
        <Color
          color="Green" setSelectedColor={setSelectedColor}
          selected={selectedColor === 'Green'}
        />
        <Color
          color="Black" setSelectedColor={setSelectedColor}
          selected={selectedColor === 'Black'}
        />
        <Color
          color="Red" setSelectedColor={setSelectedColor}
          selected={selectedColor === 'Red'}
        />
        <Color
          color="Blue" setSelectedColor={setSelectedColor}
          selected={selectedColor === 'Blue'}
        />
        <Color
          color="White" setSelectedColor={setSelectedColor}
          selected={selectedColor === 'White'}
        />
        <Color
          color="Violet" setSelectedColor={setSelectedColor}
          selected={selectedColor === 'Violet'}
        />
        <Color
          color="Orange" setSelectedColor={setSelectedColor}
          selected={selectedColor === 'Orange'}
        />
      </div>
    </div>
  );
};

export default App;
