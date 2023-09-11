import React from "react";

const TableLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div>
      table layout
      {children}
    </div>
  );
};

export default TableLayout;
