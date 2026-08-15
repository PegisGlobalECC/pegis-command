export type Severity = "critical" | "high" | "medium" | "low";
export type Health = "on-track" | "at-risk" | "off-track" | "on-hold" | "completed";

export const executive = {
  name: "Engineer",
  greetingName: "Engineer",
  role: "Group Managing Director",
  org: "Pegis Global",
};

export const priorityFeed = [
  {
    id: "PRI-001",
    severity: "critical" as Severity,
    title: "Mobilisation Approval — Chevron Offshore Support",
    summary: "₦48,200,000 mobilisation payment requires final executive approval.",
    why: "Mobilisation is scheduled in 48 hours and procurement approval remains outstanding. Vessel window closes Monday 06:00.",
    meta: ["Procurement", "Waiting 2d 4h", "Finance + Operations"],
    action: "Review approval",
    to: "/executive/approvals",
  },
  {
    id: "PRI-002",
    severity: "high" as Severity,
    title: "Chevron Contract Renewal — Relationship Gap",
    summary: "No recorded client interaction in 31 days. Contract expires in 21 days.",
    why: "Renewal value ₦1.4bn with no scheduled engagement and one open deliverable overdue by 5 days.",
    meta: ["Commercial", "Contract expiry 21d", "Owner: Commercial Manager"],
    action: "Review relationship",
    to: "/executive/relationships",
  },
  {
    id: "PRI-003",
    severity: "high" as Severity,
    title: "Project Alpha — Milestone Slipped 7 Days",
    summary: "Subsea tooling milestone delayed. Primary dependency: equipment availability.",
    why: "Delay consumes the full schedule float and exposes a liquidated damages clause from day 10.",
    meta: ["Projects", "Equipment", "Escalated by Ops Manager"],
    action: "View project",
    to: "/executive/projects",
  },
  {
    id: "PRI-004",
    severity: "medium" as Severity,
    title: "TotalEnergies Receivable Overdue",
    summary: "₦96,400,000 outstanding 27 days beyond agreed terms.",
    why: "Exposure exceeds the ₦75m executive watch threshold and affects Q3 cash position.",
    meta: ["Finance", "Overdue 27d", "Owner: Finance Manager"],
    action: "Open finance view",
    to: "/executive/finance",
  },
];

export const todaySchedule = [
  { time: "08:30", title: "Executive Daily Stand-up", place: "Teams", tag: "Internal" },
  { time: "10:00", title: "Chevron Business Review", place: "Lekki Office", tag: "Client" },
  { time: "12:30", title: "HSE Incident Review — Rig 4", place: "Teams", tag: "HSE" },
  { time: "15:00", title: "Procurement & Mobilisation Board", place: "Boardroom", tag: "Operations" },
  { time: "17:15", title: "Flight LOS → PHC", place: "MM2 Terminal", tag: "Travel" },
];

export const approvals = [
  {
    id: "APR-2041",
    title: "Mobilisation payment — offshore crew & tooling",
    category: "Payments",
    requester: "Ifeoma Nwachukwu",
    department: "Procurement",
    amount: "₦48,200,000",
    waiting: "2d 4h",
    priority: "critical" as Severity,
    chain: ["Line Manager", "Procurement", "Finance"],
    ai: "Blocking a mobilisation scheduled in 48 hours. Vendor has confirmed stock; payment terms 50% upfront.",
  },
  {
    id: "APR-2039",
    title: "Framework agreement renewal — subsea inspection vendor",
    category: "Contracts",
    requester: "Tunde Bakare",
    department: "Commercial",
    amount: "₦210,000,000 / yr",
    waiting: "1d 9h",
    priority: "high" as Severity,
    chain: ["Line Manager", "Legal"],
    ai: "Renewal pricing is 6% above last cycle. Two alternate vendors are pre-qualified.",
  },
  {
    id: "APR-2036",
    title: "Recruitment — 2 x Offshore HSE Officers",
    category: "Recruitment",
    requester: "Grace Ademola",
    department: "HR",
    amount: "—",
    waiting: "3d 1h",
    priority: "high" as Severity,
    chain: ["Department Manager", "HR"],
    ai: "Required for Bonga campaign manning ratio compliance from 1 September.",
  },
  {
    id: "APR-2033",
    title: "Capital expense — hydraulic power unit overhaul",
    category: "Procurement",
    requester: "Samuel Okoro",
    department: "Assets",
    amount: "₦17,850,000",
    waiting: "5h",
    priority: "medium" as Severity,
    chain: ["Line Manager", "Procurement", "Finance"],
    ai: "Unit is assigned to Project Beta from October. No schedule impact if approved this week.",
  },
  {
    id: "APR-2030",
    title: "Annual leave — 12 working days",
    category: "Leave",
    requester: "Blessing Eze",
    department: "Administration",
    amount: "—",
    waiting: "8h",
    priority: "low" as Severity,
    chain: ["Line Manager", "HR"],
    ai: "Cover arranged. No conflict with mobilisation window.",
  },
];

