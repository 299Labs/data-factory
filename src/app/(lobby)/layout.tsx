import React from "react";

const LobbyLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <main className="mx-auto flex min-h-screen flex-col items-center space-y-8 text-center max-sm:mt-10 sm:space-y-16 sm:p-24 2xl:space-y-32">
      {children}
    </main>
  );
};

export default LobbyLayout;
