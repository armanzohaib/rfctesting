import React from "react";

type Props = {
  color: string;
  fill?: string;
};

const Wallet = ({ color,fill = "none" }: Props) => {
  return (
    <div>
      <svg
        width="25"
        height="25"
        viewBox="0 0 25 25"
        fill={fill}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M22.5 12.5V17.5C22.5 20.5 20.5 22.5 17.5 22.5H7.5C4.5 22.5 2.5 20.5 2.5 17.5V12.5C2.5 9.78 4.14 7.88 6.69 7.56C6.95 7.52 7.22 7.5 7.5 7.5H17.5C17.76 7.5 18.01 7.50999 18.25 7.54999C20.83 7.84999 22.5 9.76 22.5 12.5Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18.2514 7.55C18.0114 7.51 17.7614 7.50001 17.5014 7.50001H7.50141C7.22141 7.50001 6.95141 7.52001 6.69141 7.56001C6.83141 7.28001 7.03141 7.02001 7.27141 6.78001L10.5214 3.52C11.8914 2.16 14.1114 2.16 15.4814 3.52L17.2314 5.29002C17.8714 5.92002 18.2114 6.72 18.2514 7.55Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M22.5 13H19.5C18.4 13 17.5 13.9 17.5 15C17.5 16.1 18.4 17 19.5 17H22.5"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export default Wallet;