export const decisions = [
  {
    id: "DEC-0188",
    title: "Approve early mobilisation of Rig 4 support crew",
    category: "Mobilisation",
    date: "12 Aug 2026",
    status: "Recorded",
    confidentiality: "General Internal",
    impact: "Operational",
    owner: "Operations Director",
  },
  {
    id: "DEC-0187",
    title: "Suspend vendor Deltamarine pending HSE review",
    category: "HSE / Safety",
    date: "09 Aug 2026",
    status: "Recorded",
    confidentiality: "Confidential",
    impact: "Safety",
    owner: "HSE Manager",
  },
  {
    id: "DEC-0186",
    title: "Chevron renewal commercial position — 4% uplift ceiling",
    category: "Commercial",
    date: "05 Aug 2026",
    status: "Recorded",
    confidentiality: "Executive Confidential",
    impact: "Financial",
    owner: "Commercial Manager",
  },
  {
    id: "DEC-0185",
    title: "Defer Warri yard expansion to FY27 capital plan",
    category: "Strategy",
    date: "28 Jul 2026",
    status: "Recorded",
    confidentiality: "Executive Confidential",
    impact: "Financial",
    owner: "Group MD",
  },
];

export const pendingDecisions = [
  {
    id: "DEC-0192",
    title: "Award subsea tooling contract — single source vs re-tender",
    context: "Re-tender adds 3 weeks; single source is 11% above budget.",
    due: "Due today",
  },
  {
    id: "DEC-0193",
    title: "Accept revised Bonga scope with reduced HSE contingency",
    context: "Client requests scope change with a 9% contingency reduction.",
    due: "Due in 2 days",
  },
];

export const projects = [
  { id: "PRJ-101", name: "Chevron Offshore Support", client: "Chevron", health: "at-risk" as Health, progress: 67, budget: "₦2.4bn", spend: "₦1.7bn", deadline: "30 Sep 2026", risk: "Equipment availability" },
  { id: "PRJ-102", name: "Bonga Subsea Inspection", client: "Shell", health: "on-track" as Health, progress: 82, budget: "₦1.1bn", spend: "₦0.8bn", deadline: "14 Oct 2026", risk: "Low" },
  { id: "PRJ-103", name: "Onshore Pipeline Integrity", client: "TotalEnergies", health: "off-track" as Health, progress: 41, budget: "₦860m", spend: "₦610m", deadline: "22 Sep 2026", risk: "Vendor performance" },
  { id: "PRJ-104", name: "Escravos Terminal Maintenance", client: "Chevron", health: "on-track" as Health, progress: 55, budget: "₦540m", spend: "₦280m", deadline: "05 Nov 2026", risk: "Low" },
  { id: "PRJ-105", name: "Rig 4 Crew Mobilisation", client: "NNPC JV", health: "on-hold" as Health, progress: 23, budget: "₦320m", spend: "₦74m", deadline: "18 Aug 2026", risk: "HSE clearance" },
];

