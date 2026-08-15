import { createFileRoute } from "@tanstack/react-router";
import { ActionButton, AiNote, Card, SectionHeader, SeverityTag, SummaryCard } from "@/components/ecc/ui";
import { approvals } from "@/data/ecc";

export const Route = createFileRoute("/executive/approvals")({
  component: Approvals,
});

function Approvals() {
  return (
    <div className="space-y-8">
      <div>
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-brand">Approval command center</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight">Approvals waiting on you</h1>
        <p className="mt-2 text-muted-foreground">
          One consolidated queue across payments, procurement, contracts, recruitment, leave and expenses.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <SummaryCard label="In queue" value="5" note="Across 5 departments" />
        <SummaryCard label="Critical" value="1" note="Blocking mobilisation" tone="critical" />
        <SummaryCard label="Value in flight" value="₦66.0m" note="Payments & procurement" tone="brand" />
        <SummaryCard label="Avg. wait" value="1d 19h" note="Target: under 24 hours" tone="warning" />
      </div>

      <div>
        <SectionHeader eyebrow="Queue" title="Priority-ranked requests" />
        <div className="space-y-4">
          {approvals.map((a) => (
            <Card key={a.id} className={a.priority === "critical" ? "border-orange-200 bg-orange-50" : ""}>
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="max-w-2xl">
                  <div className="flex flex-wrap items-center gap-3">
                    <SeverityTag severity={a.priority} />
                    <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                      {a.id} · {a.category}
                    </span>
                  </div>
                  <h3 className="mt-3 text-base font-semibold">{a.title}</h3>
                  <dl className="mt-3 grid gap-x-8 gap-y-2 text-sm sm:grid-cols-2">
                    <div className="flex gap-2">
                      <dt className="text-muted-foreground">Requester</dt>
                      <dd className="font-medium">{a.requester}</dd>
                    </div>
                    <div className="flex gap-2">
                      <dt className="text-muted-foreground">Department</dt>
                      <dd className="font-medium">{a.department}</dd>
                    </div>
                    <div className="flex gap-2">
                      <dt className="text-muted-foreground">Amount</dt>
                      <dd className="font-medium">{a.amount}</dd>
                    </div>
                    <div className="flex gap-2">
                      <dt className="text-muted-foreground">Waiting</dt>
                      <dd className="font-medium">{a.waiting}</dd>
                    </div>
                  </dl>
                  <p className="mt-3 text-xs text-muted-foreground">
                    Previously approved by: {a.chain.join(" → ")}
                  </p>
                  <div className="mt-4">
                    <AiNote>{a.ai}</AiNote>
                  </div>
                </div>

                <div className="flex w-full flex-wrap gap-2 sm:w-auto sm:flex-col">
                  <ActionButton variant="brand">Approve</ActionButton>
                  <ActionButton variant="ghost">Return</ActionButton>
                  <ActionButton variant="ghost">Request information</ActionButton>
                  <ActionButton variant="ghost">Reject</ActionButton>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
