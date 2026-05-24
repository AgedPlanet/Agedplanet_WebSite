import Hero from "@/components/ui/demo";
import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import {
  ArrowUpRight,
  BadgeCheck,
  Boxes,
  Factory,
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
    title: "Market positioning",
    description:
      "Turn product value into clear messaging, channel strategy, and campaigns — from search and social to marketplace promotion — built for buyers, distributors, and online customers.",
    icon: SearchCheck,
  },
  {
    title: "Sourcing and trade coordination",
    description:
      "Support supplier conversations, product requirements, quotes, samples, packaging, and shipping handoffs with tighter commercial control.",
    icon: Factory,
  },
  {
    title: "Commerce launch support",
    description:
      "Prepare listings, sales materials, fulfillment flows, and customer touchpoints for storefronts, marketplaces, and wholesale — backed by hands-on operational experience across major commerce platforms and fulfillment networks.",
    icon: Store,
  },
];

const process = [
  "Define the market and buyer profile",
  "Shape the offer, pricing, and message",
  "Coordinate suppliers, samples, and trade terms",
  "Launch campaigns, channels, and sales follow-up",
];

const operatingNotes = [
  "Brand positioning and go-to-market planning",
  "Supplier and trading coordination",
  "Ecommerce operations and marketplace management",
  "Google Ads search, measurement, and social campaigns",
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
    <header className="relative z-50 border-b border-[#2D1F14]/10 bg-[#C8B89A]/95 text-[#2D1F14] backdrop-blur-2xl">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 text-base text-[#2D1F14]">
        <a className="flex items-center gap-3 font-semibold tracking-[-0.02em]" href="#top">
          <Image
            alt="AgedPlanet"
            className="-my-3 size-28"
            height={112}
            src="/agedplanet-logo.png"
            width={112}
          />
          AgedPlanet
        </a>
        <div className="hidden items-center gap-8 text-[#2D1F14]/75 sm:flex">
          <a className="transition hover:text-[#2D1F14]" href="#focus">Services</a>
          <a className="transition hover:text-[#2D1F14]" href="#process">Process</a>
          <a className="transition hover:text-[#2D1F14]" href="#status">Capabilities</a>
          <a className="transition hover:text-[#2D1F14]" href="#contact">Contact</a>
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
          <SectionEyebrow>Marketing & trading agency</SectionEyebrow>
          <h2 className="max-w-xl text-balance text-4xl font-semibold leading-[1.05] tracking-[-0.06em] sm:text-5xl lg:text-6xl">
            Market strategy, sourcing, and commerce execution under one roof.
          </h2>
        </div>
        <div className="space-y-6 text-lg leading-8 text-[#4B2E2B]/75">
          <p>
            AgedPlanet works with brands, suppliers, and operators that need a
            practical route into market: positioning, search and social
            marketing, supplier coordination, and trading support across
            ecommerce and wholesale channels.
          </p>
          <p>
            We bring certified Google Ads expertise across search and
            measurement, social media marketing experience on every major
            platform, and hands-on ecommerce operations knowledge — so the
            path from positioning to purchase stays practical and measurable.
          </p>
          <div className="flex flex-col gap-3 pt-2 sm:flex-row">
            <PillLink href="#contact">Start a conversation</PillLink>
            <OutlineLink href="#focus">View services</OutlineLink>
          </div>
        </div>
      </section>

      <section id="focus" className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-5">
          <div className="mb-12 max-w-3xl">
            <SectionEyebrow>Services</SectionEyebrow>
            <h2 className="text-balance text-4xl font-semibold leading-[1.05] tracking-[-0.06em] sm:text-5xl">
              Commercial support for products that need a stronger path to market.
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
              How we work
            </p>
            <h2 className="max-w-xl text-balance text-4xl font-semibold leading-[1.05] tracking-[-0.06em] sm:text-5xl">
              A commercial partner from positioning to purchase orders.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[#FFF8F0]/70">
              AgedPlanet combines marketing judgment with trading discipline:
              clear offer, credible supply, organized launch, and follow-through
              after the first conversation.
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
              alt="Marketing and trading strategy workspace"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?auto=format&fit=crop&q=85&w=1600"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="p-7">
            <SectionEyebrow>Agency focus</SectionEyebrow>
            <h2 className="mb-4 text-3xl font-semibold tracking-[-0.05em]">
              Built for companies that need traction, not theatre.
            </h2>
            <p className="leading-7 text-[#4B2E2B]/70">
              We work where marketing and operations meet: finding the right
              market angle, preparing product information, coordinating
              suppliers, and supporting the channels that actually sell.
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
              [Boxes, "Market strategy"],
              [PackageCheck, "Trade support"],
              [Truck, "Launch readiness"],
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
            Work with AgedPlanet
          </p>
          <h2 className="mx-auto max-w-3xl text-balance text-4xl font-semibold leading-[1.05] tracking-[-0.06em] sm:text-6xl">
            Bring a product, supplier, or market opportunity. We will help turn
            it into a commercial plan.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#4B2E2B]/70">
            Use AgedPlanet for marketing strategy, search and social
            advertising, ecommerce operations, trade coordination, or
            partnership development across North American and international
            channels.
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
        <p>Marketing, sourcing, and trading operations.</p>
      </footer>
    </main>
  );
}
