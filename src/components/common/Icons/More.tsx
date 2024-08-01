import React from "react";

type Props = {
  color: string;
  fill?: string;
};

const More = ({ color,fill = "none" }: Props) => {
  return (
    <div>
      <svg
        width="27"
        height="7"
        viewBox="0 0 27 7"
        fill={fill}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.5 3.5C6.5 5.01878 5.26878 6.25 3.75 6.25C2.23122 6.25 1 5.01878 1 3.5C1 1.98122 2.23122 0.75 3.75 0.75C5.26878 0.75 6.5 1.98122 6.5 3.5Z"
          stroke={color}
        />
        <path
          d="M16.25 3.5C16.25 5.01878 15.0188 6.25 13.5 6.25C11.9812 6.25 10.75 5.01878 10.75 3.5C10.75 1.98122 11.9812 0.75 13.5 0.75C15.0188 0.75 16.25 1.98122 16.25 3.5Z"
          stroke={color}
        />
        <path
          d="M26 3.5C26 5.01878 24.7688 6.25 23.25 6.25C21.7312 6.25 20.5 5.01878 20.5 3.5C20.5 1.98122 21.7312 0.75 23.25 0.75C24.7688 0.75 26 1.98122 26 3.5Z"
          stroke={color}
        />
      </svg>
    </div>
  );
};

export default More;
