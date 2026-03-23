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
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;600;700&family=Lora:ital,wght@0,400;0,500;1,400&family=Playfair+Display:ital,wght@0,400;0,700;1,400&display=swap';
    link.rel = 'stylesheet';
    document.head?.appendChild(link);

    // Fix scroll on mount
    document.body.style.overflow = 'auto';
    document.documentElement.style.overflow = 'auto';

    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, []);

  if (!mounted) {
    return (
      <div
        style={{
          minHeight: '100vh',
          background: 'linear-gradient(180deg, #0F172A 0%, #0D1B2A 40%, #0F172A 100%)',
        }}
      />
    );
  }

  return (
    <div
      style={{
        background: 'linear-gradient(180deg, #0F172A 0%, #0D1B2A 40%, #0F172A 100%)',
        overflowX: 'hidden',
        overflowY: 'visible',
        position: 'relative',
      }}
    >
      {/* ─── HERO SECTION ─── */}
      <section
        style={{
          position: 'relative',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '5rem 1.5rem',
        }}
      >
        {/* Ambient background glow */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            pointerEvents: 'none',
            background: 'radial-gradient(ellipse 80% 60% at 50% 40%, rgba(245,158,11,0.12) 0%, transparent 70%)',
            animation: 'warm-glow-bg 4s ease-in-out infinite',
          }}
        />

        <FloatingParticles />

        {/* Stars */}
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}>
          {Array.from({ length: 60 }).map((_, i) => (
            <div
              key={i}
              style={{
                position: 'absolute',
                borderRadius: '50%',
                backgroundColor: '#FDE68A',
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
        <div style={{ position: 'relative', zIndex: 10, textAlign: 'center', maxWidth: '56rem', margin: '0 auto' }}>
          <p
            style={{
              color: 'rgba(251,191,36,0.8)',
              fontSize: '0.875rem',
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              marginBottom: '1.5rem',
              fontFamily: 'sans-serif',
            }}
          >
            ✨ Today is your day ✨
          </p>

          <h1
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
              marginBottom: '1rem',
            }}
          >
            {FRIEND_NAME}
          </h1>

          <p
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(1.25rem, 3vw, 1.875rem)',
              color: 'rgba(255,251,235,0.9)',
              fontStyle: 'italic',
              marginBottom: '1rem',
            }}
          >
            "Today the world is brighter because you're in it."
          </p>

          <p style={{ color: 'rgba(251,191,36,0.7)', fontSize: '1.125rem', marginTop: '0.5rem', fontFamily: 'sans-serif' }}>
            🎂 Happy Birthday, my dearest friend 🎂
          </p>

          <CandleEffect />

          <div
            style={{
              marginTop: '4rem',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '0.5rem',
              animation: 'bounce 1s infinite',
            }}
          >
            <p style={{ color: 'rgba(251,191,36,0.5)', fontSize: '0.75rem', letterSpacing: '0.2em', textTransform: 'uppercase', fontFamily: 'sans-serif' }}>
              Scroll to explore
            </p>
            <div
              style={{
                width: '1px',
                height: '2rem',
                background: 'linear-gradient(to bottom, rgba(251,191,36,0.5), transparent)',
              }}
            />
          </div>
        </div>
      </section>

      {/* ─── MESSAGE SECTION ─── */}
      <section style={{ position: 'relative', padding: '6rem 1.5rem' }}>
        <div
          style={{
            position: 'absolute',
            inset: 0,
            pointerEvents: 'none',
            background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(245,158,11,0.07) 0%, transparent 70%)',
          }}
        />

        <div style={{ maxWidth: '56rem', margin: '0 auto', position: 'relative', zIndex: 10 }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span style={{ fontSize: '1.875rem', display: 'block', marginBottom: '1rem' }}>💌</span>
            <h2
              style={{
                fontFamily: "'Dancing Script', cursive",
                fontSize: 'clamp(2rem, 5vw, 3rem)',
                background: 'linear-gradient(135deg, #F59E0B, #FCD34D)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                marginBottom: '0.75rem',
              }}
            >
              A Letter From My Heart
            </h2>
            <div style={{ width: '6rem', height: '1px', background: 'linear-gradient(to right, transparent, rgba(251,191,36,0.6), transparent)', margin: '0 auto' }} />
          </div>

          <div
            style={{
              position: 'relative',
              padding: '3rem',
              borderRadius: '1.5rem',
              border: '1px solid rgba(245,158,11,0.2)',
              background: 'rgba(30, 41, 59, 0.5)',
              backdropFilter: 'blur(12px)',
              boxShadow: '0 0 60px rgba(245,158,11,0.08), inset 0 1px 0 rgba(245,158,11,0.1)',
            }}
          >
            <div
              style={{
                position: 'absolute', top: '1.5rem', left: '2rem',
                fontSize: '3.75rem', color: 'rgba(251,191,36,0.2)',
                fontFamily: "'Playfair Display', serif", lineHeight: 1, userSelect: 'none',
              }}
            >
              "
            </div>
            <div
              style={{
                position: 'absolute', bottom: '1.5rem', right: '2rem',
                fontSize: '3.75rem', color: 'rgba(251,191,36,0.2)',
                fontFamily: "'Playfair Display', serif", lineHeight: 1,
                userSelect: 'none', transform: 'rotate(180deg)',
              }}
            >
              "
            </div>

            <div style={{ position: 'relative', zIndex: 10, paddingTop: '1rem' }}>
              <TypewriterMessage />
            </div>

            <div style={{ marginTop: '2rem', textAlign: 'right' }}>
              <p style={{ fontFamily: "'Dancing Script', cursive", fontSize: '1.5rem', color: 'rgba(251,191,36,0.8)' }}>
                — With all my love 💛
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── LOVE CARDS SECTION ─── */}
      <section style={{ position: 'relative', padding: '6rem 1.5rem' }}>
        <div
          style={{
            position: 'absolute', inset: 0, pointerEvents: 'none',
            background: 'radial-gradient(ellipse 70% 50% at 50% 50%, rgba(251,146,60,0.06) 0%, transparent 70%)',
          }}
        />

        <div style={{ maxWidth: '72rem', margin: '0 auto', position: 'relative', zIndex: 10 }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span style={{ fontSize: '1.875rem', display: 'block', marginBottom: '1rem' }}>🌟</span>
            <h2
              style={{
                fontFamily: "'Dancing Script', cursive",
                fontSize: 'clamp(2rem, 5vw, 3rem)',
                background: 'linear-gradient(135deg, #F59E0B, #FCD34D)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                marginBottom: '0.75rem',
              }}
            >
              Things I Love About You
            </h2>
            <p style={{ color: 'rgba(255,251,235,0.5)', fontSize: '0.875rem', marginTop: '0.5rem', fontFamily: 'sans-serif' }}>
              Hover to feel the warmth ✨
            </p>
            <div style={{ width: '6rem', height: '1px', background: 'linear-gradient(to right, transparent, rgba(251,191,36,0.6), transparent)', margin: '1rem auto 0' }} />
          </div>

          <LoveCardsGrid />
        </div>
      </section>

      {/* ─── BIRTHDAY CAKE SECTION ─── */}
      <section style={{ position: 'relative', padding: '6rem 1.5rem' }}>
        <div
          style={{
            position: 'absolute', inset: 0, pointerEvents: 'none',
            background: 'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(245,158,11,0.1) 0%, transparent 70%)',
          }}
        />

        <div style={{ maxWidth: '48rem', margin: '0 auto', position: 'relative', zIndex: 10 }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span style={{ fontSize: '1.875rem', display: 'block', marginBottom: '1rem' }}>🎂</span>
            <h2
              style={{
                fontFamily: "'Dancing Script', cursive",
                fontSize: 'clamp(2rem, 5vw, 3rem)',
                background: 'linear-gradient(135deg, #F59E0B, #FCD34D)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                marginBottom: '0.75rem',
              }}
            >
              Make a Wish
            </h2>
            <div style={{ width: '6rem', height: '1px', background: 'linear-gradient(to right, transparent, rgba(251,191,36,0.6), transparent)', margin: '0 auto' }} />
          </div>

          <BirthdayCake />
        </div>
      </section>

      {/* ─── CLOSING OUTRO ─── */}
      <section
        style={{
          position: 'relative',
          padding: '8rem 1.5rem',
          background: 'linear-gradient(180deg, #0F172A 0%, #0D1520 50%, #0F172A 100%)',
        }}
      >
        <div
          style={{
            position: 'absolute', inset: 0, pointerEvents: 'none',
            background: 'radial-gradient(ellipse 80% 70% at 50% 50%, rgba(245,158,11,0.15) 0%, rgba(251,146,60,0.08) 40%, transparent 70%)',
            animation: 'warm-glow-bg 4s ease-in-out infinite',
          }}
        />

        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}>
          {Array.from({ length: 30 }).map((_, i) => (
            <div
              key={i}
              style={{
                position: 'absolute',
                color: '#FCD34D',
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

        <div style={{ maxWidth: '56rem', margin: '0 auto', position: 'relative', zIndex: 10, textAlign: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', marginBottom: '3rem' }}>
            <div style={{ flex: 1, height: '1px', background: 'linear-gradient(to right, transparent, rgba(251,191,36,0.4))' }} />
            <span style={{ color: '#F59E0B', fontSize: '1.5rem' }}>✦</span>
            <div style={{ flex: 1, height: '1px', background: 'linear-gradient(to left, transparent, rgba(251,191,36,0.4))' }} />
          </div>

          <h2
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
              marginBottom: '1.5rem',
            }}
          >
            Happy Birthday, {FRIEND_NAME} 🎂
          </h2>

          <p
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(1.25rem, 3vw, 1.5rem)',
              color: 'rgba(255,251,235,0.8)',
              fontStyle: 'italic',
              marginBottom: '2rem',
            }}
          >
            — With all my love —
          </p>

          <p
            style={{
              fontFamily: 'sans-serif',
              color: 'rgba(255,251,235,0.6)',
              fontSize: '1.125rem',
              maxWidth: '42rem',
              margin: '0 auto 3rem',
              lineHeight: 1.8,
            }}
          >
            May this year bring you everything your heart desires. May you be surrounded by warmth, laughter, and all the people who love you. You deserve every beautiful thing life has to offer.
          </p>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', fontSize: '1.875rem', marginBottom: '3rem' }}>
            {['🌟', '🎂', '💛', '✨', '🎉', '💛', '✨', '🎂', '🌟'].map((e, i) => (
              <span
                key={i}
                style={{
                  display: 'inline-block',
                  animation: `float-stars ${2 + i * 0.2}s ease-in-out ${i * 0.15}s infinite`,
                }}
              >
                {e}
              </span>
            ))}
          </div>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
            <div style={{ flex: 1, height: '1px', background: 'linear-gradient(to right, transparent, rgba(251,191,36,0.4))' }} />
            <span style={{ color: '#F59E0B', fontSize: '1.5rem' }}>✦</span>
            <div style={{ flex: 1, height: '1px', background: 'linear-gradient(to left, transparent, rgba(251,191,36,0.4))' }} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default BirthdayPage;