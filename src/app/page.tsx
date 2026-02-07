"use client";

import Image from "next/image";
import { useState } from "react";
import { locales, type LocaleKey } from "@/locales";

export default function Home() {
  const [activeLocale, setActiveLocale] = useState<LocaleKey>("EN");
  const content = locales[activeLocale];

  return (
    <main className="min-h-screen bg-slate-950 text-slate-200">
      <div className="mx-auto max-w-6xl px-6 pb-24 pt-8 lg:px-10">
        <header className="flex items-center justify-between">
          <div className="text-sm font-semibold tracking-wide text-slate-100">
            {content.name}
          </div>
          <nav className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
            <a className="transition hover:text-white" href="#work">
              {content.nav.work}
            </a>
            <a className="transition hover:text-white" href="#about">
              {content.nav.about}
            </a>
            <a className="transition hover:text-white" href="#contact">
              {content.nav.contact}
            </a>
          </nav>
          <div className="flex items-center gap-3">
            <div className="hidden rounded-full border border-slate-800 p-1 text-xs text-slate-300 md:flex">
              {(Object.keys(locales) as LocaleKey[]).map((locale) => (
                <button
                  key={locale}
                  onClick={() => setActiveLocale(locale)}
                  className={`rounded-full px-3 py-1 transition ${
                    activeLocale === locale
                      ? "bg-sky-500 text-slate-950"
                      : "text-slate-300 hover:text-white"
                  }`}
                >
                  {locale}
                </button>
              ))}
            </div>
            <button className="rounded-full bg-sky-500 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-sky-400">
              {content.actions.talk}
            </button>
          </div>
        </header>

        <section className="mt-16 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              {content.hero.title}
              <br />
              {content.hero.subtitle}
            </h1>
            <p className="mt-6 max-w-xl text-base text-slate-300">
              {content.hero.description}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <button className="rounded-full bg-sky-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-400">
                {content.actions.viewWork}
              </button>
              <button className="rounded-full border border-slate-700 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:border-slate-500 hover:text-white">
                {content.actions.contactMe}
              </button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative h-80 w-80 overflow-hidden rounded-full">
              <Image
                src="/portrait.png"
                alt={content.hero.profileAlt}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </section>

        <section id="work" className="mt-20">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold text-white">
              {content.work.title}
            </h2>
            <button className="text-sm font-semibold text-sky-400 transition hover:text-sky-300">
              {content.actions.viewAll}
            </button>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {content.work.items.map((item, index) => (
              <article
                key={item.title}
                className="group rounded-3xl border border-slate-800 bg-slate-900/60 p-6 transition hover:border-slate-700 hover:bg-slate-900"
              >
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span className="rounded-full border border-slate-700 px-3 py-1">
                    {item.badge}
                  </span>
                  <span>0{index + 1}</span>
                </div>
                <div className="mt-6 h-36 rounded-2xl bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950 shadow-inner" />
                <h3 className="mt-6 text-xl font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm text-slate-300">
                  {item.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2 text-xs text-slate-300">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-slate-700 px-3 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          id="about"
          className="mt-20 grid gap-8 rounded-3xl border border-slate-800 bg-slate-900/60 p-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center"
        >
          <div>
            <h2 className="text-2xl font-semibold text-white">
              {content.about.title}
              <span className="text-sky-400">{content.about.highlight}</span>
            </h2>
            <p className="mt-4 text-sm text-slate-300">
              {content.about.description}
            </p>
            <div className="mt-6 flex flex-wrap gap-2 text-xs text-slate-300">
              {content.about.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-slate-700 px-3 py-1"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950 p-6">
            <div className="flex h-48 items-end justify-center rounded-xl bg-gradient-to-br from-emerald-500/20 via-slate-900 to-slate-950 text-sm text-slate-400">
              {content.about.snapshot}
            </div>
            <div className="mt-4 flex items-center justify-between text-xs text-slate-400">
              <span>{content.about.statLeft}</span>
              <span>{content.about.statRight}</span>
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="mt-20 rounded-3xl border border-slate-800 bg-slate-900/70 px-8 py-12 text-center"
        >
          <h2 className="text-2xl font-semibold text-white">
            {content.contact.title}
          </h2>
          <p className="mt-3 text-sm text-slate-300">
            {content.contact.description}
          </p>
          <button className="mt-6 rounded-full bg-sky-500 px-8 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-400">
            {content.actions.getInTouch}
          </button>
        </section>

        <footer className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-slate-800 pt-8 text-xs text-slate-400">
          <span>{content.footer.rights}</span>
          <div className="flex gap-6">
            {content.footer.links.map((label) => (
              <a key={label} className="transition hover:text-white" href="#">
                {label}
              </a>
            ))}
          </div>
        </footer>
      </div>
    </main>
  );
}
