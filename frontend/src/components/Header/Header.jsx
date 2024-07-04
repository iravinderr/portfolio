import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import ThemeButton from "./ThemeButton";

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
      name: "Projects",
      path: "/projects"
    },
    {
      name: "Contact",
      path: "/contact"
    },
  ]

  return (
    <header className="h-20 sticky z-50 top-0">
      <nav className="h-20 backdrop-blur-sm bg-NavbarBG border-gray-200">
        <div className="h-full flex flex-wrap justify-center items-center">
          <Link to="/" onMouseOver={switchColor} onMouseLeave={switchColor} className={`w-fit h-auto flex`}>
            <div className={`text-3xl font-Daredevil ${color ? ("text-black dark:text-white") : "text-CustomBlue"}`}>R</div>
            <div className={`text-3xl font-Daredevil ${color ? "text-CustomBlue" : "text-black dark:text-white"}`}>K</div>
          </Link>

            <ul className={`mx-40 grid grid-cols-5 justify-center items-center gap-4`}>
              {navItems.map((item) => 
                <li key={item.name} className="m-1 w-20">
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `flex justify-center items-center text-base hover:transition-transform hover:font-medium hover:text-CustomBlue ${isActive ? "font-medium text-CustomBlue" : "text-black dark:text-white"}`
                    }
                  >
                    {item.name}
                  </NavLink>
                </li>
              )}
            </ul>

          <ThemeButton />
        </div>
      </nav>
    </header>
  );
}
