'use client';

interface LoveCard {
  icon: string;
  title: string;
  description: string;
}

const loveCards: LoveCard[] = [
  {
    icon: '🌟',
    title: 'Your Radiant Spirit',
    description: 'The way you walk into a room and instantly make it warmer — that\'s a rare and beautiful gift.',
  },
  {
    icon: '😂',
    title: 'Your Infectious Laughter',
    description: 'Your laugh is the kind that makes everyone around you laugh too, even when they don\'t know why.',
  },
  {
    icon: '🤝',
    title: 'Your Unwavering Loyalty',
    description: 'You show up — always. In the big moments and the quiet ones. That means everything.',
  },
  {
    icon: '💡',
    title: 'Your Brilliant Mind',
    description: 'The way you see the world differently, find beauty in the overlooked, and think in ways that surprise me.',
  },
  {
    icon: '🌸',
    title: 'Your Gentle Kindness',
    description: 'You treat everyone with such genuine care. The world is kinder because you\'re in it.',
  },
  {
    icon: '🔥',
    title: 'Your Fierce Courage',
    description: 'You face hard things with such grace and strength. You inspire me more than you know.',
  },
];

const LoveCardsGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {loveCards.map((card, i) => (
        <div
          key={i}
          className="group relative p-6 rounded-2xl border border-amber-500/20 cursor-default transition-all duration-500 hover:border-amber-400/60 hover:scale-105"
          style={{
            background: 'rgba(30, 41, 59, 0.6)',
            backdropFilter: 'blur(10px)',
          }}
        >
          {/* Hover glow overlay */}
          <div
            className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse at center, rgba(245,158,11,0.12) 0%, transparent 70%)',
              boxShadow: '0 0 30px rgba(245,158,11,0.2), inset 0 0 30px rgba(245,158,11,0.05)',
            }}
          />
          {/* Icon */}
          <div
            className="text-4xl mb-4 transition-transform duration-300 group-hover:scale-110 inline-block"
            style={{ filter: 'drop-shadow(0 0 8px rgba(245,158,11,0.5))' }}
          >
            {card.icon}
          </div>
          {/* Title */}
          <h3
            className="font-cursive text-xl text-amber-300 mb-2 group-hover:text-amber-200 transition-colors duration-300"
            style={{ fontFamily: "'Dancing Script', cursive" }}
          >
            {card.title}
          </h3>
          {/* Description */}
          <p className="text-amber-100/70 text-sm leading-relaxed group-hover:text-amber-100/90 transition-colors duration-300">
            {card.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default LoveCardsGrid;
