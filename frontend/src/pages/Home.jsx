import React, { useEffect, useRef } from "react";
import { Button, Container } from "../components";
import { openInNewTab } from "../services/functions";
import { resumeUrl } from "../services/urls";
import Typed from 'typed.js';

export default function Home() {
  const el = useRef(null);

  useEffect(() => {
    const options = {
      strings: ["Coder", "Web Developer"],
      loop: true,
      typeSpeed: 100,
      backSpeed: 80,
      backDelay: 1000,
    };

    const typed = new Typed(el.current, options);

    return () => typed.destroy();
  }, []);

  return (
    <Container>
      <div class="p-20 w-full h-auto flex">
        <div className="ml-20 flex flex-col gap-8">
          <div class="grad"></div>

          <div class="text-5xl font-semibold text-black dark:text-white">
            Hi I'm <br /> Ravinder Kumar
          </div>

          <div class="text-4xl text-black dark:text-white">
            I am a <span className="role text-CustomBlue font-semibold" ref={el}></span>
          </div>

          <div class="text-gray-400 font-light">
            I am a software developer and this is my portfolio website.
          </div>

          <Button onClick={() => openInNewTab(resumeUrl)}>Hire Me</Button>
        </div>

        <div></div>
      </div>
    </Container>
  );
}
