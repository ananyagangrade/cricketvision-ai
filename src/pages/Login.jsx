import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
    const navigate = useNavigate();
    const [form, setForm] = useState({ email: "", password: "" });

    const onSubmit = (e) => {
        e.preventDefault();

        // ✅ Demo login validation (replace later with Supabase Auth)
        if (!form.email || !form.password) return;

        navigate("/dashboard");
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
                        <p className="font-semibold">SportsVision AI</p>
                        <p className="text-xs text-white/60">Login to your account</p>
                    </div>
                </div>

                <form onSubmit={onSubmit} className="mt-6 space-y-4">
                    <div>
                        <label className="text-sm text-white/70">Email</label>
                        <input
                            type="email"
                            value={form.email}
                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                            placeholder="Enter your email"
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
                        Login
                    </button>

                    <div className="text-center text-sm text-white/60">
                        Don’t have an account?{" "}
                        <Link to="/register" className="text-white hover:underline">
                            Register
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
