import { createFileRoute } from "@tanstack/react-router";
import { ActionButton, Card, SectionHeader, SeverityTag, SummaryCard } from "@/components/ecc/ui";
import { relationships } from "@/data/ecc";

export const Route = createFileRoute("/executive/relationships")({
  component: Relationships,
});

function Relationships() {
  return (
    <div className="space-y-8">
      <div>
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-brand">Relationship intelligence</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight">Who must I follow up with?</h1>
        <p className="mt-2 text-muted-foreground">
          Clients, prospects, partners, vendors and regulators — ranked by engagement gap and commercial exposure.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <SummaryCard label="Relationships tracked" value="64" note="External contacts" />
        <SummaryCard label="Engagement gaps" value="7" note="Beyond configured threshold" tone="warning" />
        <SummaryCard label="Renewals in 90 days" value="4" note="₦2.1bn combined value" tone="brand" />
        <SummaryCard label="Follow-ups due" value="5" note="This week" tone="info" />
      </div>

      <div>
        <SectionHeader eyebrow="Relationship watch" title="Requiring executive engagement" />
        <div className="grid gap-4 md:grid-cols-2">
          {relationships.map((r) => (
            <Card key={r.name} className={r.flag === "critical" ? "border-orange-200 bg-orange-50" : ""}>
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-base font-semibold">{r.name}</h3>
                  <p className="mt-0.5 text-xs text-muted-foreground">Relationship owner: {r.owner}</p>
                </div>
                <SeverityTag severity={r.flag} />
              </div>
              <p className="mt-3 text-sm text-muted-foreground">{r.note}</p>
              <dl className="mt-4 grid grid-cols-2 gap-4 text-sm">
                <div>
                  <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                    Last interaction
                  </dt>
                  <dd className="mt-1 font-medium">{r.last}</dd>
                </div>
                <div>
                  <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                    Next follow-up
                  </dt>
                  <dd className="mt-1 font-medium">{r.next}</dd>
                </div>
              </dl>
              <div className="mt-4 flex gap-2">
                <ActionButton>Schedule follow-up</ActionButton>
                <ActionButton variant="ghost">Open profile</ActionButton>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
