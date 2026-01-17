import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {
    const navigate = useNavigate();
    const [form, setForm] = useState({
        name: "",
        role: "Player",
        email: "",
        password: "",
    });

    const onSubmit = (e) => {
        e.preventDefault();

        // ✅ Demo register (replace later with Supabase Auth)
        if (!form.name || !form.email || !form.password) return;

        navigate("/upload");
    };

    return (
        <div className="min-h-screen bg-[#070A14] text-white flex items-center justify-center px-4">
            <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="w-full max-w-md rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-7 shadow-[0_0_0_1px_rgba(255,255,255,0.05)]"
            >
                <div className="flex items-center gap-3">
                    <div className="h-11 w-11 rounded-2xl bg-white/10 border border-white/10 grid place-items-center">
                        🏏
                    </div>
                    <div>
                        <p className="font-semibold">Create Account</p>
                        <p className="text-xs text-white/60">Player • Coach • Admin</p>
                    </div>
                </div>

                <form onSubmit={onSubmit} className="mt-6 space-y-4">
                    <div>
                        <label className="text-sm text-white/70">Full Name</label>
                        <input
                            value={form.name}
                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                            placeholder="Ananya Gangrade"
                            className="mt-2 w-full rounded-2xl border border-white/10 bg-[#0B1020] px-4 py-3 outline-none focus:border-white/30"
                        />
                    </div>

                    <div>
                        <label className="text-sm text-white/70">Role</label>
                        <select
                            value={form.role}
                            onChange={(e) => setForm({ ...form, role: e.target.value })}
                            className="mt-2 w-full rounded-2xl border border-white/10 bg-[#0B1020] px-4 py-3 outline-none focus:border-white/30"
                        >
                            <option>Player</option>
                            <option>Coach</option>
                            <option>Admin</option>
                        </select>
                    </div>

                    <div>
                        <label className="text-sm text-white/70">Email</label>
                        <input
                            type="email"
                            value={form.email}
                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                            placeholder="ananya@gmail.com"
                            className="mt-2 w-full rounded-2xl border border-white/10 bg-[#0B1020] px-4 py-3 outline-none focus:border-white/30"
                        />
                    </div>

                    <div>
                        <label className="text-sm text-white/70">Password</label>
                        <input
                            type="password"
                            value={form.password}
                            onChange={(e) => setForm({ ...form, password: e.target.value })}
                            placeholder="••••••••"
                            className="mt-2 w-full rounded-2xl border border-white/10 bg-[#0B1020] px-4 py-3 outline-none focus:border-white/30"
                        />
                    </div>

                    <button className="w-full rounded-2xl bg-white text-[#070A14] font-semibold py-3 hover:opacity-90 transition">
                        Register & Continue
                    </button>

                    <div className="text-center text-sm text-white/60">
                        Already have an account?{" "}
                        <Link to="/login" className="text-white hover:underline">
                            Login
                        </Link>
                    </div>

                    <div className="text-center">
                        <Link to="/" className="text-xs text-white/50 hover:text-white">
                            ← Back to Home
                        </Link>
                    </div>
                </form>
            </motion.div>
        </div>
    );
}
