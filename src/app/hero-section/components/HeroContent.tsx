'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

const HeroContent = () => {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  return (
    <div className="grid md:grid-cols-2 gap-12 items-center">
      {/* Left Content */}
      <div className="space-y-8 text-center md:text-left">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-md">
          <span className={`flex h-2 w-2 rounded-full bg-primary ${isHydrated ? 'animate-pulse' : ''}`} />
          <span className="text-xs font-semibold tracking-widest uppercase text-foreground">
            March 15, 2026 • Forever Together
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-cursive font-medium leading-[0.9] tracking-tight">
          Happy Love <br />
          <span className="text-primary font-normal italic">Anniversary,</span>
          <br />
          My Love ❤️
        </h1>

        {/* Description */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-lg mx-auto md:mx-0 leading-relaxed">
          Every moment with you is a beautiful memory. Today we celebrate our journey, our laughter, and the
          endless love we share. You are my forever.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <Link
            href="/memories-gallery"
            className="px-8 py-4 rounded-full bg-primary text-primary-foreground font-bold text-lg hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group">
            
            View Our Memories
            <Icon
              name="ArrowRightIcon"
              size={20}
              className="group-hover:translate-x-1 transition-transform" />
            
          </Link>
          <Link
            href="/our-future"
            className="px-8 py-4 rounded-full border border-primary/20 bg-primary/5 font-bold text-lg hover:bg-primary/10 transition-all text-foreground">
            
            Our Future Together
          </Link>
        </div>
      </div>

      {/* Right Image */}
      <div className="relative group">
        {/* Background Glow */}
        <div className="absolute inset-0 bg-primary/10 rounded-3xl blur-3xl group-hover:blur-2xl transition-all duration-700" />

        {/* Image Container */}
        <div className="relative aspect-square md:aspect-[4/5] rounded-3xl overflow-hidden border border-primary/10 shadow-2xl">
          <AppImage
            src="https://images.unsplash.com/photo-1651016931488-81a9600ac459"
            alt="Romantic couple silhouette at sunset with warm golden light"
            className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000" />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />

          {/* Floating Card */}
          <div className="absolute bottom-8 left-8 right-8 flex items-end justify-between">
            <div>
              <p className="text-accent font-cursive italic text-3xl">Our Love Story</p>
              <p className="text-white text-xl font-bold">Forever Begins Today</p>
            </div>
            <div className="glass p-3 rounded-2xl border border-white/30">
              <Icon name="HeartIcon" variant="solid" size={24} className="text-primary animate-heartbeat" />
            </div>
          </div>
        </div>
      </div>
    </div>);

};

export default HeroContent;