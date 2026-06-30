"use client";

import { useState } from "react";

const weeks = [
  {
    week: "Week 1",
    title: "Define the wedges",
    goal: "Find the buyers who feel the pain fastest.",
    actions: [
      "Map the first 3 ICPs where The Hog can replace the most fragmented workflows",
      "Study current users, demos, signups, and API use cases",
      "Identify where the pain is strongest: GTM engineers, AI agent builders, YC founders, RevOps teams, or founder-led sales teams",
      'Define the "before The Hog" workflow and the "after The Hog" workflow for each ICP',
      "Pick the wedge where The Hog can create the fastest visible win",
    ],
    output:
      "A ranked wedge map showing who needs The Hog most, what they are replacing, and what use case proves value fastest.",
  },
  {
    week: "Week 2",
    title: "Build Customer Zero workflows",
    goal: "Use The Hog to run The Hog's own GTM.",
    actions: [
      "Build a workflow that finds companies showing real-time buying signals",
      "Monitor sources like X, Reddit, LinkedIn, news, job posts, funding, product launches, and category conversations",
      "Enrich each company and decision maker into a clean account brief",
      'Add explainable "why now" reasoning',
      "Route each account into a next best action: outbound, founder comment, partner angle, content idea, or API demo",
    ],
    output:
      "A live internal GTM workflow powered by The Hog that produces accounts, signals, briefs, and actions.",
  },
  {
    week: "Week 3",
    title: "Turn workflows into demos",
    goal: "Make internal GTM workflows externally reusable.",
    actions: [
      "Turn the best internal workflows into public demo examples",
      "Find 100 YC companies stitching together Clay, Apollo, scrapers, and search APIs",
      "Monitor a category across X, Reddit, news, and job posts for buying signals",
      "Replace a Clay plus Apollo plus scraper stack with one API call and agent workflow",
      "Package each demo as a short page, video, or API recipe and use it in outbound and founder-led content",
    ],
    output:
      "Three reusable demo workflows that make The Hog easier to understand, sell, and copy.",
  },
  {
    week: "Week 4",
    title: "Make GTM compound",
    goal: "Build the feedback loop between usage, messaging, product, and revenue.",
    actions: [
      "Track which signal types lead to replies, meetings, signups, API usage, and revenue",
      "Identify which demo workflows get copied or requested most often",
      "Feed customer objections into docs, examples, and product improvements",
      "Build a simple GTM dashboard around source, signal, persona, workflow, conversion, and revenue",
      "Turn the first month into a repeatable Customer Zero operating system",
    ],
    output:
      "A loop where The Hog's own GTM motion improves the product, messaging, docs, and pipeline every week.",
  },
];

const oldStack = [
  "Search API",
  "Scraper",
  "Enrichment vendor",
  "Intent tool",
  "Social listening",
  "CRM",
  "Clay table",
  "A few brittle workflows",
];

const loopSteps = [
  {
    title: "Detect live signals",
    body: "Monitor market movement across social, news, hiring, funding, launches, and category conversations.",
  },
  {
    title: "Enrich context",
    body: "Turn people, company, web, and social data into an account brief a human or agent can use.",
  },
  {
    title: "Explain why now",
    body: "Show the reason this account matters today, not just that it matches an ICP.",
  },
  {
    title: "Route next action",
    body: "Send the right signal to outbound, founder engagement, content, partners, or an API demo.",
  },
  {
    title: "Package the workflow",
    body: "Turn internal GTM plays into demos, recipes, and examples prospects can copy.",
  },
  {
    title: "Learn from outcomes",
    body: "Use replies, meetings, usage, revenue, and objections to improve the next workflow.",
  },
];

const metrics = [
  {
    title: "Signal quality",
    items: [
      "Signal to reply rate",
      "Signal to signup rate",
      "Signal to API usage rate",
      'Percentage of signals with clear "why now" reasoning',
    ],
  },
  {
    title: "Workflow quality",
    items: [
      "Time from signal to account brief",
      "Number of tools replaced by The Hog workflow",
      "Number of reusable API recipes created",
      "Demo workflow completion rate",
    ],
  },
  {
    title: "Revenue learning",
    items: [
      "Replies by persona",
      "Meetings by use case",
      "API signups by workflow",
      "Revenue influenced by Customer Zero plays",
      "Objections converted into docs or product changes",
    ],
  },
];

