import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

const MAX_SIZE_MB = 800; // demo limit (you can change)

export default function UploadVideo() {
    const navigate = useNavigate();
    const fileRef = useRef(null);

    const [file, setFile] = useState(null);
    const [progress, setProgress] = useState(0);
    const [status, setStatus] = useState("idle"); // idle | uploading | done
    const [error, setError] = useState("");

    const pickFile = () => fileRef.current?.click();

    const validateFile = (f) => {
        if (!f) return "Please select a video file.";
        if (!f.type.startsWith("video/")) return "Only video files are allowed.";
        const sizeMB = f.size / (1024 * 1024);
        if (sizeMB > MAX_SIZE_MB) return `File too large. Max ${MAX_SIZE_MB}MB allowed.`;
        return "";
    };

    const onFileChange = (e) => {
        setError("");
        setProgress(0);
        setStatus("idle");

        const f = e.target.files?.[0];
        const msg = validateFile(f);

        if (msg) {
            setFile(null);
            setError(msg);
            return;
        }

        setFile(f);
    };

    const startUpload = () => {
        if (!file) {
            setError("Select a video first.");
            return;
        }

        setError("");
        setStatus("uploading");
        setProgress(0);

        // ✅ Simulated real upload progress (replace later with Supabase upload)
        let p = 0;
        const id = setInterval(() => {
            p += Math.floor(Math.random() * 10) + 6;
            if (p >= 100) {
                p = 100;
                clearInterval(id);
                setStatus("done");

                // After upload complete, redirect to dashboard
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
        <div className="min-h-screen bg-[#070A14] text-white px-4 py-10">
            <div className="mx-auto max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-7"
                >
                    <div className="flex items-center justify-between gap-4 flex-wrap">
                        <div>
                            <p className="text-2xl font-bold">Upload Cricket Video</p>
                            <p className="text-white/70 text-sm mt-1">
                                Upload long-duration training/match video (5–6 hours). The system will split it into clips and generate AI feedback. :contentReference[oaicite:1]{index = 1}
                            </p>
                        </div>

                        <div className="flex gap-2">
                            <Link
                                to="/"
                                className="px-4 py-2 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 transition text-sm"
                            >
                                Home
                            </Link>
                            <Link
                                to="/dashboard"
                                className="px-4 py-2 rounded-xl bg-white text-[#070A14] hover:opacity-90 transition text-sm font-semibold"
                            >
                                Dashboard
                            </Link>
                        </div>
                    </div>

                    {/* Upload Box */}
                    <div className="mt-6 rounded-3xl border border-white/10 bg-[#0B1020] p-6">
                        <input
                            ref={fileRef}
                            type="file"
                            accept="video/*"
                            className="hidden"
                            onChange={onFileChange}
                        />

                        <div className="flex flex-col md:flex-row gap-5 md:items-center md:justify-between">
                            <div>
                                <p className="font-semibold text-white">Select a video file</p>
                                <p className="text-sm text-white/60 mt-1">
                                    Supported: MP4 / MOV / MKV • Max {MAX_SIZE_MB}MB (demo)
                                </p>

                                {file ? (
                                    <div className="mt-3 text-sm text-white/80">
                                        <p>
                                            <span className="text-white/60">File:</span>{" "}
                                            <span className="font-semibold">{file.name}</span>
                                        </p>
                                        <p className="text-white/60">
                                            Size: {(file.size / (1024 * 1024)).toFixed(2)} MB
                                        </p>
                                    </div>
                                ) : (
                                    <p className="mt-3 text-sm text-white/50">
                                        No file selected yet.
                                    </p>
                                )}
                            </div>

                            <div className="flex gap-3 flex-wrap">
                                <button
                                    onClick={pickFile}
                                    className="px-5 py-3 rounded-2xl border border-white/15 bg-white/5 hover:bg-white/10 transition"
                                    disabled={status === "uploading"}
                                >
                                    Choose File
                                </button>

                                <button
                                    onClick={startUpload}
                                    className="px-5 py-3 rounded-2xl bg-white text-[#070A14] font-semibold hover:opacity-90 transition disabled:opacity-50"
                                    disabled={status === "uploading" || !file}
                                >
                                    {status === "uploading"
                                        ? "Uploading..."
                                        : status === "done"
                                            ? "Uploaded ✓"
                                            : "Start Upload"}
                                </button>

                                <button
                                    onClick={reset}
                                    className="px-5 py-3 rounded-2xl border border-white/15 bg-white/5 hover:bg-white/10 transition"
                                    disabled={status === "uploading"}
                                >
                                    Reset
                                </button>
                            </div>
                        </div>

                        {/* Error */}
                        {error && (
                            <div className="mt-4 text-sm text-red-300 border border-red-500/30 bg-red-500/10 p-3 rounded-2xl">
                                {error}
                            </div>
                        )}

                        {/* Progress */}
                        <div className="mt-6">
                            <div className="flex items-center justify-between text-xs text-white/60">
                                <span>Upload Progress</span>
                                <span>{progress}%</span>
                            </div>

                            <div className="mt-2 h-3 rounded-full bg-white/10 overflow-hidden">
                                <motion.div
                                    className="h-full bg-white/70 rounded-full"
                                    initial={{ width: 0 }}
                                    animate={{ width: `${progress}%` }}
                                    transition={{ duration: 0.3 }}
                                />
                            </div>

                            <div className="mt-3 text-xs text-white/50">
                                {status === "idle" && "Ready to upload your video."}
                                {status === "uploading" && "Uploading... Please don’t refresh."}
                                {status === "done" &&
                                    "Upload complete! Redirecting to dashboard..."}
                            </div>
                        </div>
                    </div>

                    {/* Next Steps */}
                    <div className="mt-6 grid md:grid-cols-3 gap-4">
                        {[
                            { t: "Step 1", d: "Upload 5–6 hour cricket video" },
                            { t: "Step 2", d: "Auto split into ball/action clips" },
                            { t: "Step 3", d: "AI analysis + feedback + dashboard" },
                        ].map((x, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.45, delay: i * 0.08 }}
                                className="rounded-2xl border border-white/10 bg-white/5 p-4"
                            >
                                <p className="text-sm font-semibold">{x.t}</p>
                                <p className="mt-1 text-sm text-white/70">{x.d}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
