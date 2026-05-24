import Hero from "@/components/ui/demo";
import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import {
  ArrowUpRight,
  BadgeCheck,
  Boxes,
  Factory,
  Globe2,
  PackageCheck,
  SearchCheck,
  Store,
  Truck,
} from "lucide-react";
import Image from "next/image";

const focusAreas: Array<{
  title: string;
  description: string;
  icon: LucideIcon;
}> = [
  {
    title: "Demand before inventory",
    description:
      "AgedPlanet is being rebuilt around product validation first: search demand, margin math, competition checks, and return-risk review before buying stock.",
    icon: SearchCheck,
  },
  {
    title: "Supplier quality over cheap quotes",
    description:
      "The next phase prioritizes samples, clearer specs, manufacturer communication, and smaller controlled batches instead of rushing into weak production runs.",
    icon: Factory,
  },
  {
    title: "Marketplace-ready execution",
    description:
      "Listings, packaging, fulfillment, customer experience, and Amazon FBA readiness are treated as the product, not afterthoughts.",
    icon: Store,
  },
];

const process = [
  "Research practical product problems",
  "Validate demand and unit economics",
  "Test suppliers with samples and specs",
  "Launch small, measure honestly, improve",
];

const operatingNotes = [
  "No fake catalog padding",
  "No manufacturer guesswork",
  "No chasing saturated products because a guru said so",
  "No big claims until the business earns them",
];

function PillLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      className="inline-flex h-11 items-center justify-center rounded-full bg-[#8C5A3C] px-5 text-sm font-medium text-[#FFF8F0] shadow-[rgba(75,46,43,0.18)_0_10px_24px] transition hover:bg-[#4B2E2B] focus:outline-none focus:ring-2 focus:ring-[#C08552] focus:ring-offset-2 focus:ring-offset-[#FFF8F0]"
      href={href}
    >
      {children}
    </a>
  );
}

function OutlineLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      className="inline-flex h-11 items-center justify-center rounded-full border border-[#8C5A3C]/25 bg-white/70 px-5 text-sm font-medium text-[#4B2E2B] backdrop-blur transition hover:border-[#8C5A3C]/55 hover:bg-[#FFF8F0] focus:outline-none focus:ring-2 focus:ring-[#C08552] focus:ring-offset-2 focus:ring-offset-[#FFF8F0]"
      href={href}
    >
      {children}
    </a>
  );
}

function SectionEyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="mb-4 text-xs font-semibold uppercase tracking-[0.32em] text-[#8C5A3C]">
      {children}
    </p>
  );
}

