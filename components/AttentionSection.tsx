import React from 'react';
import { AttentionItem } from '../types';

interface AttentionSectionProps {
  items: AttentionItem[];
}

const AttentionSection: React.FC<AttentionSectionProps> = ({ items }) => {
  const stuckItems = items.filter(i => i.type === 'stuck').slice(0, 4); // Limit for view
  const overdueItems = items.filter(i => i.type === 'overdue').slice(0, 5);
  const dueItems = items.filter(i => i.type === 'due_week').slice(0, 6);

  const stuckCount = items.filter(i => i.type === 'stuck').length;
  const overdueCount = items.filter(i => i.type === 'overdue').length;
  const dueCount = items.filter(i => i.type === 'due_week').length;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Stuck Column */}
      <div className="bg-red-50 dark:bg-red-900/10 rounded-xl p-4 border border-red-100 dark:border-red-900/30">
        <div className="flex items-center gap-2 mb-4 text-red-600 dark:text-red-400">
          <span className="material-symbols-outlined">block</span>
          <h3 className="font-bold text-lg">Stuck ({stuckCount})</h3>
        </div>
        <div className="space-y-3">
          {stuckItems.map(item => (
            <div key={item.id} className="bg-white dark:bg-[#2a1624] p-3 rounded-lg shadow-sm border-l-4 border-red-500">
              <p className="text-sm font-semibold dark:text-white">{item.name}</p>
              {item.boardName && (
                <div className="flex gap-2 mt-2">
                   <span className="text-[10px] bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded uppercase font-bold text-slate-500">{item.boardName}</span>
                   {item.boardName === 'Dev Board' && <span className="text-[10px] bg-red-100 dark:bg-red-900/30 px-2 py-0.5 rounded uppercase font-bold text-red-600">High</span>}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Overdue Column */}
      <div className="bg-orange-50 dark:bg-orange-900/10 rounded-xl p-4 border border-orange-100 dark:border-orange-900/30">
        <div className="flex items-center gap-2 mb-4 text-orange-600 dark:text-orange-400">
          <span className="material-symbols-outlined">event_busy</span>
          <h3 className="font-bold text-lg">Overdue ({overdueCount})</h3>
        </div>
        <div className="space-y-3">
          {overdueItems.map(item => (
            <div key={item.id} className="bg-white dark:bg-[#2a1624] p-3 rounded-lg shadow-sm border-l-4 border-orange-500">
              <p className="text-sm font-semibold dark:text-white">{item.name}</p>
              <p className="text-[10px] text-orange-600 mt-1">Due: {item.daysOverdue} days ago</p>
               {item.name.includes("News") && (
                 <div className="flex gap-2 mt-2">
                   <span className="text-[10px] bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded uppercase font-bold text-slate-500">Marketing</span>
                </div>
               )}
            </div>
          ))}
        </div>
      </div>

      {/* Due This Week Column */}
      <div className="bg-blue-50 dark:bg-blue-900/10 rounded-xl p-4 border border-blue-100 dark:border-blue-900/30">
        <div className="flex items-center gap-2 mb-4 text-blue-600 dark:text-blue-400">
          <span className="material-symbols-outlined">calendar_today</span>
          <h3 className="font-bold text-lg">Due This Week ({dueCount})</h3>
        </div>
        <div className="space-y-3">
          {dueItems.map(item => (
            <div key={item.id} className="bg-white dark:bg-[#2a1624] p-3 rounded-lg shadow-sm border-l-4 border-blue-500">
              <p className="text-sm font-semibold dark:text-white">{item.name}</p>
              {item.id === '7' && (
                 <div className="flex gap-2 mt-2">
                   <span className="text-[10px] bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded uppercase font-bold text-slate-500">Executive</span>
                   <span className="text-[10px] bg-blue-100 dark:bg-blue-900/30 px-2 py-0.5 rounded uppercase font-bold text-blue-600">Friday</span>
                </div>
               )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AttentionSection;