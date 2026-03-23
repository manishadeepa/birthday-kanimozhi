'use client';

import { useEffect, useState } from 'react';
import FloatingParticles from './FloatingParticles';
import CandleEffect from './CandleEffect';
import TypewriterMessage from './TypewriterMessage';
import LoveCardsGrid from './LoveCardsGrid';
import BirthdayCake from './BirthdayCake';

const FRIEND_NAME = 'Domer';

const BirthdayPage = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Load Google Fonts
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;600;700&family=Lora:ital,wght@0,400;0,500;1,400&family=Playfair+Display:ital,wght@0,400;0,700;1,400&display=swap';
    link.rel = 'stylesheet';
    document.head?.appendChild(link);
  }, []);

  if (!mounted) return null;

  return (
    <div
      className="min-h-screen"
      style={{ background: 'linear-gradient(180deg, #0F172A 0%, #0D1B2A 40%, #0F172A 100%)' }}
    >
      {/* ─── HERO SECTION ─── */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 py-20">
        {/* Ambient background glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 80% 60% at 50% 40%, rgba(245,158,11,0.12) 0%, transparent 70%)',
            animation: 'warm-glow-bg 4s ease-in-out infinite',
          }}
        />

        {/* Floating particles */}
        <FloatingParticles />

        {/* Stars background */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {Array.from({ length: 60 })?.map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-amber-200"
              style={{
                width: `${1 + Math.random() * 2}px`,
                height: `${1 + Math.random() * 2}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                opacity: 0.3 + Math.random() * 0.5,
                animation: `twinkle ${2 + Math.random() * 3}s ease-in-out ${Math.random() * 3}s infinite`,
              }}
            />
          ))}
        </div>

        {/* Hero content */}
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          {/* Pre-title */}
          <p
            className="font-sans text-amber-400/80 text-sm md:text-base tracking-[0.3em] uppercase mb-6"
            style={{ letterSpacing: '0.3em' }}
          >
            ✨ Today is your day ✨
          </p>

          {/* Name */}
          <h1
            className="font-cursive mb-4"
            style={{
              fontFamily: "'Dancing Script', cursive",
              fontSize: 'clamp(4rem, 12vw, 9rem)',
              lineHeight: 1.1,
              background: 'linear-gradient(135deg, #F59E0B 0%, #FCD34D 40%, #FB923C 70%, #FBBF24 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              animation: 'text-glow 2.5s ease-in-out infinite',
              filter: 'drop-shadow(0 0 30px rgba(245,158,11,0.4))',
            }}
          >
            {FRIEND_NAME}
          </h1>

          {/* Tagline */}
          <p
            className="font-serif text-xl md:text-2xl lg:text-3xl text-amber-100/90 mb-4 italic"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            "Today the world is brighter because you're in it."
          </p>

          {/* Subtitle */}
          <p className="font-sans text-amber-400/70 text-base md:text-lg mt-2">
            🎂 Happy Birthday, my dearest friend 🎂
          </p>

          {/* Candle effect */}
          <CandleEffect />

          {/* Scroll hint */}
          <div className="mt-16 flex flex-col items-center gap-2 animate-bounce">
            <p className="text-amber-400/50 text-xs font-sans tracking-widest uppercase">Scroll to explore</p>
            <div className="w-px h-8 bg-gradient-to-b from-amber-400/50 to-transparent" />
          </div>
        </div>
      </section>
      {/* ─── MESSAGE SECTION ─── */}
      <section className="relative py-24 px-6 overflow-hidden">
        {/* Section glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(245,158,11,0.07) 0%, transparent 70%)',
          }}
        />

        <div className="max-w-4xl mx-auto relative z-10">
          {/* Section header */}
          <div className="text-center mb-14">
            <span className="text-3xl mb-4 block">💌</span>
            <h2
              className="font-cursive text-4xl md:text-5xl mb-3"
              style={{
                fontFamily: "'Dancing Script', cursive",
                background: 'linear-gradient(135deg, #F59E0B, #FCD34D)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              A Letter From My Heart
            </h2>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-amber-400/60 to-transparent mx-auto" />
          </div>

          {/* Letter card */}
          <div
            className="relative p-8 md:p-12 rounded-3xl border border-amber-500/20"
            style={{
              background: 'rgba(30, 41, 59, 0.5)',
              backdropFilter: 'blur(12px)',
              boxShadow: '0 0 60px rgba(245,158,11,0.08), inset 0 1px 0 rgba(245,158,11,0.1)',
            }}
          >
            {/* Decorative quote marks */}
            <div
              className="absolute top-6 left-8 text-6xl text-amber-400/20 font-serif leading-none select-none"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              "
            </div>
            <div
              className="absolute bottom-6 right-8 text-6xl text-amber-400/20 font-serif leading-none select-none rotate-180"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              "
            </div>

            <div className="relative z-10 pt-4">
              <TypewriterMessage />
            </div>

            {/* Signature */}
            <div className="mt-8 text-right">
              <p
                className="font-cursive text-2xl text-amber-400/80"
                style={{ fontFamily: "'Dancing Script', cursive" }}
              >
                — With all my love 💛
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* ─── LOVE CARDS SECTION ─── */}
      <section className="relative py-24 px-6 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 70% 50% at 50% 50%, rgba(251,146,60,0.06) 0%, transparent 70%)',
          }}
        />

        <div className="max-w-5xl mx-auto relative z-10">
          {/* Section header */}
          <div className="text-center mb-14">
            <span className="text-3xl mb-4 block">🌟</span>
            <h2
              className="font-cursive text-4xl md:text-5xl mb-3"
              style={{
                fontFamily: "'Dancing Script', cursive",
                background: 'linear-gradient(135deg, #F59E0B, #FCD34D)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Things I Love About You
            </h2>
            <p className="text-amber-100/50 font-sans text-sm mt-2">Hover to feel the warmth ✨</p>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-amber-400/60 to-transparent mx-auto mt-4" />
          </div>

          <LoveCardsGrid />
        </div>
      </section>
      {/* ─── BIRTHDAY CAKE SECTION ─── */}
      <section className="relative py-24 px-6 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(245,158,11,0.1) 0%, transparent 70%)',
          }}
        />

        <div className="max-w-3xl mx-auto relative z-10">
          {/* Section header */}
          <div className="text-center mb-14">
            <span className="text-3xl mb-4 block">🎂</span>
            <h2
              className="font-cursive text-4xl md:text-5xl mb-3"
              style={{
                fontFamily: "'Dancing Script', cursive",
                background: 'linear-gradient(135deg, #F59E0B, #FCD34D)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Make a Wish
            </h2>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-amber-400/60 to-transparent mx-auto" />
          </div>

          <BirthdayCake />
        </div>
      </section>
      {/* ─── CLOSING OUTRO ─── */}
      <section
        className="relative py-32 px-6 overflow-hidden"
        style={{
          background: 'linear-gradient(180deg, #0F172A 0%, #0D1520 50%, #0F172A 100%)',
        }}
      >
        {/* Large ambient glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 80% 70% at 50% 50%, rgba(245,158,11,0.15) 0%, rgba(251,146,60,0.08) 40%, transparent 70%)',
            animation: 'warm-glow-bg 4s ease-in-out infinite',
          }}
        />

        {/* Decorative stars */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {Array.from({ length: 30 })?.map((_, i) => (
            <div
              key={i}
              className="absolute text-amber-300"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                fontSize: `${8 + Math.random() * 16}px`,
                opacity: 0.2 + Math.random() * 0.4,
                animation: `twinkle ${2 + Math.random() * 3}s ease-in-out ${Math.random() * 3}s infinite`,
              }}
            >
              ✦
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto relative z-10 text-center">
          {/* Decorative line */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent to-amber-400/40" />
            <span className="text-amber-400 text-2xl">✦</span>
            <div className="flex-1 h-px bg-gradient-to-l from-transparent to-amber-400/40" />
          </div>

          {/* Main closing message */}
          <h2
            className="font-cursive mb-6"
            style={{
              fontFamily: "'Dancing Script', cursive",
              fontSize: 'clamp(2.5rem, 7vw, 5.5rem)',
              lineHeight: 1.2,
              background: 'linear-gradient(135deg, #F59E0B 0%, #FCD34D 40%, #FB923C 70%, #FBBF24 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              animation: 'text-glow 2.5s ease-in-out infinite',
              filter: 'drop-shadow(0 0 20px rgba(245,158,11,0.3))',
            }}
          >
            Happy Birthday, {FRIEND_NAME} 🎂
          </h2>

          <p
            className="font-serif text-xl md:text-2xl text-amber-100/80 italic mb-8"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            — With all my love —
          </p>

          <p className="font-sans text-amber-100/60 text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-12">
            May this year bring you everything your heart desires. May you be surrounded by warmth, laughter, and all the people who love you. You deserve every beautiful thing life has to offer.
          </p>

          {/* Emoji row */}
          <div className="flex items-center justify-center gap-4 text-3xl mb-12">
            {['🌟', '🎂', '💛', '✨', '🎉', '💛', '✨', '🎂', '🌟']?.map((e, i) => (
              <span
                key={i}
                style={{
                  animation: `float-stars ${2 + i * 0.2}s ease-in-out ${i * 0.15}s infinite`,
                  display: 'inline-block',
                }}
              >
                {e}
              </span>
            ))}
          </div>

          {/* Bottom decorative line */}
          <div className="flex items-center justify-center gap-4">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent to-amber-400/40" />
            <span className="text-amber-400 text-2xl">✦</span>
            <div className="flex-1 h-px bg-gradient-to-l from-transparent to-amber-400/40" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default BirthdayPage;
