"use client";

import { useState } from "react";
import {
  Flame, Clock, Star, Bot, Brain, MessageSquare, Code2,
  Monitor, Globe, Cpu, Zap, GitBranch, RefreshCw, Layers,
  Award, SlidersHorizontal, Share2, Type, ImageIcon, Video, Music,
} from "lucide-react";
import { sidebarData } from "@/data/mockData";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ReactNode> = {
  flame: <Flame size={16} strokeWidth={1.8} />,
  clock: <Clock size={16} strokeWidth={1.8} />,
  star: <Star size={16} strokeWidth={1.8} />,
  bot: <Bot size={16} strokeWidth={1.8} />,
  brain: <Brain size={16} strokeWidth={1.8} />,
  "message-square": <MessageSquare size={16} strokeWidth={1.8} />,
  code: <Code2 size={16} strokeWidth={1.8} />,
  monitor: <Monitor size={16} strokeWidth={1.8} />,
  globe: <Globe size={16} strokeWidth={1.8} />,
  cpu: <Cpu size={16} strokeWidth={1.8} />,
  zap: <Zap size={16} strokeWidth={1.8} />,
  "git-branch": <GitBranch size={16} strokeWidth={1.8} />,
  "refresh-cw": <RefreshCw size={16} strokeWidth={1.8} />,
  layers: <Layers size={16} strokeWidth={1.8} />,
  award: <Award size={16} strokeWidth={1.8} />,
  sliders: <SlidersHorizontal size={16} strokeWidth={1.8} />,
  "share-2": <Share2 size={16} strokeWidth={1.8} />,
  type: <Type size={16} strokeWidth={1.8} />,
  image: <ImageIcon size={16} strokeWidth={1.8} />,
  video: <Video size={16} strokeWidth={1.8} />,
  music: <Music size={16} strokeWidth={1.8} />,
};

interface SidebarItemData {
  id: string;
  label: string;
  icon: string;
  active?: boolean;
}

function SidebarItem({
  item,
  activeId,
  onSelect,
}: {
  item: SidebarItemData;
  activeId: string;
  onSelect: (id: string) => void;
}) {
  const isActive = item.id === activeId;
  return (
    <div
      onClick={() => onSelect(item.id)}
      className={cn(
        "flex items-center gap-3 px-4 py-[9px] text-[13.5px] rounded-lg cursor-pointer transition-colors group mb-0.5 mx-3",
        isActive
          ? "bg-[#FFF0F5] text-[#D82C6D] font-semibold"
          : "text-gray-500 hover:bg-gray-50 hover:text-gray-900 font-medium"
      )}
    >
      <span className={cn(
        "flex-shrink-0 w-6 flex items-center justify-center",
        isActive ? "text-[#D82C6D]" : "text-gray-400 group-hover:text-gray-600"
      )}>
        {item.id === "trending" ? (
          <Flame size={16} strokeWidth={2} className={isActive ? "text-[#D82C6D] fill-[#D82C6D]/20" : "text-gray-400"} />
        ) : (
          iconMap[item.icon]
        )}
      </span>
      <span className="leading-none tracking-tight">{item.label}</span>
    </div>
  );
}

function SidebarSection({ title, items, activeId, onSelect }: {
  title: string;
  items: SidebarItemData[];
  activeId: string;
  onSelect: (id: string) => void;
}) {
  return (
    <div className="mb-6">
      <div className="px-6 mb-3 text-[10.5px] font-bold text-gray-400 tracking-[0.12em] uppercase">
        {title}
      </div>
      <div>
        {items.map((item) => (
          <SidebarItem key={item.id} item={item} activeId={activeId} onSelect={onSelect} />
        ))}
      </div>
    </div>
  );
}

export default function Sidebar() {
  const [activeId, setActiveId] = useState("trending");

  return (
    <aside className="w-[200px] shrink-0 bg-[#FAFAFC] overflow-y-auto pt-6 pb-10 border-none">
      <div className="max-w-[200px] ml-auto">
        <SidebarSection
          title="Discover"
          items={sidebarData.discover}
          activeId={activeId}
          onSelect={setActiveId}
        />
        <SidebarSection
          title="Tasks"
          items={sidebarData.tasks}
          activeId={activeId}
          onSelect={setActiveId}
        />
        <SidebarSection
          title="Methods"
          items={sidebarData.methods}
          activeId={activeId}
          onSelect={setActiveId}
        />
        <SidebarSection
          title="Generation"
          items={sidebarData.generation}
          activeId={activeId}
          onSelect={setActiveId}
        />
      </div>
    </aside>
  );
}