export const financeCards = [
  { label: "Receivables", value: "₦1.82bn", note: "Across 14 client accounts", tone: "info" as const },
  { label: "Overdue receivables", value: "₦412m", note: "3 accounts beyond terms", tone: "critical" as const },
  { label: "Payables due (30d)", value: "₦638m", note: "22 scheduled payments", tone: "warning" as const },
  { label: "Awaiting your approval", value: "₦66.0m", note: "4 payment requests", tone: "brand" as const },
];

export const strategicClient = {
  name: "Chevron",
  contracts: 3,
  activeProjects: 2,
  receivable: "₦186,400,000",
  lastPayment: "₦94,000,000 · 22 Jul 2026",
  deliverables: 4,
  lastMeeting: "Business Review — 09 Aug 2026",
};

export const kpis = [
  { group: "Commercial", items: [{ k: "Revenue YTD", v: "₦8.94bn" }, { k: "Pipeline", v: "₦14.2bn" }, { k: "Client retention", v: "92%" }] },
  { group: "Projects", items: [{ k: "Active", v: "18" }, { k: "On track", v: "12" }, { k: "At risk / off track", v: "6" }] },
  { group: "Finance", items: [{ k: "Cash exposure", v: "₦1.1bn" }, { k: "Payables", v: "₦638m" }, { k: "DSO", v: "62 days" }] },
  { group: "Operations", items: [{ k: "Active mobilisations", v: "4" }, { k: "Equipment availability", v: "78%" }, { k: "HSE exceptions", v: "2" }] },
];

export const delegated = [
  { task: "Submit Chevron mobilisation plan", owner: "Ops Manager", due: "Today", state: "Awaiting update" },
  { task: "Reconcile TotalEnergies receivable", owner: "Finance Manager", due: "Tomorrow", state: "In progress" },
  { task: "Close HSE finding — Rig 4 deck lighting", owner: "HSE Manager", due: "2 days overdue", state: "Overdue" },
  { task: "Prepare board pack — Q3 performance", owner: "Executive Assistant", due: "Friday", state: "In progress" },
  { task: "Vendor pre-qualification refresh", owner: "Procurement Lead", due: "Blocked", state: "Blocked" },
];

export const relationships = [
  { name: "Chevron", owner: "Commercial Manager", last: "31 days ago", next: "Not scheduled", flag: "critical" as Severity, note: "Renewal in 21 days, no engagement recorded." },
  { name: "TotalEnergies", owner: "Group MD", last: "9 days ago", next: "21 Aug 2026", flag: "medium" as Severity, note: "Receivable discussion pending." },
  { name: "Shell", owner: "Projects Director", last: "3 days ago", next: "27 Aug 2026", flag: "low" as Severity, note: "Bonga campaign progressing." },
  { name: "NUPRC (Regulator)", owner: "Compliance Lead", last: "44 days ago", next: "Not scheduled", flag: "high" as Severity, note: "Permit renewal cycle opens next month." },
];

export const travel = [
  { dest: "Port Harcourt, Nigeria", dates: "15 – 17 Aug 2026", flight: "Air Peace P47120 · 17:15", hotel: "Le Meridien Ogeyi", meetings: 3 },
  { dest: "Houston, United States", dates: "02 – 08 Sep 2026", flight: "Delta DL55 · 22:40", hotel: "Post Oak Hotel", meetings: 5 },
];

