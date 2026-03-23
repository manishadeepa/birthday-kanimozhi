'use client';

import { useState, useRef } from 'react';

interface ConfettiPiece {
  id: number;
  left: number;
  color: string;
  duration: number;
  delay: number;
  size: number;
  shape: 'circle' | 'rect' | 'star';
}

interface Sparkle {
  id: number;
  left: number;
  top: number;
  size: number;
  delay: number;
}

const CONFETTI_COLORS = ['#F59E0B', '#FCD34D', '#FB923C', '#FEF3C7', '#FBBF24', '#F97316', '#FDE68A'];

const BirthdayCake = () => {
  const [blown, setBlown] = useState(false);
  const [confetti, setConfetti] = useState<ConfettiPiece[]>([]);
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);
  const [wishVisible, setWishVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const handleBlow = () => {
    if (blown || isAnimating) return;
    setIsAnimating(true);

    // Generate confetti
    const pieces: ConfettiPiece[] = Array.from({ length: 60 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      color: CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)],
      duration: 2 + Math.random() * 2,
      delay: Math.random() * 0.8,
      size: 6 + Math.random() * 10,
      shape: (['circle', 'rect', 'star'] as const)[Math.floor(Math.random() * 3)],
    }));
    setConfetti(pieces);

    // Generate sparkles
    const sparks: Sparkle[] = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: 20 + Math.random() * 60,
      top: 10 + Math.random() * 60,
      size: 16 + Math.random() * 24,
      delay: Math.random() * 0.5,
    }));
    setSparkles(sparks);

    setBlown(true);

    setTimeout(() => {
      setWishVisible(true);
    }, 600);

    setTimeout(() => {
      setConfetti([]);
      setSparkles([]);
      setIsAnimating(false);
    }, 4000);
  };

  const candleCount = 5;

  return (
    <div ref={sectionRef} className="relative flex flex-col items-center">
      {/* Confetti */}
      {confetti.map((piece) => (
        <div
          key={piece.id}
          className="fixed pointer-events-none z-50"
          style={{
            left: `${piece.left}%`,
            top: '-20px',
            width: piece.shape === 'rect' ? `${piece.size * 0.6}px` : `${piece.size}px`,
            height: `${piece.size}px`,
            backgroundColor: piece.color,
            borderRadius: piece.shape === 'circle' ? '50%' : piece.shape === 'rect' ? '2px' : '0',
            clipPath: piece.shape === 'star' ? 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)' : undefined,
            animation: `confetti-fall ${piece.duration}s ease-in ${piece.delay}s forwards`,
            boxShadow: `0 0 6px ${piece.color}`,
          }}
        />
      ))}

      {/* Sparkles burst */}
      {sparkles.map((s) => (
        <div
          key={s.id}
          className="absolute pointer-events-none z-30 text-amber-300"
          style={{
            left: `${s.left}%`,
            top: `${s.top}%`,
            fontSize: `${s.size}px`,
            animation: `sparkle-burst 0.8s ease-out ${s.delay}s forwards`,
          }}
        >
          ✨
        </div>
      ))}

      {/* Cake */}
      <div
        className={`relative cursor-pointer select-none transition-transform duration-300 ${!blown ? 'hover:scale-105 active:scale-95' : ''}`}
        onClick={handleBlow}
        title={blown ? '' : 'Click to blow out the candles!'}
      >
        {/* Candles row */}
        <div className="flex items-end justify-center gap-4 mb-1">
          {Array.from({ length: candleCount }).map((_, i) => (
            <div key={i} className="flex flex-col items-center" style={{ animationDelay: `${i * 0.1}s` }}>
              {/* Flame */}
              {!blown && (
                <div className="relative flex flex-col items-center mb-0.5">
                  <div
                    className="absolute w-5 h-8 rounded-full blur-md"
                    style={{
                      background: 'radial-gradient(ellipse, rgba(251,146,60,0.7) 0%, transparent 70%)',
                      top: '-4px',
                      animation: `candle-flicker ${1 + i * 0.15}s ease-in-out infinite`,
                      animationDelay: `${i * 0.1}s`,
                    }}
                  />
                  <div
                    style={{
                      width: '10px',
                      height: '16px',
                      background: 'linear-gradient(to top, #F59E0B, #FCD34D, #FFFBEB)',
                      borderRadius: '50% 50% 30% 30% / 60% 60% 40% 40%',
                      animation: `candle-flicker ${1 + i * 0.15}s ease-in-out infinite`,
                      animationDelay: `${i * 0.1}s`,
                      boxShadow: '0 0 8px rgba(245,158,11,0.9), 0 0 16px rgba(251,146,60,0.6)',
                    }}
                  />
                  <div className="w-px h-2 bg-amber-900" />
                </div>
              )}
              {blown && (
                <div className="w-px h-2 bg-amber-900 mb-0.5 opacity-50" />
              )}
              {/* Candle body */}
              <div
                className="rounded-sm"
                style={{
                  width: '10px',
                  height: `${30 + i * 5}px`,
                  background: `linear-gradient(to right, rgba(245,158,11,0.4), rgba(254,243,199,0.9), rgba(245,158,11,0.4))`,
                  boxShadow: blown ? 'none' : '0 0 8px rgba(245,158,11,0.4)',
                }}
              />
            </div>
          ))}
        </div>

        {/* Cake tiers */}
        {/* Top tier */}
        <div
          className="mx-auto rounded-t-xl relative overflow-hidden"
          style={{
            width: '180px',
            height: '50px',
            background: 'linear-gradient(135deg, #1E293B 0%, #334155 50%, #1E293B 100%)',
            border: '2px solid rgba(245,158,11,0.4)',
            boxShadow: blown ? '0 0 30px rgba(245,158,11,0.6), 0 0 60px rgba(251,146,60,0.3)' : '0 0 15px rgba(245,158,11,0.3)',
          }}
        >
          <div className="absolute inset-x-0 top-2 flex justify-center gap-3">
            {['🌟', '✨', '🌟', '✨', '🌟'].map((e, i) => (
              <span key={i} className="text-xs">{e}</span>
            ))}
          </div>
          {/* Frosting drips */}
          <div className="absolute bottom-0 inset-x-0 flex justify-around">
            {[0,1,2,3,4,5].map((i) => (
              <div key={i} className="w-3 rounded-b-full" style={{ height: `${8 + (i % 3) * 4}px`, background: 'rgba(254,243,199,0.6)' }} />
            ))}
          </div>
        </div>

        {/* Middle tier */}
        <div
          className="mx-auto relative overflow-hidden"
          style={{
            width: '240px',
            height: '60px',
            background: 'linear-gradient(135deg, #1E293B 0%, #334155 50%, #1E293B 100%)',
            border: '2px solid rgba(245,158,11,0.4)',
            borderTop: 'none',
            boxShadow: blown ? '0 0 30px rgba(245,158,11,0.6)' : '0 0 15px rgba(245,158,11,0.3)',
          }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-cursive text-amber-300 text-lg" style={{ fontFamily: "'Dancing Script', cursive" }}>
              Happy Birthday! 🎂
            </span>
          </div>
          <div className="absolute bottom-0 inset-x-0 flex justify-around">
            {[0,1,2,3,4,5,6,7].map((i) => (
              <div key={i} className="w-3 rounded-b-full" style={{ height: `${6 + (i % 3) * 3}px`, background: 'rgba(254,243,199,0.5)' }} />
            ))}
          </div>
        </div>

        {/* Bottom tier */}
        <div
          className="mx-auto rounded-b-xl"
          style={{
            width: '300px',
            height: '70px',
            background: 'linear-gradient(135deg, #1E293B 0%, #334155 50%, #1E293B 100%)',
            border: '2px solid rgba(245,158,11,0.4)',
            borderTop: 'none',
            boxShadow: blown ? '0 0 40px rgba(245,158,11,0.7), 0 0 80px rgba(251,146,60,0.4)' : '0 0 20px rgba(245,158,11,0.3)',
          }}
        >
          <div className="h-full flex items-center justify-center gap-2">
            {['🎉', '🎊', '🎈', '🎊', '🎉'].map((e, i) => (
              <span key={i} className="text-xl">{e}</span>
            ))}
          </div>
        </div>

        {/* Plate */}
        <div
          className="mx-auto rounded-full mt-1"
          style={{
            width: '320px',
            height: '12px',
            background: 'linear-gradient(to right, rgba(245,158,11,0.2), rgba(254,243,199,0.5), rgba(245,158,11,0.2))',
            boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
          }}
        />
      </div>

      {/* Click hint */}
      {!blown && (
        <p className="mt-6 text-amber-400/70 text-sm font-sans animate-pulse">
          🕯️ Click the cake to blow out the candles!
        </p>
      )}

      {/* Wish message */}
      {wishVisible && (
        <div
          className="mt-8 text-center px-8 py-6 rounded-2xl border border-amber-400/30 max-w-lg"
          style={{
            background: 'rgba(30, 41, 59, 0.8)',
            backdropFilter: 'blur(10px)',
            boxShadow: '0 0 40px rgba(245,158,11,0.3)',
            animation: 'glow-pulse 2s ease-in-out infinite',
          }}
        >
          <div className="text-4xl mb-3">🌟</div>
          <p
            className="font-cursive text-2xl text-amber-300 mb-2"
            style={{ fontFamily: "'Dancing Script', cursive" }}
          >
            Your wish has been sent to the stars!
          </p>
          <p className="text-amber-100/80 font-sans text-sm leading-relaxed">
            May every dream you hold close come true this year. You deserve all the magic the universe has to offer. 💛
          </p>
        </div>
      )}
    </div>
  );
};

export default BirthdayCake;
