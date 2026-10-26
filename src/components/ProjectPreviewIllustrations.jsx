import React from 'react';
import { Activity, Train, Bot, LineChart, ShieldAlert, Cpu, CheckCircle2, Clock } from 'lucide-react';

export function HealthTrackerVisual() {
  return (
    <div className="w-full h-48 bg-gradient-to-b from-[#0e171b] to-[#070b0e] p-4 flex flex-col justify-between font-mono text-[11px] overflow-hidden relative select-none">
      <div className="flex items-center justify-between border-b border-white/[0.08] pb-2 text-slate-400">
        <div className="flex items-center gap-1.5 text-emerald-400">
          <Activity className="w-3.5 h-3.5" />
          <span className="font-semibold text-xs tracking-wide">HealthVitals Dashboard</span>
        </div>
        <span className="px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 text-[10px]">
          Status: Normal
        </span>
      </div>

      <div className="grid grid-cols-3 gap-2 my-2">
        <div className="p-2 rounded-lg bg-white/[0.03] border border-white/5">
          <span className="text-[9px] text-slate-400 block">Resting HR</span>
          <span className="text-sm font-bold text-white">72 <span className="text-[9px] text-slate-400 font-normal">bpm</span></span>
        </div>
        <div className="p-2 rounded-lg bg-white/[0.03] border border-white/5">
          <span className="text-[9px] text-slate-400 block">Blood Sugar</span>
          <span className="text-sm font-bold text-white">96 <span className="text-[9px] text-slate-400 font-normal">mg/dL</span></span>
        </div>
        <div className="p-2 rounded-lg bg-white/[0.03] border border-white/5">
          <span className="text-[9px] text-slate-400 block">BMI Index</span>
          <span className="text-sm font-bold text-emerald-400">22.4</span>
        </div>
      </div>

      <div className="p-2 rounded-lg bg-emerald-500/5 border border-emerald-500/20">
        <div className="flex items-center justify-between text-[10px] mb-1">
          <span className="text-slate-300">Disease Risk Analysis Score</span>
          <span className="text-emerald-400 font-bold">Low Risk (12%)</span>
        </div>
        <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
          <div className="w-[18%] h-full bg-emerald-400 rounded-full" />
        </div>
      </div>
    </div>
  );
}

export function RailwayTrackingVisual() {
  return (
    <div className="w-full h-48 bg-gradient-to-b from-[#18140e] to-[#0a0805] p-4 flex flex-col justify-between font-mono text-[11px] overflow-hidden relative select-none">
      <div className="flex items-center justify-between border-b border-white/[0.08] pb-2 text-slate-400">
        <div className="flex items-center gap-1.5 text-amber-400">
          <Train className="w-3.5 h-3.5" />
          <span className="font-semibold text-xs tracking-wide">Railway Corridor Notice Board</span>
        </div>
        <span className="px-1.5 py-0.5 rounded bg-amber-500/10 text-amber-400 text-[10px]">
          Live Track Logs
        </span>
      </div>

      <div className="space-y-1.5 my-2">
        <div className="p-1.5 rounded-lg bg-white/[0.03] border border-white/5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
            <span className="text-slate-300 text-[10px]">Section BPL-04 Track Maintenance</span>
          </div>
          <span className="text-[9px] px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300">Active Work</span>
        </div>
        <div className="p-1.5 rounded-lg bg-white/[0.03] border border-white/5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span className="text-slate-300 text-[10px]">Signal Box 12 Relay Clearance</span>
          </div>
          <span className="text-[9px] px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300">Verified</span>
        </div>
      </div>

      <div className="flex items-center justify-between text-[10px] text-slate-400 pt-1 border-t border-white/[0.05]">
        <span>MCA Engineering Work Project</span>
        <span className="text-amber-400">Express.js API Sync</span>
      </div>
    </div>
  );
}

