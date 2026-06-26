"use client";

import { ArrowRight, TrendingUp, Trophy, Star } from "lucide-react";
import { dashboardCards } from "@/data/mockData";

function BreakthroughCard() {
  const card = dashboardCards.breakthrough;
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-4 flex flex-col min-w-0">
      {/* Header row */}
      <div className="flex items-center gap-2 flex-wrap">
        <span className="flex items-center gap-1 text-[10px] font-semibold text-orange-500 uppercase tracking-wider">
          🔥 BREAKTHROUGH TODAY
        </span>
        <span className="border border-gray-300 rounded-md px-2 py-0.5 text-[11px] text-gray-600 font-medium">
          Official Release
        </span>
      </div>

      {/* Title + Logo inline */}
      <div className="flex items-start justify-between gap-2 mt-2">
        <h2 className="text-[17px] font-bold text-gray-900 leading-tight">
          OpenAI releases{" "}
          <span className="text-purple-600">GPT-4.5 Turbo</span>
        </h2>
        <div className="w-11 h-11 border border-gray-200 rounded-lg flex items-center justify-center shrink-0 bg-white">
          <svg viewBox="0 0 24 24" className="w-7 h-7 fill-[#111827]">
            <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z"/>
          </svg>
        </div>
      </div>

      {/* Description */}
      <p className="text-[12px] text-gray-500 mt-1 leading-relaxed">
        {card.description}
      </p>

      {/* Bullet points */}
      <div className="flex flex-col gap-1.5 mt-2">
        {card.bullets.map((b, i) => (
          <div key={i} className="flex items-start gap-1.5 text-[12px] text-gray-700">
            <Star size={11} className="text-amber-400 fill-amber-400 shrink-0 mt-0.5" />
            <span>{b}</span>
          </div>
        ))}
      </div>

      {/* Footer — plain text link, no button bg */}
      <button className="text-[13px] text-purple-600 font-medium flex items-center gap-1 mt-3 hover:underline cursor-pointer bg-transparent border-0 p-0">
        {card.buttonLabel} <ArrowRight size={13} />
      </button>
    </div>
  );
}

function RisingFastCard() {
  const card = dashboardCards.rising;
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-4 flex flex-col min-w-0">
      {/* Header */}
      <div className="flex items-center gap-1.5 text-[10px] font-semibold text-green-500 uppercase tracking-wider">
        <TrendingUp size={12} />
        {card.label}
      </div>

      {/* Big number block — tight spacing */}
      <div className="mt-2">
        <div className="text-[28px] font-bold text-gray-900 leading-none">{card.metric}</div>
        <div className="text-[13px] font-medium text-gray-800 mt-1">GitHub stars</div>
        <div className="text-[12px] text-gray-500">in the last 8 hours</div>
      </div>

      {/* Repo list */}
      <div className="flex flex-col gap-2 mt-3">
        {card.repos.map((repo, i) => (
          <div key={repo.name} className="flex items-center gap-2 text-[13px] cursor-pointer hover:bg-gray-50 rounded px-1 -mx-1 transition-colors">
            <span className="text-gray-400 w-3 text-[12px] shrink-0">{i + 1}</span>
            <span className="flex-1 text-gray-800 font-medium">{repo.name}</span>
            <span className="text-green-500 font-semibold text-[12px]">{repo.stars}</span>
            <Star size={12} className="text-amber-400 fill-amber-400 shrink-0" />
          </div>
        ))}
      </div>

      <button className="text-[12px] text-purple-600 flex items-center gap-1 mt-3 hover:underline cursor-pointer bg-transparent border-0 p-0">
        {card.viewAllLabel} <ArrowRight size={12} />
      </button>
    </div>
  );
}

function NewSOTACard() {
  const card = dashboardCards.sota;
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-4 flex flex-col min-w-0">
      {/* Header row with "View all →" on right */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1.5 text-[10px] font-semibold text-amber-500 uppercase tracking-wider">
          <Trophy size={12} className="text-amber-500" />
          {card.label}
        </div>
        <button className="text-[12px] text-purple-600 hover:underline cursor-pointer flex items-center gap-0.5 bg-transparent border-0 p-0">
          View all <ArrowRight size={11} />
        </button>
      </div>

      {/* SOTA list */}
      <div className="flex flex-col gap-3 mt-3">
        {card.entries.map((item) => (
          <div key={item.title} className="flex items-start gap-2 cursor-pointer hover:bg-gray-50 rounded px-1 -mx-1 transition-colors">
            <span className="bg-purple-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded shrink-0 mt-0.5 leading-none">
              SOTA
            </span>
            <div className="min-w-0">
              <p className="text-[13px] font-semibold text-gray-900 leading-snug">
                {item.title}
              </p>
              <p className="text-[11px] text-gray-500 mt-0.5">
                {item.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function DashboardCards() {
  return (
    <div className="grid grid-cols-3 gap-3 mb-4 w-full min-w-0">
      <BreakthroughCard />
      <RisingFastCard />
      <NewSOTACard />
    </div>
  );
}
