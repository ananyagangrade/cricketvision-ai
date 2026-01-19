import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const fadeUp = {
    hidden: { opacity: 0, y: 14 },
    visible: (i = 1) => ({
        opacity: 1,
        y: 0,
        transition: { delay: 0.06 * i, duration: 0.55, ease: "easeOut" },
    }),
};

function Pill({ children }) {
    return (
        <span className="text-xs text-white/60 border border-white/10 px-2 py-1 rounded-full">
            {children}
        </span>
    );
}

function StatCard({ title, value, hint }) {
    return (
        <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5">
            <p className="text-sm text-white/60">{title}</p>
            <p className="mt-2 text-2xl font-bold">{value}</p>
            <p className="mt-1 text-xs text-white/50">{hint}</p>
            <div className="mt-3 h-1 rounded-full bg-white/10 overflow-hidden">
                <div className="h-full w-2/3 bg-white/60 rounded-full" />
            </div>
        </div>
    );
}

function PlayerRow({ p, onView }) {
    return (
        <div className="rounded-2xl border border-white/10 bg-[#0B1020] p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div>
                <div className="flex items-center gap-2 flex-wrap">
                    <p className="font-semibold">{p.name}</p>
                    <Pill>{p.sport}</Pill>
                    <Pill>{p.level}</Pill>
                </div>
                <p className="text-xs text-white/60 mt-1">
                    Last Session: {p.lastSession} • Accuracy: {p.accuracy}% • Clips: {p.clips}
                </p>
            </div>

            <div className="flex gap-2 flex-wrap">
                <button
                    onClick={() => onView(p)}
                    className="px-4 py-2 rounded-xl bg-white text-[#070A14] font-semibold hover:opacity-90 transition text-sm"
                >
                    View Report
                </button>
                <button className="px-4 py-2 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 transition text-sm">
                    Add Notes (Demo)
                </button>
            </div>
        </div>
    );
}

export default function CoachDashboard() {
    const players = useMemo(
        () => [
            {
                id: 1,
                name: "Aarav Sharma",
                sport: "Cricket",
                level: "Intermediate",
                lastSession: "Yesterday",
                accuracy: 84,
                clips: 28,
                feedback: [
                    "Improve head stability during shots.",
                    "Earlier footwork preparation for faster balls.",
                    "Maintain balance on backfoot shots.",
                ],
            },
            {
                id: 2,
                name: "Meera Patel",
                sport: "Badminton",
                level: "Beginner",
                lastSession: "2 days ago",
                accuracy: 76,
                clips: 19,
                feedback: [
                    "Better wrist snap for smashes.",
                    "Focus on split step before moving.",
                    "Maintain posture during clears.",
                ],
            },
            {
                id: 3,
                name: "Kabir Singh",
                sport: "Football",
                level: "Advanced",
                lastSession: "Today",
                accuracy: 88,
                clips: 34,
                feedback: [
                    "Open body angle before receiving the ball.",
                    "Improve first touch under pressure.",
                    "Scan field earlier for better passing decisions.",
                ],
            },
        ],
        []
    );

    const [search, setSearch] = useState("");
    const [selectedPlayer, setSelectedPlayer] = useState(players[0]);

    const filtered = useMemo(() => {
        const s = search.trim().toLowerCase();
        if (!s) return players;
        return players.filter(
            (p) =>
                p.name.toLowerCase().includes(s) ||
                p.sport.toLowerCase().includes(s) ||
                p.level.toLowerCase().includes(s)
        );
    }, [players, search]);

    return (
        <div className="min-h-screen bg-[#070A14] text-white px-4 py-10">
            <div className="mx-auto max-w-6xl">
                {/* Header */}
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={fadeUp}
                    custom={1}
                    className="flex flex-col md:flex-row md:items-end md:justify-between gap-4"
                >
                    <div>
                        <p className="text-3xl font-bold">Coach Dashboard</p>
                        <p className="text-white/70 mt-2 text-sm">
                            Review player sessions, AI insights, and provide coaching notes (demo UI).
                        </p>
                    </div>

                    <div className="flex gap-2 flex-wrap">
                        <Link
                            to="/dashboard"
                            className="px-4 py-2 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 transition text-sm"
                        >
                            Player Dashboard
                        </Link>
                        <Link
                            to="/"
                            className="px-4 py-2 rounded-xl bg-white text-[#070A14] hover:opacity-90 transition text-sm font-semibold"
                        >
                            Home
                        </Link>
                    </div>
                </motion.div>

                {/* Stats */}
                <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}>
                        <StatCard title="Players Tracked" value="12" hint="Active trainees (demo)" />
                    </motion.div>
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={2}>
                        <StatCard title="Sessions Reviewed" value="38" hint="This week (demo)" />
                    </motion.div>
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={3}>
                        <StatCard title="Avg Accuracy" value="82%" hint="Across sessions (demo)" />
                    </motion.div>
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={4}>
                        <StatCard title="AI Suggestions" value="96" hint="Generated insights (demo)" />
                    </motion.div>
                </div>

                {/* Main */}
                <div className="mt-6 grid lg:grid-cols-3 gap-5">
                    {/* Player List */}
                    <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.5 }}
                        className="lg:col-span-2 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6"
                    >
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                            <div>
                                <p className="font-semibold">Players</p>
                                <p className="text-sm text-white/60 mt-1">
                                    Search and open player reports to view AI feedback.
                                </p>
                            </div>

                            <input
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                placeholder="Search player / sport / level"
                                className="w-full sm:w-64 rounded-2xl border border-white/10 bg-[#0B1020] px-4 py-2 text-sm outline-none"
                            />
                        </div>

                        <div className="mt-5 space-y-3">
                            {filtered.map((p) => (
                                <PlayerRow key={p.id} p={p} onView={setSelectedPlayer} />
                            ))}
                        </div>
                    </motion.div>

                    {/* Report Preview */}
                    <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.5, delay: 0.06 }}
                        className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6"
                    >
                        <div className="flex items-center justify-between">
                            <p className="font-semibold">Report Preview</p>
                            <Pill>Demo</Pill>
                        </div>

                        <div className="mt-4 rounded-2xl border border-white/10 bg-[#0B1020] p-4">
                            <p className="font-semibold">{selectedPlayer.name}</p>
                            <p className="text-xs text-white/60 mt-1">
                                {selectedPlayer.sport} • {selectedPlayer.level}
                            </p>

                            <div className="mt-4 grid grid-cols-2 gap-3">
                                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                                    <p className="text-xs text-white/60">Accuracy</p>
                                    <p className="text-lg font-bold mt-1">{selectedPlayer.accuracy}%</p>
                                </div>
                                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                                    <p className="text-xs text-white/60">Clips</p>
                                    <p className="text-lg font-bold mt-1">{selectedPlayer.clips}</p>
                                </div>
                            </div>

                            <p className="mt-4 text-sm font-semibold">AI Feedback</p>
                            <div className="mt-2 space-y-2">
                                {selectedPlayer.feedback.map((x, i) => (
                                    <div
                                        key={i}
                                        className="rounded-2xl border border-white/10 bg-white/5 p-3 text-xs text-white/75"
                                    >
                                        • {x}
                                    </div>
                                ))}
                            </div>

                            <button className="mt-4 w-full px-4 py-3 rounded-2xl bg-white text-[#070A14] font-semibold hover:opacity-90 transition">
                                Share with Player (Demo)
                            </button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
