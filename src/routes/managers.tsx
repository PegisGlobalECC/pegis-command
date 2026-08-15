import { createFileRoute } from "@tanstack/react-router";
import { Shell } from "@/components/ecc/Shell";
import { managersPortal } from "@/components/ecc/portals";

export const Route = createFileRoute("/managers")({
  head: () => ({
    meta: [
      { title: "Managers Portal — Pegis Global ECC" },
      {
        name: "description",
        content:
          "Departmental execution environment: team workload, department tasks, approvals, project delivery and escalation to the executive.",
      },
      { property: "og:title", content: "Managers Portal — Pegis Global ECC" },
      {
        property: "og:description",
        content: "Manage your department, evidence delivery and escalate exceptions before they become failures.",
      },
    ],
  }),
  component: () => <Shell portal={managersPortal} />,
});
