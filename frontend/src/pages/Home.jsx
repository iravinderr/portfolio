import React from "react";
import { Container } from "../components";

export default function Home() {
  return (
    <Container>
      <div class="main-left">
        <div class="grad"></div>

        <div class="main-heading">
          Hi I'm <br /> Ravinder Kumar
        </div>

        <div class="main-subheading">
          I am a <span class="role"></span>
        </div>

        <div class="main-description">
          I am a software developer and this is my portfolio website.
        </div>

        <div class="button">Hire Me</div>
      </div>
    </Container>
  );
}
