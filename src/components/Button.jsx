import React from "react";

const Button = ({ buttonText }) => {
  return (
    <>
      <button className="px-3 py-2 bg-red-500 rounded-sm text-white whitespace-nowrap">
        {buttonText}
      </button>
    </>
  );
};

export default Button;
