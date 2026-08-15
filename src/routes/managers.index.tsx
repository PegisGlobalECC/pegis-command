import { createFileRoute } from "@tanstack/react-router";
import { ActionButton, Card, HealthTag, Meter, SectionHeader, SummaryCard, Table } from "@/components/ecc/ui";
import { managerData, projects } from "@/data/ecc";

export const Route = createFileRoute("/managers/")({
  component: ManagerHome,
});

function ManagerHome() {
  return (
    <div className="space-y-8">
      <div>
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary">
          {managerData.department} department · Saturday, 15 August 2026
        </p>
        <h1 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
          Good morning, {managerData.name}.
        </h1>
        <p className="mt-2 text-muted-foreground">Here is what requires your attention today.</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {managerData.cards.map((c, i) => (
          <SummaryCard
            key={c.label}
            label={c.label}
            value={c.value}
            note={c.note}
            tone={i === 3 ? "critical" : i === 2 ? "brand" : "default"}
          />
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <SectionHeader eyebrow="Delivery" title="Department projects" />
          <div className="space-y-3">
            {projects.slice(0, 3).map((p) => (
              <Card key={p.id}>
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <p className="text-sm font-semibold">{p.name}</p>
                    <p className="mt-0.5 text-xs text-muted-foreground">
                      {p.client} · deadline {p.deadline} · spend {p.spend} of {p.budget}
                    </p>
                  </div>
                  <HealthTag health={p.health} />
                </div>
                <div className="mt-4 flex items-center gap-3">
                  <Meter value={p.progress} tone={p.health === "off-track" ? "bad" : "default"} />
                  <span className="font-mono text-xs text-muted-foreground">{p.progress}%</span>
                </div>
                <div className="mt-4 flex gap-2">
                  <ActionButton variant="ghost">Update status</ActionButton>
                  <ActionButton variant="ghost">Escalate to executive</ActionButton>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <SectionHeader eyebrow="Team" title="Workload" />
          <Card className="p-0">
            <ul className="divide-y divide-border">
              {managerData.team.map((m) => (
                <li key={m.name} className="px-5 py-4">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="text-sm font-medium">{m.name}</p>
                      <p className="text-xs text-muted-foreground">{m.role}</p>
                    </div>
                    <span className="font-mono text-xs text-muted-foreground">{m.load}%</span>
                  </div>
                  <div className="mt-3">
                    <Meter value={m.load} tone={m.load > 85 ? "bad" : m.load > 70 ? "warn" : "default"} />
                  </div>
                  <p className="mt-2 text-xs text-muted-foreground">
                    {m.open} open · {m.overdue} overdue
                  </p>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </div>

      <div>
        <SectionHeader eyebrow="Approvals" title="Waiting on you" />
        <Table head={["Request", "Requester", "Type", "Waiting", "Action"]}>
          {[
            ["Site travel expense — ₦82,400", "Samuel Okoro", "Expense", "8h"],
            ["Annual leave — 3 days", "Blessing Eze", "Leave", "1d 2h"],
            ["PPE restock — 12 sets", "Chike Obi", "Procurement", "2d 6h"],
          ].map(([req, who, type, wait]) => (
            <tr key={req} className="hover:bg-surface">
              <td className="px-5 py-4 font-medium">{req}</td>
              <td className="px-5 py-4 text-muted-foreground">{who}</td>
              <td className="px-5 py-4 text-muted-foreground">{type}</td>
              <td className="px-5 py-4 text-muted-foreground">{wait}</td>
              <td className="px-5 py-4">
                <div className="flex gap-2">
                  <ActionButton>Approve</ActionButton>
                  <ActionButton variant="ghost">Return</ActionButton>
                </div>
              </td>
            </tr>
          ))}
        </Table>
      </div>
    </div>
  );
}
