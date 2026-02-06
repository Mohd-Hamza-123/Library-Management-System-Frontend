
import "@/styles/dashboard.css";
import type { ReactNode } from "react";
import Header from "@/components/Header/Header";
import Sidebar from "@/components/Sidebar/Sidebar";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <Header />
      <div className="flex h-[80dvh] md:h-[90dvh] overflow-x-hidden overflow-y-auto">
        <Sidebar />
        <main className="flex-1 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
