import React from "react";

const CalendarLoading: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div>
      calendar loading
      {children}
    </div>
  );
};

export default CalendarLoading;
