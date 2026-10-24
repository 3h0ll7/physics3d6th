import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "الفيزياء السادس العلمي 3D" },
      {
        name: "description",
        content:
          "كتاب فيزياء ثلاثي الأبعاد تفاعلي للصف السادس العلمي: تسعة فصول و81 درساً مع التجارب والاختبارات.",
      },
      { property: "og:title", content: "الفيزياء السادس العلمي 3D" },
      {
        property: "og:description",
        content: "كتاب فيزياء ثلاثي الأبعاد تفاعلي للصف السادس العلمي.",
      },
      { name: "theme-color", content: "#10162a" },
    ],
  }),
  component: Index,
});

/**
 * The interactive 3D book lives as a self-contained static page in
 * public/book/index.html. It is shown full-screen here; a later step wraps
 * this route with sign-in and subscription checks.
 */
function Index() {
  return (
    <main className="fixed inset-0 bg-[#10162a]">
      <iframe
        src="/book/index.html"
        title="الفيزياء السادس العلمي 3D"
        className="h-full w-full border-0"
        allow="fullscreen"
      />
    </main>
  );
}
