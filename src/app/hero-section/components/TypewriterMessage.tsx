'use client';

import { useEffect, useState } from 'react';

const MESSAGE = `From the very first day of college, I knew you were someone special. You were the one who sat next to me in class without hesitation, and from that moment, everything changed. We laughed at things nobody else understood, stayed up watching series when we should have been studying, and turned every ordinary day into something worth remembering.

You are not just a friend — you are the person God specially chose to place in my life. Every moment with you feels like a blessing I never asked for but always needed. You know me better than anyone, and still you choose to stay — that means everything to me.

On your birthday, I want you to know that I don't just want you in this chapter of my life. I want you in every chapter, every season, every moment — for the rest of my life. You are my person, my safe place, my forever friend.

Happy Birthday — here's to a lifetime more of us. 💛`;

const TypewriterMessage = () => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < MESSAGE.length) {
        setDisplayedText(MESSAGE.slice(0, i + 1));
        i++;
      } else {
        clearInterval(interval);
      }
    }, 28);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative">
      <p
        className="font-sans text-lg md:text-xl leading-relaxed text-amber-100/90 text-center max-w-3xl mx-auto whitespace-pre-line"
      >
        {displayedText}
        {displayedText.length < MESSAGE.length && (
          <span
            className="inline-block w-0.5 h-5 bg-amber-400 ml-1 align-middle"
            style={{ animation: 'typewriter-cursor 1s ease-in-out infinite' }}
          />
        )}
      </p>
    </div>
  );
};

export default TypewriterMessage;