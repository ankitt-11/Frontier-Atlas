"use client";

import { ArrowUp, GitBranch, MessageSquare, Star } from "lucide-react";
import { papers } from "@/data/mockData";

// Fix 7 + 12: All tags rounded-full; gray tags have bg-[#F3F4F6]
const tagColorMap: Record<string, string> = {
  "Agents":            "bg-[#F0F7FF] text-[#2563EB]",
  "Coding Agents":     "bg-[#FAF5FF] text-[#9333EA]",
  "Language Modeling": "bg-[#F0FDF4] text-[#16A34A]",
  "Math":              "bg-[#FFF7ED] text-[#EA580C]",
  "World Knowledge":   "bg-[#FEF2F2] text-[#DC2626]",
  "Reasoning":         "bg-[#FAF5FF] text-[#9333EA]",
  "Long Context":      "bg-[#F0F7FF] text-[#2563EB]",
  "Efficiency":        "bg-[#F0FDF4] text-[#16A34A]",
  "Model Merging":     "bg-[#FFF7ED] text-[#EA580C]",
};

// Fix 5 + 17: Realistic per-variant paper thumbnails
function PaperThumbnail({ variant }: { variant: 1 | 2 | 3 }) {
  return (
    <div className="w-[72px] h-[96px] border border-gray-200 rounded-md bg-white shrink-0 overflow-hidden p-1.5 flex flex-col gap-1">
      {/* Title block */}
      <div className="w-full h-[6px] bg-gray-800 rounded-sm" />
      <div className="w-3/4 h-[4px] bg-gray-600 rounded-sm" />
      {/* Author line */}
      <div className="w-full h-[3px] bg-gray-300 rounded-sm mt-0.5" />
      {/* Abstract lines */}
      <div className="w-full h-[3px] bg-gray-200 rounded-sm mt-1" />
      <div className="w-full h-[3px] bg-gray-200 rounded-sm" />
      <div className="w-5/6 h-[3px] bg-gray-200 rounded-sm" />

      {/* Chart — variant 1: bar chart */}
      {variant === 1 && (
        <div className="w-full h-[20px] bg-blue-50 border border-blue-100 rounded-sm mt-1 flex items-end gap-px px-1 pb-0.5">
          {[3, 6, 4, 7, 5, 8, 4].map((h, i) => (
            <div key={i} className="flex-1 bg-blue-400 rounded-sm" style={{ height: `${h * 2}px` }} />
          ))}
        </div>
      )}

      {/* Chart — variant 2: line/area SVG */}
      {variant === 2 && (
        <div className="w-full h-[20px] bg-blue-50 border border-blue-100 rounded-sm mt-1 relative overflow-hidden">
          <svg viewBox="0 0 60 20" className="w-full h-full">
            <polyline
              points="0,18 10,12 20,14 30,6 40,10 50,4 60,8"
              fill="none" stroke="#3B82F6" strokeWidth="1.5"
            />
            <polygon
              points="0,18 10,12 20,14 30,6 40,10 50,4 60,8 60,20 0,20"
              fill="#EFF6FF" opacity="0.8"
            />
          </svg>
        </div>
      )}

      {/* Chart — variant 3: mini table */}
      {variant === 3 && (
        <div className="w-full mt-1 border border-gray-100 rounded-sm overflow-hidden">
          {[["Bench", "Score"], ["NQ", "91.2"], ["CSQ", "88.7"]].map(([a, b], i) => (
            <div
              key={i}
              className={`flex justify-between px-1 ${i === 0 ? "bg-gray-100 font-bold" : "bg-white"}`}
              style={{ fontSize: "6px" }}
            >
              <span>{a}</span><span>{b}</span>
            </div>
          ))}
        </div>
      )}

      {/* More text lines */}
      <div className="w-full h-[3px] bg-gray-200 rounded-sm mt-1" />
      <div className="w-4/5 h-[3px] bg-gray-200 rounded-sm" />
    </div>
  );
}

