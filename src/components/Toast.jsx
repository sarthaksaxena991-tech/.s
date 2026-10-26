import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export default function Toast({ message, visible }) {
  if (!visible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 px-4 py-3 rounded-xl bg-[#0F111A] border border-[#10E79D]/40 text-slate-100 shadow-2xl shadow-black/80 animate-in slide-in-from-bottom-3 duration-200">
      <CheckCircle2 className="w-4 h-4 text-[#10E79D] shrink-0" />
      <span className="text-xs font-medium font-sans">{message}</span>
    </div>
  );
}
