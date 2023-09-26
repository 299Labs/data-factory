import React, { Suspense } from "react";
import QuickStartLoading from "@/src/app/(quickstart)/start/loading";

const QuickStartLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <Suspense fallback={<QuickStartLoading />}>{children}</Suspense>;
};

export default QuickStartLayout;
