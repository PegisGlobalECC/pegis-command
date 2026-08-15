import type { PortalConfig } from "./Shell";

export const executivePortal: PortalConfig = {
  key: "executive",
  name: "Executive Portal",
  subtitle: "Command · Intelligence · Decisions",
  user: "Engineer A. Pegi",
  role: "Group Managing Director",
  density: "curated",
  nav: [
    { label: "Home", to: "/executive" },
    { label: "Tasks & Delegation", to: "/executive/tasks" },
    { label: "Approvals", to: "/executive/approvals" },
    { label: "Decisions", to: "/executive/decisions" },
    { label: "Projects", to: "/executive/projects" },
    { label: "Finance", to: "/executive/finance" },
    { label: "Relationships", to: "/executive/relationships" },
    { label: "Travel", to: "/executive/travel" },
  ],
};

export const managersPortal: PortalConfig = {
  key: "managers",
  name: "Managers Portal",
  subtitle: "Department execution",
  user: "Ifeoma Nwachukwu",
  role: "Operations Manager",
  density: "operational",
  nav: [
    { label: "Department", to: "/managers" },
    { label: "Team & Tasks", to: "/managers/tasks" },
  ],
};

export const employeesPortal: PortalConfig = {
  key: "employees",
  name: "Employees Portal",
  subtitle: "Execute · Report",
  user: "Samuel Okoro",
  role: "Assets Supervisor",
  density: "simple",
  nav: [
    { label: "My day", to: "/employees" },
    { label: "My requests", to: "/employees/requests" },
  ],
};

export const itPortal: PortalConfig = {
  key: "it",
  name: "IT Portal",
  subtitle: "Administration · Security",
  user: "Chidi Uzo",
  role: "IT Administrator",
  density: "operational",
  nav: [
    { label: "System health", to: "/it" },
    { label: "Users & roles", to: "/it/users" },
  ],
};
