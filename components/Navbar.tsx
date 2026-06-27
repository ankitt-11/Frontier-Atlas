"use client";


export default function Navbar() {
  return (
    <nav className="h-[52px] bg-white border-b border-[#E5E7EB] flex items-center px-4 gap-4 shrink-0 z-50">
      {/* Left — Logo */}
      <div className="flex items-center gap-2 w-[200px] shrink-0">
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="#1E1B4B" strokeWidth="1.8" strokeLinejoin="round">
          <polygon points="14,4 26,24 2,24" />
          <polygon points="14,4 20,14 8,14" fill="#1E1B4B" stroke="none" opacity="0.15"/>
        </svg>
        <span className="font-semibold text-[16px] text-[#1E1B4B] tracking-tight">Frontier Atlas</span>
      </div>

      {/* Center — Search */}
      <div className="flex-1 flex justify-center">
        <div className="flex items-center gap-2 bg-[#F9F9F9] border border-[#E5E7EB] rounded-lg px-3 h-9 w-full max-w-[520px] cursor-text">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2">
            <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
          </svg>
          <span className="flex-1 text-[13px] text-[#9CA3AF]">
            Search papers, authors, topics...
          </span>
          <kbd className="bg-white border border-[#E5E7EB] rounded px-1.5 py-0.5 text-[11px] text-[#6B7280] font-medium">
            ⌘ K
          </kbd>
        </div>
      </div>

      {/* Right */}
      <div className="flex items-center gap-3 shrink-0">
        <button className="bg-gradient-to-r from-[#B83280] to-[#7B2CBF] hover:opacity-90 text-white text-[13px] font-semibold px-5 py-2 rounded-lg transition-opacity cursor-pointer border-none">
          Submit
        </button>
        <div className="w-8 h-8 rounded-full bg-[#E5E7EB] flex items-center justify-center cursor-pointer hover:bg-[#D1D5DB] transition-colors">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#6B7280" strokeWidth="2">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
            <circle cx="12" cy="7" r="4"/>
          </svg>
        </div>
      </div>
    </nav>
  );
}
