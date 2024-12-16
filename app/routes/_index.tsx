// app/routes/_index.tsx
import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Modality Network" },
    {
      name: "description",
      content: "Building the decentralized future",
    },
  ];
};

export default function Index() {
  return (
    <div className="min-h-screen text-white">
      <div className="relative z-10 container mx-auto px-4 py-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">ⲙ</h1>
      </div>
    </div>
  );
}
