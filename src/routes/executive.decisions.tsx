import { createFileRoute } from "@tanstack/react-router";
import { Lock } from "lucide-react";
import { ActionButton, Card, SectionHeader, SummaryCard, Table } from "@/components/ecc/ui";
import { decisions, pendingDecisions } from "@/data/ecc";

export const Route = createFileRoute("/executive/decisions")({
  component: Decisions,
});

function Decisions() {
  return (
    <div className="space-y-8">
      <div>
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-brand">Decision register</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight">Institutional memory of decisions</h1>
        <p className="mt-2 text-muted-foreground">
          Every material executive decision becomes a searchable, permission-aware organisational record.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <SummaryCard label="Open decisions" value="2" note="1 due today" tone="brand" />
        <SummaryCard label="Recorded this quarter" value="41" note="Across 9 categories" />
        <SummaryCard label="Executive confidential" value="12" note="Restricted access" tone="info" />
        <SummaryCard label="Linked to projects" value="27" note="Traceable to delivery" />
      </div>

      <div>
        <SectionHeader eyebrow="Open" title="Awaiting your decision" />
        <div className="grid gap-4 md:grid-cols-2">
          {pendingDecisions.map((d) => (
            <Card key={d.id} tone="brand">
              <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-brand">
                {d.id} · {d.due}
              </p>
              <h3 className="mt-2 text-base font-semibold">{d.title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{d.context}</p>
              <div className="mt-4 flex gap-2">
                <ActionButton>Record decision</ActionButton>
                <ActionButton variant="ghost">Request more context</ActionButton>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <div>
        <SectionHeader eyebrow="History" title="Recorded decisions" />
        <Table head={["ID", "Decision", "Category", "Owner", "Impact", "Confidentiality", "Date"]}>
          {decisions.map((d) => (
            <tr key={d.id} className="hover:bg-surface">
              <td className="px-5 py-4 font-mono text-xs text-muted-foreground">{d.id}</td>
              <td className="px-5 py-4 font-medium">{d.title}</td>
              <td className="px-5 py-4 text-muted-foreground">{d.category}</td>
              <td className="px-5 py-4 text-muted-foreground">{d.owner}</td>
              <td className="px-5 py-4 text-muted-foreground">{d.impact}</td>
              <td className="px-5 py-4">
                <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                  {d.confidentiality.startsWith("Executive") ? <Lock className="size-3" /> : null}
                  {d.confidentiality}
                </span>
              </td>
              <td className="px-5 py-4 text-muted-foreground">{d.date}</td>
            </tr>
          ))}
        </Table>
      </div>
    </div>
  );
}
