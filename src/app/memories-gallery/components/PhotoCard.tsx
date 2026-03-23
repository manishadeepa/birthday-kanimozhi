'use client';

import { useState } from 'react';
import AppImage from '@/components/ui/AppImage';

interface PhotoCardProps {
  photo: {
    id: string;
    src: string;
    alt: string;
    date: string;
    location: string;
    aspectRatio: string;
  };
  onImageClick: (photo: any) => void;
}

const PhotoCard = ({ photo, onImageClick }: PhotoCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`group relative overflow-hidden rounded-3xl shadow-lg cursor-pointer ${photo.aspectRatio}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onImageClick(photo)}
    >
      <AppImage
        style={{ height: '600px' }}
        src={photo.src}
        alt={photo.alt}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Caption Overlay */}
      <div
        className={`absolute bottom-0 left-0 right-0 p-6 transform transition-transform duration-500 ${
          isHovered ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        <p className="text-white text-lg font-semibold mb-1">{photo.date}</p>
        <p className="text-white/80 text-sm">{photo.location}</p>
      </div>
    </div>
  );
};

export default PhotoCard;