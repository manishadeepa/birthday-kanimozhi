'use client';

import { useState } from 'react';

const questions = [
  {
    question: "Where did Manisha and Kanimozhi first meet? 🏫",
    options: ["School", "College", "Online", "Tuition"],
    correct: 1,
    fun: "Yep! College is where this beautiful friendship was born! 🎓",
  },
  {
    question: "What did they always do together in class? 😄",
    options: ["Sleep", "Sit together always", "Fight for seat", "Study seriously"],
    correct: 1,
    fun: "Always side by side — no one could separate them! 💛",
  },
  {
    question: "What do they watch together by paying money? 🎬",
    options: ["Hollywood movies", "Tamil serials", "Korean series", "YouTube videos"],
    correct: 2,
    fun: "Korean series gang! Worth every rupee spent together! 🇰🇷✨",
  },
  {
    question: "What game do they play with letters? 🎮",
    options: ["Scrabble", "Word chain using start & end letters", "Spelling bee", "Dumb charades"],
    correct: 1,
    fun: "And they got CAUGHT by the FA playing it! 😂 Legends only!",
  },
  {
    question: "Who caught them playing the word game in class? 😂",
    options: ["Principal", "Their FA (Faculty Advisor)", "Friend", "Nobody caught them"],
    correct: 1,
    fun: "The FA caught them red handed! Still one of the funniest memories! 🤣",
  },
  {
    question: "What is Kanimozhi's favourite snack? 🍜",
    options: ["Samosa", "Momos", "Burger", "Popcorn"],
    correct: 1,
    fun: "MOMOS! The queen of snacks for our queen Kanimozhi! 🥟👑",
  },
  {
    question: "What nickname does Manisha call Kanimozhi? 😝",
    options: ["Kani", "Mozi", "Domer", "Kannu"],
    correct: 2,
    fun: "DOMER! Only Manisha can call her that and get away with it! 😂💛",
  },
  {
    question: "What do they watch together besides Korean series? 📺",
    options: ["News", "Sports", "Tamil serials together", "Cooking shows"],
    correct: 2,
    fun: "Serial time is sacred time for these two! 📺✨",
  },
  {
    question: "How would you describe Manisha and Kanimozhi's friendship? 💛",
    options: ["Just classmates", "Best friends for life", "Study partners only", "Occasional friends"],
    correct: 1,
    fun: "Best friends for life — no doubt about it! 💛🎉",
  },
  {
    question: "What makes Kanimozhi truly special? ✨",
    options: ["She is just a friend", "She is God's special gift to Manisha", "She is a good student", "She is popular"],
    correct: 1,
    fun: "God's special gift — placed perfectly in Manisha's life! 🌟💛",
  },
];

