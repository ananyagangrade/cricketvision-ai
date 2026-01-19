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

function Badge({ children }) {
    return (
        <span className="text-xs text-white/60 border border-white/10 px-2 py-1 rounded-full">
            {children}
        </span>
    );
}

export default function AdminDashboard() {
    const users = useMemo(
        () => [
            { id: 1, name: "Aarav Sharma", role: "Player", status: "Active", sport: "Cricket" },
            { id: 2, name: "Meera Patel", role: "Player", status: "Active", sport: "Badminton" },
            { id: 3, name: "Kabir Singh", role: "Player", status: "Active", sport: "Football" },
            { id: 4, name: "Coach Meera", role: "Coach", status: "Active", sport: "Multi-sport" },
            { id: 5, name: "Admin Team", role: "Admin", status: "Active", sport: "-" },
            { id: 6, name: "Rohan Verma", role: "Player", status: "Blocked", sport: "Basketball" },
        ],
        []
    );

    const [query, setQuery] = useState("");
    const [roleFilter, setRoleFilter] = useState("All");

    const filtered = useMemo(() => {
        const q = query.trim().toLowerCase();
        return users.filter((u) => {
            const matchesQuery =
                !q ||
                u.name.toLowerCase().includes(q) ||
                u.role.toLowerCase().includes(q) ||
                u.sport.toLowerCase().includes(q) ||
                u.status.toLowerCase().includes(q);

            const matchesRole = roleFilter === "All" ? true : u.role === roleFilter;

            return matchesQuery && matchesRole;
        });
    }, [users, query, roleFilter]);

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
                        <p className="text-3xl font-bold">Admin Dashboard</p>
                        <p className="text-white/70 mt-2 text-sm">
                            Manage users, roles, platform usage and basic controls (demo UI).
                        </p>
                    </div>

                    <div className="flex gap-2 flex-wrap">
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
                        <StatCard title="Total Users" value="62" hint="Players + coaches + admins (demo)" />
                    </motion.div>
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={2}>
                        <StatCard title="Active Sessions" value="14" hint="Currently running (demo)" />
                    </motion.div>
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={3}>
                        <StatCard title="Videos Uploaded" value="128" hint="Total uploads (demo)" />
                    </motion.div>
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={4}>
                        <StatCard title="Issues Flagged" value="3" hint="Reports / moderation (demo)" />
                    </motion.div>
                </div>

                {/* User Management */}
                <div className="mt-6 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                        <div>
                            <p className="font-semibold">User Management</p>
                            <p className="text-sm text-white/60 mt-1">
                                Search users and manage roles/status (demo controls).
                            </p>
                        </div>

                        <div className="flex gap-2 flex-wrap">
                            <input
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                placeholder="Search name / role / status"
                                className="w-full md:w-64 rounded-2xl border border-white/10 bg-[#0B1020] px-4 py-2 text-sm outline-none"
                            />

                            <select
                                value={roleFilter}
                                onChange={(e) => setRoleFilter(e.target.value)}
                                className="rounded-2xl border border-white/10 bg-[#0B1020] px-3 py-2 text-sm outline-none"
                            >
                                <option className="text-black" value="All">All Roles</option>
                                <option className="text-black" value="Player">Player</option>
                                <option className="text-black" value="Coach">Coach</option>
                                <option className="text-black" value="Admin">Admin</option>
                            </select>

                            <button className="px-4 py-2 rounded-2xl bg-white text-[#070A14] font-semibold hover:opacity-90 transition text-sm">
                                Add User (Demo)
                            </button>
                        </div>
                    </div>

                    <div className="mt-5 space-y-3">
                        {filtered.map((u) => (
                            <div
                                key={u.id}
                                className="rounded-2xl border border-white/10 bg-[#0B1020] p-4 flex flex-col md:flex-row md:items-center md:justify-between gap-3"
                            >
                                <div>
                                    <div className="flex items-center gap-2 flex-wrap">
                                        <p className="font-semibold">{u.name}</p>
                                        <Badge>{u.role}</Badge>
                                        <Badge>{u.sport}</Badge>
                                        <Badge>{u.status}</Badge>
                                    </div>
                                    <p className="text-xs text-white/60 mt-1">
                                        Permissions are role-based. Admin controls access and monitoring.
                                    </p>
                                </div>

                                <div className="flex gap-2 flex-wrap">
                                    <button className="px-4 py-2 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 transition text-sm">
                                        Change Role (Demo)
                                    </button>
                                    <button className="px-4 py-2 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 transition text-sm">
                                        Block/Unblock (Demo)
                                    </button>
                                    <button className="px-4 py-2 rounded-xl bg-white text-[#070A14] font-semibold hover:opacity-90 transition text-sm">
                                        View Activity (Demo)
                                    </button>
                                </div>
                            </div>
                        ))}

                        {filtered.length === 0 && (
                            <div className="text-sm text-white/60 mt-2">No users found.</div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
