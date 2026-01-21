<<<<<<< HEAD
=======

>>>>>>> 6806a43730c59c4e254425215d9a9b0fd5d777b8
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "../supabaseClient";

export default function Register() {
    const navigate = useNavigate();
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    });
    const [isLoading, setIsLoading] = useState(false);


    const onSubmit = async (e) => {
        e.preventDefault();

        if (!form.name || !form.email || !form.password || !form.confirmPassword) {
            alert("Please fill all fields");
            return;
        }

        if (form.password !== form.confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        setIsLoading(true);

        // ✅ 1) Sign up user in Supabase Auth
        const { data, error } = await supabase.auth.signUp({
            email: form.email,
            password: form.password,
            options: {
                data: {
                    full_name: form.name,
                    role: "player",
                },
            },
        });

        if (error) {
            setIsLoading(false);
            alert(error.message);
            return;
        }

        const userId = data?.user?.id;

        if (!userId) {
            setIsLoading(false);
            alert("Signup failed, please try again!");
            return;
        }

        // ✅ 2) Insert user profile in profiles table
        const { error: profileError } = await supabase.from("profiles").insert([
            {
                id: userId,
                full_name: form.name,
                role: "player", // default role
            },
        ]);

        setIsLoading(false);

        if (profileError) {
            alert("Profile saving failed: " + profileError.message);
            return;
        }

        alert("Registered successfully ✅ Now login!");
        navigate("/login");
    };


    return (
        <div className="min-h-screen bg-gradient-to-br from-[#070A14] via-[#0A0F1C] to-[#0D1117] text-white flex items-center justify-center px-4 relative overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    animate={{
                        x: [0, -100, 0],
                        y: [0, 100, 0],
                    }}
                    transition={{
                        duration: 22,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="absolute -top-40 -right-40 w-80 h-80 bg-green-500/10 rounded-full blur-3xl"
                />
                <motion.div
                    animate={{
                        x: [0, 100, 0],
                        y: [0, -100, 0],
                    }}
                    transition={{
                        duration: 18,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="absolute -bottom-40 -left-40 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"
                />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative w-full max-w-md"
            >
                {/* Main card */}
                <div className="glass rounded-3xl p-8 shadow-2xl border border-white/20">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-center mb-8"
                    >
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-green-500 to-blue-600 mb-4 pulse-glow">
                            <i className="fas fa-user-plus text-white text-2xl"></i>
                        </div>
                        <h1 className="text-2xl font-bold gradient-text mb-2">Create Account</h1>
                        <p className="text-white/60 text-sm">Join SportVision AI and start improving</p>
                    </motion.div>

                    <form onSubmit={onSubmit} className="space-y-5">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 }}
                        >
                            <label className="block text-sm font-medium text-white/80 mb-2">
                                Full Name
                            </label>
                            <div className="relative">
                                <input
                                    type="text"
                                    value={form.name}
                                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                                    placeholder="Enter your full name"
                                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40 focus:border-blue-400 focus:bg-white/10 focus:outline-none transition-all duration-300"
                                    required
                                />
                                <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                                    <i className="fas fa-user text-white/30"></i>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 }}
                        >
                            <label className="block text-sm font-medium text-white/80 mb-2">
                                Email Address
                            </label>
                            <div className="relative">
                                <input
                                    type="email"
                                    value={form.email}
                                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                                    placeholder="Enter your email"
                                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40 focus:border-blue-400 focus:bg-white/10 focus:outline-none transition-all duration-300"
                                    required
                                />
                                <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                                    <i className="fas fa-envelope text-white/30"></i>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5 }}
                        >
                            <label className="block text-sm font-medium text-white/80 mb-2">
                                Password
                            </label>
                            <div className="relative">
                                <input
                                    type="password"
                                    value={form.password}
                                    onChange={(e) => setForm({ ...form, password: e.target.value })}
                                    placeholder="••••••••"
                                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40 focus:border-blue-400 focus:bg-white/10 focus:outline-none transition-all duration-300"
                                    required
                                />
                                <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                                    <i className="fas fa-lock text-white/30"></i>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.6 }}
                        >
                            <label className="block text-sm font-medium text-white/80 mb-2">
                                Confirm Password
                            </label>
                            <div className="relative">
                                <input
                                    type="password"
                                    value={form.confirmPassword}
                                    onChange={(e) => setForm({ ...form, confirmPassword: e.target.value })}
                                    placeholder="••••••••"
                                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40 focus:border-blue-400 focus:bg-white/10 focus:outline-none transition-all duration-300"
                                    required
                                />
                                <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                                    <i className="fas fa-shield-alt text-white/30"></i>
                                </div>
                            </div>
                        </motion.div>

                        <motion.button
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7 }}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            type="submit"
                            disabled={isLoading}
                            className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-green-500 to-blue-600 text-white font-semibold hover:from-green-600 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-900 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 shadow-lg hover:shadow-xl"
                        >
                            {isLoading ? (
                                <div className="flex items-center justify-center">
                                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                                    Creating account...
                                </div>
                            ) : (
                                "Create Account"
                            )}
                        </motion.button>
                    </form>

                    {/* Footer */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                        className="mt-8 text-center space-y-4"
                    >
                        <p className="text-sm text-white/60">
                            Already have an account?{" "}
                            <Link
                                to="/login"
                                className="text-blue-400 hover:text-blue-300 font-medium transition-colors"
                            >
                                Sign in
                            </Link>
                        </p>

                        <Link
                            to="/"
                            className="inline-flex items-center text-xs text-white/50 hover:text-white/70 transition-colors"
                        >
                            <span className="mr-1">←</span>
                            Back to Home
                        </Link>
                    </motion.div>
                </div>

                {/* Decorative elements */}
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.9, duration: 0.5 }}
                    className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-r from-green-400 to-blue-500 rounded-full blur-sm opacity-60"
                />
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.1, duration: 0.5 }}
                    className="absolute -bottom-4 -right-4 w-6 h-6 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-sm opacity-60"
                />
            </motion.div>
        </div>
    );
}
