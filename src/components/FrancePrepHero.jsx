import { Link } from "react-router-dom";
import { PlaneTakeoff, Landmark, Sparkles, ArrowRight } from "lucide-react";
import { createPageUrl } from "@/utils";

export default function FrancePrepHero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 text-white">
      {/* Background accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 opacity-40 [background:radial-gradient(1000px_circle_at_50%_-200px,rgba(56,189,248,0.35),transparent_60%),radial-gradient(900px_circle_at_0%_100%,rgba(168,85,247,0.25),transparent_55%),radial-gradient(700px_circle_at_100%_60%,rgba(236,72,153,0.18),transparent_55%)]" />
        <div className="absolute inset-0 opacity-25 [background:linear-gradient(to_right,rgba(148,163,184,0.18)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.18)_1px,transparent_1px)] [background-size:48px_48px]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:py-20">
        {/* Title */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 shadow-[0_0_0_1px_rgba(255,255,255,0.02)]">
            <Sparkles className="h-4 w-4 text-cyan-300" />
            <span>Accompagnement premium, simple et clair</span>
          </div>

          <h1 className="mt-6 text-balance text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            Réussir en France,{" "}
            <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-fuchsia-300 bg-clip-text text-transparent">
              étape par étape
            </span>
            .
          </h1>

          <p className="mt-4 text-pretty text-base leading-relaxed text-slate-300 sm:text-lg">
            Choisis ton parcours et accède à des ressources concrètes (Visa, logement, CAF, titre
            de séjour, emploi) avec un support qui ne te lâche pas.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-2">
          <Link
            to={`${createPageUrl("Pricing")}?segment=arrival`}
            className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-white/8 hover:shadow-[0_20px_60px_-20px_rgba(34,211,238,0.25)] focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/60"
          >
            <div className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 [background:radial-gradient(600px_circle_at_30%_20%,rgba(34,211,238,0.18),transparent_55%)]" />
            <div className="relative">
              <div className="flex items-start justify-between gap-4">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400/20 to-blue-400/10 ring-1 ring-white/10">
                  <PlaneTakeoff className="h-6 w-6 text-cyan-200" />
                </div>
                <div className="inline-flex items-center gap-2 text-sm font-semibold text-slate-200">
                  <span>Explorer</span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>

              <h2 className="mt-4 text-xl font-bold tracking-tight">
                Préparer mon arrivée
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">
                Focus{" "}
                <span className="font-semibold text-white">Visa</span> &{" "}
                <span className="font-semibold text-white">Logement</span> : checklists, étapes, pièges à éviter.
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200">
                  Visa
                </span>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200">
                  Logement
                </span>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200">
                  Dossier complet
                </span>
              </div>
            </div>
          </Link>

          <Link
            to={`${createPageUrl("Pricing")}?segment=life-work`}
            className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-fuchsia-300/35 hover:bg-white/8 hover:shadow-[0_20px_60px_-20px_rgba(236,72,153,0.22)] focus:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-300/60"
          >
            <div className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 [background:radial-gradient(600px_circle_at_30%_20%,rgba(236,72,153,0.16),transparent_55%)]" />
            <div className="relative">
              <div className="flex items-start justify-between gap-4">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-fuchsia-400/20 to-purple-400/10 ring-1 ring-white/10">
                  <Landmark className="h-6 w-6 text-fuchsia-200" />
                </div>
                <div className="inline-flex items-center gap-2 text-sm font-semibold text-slate-200">
                  <span>Explorer</span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>

              <h2 className="mt-4 text-xl font-bold tracking-tight">
                Vivre et travailler en France
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">
                Focus{" "}
                <span className="font-semibold text-white">CAF</span>,{" "}
                <span className="font-semibold text-white">Titre de séjour</span> &{" "}
                <span className="font-semibold text-white">Jobs</span> : démarches, modèles, stratégie.
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200">
                  CAF
                </span>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200">
                  Titre de séjour
                </span>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200">
                  Emploi
                </span>
              </div>
            </div>
          </Link>
        </div>

        {/* Reassurance */}
        <div className="mt-8 flex justify-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200">
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400/20 to-fuchsia-400/15 ring-1 ring-white/10">
              <Sparkles className="h-4 w-4 text-cyan-200" />
            </span>
            <span>
              IA Assistant <span className="font-semibold text-white">24/7</span> : réponses immédiates, guidance pas à pas.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

