export interface Board {
  id: string;
  name: string;
  businessUnit: 'AOPI' | 'IOS' | '16ST' | 'Bespoke' | 'Operations' | 'Strategy';
  totalItems: number;
  doneItems: number;
  activeItems: number;
  health: number; // 0-100
  status: 'active' | 'steady' | 'warning' | 'critical' | 'optimal' | 'elite';
  color: string;
}

export interface MondayItem {
  id: string;
  name: string;
  boardName: string;
  boardId: string;
  status: string;
  person?: string;
  date?: string; // YYYY-MM-DD
  timeline?: string;
  updatedAt: string;
  category?: string; // For Issues board
}

export interface AttentionItem extends MondayItem {
  type: 'stuck' | 'overdue' | 'due_week';
  daysOverdue?: number;
  daysUntilDue?: number;
}

export interface TeamMember {
  name: string;
  role: string;
  timezone: string;
  taskCount: number;
  avatarUrl?: string;
}

export interface Rock {
  id: string;
  name: string;
  progress: number; // 0-100 based on status
  status: string;
  owner: string;
}

export interface DashboardData {
  boards: Board[];
  attentionItems: AttentionItem[];
  rocks: Rock[];
  teamLoad: TeamMember[];
  openIssuesCount: number;
  openTicketsCount: number;
  lastUpdated: Date;
  dataQualityIssues: string[];
}