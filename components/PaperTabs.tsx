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
            className={`px-1 py-3 mr-8 text-[13px] font-normal border-b transition-all duration-150 cursor-pointer whitespace-nowrap
              ${
                activeTab === tab
                  ? "text-[#DB2777] border-[#DB2777]"
                  : "text-[#6B7280] border-transparent hover:text-[#DB2777] hover:border-transparent"
              }`}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
}
