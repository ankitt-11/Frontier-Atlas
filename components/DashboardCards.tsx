"use client";

import { ArrowRight, TrendingUp, Trophy, Star } from "lucide-react";

function BreakthroughCard() {
  return (
    <div className="bg-gradient-to-br from-white via-[#FFF2F8] to-[#F1EAFF] border border-black/[0.03] rounded-[28px] p-7 shadow-[0_12px_40px_rgba(0,0,0,0.02)] flex flex-col gap-5 min-w-0">
      {/* Row 1 — Header */}
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-1.5 shrink-0">
          <span className="text-[16px]">🔥</span>
          <span className="text-[10px] font-bold text-[#111827] uppercase tracking-[0.08em] whitespace-nowrap">
            BREAKTHROUGH TODAY
          </span>
        </div>
        <span className="bg-[#6B46C1] text-white rounded-full px-2.5 py-0.5 text-[11px] font-semibold border-0 shadow-sm whitespace-nowrap">
          Official Release
        </span>
      </div>

      {/* Row 2 — Title + Logo */}
      <div className="flex items-center justify-between gap-4">
        <h2 className="text-[26px] font-extrabold text-[#3A2A5D] leading-[1.1] tracking-tight whitespace-nowrap">
          OpenAI releases
          <br />
          GPT-4.5 Turbo
        </h2>
        {/* ChatGPT Logo */}
        <div className="w-[88px] h-[88px] rounded-[22px] bg-[#F3F4F6] flex items-center justify-center shrink-0 shadow-[inset_0_1px_3px_rgba(0,0,0,0.06)] -mr-4">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 41 41" className="w-[52px] h-[52px]" fill="none">
            <path
              d="M37.532 16.87a9.963 9.963 0 0 0-.856-8.184 10.078 10.078 0 0 0-10.855-4.835 9.964 9.964 0 0 0-6.276-2.41 10.079 10.079 0 0 0-10.429 4.97 9.967 9.967 0 0 0-6.664 4.834 10.08 10.08 0 0 0 1.24 11.817 9.965 9.965 0 0 0 .856 8.185 10.079 10.079 0 0 0 10.855 4.835 9.965 9.965 0 0 0 6.274 2.41 10.079 10.079 0 0 0 9.31-6.985 9.967 9.967 0 0 0 6.663-4.834 10.079 10.079 0 0 0-1.238-11.818zM22.498 37.886a7.474 7.474 0 0 1-4.799-1.735c.061-.033.168-.091.237-.134l7.964-4.6a1.294 1.294 0 0 0 .655-1.134V19.054l3.366 1.944a.12.12 0 0 1 .066.092v9.299a7.505 7.505 0 0 1-7.49 7.496zM6.392 31.006a7.471 7.471 0 0 1-.894-5.023c.06.036.162.099.237.141l7.964 4.6a1.297 1.297 0 0 0 1.308 0l9.724-5.614v3.888a.12.12 0 0 1-.048.103l-8.051 4.649a7.504 7.504 0 0 1-10.24-2.744zM4.297 13.62A7.469 7.469 0 0 1 8.2 10.333c0 .068-.004.19-.004.274v9.201a1.294 1.294 0 0 0 .654 1.132l9.723 5.614-3.366 1.944a.12.12 0 0 1-.114.012L7.044 23.86a7.504 7.504 0 0 1-2.747-10.24zm27.658 6.437l-9.724-5.615 3.367-1.943a.121.121 0 0 1 .114-.012l8.048 4.648a7.498 7.498 0 0 1-1.158 13.528v-9.476a1.293 1.293 0 0 0-.647-1.13zm3.35-5.043c-.059-.037-.162-.099-.236-.141l-7.965-4.6a1.298 1.298 0 0 0-1.308 0l-9.723 5.614v-3.888a.12.12 0 0 1 .048-.103l8.05-4.645a7.497 7.497 0 0 1 11.135 7.763zm-21.063 6.929l-3.367-1.944a.12.12 0 0 1-.065-.092v-9.299a7.497 7.497 0 0 1 12.293-5.756 6.94 6.94 0 0 0-.236.134l-7.965 4.6a1.294 1.294 0 0 0-.654 1.132l-.006 11.225zm1.829-3.943l4.33-2.501 4.332 2.5v4.999l-4.331 2.5-4.331-2.5V18z"
              fill="#111827"
            />
          </svg>
        </div>
      </div>

      {/* Row 3 — Subtitle */}
      <p className="text-[12px] text-[#6B7280] leading-relaxed -mt-1">
        First-party model in the GPT-4.5 series, now available in OpenAI Studio.
      </p>

      {/* Row 4 — Feature bullets */}
      <div className="flex flex-col gap-1.5">
        {[
          "Beats Gemini 1.5 Pro on 7 benchmarks",
          "256K context length",
          "Lower latency, higher accuracy",
        ].map((item, i) => (
          <div key={i} className="flex items-center gap-2 text-[12px] text-[#374151]">
            <Star size={12} className="text-[#EC4899] fill-[#EC4899] shrink-0" />
            {item}
          </div>
        ))}
      </div>

      {/* Row 5 — Link */}
      <button className="text-[13px] text-[#7C3AED] font-bold flex items-center gap-1.5 cursor-pointer bg-white rounded-xl px-4 py-2 mt-auto w-fit shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.06)] transition-shadow border border-white/50">
        View paper <ArrowRight size={14} strokeWidth={2.5} />
      </button>
    </div>
  );
}

