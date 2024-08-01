import React from "react";

const DesktopMessage: React.FC = () => {
  return (
    <div className="hidden md:flex justify-center h-screen items-center">
      <h2 className="h2 text-primary text-center">
        This application is only available on mobile devices.
      </h2>
    </div>
  );
};

export default DesktopMessage;
