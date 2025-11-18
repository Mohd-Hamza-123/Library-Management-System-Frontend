
import { Header, LibrarySections, Sidebar } from "@/components";
import React from "react";

export default function LibraryOptions() {

  return (
    <div>
      <Header />
      <div className='flex h-[90dvh]'>
        <Sidebar />
        <LibrarySections />
      </div>
    </div>

  );
}
