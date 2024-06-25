import React from "react";

function About() {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <h1 className="text-CustomBlue text-5xl font-Exo font-semibold">About Me</h1>

      <div className="w-[800px] text-justify">
        <h2 className="text-2xl font-semibold">
          Hello! <br /> I'm Ravinder.
        </h2>

        <br />

        <p>
          I am a <b>BTech</b> student who's currently pursuing a degree in{" "}
          <b>Computer Science</b> from the
          <b> Punjab Engineering College, Chandigarh.</b> I am passionate about
          software development with prowess in problem-solving and algorithmic
          thinking. Possessing very good time management and organizational
          skills, I love to explore various technologies and to keep enhancing
          my skills.
        </p>

        <br />

        <p>
          I have developed a good foundation in{" "}
          <b>Data Structures & Algorithms</b> by mastering the important
          concepts such as <b>Complexity Analysis</b>, <b>Recursion</b>,{" "}
          <b>Linked List</b>, <b>Trees</b>,<b>Graphs</b>, <b>Heaps</b>,{" "}
          <b>Hash Tables</b>, <b>Dynamic Programming</b>, <b>Backtracking</b>,
          etc. I have solved <b>250+</b> DSA problems and made <b>500+</b>{" "}
          submissions on coding platforms like
          <b> LeetCode</b>, <b>GeeksforGeeks</b> and on{" "}
          <b>Coding Ninjas Studio</b> collectively.
        </p>

        <br />

        <p>
          I have also been working on <b>Front-End Web Development</b> and
          learned advanced <b>HTML</b> &<b> CSS</b> and basics of{" "}
          <b>JavaScript</b> and created this portfolio website by myself. I have
          also learned the basics of <b>Back-End Web Development</b> and{" "}
          <b>Databases</b> like <b>MongoDB</b>.
        </p>
      </div>
    </div>
  );
}

export default About;
