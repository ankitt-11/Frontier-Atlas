"use client";

import { Star, Github } from "lucide-react";

// X (Twitter) icon
function XIcon({ size = 14, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

// Reddit icon
function RedditIcon({ size = 14, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="currentColor" className={className}>
      <path d="M10 0C4.478 0 0 4.478 0 10c0 5.523 4.478 10 10 10 5.523 0 10-4.477 10-10 0-5.522-4.477-10-10-10zm4.908 3.958a1.042 1.042 0 110 2.084 1.042 1.042 0 010-2.084zm-9.1 2.506c.282 0 .557.044.817.127l1.547-2.327a.625.625 0 011.042.692l-1.44 2.166a3.335 3.335 0 011.559 2.828A3.335 3.335 0 0110 13.286a3.335 3.335 0 01-3.333-3.337c0-.47.098-.918.273-1.325l-1.47-2.21a.625.625 0 111.041-.693l1.396 2.1a3.316 3.316 0 01.901-.357zM10 8.333c-1.84 0-3.333 1.494-3.333 3.334S8.16 15 10 15c1.84 0 3.333-1.493 3.333-3.333S11.84 8.333 10 8.333zm-1.667 2.084a.833.833 0 110 1.666.833.833 0 010-1.666zm3.334 0a.833.833 0 110 1.666.833.833 0 010-1.666zm-3.75 2.5a.208.208 0 01.148.357c.559.558 1.65.601 1.934.601.284 0 1.375-.043 1.933-.601a.208.208 0 01.295.295C11.384 14.04 10.284 14.167 10 14.167c-.284 0-1.384-.127-1.731-.598a.208.208 0 01.148-.152z" />
    </svg>
  );
}

export default function RightSidebar() {
  const githubRepos = [
    { name: "microsoft/BitNet", count: "+2.1k" },
    { name: "huggingface/transformers", count: "+1.8k" },
    { name: "databricks/dolly", count: "+1.6k" },
    { name: "vlm-project/vlm", count: "+1.4k" },
    { name: "unslothai/unsloth", count: "+1.2k" },
  ];

  const xPosts = [
    { name: "x.com/levelsio", count: "+2.1k" },
    { name: "x.com/EMostaque", count: "+1.8k" },
    { name: "x.com/ai_for_success", count: "+1.6k" },
    { name: "x.com/deewydas", count: "+1.4k" },
    { name: "x.com/rowancheung", count: "+1.2k" },
  ];

  const redditDiscussions = [
    { name: "r/MachineLearning", count: "+2.1k" },
    { name: "r/LocalLLaMA", count: "+1.8k" },
    { name: "r/ArtificialIntelligence", count: "+1.6k" },
    { name: "r/DeepLearning", count: "+1.4k" },
    { name: "r/LLMDevs", count: "+1.2k" },
  ];

  return (
    <aside className="w-[260px] shrink-0 bg-white border-l border-[#E5E7EB] overflow-y-auto hide-scroll p-4">
      {/* SECTION 1 — TRENDING ON GITHUB */}
      <div className="flex items-center gap-2 mb-3">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="#111827">
          <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
        </svg>
        <span className="text-[11px] font-bold text-[#111827] uppercase tracking-[0.08em]">
          TRENDING ON GITHUB
        </span>
      </div>

      <div className="flex flex-col gap-0">
        {githubRepos.map((repo) => (
          <div key={repo.name} className="flex items-center gap-2 py-1.5 cursor-pointer hover:bg-[#F9F9F9] rounded-lg px-1 -mx-1 transition-colors">
            <Github size={13} className="text-[#9CA3AF] shrink-0" />
            <span className="flex-1 text-[13px] text-[#374151] font-medium truncate">
              {repo.name}
            </span>
            <span className="text-[12px] text-[#6B7280] font-medium shrink-0">
              {repo.count}
            </span>
            <Star size={11} className="text-[#F59E0B] fill-[#F59E0B] shrink-0" />
          </div>
        ))}
      </div>

      <button className="text-[12px] text-[#7C3AED] flex items-center gap-1 mt-2 mb-4 hover:underline cursor-pointer bg-transparent border-0 p-0">
        View all trending repos &rarr;
      </button>

      <div className="border-t border-[#F3F4F6]" />

      {/* SECTION 2 — TRENDING ON X */}
      <div className="flex items-center gap-2 mb-3 mt-4">
        <XIcon size={16} className="text-[#111827]" />
        <span className="text-[11px] font-bold text-[#111827] uppercase tracking-[0.08em]">
          TRENDING ON X
        </span>
      </div>

      <div className="flex flex-col gap-0">
        {xPosts.map((post) => (
          <div key={post.name} className="flex items-center gap-2 py-1.5 cursor-pointer hover:bg-[#F9F9F9] rounded-lg px-1 -mx-1 transition-colors">
            <XIcon size={12} className="text-[#111827] shrink-0" />
            <span className="flex-1 text-[13px] text-[#374151] font-medium truncate">
              {post.name}
            </span>
            <span className="text-[12px] text-[#6B7280] font-medium shrink-0">
              {post.count}
            </span>
            <Star size={11} className="text-[#F59E0B] fill-[#F59E0B] shrink-0" />
          </div>
        ))}
      </div>

      <button className="text-[12px] text-[#7C3AED] flex items-center gap-1 mt-2 mb-4 hover:underline cursor-pointer bg-transparent border-0 p-0">
        View all trending posts &rarr;
      </button>

      <div className="border-t border-[#F3F4F6]" />

      {/* SECTION 3 — TRENDING ON REDDIT */}
      <div className="flex items-center gap-2 mb-3 mt-4">
        <RedditIcon size={18} className="text-[#FF4500]" />
        <span className="text-[11px] font-bold text-[#111827] uppercase tracking-[0.08em]">
          TRENDING ON REDDIT
        </span>
      </div>

      <div className="flex flex-col gap-0">
        {redditDiscussions.map((discussion) => (
          <div key={discussion.name} className="flex items-center gap-2 py-1.5 cursor-pointer hover:bg-[#F9F9F9] rounded-lg px-1 -mx-1 transition-colors">
            <RedditIcon size={14} className="text-[#FF4500] shrink-0" />
            <span className="flex-1 text-[13px] text-[#374151] font-medium truncate">
              {discussion.name}
            </span>
            <span className="text-[12px] text-[#6B7280] font-medium shrink-0">
              {discussion.count}
            </span>
            <Star size={11} className="text-[#F59E0B] fill-[#F59E0B] shrink-0" />
          </div>
        ))}
      </div>

      <button className="text-[12px] text-[#7C3AED] flex items-center gap-1 mt-2 hover:underline cursor-pointer bg-transparent border-0 p-0">
        View all trending discussions &rarr;
      </button>
    </aside>
  );
}
