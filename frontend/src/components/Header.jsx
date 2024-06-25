import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  const [color, setColor] = useState(true);

  const switchColor = () => {
    setColor(!color);
  }

  return (
    <header className="sticky z-50 top-0">
      <nav className="navbar border-gray-200">
        <div className="h-20 flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to="/" onMouseOver={switchColor} onMouseLeave={switchColor} className={`flex items-stretch site-logo`}>
            <div id="R" className={`text-3xl ${color ? "text-black" : "text-CustomBlue"} title`}>R</div>
            <div id="K" className={`text-3xl ${color ? "text-CustomBlue" : "text-black"} title`}>K</div>
          </Link>

          <div className="flex justify-center items-center mr-40">
            <ul className="grid grid-cols-4 justify-center items-center gap-4">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `m-4 flex justify-center items-center text-m hover:font-medium ${isActive ? "font-medium text-CustomBlue" : "text-black"}`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `m-4 flex justify-center items-center text-m hover:font-medium ${isActive ? "font-medium text-CustomBlue" : "text-black"}`
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/skills"
                  className={({ isActive }) =>
                    `m-4 flex justify-center items-center text-m hover:font-medium ${isActive ? "font-medium text-CustomBlue" : "text-black"}`
                  }
                >
                  Skills
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `m-4 flex justify-center items-center text-m hover:font-medium ${isActive ? "font-medium text-CustomBlue" : "text-black"}`
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
