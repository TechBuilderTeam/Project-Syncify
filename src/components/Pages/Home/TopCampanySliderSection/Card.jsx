import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

const Card = ({ data }) => {
  const { image, title, paragraph } = data;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative border rounded-lg overflow-hidden shadow-lg transition duration-300 delay-150 ease-in-out transform hover:scale-80"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={image}
        alt={title}
        className={`w-full ${isHovered ? "h-50" : "h-60"} object-cover`}
      />
      <div className="p-6">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p
          className={`text-gray-700 ${
            isHovered ? "block" : "h-20 overflow-hidden mb-2"
          } dark:text-white`}
        >
          {paragraph}
        </p>
      </div>
    </div>
  );
};

export default Card;
