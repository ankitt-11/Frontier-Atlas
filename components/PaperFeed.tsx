"use client";

import { TrendingUp, GitFork, MessageCircle, Star } from "lucide-react";
import { papers } from "@/data/mockData";
import { Tag } from "@/components/ui/Tag";

function getTagColor(label: string): string {
  const mapping: Record<string, string> = {
    "Agents": "purple",
    "Coding Agents": "blue",
    "Language Modeling": "blue",
    "Math": "orange",
    "World Knowledge": "green",
    "Long Context": "purple",
    "Efficiency": "green",
    "Reasoning": "orange",
    "Model Merging": "purple",
  };
  return mapping[label] || "gray";
}

function processTags(tags: string[], additionalTags: string[] = []) {
  const allTags = [...tags, ...additionalTags];
  const colorTags: { label: string; color: string }[] = [];
  const grayTags: string[] = [];

  allTags.forEach((tag) => {
    const color = getTagColor(tag);
    if (color !== "gray") {
      colorTags.push({ label: tag, color });
    } else {
      grayTags.push(tag);
    }
  });

  return { colorTags, grayTags };
}

function parseSota(sotaStr: string) {
  // sota: "SOTA on AIME 2026, HMMT Feb 2026, PostTrainBench • #3 on FrontierSWE, NL2Repo"
  if (!sotaStr) return { primary: "", secondary: "" };
  const parts = sotaStr.split(" • ");
  const primary = parts[0].replace(/^SOTA on\s+/i, "");
  const secondary = parts.slice(1).join(" • ");
  return { primary, secondary };
}

function PaperThumbnail() {
  return (
    <div className="w-[72px] h-[96px] shrink-0 border border-[#E5E7EB] rounded-lg bg-white overflow-hidden p-1.5 flex flex-col gap-[3px]">
      {/* Title line — dark */}
      <div className="w-full h-[5px] bg-[#374151] rounded-sm" />
      <div className="w-4/5 h-[4px] bg-[#6B7280] rounded-sm" />
      {/* Author */}
      <div className="w-full h-[3px] bg-[#D1D5DB] rounded-sm mt-[2px]" />
      {/* Abstract lines */}
      <div className="w-full h-[2px] bg-[#E5E7EB] rounded-sm mt-[2px]" />
      <div className="w-full h-[2px] bg-[#E5E7EB] rounded-sm" />
      <div className="w-3/4 h-[2px] bg-[#E5E7EB] rounded-sm" />
      {/* Chart figure */}
      <div className="w-full mt-[3px] bg-[#EFF6FF] border border-[#BFDBFE] rounded-sm p-[2px] flex items-end gap-[2px] h-[22px]">
        {[40, 70, 50, 85, 60, 90, 55, 75].map((h, i) => (
          <div
            key={i}
            className="flex-1 bg-[#3B82F6] rounded-sm"
            style={{ height: `${h}%` }}
          />
        ))}
      </div>
      {/* More lines */}
      <div className="w-full h-[2px] bg-[#E5E7EB] rounded-sm mt-[2px]" />
      <div className="w-5/6 h-[2px] bg-[#E5E7EB] rounded-sm" />
      <div className="w-full h-[2px] bg-[#E5E7EB] rounded-sm" />
    </div>
  );
}

function PaperCard({ paper }: { paper: (typeof papers)[0] }) {
  const { colorTags, grayTags } = processTags(paper.tags, paper.additionalTags);
  const { primary: sotaPrimary, secondary: sotaSecondary } = parseSota(paper.sota);

  return (
    <div className="bg-white border border-[#E5E7EB] rounded-xl p-4 mb-3 flex gap-4 shadow-[0_1px_3px_0_rgb(0,0,0,0.06),0_1px_2px_-1px_rgb(0,0,0,0.06)] hover:shadow-[0_4px_12px_0_rgb(0,0,0,0.08)] transition-shadow cursor-pointer min-w-0">
      {/* LEFT — Thumbnail */}
      <PaperThumbnail />

      {/* MIDDLE — Content */}
      <div className="flex-1 min-w-0">
        <h3 className="text-[16px] font-bold text-[#111827] leading-snug hover:text-[#7C3AED] transition-colors">
          {paper.title}
        </h3>
        <p className="text-[12px] text-[#6B7280] mt-0.5">
          <span className="font-medium text-[#374151]">{paper.authors}</span>
          <span className="mx-1.5">·</span>
          {paper.date}
        </p>
        <p className="text-[13px] text-[#4B5563] leading-relaxed mt-1.5 line-clamp-3">
          {paper.description}
        </p>

        {/* SOTA row */}
        {sotaPrimary && (
          <div className="flex flex-wrap items-center gap-1.5 mt-2">
            <Star size={12} className="text-[#F59E0B] fill-[#F59E0B] shrink-0" />
            <span className="text-[11px] font-semibold text-[#7C3AED]">
              SOTA on {sotaPrimary}
            </span>
            {sotaSecondary && (
              <span className="text-[11px] text-[#6B7280]">
                • {sotaSecondary}
              </span>
            )}
          </div>
        )}

        {/* Tags row 1 (colored pills) */}
        {colorTags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-2">
            {colorTags.map((tag) => (
              <Tag key={tag.label} label={tag.label} color={tag.color} />
            ))}
          </div>
        )}

        {/* Tags row 2 (gray pills) */}
        {grayTags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-1">
            {grayTags.map((tag) => (
              <span
                key={tag}
                className="bg-[#F3F4F6] text-[#374151] text-[11px] font-medium px-2.5 py-0.5 rounded-full cursor-pointer hover:bg-[#E5E7EB] transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* RIGHT — Stats */}
      <div className="w-[100px] shrink-0 flex flex-col items-end gap-3">
        {[
          { icon: <TrendingUp size={14} />, value: paper.upvotes, label: "Upvotes", color: "text-[#DB2777]" },
          { icon: <GitFork size={14} />, value: paper.repo, label: "Repo", color: "text-[#374151]" },
          { icon: <MessageCircle size={14} />, value: paper.citations, label: "Citations", color: "text-[#374151]" },
        ].map((stat) => (
          <div key={stat.label} className="flex flex-col items-end">
            <div className={`flex items-center gap-1 font-bold text-[14px] ${stat.color}`}>
              {stat.icon}
              {stat.value}
            </div>
            <span className="text-[11px] text-[#9CA3AF] mt-0.5">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function PaperList() {
  return (
    <div className="pb-8">
      {papers.map((paper) => (
        <PaperCard key={paper.id} paper={paper} />
      ))}
    </div>
  );
}
