import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  const [color, setColor] = useState(true);

  const switchColor = () => {
    setColor(!color);
  }

  const navItems = [
    {
      name: "Home",
      path: "/"
    },
    {
      name: "About",
      path: "/about"
    },
    {
      name: "Skills",
      path: "/skills"
    },
    {
      name: "Contact",
      path: "/contact"
    },
  ]

  return (
    <header className="sticky z-50 top-0">
      <nav className="backdrop-blur-sm bg-NavbarBG border-gray-200">
        <div className="h-20 flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to="/" onMouseOver={switchColor} onMouseLeave={switchColor} className={`w-fit h-fit ml-20 flex`}>
            <div className={`text-3xl font-Daredevil ${color ? "text-black" : "text-CustomBlue"}`}>R</div>
            <div className={`text-3xl font-Daredevil ${color ? "text-CustomBlue" : "text-black"}`}>K</div>
          </Link>

            <ul className={`grid grid-cols-4 justify-center items-center gap-4 mr-20`}>
              {navItems.map((item) => 
                <li key={item.name} className="m-1 w-20">
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `flex justify-center items-center text-base hover:transition-transform hover:font-medium hover:text-CustomBlue ${isActive ? "font-medium text-CustomBlue" : "text-black"}`
                    }
                  >
                    {item.name}
                  </NavLink>
                </li>
              )}
            </ul>
        </div>
      </nav>
    </header>
  );
}
