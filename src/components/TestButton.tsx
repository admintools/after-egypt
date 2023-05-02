import React from "react";

export const TestButton: React.FC = () => {
  const bgColor = "border-teal-500 ";
  const borderColor = "#ff5733";
  const fontColor = "#ff5733";
  const border = "4";

  return (
    <button
      type="button"
      className={`px-4 py-2 border-${border} rounded font-semibold bg-${bgColor} border-green-500 text-[${fontColor}`}
    >
      Test Button
    </button>
  );
};
