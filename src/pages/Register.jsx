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
            { title: "Clips Generated", value: "124", icon: "🎬", color: "from-blue-500 to-cyan-500" },
            { title: "Shot Accuracy", value: "87%", icon: "🎯", color: "from-green-500 to-emerald-500" },
            { title: "Consistency Score", value: "8.2/10", icon: "📊", color: "from-purple-500 to-pink-500" },
            { title: "AI Feedback Points", value: "42", icon: "🧠", color: "from-orange-500 to-red-500" },
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
        <div className="min-h-screen bg-gradient-to-br from-[#070A14] via-[#0A0F1C] to-[#0D1117] text-white px-4 py-10 relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                    className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl"
                />
                <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                    className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-3xl"
                />
            </div>

            <div className="mx-auto max-w-6xl relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="glass rounded-3xl p-6 mb-8 border border-white/20"
                >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div>
                            <h1 className="text-3xl font-bold gradient-text">Performance Dashboard</h1>
                            <p className="text-white/70 mt-2 text-sm">
                                Timeline insights, shot patterns and AI feedback summary.
                            </p>
                        </div>

                        <div className="flex gap-3">
                            <Link
                                to="/upload"
                                className="px-4 py-2 rounded-xl glass border border-white/20 hover:bg-white/10 transition-all duration-300 text-sm flex items-center gap-2"
                            >
                                <span>📤</span>
                                Upload New Video
                            </Link>
                            <Link
                                to="/"
                                className="px-4 py-2 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition-all duration-300 text-sm font-semibold flex items-center gap-2"
                            >
                                <span>🏠</span>
                                Home
                            </Link>
                        </div>
                    </div>
                </motion.div>

                {/* Stats */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    {stats.map((s, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20, scale: 0.9 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            whileHover={{ scale: 1.05, y: -5 }}
                            className="glass rounded-2xl p-6 border border-white/20 hover:border-white/30 transition-all duration-300 group cursor-pointer"
                        >
                            <div className="flex items-center justify-between mb-4">
                                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${s.color} flex items-center justify-center text-xl group-hover:scale-110 transition-transform duration-300`}>
                                    {s.icon}
                                </div>
                                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                            </div>
                            <p className="text-sm text-white/60 mb-2">{s.title}</p>
                            <p className="text-2xl font-bold mb-3">{s.value}</p>
                            <div className="h-1 rounded-full bg-white/10 overflow-hidden">
                                <motion.div 
                                    className={`h-full bg-gradient-to-r ${s.color} rounded-full`}
                                    initial={{ width: 0 }}
                                    whileInView={{ width: "75%" }}
                                    transition={{ duration: 1, delay: i * 0.2 }}
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Charts */}
                <div className="grid lg:grid-cols-2 gap-6 mb-8">
                    {/* Line Chart */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6 }}
                        className="glass rounded-3xl p-6 border border-white/20 hover:border-white/30 transition-all duration-300"
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
                                📈
                            </div>
                            <div>
                                <p className="font-semibold">Shot Accuracy Trend</p>
                                <p className="text-sm text-white/60">
                                    Weekly improvement based on analyzed clips.
                                </p>
                            </div>
                        </div>

                        <div className="h-72">
                            <ResponsiveContainer width="100%" height="100%">
                                <LineChart data={lineData}>
                                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                                    <XAxis dataKey="day" stroke="rgba(255,255,255,0.6)" />
                                    <YAxis stroke="rgba(255,255,255,0.6)" />
                                    <Tooltip 
                                        contentStyle={{
                                            backgroundColor: 'rgba(0,0,0,0.8)',
                                            border: '1px solid rgba(255,255,255,0.2)',
                                            borderRadius: '12px',
                                            color: 'white'
                                        }}
                                    />
                                    <Line 
                                        type="monotone" 
                                        dataKey="accuracy" 
                                        stroke="url(#lineGradient)" 
                                        strokeWidth={3}
                                        dot={{ fill: '#60A5FA', strokeWidth: 2, r: 6 }}
                                        activeDot={{ r: 8, fill: '#3B82F6' }}
                                    />
                                    <defs>
                                        <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
                                            <stop offset="0%" stopColor="#3B82F6" />
                                            <stop offset="100%" stopColor="#8B5CF6" />
                                        </linearGradient>
                                    </defs>
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                    </motion.div>

                    {/* Bar Chart */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="glass rounded-3xl p-6 border border-white/20 hover:border-white/30 transition-all duration-300"
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                                📊
                            </div>
                            <div>
                                <p className="font-semibold">Most Analyzed Sports</p>
                                <p className="text-sm text-white/60">
                                    Distribution of detected sports activities.
                                </p>
                            </div>
                        </div>

                        <div className="h-72">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={barData}>
                                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                                    <XAxis dataKey="shot" stroke="rgba(255,255,255,0.6)" />
                                    <YAxis stroke="rgba(255,255,255,0.6)" />
                                    <Tooltip 
                                        contentStyle={{
                                            backgroundColor: 'rgba(0,0,0,0.8)',
                                            border: '1px solid rgba(255,255,255,0.2)',
                                            borderRadius: '12px',
                                            color: 'white'
                                        }}
                                    />
                                    <Bar dataKey="count" fill="url(#barGradient)" radius={[4, 4, 0, 0]} />
                                    <defs>
                                        <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="0%" stopColor="#8B5CF6" />
                                            <stop offset="100%" stopColor="#EC4899" />
                                        </linearGradient>
                                    </defs>
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </motion.div>
                </div>

                {/* Feedback */}
                <div className="grid lg:grid-cols-3 gap-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-2 glass rounded-3xl p-6 border border-white/20"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center text-xl">
                                🤖
                            </div>
                            <div>
                                <p className="font-semibold text-lg">AI Feedback Summary</p>
                                <p className="text-sm text-white/60">
                                    High-impact coaching insights generated from events.
                                </p>
                            </div>
                        </div>

                        <div className="space-y-4">
                            {feedback.map((f, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="glass rounded-2xl p-4 text-sm text-white/80 border border-white/10 hover:border-white/20 transition-all duration-300 group"
                                >
                                    <div className="flex items-start gap-3">
                                        <div className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center text-xs font-bold mt-0.5">
                                            {i + 1}
                                        </div>
                                        <p className="group-hover:text-white transition-colors">{f}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="glass rounded-3xl p-6 border border-white/20"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center text-xl">
                                ⚡
                            </div>
                            <div>
                                <p className="font-semibold text-lg">Quick Actions</p>
                                <p className="text-sm text-white/60">
                                    Navigate your workflow faster.
                                </p>
                            </div>
                        </div>

                        <div className="space-y-3">
                            <Link
                                to="/upload"
                                className="block px-4 py-3 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 text-center group"
                            >
                                <span className="group-hover:scale-110 inline-block transition-transform">📤</span>
                                {" "}Upload New Video
                            </Link>

                            <motion.button 
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full px-4 py-3 rounded-2xl glass border border-white/20 hover:bg-white/10 transition-all duration-300 group"
                            >
                                <span className="group-hover:scale-110 inline-block transition-transform">⏱️</span>
                                {" "}View Timeline
                            </motion.button>

                            <motion.button 
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full px-4 py-3 rounded-2xl glass border border-white/20 hover:bg-white/10 transition-all duration-300 group"
                            >
                                <span className="group-hover:scale-110 inline-block transition-transform">📊</span>
                                {" "}Download Report
                            </motion.button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

