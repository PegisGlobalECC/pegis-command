import { createFileRoute } from "@tanstack/react-router";
import { ActionButton, Card, SectionHeader, SeverityTag, StatusPill } from "@/components/ecc/ui";
import { employeeData } from "@/data/ecc";

export const Route = createFileRoute("/employees/")({
  component: EmployeeHome,
});

function EmployeeHome() {
  return (
    <div className="mx-auto max-w-3xl space-y-8">
      <div>
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
          Saturday, 15 August 2026
        </p>
        <h1 className="mt-3 text-2xl font-semibold tracking-tight">Good morning, {employeeData.name}.</h1>
        <p className="mt-2 text-muted-foreground">You have 4 tasks. 1 is overdue and 1 is blocked.</p>
      </div>

      <div>
        <SectionHeader eyebrow="My tasks" title="What I need to do" />
        <div className="space-y-3">
          {employeeData.tasks.map((t) => (
            <Card key={t.title} className={t.due.includes("overdue") ? "border-orange-200 bg-orange-50" : ""}>
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h3 className="text-base font-medium">{t.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {t.project} · {t.due}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <SeverityTag severity={t.priority} />
                  <StatusPill label={t.status} />
                </div>
              </div>
              {t.evidence ? (
                <p className="mt-3 text-xs text-muted-foreground">Evidence required before completion.</p>
              ) : null}
              <div className="mt-4 flex flex-wrap gap-2">
                <ActionButton>Update status</ActionButton>
                <ActionButton variant="ghost">Upload evidence</ActionButton>
                <ActionButton variant="ghost">I am blocked</ActionButton>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <div>
        <SectionHeader eyebrow="Notifications" title="Recent" />
        <Card className="p-0">
          <ul className="divide-y divide-border text-sm">
            {[
              "Your manager requested evidence for “Equipment inventory update”.",
              "New task assigned: Confirm PPE stock levels for 12 crew.",
              "Your expense request moved to Finance.",
            ].map((n) => (
              <li key={n} className="px-5 py-4 text-muted-foreground">
                {n}
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </div>
  );
}
