import React from "react";

function Button({ children, onClick }) {
  return (
    <button
      type="button"
      className={`w-32 h-10 flex justify-center items-center border-2 border-black rounded-lg font-semibold hover:bg-black hover:text-white transition-colors duration-300 dark:text-white dark:border-white dark:hover:bg-white dark:hover:text-black`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
