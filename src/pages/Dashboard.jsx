import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    BarChart,
    Bar,
} from "recharts";

export default function Dashboard() {
    const stats = useMemo(
        () => [
            { title: "Clips Generated", value: "124" },
            { title: "Shot Accuracy", value: "87%" },
            { title: "Consistency Score", value: "8.2/10" },
            { title: "AI Feedback Points", value: "42" },
        ],
        []
    );

    const lineData = useMemo(
        () => [
            { day: "Mon", accuracy: 72 },
            { day: "Tue", accuracy: 75 },
            { day: "Wed", accuracy: 78 },
            { day: "Thu", accuracy: 81 },
            { day: "Fri", accuracy: 84 },
            { day: "Sat", accuracy: 87 },
            { day: "Sun", accuracy: 86 },
        ],
        []
    );

    const barData = useMemo(
        () => [
            { shot: "Cricket", count: 18 },
            { shot: "Football", count: 12 },
            { shot: "Badminton", count: 14 },
            { shot: "Basketball", count: 9 },
            { shot: "Tennis", count: 7 },
        ],
        []
    );


    const feedback = useMemo(
        () => [
            "Backlift slightly delayed on fast deliveries → lift earlier for timing.",
            "Head position stable, but keep eyes on the ball longer for control.",
            "Footwork is improving, maintain balance on backfoot shots.",
            "Try adjusting grip pressure for smoother bat swing.",
        ],
        []
    );

    return (
        <div className="min-h-screen bg-[#070A14] text-white px-4 py-10">
            <div className="mx-auto max-w-6xl">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="flex flex-col md:flex-row md:items-end md:justify-between gap-4"
                >
                    <div>
                        <p className="text-3xl font-bold">Performance Dashboard</p>
                        <p className="text-white/70 mt-2 text-sm">
                            Timeline insights, shot patterns and AI feedback summary.
                        </p>
                    </div>

                    <div className="flex gap-2">
                        <Link
                            to="/upload"
                            className="px-4 py-2 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 transition text-sm"
                        >
                            Upload New Video
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
                    {stats.map((s, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.45, delay: i * 0.06 }}
                            className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5"
                        >
                            <p className="text-sm text-white/60">{s.title}</p>
                            <p className="mt-2 text-2xl font-bold">{s.value}</p>
                            <div className="mt-3 h-1 rounded-full bg-white/10 overflow-hidden">
                                <div className="h-full w-2/3 bg-white/60 rounded-full" />
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Charts */}
                <div className="mt-6 grid lg:grid-cols-2 gap-5">
                    {/* Line Chart */}
                    <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.5 }}
                        className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6"
                    >
                        <p className="font-semibold">Shot Accuracy Trend</p>
                        <p className="text-sm text-white/60 mt-1">
                            Weekly improvement based on analyzed clips.
                        </p>

                        <div className="mt-4 h-72">
                            <ResponsiveContainer width="100%" height="100%">
                                <LineChart data={lineData}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="day" />
                                    <YAxis />
                                    <Tooltip />
                                    <Line type="monotone" dataKey="accuracy" strokeWidth={3} />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                    </motion.div>

                    {/* Bar Chart */}
                    <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.5, delay: 0.06 }}
                        className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6"
                    >
                        <p className="font-semibold">Most Analyzed Sports</p>
                        <p className="text-sm text-white/60 mt-1">
                            Distribution of detected sports activities (demo).
                        </p>


                        <div className="mt-4 h-72">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={barData}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="shot" />
                                    <YAxis />
                                    <Tooltip />
                                    <Bar dataKey="count" />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </motion.div>
                </div>

                {/* Feedback */}
                <div className="mt-6 grid lg:grid-cols-3 gap-5">
                    <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.5 }}
                        className="lg:col-span-2 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6"
                    >
                        <p className="font-semibold">AI Feedback Summary</p>
                        <p className="text-sm text-white/60 mt-1">
                            High-impact coaching insights generated from events.
                        </p>

                        <div className="mt-4 space-y-3">
                            {feedback.map((f, i) => (
                                <div
                                    key={i}
                                    className="rounded-2xl border border-white/10 bg-[#0B1020] p-4 text-sm text-white/80"
                                >
                                    <span className="inline-block mr-2 text-white/50">•</span>
                                    {f}
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.5, delay: 0.06 }}
                        className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6"
                    >
                        <p className="font-semibold">Quick Actions</p>
                        <p className="text-sm text-white/60 mt-1">
                            Navigate your workflow faster.
                        </p>

                        <div className="mt-4 flex flex-col gap-3">
                            <Link
                                to="/upload"
                                className="px-4 py-3 rounded-2xl bg-white text-[#070A14] font-semibold hover:opacity-90 transition text-center"
                            >
                                Upload New Video
                            </Link>

                            <button className="px-4 py-3 rounded-2xl border border-white/15 bg-white/5 hover:bg-white/10 transition">
                                View Timeline (Demo)
                            </button>

                            <button className="px-4 py-3 rounded-2xl border border-white/15 bg-white/5 hover:bg-white/10 transition">
                                Download Report (Demo)
                            </button>
                        </div>


                    </motion.div>
                </div>
            </div>
        </div>
    );
}
