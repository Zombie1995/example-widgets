import React from "react";

const Button = React.memo(
  (
    props: React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >
  ) => {
    return (
      <button
        className="bg-white p-2 outline outline-2 outline-gray-500 rounded-md h-min min-h-10"
        {...props}
      >
        {props.children}
      </button>
    );
  }
);

export default Button;
