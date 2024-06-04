import React, { useState } from "react";

export default function ReadMore({ children }) {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <p className="text">
      {isReadMore ? text.slice(0, 400) : text}
      <span onClick={toggleReadMore} className="text-[#1F3E7C]">
        {isReadMore ? "...read more" : " show less"}
      </span>
    </p>
  );
}
