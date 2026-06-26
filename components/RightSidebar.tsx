"use client";

import { Star, Github } from "lucide-react";
import { rightSidebarData } from "@/data/mockData";

// X (Twitter) icon
function XIcon({ size = 14, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  );
}

// Reddit icon
function RedditIcon({ size = 14, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="currentColor" className={className}>
      <path d="M10 0C4.478 0 0 4.478 0 10c0 5.523 4.478 10 10 10 5.523 0 10-4.477 10-10 0-5.522-4.477-10-10-10zm4.908 3.958a1.042 1.042 0 110 2.084 1.042 1.042 0 010-2.084zm-9.1 2.506c.282 0 .557.044.817.127l1.547-2.327a.625.625 0 011.042.692l-1.44 2.166a3.335 3.335 0 011.559 2.828A3.335 3.335 0 0110 13.286a3.335 3.335 0 01-3.333-3.337c0-.47.098-.918.273-1.325l-1.47-2.21a.625.625 0 111.041-.693l1.396 2.1a3.316 3.316 0 01.901-.357zM10 8.333c-1.84 0-3.333 1.494-3.333 3.334S8.16 15 10 15c1.84 0 3.333-1.493 3.333-3.333S11.84 8.333 10 8.333zm-1.667 2.084a.833.833 0 110 1.666.833.833 0 010-1.666zm3.334 0a.833.833 0 110 1.666.833.833 0 010-1.666zm-3.75 2.5a.208.208 0 01.148.357c.559.558 1.65.601 1.934.601.284 0 1.375-.043 1.933-.601a.208.208 0 01.295.295C11.384 14.04 10.284 14.167 10 14.167c-.284 0-1.384-.127-1.731-.598a.208.208 0 01.148-.152z"/>
    </svg>
  );
}

type PlatformType = "twitter" | "reddit";

function RowIcon({ platform }: { platform: PlatformType }) {
  if (platform === "twitter") return <XIcon size={12} className="text-gray-500" />;
  return <RedditIcon size={14} className="text-orange-500" />;
}

function HeaderIcon({ platform }: { platform: PlatformType }) {
  if (platform === "twitter") return <XIcon size={15} className="text-gray-800" />;
  return (
    <div className="w-[24px] h-[24px] rounded-full bg-[#ff4500] flex items-center justify-center">
      <RedditIcon size={14} className="text-white" />
    </div>
  );
}

function TrendingCard({
  title,
  items,
  viewAllLabel,
  platform,
}: {
  title: string;
  items: { name: string; growth: string }[];
  viewAllLabel: string;
  platform: PlatformType;
}) {
  return (
    <div>
      <div className="flex items-center gap-2.5 mb-3">
        <div className="flex-shrink-0 flex items-center">
          <HeaderIcon platform={platform} />
        </div>
        <span className="text-[11px] font-semibold text-gray-800 uppercase tracking-wider">
          {title}
        </span>
      </div>

      <div className="space-y-1">
        {items.map((item, i) => (
          <div key={i} className="flex items-center gap-2 py-1 cursor-pointer group">
            <div className="w-[18px] flex items-center justify-center flex-shrink-0">
              <RowIcon platform={platform} />
            </div>
            <span className="text-[13px] text-gray-700 flex-1 min-w-0 group-hover:text-gray-900 transition-colors">
              {item.name}
            </span>
            <span className="text-[12px] text-gray-500 font-medium flex-shrink-0">{item.growth}</span>
            <Star size={12} className="text-amber-400 fill-amber-400 flex-shrink-0 group-hover:text-amber-500 group-hover:fill-amber-500 transition-colors" />
          </div>
        ))}
      </div>

      <button className="text-[12px] text-purple-600 flex items-center gap-1 mt-2 hover:underline cursor-pointer bg-transparent border-0 p-0">
        {viewAllLabel} &rarr;
      </button>
    </div>
  );
}

export default function RightSidebar() {
  const githubRepos = [
    { name: "microsoft/BitNet", stars: "+2.1k" },
    { name: "huggingface/transformers", stars: "+1.8k" },
    { name: "databricks/dolly", stars: "+1.6k" },
    { name: "vlm-project/vlm", stars: "+1.4k" },
    { name: "unslothai/unsloth", stars: "+1.2k" },
  ];

  return (
    <aside className="w-[260px] shrink-0 bg-white border-l border-gray-200 overflow-y-auto hide-scroll p-4 flex flex-col">
      {/* SECTION 1 — GitHub Trending */}
      <div>
        <div className="flex items-center gap-2 mb-3">
          <Github size={16} className="text-gray-700" />
          <span className="text-[11px] font-semibold text-gray-800 uppercase tracking-wider">
            TRENDING ON GITHUB
          </span>
        </div>
        
        <div className="flex flex-col">
          {githubRepos.map((repo, i) => (
            <div key={i} className="flex items-center gap-2 py-1 cursor-pointer group">
              <Github size={14} className="text-gray-400 flex-shrink-0 group-hover:text-gray-600 transition-colors" />
              <span className="text-[13px] text-gray-700 flex-1 min-w-0 truncate group-hover:text-gray-900 transition-colors">
                {repo.name}
              </span>
              <span className="text-[12px] text-gray-500 font-medium flex-shrink-0">{repo.stars}</span>
              <Star size={12} className="text-amber-400 fill-amber-400 flex-shrink-0 group-hover:text-amber-500 group-hover:fill-amber-500 transition-colors" />
            </div>
          ))}
        </div>
        
        <button className="text-[12px] text-purple-600 flex items-center gap-1 mt-2 hover:underline cursor-pointer bg-transparent border-0 p-0">
          View all trending repos &rarr;
        </button>
      </div>

      <div className="border-t border-gray-100 my-4" />

      {/* SECTION 2 — Trending on X */}
      <TrendingCard
        title={rightSidebarData.twitter.title}
        items={rightSidebarData.twitter.items}
        viewAllLabel={rightSidebarData.twitter.viewAllLabel}
        platform="twitter"
      />

      <div className="border-t border-gray-100 my-4" />

      {/* SECTION 3 — Trending on Reddit */}
      <TrendingCard
        title={rightSidebarData.reddit.title}
        items={rightSidebarData.reddit.items}
        viewAllLabel={rightSidebarData.reddit.viewAllLabel}
        platform="reddit"
      />
    </aside>
  );
}
