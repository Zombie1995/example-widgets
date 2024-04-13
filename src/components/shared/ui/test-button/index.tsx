import React from "react";

const TestButton = React.memo(
  (
    props: React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >
  ) => {
    return (
      <button
        className="bg-white outline outline-2 outline-gray-500 min-w-40 min-h-12 rounded-md p-2"
        {...props}
      >
        {props.children}
      </button>
    );
  }
);

export default TestButton;
