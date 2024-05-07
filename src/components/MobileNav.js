import React from "react";

const MobileNav = ({ title }) => {
  return (
    <div className="d-flex flex-row justify-content-start gap-3 d-md-none mt-3 mobile-nav px-3">
      <i class="bi bi-arrow-left"></i>
      <p className="text-sm-roboto  pt-1">{title}</p>
    </div>
  );
};

export default MobileNav;
