import { createFileRoute } from "@tanstack/react-router";
import { ActionButton, Card, SectionHeader, SummaryCard, StatusPill, Table } from "@/components/ecc/ui";
import { delegated } from "@/data/ecc";

export const Route = createFileRoute("/executive/tasks")({
  component: Tasks,
});

const views = ["Delegated by me", "Due today", "Awaiting update", "Overdue", "Blocked", "Requires my intervention"];

const suggestions = [
  {
    title: "Send revised proposal to Chevron",
    owner: "Commercial Manager",
    due: "Friday",
    source: "Chevron Business Review — 09 Aug",
  },
  {
    title: "Confirm HSE clearance for 4 Rig 4 crew",
    owner: "HSE Manager",
    due: "Monday",
    source: "HSE Incident Review — 12 Aug",
  },
];

function Tasks() {
  return (
    <div className="space-y-8">
      <div>
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-brand">Tasks &amp; delegation</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight">You should not have to ask twice</h1>
        <p className="mt-2 text-muted-foreground">
          Every delegated action has an accountable owner, a deadline, evidence and a visible status.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <SummaryCard label="Delegated by me" value="23" note="Open across 8 owners" />
        <SummaryCard label="Awaiting update" value="6" note="No movement in 48h" tone="warning" />
        <SummaryCard label="Overdue" value="4" note="2 breach a client commitment" tone="critical" />
        <SummaryCard label="Blocked" value="1" note="Requires your intervention" tone="brand" />
      </div>

      <div className="flex flex-wrap gap-2">
        {views.map((v, i) => (
          <button
            key={v}
            className={`rounded-full border px-3.5 py-1.5 text-sm transition-colors ${
              i === 0
                ? "border-primary/30 bg-primary text-primary-foreground"
                : "border-border bg-card text-muted-foreground hover:bg-accent"
            }`}
          >
            {v}
          </button>
        ))}
      </div>

      <Table head={["Task", "Owner", "Due", "Status", "Evidence"]}>
        {delegated.map((d) => (
          <tr key={d.task} className="hover:bg-surface">
            <td className="px-5 py-4 font-medium">{d.task}</td>
            <td className="px-5 py-4 text-muted-foreground">{d.owner}</td>
            <td className={`px-5 py-4 ${d.due.includes("overdue") ? "text-critical" : "text-muted-foreground"}`}>
              {d.due}
            </td>
            <td className="px-5 py-4"><StatusPill label={d.state} /></td>
            <td className="px-5 py-4 text-muted-foreground">{d.state === "Overdue" ? "None" : "1 attachment"}</td>
          </tr>
        ))}
      </Table>

      <div>
        <SectionHeader eyebrow="Meeting intelligence" title="Suggested actions awaiting your confirmation" />
        <div className="grid gap-4 md:grid-cols-2">
          {suggestions.map((s) => (
            <Card key={s.title} tone="brand">
              <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-brand">AI suggestion</p>
              <h3 className="mt-2 text-base font-semibold">{s.title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">
                Suggested owner: {s.owner} · Suggested due date: {s.due}
              </p>
              <p className="mt-1 text-xs text-muted-foreground">Extracted from {s.source}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                <ActionButton>Create task</ActionButton>
                <ActionButton variant="ghost">Edit</ActionButton>
                <ActionButton variant="ghost">Dismiss</ActionButton>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
