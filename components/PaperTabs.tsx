'use client'

import { useState } from 'react'

const TABS = ['Today', 'This Week', 'This Month', 'All time']

export default function PaperTabs() {
  const [activeTab, setActiveTab] = useState('Today')

  return (
    <div className="bg-white border border-gray-200 rounded-xl px-6 mb-4">
      <div className="flex gap-6">
        {TABS.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`
              py-3 text-[14px] font-medium border-b-2 transition-all 
              duration-200 cursor-pointer whitespace-nowrap
              ${activeTab === tab
                ? 'text-purple-600 border-purple-600'
                : 'text-gray-500 border-transparent hover:text-gray-700 hover:border-gray-300'
              }
            `}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  )
}
