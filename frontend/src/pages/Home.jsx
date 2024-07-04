import React from "react";
import { Container } from "../components";

export default function Home() {
  return (
    <Container>
      <div class="main-left">
        <div class="grad"></div>

        <div class="text-black dark:text-white">
          Hi I'm <br /> Ravinder Kumar
        </div>

        <div class="text-black dark:text-white">
          I am a <span class="role"></span>
        </div>

        <div class="text-black dark:text-white">
          I am a software developer and this is my portfolio website.
        </div>

        <div class="button">Hire Me</div>
      </div>
    </Container>
  );
}
