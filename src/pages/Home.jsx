import React, { useMemo } from "react";
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

function FeatureCard({ icon, title, desc }) {
    return (
        <motion.div
            variants={fadeUp}
            className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl
                 shadow-[0_0_0_1px_rgba(255,255,255,0.04)] hover:bg-white/8 transition"
        >
            <div className="h-11 w-11 rounded-xl bg-white/10 grid place-items-center text-white text-xl group-hover:bg-white/15 transition">
                {icon}
            </div>
            <h3 className="mt-4 text-white font-semibold text-lg">{title}</h3>
            <p className="mt-2 text-white/70 text-sm leading-relaxed">{desc}</p>
        </motion.div>
    );
}

function Stat({ label, value }) {
    return (
        <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
            <p className="text-white text-2xl font-bold">{value}</p>
            <p className="text-white/60 text-sm mt-1">{label}</p>
        </div>
    );
}

function TestimonialCard({ name, role, msg }) {
    return (
        <motion.div
            variants={fadeUp}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
        >
            <div className="flex items-center justify-between">
                <div>
                    <p className="font-semibold">{name}</p>
                    <p className="text-xs text-white/60">{role}</p>
                </div>
                <span className="text-xs text-white/60 border border-white/10 px-2 py-1 rounded-full">
                    ★ 4.9
                </span>
            </div>
            <p className="mt-4 text-sm text-white/75 leading-relaxed">“{msg}”</p>
        </motion.div>
    );
}

function TimelineStep({ idx, title, desc, badge }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5, delay: idx * 0.08 }}
            className="rounded-2xl border border-white/10 bg-[#0B1020] p-6"
        >
            <div className="flex items-center justify-between">
                <p className="font-semibold">{title}</p>
                <span className="text-xs text-white/60 border border-white/10 px-2 py-1 rounded-full">
                    {badge}
                </span>
            </div>
            <p className="mt-2 text-sm text-white/60">{desc}</p>

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

