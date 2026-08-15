import { createFileRoute } from "@tanstack/react-router";
import { ActionButton, Card, SectionHeader, StatusPill, SummaryCard, Table } from "@/components/ecc/ui";
import { managerData } from "@/data/ecc";

export const Route = createFileRoute("/managers/tasks")({
  component: ManagerTasks,
});

function ManagerTasks() {
  return (
    <div className="space-y-8">
      <div>
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary">Team &amp; tasks</p>
        <h1 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">Department execution</h1>
        <p className="mt-2 text-muted-foreground">
          Delegate, review evidence, unblock and escalate. Scope is limited to the {managerData.department} department.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <SummaryCard label="Open team tasks" value="34" note="Across 4 team members" />
        <SummaryCard label="Overdue" value="6" note="2 tied to mobilisation" tone="critical" />
        <SummaryCard label="Awaiting evidence" value="5" note="Submitted, unverified" tone="warning" />
        <SummaryCard label="Blockers raised" value="2" note="1 needs executive input" tone="brand" />
      </div>

      <Table head={["Task", "Owner", "Due", "Status", "Actions"]}>
        {managerData.tasks.map((t) => (
          <tr key={t.title} className="hover:bg-surface">
            <td className="px-5 py-4 font-medium">{t.title}</td>
            <td className="px-5 py-4 text-muted-foreground">{t.owner}</td>
            <td className={`px-5 py-4 ${t.due.includes("overdue") ? "text-critical" : "text-muted-foreground"}`}>
              {t.due}
            </td>
            <td className="px-5 py-4"><StatusPill label={t.status} /></td>
            <td className="px-5 py-4">
              <div className="flex gap-2">
                <ActionButton variant="ghost">Request evidence</ActionButton>
                <ActionButton variant="ghost">Reassign</ActionButton>
              </div>
            </td>
          </tr>
        ))}
      </Table>

      <div>
        <SectionHeader eyebrow="Escalation" title="Raised to the Executive Portal" />
        <Card tone="brand">
          <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-brand">Escalated 12 Aug · Critical</p>
          <h3 className="mt-2 text-base font-semibold">
            Asset readiness at risk for Monday mobilisation
          </h3>
          <p className="mt-1.5 text-sm text-muted-foreground">
            3 of 8 asset inventory tasks incomplete; subsea tooling unavailable until 22 August.
          </p>
          <p className="mt-3 text-xs text-muted-foreground">
            Visible to the executive as: “Asset readiness is at risk for Monday mobilisation.”
          </p>
        </Card>
      </div>
    </div>
  );
}