function RisingFastCard() {
  return (
    <div className="bg-gradient-to-br from-white to-[#F2FBF6] border border-black/[0.03] rounded-[24px] p-6 shadow-[0_8px_30px_rgba(0,0,0,0.015)] flex flex-col gap-4 min-w-0">
      {/* Header */}
      <div className="flex items-center gap-1.5">
        <TrendingUp size={13} className="text-[#2E7D32]" />
        <span className="text-[10px] font-bold text-[#2E7D32] uppercase tracking-[0.08em]">
          RISING FAST
        </span>
      </div>

      {/* Number block */}
      <div className="flex flex-col gap-0">
        <span className="text-[38px] font-extrabold text-[#2E7D32] leading-none tracking-tight">
          +540
        </span>
        <span className="text-[14px] font-bold text-[#1E1B4B] mt-1.5">
          GitHub stars
        </span>
        <span className="text-[14px] font-bold text-[#1E1B4B]">
          in the last 8 hours
        </span>
      </div>

      {/* Repo list */}
      <div className="flex flex-col gap-2 mt-1">
        {[
          { rank: 1, name: "VoxCPM-1.5", stars: "+540" },
          { rank: 2, name: "DeepSeek-R1.1", stars: "+412" },
          { rank: 3, name: "LongRPE 2.0", stars: "+398" },
        ].map((repo) => (
          <div
            key={repo.name}
            className="flex items-center gap-2 cursor-pointer hover:bg-[#F9F9F9] rounded px-1 -mx-1 transition-colors py-0.5"
          >
            <span className="text-[12px] text-[#9CA3AF] w-3 shrink-0 font-medium">
              {repo.rank}
            </span>
            <span className="flex-1 text-[13px] text-[#111827] font-medium truncate">
              {repo.name}
            </span>
            <span className="text-[12px] text-[#2E7D32] font-bold">
              {repo.stars}
            </span>
            <Star size={12} className="text-[#2E7D32] fill-[#2E7D32] shrink-0" />
          </div>
        ))}
      </div>

      {/* Footer */}
      <button className="text-[12px] text-[#2E7D32] flex items-center gap-1.5 hover:underline cursor-pointer bg-transparent border-0 py-1 pr-3 font-bold mt-auto w-fit">
        View all rising <ArrowRight size={13} strokeWidth={2.5} />
      </button>
    </div>
  );
}

function NewSotaCard() {
  return (
    <div className="bg-gradient-to-br from-white to-[#F6F4FF] border border-black/[0.03] rounded-[24px] p-6 shadow-[0_8px_30px_rgba(0,0,0,0.015)] flex flex-col gap-4 min-w-0">
      {/* Header row */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <Trophy size={13} className="text-[#7C3AED]" />
          <span className="text-[10px] font-bold text-[#7C3AED] uppercase tracking-[0.08em]">
            NEW SOTA TODAY
          </span>
        </div>
        <button className="text-[12px] text-[#7C3AED] font-medium flex items-center gap-0.5 hover:underline cursor-pointer bg-transparent border-0 p-0">
          View all <ArrowRight size={11} />
        </button>
      </div>

      {/* SOTA items */}
      <div className="flex flex-col gap-3 mt-2">
        {[
          { name: "s1: Simple Test-Time Scaling", sub: "#1 on 8 benchmarks" },
          { name: "LongRPE 2.0", sub: "#1 on 6 benchmarks" },
          { name: "V-JEPA 2", sub: "#1 on 4 benchmarks" },
          { name: "MuJoCo World Model Suite", sub: "#1 on 3 benchmarks" },
        ].map((item) => (
          <div key={item.name} className="flex items-start gap-2.5 cursor-pointer group">
            <span className="bg-[#EDE9FE] text-[#7C3AED] text-[9px] font-bold px-1.5 py-[3px] rounded shrink-0 mt-[1px] leading-none tracking-wide">
              SOTA
            </span>
            <div>
              <p className="text-[13px] font-bold text-[#111827] leading-snug group-hover:text-[#7C3AED] transition-colors">
                {item.name}
              </p>
              <p className="text-[11px] text-[#6B7280] font-medium mt-0.5">{item.sub}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function DashboardCards() {
  return (
    <div className="grid grid-cols-3 gap-[18px] mb-4 w-full min-w-0">
      <BreakthroughCard />
      <RisingFastCard />
      <NewSotaCard />
    </div>
  );
}
