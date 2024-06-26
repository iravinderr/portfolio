import React from "react";
import { Typed } from "react-typed";

export default function TypingAnimation() {
  return (
    <div className="typing-animation">
      <Typed
        strings={["Coder", "Web Developer"]}
        loop={true}
        typeSpeed={100}
        backSpeed={80}
        backDelay={1000}
      />
    </div>
  );
}