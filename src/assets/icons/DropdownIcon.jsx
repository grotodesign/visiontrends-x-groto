import React from "react";

const DropdownIcon = ({ isOpen, className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {isOpen ? <polyline points="6 9 12 15 18 9" /> : <h1>hE</h1>}
    </svg>
  );
};

export default DropdownIcon;
