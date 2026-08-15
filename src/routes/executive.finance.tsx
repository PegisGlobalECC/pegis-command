import { createFileRoute } from "@tanstack/react-router";
import { Card, SectionHeader, SummaryCard, Table } from "@/components/ecc/ui";
import { financeCards, strategicClient } from "@/data/ecc";

export const Route = createFileRoute("/executive/finance")({
  component: Finance,
});

const receivables = [
  { client: "Chevron", amount: "₦186,400,000", due: "04 Aug 2026", age: "11 days", state: "Overdue" },
  { client: "TotalEnergies", amount: "₦96,400,000", due: "19 Jul 2026", age: "27 days", state: "Overdue" },
  { client: "Shell", amount: "₦129,000,000", due: "29 Aug 2026", age: "—", state: "Current" },
  { client: "NNPC JV", amount: "₦74,200,000", due: "12 Jul 2026", age: "34 days", state: "Overdue" },
];

const payables = [
  { vendor: "Deltamarine Services", amount: "₦48,200,000", due: "18 Aug 2026", note: "Mobilisation, awaiting your approval" },
  { vendor: "Rigtech Nigeria", amount: "₦17,850,000", due: "22 Aug 2026", note: "HPU overhaul" },
  { vendor: "Atlas Logistics", amount: "₦9,400,000", due: "25 Aug 2026", note: "Barge charter" },
];

function Finance() {
  return (
    <div className="space-y-8">
      <div>
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-brand">Financial intelligence</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight">Executive financial view</h1>
        <p className="mt-2 text-muted-foreground">
          QuickBooks remains the accounting system of record. ECC surfaces exposure, exceptions and executive actions.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {financeCards.map((f) => (
          <SummaryCard key={f.label} label={f.label} value={f.value} note={f.note} tone={f.tone} />
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div>
          <SectionHeader eyebrow="Inflow" title="Receivables" />
          <Table head={["Client", "Amount", "Due", "Age", "State"]}>
            {receivables.map((r) => (
              <tr key={r.client} className="hover:bg-surface">
                <td className="px-5 py-4 font-medium">{r.client}</td>
                <td className="px-5 py-4">{r.amount}</td>
                <td className="px-5 py-4 text-muted-foreground">{r.due}</td>
                <td className="px-5 py-4 text-muted-foreground">{r.age}</td>
                <td className={`px-5 py-4 ${r.state === "Overdue" ? "text-critical" : "text-muted-foreground"}`}>
                  {r.state}
                </td>
              </tr>
            ))}
          </Table>
        </div>

        <div>
          <SectionHeader eyebrow="Outflow" title="Payments due" />
          <Table head={["Vendor", "Amount", "Due", "Note"]}>
            {payables.map((p) => (
              <tr key={p.vendor} className="hover:bg-surface">
                <td className="px-5 py-4 font-medium">{p.vendor}</td>
                <td className="px-5 py-4">{p.amount}</td>
                <td className="px-5 py-4 text-muted-foreground">{p.due}</td>
                <td className="px-5 py-4 text-muted-foreground">{p.note}</td>
              </tr>
            ))}
          </Table>
        </div>
      </div>

      <div>
        <SectionHeader eyebrow="Strategic client" title={`${strategicClient.name} — financial position`} />
        <Card tone="info">
          <dl className="grid gap-6 sm:grid-cols-3 lg:grid-cols-6">
            {[
              ["Open contracts", String(strategicClient.contracts)],
              ["Active projects", String(strategicClient.activeProjects)],
              ["Outstanding receivable", strategicClient.receivable],
              ["Last payment", strategicClient.lastPayment],
              ["Pending deliverables", String(strategicClient.deliverables)],
              ["Last meeting", strategicClient.lastMeeting],
            ].map(([k, v]) => (
              <div key={k}>
                <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">{k}</dt>
                <dd className="mt-1.5 text-sm font-semibold">{v}</dd>
              </div>
            ))}
          </dl>
        </Card>
        <p className="mt-3 text-xs text-muted-foreground">
          Sync delayed — QuickBooks connection unavailable. Last updated 10:42 AM.
        </p>
      </div>
    </div>
  );
}
