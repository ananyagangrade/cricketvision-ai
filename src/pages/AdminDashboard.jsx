
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
    PieChart,
    Pie,
    Cell,
} from "recharts";

export default function AdminDashboard() {
    const stats = useMemo(
        () => [
            { title: "Total Users", value: "2,847", icon: <i className="fas fa-users text-blue-400"></i>, color: "from-blue-500 to-cyan-500", change: "+12%" },
            { title: "Videos Processed", value: "15,234", icon: <i className="fas fa-video text-green-400"></i>, color: "from-green-500 to-emerald-500", change: "+8%" },
            { title: "Active Coaches", value: "156", icon: <i className="fas fa-chalkboard-teacher text-purple-400"></i>, color: "from-purple-500 to-pink-500", change: "+5%" },
            { title: "System Uptime", value: "99.9%", icon: <i className="fas fa-server text-orange-400"></i>, color: "from-orange-500 to-red-500", change: "Stable" },
        ],
        []
    );

    const userGrowth = useMemo(
        () => [
            { month: "Jan", users: 1200, coaches: 45 },
            { month: "Feb", users: 1450, coaches: 52 },
            { month: "Mar", users: 1680, coaches: 61 },
            { month: "Apr", users: 1920, coaches: 78 },
            { month: "May", users: 2180, coaches: 89 },
            { month: "Jun", users: 2450, coaches: 102 },
            { month: "Jul", users: 2847, coaches: 156 },
        ],
        []
    );

    const sportsData = useMemo(
        () => [
            { name: "Cricket", value: 35, color: "#3B82F6" },
            { name: "Football", value: 28, color: "#10B981" },
            { name: "Basketball", value: 18, color: "#F59E0B" },
            { name: "Tennis", value: 12, color: "#EF4444" },
            { name: "Others", value: 7, color: "#8B5CF6" },
        ],
        []
    );

    const recentUsers = useMemo(
        () => [
            { name: "Alex Johnson", email: "alex@email.com", sport: "Cricket", joined: "2 hours ago", status: "Active" },
            { name: "Sarah Wilson", email: "sarah@email.com", sport: "Football", joined: "5 hours ago", status: "Active" },
            { name: "Mike Chen", email: "mike@email.com", sport: "Basketball", joined: "1 day ago", status: "Pending" },
            { name: "Emma Davis", email: "emma@email.com", sport: "Tennis", joined: "2 days ago", status: "Active" },
        ],
        []
    );

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#070A14] via-[#0A0F1C] to-[#0D1117] text-white px-4 py-10 relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                    className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-r from-red-500/5 to-orange-500/5 rounded-full blur-3xl"
                />
                <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
                    className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-r from-indigo-500/5 to-purple-500/5 rounded-full blur-3xl"
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
                                <i className="fas fa-shield-alt text-red-400"></i>
                                Admin Dashboard
                            </h1>
                            <p className="text-white/70 mt-2 text-sm">
                                System overview, user management, and platform analytics
                            </p>
                        </div>

                        <div className="flex gap-3">
                            <Link
                                to="/coach"
                                className="px-4 py-2 rounded-xl glass border border-white/20 hover:bg-white/10 transition-all duration-300 text-sm flex items-center gap-2"
                            >
                                <i className="fas fa-chalkboard-teacher"></i>
                                Coach View
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
                                <span className={`text-xs px-2 py-1 rounded-full ${s.change.includes('+') ? 'bg-green-500/20 text-green-400' : 'bg-blue-500/20 text-blue-400'}`}>
                                    {s.change}
                                </span>
                            </div>
                            <p className="text-sm text-white/60 mb-2">{s.title}</p>
                            <p className="text-2xl font-bold">{s.value}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Charts Row */}
                <div className="grid lg:grid-cols-3 gap-6 mb-8">
                    {/* User Growth Chart */}
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
                                <p className="font-semibold">User Growth</p>
                                <p className="text-sm text-white/60">Monthly user and coach registrations</p>
                            </div>
                        </div>

                        <div className="h-72">
                            <ResponsiveContainer width="100%" height="100%">
                                <LineChart data={userGrowth}>
                                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                                    <XAxis dataKey="month" stroke="rgba(255,255,255,0.6)" />
                                    <YAxis stroke="rgba(255,255,255,0.6)" />
                                    <Tooltip 
                                        contentStyle={{
                                            backgroundColor: 'rgba(0,0,0,0.8)',
                                            border: '1px solid rgba(255,255,255,0.2)',
                                            borderRadius: '12px',
                                            color: 'white'
                                        }}
                                    />
                                    <Line type="monotone" dataKey="users" stroke="#3B82F6" strokeWidth={3} />
                                    <Line type="monotone" dataKey="coaches" stroke="#10B981" strokeWidth={3} />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                    </motion.div>

                    {/* Sports Distribution */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="glass rounded-3xl p-6 border border-white/20 hover:border-white/30 transition-all duration-300"
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                                <i className="fas fa-chart-pie text-white"></i>
                            </div>
                            <div>
                                <p className="font-semibold">Sports Distribution</p>
                                <p className="text-sm text-white/60">Popular sports on platform</p>
                            </div>
                        </div>

                        <div className="h-48">
                            <ResponsiveContainer width="100%" height="100%">
                                <PieChart>
                                    <Pie
                                        data={sportsData}
                                        cx="50%"
                                        cy="50%"
                                        innerRadius={40}
                                        outerRadius={80}
                                        dataKey="value"
                                    >
                                        {sportsData.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={entry.color} />
                                        ))}
                                    </Pie>
                                    <Tooltip />
                                </PieChart>
                            </ResponsiveContainer>
                        </div>

                        <div className="space-y-2">
                            {sportsData.map((sport, i) => (
                                <div key={i} className="flex items-center justify-between text-xs">
                                    <div className="flex items-center gap-2">
                                        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: sport.color }}></div>
                                        <span>{sport.name}</span>
                                    </div>
                                    <span className="text-white/60">{sport.value}%</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Management Sections */}
                <div className="grid lg:grid-cols-3 gap-6">
                    {/* Recent Users */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-2 glass rounded-3xl p-6 border border-white/20"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center text-xl">
                                <i className="fas fa-user-plus text-white"></i>
                            </div>
                            <div>
                                <p className="font-semibold text-lg">Recent Users</p>
                                <p className="text-sm text-white/60">Latest user registrations</p>
                            </div>
                        </div>

                        <div className="space-y-3">
                            {recentUsers.map((user, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="glass rounded-2xl p-4 border border-white/10 hover:border-white/20 transition-all duration-300 group"
                                >
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center text-white font-bold">
                                                {user.name.charAt(0)}
                                            </div>
                                            <div>
                                                <p className="font-medium">{user.name}</p>
                                                <p className="text-xs text-white/60">{user.email}</p>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <span className={`text-xs px-2 py-1 rounded-full ${user.status === 'Active' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'}`}>
                                                {user.status}
                                            </span>
                                            <p className="text-xs text-white/50 mt-1">{user.joined}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Admin Actions */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="glass rounded-3xl p-6 border border-white/20"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-red-500 to-orange-500 flex items-center justify-center text-xl">
                                <i className="fas fa-cogs text-white"></i>
                            </div>
                            <div>
                                <p className="font-semibold text-lg">Admin Actions</p>
                                <p className="text-sm text-white/60">System management</p>
                            </div>
                        </div>

                        <div className="space-y-3">
                            <motion.button 
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full px-4 py-3 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center gap-2"
                            >
                                <i className="fas fa-users-cog"></i>
                                Manage Users
                            </motion.button>

                            <motion.button 
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full px-4 py-3 rounded-2xl glass border border-white/20 hover:bg-white/10 transition-all duration-300 flex items-center gap-2"
                            >
                                <i className="fas fa-database"></i>
                                System Backup
                            </motion.button>

                            <motion.button 
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full px-4 py-3 rounded-2xl glass border border-white/20 hover:bg-white/10 transition-all duration-300 flex items-center gap-2"
                            >
                                <i className="fas fa-chart-bar"></i>
                                Generate Reports
                            </motion.button>

                            <motion.button 
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full px-4 py-3 rounded-2xl glass border border-white/20 hover:bg-white/10 transition-all duration-300 flex items-center gap-2"
                            >
                                <i className="fas fa-bell"></i>
                                Send Notifications
                            </motion.button>

                            <motion.button 
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full px-4 py-3 rounded-2xl glass border border-red-500/30 bg-red-500/10 hover:bg-red-500/20 transition-all duration-300 flex items-center gap-2 text-red-300"
                            >
                                <i className="fas fa-exclamation-triangle"></i>
                                System Maintenance
                            </motion.button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
