import React from "react";

type Props = {
  color: string;
  fill?: string;

};
const People = ({ color,fill = "none" }: Props) => {
  return (
    <div>
      <svg
        width="27"
        height="19"
        viewBox="0 0 27 19"
        fill={fill}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.35 4.95002C12.35 7.18857 10.5385 9.00002 8.3 9.00002C6.06145 9.00002 4.25 7.18857 4.25 4.95002C4.25 2.71148 6.06145 0.900024 8.3 0.900024C10.5385 0.900024 12.35 2.71148 12.35 4.95002ZM8.3 11.95C9.34058 11.95 10.3164 11.7058 11.1947 11.3H11.42C13.7276 11.3 15.6 13.1724 15.6 15.48V16.65C15.6 17.4504 14.9504 18.1 14.15 18.1H2.45C1.64958 18.1 1 17.4504 1 16.65V15.48C1 13.1724 2.87239 11.3 5.18 11.3H5.40572C6.28665 11.7054 7.2587 11.95 8.3 11.95ZM23.4 5.60002C23.4 7.47701 21.877 9.00002 20 9.00002C18.123 9.00002 16.6 7.47701 16.6 5.60002C16.6 3.72304 18.123 2.20002 20 2.20002C21.877 2.20002 23.4 3.72304 23.4 5.60002ZM20 11.625C20.6717 11.625 21.2981 11.4932 21.8781 11.3H21.95C24.1885 11.3 26 13.1115 26 15.35C26 16.1504 25.3504 16.8 24.55 16.8H17.9V15.48C17.9 14.0151 17.4003 12.6735 16.5799 11.5929C17.0388 11.4063 17.5315 11.3 18.05 11.3H18.1219C18.7019 11.4932 19.3283 11.625 20 11.625Z"
          stroke={color}
        />
      </svg>
    </div>
  );
};

export default People;
