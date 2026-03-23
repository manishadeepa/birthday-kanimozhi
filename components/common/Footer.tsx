'use client';



const Footer = () => {
  return (
    <footer
      className="relative py-10 px-6 text-center border-t"
      style={{
        background: '#0F172A',
        borderColor: 'rgba(245, 158, 11, 0.15)',
      }}
    >
      <p
        className="text-2xl mb-2"
        style={{
          fontFamily: "'Dancing Script', cursive",
          background: 'linear-gradient(135deg, #F59E0B, #FCD34D)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}
      >
        Made with 💛 for someone truly special
      </p>
      <p className="text-amber-100/40 text-xs font-sans mt-1">
        🎂 Wishing you the most beautiful year yet 🎂
      </p>
    </footer>
  );
};

export default Footer;