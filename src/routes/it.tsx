import { createFileRoute } from "@tanstack/react-router";
import { Shell } from "@/components/ecc/Shell";
import { itPortal } from "@/components/ecc/portals";

export const Route = createFileRoute("/it")({
  head: () => ({
    meta: [
      { title: "IT Portal — Pegis Global ECC" },
      {
        name: "description",
        content:
          "Administrative backend for ECC: system health, users, roles and permissions, integrations, approval workflows and immutable audit trail.",
      },
      { property: "og:title", content: "IT Portal — Pegis Global ECC" },
      { property: "og:description", content: "Control the platform: access, integrations, workflows and audit." },
    ],
  }),
  component: () => <Shell portal={itPortal} />,
});
