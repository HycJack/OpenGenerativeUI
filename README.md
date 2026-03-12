# Open Generative UI

A showcase and template for building AI-powered generative UI with [CopilotKit](https://copilotkit.ai) and [LangGraph](https://langchain-ai.github.io/langgraph/). Uses a collaborative todo list to demonstrate agent-driven UI where both the AI agent and the user can manipulate shared application state in real time.

## Quick Start

```bash
# Install dependencies
pnpm install

# Add your OpenAI API key
echo 'OPENAI_API_KEY=your-key' > apps/agent/.env

# Start all services
pnpm dev
```

- **App**: http://localhost:3000
- **Agent**: http://localhost:8123

## Architecture

This is a Turborepo monorepo with two apps:

- **`apps/app`** — Next.js 16 frontend with CopilotKit v2 for agent state management
- **`apps/agent`** — LangGraph Python agent with todo tools and state schema

## Tech Stack

Next.js 16, React 19, TailwindCSS 4, LangGraph, CopilotKit v2, Turborepo
