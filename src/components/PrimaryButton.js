import React from "react";

const PrimaryButton = ({
  title,
  onClick,
  backgroundColor = "white",
  color = "black",
  icon,
}) => {
  return (
    <div
      onClick={onClick}
      style={{ backgroundColor: backgroundColor, color: color }}
      className="w-100 rounded  align-items-center"
      role="button"
    >
      <p className="text-md-sm-poppins text-center py-2">{title}</p>
    </div>
  );
};

export default PrimaryButton;
