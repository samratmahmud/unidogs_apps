import React from "react";

interface buttonProps {
  name: string;
  padding?: "3" | "2";
}

function Button(props: buttonProps) {
  let {name, padding = "3"} = props;
  return (
    <div role="button">
      <button
        className={`text-gray-50 bg-100 rounded-3xl hover:bg-200 duration-500 ${
          padding === "3"
            ? "py-3 px-10 text-lg font-bold"
            : "py-2 px-3.5 text-sm font-medium border border-fuchsia-500"
        }`}
      >
        {name}
      </button>
    </div>
  );
}

export default Button;
