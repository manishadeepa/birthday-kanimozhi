'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: '🏠 Home' },
    { href: '/memories-gallery', label: '📸 Memories' },
    { href: '/our-future', label: '💌 Moments' },
    
    { href: '/final-surprise', label: '🎁 Surprise' },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 px-6 py-4 transition-all duration-300`}
    >
      <nav
        className={`max-w-7xl mx-auto flex items-center justify-between rounded-full px-8 py-3 transition-all duration-300 ${
          isScrolled
            ? 'shadow-lg'
            : ''
        }`}
        style={{
          background: 'rgba(15, 23, 42, 0.75)',
          backdropFilter: 'blur(12px)',
          border: '1px solid rgba(245, 158, 11, 0.2)',
          boxShadow: isScrolled ? '0 0 30px rgba(245,158,11,0.1)' : 'none',
        }}
      >
        {/* Logo */}
        <Link href="/hero-section" className="flex items-center gap-2 group">
          <span className="text-2xl group-hover:animate-heartbeat inline-block">🎂</span>
          <span
            className="text-xl font-bold tracking-tight"
            style={{
              fontFamily: "'Dancing Script', cursive",
              background: 'linear-gradient(135deg, #F59E0B, #FCD34D)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Happy Birthday
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navLinks?.map((link) => (
            <Link
              key={link?.href}
              href={link?.href}
              className={`transition-colors duration-200 ${
                pathname === link?.href
                  ? 'text-amber-400 font-semibold' :'text-amber-100/60 hover:text-amber-300'
              }`}
            >
              {link?.label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <Link
          href="/hero-section"
          className="hidden md:block px-5 py-2 rounded-full text-sm font-bold transition-all duration-300"
          style={{
            background: 'linear-gradient(135deg, #F59E0B, #FB923C)',
            color: '#0F172A',
            boxShadow: '0 0 15px rgba(245,158,11,0.3)',
          }}
        >
          🎉 Celebrate
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-amber-400 text-2xl"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? '✕' : '☰'}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          className="md:hidden mt-4 rounded-3xl px-6 py-8 mx-6 shadow-lg"
          style={{
            background: 'rgba(15, 23, 42, 0.95)',
            backdropFilter: 'blur(12px)',
            border: '1px solid rgba(245, 158, 11, 0.2)',
          }}
        >
          <div className="flex flex-col gap-6">
            {navLinks?.map((link) => (
              <Link
                key={link?.href}
                href={link?.href}
                className={`text-lg font-medium transition-colors ${
                  pathname === link?.href ? 'text-amber-400 font-semibold' : 'text-amber-100/60 hover:text-amber-300'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link?.label}
              </Link>
            ))}
            <Link
              href="/hero-section"
              className="px-6 py-3 rounded-full text-center font-bold transition-all"
              style={{
                background: 'linear-gradient(135deg, #F59E0B, #FB923C)',
                color: '#0F172A',
              }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              🎉 Celebrate
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;