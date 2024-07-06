import React, { useState } from "react";

export default function Container({ heading, children }) {
  const [color, setColor] = useState(true);

  const switchColor = () => {
    setColor(!color);
  };
  return (
    <div className="w-screen h-auto flex flex-col justify-center items-center mb-10 mt-10">
      <h1
        onMouseOver={switchColor}
        onMouseLeave={switchColor}
        className={`${color ? `text-CustomBlue` : `text-black dark:text-white`} text-5xl font-Exo font-bold cursor-pointer`}
      >
        {heading}
      </h1>

      {children}
    </div>
  );
}
