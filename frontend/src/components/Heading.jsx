import React, { useState } from 'react'

export default function Heading({ children }) {
  const [color, setColor] = useState(true);

  const switchColor = () => {
    setColor(!color);
  }

  return (
    <div onMouseOver={switchColor} onMouseLeave={switchColor} className={`${color ? `text-CustomBlue` : `text-black`} text-5xl font-Exo font-bold cursor-pointer`}>
        {children}
    </div>
  );
}