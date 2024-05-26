import React from "react";

function NavBar() {
  return (
    <div className='w-screen h-96 z-10 flex justify-between items-center bg-slate-500'>
      <div >
        <h1 id="R">R</h1>
        <h1 id="K">K</h1>
      </div>

      <div >
        <div>
          Home
        </div>

        <div>
          About
        </div>

        <div>
          Skills
        </div>

        <div>
          Contact Me
        </div>
      </div>
    </div>
  );
}

export default NavBar;
