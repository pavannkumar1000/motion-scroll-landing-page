import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function App() {
  const rootRef = useRef(null)
  const pinnedRef = useRef(null)
  const headlineRef = useRef(null)
  const descriptionRef = useRef(null)
  const objectRef = useRef(null)
  const glowRef = useRef(null)
  const ringOuterRef = useRef(null)
  const ringMidRef = useRef(null)
  const ringInnerRef = useRef(null)
  const coreRef = useRef(null)
  const scrollHintRef = useRef(null)
  const metricsRef = useRef(null)
  const bgGlowRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // ==================================================
      // INTRO — page-load entrance
      // ==================================================
      const intro = gsap.timeline({ defaults: { ease: "power3.out" } })

      intro
        .from(headlineRef.current.querySelectorAll(".letter"), {
          opacity: 0,
          y: 40,
          stagger: 0.05,
          duration: 0.9,
        })
        .from(
          objectRef.current,
          { opacity: 0, scale: 0.75, duration: 1.1, ease: "power2.out" },
          "-=0.5"
        )
        .from(
          descriptionRef.current,
          { opacity: 0, y: 20, duration: 0.8 },
          "-=0.7"
        )
        .from(
          scrollHintRef.current,
          { opacity: 0, y: 10, duration: 0.6 },
          "-=0.4"
        )

      // ==================================================
      // PINNED SCROLL — object stays at exact center
      // ==================================================
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: pinnedRef.current,
          start: "top top",
          end: "+=250%",
          scrub: 1,
          pin: true,
          pinSpacing: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
        defaults: { ease: "none" },
      })

      // Rings rotate & scale — object POSITION unchanged
      scrollTl.to(
        ringOuterRef.current,
        { rotate: 220, scale: 1.18, duration: 1 },
        0
      )
      scrollTl.to(
        ringMidRef.current,
        { rotate: -160, scale: 1.1, duration: 1 },
        0
      )
      scrollTl.to(
        ringInnerRef.current,
        { rotate: 300, scale: 1.05, duration: 1 },
        0
      )

      // Core breathes (two-stage pulse, position unchanged)
      scrollTl.to(coreRef.current, { scale: 1.18, duration: 0.5 }, 0)
      scrollTl.to(coreRef.current, { scale: 1.0, duration: 0.5 }, 0.5)

      // Glow expands
      scrollTl.to(
        glowRef.current,
        { scale: 1.5, opacity: 0.7, duration: 1 },
        0
      )

      // Background accent glow drifts (subtle atmosphere)
      scrollTl.to(
        bgGlowRef.current,
        { opacity: 0.9, scale: 1.2, duration: 1 },
        0
      )

      // Headline letterSpacing opens up — stays above object
      scrollTl.to(
        headlineRef.current,
        { letterSpacing: "0.4em", duration: 1 },
        0
      )

      // Description subtle drift
      scrollTl.to(
        descriptionRef.current,
        { opacity: 0.5, y: -6, duration: 1 },
        0
      )

      // Scroll hint fades out
      scrollTl.to(scrollHintRef.current, { opacity: 0, duration: 0.3 }, 0)

      // ==================================================
      // METRICS — reveal as checkpoints (outside object)
      // ==================================================
      const metrics = metricsRef.current.querySelectorAll(".metric-card")
      const positions = ["top-left", "top-right", "bottom-left", "bottom-right"]

      metrics.forEach((card, i) => {
        const checkpoint = 0.25 + i * 0.18
        gsap.set(card, {
          opacity: 0,
          scale: 0.85,
          x: positions[i].includes("left") ? -30 : 30,
          y: positions[i].includes("top") ? -20 : 20,
        })

        scrollTl.to(
          card,
          {
            opacity: 1,
            scale: 1,
            x: 0,
            y: 0,
            duration: 0.3,
            ease: "power2.out",
          },
          checkpoint
        )
      })
    }, rootRef)

    return () => ctx.revert()
  }, [])

  const headlineText = "MOTION EXPERIENCE"

  return (
    <main
      ref={rootRef}
      className="relative w-full overflow-x-hidden bg-ink-950 text-white"
    >
      {/* Background radial accent */}
      <div
        ref={bgGlowRef}
        className="pointer-events-none fixed inset-0 bg-radial-fade opacity-70"
      />

      {/* ================================================== */}
      {/* PINNED HERO — object stays fixed at viewport center */}
      {/* ================================================== */}
      <section
        ref={pinnedRef}
        className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden px-4 md:px-8"
      >
        {/* ---------- Metrics layer (positioned away from object) ---------- */}
        <div
          ref={metricsRef}
          className="pointer-events-none absolute inset-0 hidden md:block"
        >
          <div className="metric-card absolute left-[4%] top-[22%] rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 backdrop-blur-sm">
            <span className="font-display text-2xl font-medium text-white md:text-3xl">
              58%
            </span>
            <p className="mt-1 text-[10px] uppercase tracking-widest text-white/50">
              Interaction Increase
            </p>
          </div>

          <div className="metric-card absolute right-[4%] top-[22%] rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 backdrop-blur-sm">
            <span className="font-display text-2xl font-medium text-white md:text-3xl">
              23%
            </span>
            <p className="mt-1 text-[10px] uppercase tracking-widest text-white/50">
              Less Visual Friction
            </p>
          </div>

          <div className="metric-card absolute bottom-[18%] left-[4%] rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 backdrop-blur-sm">
            <span className="font-display text-2xl font-medium text-white md:text-3xl">
              27%
            </span>
            <p className="mt-1 text-[10px] uppercase tracking-widest text-white/50">
              Faster Discovery
            </p>
          </div>

          <div className="metric-card absolute bottom-[18%] right-[4%] rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 backdrop-blur-sm">
            <span className="font-display text-2xl font-medium text-white md:text-3xl">
              40%
            </span>
            <p className="mt-1 text-[10px] uppercase tracking-widest text-white/50">
              Visual Response
            </p>
          </div>
        </div>

        {/* Mobile metrics — stacked below object, hidden on desktop */}
        <div className="pointer-events-none absolute bottom-2 left-0 right-0 grid grid-cols-4 gap-2 px-4 md:hidden">
          <div className="text-center">
            <span className="font-display text-sm font-medium text-white">
              58%
            </span>
            <p className="mt-0.5 text-[8px] uppercase tracking-widest text-white/40">
              Interaction
            </p>
          </div>
          <div className="text-center">
            <span className="font-display text-sm font-medium text-white">
              23%
            </span>
            <p className="mt-0.5 text-[8px] uppercase tracking-widest text-white/40">
              Friction
            </p>
          </div>
          <div className="text-center">
            <span className="font-display text-sm font-medium text-white">
              27%
            </span>
            <p className="mt-0.5 text-[8px] uppercase tracking-widest text-white/40">
              Discovery
            </p>
          </div>
          <div className="text-center">
            <span className="font-display text-sm font-medium text-white">
              40%
            </span>
            <p className="mt-0.5 text-[8px] uppercase tracking-widest text-white/40">
              Response
            </p>
          </div>
        </div>

        {/* ---------- CENTER COLUMN: Headline / Object / Description ---------- */}
        <div className="relative flex w-full flex-col items-center justify-center">
          {/* HEADLINE — stays above object with fixed gap */}
          <h1
            ref={headlineRef}
            className="flex flex-wrap items-center justify-center gap-x-2 text-center font-display text-2xl font-medium uppercase leading-none tracking-[0.35em] sm:text-3xl md:gap-x-3 md:text-4xl lg:text-5xl"
          >
            {headlineText.split("").map((char, i) => (
              <span
                key={i}
                className={
                  char === " "
                    ? "letter inline-block w-2 md:w-3"
                    : "letter inline-block"
                }
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </h1>

          {/* GAP between headline and object */}
          <div className="h-10 sm:h-12 md:h-16 lg:h-20" />

          {/* OBJECT — anchored at dead center of viewport */}
          <div
            ref={objectRef}
            className="relative flex h-52 w-52 items-center justify-center sm:h-60 sm:w-60 md:h-72 md:w-72 lg:h-80 lg:w-80"
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* Outer glow */}
            <div
              ref={glowRef}
              className="absolute inset-0 rounded-full bg-accent-blue/25 blur-3xl"
            />
            {/* Outer ring */}
            <div
              ref={ringOuterRef}
              className="absolute inset-0 rounded-full border border-white/12"
            />
            {/* Mid ring */}
            <div
              ref={ringMidRef}
              className="absolute inset-6 rounded-full border border-white/18 md:inset-8"
            />
            {/* Inner ring */}
            <div
              ref={ringInnerRef}
              className="absolute inset-12 rounded-full border border-white/25 md:inset-16"
            />
            {/* Core */}
            <div
              ref={coreRef}
              className="relative h-24 w-24 rounded-full bg-gradient-to-br from-accent-blue via-accent-violet to-accent-cyan opacity-90 shadow-glow sm:h-28 sm:w-28 md:h-32 md:w-32 lg:h-36 lg:w-36"
            />
            {/* Tiny accent dot at top of outer ring */}
            <div className="absolute left-1/2 top-0 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-white shadow-glow" />
          </div>

          {/* GAP between object and description */}
          <div className="h-10 sm:h-12 md:h-16 lg:h-20" />

          {/* DESCRIPTION + SCROLL HINT */}
          <div
            ref={descriptionRef}
            className="flex max-w-md flex-col items-center gap-3 text-center"
          >
            <p className="text-[10px] font-light uppercase tracking-[0.3em] text-white/50 sm:text-xs">
              A scroll-driven composition
            </p>
            <div
              ref={scrollHintRef}
              className="flex flex-col items-center gap-2"
            >
              <span className="text-[9px] uppercase tracking-widest3 text-white/40">
                Scroll to explore
              </span>
              <span className="relative flex h-6 w-[1px] overflow-hidden bg-white/15">
                <span className="absolute inset-x-0 top-0 h-2.5 animate-[scrollLine_2s_ease-in-out_infinite] bg-accent-blue" />
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================== */}
      {/* CLOSING SECTION */}
      {/* ================================================== */}
      <section className="relative z-10 flex min-h-screen w-full flex-col items-center justify-center px-6 py-20 md:px-10">
        <p className="mb-4 text-[10px] font-medium uppercase tracking-widest3 text-white/40 md:text-xs">
          End of experience
        </p>
        <h2 className="max-w-3xl text-center font-display text-3xl font-medium leading-tight tracking-wide md:text-5xl lg:text-6xl">
          Built with motion in mind.
        </h2>
        <p className="mt-6 max-w-xl text-center text-sm text-white/50 md:text-base">
          A scroll-driven landing page crafted with React, GSAP ScrollTrigger,
          and Tailwind CSS. Every movement responds to your scroll.
        </p>
      </section>
    </main>
  )
}
