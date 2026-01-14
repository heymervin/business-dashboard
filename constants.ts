import { Board, DashboardData } from './types';

export const COLORS = {
  AOPI: '#0073ea', // Blue
  IOS: '#9d50dd',  // Purple
  ST16: '#00c875', // Green
  Bespoke: '#fdab3d', // Orange
  Stuck: '#e2445c',   // Red
  Done: '#00c875',    // Green
  Warning: '#ffcb00', // Yellow
};

export const TEAM_MEMBERS = [
  { name: 'Imogen', role: 'CEO', timezone: 'AEDT' },
  { name: 'Simone', role: 'COO', timezone: 'AEDT' },
  { name: 'Davie', role: 'Web Support', timezone: 'PHST' },
  { name: 'Zette', role: 'VA', timezone: 'PHST' },
  { name: 'Natalie', role: 'Content', timezone: 'AEST' },
];

// Mock Data Generator
export const MOCK_DATA: DashboardData = {
  lastUpdated: new Date(),
  boards: [
    {
      id: '637693065',
      name: 'AOPI',
      businessUnit: 'AOPI',
      totalItems: 303,
      doneItems: 279,
      activeItems: 24,
      health: 92,
      status: 'active',
      color: COLORS.AOPI
    },
    {
      id: '637748806',
      name: 'IOS Blog',
      businessUnit: 'IOS',
      totalItems: 427,
      doneItems: 333,
      activeItems: 94,
      health: 78,
      status: 'steady',
      color: COLORS.IOS
    },
    {
      id: '641341952',
      name: 'IOS Member',
      businessUnit: 'IOS',
      totalItems: 100,
      doneItems: 65,
      activeItems: 35,
      health: 65,
      status: 'warning',
      color: '#ea580c' // Orange-red for warning state visual
    },
    {
      id: '639420129',
      name: '16 Style Types',
      businessUnit: '16ST',
      totalItems: 174,
      doneItems: 164,
      activeItems: 10,
      health: 94,
      status: 'optimal',
      color: COLORS.ST16
    },
    {
      id: '877995120',
      name: 'Bespoke Image',
      businessUnit: 'Bespoke',
      totalItems: 44,
      doneItems: 39,
      activeItems: 5,
      health: 88,
      status: 'elite',
      color: COLORS.Bespoke
    }
  ],
  attentionItems: [
    {
      id: '1',
      name: 'API Integration Error',
      boardName: 'Dev Board',
      boardId: 'issues',
      status: 'Stuck',
      type: 'stuck',
      category: 'Dev',
      updatedAt: '2023-10-25T10:00:00',
      person: 'Davie'
    },
    {
      id: '2',
      name: 'Legal Approval - Q3',
      boardName: 'Operations',
      boardId: 'ops',
      status: 'Stuck',
      type: 'stuck',
      category: 'Ops',
      updatedAt: '2023-10-24T14:30:00',
      person: 'Simone'
    },
    {
      id: '3',
      name: 'Update pricing on website',
      boardName: 'AOPI',
      boardId: '637693065',
      status: 'Stuck',
      type: 'stuck',
      person: 'Davie',
      updatedAt: '2023-10-20T09:00:00'
    },
    {
      id: '4',
      name: 'Review Q1 content calendar',
      boardName: 'IOS Blog',
      boardId: '637748806',
      status: 'Stuck',
      type: 'stuck',
      person: 'Natalie',
      updatedAt: '2023-10-26T11:00:00'
    },
    {
      id: '5',
      name: 'Newsletter Blast #42',
      boardName: 'Marketing',
      boardId: 'mkt',
      status: 'Working on it',
      date: '2023-10-24', // Past date
      type: 'overdue',
      daysOverdue: 3,
      updatedAt: '2023-10-20T10:00:00',
      person: 'Natalie'
    },
    {
      id: '6',
      name: 'Client Portfolio Review',
      boardName: 'Bespoke',
      boardId: '877995120',
      status: 'Ongoing',
      date: '2023-10-26', // Past date
      type: 'overdue',
      daysOverdue: 1,
      updatedAt: '2023-10-26T08:00:00',
      person: 'Imogen'
    },
    {
      id: '7',
      name: 'Quarterly Rock Review',
      boardName: 'Executive',
      boardId: 'exec',
      status: 'Pending',
      date: '2023-10-27', // Today/Future
      type: 'due_week',
      daysUntilDue: 0,
      updatedAt: '2023-10-25T16:00:00',
      person: 'Imogen'
    },
     // Filling up count for visual representation in UI
     ...Array(5).fill(null).map((_, i) => ({
        id: `overdue-${i}`,
        name: `Overdue Item ${i+1}`,
        boardName: 'General',
        boardId: 'gen',
        status: 'Working on it',
        date: '2023-10-20',
        type: 'overdue' as const,
        daysOverdue: 5 + i,
        updatedAt: new Date().toISOString()
     })),
     ...Array(11).fill(null).map((_, i) => ({
        id: `due-${i}`,
        name: `Upcoming Task ${i+1}`,
        boardName: 'Planning',
        boardId: 'plan',
        status: 'Allocated',
        date: '2023-10-30',
        type: 'due_week' as const,
        daysUntilDue: i + 1,
        updatedAt: new Date().toISOString()
     }))
  ],
  openIssuesCount: 24,
  openTicketsCount: 8,
  rocks: [
    { id: 'r1', name: 'Migration to New CRM Platform', progress: 65, status: 'On Track', owner: 'Davie' },
    { id: 'r2', name: 'Brand Relaunch - 16 Style Types', progress: 90, status: 'Done', owner: 'Imogen' },
    { id: 'r3', name: 'IOS Member Subscription Revamp', progress: 30, status: 'At Risk', owner: 'Simone' },
    { id: 'r4', name: 'Colour Training Thailand', progress: 80, status: 'On Track', owner: 'Imogen' },
    { id: 'r5', name: 'Together We Stitch Summit', progress: 30, status: 'Stuck', owner: 'Jill' },
  ],
  teamLoad: [
    { name: 'Alex', role: 'Dev', timezone: 'UTC', taskCount: 42 }, // Simulating Davie
    { name: 'Sarah', role: 'Ops', timezone: 'UTC', taskCount: 28 }, // Simulating Zette
    { name: 'Michael', role: 'Content', timezone: 'UTC', taskCount: 24 }, // Simulating Natalie
    { name: 'Emma', role: 'Exec', timezone: 'UTC', taskCount: 18 }, // Simulating Imogen
    { name: 'Chris', role: 'Support', timezone: 'UTC', taskCount: 9 }, // Simulating Simone
  ],
  dataQualityIssues: [
    'Monday.com integration for "Creative Assets" board is 4 hours behind sync.',
    'Major Projects: 81% blank status (17/21 items)',
    'AOPI: 30% blank status'
  ]
};