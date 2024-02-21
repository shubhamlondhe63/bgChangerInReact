import React, { useState } from "react";

export default function App() {
  const colorNames = ['red', 'blue', 'green', 'yellow', 'orange', 'purple', 'pink', 'black', 'white', 'brown'];

  const [color, setColor] = useState("green");

  function setBgColor(colorName) {
    setColor(colorName);
    console.log("colorName is ", colorName);
  }

  return (
    <ul style={{background: color}} className="w-full h-full flex justify-center">
      {colorNames.map((colorName) => (
        <li key={colorName} className="px-2 m-3 text-black" style={{ background: colorName }} onClick={() => setBgColor(colorName)}>
          {colorName}
        </li>
      ))}
    </ul>
  );
}