function SectionHeader({
  label,
  title,
}: {
  label?: string;
  title: string;
}) {
  return (
    <div className="mb-7">
      {label ? (
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
          {label}
        </p>
      ) : null}
      <h2 className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
        {title}
      </h2>
    </div>
  );
}

function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2.5 text-sm leading-6 text-muted">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function CopyLinkButton() {
  const [copied, setCopied] = useState(false);

  async function copyLink() {
    const fallback = "https://the-hog-30-day-plan.vercel.app";
    const url = typeof window === "undefined" ? fallback : window.location.href;

    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  }

  return (
    <button
      type="button"
      onClick={copyLink}
      className="mt-6 inline-flex rounded-md bg-white px-5 py-3 text-sm font-semibold text-ink transition hover:bg-soft"
    >
      {copied ? "Copied" : "Share the plan"}
    </button>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen px-5 py-6 sm:px-8 sm:py-10">
      <div className="mx-auto max-w-[900px]">
        <header className="mb-16 rounded-lg border border-line bg-paper/85 p-6 shadow-memo sm:p-8">
          <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              My read on The Hog
            </p>
            <a
              href="https://github.com/sami2919"
              className="text-sm font-medium text-muted underline decoration-line underline-offset-4 transition hover:text-ink"
            >
              github.com/sami2919
            </a>
          </div>

          <div className="max-w-[790px]">
            <h1 className="text-4xl font-semibold tracking-tight text-ink sm:text-6xl">
              How I'd Become Customer Zero for The Hog API
            </h1>
            <p className="mt-6 max-w-[700px] text-lg leading-8 text-muted sm:text-xl">
              A 30 day plan for turning The Hog's own GTM motion into the best
              case study for its API.
            </p>
          </div>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href="#plan"
              className="inline-flex items-center justify-center rounded-md bg-ink px-5 py-3 text-sm font-semibold text-white transition hover:bg-accent"
            >
              View the plan
            </a>
            <a
              href="https://github.com/sami2919"
              className="inline-flex items-center justify-center rounded-md border border-line bg-white px-5 py-3 text-sm font-semibold text-ink transition hover:border-ink"
            >
              GitHub
            </a>
          </div>
        </header>

        <div className="space-y-16">
          <section>
            <SectionHeader title="Why this role clicked" />
            <div className="space-y-4 text-lg leading-8 text-muted">
              <p>
                Hudson's post stood out because it did not sound like a normal
                GTM role.
              </p>
              <p>
                The line that mattered was "Customer Zero for The Hog API." That
                is the right framing. If The Hog helps teams find signals,
                enrich context, monitor markets, and decide what to do next,
                then The Hog's own GTM motion should prove that better than any
                pitch deck.
              </p>
              <p>
                That is the kind of GTM engineering problem I like: build the
                system, use the system, turn the system into the case study.
              </p>
            </div>
          </section>

          <section>
            <SectionHeader title="My read on The Hog" />
            <p className="mb-6 text-lg leading-8 text-ink">
              The Hog is not just another outbound tool. It is the context layer
              for agents and lean GTM teams.
            </p>
            <p className="mb-6 text-lg leading-8 text-ink">
              The real buyer is not buying more data. They are buying fewer
              brittle workflows.
            </p>
            <div className="mb-6 rounded-lg border border-line bg-white p-5 shadow-memo">
              <p className="mb-4 text-base font-semibold leading-7 text-ink">
                The old stack is stitched together:
              </p>
              <div className="grid gap-2 sm:grid-cols-2">
                {oldStack.map((item) => (
                  <div
                    key={item}
                    className="rounded-md border border-line bg-paper px-3 py-2 text-sm font-medium text-muted"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <p className="mb-6 text-base leading-7 text-muted">
              The Hog's wedge is one API that gives agents fresh, structured
              context across people, companies, social, news, sentiment, and the
              open web.
            </p>
            <p className="rounded-lg border border-line bg-white p-5 text-lg font-medium leading-8 text-ink shadow-memo">
              The best way to sell that is to make The Hog's own growth engine
              the proof.
            </p>
          </section>

          <section id="plan" className="scroll-mt-8">
            <SectionHeader label="First 30 days" title="The plan" />
            <div className="grid gap-4">
              {weeks.map((week) => (
                <article
                  key={week.week}
                  className="rounded-lg border border-line bg-white p-5 shadow-memo sm:p-6"
                >
                  <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                        {week.week}
                      </p>
                      <h3 className="mt-2 text-xl font-semibold tracking-tight text-ink">
                        {week.title}
                      </h3>
                    </div>
                    <p className="max-w-[310px] text-sm leading-6 text-muted">
                      <span className="font-semibold text-ink">Goal:</span>{" "}
                      {week.goal}
                    </p>
                  </div>

                  <div className="grid gap-6 sm:grid-cols-[1fr_260px]">
                    <div>
                      <p className="mb-3 text-sm font-semibold text-ink">
                        Actions
                      </p>
                      <CheckList items={week.actions} />
                    </div>
                    <div className="rounded-md border border-line bg-soft p-4">
                      <p className="text-sm leading-6 text-muted">
                        <span className="font-semibold text-ink">Output:</span>{" "}
                        {week.output}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section>
            <SectionHeader title="The system I'd try to build" />
            <div className="rounded-lg border border-line bg-white p-5 shadow-memo sm:p-6">
              <ol className="grid gap-3 sm:grid-cols-3">
                {loopSteps.map((step) => (
                  <li
                    key={step.title}
                    className="min-h-[150px] rounded-md border border-line bg-paper p-4"
                  >
                    <p className="text-sm font-medium leading-6 text-ink">
                      {step.title}
                    </p>
                    <p className="mt-2 text-xs leading-5 text-muted">
                      {step.body}
                    </p>
                  </li>
                ))}
              </ol>
              <p className="mt-6 border-t border-line pt-5 text-lg leading-8 text-ink">
                A great GTM engine should not just find leads. It should show
                the market moving and tell the team what to do next.
              </p>
            </div>
          </section>

          <section>
            <SectionHeader title="How I'd measure it" />
            <div className="grid gap-4 sm:grid-cols-3">
              {metrics.map((group) => (
                <article
                  key={group.title}
                  className="rounded-lg border border-line bg-white p-5 shadow-memo"
                >
                  <h3 className="mb-4 text-base font-semibold text-ink">
                    {group.title}
                  </h3>
                  <CheckList items={group.items} />
                </article>
              ))}
            </div>
          </section>

          <section>
            <SectionHeader title="Why I can help" />
            <div className="space-y-4 text-lg leading-8 text-muted">
              <p>I have been building pieces of this already.</p>
              <p>
                With SignalForce, I built around buying signals, account
                scoring, and outbound workflows. At Circuit AI, I worked across
                product, demos, customer discovery, GTM workflows, and AI
                systems. At AWS, I worked on applied AI and RAG systems that
                connected technical architecture to business outcomes.
              </p>
              <p>
                SignalForce is my proof of work for the same wedge: fragmented
                signal detection, account context, and GTM execution turned into
                workflows reps can actually use.
              </p>
              <p>
                The Hog's Founding GTM Engineer role feels like the same problem
                taken to the infrastructure layer: real-time signals,
                agent-ready context, and GTM systems that become more useful the
                more they run.
              </p>
            </div>
          </section>

          <section className="rounded-lg border border-line bg-ink p-6 text-white shadow-memo sm:p-8">
            <p className="text-2xl font-semibold tracking-tight">
              If this is even directionally right, I'd love to talk.
            </p>
            <CopyLinkButton />
          </section>
        </div>

        <footer className="py-10 text-center text-sm text-muted">
          Sami Rahman · GTM engineering, AI systems, and signal infrastructure
        </footer>
      </div>
    </main>
  );
}
