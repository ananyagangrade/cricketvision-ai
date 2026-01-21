

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
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    PolarRadiusAxis,
    Radar,
} from "recharts";

export default function CoachDashboard() {
    const stats = useMemo(
        () => [
            { title: "My Athletes", value: "24", icon: <i className="fas fa-running text-blue-400"></i>, color: "from-blue-500 to-cyan-500", change: "+3 this week" },
            { title: "Training Sessions", value: "156", icon: <i className="fas fa-dumbbell text-green-400"></i>, color: "from-green-500 to-emerald-500", change: "+12 this month" },
            { title: "Avg Improvement", value: "18%", icon: <i className="fas fa-chart-line text-purple-400"></i>, color: "from-purple-500 to-pink-500", change: "+5% vs last month" },
            { title: "Active Programs", value: "8", icon: <i className="fas fa-clipboard-list text-orange-400"></i>, color: "from-orange-500 to-red-500", change: "2 new programs" },
        ],
        []
    );

    const athleteProgress = useMemo(
        () => [
            { week: "Week 1", performance: 65, technique: 70, fitness: 60 },
            { week: "Week 2", performance: 68, technique: 72, fitness: 65 },
            { week: "Week 3", performance: 72, technique: 75, fitness: 68 },
            { week: "Week 4", performance: 75, technique: 78, fitness: 72 },
            { week: "Week 5", performance: 78, technique: 80, fitness: 75 },
            { week: "Week 6", performance: 82, technique: 83, fitness: 78 },
        ],
        []
    );

    const sportsAnalysis = useMemo(
        () => [
            { sport: "Cricket", sessions: 45, improvement: 22 },
            { sport: "Football", sessions: 38, improvement: 18 },
            { sport: "Basketball", sessions: 32, improvement: 15 },
            { sport: "Tennis", sessions: 28, improvement: 20 },
            { sport: "Badminton", sessions: 13, improvement: 16 },
        ],
        []
    );

    const skillsRadar = useMemo(
        () => [
            { skill: "Technique", A: 85, B: 78, fullMark: 100 },
            { skill: "Speed", A: 78, B: 82, fullMark: 100 },
            { skill: "Strength", A: 82, B: 75, fullMark: 100 },
            { skill: "Endurance", A: 75, B: 88, fullMark: 100 },
            { skill: "Mental", A: 88, B: 70, fullMark: 100 },
            { skill: "Tactical", A: 80, B: 85, fullMark: 100 },
        ],
        []
    );

    const myAthletes = useMemo(
        () => [
            { name: "Alex Rodriguez", sport: "Cricket", level: "Advanced", progress: 85, lastSession: "2 hours ago", status: "Active" },
            { name: "Maya Patel", sport: "Football", level: "Intermediate", progress: 72, lastSession: "1 day ago", status: "Active" },
            { name: "James Wilson", sport: "Basketball", level: "Beginner", progress: 58, lastSession: "3 days ago", status: "Needs Attention" },
            { name: "Sofia Chen", sport: "Tennis", level: "Advanced", progress: 91, lastSession: "5 hours ago", status: "Excellent" },
        ],
        []
    );

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#070A14] via-[#0A0F1C] to-[#0D1117] text-white px-4 py-10 relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 55, repeat: Infinity, ease: "linear" }}
                    className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-r from-green-500/5 to-blue-500/5 rounded-full blur-3xl"
                />
                <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                    className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-3xl"
                />
            </div>

            <div className="mx-auto max-w-7xl relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="glass rounded-3xl p-6 mb-8 border border-white/20"
                >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div>
                            <h1 className="text-3xl font-bold gradient-text flex items-center gap-3">
                                <i className="fas fa-chalkboard-teacher text-green-400"></i>
                                Coach Dashboard
                            </h1>
                            <p className="text-white/70 mt-2 text-sm">
                                Athlete management, training analytics, and performance insights
                            </p>
                        </div>

                        <div className="flex gap-3">
                            <Link
                                to="/admin"
                                className="px-4 py-2 rounded-xl glass border border-white/20 hover:bg-white/10 transition-all duration-300 text-sm flex items-center gap-2"
                            >
                                <i className="fas fa-shield-alt"></i>
                                Admin View
                            </Link>
                            <Link
                                to="/"
                                className="px-4 py-2 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition-all duration-300 text-sm font-semibold flex items-center gap-2"
                            >
                                <i className="fas fa-home"></i>
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
                                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${s.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                                    {s.icon}
                                </div>
                                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                            </div>
                            <p className="text-sm text-white/60 mb-2">{s.title}</p>
                            <p className="text-2xl font-bold mb-2">{s.value}</p>
                            <p className="text-xs text-white/50">{s.change}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Charts Row */}
                <div className="grid lg:grid-cols-3 gap-6 mb-8">
                    {/* Athlete Progress */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-2 glass rounded-3xl p-6 border border-white/20 hover:border-white/30 transition-all duration-300"
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
                                <i className="fas fa-chart-line text-white"></i>
                            </div>
                            <div>
                                <p className="font-semibold">Athlete Progress Tracking</p>
                                <p className="text-sm text-white/60">Weekly performance, technique, and fitness metrics</p>
                            </div>
                        </div>

                        <div className="h-72">
                            <ResponsiveContainer width="100%" height="100%">
                                <LineChart data={athleteProgress}>
                                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                                    <XAxis dataKey="week" stroke="rgba(255,255,255,0.6)" />
                                    <YAxis stroke="rgba(255,255,255,0.6)" />
                                    <Tooltip 
                                        contentStyle={{
                                            backgroundColor: 'rgba(0,0,0,0.8)',
                                            border: '1px solid rgba(255,255,255,0.2)',
                                            borderRadius: '12px',
                                            color: 'white'
                                        }}
                                    />
                                    <Line type="monotone" dataKey="performance" stroke="#3B82F6" strokeWidth={3} />
                                    <Line type="monotone" dataKey="technique" stroke="#10B981" strokeWidth={3} />
                                    <Line type="monotone" dataKey="fitness" stroke="#F59E0B" strokeWidth={3} />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                    </motion.div>

                    {/* Skills Radar */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="glass rounded-3xl p-6 border border-white/20 hover:border-white/30 transition-all duration-300"
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                                <i className="fas fa-radar-chart text-white"></i>
                            </div>
                            <div>
                                <p className="font-semibold">Skills Analysis</p>
                                <p className="text-sm text-white/60">Top athletes comparison</p>
                            </div>
                        </div>

                        <div className="h-64">
                            <ResponsiveContainer width="100%" height="100%">
                                <RadarChart data={skillsRadar}>
                                    <PolarGrid stroke="rgba(255,255,255,0.2)" />
                                    <PolarAngleAxis dataKey="skill" tick={{ fill: 'rgba(255,255,255,0.6)', fontSize: 12 }} />
                                    <PolarRadiusAxis tick={{ fill: 'rgba(255,255,255,0.4)', fontSize: 10 }} />
                                    <Radar name="Athlete A" dataKey="A" stroke="#3B82F6" fill="#3B82F6" fillOpacity={0.2} />
                                    <Radar name="Athlete B" dataKey="B" stroke="#10B981" fill="#10B981" fillOpacity={0.2} />
                                </RadarChart>
                            </ResponsiveContainer>
                        </div>
                    </motion.div>
                </div>

                {/* Sports Analysis */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6 }}
                    className="glass rounded-3xl p-6 border border-white/20 mb-8"
                >
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center text-xl">
                            <i className="fas fa-chart-bar text-white"></i>
                        </div>
                        <div>
                            <p className="font-semibold text-lg">Sports Training Analysis</p>
                            <p className="text-sm text-white/60">Sessions conducted and improvement rates by sport</p>
                        </div>
                    </div>

                    <div className="h-64">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={sportsAnalysis}>
                                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                                <XAxis dataKey="sport" stroke="rgba(255,255,255,0.6)" />
                                <YAxis stroke="rgba(255,255,255,0.6)" />
                                <Tooltip 
                                    contentStyle={{
                                        backgroundColor: 'rgba(0,0,0,0.8)',
                                        border: '1px solid rgba(255,255,255,0.2)',
                                        borderRadius: '12px',
                                        color: 'white'
                                    }}
                                />
                                <Bar dataKey="sessions" fill="#3B82F6" radius={[4, 4, 0, 0]} />
                                <Bar dataKey="improvement" fill="#10B981" radius={[4, 4, 0, 0]} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </motion.div>

                {/* Management Sections */}
                <div className="grid lg:grid-cols-3 gap-6">
                    {/* My Athletes */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-2 glass rounded-3xl p-6 border border-white/20"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center text-xl">
                                <i className="fas fa-users text-white"></i>
                            </div>
                            <div>
                                <p className="font-semibold text-lg">My Athletes</p>
                                <p className="text-sm text-white/60">Current training roster and progress</p>
                            </div>
                        </div>

                        <div className="space-y-3">
                            {myAthletes.map((athlete, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="glass rounded-2xl p-4 border border-white/10 hover:border-white/20 transition-all duration-300 group"
                                >
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center text-white font-bold">
                                                {athlete.name.charAt(0)}
                                            </div>
                                            <div>
                                                <p className="font-medium">{athlete.name}</p>
                                                <p className="text-xs text-white/60">{athlete.sport} • {athlete.level}</p>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <div className="flex items-center gap-2 mb-1">
                                                <div className="w-16 h-2 bg-white/10 rounded-full overflow-hidden">
                                                    <div 
                                                        className="h-full bg-gradient-to-r from-blue-500 to-green-500 rounded-full"
                                                        style={{ width: `${athlete.progress}%` }}
                                                    ></div>
                                                </div>
                                                <span className="text-xs text-white/60">{athlete.progress}%</span>
                                            </div>
                                            <span className={`text-xs px-2 py-1 rounded-full ${
                                                athlete.status === 'Excellent' ? 'bg-green-500/20 text-green-400' :
                                                athlete.status === 'Active' ? 'bg-blue-500/20 text-blue-400' :
                                                'bg-yellow-500/20 text-yellow-400'
                                            }`}>
                                                {athlete.status}
                                            </span>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Coach Tools */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="glass rounded-3xl p-6 border border-white/20"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center text-xl">
                                <i className="fas fa-tools text-white"></i>
                            </div>
                            <div>
                                <p className="font-semibold text-lg">Coach Tools</p>
                                <p className="text-sm text-white/60">Training management</p>
                            </div>
                        </div>

                        <div className="space-y-3">
                            <motion.button 
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full px-4 py-3 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center gap-2"
                            >
                                <i className="fas fa-plus"></i>
                                Add New Athlete
                            </motion.button>

                            <motion.button 
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full px-4 py-3 rounded-2xl glass border border-white/20 hover:bg-white/10 transition-all duration-300 flex items-center gap-2"
                            >
                                <i className="fas fa-calendar-alt"></i>
                                Schedule Training
                            </motion.button>

                            <motion.button 
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full px-4 py-3 rounded-2xl glass border border-white/20 hover:bg-white/10 transition-all duration-300 flex items-center gap-2"
                            >
                                <i className="fas fa-clipboard-check"></i>
                                Create Program
                            </motion.button>

                            <motion.button 
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full px-4 py-3 rounded-2xl glass border border-white/20 hover:bg-white/10 transition-all duration-300 flex items-center gap-2"
                            >
                                <i className="fas fa-video"></i>
                                Review Videos
                            </motion.button>

                            <motion.button 
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full px-4 py-3 rounded-2xl glass border border-white/20 hover:bg-white/10 transition-all duration-300 flex items-center gap-2"
                            >
                                <i className="fas fa-file-alt"></i>
                                Generate Reports
                            </motion.button>

                            <motion.button 
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full px-4 py-3 rounded-2xl glass border border-white/20 hover:bg-white/10 transition-all duration-300 flex items-center gap-2"
                            >
                                <i className="fas fa-comments"></i>
                                Send Feedback
                            </motion.button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
