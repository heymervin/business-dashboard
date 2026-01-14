import React from 'react';
import { TeamMember } from '../types';

interface TeamWorkloadProps {
  data: TeamMember[];
}

const TeamWorkload: React.FC<TeamWorkloadProps> = ({ data }) => {
  const maxTasks = Math.max(...data.map(d => d.taskCount), 50);

  return (
    <div className="space-y-6">
      <h2 className="text-[#181115] dark:text-white text-[22px] font-bold leading-tight">Team Workload</h2>
      <div className="bg-white dark:bg-[#2a1624] p-6 rounded-xl border border-[#e6dbe2] dark:border-[#3d2a37] shadow-sm flex flex-col justify-end min-h-[160px]">
        <div className="flex items-end justify-between gap-4 h-32">
          {data.map((member) => (
            <div key={member.name} className="flex flex-col items-center flex-1">
              <div 
                className="bg-primary/80 w-full rounded-t-sm transition-all duration-300 hover:bg-primary"
                style={{ height: `${(member.taskCount / maxTasks) * 100}%` }}
              ></div>
              <span className="text-[10px] mt-2 dark:text-white/70">{member.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamWorkload;