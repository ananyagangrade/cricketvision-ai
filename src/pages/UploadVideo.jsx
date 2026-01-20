
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

const MAX_SIZE_MB = 800;

export default function UploadVideo() {
    const navigate = useNavigate();
    const fileRef = useRef(null);

    const [file, setFile] = useState(null);
    const [progress, setProgress] = useState(0);
    const [status, setStatus] = useState("idle");
    const [error, setError] = useState("");
    const [dragActive, setDragActive] = useState(false);

    const pickFile = () => fileRef.current?.click();

    const validateFile = (f) => {
        if (!f) return "Please select a video file.";
        if (!f.type.startsWith("video/")) return "Only video files are allowed.";
        const sizeMB = f.size / (1024 * 1024);
        if (sizeMB > MAX_SIZE_MB) return `File too large. Max ${MAX_SIZE_MB}MB allowed.`;
        return "";
    };

    const handleFile = (f) => {
        setError("");
        setProgress(0);
        setStatus("idle");

        const msg = validateFile(f);
        if (msg) {
            setFile(null);
            setError(msg);
            return;
        }
        setFile(f);
    };

    const onFileChange = (e) => {
        const f = e.target.files?.[0];
        handleFile(f);
    };

    const handleDrag = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (e.type === "dragenter" || e.type === "dragover") {
            setDragActive(true);
        } else if (e.type === "dragleave") {
            setDragActive(false);
        }
    };

    const handleDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);
        
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            handleFile(e.dataTransfer.files[0]);
        }
    };

    const startUpload = () => {
        if (!file) {
            setError("Select a video first.");
            return;
        }

        setError("");
        setStatus("uploading");
        setProgress(0);

        let p = 0;
        const id = setInterval(() => {
            p += Math.floor(Math.random() * 10) + 6;
            if (p >= 100) {
                p = 100;
                clearInterval(id);
                setStatus("done");
                setTimeout(() => navigate("/dashboard"), 600);
            }
            setProgress(p);
        }, 180);
    };

    const reset = () => {
        setFile(null);
        setProgress(0);
        setStatus("idle");
        setError("");
        if (fileRef.current) fileRef.current.value = "";
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#070A14] via-[#0A0F1C] to-[#0D1117] text-white px-4 py-10 relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    animate={{ 
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.1, 0.3]
                    }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"
                />
                <motion.div
                    animate={{ 
                        scale: [1.2, 1, 1.2],
                        opacity: [0.1, 0.3, 0.1]
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"
                />
            </div>

            <div className="mx-auto max-w-4xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="glass rounded-3xl p-8 border border-white/20 shadow-2xl"
                >
                    {/* Header */}
                    <div className="flex items-center justify-between gap-4 flex-wrap mb-8">
                        <div>
                            <h1 className="text-3xl font-bold gradient-text mb-2">Upload Sports Video</h1>
                            <p className="text-white/70 text-sm">
                                Upload any training or match video. Our AI will analyze it and provide insights for any sport.
                            </p>
                        </div>

                        <div className="flex gap-3">
                            <Link
                                to="/"
                                className="px-4 py-2 rounded-xl glass border border-white/20 hover:bg-white/10 transition-all duration-300 text-sm flex items-center gap-2"
                            >
                                <span>🏠</span>
                                Home
                            </Link>
                            <Link
                                to="/dashboard"
                                className="px-4 py-2 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition-all duration-300 text-sm font-semibold flex items-center gap-2"
                            >
                                <span>📊</span>
                                Dashboard
                            </Link>
                        </div>
                    </div>

                    {/* Upload Box */}
                    <div 
                        className={`glass rounded-3xl p-8 border-2 transition-all duration-300 ${
                            dragActive 
                                ? 'border-blue-400 bg-blue-500/10' 
                                : 'border-white/20 hover:border-white/30'
                        }`}
                        onDragEnter={handleDrag}
                        onDragLeave={handleDrag}
                        onDragOver={handleDrag}
                        onDrop={handleDrop}
                    >
                        <input
                            ref={fileRef}
                            type="file"
                            accept="video/*"
                            className="hidden"
                            onChange={onFileChange}
                        />

                        {/* Upload Area */}
                        <div className="text-center mb-6">
                            <motion.div
                                animate={{ 
                                    scale: dragActive ? 1.1 : 1,
                                    rotate: dragActive ? 5 : 0
                                }}
                                className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 mb-4"
                            >
                                <i className="fas fa-cloud-upload-alt text-white text-3xl"></i>
                            </motion.div>
                            
                            <h3 className="text-xl font-semibold mb-2">
                                {dragActive ? "Drop your video here!" : "Select or drag a video file"}
                            </h3>
                            
                            <p className="text-white/60 text-sm mb-4">
                                Supported: MP4, MOV, MKV • Max {MAX_SIZE_MB}MB
                            </p>

                            {file ? (
                                <motion.div 
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="glass rounded-2xl p-4 border border-white/20 mb-4 inline-block"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center">
                                            <i className="fas fa-file-video text-white"></i>
                                        </div>
                                        <div className="text-left">
                                            <p className="font-semibold text-sm">{file.name}</p>
                                            <p className="text-white/60 text-xs">
                                                {(file.size / (1024 * 1024)).toFixed(2)} MB
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            ) : (
                                <div className="text-white/50 text-sm mb-4">
                                    No file selected yet
                                </div>
                            )}
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-3 justify-center flex-wrap">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={pickFile}
                                disabled={status === "uploading"}
                                className="px-6 py-3 rounded-2xl glass border border-white/20 hover:bg-white/10 transition-all duration-300 disabled:opacity-50 flex items-center gap-2"
                            >
                                <span>📁</span>
                                Choose File
                            </motion.button>

                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={startUpload}
                                disabled={status === "uploading" || !file}
                                className="px-6 py-3 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 font-semibold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                            >
                                {status === "uploading" ? (
                                    <>
                                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                        Uploading...
                                    </>
                                ) : status === "done" ? (
                                    <>
                                        <span>✓</span>
                                        Uploaded
                                    </>
                                ) : (
                                    <>
                                        <span>⬆️</span>
                                        Start Upload
                                    </>
                                )}
                            </motion.button>

                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={reset}
                                disabled={status === "uploading"}
                                className="px-6 py-3 rounded-2xl glass border border-white/20 hover:bg-white/10 transition-all duration-300 disabled:opacity-50 flex items-center gap-2"
                            >
                                <span>🔄</span>
                                Reset
                            </motion.button>
                        </div>

                        {/* Error */}
                        {error && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="mt-6 text-sm text-red-300 border border-red-500/30 bg-red-500/10 p-4 rounded-2xl flex items-center gap-3"
                            >
                                <span>⚠️</span>
                                {error}
                            </motion.div>
                        )}

                        {/* Progress */}
                        <div className="mt-6">
                            <div className="flex items-center justify-between text-sm text-white/60 mb-3">
                                <span className="flex items-center gap-2">
                                    <span>📊</span>
                                    Upload Progress
                                </span>
                                <span className="font-mono">{progress}%</span>
                            </div>

                            <div className="h-3 rounded-full bg-white/10 overflow-hidden">
                                <motion.div
                                    className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full relative overflow-hidden"
                                    initial={{ width: 0 }}
                                    animate={{ width: `${progress}%` }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <motion.div
                                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                                        animate={{ x: ["-100%", "100%"] }}
                                        transition={{ 
                                            duration: 1.5, 
                                            repeat: status === "uploading" ? Infinity : 0,
                                            ease: "linear"
                                        }}
                                    />
                                </motion.div>
                            </div>

                            <div className="mt-3 text-xs text-white/50 flex items-center gap-2">
                                {status === "idle" && (
                                    <>
                                        <span>🚀</span>
                                        Ready to upload your video.
                                    </>
                                )}
                                {status === "uploading" && (
                                    <>
                                        <span>⏳</span>
                                        Uploading... Please don't refresh.
                                    </>
                                )}
                                {status === "done" && (
                                    <>
                                        <span>✨</span>
                                        Upload complete! Redirecting to dashboard...
                                    </>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Process Steps */}
                    <div className="mt-8 grid md:grid-cols-3 gap-4">
                        {[
                            { 
                                step: "01", 
                                title: "Upload Video", 
                                desc: "Upload any sports training or match video",
                                icon: "📤",
                                color: "from-blue-500 to-cyan-500"
                            },
                            { 
                                step: "02", 
                                title: "AI Processing", 
                                desc: "AI identifies key actions and important moments",
                                icon: "🤖",
                                color: "from-purple-500 to-pink-500"
                            },
                            { 
                                step: "03", 
                                title: "Get Insights", 
                                desc: "AI insights + feedback + dashboard",
                                icon: "💡",
                                color: "from-green-500 to-emerald-500"
                            },
                        ].map((x, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                whileHover={{ scale: 1.05, y: -5 }}
                                className="glass rounded-2xl p-6 border border-white/20 hover:border-white/30 transition-all duration-300 group cursor-pointer"
                            >
                                <div className="flex items-center gap-4 mb-3">
                                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${x.color} flex items-center justify-center text-xl group-hover:scale-110 transition-transform duration-300`}>
                                        {x.icon}
                                    </div>
                                    <div className="text-xs text-white/50 font-mono">
                                        STEP {x.step}
                                    </div>
                                </div>
                                <h3 className="font-semibold mb-2">{x.title}</h3>
                                <p className="text-sm text-white/70">{x.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
