
import type { ReactNode } from "react";
import Header from "@/components/Header/Header";
import Sidebar from "@/components/Sidebar";
import "@/styles/dashboard.css";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <Header />
      <div className="flex h-[90dvh]">
        <Sidebar />
        <div className="flex-1 overflow-y-auto">
          {children}
        </div>
      </div>
    </div>
  );
}
