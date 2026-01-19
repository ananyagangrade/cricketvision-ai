import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const fadeUp = {
    hidden: { opacity: 0, y: 18 },
    visible: (i = 1) => ({
        opacity: 1,
        y: 0,
        transition: { delay: 0.08 * i, duration: 0.6, ease: "easeOut" },
    }),
};

const glowOrb = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 1.2, ease: "easeOut" },
    },
};

function Stat({ label, value }) {
    return (
        <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
            <p className="text-white text-2xl font-bold">{value}</p>
            <p className="text-white/60 text-sm mt-1">{label}</p>
        </div>
    );
}

function TrustBadge({ icon, title, desc }) {
    return (
        <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-xl flex items-start gap-3">
            <div className="h-9 w-9 rounded-xl bg-white/10 border border-white/10 grid place-items-center">
                {icon}
            </div>
            <div>
                <p className="text-sm font-semibold">{title}</p>
                <p className="text-xs text-white/60 mt-0.5">{desc}</p>
            </div>
        </div>
    );
}

function CategoryCard({ icon, title, points }) {
    return (
        <motion.div
            variants={fadeUp}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
        >
            <div className="flex items-center gap-3">
                <div className="h-11 w-11 rounded-xl bg-white/10 border border-white/10 grid place-items-center text-xl">
                    {icon}
                </div>
                <div>
                    <p className="font-semibold text-lg">{title}</p>
                    <p className="text-xs text-white/60">Core module</p>
                </div>
            </div>

            <div className="mt-4 space-y-2">
                {points.map((p, i) => (
                    <div
                        key={i}
                        className="rounded-2xl border border-white/10 bg-[#0B1020] p-3 text-sm text-white/75"
                    >
                        • {p}
                    </div>
                ))}
            </div>
        </motion.div>
    );
}

function TestimonialCard({ name, role, sport, msg, outcome }) {
    return (
        <motion.div
            variants={fadeUp}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
        >
            <div className="flex items-center justify-between">
                <div>
                    <p className="font-semibold">{name}</p>
                    <p className="text-xs text-white/60">
                        {role} • {sport}
                    </p>
                </div>
                <span className="text-xs text-white/60 border border-white/10 px-2 py-1 rounded-full">
                    ★ 4.9
                </span>
            </div>

            <p className="mt-4 text-sm text-white/75 leading-relaxed">“{msg}”</p>

            <div className="mt-4 rounded-2xl border border-white/10 bg-[#0B1020] p-3 text-xs text-white/60">
                Outcome: <span className="text-white/75">{outcome}</span>
            </div>
        </motion.div>
    );
}

function StepCard({ idx, icon, title, desc }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5, delay: idx * 0.08 }}
            className="rounded-2xl border border-white/10 bg-[#0B1020] p-6"
        >
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="h-11 w-11 rounded-xl bg-white/10 border border-white/10 grid place-items-center text-xl">
                        {icon}
                    </div>
                    <div>
                        <p className="font-semibold">{title}</p>
                        <p className="text-xs text-white/60">Step {String(idx + 1).padStart(2, "0")}</p>
                    </div>
                </div>

                <span className="text-xs text-white/60 border border-white/10 px-2 py-1 rounded-full">
                    Demo
                </span>
            </div>

            <p className="mt-3 text-sm text-white/60 leading-relaxed">{desc}</p>

            <div className="mt-5 h-1 rounded-full bg-white/10 overflow-hidden">
                <motion.div
                    className="h-full bg-white/60 rounded-full"
                    animate={{ width: ["20%", "100%", "55%"] }}
                    transition={{
                        duration: 2.7,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut",
                        delay: idx * 0.12,
                    }}
                />
            </div>
        </motion.div>
    );
}

function MiniTimeline({ selectedSport }) {
    // fake mini timeline — realistic preview vibe
    const items = [
        { t: "Key Clip 01", time: "00:32:10", d: `${selectedSport.highlight} detected` },
        { t: "Key Clip 02", time: "01:15:44", d: "High-impact moment clipped" },
        { t: "AI Tip", time: "01:48:21", d: selectedSport.tip },
    ];

    return (
        <div className="mt-4 rounded-2xl border border-white/10 bg-[#0B1020] p-5">
            <div className="flex items-center justify-between text-sm">
                <p className="text-white/80">Training Session</p>
                <p className="text-white/50">02:45:10</p>
            </div>

            <div className="mt-4 h-32 rounded-2xl border border-white/10 bg-white/5 grid place-items-center text-white/60 text-sm">
                ▶ Clip Preview (UI Mock)
            </div>

            <div className="mt-4 space-y-3">
                {items.map((x, i) => (
                    <div
                        key={i}
                        className="rounded-2xl border border-white/10 bg-white/5 p-4 flex items-start justify-between gap-4"
                    >
                        <div>
                            <p className="text-xs text-white/60">{x.t}</p>
                            <p className="text-sm font-semibold mt-1">{x.d}</p>
                        </div>
                        <span className="text-xs text-white/50">{x.time}</span>
                    </div>
                ))}
            </div>

            <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs text-white/60">AI Feedback (Preview)</p>
                <p className="mt-1 text-sm text-white/80">
                    “Improve your {selectedSport.name} performance with consistent practice and focused technique.”
                </p>
            </div>
        </div>
    );
}

