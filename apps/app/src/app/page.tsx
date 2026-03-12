"use client";

import { useEffect } from "react";
import { ExampleLayout } from "@/components/example-layout";
import { ExampleCanvas } from "@/components/example-canvas";
import { useGenerativeUIExamples, useExampleSuggestions } from "@/hooks";

import { CopilotChat } from "@copilotkit/react-core/v2";
// import { HeadlessChat } from "@/components/headless-chat";

export default function HomePage() {
  // 🪁 Generative UI Examples
  useGenerativeUIExamples();

  // 🪁 Example Suggestions
  useExampleSuggestions();

  // 🪁 Widget bridge: handle sendPrompt and openLink from widget iframes
  useEffect(() => {
    const handler = (e: MessageEvent) => {
      if (e.data?.type === "open-link" && typeof e.data.url === "string") {
        window.open(e.data.url, "_blank", "noopener,noreferrer");
      }
    };
    window.addEventListener("message", handler);
    return () => window.removeEventListener("message", handler);
  }, []);

  return (
    <ExampleLayout
      chatContent={<CopilotChat />}
      // chatContent={<HeadlessChat />}
      appContent={<ExampleCanvas />}
    />
  );
}
