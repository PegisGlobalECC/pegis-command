import { createFileRoute } from "@tanstack/react-router";
import { Shell } from "@/components/ecc/Shell";
import { executivePortal } from "@/components/ecc/portals";

export const Route = createFileRoute("/executive")({
  head: () => ({
    meta: [
      { title: "Executive Portal — Pegis Global ECC" },
      {
        name: "description",
        content:
          "Executive command environment for Pegis Global: daily brief, priority feed, approvals, decisions, project risk and financial watch.",
      },
      { property: "og:title", content: "Executive Portal — Pegis Global ECC" },
      {
        property: "og:description",
        content: "What requires executive awareness or intervention today, ranked by business impact.",
      },
    ],
  }),
  component: () => <Shell portal={executivePortal} />,
});
