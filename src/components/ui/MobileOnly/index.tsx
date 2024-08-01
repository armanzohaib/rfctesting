import React, { ReactNode } from "react";

interface MobileOnlyProps {
  children: ReactNode;
}

const MobileOnly: React.FC<MobileOnlyProps> = ({ children }) => {
  return <div className="block md:hidden">{children}</div>;
};

export default MobileOnly;
