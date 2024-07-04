import React from "react";
import { useTheme } from "../../context/ThemeContext";
import { WiDaySunny } from "react-icons/wi";
import { WiMoonWaningCrescent4 } from "react-icons/wi";

function ThemeButton() {
    const { themeMode, lightTheme, darkTheme } = useTheme();

    const themeChangeHandler = () => {
        if (themeMode === "dark") {
          lightTheme();
        } else {
          darkTheme();
        }
      };

  return (
      <div className={`w-16 h-9 p-1 flex ${themeMode === "light" ? "bg-gray-200" : "bg-gray-500"} items-center border-gray-300 border-2 rounded-full cursor-pointer transition-all duration-300`} onClick={themeChangeHandler}>
        <div className={`w-6 h-6 flex justify-center items-center rounded-full transition-all duration-300 ${themeMode === "light" ? "translate-x-0 bg-white" : "translate-x-7 bg-gray-900" }`}>
          {themeMode === "light" ? (
            <WiDaySunny className="text-yellow-500" size={20} />
          ) : (
            <WiMoonWaningCrescent4 className="text-white" size={20} />
          )}
        </div>
      </div>
  )
}

export default ThemeButton