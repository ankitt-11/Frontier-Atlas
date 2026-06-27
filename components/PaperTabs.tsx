"use client";

import { useState } from "react";

const TABS = ["Today", "This Week", "This Month", "All time"];

export default function PaperTabs() {
  const [activeTab, setActiveTab] = useState("Today");

  return (
    <div className="border-b border-[#E5E7EB] mb-3">
      <div className="flex gap-1">
        {TABS.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-1 py-2.5 mr-5 text-[14px] font-medium border-b-2 transition-all duration-150 cursor-pointer whitespace-nowrap
              ${
                activeTab === tab
                  ? "text-[#7C3AED] border-[#7C3AED]"
                  : "text-[#6B7280] border-transparent hover:text-[#374151] hover:border-[#D1D5DB]"
              }`}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
}