export function NovomindAIVisual() {
  return (
    <div className="w-full h-48 bg-gradient-to-b from-[#131124] to-[#080712] p-4 flex flex-col justify-between font-mono text-[11px] overflow-hidden relative select-none">
      <div className="flex items-center justify-between border-b border-white/[0.08] pb-2 text-slate-400">
        <div className="flex items-center gap-1.5 text-indigo-400">
          <Bot className="w-3.5 h-3.5" />
          <span className="font-semibold text-xs tracking-wide">NovomindAI Session</span>
        </div>
        <span className="px-1.5 py-0.5 rounded bg-indigo-500/10 text-indigo-400 text-[10px]">
          TF-IDF Matcher
        </span>
      </div>

      <div className="space-y-2 my-2">
        <div className="flex justify-end">
          <div className="bg-indigo-600/30 border border-indigo-500/30 text-slate-200 p-2 rounded-xl rounded-tr-none text-[10px] max-w-[85%]">
            Query: "Explain agentic AI autonomous loops"
          </div>
        </div>
        <div className="flex justify-start">
          <div className="bg-white/[0.04] border border-white/10 text-slate-300 p-2 rounded-xl rounded-tl-none text-[10px] max-w-[90%]">
            <span className="text-indigo-400 text-[9px] block mb-0.5">TF-IDF Vector Sim: 0.94</span>
            Autonomous agents observe context, reason with LLMs, and invoke specific tools to achieve goals.
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between text-[10px] text-slate-400 pt-1 border-t border-white/[0.05]">
        <span>Flask Microservice</span>
        <span className="text-indigo-400">Supabase Persistent</span>
      </div>
    </div>
  );
}

export function FactoryTelemetryVisual() {
  return (
    <div className="w-full h-48 bg-gradient-to-b from-[#0d1620] to-[#060a0f] p-4 flex flex-col justify-between font-mono text-[11px] overflow-hidden relative select-none">
      <div className="flex items-center justify-between border-b border-white/[0.08] pb-2 text-slate-400">
        <div className="flex items-center gap-1.5 text-cyan-400">
          <LineChart className="w-3.5 h-3.5" />
          <span className="font-semibold text-xs tracking-wide">Daikibo Machine Telemetry</span>
        </div>
        <span className="px-1.5 py-0.5 rounded bg-cyan-500/10 text-cyan-400 text-[10px]">
          Sensor Stream
        </span>
      </div>

      {/* Sensor Chart Graphic SVG */}
      <div className="relative h-16 w-full flex items-center justify-center my-1">
        <svg className="w-full h-full" viewBox="0 0 240 60" preserveAspectRatio="none">
          <defs>
            <linearGradient id="cyanGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="#38BDF8" stop-opacity="0.3" />
              <stop offset="100%" stop-color="#38BDF8" stop-opacity="0.0" />
            </linearGradient>
          </defs>
          <path
            d="M0,45 Q30,20 60,35 T120,15 T180,40 T240,25 L240,60 L0,60 Z"
            fill="url(#cyanGrad)"
          />
          <path
            d="M0,45 Q30,20 60,35 T120,15 T180,40 T240,25"
            fill="none"
            stroke="#38BDF8"
            strokeWidth="2"
          />
          <circle cx="120" cy="15" r="3.5" fill="#10E79D" />
        </svg>
      </div>

      <div className="grid grid-cols-2 gap-2 text-[10px] text-slate-300">
        <div className="flex items-center justify-between p-1.5 rounded bg-white/[0.02] border border-white/5">
          <span>Avg Temperature</span>
          <span className="text-cyan-300 font-bold">78.2°C</span>
        </div>
        <div className="flex items-center justify-between p-1.5 rounded bg-white/[0.02] border border-white/5">
          <span>Anomaly Deviation</span>
          <span className="text-emerald-400 font-bold">&lt; 1.2%</span>
        </div>
      </div>
    </div>
  );
}

export function ProjectVisualByType({ type }) {
  switch (type) {
    case 'health':
      return <HealthTrackerVisual />;
    case 'railway':
      return <RailwayTrackingVisual />;
    case 'ai':
      return <NovomindAIVisual />;
    case 'telemetry':
      return <FactoryTelemetryVisual />;
    default:
      return <HealthTrackerVisual />;
  }
}
