import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden max-w-[100vw]">
      <main className="flex-1 w-full">{children}</main>
    </div>
  );
};

export default Layout;
