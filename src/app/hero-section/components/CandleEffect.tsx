'use client';

const CandleEffect = () => {
  return (
    <div className="flex items-end justify-center gap-6 mt-12">
      {[0, 1, 2]?.map((i) => (
        <div key={i} className="flex flex-col items-center" style={{ animationDelay: `${i * 0.3}s` }}>
          {/* Flame */}
          <div className="relative flex flex-col items-center">
            {/* Outer glow */}
            <div
              className="absolute w-8 h-12 rounded-full blur-xl"
              style={{
                background: 'radial-gradient(ellipse, rgba(251,146,60,0.6) 0%, transparent 70%)',
                top: '-8px',
                animation: `candle-flicker ${1.2 + i * 0.2}s ease-in-out infinite`,
                animationDelay: `${i * 0.15}s`,
              }}
            />
            {/* Inner flame */}
            <div
              className="relative z-10"
              style={{
                width: '14px',
                height: '22px',
                background: 'linear-gradient(to top, #F59E0B, #FCD34D, #FEF3C7)',
                borderRadius: '50% 50% 30% 30% / 60% 60% 40% 40%',
                animation: `candle-flicker ${1.2 + i * 0.2}s ease-in-out infinite`,
                animationDelay: `${i * 0.15}s`,
                boxShadow: '0 0 10px rgba(245,158,11,0.8), 0 0 20px rgba(251,146,60,0.5)',
              }}
            />
            {/* Wick */}
            <div className="w-0.5 h-3 bg-amber-900 rounded-full" />
          </div>
          {/* Candle body */}
          <div
            className="rounded-sm mt-0"
            style={{
              width: i === 1 ? '18px' : '14px',
              height: i === 1 ? '70px' : '55px',
              background: `linear-gradient(to right, rgba(245,158,11,0.3), rgba(254,243,199,0.8), rgba(245,158,11,0.3))`,
              boxShadow: '0 0 15px rgba(245,158,11,0.3)',
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default CandleEffect;
