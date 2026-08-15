import { createFileRoute } from "@tanstack/react-router";
import { ActionButton, Card, SectionHeader, StatusPill } from "@/components/ecc/ui";
import { employeeData } from "@/data/ecc";

export const Route = createFileRoute("/employees/requests")({
  component: EmployeeRequests,
});

const types = ["Leave", "Expense", "Procurement", "Recruitment request", "Administrative request"];

function EmployeeRequests() {
  return (
    <div className="mx-auto max-w-3xl space-y-8">
      <div>
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">My requests</p>
        <h1 className="mt-3 text-2xl font-semibold tracking-tight">Submit and track requests</h1>
        <p className="mt-2 text-muted-foreground">
          Requests are routed automatically according to the workflow configured for your department.
        </p>
      </div>

      <div>
        <SectionHeader eyebrow="New" title="Raise a request" />
        <Card>
          <div className="flex flex-wrap gap-2">
            {types.map((t) => (
              <button
                key={t}
                className="rounded-lg border border-border bg-card px-3.5 py-2 text-sm transition-colors hover:bg-accent"
              >
                {t}
              </button>
            ))}
          </div>
        </Card>
      </div>

      <div>
        <SectionHeader eyebrow="In progress" title="Submitted requests" />
        <div className="space-y-3">
          {employeeData.requests.map((r) => (
            <Card key={r.type}>
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <p className="text-sm font-medium">{r.type}</p>
                  <p className="mt-0.5 text-sm text-muted-foreground">{r.detail}</p>
                </div>
                <StatusPill label={r.stage} />
              </div>
              <p className="mt-3 text-xs text-muted-foreground">
                Route: You → Line manager → {r.type === "Expense" ? "Finance" : "HR"}
              </p>
              <div className="mt-4">
                <ActionButton variant="ghost">Withdraw</ActionButton>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
