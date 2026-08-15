import { createFileRoute } from "@tanstack/react-router";
import { Card, SectionHeader, SummaryCard, Table } from "@/components/ecc/ui";
import { auditLog, integrations } from "@/data/ecc";

export const Route = createFileRoute("/it/")({
  component: ITHome,
});

const statusTone: Record<string, string> = {
  Connected: "text-success",
  Degraded: "text-warning",
  Disconnected: "text-critical",
};

const workflows = [
  { name: "Leave", route: "Employee → Manager → HR" },
  { name: "Large payment", route: "Finance → Manager → GM → Executive" },
  { name: "Recruitment", route: "HR → Department Manager → Executive" },
  { name: "Procurement", route: "Requester → Line Manager → Procurement → Finance → Executive" },
];

function ITHome() {
  return (
    <div className="space-y-8">
      <div>
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary">System administration</p>
        <h1 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">ECC system health</h1>
        <p className="mt-2 text-muted-foreground">
          Platform status, integrations, workflow configuration and immutable audit trail.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <SummaryCard label="Platform status" value="Operational" note="All core services responding" />
        <SummaryCard label="Failed syncs (24h)" value="3" note="QuickBooks token expired" tone="critical" />
        <SummaryCard label="Active users" value="21" note="of 24 provisioned" tone="info" />
        <SummaryCard label="AI service" value="Healthy" note="Avg. response 1.4s" />
      </div>

      <div>
        <SectionHeader eyebrow="Integrations" title="Connected systems" />
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {integrations.map((i) => (
            <Card key={i.name}>
              <p className="text-sm font-medium">{i.name}</p>
              <p className={`mt-2 text-sm font-semibold ${statusTone[i.status] ?? "text-muted-foreground"}`}>
                {i.status}
              </p>
              <p className="mt-1 text-xs text-muted-foreground">Last sync {i.sync}</p>
            </Card>
          ))}
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div>
          <SectionHeader eyebrow="Workflows" title="Approval routing" />
          <Card className="p-0">
            <ul className="divide-y divide-border">
              {workflows.map((w) => (
                <li key={w.name} className="px-5 py-4">
                  <p className="text-sm font-medium">{w.name}</p>
                  <p className="mt-1 font-mono text-xs text-muted-foreground">{w.route}</p>
                </li>
              ))}
            </ul>
          </Card>
        </div>

        <div>
          <SectionHeader eyebrow="Audit" title="Recent activity" />
          <Table head={["Time", "Actor", "Event", "Type"]}>
            {auditLog.map((a) => (
              <tr key={a.at} className="hover:bg-surface">
                <td className="px-5 py-4 font-mono text-xs text-muted-foreground">{a.at}</td>
                <td className="px-5 py-4 font-medium">{a.who}</td>
                <td className="px-5 py-4 text-muted-foreground">{a.what}</td>
                <td className="px-5 py-4 text-muted-foreground">{a.type}</td>
              </tr>
            ))}
          </Table>
        </div>
      </div>
    </div>
  );
}
