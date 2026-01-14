import React from 'react';

const IssueTracker: React.FC = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-[#181115] dark:text-white text-[22px] font-bold leading-tight">Issues & Support</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {/* Metric 1 */}
        <div className="bg-white dark:bg-[#2a1624] p-6 rounded-xl border border-[#e6dbe2] dark:border-[#3d2a37] text-center shadow-sm">
            <p className="text-[#8a607b] dark:text-white/50 text-xs font-bold uppercase mb-2">Open Tickets</p>
            <p className="text-4xl font-bold text-[#181115] dark:text-white">24</p>
            <span className="text-xs text-red-500 flex items-center justify-center gap-1 mt-1">
                <span className="material-symbols-outlined text-sm">trending_up</span> +12%
            </span>
        </div>
        
        {/* Metric 2 */}
         <div className="bg-white dark:bg-[#2a1624] p-6 rounded-xl border border-[#e6dbe2] dark:border-[#3d2a37] text-center shadow-sm">
            <p className="text-[#8a607b] dark:text-white/50 text-xs font-bold uppercase mb-2">Avg Res Time</p>
            <p className="text-4xl font-bold text-[#181115] dark:text-white">4.2h</p>
            <span className="text-xs text-green-500 flex items-center justify-center gap-1 mt-1">
                <span className="material-symbols-outlined text-sm">trending_down</span> -0.5h
            </span>
        </div>

        {/* Metric 3 */}
         <div className="bg-white dark:bg-[#2a1624] p-6 rounded-xl border border-[#e6dbe2] dark:border-[#3d2a37] text-center shadow-sm">
            <p className="text-[#8a607b] dark:text-white/50 text-xs font-bold uppercase mb-2">System Uptime</p>
            <p className="text-4xl font-bold text-[#181115] dark:text-white">99.9%</p>
            <span className="text-xs text-green-500 flex items-center justify-center gap-1 mt-1">
                <span className="material-symbols-outlined text-sm">check_circle</span> Healthy
            </span>
        </div>
      </div>
    </div>
  );
};

export default IssueTracker;