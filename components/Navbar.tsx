"use client";

import { Search, User } from "lucide-react";

export default function Navbar() {
  return (
    <header className="z-50 bg-[#FAFAFC] h-[64px] shrink-0 flex items-center px-6 border-b border-[#ECECF3]">
      <div className="flex items-center w-full max-w-[1900px] mx-auto">
        {/* Logo */}
        <div className="flex items-center gap-2 w-[220px] flex-shrink-0">
          <div className="w-[38px] h-[38px] flex items-center justify-center">
            <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
            </svg>
          </div>
          <span className="font-bold text-[18px] text-gray-900 tracking-tight">Frontier Atlas</span>
        </div>

        {/* Search Bar - perfectly centered */}
        <div className="flex-1 flex justify-center">
          <div className="relative flex items-center w-[440px] h-[44px]">
            <div className="absolute left-5 text-gray-400">
              <Search size={20} strokeWidth={2} />
            </div>
            <input
              type="text"
              placeholder="Search papers, authors, topics..."
              className="w-full h-full pl-11 pr-14 text-[14px] border border-[#E5E7EB] rounded-lg bg-white text-gray-700 placeholder-gray-400 focus:outline-none focus:border-gray-300 focus:ring-1 focus:ring-gray-100 transition-shadow"
            />
            <div className="absolute right-4">
              <kbd className="inline-flex items-center gap-1 px-2 py-1 text-[11px] font-medium text-gray-400 bg-gray-50 border border-[#E5E7EB] rounded">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path></svg>
                K
              </kbd>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4 w-[220px] justify-end">
          <button className="px-5 py-2 text-[14px] font-semibold text-white bg-[#A32A85] hover:bg-[#8d2473] rounded-lg transition-colors cursor-pointer">
            Submit
          </button>
          <div className="w-[38px] h-[38px] rounded-full bg-white flex items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors border border-[#ECECF3]">
            <User size={18} className="text-gray-500" strokeWidth={2} />
          </div>
        </div>
      </div>
    </header>
  );
}
