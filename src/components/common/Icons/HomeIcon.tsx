import React from "react";

type Props = {
  color: string;
  fill?: string;

};

const HomeIcon = ({ color,fill = "none" }: Props) => {
  return (
    <div>
      <svg
        width="24"
        height="25"
        viewBox="0 0 24 25"
        fill={fill}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20.04 7.32L14.28 3.29C12.71 2.19 10.3 2.25 8.79001 3.42L3.78001 7.33C2.78001 8.11 1.99001 9.71 1.99001 10.97V17.87C1.99001 20.42 4.06001 22.5 6.61001 22.5H17.39C19.94 22.5 22.01 20.43 22.01 17.88V11.1C22.01 9.75 21.14 8.09 20.04 7.32ZM12.75 18.5C12.75 18.91 12.41 19.25 12 19.25C11.59 19.25 11.25 18.91 11.25 18.5V15.5C11.25 15.09 11.59 14.75 12 14.75C12.41 14.75 12.75 15.09 12.75 15.5V18.5Z"
          stroke={color}
        />
      </svg>
    </div>
  );
};

export default HomeIcon;