export default function Home() {
    const sports = useMemo(
        () => [
            {
                id: "cricket",
                name: "Cricket",
                icon: "🏏",
                highlight: "Cover Drive",
                tip: "Earlier bat lift for better timing",
            },
            {
                id: "football",
                name: "Football",
                icon: "⚽",
                highlight: "Passing Accuracy",
                tip: "Open body angle before receiving the ball",
            },
            {
                id: "badminton",
                name: "Badminton",
                icon: "🏸",
                highlight: "Smash Technique",
                tip: "Focus on wrist snap & landing balance",
            },
            {
                id: "basketball",
                name: "Basketball",
                icon: "🏀",
                highlight: "Shot Form",
                tip: "Elbow alignment + consistent follow-through",
            },
            {
                id: "tennis",
                name: "Tennis",
                icon: "🎾",
                highlight: "Forehand Timing",
                tip: "Early preparation + contact in front",
            },
        ],
        []
    );

    const [selectedSport, setSelectedSport] = useState(sports[0]);

    const categories = useMemo(
        () => [
            {
                icon: "🎥",
                title: "Upload & Processing",
                points: [
                    `Upload your ${selectedSport.name} training/match video`,
                    "Auto-organize key moments into clips",
                    "Clean preview flow for quick review",
                ],
            },
            {
                icon: "🧠",
                title: "AI Insights & Feedback",
                points: [
                    `Detect important ${selectedSport.name} actions automatically`,
                    "Generate improvement tips & patterns",
                    "Highlight strengths and areas to improve",
                ],
            },
            {
                icon: "📊",
                title: "Dashboard & Reports",
                points: [
                    "Weekly trends and performance analytics",
                    "Visual charts + feedback summary",
                    "Demo report/download options (future)",
                ],
            },
        ],
        [selectedSport]
    );

    const steps = useMemo(
        () => [
            {
                icon: "⬆️",
                title: "Upload Video",
                desc: `Upload your ${selectedSport.name} session video (demo upload flow).`,
            },
            {
                icon: "✨",
                title: "AI Detects Moments",
                desc: `AI identifies key ${selectedSport.name} actions and important segments.`,
            },
            {
                icon: "⏱️",
                title: "Timeline Review",
                desc: "Browse clips with timestamps and jump to highlights instantly.",
            },
            {
                icon: "✅",
                title: "Feedback + Dashboard",
                desc: "Get insights, suggestions, and a visual performance summary.",
            },
        ],
        [selectedSport]
    );

    const testimonials = useMemo(
        () => [
            {
                name: "Rahul Verma",
                role: "Athlete",
                sport: "Cricket",
                msg: "The preview and timeline flow helps me focus on key moments without wasting time.",
                outcome: "Faster review of practice sessions",
            },
            {
                name: "Coach Meera Singh",
                role: "Coach",
                sport: "Multi-sport",
                msg: "AI feedback is easy to understand, so I can guide players quickly in training.",
                outcome: "Better coaching sessions in less time",
            },
            {
                name: "Aman Khan",
                role: "Beginner",
                sport: "Badminton",
                msg: "I like the dashboard charts. It makes my progress feel clear and motivating.",
                outcome: "Improved consistency over weeks",
            },
        ],
        []
    );

    return (
        <div className="min-h-screen bg-[#070A14] text-white overflow-x-hidden">
            {/* Background Glow */}
            <motion.div
                variants={glowOrb}
                initial="hidden"
                animate="visible"
                className="pointer-events-none absolute -top-48 -left-48 h-[520px] w-[520px] rounded-full blur-3xl opacity-25 overflow-hidden"
                style={{
                    background:
                        "radial-gradient(circle at 30% 30%, rgba(86,214,255,0.6), rgba(86,214,255,0.0) 60%)",
                }}
            />

            <motion.div
                variants={glowOrb}
                initial="hidden"
                animate="visible"
                className="pointer-events-none absolute -bottom-56 -right-56 h-[560px] w-[560px] rounded-full blur-3xl opacity-25 overflow-hidden"
                style={{
                    background:
                        "radial-gradient(circle at 40% 40%, rgba(170,103,255,0.6), rgba(170,103,255,0.0) 60%)",
                }}
            />


            {/* Navbar */}
            <header className="relative z-10">
                <div className="mx-auto max-w-6xl px-4 py-5 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-2xl bg-white/10 border border-white/10 grid place-items-center">
                            🏆
                        </div>
                        <div>
                            <p className="text-white font-semibold leading-none">SportVision AI</p>
                            <p className="text-xs text-white/60">Multi-Sport Video Analysis & Feedback</p>
                        </div>
                    </div>

                    <nav className="hidden md:flex items-center gap-6 text-sm text-white/70">
                        <a className="hover:text-white transition" href="#features">
                            Features
                        </a>
                        <a className="hover:text-white transition" href="#demo">
                            Demo
                        </a>
                        <a className="hover:text-white transition" href="#testimonials">
                            Testimonials
                        </a>
                        <a className="hover:text-white transition" href="#cta">
                            Start
                        </a>
                    </nav>

                    <div className="flex items-center gap-2">
                        <Link
                            to="/login"
                            className="hidden sm:block px-4 py-2 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 transition text-sm"
                        >
                            Login
                        </Link>
                        <Link
                            to="/register"
                            className="px-4 py-2 rounded-xl bg-white text-[#070A14] hover:opacity-90 transition text-sm font-semibold"
                        >
                            Register
                        </Link>
                    </div>
                </div>
            </header>

            {/* Hero */}
            <main className="relative z-10">
                <section className="mx-auto max-w-6xl px-4 pt-10 pb-14">
                    <div className="grid lg:grid-cols-2 gap-10 items-center">
                        {/* Left */}
                        <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={1}>
                            <div className="flex items-center gap-3 flex-wrap">
                                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
                                    <span className="h-2 w-2 rounded-full bg-white/70" />
                                    Multi-Sport • AI Insights
                                </div>

                                {/* Premium Sport Selector */}
                                <div className="rounded-2xl border border-white/10 bg-white/5 px-3 py-1 flex items-center gap-2">
                                    <span className="text-xs text-white/60">Sport:</span>
                                    <select
                                        value={selectedSport.id}
                                        onChange={(e) => setSelectedSport(sports.find((s) => s.id === e.target.value))}
                                        className="bg-transparent text-white text-xs outline-none cursor-pointer"
                                    >
                                        {sports.map((s) => (
                                            <option key={s.id} value={s.id} className="text-black">
                                                {s.icon} {s.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            {/* Benefit-driven hero */}
                            <h1 className="mt-4 text-4xl md:text-5xl font-bold leading-tight">
                                Upload a {selectedSport.name} video.{" "}
                                <span className="text-white/80">Get AI insights.</span>
                            </h1>

                            <p className="mt-4 text-white/70 leading-relaxed">
                                SportVision AI converts long match/training videos into clips, highlights, and coaching feedback —
                                built for athletes and coaches to improve faster.
                            </p>

                            {/* Trust badges row */}
                            <div className="mt-6 grid sm:grid-cols-3 gap-3">
                                <TrustBadge icon="🧩" title="Multi-sport support" desc="Cricket, Football & more" />
                                <TrustBadge icon="⏱️" title="Quick review flow" desc="Highlights + timeline preview" />
                                <TrustBadge icon="📊" title="Dashboard analytics" desc="Trends + feedback summary" />
                            </div>

                            <div className="mt-6 flex flex-wrap gap-3">
                                <Link
                                    to="/upload"
                                    className="px-5 py-3 rounded-2xl bg-white text-[#070A14] font-semibold hover:opacity-90 transition"
                                >
                                    Upload Video
                                </Link>

                                <Link
                                    to="/dashboard"
                                    className="px-5 py-3 rounded-2xl border border-white/15 bg-white/5 hover:bg-white/10 transition"
                                >
                                    View Demo Dashboard
                                </Link>
                            </div>

                            <p className="mt-3 text-xs text-white/45">
                                Demo build: Upload UI + dashboard preview (AI analysis integration in progress)
                            </p>

                            <div className="mt-8 grid grid-cols-3 gap-3">
                                <Stat label="Clips Organized" value="120+" />
                                <Stat label="Insights Generated" value="300+" />
                                <Stat label="Progress Lift" value="15%" />
                            </div>
                        </motion.div>

                        {/* Right Preview */}
                        <motion.div
                            initial={{ opacity: 0, y: 18 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, ease: "easeOut" }}
                            className="relative"
                        >
                            <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">
                                <div className="flex items-center justify-between">
                                    <p className="font-semibold">Session Snapshot</p>
                                    <span className="text-xs text-white/70 border border-white/10 px-2 py-1 rounded-full">
                                        {selectedSport.icon} {selectedSport.name}
                                    </span>
                                </div>

                                {/* upgraded preview */}
                                <MiniTimeline selectedSport={selectedSport} />
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Features */}
                <section id="features" className="mx-auto max-w-6xl px-4 py-14">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={fadeUp}
                        custom={1}
                    >
                        <h2 className="text-2xl md:text-3xl font-bold">Core Features</h2>
                        <p className="mt-2 text-white/70 max-w-xl">
                            We grouped features into modules so the workflow is easy to understand and demo-ready.
                        </p>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        className="mt-8 grid lg:grid-cols-3 gap-5"
                    >
                        {categories.map((c, i) => (
                            <CategoryCard key={i} icon={c.icon} title={c.title} points={c.points} />
                        ))}
                    </motion.div>
                </section>

                {/* Demo Timeline */}
                <section id="demo" className="mx-auto max-w-6xl px-4 pb-14">
                    <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8">
                        <h2 className="text-2xl md:text-3xl font-bold">Demo Timeline</h2>
                        <p className="mt-2 text-white/70">
                            Upload → AI detects moments → review clips → get feedback and dashboard insights.
                        </p>

                        <div className="mt-2 text-xs text-white/45">
                            Estimated pipeline time: <span className="text-white/65">demo UI</span> (backend integration next)
                        </div>

                        <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                            {steps.map((x, i) => (
                                <StepCard key={i} idx={i} icon={x.icon} title={x.title} desc={x.desc} />
                            ))}
                        </div>
                    </div>
                </section>

                {/* Testimonials */}
                <section id="testimonials" className="mx-auto max-w-6xl px-4 pb-14">
                    <h2 className="text-2xl md:text-3xl font-bold">Testimonials</h2>
                    <p className="mt-2 text-white/70 max-w-xl">
                        Designed to feel like a real product — clean UI, fast navigation, and clear insights.
                    </p>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        className="mt-8 grid md:grid-cols-3 gap-5"
                    >
                        {testimonials.map((t, i) => (
                            <TestimonialCard
                                key={i}
                                name={t.name}
                                role={t.role}
                                sport={t.sport}
                                msg={t.msg}
                                outcome={t.outcome}
                            />
                        ))}
                    </motion.div>
                </section>

                {/* CTA */}
                <section id="cta" className="mx-auto max-w-6xl px-4 pb-14">
                    <div className="rounded-3xl border border-white/10 bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-xl p-8 md:p-10">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                            <div>
                                <h3 className="text-2xl md:text-3xl font-bold">
                                    Ready to improve your {selectedSport.name} training?
                                </h3>
                                <p className="mt-2 text-white/70 max-w-xl">
                                    Create an account, upload a session video, and explore insights with the dashboard.
                                </p>
                            </div>

                            <div className="flex gap-3 flex-wrap">
                                <Link
                                    to="/register"
                                    className="px-5 py-3 rounded-2xl bg-white text-[#070A14] font-semibold hover:opacity-90 transition"
                                >
                                    Create Account
                                </Link>
                                <Link
                                    to="/upload"
                                    className="px-5 py-3 rounded-2xl border border-white/15 bg-white/5 hover:bg-white/10 transition"
                                >
                                    Upload Video
                                </Link>
                            </div>
                        </div>

                        <div className="mt-8 text-xs text-white/50">
                            SportVision AI • Multi-sport • Animated UI
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <footer className="border-t border-white/10">
                    <div className="mx-auto max-w-6xl px-4 py-8 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
                        <p className="text-sm text-white/60">
                            © {new Date().getFullYear()} SportVision AI • Internship Project
                        </p>

                        <div className="flex gap-4 text-sm text-white/60 flex-wrap">
                            <a className="hover:text-white transition" href="#features">
                                Features
                            </a>
                            <a className="hover:text-white transition" href="#demo">
                                Demo
                            </a>
                            <a className="hover:text-white transition" href="#testimonials">
                                Testimonials
                            </a>

                            <span className="text-white/30">•</span>
                            <span className="text-white/50">Demo build (frontend)</span>
                        </div>
                    </div>
                </footer>
            </main>
        </div>
    );
}
