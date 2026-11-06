"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState, type FormEvent } from "react";
import { contact } from "@/content";
import { TOPIC_EVENT } from "./Career";
import { Reveal } from "./Reveal";
import { SectionHead } from "./SectionHead";

type Errors = Partial<Record<"name" | "email" | "message" | "consent", string>>;

const field =
  "mt-2 block w-full rounded-md border border-line bg-white/70 px-3.5 py-3 text-[15px] text-graphite outline-none transition-colors duration-300 placeholder:text-steel/60 focus:border-graphite/50 aria-[invalid=true]:border-solder-ink";

export function Contact() {
  const [topic, setTopic] = useState(contact.topics[0]);
  const [errors, setErrors] = useState<Errors>({});
  const [state, setState] = useState<"idle" | "sending" | "done">("idle");
  const [name, setName] = useState("");

  useEffect(() => {
    const on = (e: Event) => setTopic((e as CustomEvent<string>).detail);
    window.addEventListener(TOPIC_EVENT, on);
    return () => window.removeEventListener(TOPIC_EVENT, on);
  }, []);

  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const n = String(f.get("name") ?? "").trim();
    const mail = String(f.get("email") ?? "").trim();
    const msg = String(f.get("message") ?? "").trim();
    const next: Errors = {};
    if (!n) next.name = "Bitte geben Sie Ihren Namen an. Zoltan will wissen, wen er ignoriert.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail)) next.email = "Diese E-Mail-Adresse sieht kalt gelötet aus.";
    if (msg.length < 5) next.message = "Etwas mehr Kontext, bitte. Mindestens fünf Zeichen.";
    if (!f.get("consent")) next.consent = "Bitte bestätigen. Rechtlich wichtig (glauben wir).";
    setErrors(next);
    if (Object.keys(next).length) return;
    setName(n.split(" ")[0]);
    setState("sending");
    setTimeout(() => setState("done"), 1100);
  }

  return (
    <section id="kontakt" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-7 md:px-8">
        <SectionHead index="06" eyebrow={contact.eyebrow} title={contact.title} lead={contact.lead} />

        <div className="mt-14 grid gap-12 md:mt-20 md:grid-cols-12 md:gap-10">
          <Reveal className="md:col-span-4">
            <dl className="space-y-8">
              {contact.details.map((d) => (
                <div key={d.k}>
                  <dt className="font-mono text-[11px] uppercase tracking-[0.14em] text-steel">{d.k}</dt>
                  <dd className="mt-2 space-y-0.5 text-[15px] text-graphite">
                    {d.v.map((line, i) => (
                      <p key={line} className={i && d.k === "Telefon" ? "text-xs text-steel" : ""}>
                        {line}
                      </p>
                    ))}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={0.08} className="md:col-span-8">
            <div className="relative rounded-lg border border-line bg-paper-2/50 p-6 md:p-9">
              <AnimatePresence mode="wait" initial={false}>
                {state !== "done" ? (
                  <motion.form
                    key="form"
                    noValidate
                    onSubmit={submit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.35 }}
                    className="grid gap-5 sm:grid-cols-2"
                  >
                    <label className="text-sm font-medium text-graphite">
                      Name
                      <input name="name" autoComplete="name" className={field} aria-invalid={!!errors.name} placeholder="Vor- und Nachname" />
                      <Err msg={errors.name} />
                    </label>
                    <label className="text-sm font-medium text-graphite">
                      E-Mail
                      <input name="email" type="email" autoComplete="email" className={field} aria-invalid={!!errors.email} placeholder="name@beispiel.ch" />
                      <Err msg={errors.email} />
                    </label>
                    <label className="text-sm font-medium text-graphite sm:col-span-2">
                      Anliegen
                      <select name="topic" value={topic} onChange={(e) => setTopic(e.target.value)} className={`${field} appearance-none bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2212%22 height=%2212%22 viewBox=%220 0 12 12%22><path d=%22M2 4l4 4 4-4%22 fill=%22none%22 stroke=%22%236b6e73%22 stroke-width=%221.5%22/></svg>')] bg-[length:12px] bg-[right_14px_center] bg-no-repeat pr-10`}>
                        {contact.topics.map((t) => (
                          <option key={t}>{t}</option>
                        ))}
                      </select>
                    </label>
                    <label className="text-sm font-medium text-graphite sm:col-span-2">
                      Nachricht
                      <textarea name="message" rows={5} className={`${field} resize-y`} aria-invalid={!!errors.message} placeholder="Was dürfen wir für Sie löten?" />
                      <Err msg={errors.message} />
                    </label>
                    <div className="sm:col-span-2">
                      <label className="flex cursor-pointer items-start gap-3 text-sm text-steel">
                        <input name="consent" type="checkbox" className="mt-0.5 size-4 shrink-0 accent-[#f08a24]" />
                        {contact.consent}
                      </label>
                      <Err msg={errors.consent} />
                    </div>
                    <div className="flex items-center justify-between gap-4 sm:col-span-2">
                      <p className="font-mono text-[11px] text-steel">Antwortzeit: 1 bis 365 Werktage</p>
                      <button
                        type="submit"
                        disabled={state === "sending"}
                        className="inline-flex h-11 min-w-36 items-center justify-center gap-2 rounded-md bg-graphite px-5 text-sm font-medium text-paper transition-colors duration-300 hover:bg-ink disabled:opacity-80"
                      >
                        {state === "sending" ? (
                          <>
                            <span className="size-1.5 animate-pulse rounded-full bg-solder" /> Wird gelötet …
                          </>
                        ) : (
                          "Anfrage senden"
                        )}
                      </button>
                    </div>
                  </motion.form>
                ) : (
                  <motion.div
                    key="done"
                    role="status"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                    className="flex min-h-80 flex-col items-start justify-center"
                  >
                    <span className="grid size-10 place-items-center rounded-md bg-graphite text-solder">✓</span>
                    <h3 className="font-display mt-6 text-3xl font-semibold tracking-tight text-graphite">
                      {name ? `Danke, ${name}.` : "Danke."} Zoltan meldet sich.
                    </h3>
                    <p className="mt-3 max-w-md text-pretty text-[15px] leading-relaxed text-steel">{contact.success.text}</p>
                    <button
                      type="button"
                      onClick={() => {
                        setState("idle");
                        setErrors({});
                      }}
                      className="mt-8 text-sm font-medium text-graphite underline decoration-solder decoration-2 underline-offset-4"
                    >
                      Noch eine Anfrage senden
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Err({ msg }: { msg?: string }) {
  return (
    <AnimatePresence initial={false}>
      {msg && (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="mt-1.5 block text-xs font-normal text-solder-ink"
        >
          {msg}
        </motion.span>
      )}
    </AnimatePresence>
  );
}
