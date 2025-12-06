import React, { useState, useEffect } from "react";
import {
  Book,
  Music,
  Headphones,
  Library,
  ListMusic,
  Award,
  Users,
  Heart,
} from "lucide-react";

export default function ComingSoon() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const features = [
    { icon: Book, title: "Katha", desc: "Sacred stories & wisdom" },
    { icon: Music, title: "Kirtan", desc: "Devotional chanting" },
    { icon: Heart, title: "Bhajan", desc: "Spiritual hymns" },
    { icon: Headphones, title: "Read & Hear", desc: "Immersive experience" },
    { icon: Library, title: "Library", desc: "Your collection" },
    { icon: ListMusic, title: "Playlists", desc: "Curated journeys" },
    { icon: Award, title: "Rewards", desc: "Spiritual milestones" },
    { icon: Users, title: "Community", desc: "Connect & share" },
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      {/* Refined Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-3xl transition-all duration-700"
          style={{
            top: "15%",
            left: `${15 + mousePosition.x * 0.015}%`,
          }}
        />
        <div
          className="absolute w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-3xl transition-all duration-700"
          style={{
            bottom: "15%",
            right: `${15 + mousePosition.y * 0.015}%`,
          }}
        />

        {/* Subtle grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:100px_100px]" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Hero Section */}
        <main className="flex-1 flex items-center justify-center px-6 py-20">
          <div className="max-w-6xl w-full text-center space-y-16">
            {/* Logo/Title */}
            <div className="space-y-8">
              <div className="inline-block">
                <h1
                  className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-wider bg-gradient-to-r from-purple-300 via-pink-200 to-blue-300 bg-clip-text text-transparent"
                  style={{ fontFamily: "'El Messiri', sans-serif" }}
                >
                  KATHĀ SINDHU
                </h1>

                {/* NEW LINE */}
                <p
                  className="text-xl md:text-2xl text-purple-200/80 tracking-wide mt-4"
                  style={{ fontFamily: "'El Messiri', sans-serif" }}
                >
                  — By HH Radhanath Swami
                </p>

                <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-purple-400/50 to-transparent mt-6" />
              </div>

              {/* Coming Soon Badge */}
              <div className="flex justify-center">
                <div className="relative inline-block group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25 group-hover:opacity-40 transition duration-500" />
                  <div className="relative px-8 py-3 bg-slate-900/90 backdrop-blur-sm rounded-lg border border-purple-400/40">
                    <span className="text-lg md:text-xl font-semibold tracking-wider text-purple-200">
                      COMING SOON
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5 max-w-5xl mx-auto">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    className="group relative"
                    style={{
                      animation: `fadeInUp 0.5s ease-out ${index * 0.08}s both`,
                    }}
                  >
                    <div className="absolute -inset-0.5 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-xl opacity-0 group-hover:opacity-100 blur transition duration-400" />
                    <div className="relative h-full p-5 bg-slate-900/60 backdrop-blur-md rounded-xl border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 hover:transform hover:-translate-y-1">
                      <div className="flex justify-center mb-3">
                        <div className="p-2.5 bg-gradient-to-br from-purple-500/15 to-pink-500/15 rounded-lg border border-purple-400/20 transform group-hover:scale-105 transition-transform duration-300">
                          <Icon
                            className="w-7 h-7 text-purple-300"
                            strokeWidth={1.5}
                          />
                        </div>
                      </div>
                      <h3 className="text-base font-semibold text-purple-100 mb-1.5">
                        {feature.title}
                      </h3>
                      <p className="text-xs text-purple-300/60 leading-relaxed">
                        {feature.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA Section */}
            <div className="pt-8 space-y-8">
              <p className="text-xl md:text-2xl text-purple-200/70 font-light tracking-wide italic">
                Beautiful things unfold slowly…
              </p>

              {/* CLICK → /subscribe */}
              <div className="flex justify-center">
                <a href="/subscribe">
                  <button className="group relative px-16 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold text-lg tracking-wide shadow-lg shadow-purple-900/50 hover:shadow-xl hover:shadow-purple-800/60 transition-all duration-300 hover:scale-105 hover:from-purple-500 hover:to-pink-500">
                    <span className="relative z-10 flex items-center gap-2">
                      Notify Me
                      <span className="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        →
                      </span>
                    </span>
                  </button>
                </a>
              </div>

              <p className="text-purple-300/50 text-sm">
                Join thousands waiting for the spiritual journey
              </p>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="relative py-8 px-6 border-t border-purple-500/10 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-purple-300/50 text-sm">
              © 2025-2026 Kathā Sindhu. All rights reserved.
            </div>
            <div className="flex gap-8">
              <a
                href="https://x.com/radhanathswami"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-300/50 hover:text-purple-300 transition-colors duration-300 text-sm font-medium"
              >
                Twitter
              </a>

              <a
                href="https://www.instagram.com/radhanathswami?igsh=a3ZiN2o4dGtlYnM1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-300/50 hover:text-purple-300 transition-colors duration-300 text-sm font-medium"
              >
                Instagram
              </a>

              <a
                href="https://youtube.com/@radhanathswami?si=i04K3gTXjVTq1_AB"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-300/50 hover:text-purple-300 transition-colors duration-300 text-sm font-medium"
              >
                YouTube
              </a>
            </div>
          </div>
        </footer>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
