import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import logo from "@/assets/pegis-logo.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pegis Global ECC — Executive Command Center" },
      {
        name: "description",
        content:
          "The Pegis Global Executive Command Center: one operating layer for executive intelligence, approvals, decisions, projects and delegation across oil & gas operations.",
      },
      { property: "og:title", content: "Pegis Global Executive Command Center" },
      {
        property: "og:description",
        content:
          "Know, prioritise, decide, delegate, execute, track and escalate — one command environment for Pegis Global leadership.",
      },
    ],
  }),
  component: Landing,
});

const portals = [
  {
    to: "/executive",
    tag: "Portal 02",
    name: "Executive Portal",
    desc: "Curated command view: daily brief, priority feed, approvals, decisions, risk.",
    accent: "border-orange-200 bg-orange-50",
  },
  {
    to: "/managers",
    tag: "Portal 03",
    name: "Managers Portal",
    desc: "Department health, team workload, project delivery, escalation to executive.",
    accent: "border-blue-100 bg-blue-50",
  },
  {
    to: "/employees",
    tag: "Portal 04",
    name: "Employees Portal",
    desc: "Tasks, evidence, blockers and requests — the simplest surface of ECC.",
    accent: "border-border bg-card",
  },
  {
    to: "/it",
    tag: "Portal 01",
    name: "IT Portal",
    desc: "Users, roles, integrations, workflows, audit and system health.",
    accent: "border-border bg-card",
  },
] as const;

function Landing() {
  return (
    <div className="min-h-screen bg-background">
      <div className="ecc-grid-bg border-b border-border">
        <div className="mx-auto max-w-[1200px] px-6 py-16 sm:px-10 sm:py-24">
          <div className="flex items-center gap-3">
            <img src={logo.url} alt="Pegis Global" className="size-10" />
            <div>
              <p className="text-sm font-semibold">Pegis Global</p>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                Oil &amp; Gas Services
              </p>
            </div>
          </div>

          <p className="mt-14 font-mono text-[11px] uppercase tracking-[0.24em] text-brand">
            Executive Command Center
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-[1.08] tracking-tight sm:text-6xl">
            The operational nervous system of Pegis Global.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            One platform, one data model, four portals. ECC answers a single question every morning:
            what do I need to know, decide, do and follow up on today?
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              to="/executive"
              className="inline-flex items-center gap-2 rounded-lg bg-brand px-5 py-3 text-sm font-medium text-brand-foreground transition-colors hover:bg-brand/90"
            >
              Enter Executive Portal <ArrowRight className="size-4" />
            </Link>
            <Link
              to="/it"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-5 py-3 text-sm font-medium transition-colors hover:bg-accent"
            >
              IT administration
            </Link>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {["Know", "Prioritise", "Decide", "Delegate", "Execute", "Track", "Escalate", "Learn"].map(
              (step, i) => (
                <div key={step} className="border-t border-border pt-3">
                  <p className="font-mono text-[10px] tracking-[0.18em] text-muted-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <p className="mt-1 text-sm font-medium">{step}</p>
                </div>
              ),
            )}
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[1200px] px-6 py-16 sm:px-10">
        <h2 className="text-xl font-semibold">Choose a portal</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Access is determined by role-based permissions. The same record is presented at the level of
          detail each role is accountable for.
        </p>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {portals.map((p) => (
            <Link
              key={p.to}
              to={p.to}
              className={`group ecc-card p-6 transition-shadow hover:shadow-[var(--shadow-lift)] ${p.accent}`}
            >
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                {p.tag}
              </p>
              <p className="mt-2 flex items-center gap-2 text-lg font-semibold">
                {p.name}
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
