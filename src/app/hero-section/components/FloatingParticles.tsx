'use client';

import { useEffect, useState } from 'react';

interface Particle {
  id: number;
  type: 'heart' | 'star' | 'sparkle';
  left: number;
  delay: number;
  duration: number;
  size: number;
  opacity: number;
}

const FloatingParticles = () => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const generated: Particle[] = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      type: i % 3 === 0 ? 'heart' : i % 3 === 1 ? 'star' : 'sparkle',
      left: Math.random() * 100,
      delay: Math.random() * 8,
      duration: 6 + Math.random() * 6,
      size: 12 + Math.random() * 20,
      opacity: 0.4 + Math.random() * 0.6,
    }));
    setParticles(generated);
  }, []);

  const getEmoji = (type: Particle['type']) => {
    if (type === 'heart') return '💛';
    if (type === 'star') return '✨';
    return '⭐';
  };

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute"
          style={{
            left: `${p.left}%`,
            bottom: '-50px',
            fontSize: `${p.size}px`,
            opacity: p.opacity,
            animation: `float-hearts ${p.duration}s ease-in-out ${p.delay}s infinite`,
          }}
        >
          {getEmoji(p.type)}
        </div>
      ))}
    </div>
  );
};

export default FloatingParticles;
