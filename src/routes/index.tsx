import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "فيزياء السادس العلمي" },
      { name: "description", content: "منصة فيزياء السادس العلمي" },
      { property: "og:title", content: "فيزياء السادس العلمي" },
      { property: "og:description", content: "منصة فيزياء السادس العلمي" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="bg-grid flex min-h-screen items-center justify-center px-4">
      <h1 className="font-display text-5xl font-bold text-primary">فيزياء السادس العلمي</h1>
    </main>
  );
}