export default function Home() {
    const features = useMemo(
        () => [
            {
                icon: "🎥",
                title: "Smart Video Processing",
                desc: "Upload long match/training videos and get key moments organized automatically.",
            },
            {
                icon: "🏏",
                title: "Action Understanding",
                desc: "Detects key batting/bowling actions and highlights performance patterns.",
            },
            {
                icon: "🧠",
                title: "Feedback Generation",
                desc: "Turns insights into easy tips you can apply instantly during practice.",
            },
            {
                icon: "⏱️",
                title: "Timeline Experience",
                desc: "Jump directly to important moments using a clean timeline interface.",
            },
            {
                icon: "📈",
                title: "Performance Dashboard",
                desc: "Track accuracy, consistency, and session progress with visual analytics.",
            },
            {
                icon: "🔒",
                title: "Role-Based Access",
                desc: "Player, Coach, and Admin flows to keep the system secure and organized.",
            },
        ],
        []
    );

    const demoTimeline = useMemo(
        () => [
            {
                title: "Upload Video",
                desc: "Select your match/training video and start processing.",
                badge: "Step 01",
            },
            {
                title: "AI Detects Moments",
                desc: "The system identifies key actions and important segments.",
                badge: "Step 02",
            },
            {
                title: "Timeline Review",
                desc: "Browse clips with timestamps and jump to highlights instantly.",
                badge: "Step 03",
            },
            {
                title: "Feedback + Dashboard",
                desc: "Get insights, suggestions, and visual performance summary.",
                badge: "Step 04",
            },
        ],
        []
    );

    const testimonials = useMemo(
        () => [
            {
                name: "Rahul Verma",
                role: "Club Player",
                msg: "I can quickly rewatch key shots without scrolling the full video. The timeline makes practice review super easy.",
            },
            {
                name: "Coach Meera Singh",
                role: "Cricket Coach",
                msg: "The feedback section helps students understand mistakes clearly. It saves a lot of coaching time.",
            },
            {
                name: "Aman Khan",
                role: "Beginner Learner",
                msg: "It explains the reason behind mistakes in simple language. Perfect for improving timing and balance.",
            },
        ],
        []
    );

    return (
        <div className="min-h-screen bg-[#070A14] text-white overflow-hidden">
            {/* Background Glow */}
            <motion.div
                variants={glowOrb}
                initial="hidden"
                animate="visible"
                className="pointer-events-none absolute -top-48 -left-48 h-[520px] w-[520px] rounded-full blur-3xl opacity-40"
                style={{
                    background:
                        "radial-gradient(circle at 30% 30%, rgba(86,214,255,0.6), rgba(86,214,255,0.0) 60%)",
                }}
            />
            <motion.div
                variants={glowOrb}
                initial="hidden"
                animate="visible"
                className="pointer-events-none absolute -bottom-56 -right-56 h-[560px] w-[560px] rounded-full blur-3xl opacity-40"
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
                            🏏
                        </div>
                        <div>
                            <p className="text-white font-semibold leading-none">
                                CricketVision AI
                            </p>
                            <p className="text-xs text-white/60">
                                Smart Video Review & Feedback
                            </p>
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
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={fadeUp}
                            custom={1}
                        >


                            <h1 className="mt-4 text-4xl md:text-5xl font-bold leading-tight">
                                Train smarter with{" "}
                                <span className="text-white/80">AI video insights</span>
                            </h1>

                            <p className="mt-4 text-white/70 leading-relaxed">
                                A sleek platform to organize long cricket sessions into key
                                moments, provide feedback, and track performance visually.
                            </p>

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
                                    Open Dashboard
                                </Link>
                            </div>

                            <div className="mt-8 grid grid-cols-3 gap-3">
                                <Stat label="Clips Organized" value="120+" />
                                <Stat label="Insights Generated" value="300+" />
                                <Stat label="Accuracy Lift" value="15%" />
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
                                    <p className="font-semibold">AI Session Snapshot</p>
                                    <span className="text-xs text-white/70 border border-white/10 px-2 py-1 rounded-full">
                                        Live Preview
                                    </span>
                                </div>

                                <div className="mt-4 rounded-2xl border border-white/10 bg-[#0B1020] p-5">
                                    <div className="flex items-center justify-between text-sm">
                                        <p className="text-white/80">Practice Session</p>
                                        <p className="text-white/50">06:10:22</p>
                                    </div>

                                    <div className="mt-4 h-32 rounded-2xl border border-white/10 bg-white/5 grid place-items-center text-white/60 text-sm">
                                        ▶ Clip Preview (UI Mock)
                                    </div>

                                    <div className="mt-4 grid grid-cols-2 gap-3">
                                        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                                            <p className="text-xs text-white/60">Detected</p>
                                            <p className="text-sm font-semibold">Cover Drive</p>
                                        </div>
                                        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                                            <p className="text-xs text-white/60">Suggestion</p>
                                            <p className="text-sm font-semibold">Earlier Bat Lift</p>
                                        </div>
                                    </div>

                                    <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-4">
                                        <p className="text-xs text-white/60">Feedback</p>
                                        <p className="mt-1 text-sm text-white/80">
                                            “Improve timing by lifting the bat earlier and staying balanced.”
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <motion.div
                                className="absolute -top-4 -right-4 hidden md:block"
                                animate={{ y: [0, -8, 0] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                            >
                                <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl px-4 py-3">
                                    <p className="text-xs text-white/60">Trend</p>
                                    <p className="text-sm font-semibold">Consistency ↑</p>
                                </div>
                            </motion.div>
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
                            Built for fast review, better learning, and smooth coaching workflows.
                        </p>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
                    >
                        {features.map((f, i) => (
                            <FeatureCard
                                key={i}
                                icon={f.icon}
                                title={f.title}
                                desc={f.desc}
                            />
                        ))}
                    </motion.div>
                </section>

                {/* Demo Timeline */}
                <section id="demo" className="mx-auto max-w-6xl px-4 pb-14">
                    <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8">
                        <h2 className="text-2xl md:text-3xl font-bold">
                            Demo Timeline (How you’ll use it)
                        </h2>
                        <p className="mt-2 text-white/70">
                            A smooth flow from upload to feedback—perfect for practice improvement.
                        </p>

                        <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                            {demoTimeline.map((x, i) => (
                                <TimelineStep
                                    key={i}
                                    idx={i}
                                    title={x.title}
                                    desc={x.desc}
                                    badge={x.badge}
                                />
                            ))}
                        </div>
                    </div>
                </section>

                {/* Testimonials */}
                <section
                    id="testimonials"
                    className="mx-auto max-w-6xl px-4 pb-14"
                >
                    <h2 className="text-2xl md:text-3xl font-bold">Testimonials</h2>
                    <p className="mt-2 text-white/70 max-w-xl">
                        A product-like experience designed for real improvement.
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
                                msg={t.msg}
                            />
                        ))}
                    </motion.div>
                </section>

                {/* CTA */}
                <section id="cta" className="mx-auto max-w-6xl px-4 pb-20">
                    <div className="rounded-3xl border border-white/10 bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-xl p-8 md:p-10">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                            <div>
                                <h3 className="text-2xl md:text-3xl font-bold">
                                    Ready to start improving?
                                </h3>
                                <p className="mt-2 text-white/70 max-w-xl">
                                    Create an account, upload a session video, and explore insights
                                    with the dashboard view.
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


                    </div>
                </section>

                {/* Footer */}
                <footer className="border-t border-white/10">
                    <div className="mx-auto max-w-6xl px-4 py-8 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
                        <p className="text-sm text-white/60">
                            © {new Date().getFullYear()} CricketVision AI • Internship Project
                        </p>
                        <div className="flex gap-4 text-sm text-white/60">
                            <a className="hover:text-white transition" href="#features">
                                Features
                            </a>
                            <a className="hover:text-white transition" href="#demo">
                                Demo
                            </a>
                            <a className="hover:text-white transition" href="#testimonials">
                                Testimonials
                            </a>
                        </div>
                    </div>
                </footer>
            </main>
        </div>
    );
}