function PrimaryTag({ label }: { label: string }) {
  const colorClass = tagColorMap[label] || "bg-[#F3F4F6] text-[#374151]";
  return (
    // Fix 7: rounded-full; Fix 16: cursor-pointer + hover
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-medium cursor-pointer hover:opacity-80 transition-opacity ${colorClass}`}>
      {label}
    </span>
  );
}

function SecondaryTag({ label }: { label: string }) {
  return (
    // Fix 7: rounded-full; Fix 12: explicit bg; Fix 16: cursor-pointer
    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-[#F3F4F6] text-[#374151] cursor-pointer hover:opacity-80 transition-opacity">
      {label}
    </span>
  );
}

function MetricItem({
  icon,
  value,
  label,
  valueColor,
}: {
  icon: React.ReactNode;
  value: string | number;
  label: string;
  valueColor: string;
}) {
  return (
    <div className="flex flex-col items-center gap-1.5 w-24">
      <div className="flex items-center gap-2">
        {icon}
        <span className={`text-[15px] font-bold ${valueColor}`}>{value}</span>
      </div>
      <span className="text-[12px] font-medium text-gray-400 leading-none">{label}</span>
    </div>
  );
}

function PaperCard({
  paper,
  variant,
}: {
  paper: (typeof papers)[0];
  variant: 1 | 2 | 3;
}) {
  return (
    <div className="flex gap-5 py-6 border-b border-[#ECECF3] last:border-b-0 hover:bg-gray-50/50 transition-colors group">
      <PaperThumbnail variant={variant} />

      <div className="flex-1 min-w-0 py-1">
        {/* Fix 16: cursor-pointer + hover:text-purple-600 on title */}
        <h3 className="text-[17px] font-bold text-[#111827] leading-tight mb-2 cursor-pointer hover:text-purple-600 transition-colors line-clamp-2">
          {paper.title}
        </h3>

        <div className="flex items-center gap-2 mb-3">
          <span className="text-[13px] font-medium text-gray-500">{paper.authors}</span>
          <span className="text-gray-300 text-[10px]">•</span>
          <span className="text-[13px] text-gray-400">{paper.date}</span>
        </div>

        <p className="text-[13px] text-gray-600 leading-[1.6] mb-3 line-clamp-3">
          {paper.description}
        </p>

        {/* Fix 6: Gold star + "SOTA on ..." in purple, "• #X on ..." in gray */}
        <div className="flex flex-wrap items-center gap-1.5 mb-3">
          <Star size={12} className="text-amber-400 fill-amber-400 shrink-0" />
          <span className="text-[11px] font-medium text-purple-600">
            {paper.sota.split(" • ")[0]}
          </span>
          {paper.sota.split(" • ").slice(1).map((part, i) => (
            <span key={i} className="text-[11px] text-gray-500">• {part}</span>
          ))}
        </div>

        {/* Fix 7 + 12: rounded-full tags with bg fills */}
        <div className="flex flex-wrap gap-2 mt-auto">
          {paper.tags.map((tag) => (
            <PrimaryTag key={tag} label={tag} />
          ))}
          {paper.additionalTags.map((tag) => (
            <SecondaryTag key={tag} label={tag} />
          ))}
        </div>
      </div>

      <div className="flex flex-col items-center justify-center gap-6 min-w-[90px] flex-shrink-0">
        <MetricItem
          icon={<ArrowUp size={18} strokeWidth={2.5} className="text-pink-500" />}
          value={paper.upvotes}
          label="Upvotes"
          valueColor="text-pink-500"
        />
        <MetricItem
          icon={<GitBranch size={18} strokeWidth={2.5} className="text-[#111827]" />}
          value={paper.repo}
          label="Repo"
          valueColor="text-[#111827]"
        />
        <MetricItem
          icon={<MessageSquare size={18} strokeWidth={2} className="text-gray-400" />}
          value={paper.citations}
          label="Citations"
          valueColor="text-[#111827]"
        />
      </div>
    </div>
  );
}

const VARIANTS: (1 | 2 | 3)[] = [1, 2, 3];

export default function PaperList() {
  return (
    <div className="bg-white rounded-[16px] border border-[#ECECF3] shadow-[0_2px_12px_rgba(0,0,0,0.02)] p-5">
      <div className="px-2">
        {papers.map((paper, index) => (
          <PaperCard key={paper.id} paper={paper} variant={VARIANTS[index % 3]} />
        ))}
      </div>
    </div>
  );
}
