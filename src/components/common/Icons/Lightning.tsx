import React from "react";

interface Props {
  className?: string;
}

export default function Lightning({ className }: Props) {
  return (
    <svg
      className={className}
      width="17"
      height="28"
      viewBox="0 0 17 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.8062 0.799988L0.5 16.6667H7.2823L5.19381 28L16.5 12.1333H9.7177L11.8062 0.799988Z"
        fill="currentColor"
      />
    </svg>
  );
}
