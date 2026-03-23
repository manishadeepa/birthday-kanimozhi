'use client';

import { useEffect, useState } from 'react';
import Icon from '@/components/ui/AppIcon';

interface Heart {
  id: string;
  left: string;
  animationDelay: string;
  size: number;
}

const FloatingHearts = () => {
  const [hearts, setHearts] = useState<Heart[]>([]);

  useEffect(() => {
    // Generate random floating hearts
    const generatedHearts: Heart[] = Array.from({ length: 8 }, (_, i) => ({
      id: `heart-${i}`,
      left: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 4}s`,
      size: Math.random() > 0.5 ? 24 : 32,
    }));
    setHearts(generatedHearts);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute animate-float-hearts"
          style={{
            left: heart.left,
            top: '100%',
            animationDelay: heart.animationDelay,
          }}
        >
          <Icon
            name="HeartIcon"
            variant="solid"
            size={heart.size}
            className="text-primary opacity-30"
          />
        </div>
      ))}
    </div>
  );
};

export default FloatingHearts;