export const managerData = {
  name: "Ifeoma",
  department: "Operations",
  cards: [
    { label: "My tasks", value: "9", note: "3 due today" },
    { label: "Team tasks", value: "34", note: "6 overdue" },
    { label: "Pending approvals", value: "5", note: "2 waiting > 24h" },
    { label: "Department risks", value: "3", note: "1 escalated to executive" },
  ],
  team: [
    { name: "Samuel Okoro", role: "Assets Supervisor", open: 6, overdue: 1, load: 72 },
    { name: "Blessing Eze", role: "Logistics Officer", open: 4, overdue: 0, load: 48 },
    { name: "Chike Obi", role: "Field Engineer", open: 9, overdue: 3, load: 91 },
    { name: "Amara Nwosu", role: "Planner", open: 5, overdue: 2, load: 66 },
  ],
  tasks: [
    { title: "Confirm vessel window with marine coordinator", owner: "Chike Obi", due: "Today", status: "In progress" },
    { title: "Update equipment inventory for mobilisation", owner: "Samuel Okoro", due: "Tomorrow", status: "Awaiting evidence" },
    { title: "Crew rotation plan — Rig 4", owner: "Amara Nwosu", due: "2 days overdue", status: "Overdue" },
    { title: "Vendor performance review — Deltamarine", owner: "Blessing Eze", due: "Friday", status: "Not started" },
  ],
};

export const employeeData = {
  name: "Samuel",
  tasks: [
    { title: "Complete equipment inventory update", project: "Chevron Offshore Support", priority: "high" as Severity, due: "Due today", status: "In progress", evidence: true },
    { title: "Upload calibration certificates — HPU 3", project: "Escravos Terminal", priority: "medium" as Severity, due: "Tomorrow", status: "Not started", evidence: true },
    { title: "Confirm PPE stock levels for 12 crew", project: "Rig 4 Mobilisation", priority: "critical" as Severity, due: "1 day overdue", status: "Blocked", evidence: false },
    { title: "Submit weekly yard report", project: "Internal", priority: "low" as Severity, due: "Friday", status: "Not started", evidence: false },
  ],
  requests: [
    { type: "Leave", detail: "3 days — 28 to 30 Aug", stage: "With line manager" },
    { type: "Expense", detail: "₦82,400 — site travel", stage: "With finance" },
  ],
};

export const integrations = [
  { name: "Microsoft Outlook", status: "Connected", sync: "10:42 AM" },
  { name: "Microsoft Teams", status: "Connected", sync: "10:39 AM" },
  { name: "Google Calendar", status: "Connected", sync: "10:41 AM" },
  { name: "Pegis ERP", status: "Degraded", sync: "08:12 AM" },
  { name: "QuickBooks", status: "Disconnected", sync: "Yesterday 18:04" },
  { name: "OneDrive", status: "Connected", sync: "10:30 AM" },
  { name: "Email service", status: "Connected", sync: "10:44 AM" },
  { name: "WhatsApp gateway", status: "Connected", sync: "10:44 AM" },
];

export const itUsers = [
  { name: "Engineer A. Pegi", role: "Group MD", portal: "Executive", dept: "Executive Office", status: "Active", last: "Today 07:58" },
  { name: "Ifeoma Nwachukwu", role: "Operations Manager", portal: "Managers", dept: "Operations", status: "Active", last: "Today 08:21" },
  { name: "Grace Ademola", role: "HR Manager", portal: "Managers", dept: "HR", status: "Active", last: "Today 08:05" },
  { name: "Samuel Okoro", role: "Assets Supervisor", portal: "Employees", dept: "Assets", status: "Active", last: "Today 07:40" },
  { name: "Chidi Uzo", role: "IT Administrator", portal: "IT", dept: "IT", status: "Active", last: "Today 06:55" },
  { name: "Ruth Bello", role: "Finance Officer", portal: "Employees", dept: "Finance", status: "Suspended", last: "02 Aug 2026" },
];

export const auditLog = [
  { at: "10:44", who: "Chidi Uzo", what: "Updated approval workflow: Procurement", type: "Configuration" },
  { at: "10:12", who: "Engineer A. Pegi", what: "Approved APR-2028 (₦12.4m)", type: "Approval" },
  { at: "09:51", who: "System", what: "QuickBooks sync failed — token expired", type: "Integration" },
  { at: "09:20", who: "Grace Ademola", what: "Created user: Amara Nwosu", type: "User management" },
  { at: "08:33", who: "Engineer A. Pegi", what: "Recorded DEC-0188", type: "Decision" },
];
