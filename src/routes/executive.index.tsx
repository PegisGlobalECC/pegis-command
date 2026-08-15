import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Clock } from "lucide-react";
import {
  AiNote,
  ActionButton,
  Card,
  HealthTag,
  Meter,
  SectionHeader,
  SeverityTag,
  SummaryCard,
} from "@/components/ecc/ui";
import {
  delegated,
  financeCards,
  kpis,
  pendingDecisions,
  priorityFeed,
  projects,
  todaySchedule,
} from "@/data/ecc";

export const Route = createFileRoute("/executive/")({
  component: ExecutiveHome,
});

function ExecutiveHome() {
  const attention = projects.filter((p) => p.health !== "on-track");

  return (
    <div className="space-y-12">
      {/* Layer 1 — executive summary */}
      <section>
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-brand">
          Saturday, 15 August 2026 · 08:12 WAT
        </p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
          Good morning, Engineer.
        </h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Here is what requires your attention today.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          <SummaryCard label="Today's meetings" value="5" note="Next: Chevron Business Review, 10:00" tone="info" />
          <SummaryCard label="Pending approvals" value="5" note="1 critical · ₦66.0m in flight" tone="brand" />
          <SummaryCard label="Decisions required" value="2" note="1 due today" tone="brand" />
          <SummaryCard label="Overdue actions" value="4" note="2 delegated by you" tone="critical" />
          <SummaryCard label="Financial watch" value="₦412m" note="Overdue receivables, 3 accounts" tone="critical" />
          <SummaryCard label="Project risks" value="3" note="1 off track · 2 at risk" tone="warning" />
        </div>
      </section>

      {/* Layer 2 — requires attention */}
      <section>
        <SectionHeader
          eyebrow="Priority feed"
          title="Requires your attention"
          action={
            <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
              Ranked by business impact
            </span>
          }
        />
        <div className="space-y-4">
          {priorityFeed.map((item) => (
            <div
              key={item.id}
              className={`ecc-card relative overflow-hidden p-6 ${
                item.severity === "critical" ? "border-orange-200 bg-orange-50" : ""
              }`}
            >
              <span
                className={`absolute inset-y-0 left-0 w-[3px] ${
                  item.severity === "critical" ? "bg-brand" : "bg-border"
                }`}
              />
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="max-w-3xl">
                  <div className="flex flex-wrap items-center gap-3">
                    <SeverityTag severity={item.severity} />
                    <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                      {item.id}
                    </span>
                  </div>
                  <h3 className="mt-3 text-lg font-semibold">{item.title}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">{item.summary}</p>
                  <div className="mt-4 max-w-2xl">
                    <AiNote>{item.why}</AiNote>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.meta.map((m) => (
                      <span
                        key={m}
                        className="rounded-full border border-border bg-card px-2.5 py-1 text-xs text-muted-foreground"
                      >
                        {m}
                      </span>
                    ))}
                  </div>
                </div>
                <Link
                  to={item.to}
                  className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  {item.action} <ArrowUpRight className="size-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Layer 3 — schedule, decisions, delegation */}
      <section className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-1">
          <SectionHeader eyebrow="Daily brief" title="Today's schedule" />
          <Card className="p-0">
            <ul className="divide-y divide-border">
              {todaySchedule.map((s) => (
                <li key={s.time} className="flex gap-4 px-5 py-4">
                  <span className="font-mono text-sm text-muted-foreground">{s.time}</span>
                  <div>
                    <p className="text-sm font-medium">{s.title}</p>
                    <p className="mt-0.5 text-xs text-muted-foreground">
                      {s.place} · {s.tag}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-2 border-t border-border px-5 py-3 text-xs text-muted-foreground">
              <Clock className="size-3.5" />
              Outlook &amp; Google Calendar synced 10:42 AM
            </div>
          </Card>
        </div>

        <div className="lg:col-span-1">
          <SectionHeader eyebrow="Decision register" title="Decisions required" />
          <div className="space-y-4">
            {pendingDecisions.map((d) => (
              <Card key={d.id} tone="info">
                <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-primary">
                  {d.id} · {d.due}
                </p>
                <h3 className="mt-2 text-sm font-semibold">{d.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{d.context}</p>
                <div className="mt-4 flex gap-2">
                  <ActionButton>Record decision</ActionButton>
                  <ActionButton variant="ghost">Defer</ActionButton>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div className="lg:col-span-1">
          <SectionHeader eyebrow="Delegation" title="Delegated by me" />
          <Card className="p-0">
            <ul className="divide-y divide-border">
              {delegated.map((d) => (
                <li key={d.task} className="px-5 py-4">
                  <p className="text-sm font-medium">{d.task}</p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {d.owner} · {d.due}
                  </p>
                  <p
                    className={`mt-2 font-mono text-[10px] uppercase tracking-[0.16em] ${
                      d.state === "Overdue" || d.state === "Blocked" ? "text-critical" : "text-muted-foreground"
                    }`}
                  >
                    {d.state}
                  </p>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </section>

      {/* Layer 4 — portfolio, finance, KPIs */}
      <section className="grid gap-6 lg:grid-cols-2">
        <div>
          <SectionHeader eyebrow="Portfolio by exception" title="Projects requiring attention" />
          <div className="space-y-3">
            {attention.map((p) => (
              <Card key={p.id}>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold">{p.name}</p>
                    <p className="mt-0.5 text-xs text-muted-foreground">
                      {p.client} · {p.deadline} · {p.risk}
                    </p>
                  </div>
                  <HealthTag health={p.health} />
                </div>
                <div className="mt-4 flex items-center gap-3">
                  <Meter value={p.progress} tone={p.health === "off-track" ? "bad" : "warn"} />
                  <span className="font-mono text-xs text-muted-foreground">{p.progress}%</span>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <SectionHeader eyebrow="Financial watch" title="Executive financial position" />
          <div className="grid gap-4 sm:grid-cols-2">
            {financeCards.map((f) => (
              <SummaryCard key={f.label} label={f.label} value={f.value} note={f.note} tone={f.tone} />
            ))}
          </div>
          <p className="mt-3 text-xs text-muted-foreground">
            QuickBooks is temporarily unavailable. Financial data was last updated at 10:42 AM.
          </p>
        </div>
      </section>

      <section>
        <SectionHeader eyebrow="Performance" title="KPI snapshot" />
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {kpis.map((group) => (
            <Card key={group.group}>
              <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                {group.group}
              </p>
              <dl className="mt-4 space-y-3">
                {group.items.map((i) => (
                  <div key={i.k} className="flex items-baseline justify-between gap-3">
                    <dt className="text-sm text-muted-foreground">{i.k}</dt>
                    <dd className="text-sm font-semibold">{i.v}</dd>
                  </div>
                ))}
              </dl>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
