import React from "react";
import LobbyLayout from "@/src/app/(lobby)/layout";

const QuickStartLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <LobbyLayout>{children}</LobbyLayout>;
};

export default QuickStartLayout;
