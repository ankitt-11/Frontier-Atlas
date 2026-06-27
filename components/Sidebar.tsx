"use client";

import { useState } from "react";
import {
  Flame, Clock, Star, Bot, Brain, MessageSquare, Code2,
  Monitor, Globe, Cpu, Zap, Link, RefreshCw, Layers,
  BarChart2, Target, Plug, FileText, ImageIcon, Video, Volume2
} from "lucide-react";
import { cn } from "@/lib/utils";

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[10px] font-semibold text-[#9CA3AF] uppercase tracking-[0.08em] px-3 mb-1 mt-4 first:mt-2">
      {children}
    </p>
  );
}

function NavItem({
  icon,
  label,
  isActive = false,
  onClick
}: {
  icon: React.ReactNode;
  label: string;
  isActive?: boolean;
  onClick: () => void;
}) {
  return (
    <div
      onClick={onClick}
      className={cn(
        "flex items-center gap-2.5 px-3 py-[7px] mx-2 rounded-lg cursor-pointer transition-colors text-[13px] font-medium",
        isActive
          ? "bg-[#FFF0F5] text-[#DB2777] font-semibold"
          : "hover:bg-[#FFF5F9] text-[#374151]"
      )}
    >
      <span className="w-4 h-4 flex items-center justify-center text-[14px] shrink-0">
        {icon}
      </span>
      <span className="truncate">{label}</span>
    </div>
  );
}

export default function Sidebar() {
  const [activeItem, setActiveItem] = useState("Trending Papers");

  const discover = [
    { label: "Trending Papers", icon: <Flame size={16} className={activeItem === "Trending Papers" ? "text-[#DB2777] fill-[#DB2777]" : ""} /> },
    { label: "Latest Papers", icon: <Clock size={16} /> },
    { label: "Most GitHub Stars", icon: <Star size={16} /> },
  ];

  const tasks = [
    { label: "Agents", icon: <Bot size={16} /> },
    { label: "Reasoning", icon: <Brain size={16} /> },
    { label: "Language Modeling", icon: <MessageSquare size={16} /> },
    { label: "Coding Agents", icon: <Code2 size={16} /> },
    { label: "Computer Use", icon: <Monitor size={16} /> },
    { label: "World Models", icon: <Globe size={16} /> },
    { label: "Robotics", icon: <Cpu size={16} /> },
  ];

  const methods = [
    { label: "Transformer", icon: <Zap size={16} /> },
    { label: "Chain of Thought", icon: <Link size={16} /> },
    { label: "ReAct", icon: <RefreshCw size={16} /> },
    { label: "LoRA", icon: <Layers size={16} /> },
    { label: "RLHF", icon: <BarChart2 size={16} /> },
    { label: "DPO", icon: <Target size={16} /> },
    { label: "MCP", icon: <Plug size={16} /> },
  ];

  const generation = [
    { label: "Text Generation", icon: <FileText size={16} /> },
    { label: "Image Generation", icon: <ImageIcon size={16} /> },
    { label: "Video Generation", icon: <Video size={16} /> },
    { label: "Audio Generation", icon: <Volume2 size={16} /> },
  ];

  return (
    <aside className="w-[200px] shrink-0 bg-white border-r border-[#E5E7EB] overflow-y-auto hide-scroll py-3">
      <SectionLabel>DISCOVER</SectionLabel>
      {discover.map((item) => (
        <NavItem
          key={item.label}
          icon={item.icon}
          label={item.label}
          isActive={activeItem === item.label}
          onClick={() => setActiveItem(item.label)}
        />
      ))}

      <SectionLabel>TASKS</SectionLabel>
      {tasks.map((item) => (
        <NavItem
          key={item.label}
          icon={item.icon}
          label={item.label}
          isActive={activeItem === item.label}
          onClick={() => setActiveItem(item.label)}
        />
      ))}

      <SectionLabel>METHODS</SectionLabel>
      {methods.map((item) => (
        <NavItem
          key={item.label}
          icon={item.icon}
          label={item.label}
          isActive={activeItem === item.label}
          onClick={() => setActiveItem(item.label)}
        />
      ))}

      <SectionLabel>GENERATION</SectionLabel>
      {generation.map((item) => (
        <NavItem
          key={item.label}
          icon={item.icon}
          label={item.label}
          isActive={activeItem === item.label}
          onClick={() => setActiveItem(item.label)}
        />
      ))}
    </aside>
  );
}
