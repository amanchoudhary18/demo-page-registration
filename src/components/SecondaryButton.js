import React from "react";

const SecondaryButton = ({
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
      className="w-100 border border-dark rounded secondary-button"
      role="button"
    >
      <p className="text-xs-poppins d-flex flex-row justify-content-center pt-lg-3 pt-2 bold">
        {icon && (
          <span>
            <img src={icon} alt="icon" className="pe-2" />
          </span>
        )}
        {title}
      </p>
    </div>
  );
};

export default SecondaryButton;