export default function FinalSurprise() {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [showFun, setShowFun] = useState(false);

  const handleAnswer = (index: number) => {
    if (selected !== null) return;
    setSelected(index);
    setShowFun(true);
    if (index === questions[current].correct) {
      setScore((s) => s + 1);
    }
  };

  const handleNext = () => {
    if (current + 1 >= questions.length) {
      setFinished(true);
    } else {
      setCurrent((c) => c + 1);
      setSelected(null);
      setShowFun(false);
    }
  };

  const getScoreMessage = () => {
    if (score === 10) return "PERFECT! You know everything about your friendship! 🏆🎉";
    if (score >= 7) return "Amazing! You two are truly inseparable! 💛✨";
    if (score >= 5) return "Not bad! But Kanimozhi knows you better! 😄";
    return "Looks like Manisha needs to spend more time with Kanimozhi! 😂";
  };

  if (finished) {
    return (
      <div
        className="min-h-screen flex items-center justify-center px-6 pt-24 pb-16"
        style={{ background: 'transparent' }}
      >
        <div
          className="max-w-2xl w-full rounded-3xl p-10 text-center"
          style={{
            background: 'rgba(30, 41, 59, 0.6)',
            border: '1px solid rgba(245,158,11,0.3)',
            boxShadow: '0 0 60px rgba(245,158,11,0.15)',
          }}
        >
          <div className="text-6xl mb-6">🏆</div>
          <h2
            className="mb-2"
            style={{
              fontFamily: "'Dancing Script', cursive",
              fontSize: 'clamp(2rem, 6vw, 4rem)',
              background: 'linear-gradient(135deg, #F59E0B, #FCD34D)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Quiz Complete! 🎉
          </h2>
          <div
            className="text-6xl font-bold mb-2 mt-4"
            style={{
              fontFamily: "'Dancing Script', cursive",
              background: 'linear-gradient(135deg, #F59E0B, #FCD34D)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            {score} / {questions.length}
          </div>
          <p
            className="text-amber-100/80 text-lg italic mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {getScoreMessage()}
          </p>
          <div className="flex justify-center gap-3 text-3xl mb-8">
            {['🎉', '💛', '✨', '🎂', '🌟', '💛', '🎉'].map((e, i) => (
              <span key={i} style={{ animation: `float-stars ${2 + i * 0.2}s ease-in-out ${i * 0.1}s infinite`, display: 'inline-block' }}>
                {e}
              </span>
            ))}
          </div>
          <p
            className="text-amber-100/60 text-base leading-relaxed mb-8"
            style={{ fontFamily: "'Lora', serif" }}
          >
            Happy Birthday Kanimozhi aka <span className="text-amber-400 font-bold">Domer</span>! 😂💛
            From your forever friend Manisha — who will always sit next to you,
            watch Korean series with you, get caught by the FA with you,
            and eat Momos with you! 🥟🇰🇷
          </p>
          <button
            onClick={() => { setCurrent(0); setSelected(null); setScore(0); setFinished(false); setShowFun(false); }}
            className="px-8 py-3 rounded-full font-bold text-sm transition-all hover:scale-105"
            style={{
              background: 'linear-gradient(135deg, #F59E0B, #FB923C)',
              color: '#0F172A',
              boxShadow: '0 0 20px rgba(245,158,11,0.3)',
            }}
          >
            🔄 Play Again
          </button>
        </div>
      </div>
    );
  }

  const q = questions[current];

  return (
    <div
      className="min-h-screen px-6 pt-24 pb-16"
      style={{ background: 'linear-gradient(180deg, #0F172A 0%, #0D1B2A 40%, #0F172A 100%)' }}
    >
      {/* Header */}
      <div className="text-center mb-10">
        <p className="text-amber-400/80 text-sm tracking-[0.3em] uppercase mb-3">
          🎮 Friendship Quiz
        </p>
        <h1
          style={{
            fontFamily: "'Dancing Script', cursive",
            fontSize: 'clamp(2rem, 6vw, 4rem)',
            background: 'linear-gradient(135deg, #F59E0B, #FCD34D)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          How well do you know us? 💛
        </h1>
        <div className="w-24 h-px bg-gradient-to-r from-transparent via-amber-400/60 to-transparent mx-auto mt-4" />
      </div>

      {/* Progress Bar */}
      <div className="max-w-2xl mx-auto mb-8">
        <div className="flex justify-between text-amber-400/60 text-sm mb-2">
          <span>Question {current + 1} of {questions.length}</span>
          <span>Score: {score} 💛</span>
        </div>
        <div className="w-full h-2 rounded-full" style={{ background: 'rgba(245,158,11,0.15)' }}>
          <div
            className="h-2 rounded-full transition-all duration-500"
            style={{
              width: `${((current + 1) / questions.length) * 100}%`,
              background: 'linear-gradient(135deg, #F59E0B, #FB923C)',
            }}
          />
        </div>
      </div>

      {/* Question Card */}
      <div
        className="max-w-2xl mx-auto rounded-3xl p-8 mb-6"
        style={{
          background: 'rgba(30, 41, 59, 0.6)',
          border: '1px solid rgba(245,158,11,0.2)',
          boxShadow: '0 0 40px rgba(245,158,11,0.08)',
        }}
      >
        <h2
          className="text-xl md:text-2xl text-amber-100/90 text-center mb-8 leading-relaxed"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          {q.question}
        </h2>

        {/* Options */}
        <div className="grid grid-cols-1 gap-4">
          {q.options.map((option, i) => {
            let borderColor = 'rgba(245,158,11,0.15)';
            let bg = 'rgba(30, 41, 59, 0.4)';
            let textColor = 'rgba(254,243,199,0.8)';

            if (selected !== null) {
              if (i === q.correct) {
                borderColor = 'rgba(16,185,129,0.8)';
                bg = 'rgba(16,185,129,0.15)';
                textColor = '#6EE7B7';
              } else if (i === selected && selected !== q.correct) {
                borderColor = 'rgba(239,68,68,0.8)';
                bg = 'rgba(239,68,68,0.15)';
                textColor = '#FCA5A5';
              }
            }

            return (
              <button
                key={i}
                onClick={() => handleAnswer(i)}
                disabled={selected !== null}
                className="w-full text-left px-6 py-4 rounded-2xl transition-all duration-300 hover:scale-[1.02]"
                style={{
                  background: bg,
                  border: `1px solid ${borderColor}`,
                  color: textColor,
                  fontFamily: "'Lora', serif",
                  cursor: selected !== null ? 'default' : 'pointer',
                }}
              >
                <span className="font-bold mr-3 text-amber-400">
                  {['A', 'B', 'C', 'D'][i]}.
                </span>
                {option}
                {selected !== null && i === q.correct && <span className="ml-2">✅</span>}
                {selected !== null && i === selected && selected !== q.correct && <span className="ml-2">❌</span>}
              </button>
            );
          })}
        </div>

        {/* Fun fact after answer */}
        {showFun && (
          <div
            className="mt-6 p-4 rounded-2xl text-center"
            style={{
              background: 'rgba(245,158,11,0.1)',
              border: '1px solid rgba(245,158,11,0.3)',
            }}
          >
            <p className="text-amber-300 text-sm italic" style={{ fontFamily: "'Lora', serif" }}>
              {q.fun}
            </p>
          </div>
        )}
      </div>

      {/* Next Button */}
      {selected !== null && (
        <div className="text-center">
          <button
            onClick={handleNext}
            className="px-10 py-3 rounded-full font-bold text-sm transition-all hover:scale-105"
            style={{
              background: 'linear-gradient(135deg, #F59E0B, #FB923C)',
              color: '#0F172A',
              boxShadow: '0 0 20px rgba(245,158,11,0.3)',
            }}
          >
            {current + 1 >= questions.length ? '🏆 See Results' : 'Next Question →'}
          </button>
        </div>
      )}
    </div>
  );
}