function SiteHeader() {
  return (
    <header className="relative z-50 border-b border-[#FFF8F0]/10 bg-[#4B2E2B]/90 text-[#FFF8F0] backdrop-blur-2xl">
      <nav className="mx-auto flex h-12 max-w-6xl items-center justify-between px-5 text-xs">
        <a className="flex items-center gap-2 font-semibold tracking-[-0.02em]" href="#top">
          <Globe2 className="size-4" />
          AgedPlanet
        </a>
        <div className="hidden items-center gap-7 text-[#FFF8F0]/75 sm:flex">
          <a className="transition hover:text-[#FFF8F0]" href="#focus">
            Focus
          </a>
          <a className="transition hover:text-[#FFF8F0]" href="#process">
            Process
          </a>
          <a className="transition hover:text-[#FFF8F0]" href="#status">
            Status
          </a>
          <a className="transition hover:text-[#FFF8F0]" href="#contact">
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
}

export default function Home() {
  return (
    <main id="top" className="min-h-screen bg-[#FFF8F0] text-[#4B2E2B]">
      <SiteHeader />
      <Hero />

      <section className="mx-auto grid max-w-6xl gap-8 px-5 py-20 lg:grid-cols-[0.85fr_1.15fr] lg:py-28">
        <div>
          <SectionEyebrow>A clean restart</SectionEyebrow>
          <h2 className="max-w-xl text-balance text-4xl font-semibold leading-[1.05] tracking-[-0.06em] sm:text-5xl lg:text-6xl">
            Ecommerce, rebuilt without pretending the first run was perfect.
          </h2>
        </div>
        <div className="space-y-6 text-lg leading-8 text-[#4B2E2B]/75">
          <p>
            AgedPlanet is an ecommerce company focused on Amazon FBA and
            practical consumer products. The early chapter exposed the usual
            traps: saturated product choices, weak manufacturers, and expensive
            lessons. Annoying? Yes. Useful? Also yes.
          </p>
          <p>
            This site keeps the brand simple while the business earns its next
            moves: a clear positioning page, honest operating principles, and a
            contact path for suppliers, partners, and future customers.
          </p>
          <div className="flex flex-col gap-3 pt-2 sm:flex-row">
            <PillLink href="#contact">Start a conversation</PillLink>
            <OutlineLink href="#focus">See the focus</OutlineLink>
          </div>
        </div>
      </section>

      <section id="focus" className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-5">
          <div className="mb-12 max-w-3xl">
            <SectionEyebrow>What AgedPlanet is building</SectionEyebrow>
            <h2 className="text-balance text-4xl font-semibold leading-[1.05] tracking-[-0.06em] sm:text-5xl">
              Simple products, stricter validation, better supplier discipline.
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {focusAreas.map((area) => {
              const Icon = area.icon;
              return (
                <article
                  className="rounded-[1.5rem] border border-[#8C5A3C]/12 bg-[#FFF8F0] p-7 shadow-[rgba(75,46,43,0.10)_0_18px_45px]"
                  key={area.title}
                >
                  <div className="mb-10 flex size-11 items-center justify-center rounded-full bg-[#4B2E2B] text-[#FFF8F0]">
                    <Icon className="size-5" />
                  </div>
                  <h3 className="mb-3 text-2xl font-semibold tracking-[-0.04em]">
                    {area.title}
                  </h3>
                  <p className="leading-7 text-[#4B2E2B]/70">{area.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="process" className="bg-[#4B2E2B] py-20 text-[#FFF8F0] lg:py-28">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.32em] text-[#FFF8F0]/78">
              Operating system
            </p>
            <h2 className="max-w-xl text-balance text-4xl font-semibold leading-[1.05] tracking-[-0.06em] sm:text-5xl">
              Boring fundamentals. Which, cruelly, are usually what works.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[#FFF8F0]/70">
              The next AgedPlanet launch should be measured by disciplined
              execution, not motivational spreadsheet fiction.
            </p>
          </div>

          <div className="rounded-[2rem] bg-[#FFF8F0]/10 p-4 ring-1 ring-[#C08552]/30 backdrop-blur">
            <ol className="divide-y divide-[#FFF8F0]/12">
              {process.map((step, index) => (
                <li className="flex items-center gap-5 py-5" key={step}>
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[#FFF8F0] text-sm font-semibold text-[#4B2E2B]">
                    {index + 1}
                  </span>
                  <span className="text-xl font-medium tracking-[-0.03em]">
                    {step}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section id="status" className="mx-auto grid max-w-6xl gap-6 px-5 py-20 lg:grid-cols-2 lg:py-28">
        <div className="overflow-hidden rounded-[2rem] border border-[#8C5A3C]/12 bg-white shadow-[rgba(75,46,43,0.10)_0_18px_45px]">
          <div className="relative h-80">
            <Image
              alt="Product planning desk for ecommerce operations"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?auto=format&fit=crop&q=85&w=1600"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="p-7">
            <SectionEyebrow>Current status</SectionEyebrow>
            <h2 className="mb-4 text-3xl font-semibold tracking-[-0.05em]">
              Early-stage, intentionally lean.
            </h2>
            <p className="leading-7 text-[#4B2E2B]/70">
              No inflated catalog, no fake testimonials, and no pretending the
              brand has a hundred things figured out. The website is ready now;
              the product line can grow only when the validation is real.
            </p>
          </div>
        </div>

        <div className="grid gap-4">
          {operatingNotes.map((note) => (
            <div
              className="flex items-start gap-4 rounded-[1.5rem] border border-[#8C5A3C]/12 bg-white p-6 shadow-[rgba(75,46,43,0.08)_0_12px_30px]"
              key={note}
            >
              <BadgeCheck className="mt-1 size-5 shrink-0 text-[#8C5A3C]" />
              <p className="text-xl font-medium leading-7 tracking-[-0.03em]">
                {note}
              </p>
            </div>
          ))}
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              [Boxes, "Product research"],
              [PackageCheck, "Sample checks"],
              [Truck, "FBA readiness"],
            ].map(([Icon, label]) => {
              const TileIcon = Icon as LucideIcon;
              return (
                <div
                  className="rounded-[1.25rem] bg-[#4B2E2B] p-5 text-[#FFF8F0]"
                  key={label as string}
                >
                  <TileIcon className="mb-8 size-5 text-[#C08552]" />
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#FFF8F0]/72">
                    {label as string}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="contact" className="px-5 pb-6">
        <div className="mx-auto max-w-6xl rounded-[2.5rem] border border-[#8C5A3C]/12 bg-white p-8 text-center shadow-[rgba(75,46,43,0.10)_0_18px_45px] sm:p-14 lg:p-20">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.32em] text-[#8C5A3C]">
            Suppliers, partners, future customers
          </p>
          <h2 className="mx-auto max-w-3xl text-balance text-4xl font-semibold leading-[1.05] tracking-[-0.06em] sm:text-6xl">
            If it is practical, durable, and not another copycat gimmick, talk to
            AgedPlanet.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#4B2E2B]/70">
            The brand is still lean. That is the point. Strong product ideas,
            supplier introductions, and ecommerce partnerships can start with a
            focused conversation.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <PillLink href="mailto:ahmedgawish@agedplanet.com">
              Email AgedPlanet
            </PillLink>
            <a
              className="inline-flex h-11 items-center gap-2 text-sm font-medium text-[#8C5A3C] transition hover:text-[#4B2E2B]"
              href="mailto:ahmedgawish@agedplanet.com?subject=AgedPlanet%20partnership"
            >
              ahmedgawish@agedplanet.com
              <ArrowUpRight className="size-4" />
            </a>
          </div>
        </div>
      </section>

      <footer className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-10 text-sm text-[#4B2E2B]/60 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 AgedPlanet Ecommerce Inc.</p>
        <p>Built with Next.js, Tailwind CSS, TypeScript, and shadcn structure.</p>
      </footer>
    </main>
  );
}
