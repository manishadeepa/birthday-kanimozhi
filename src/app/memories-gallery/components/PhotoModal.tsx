'use client';

import { useEffect } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface PhotoModalProps {
  photo: {
    id: string;
    src: string;
    alt: string;
    date: string;
    location: string;
  } | null;
  onClose: () => void;
  onPrevious: () => void;
  onNext: () => void;
}

const PhotoModal = ({ photo, onClose, onPrevious, onNext }: PhotoModalProps) => {
  useEffect(() => {
    if (photo) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [photo]);

  if (!photo) return null;

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 size-12 rounded-full glass-dark flex items-center justify-center hover:bg-white/20 transition-colors z-10"
        aria-label="Close modal"
      >
        <Icon name="XMarkIcon" size={28} className="text-white" />
      </button>

      {/* Previous Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onPrevious();
        }}
        className="absolute left-6 size-12 rounded-full glass-dark flex items-center justify-center hover:bg-white/20 transition-colors z-10"
        aria-label="Previous photo"
      >
        <Icon name="ChevronLeftIcon" size={28} className="text-white" />
      </button>

      {/* Next Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className="absolute right-6 size-12 rounded-full glass-dark flex items-center justify-center hover:bg-white/20 transition-colors z-10"
        aria-label="Next photo"
      >
        <Icon name="ChevronRightIcon" size={28} className="text-white" />
      </button>

      {/* Image Container */}
      <div className="relative max-w-5xl max-h-[80vh]" onClick={(e) => e.stopPropagation()}>
        <AppImage
          src={photo.src}
          alt={photo.alt}
          className="w-full h-full object-contain rounded-2xl"
        />
        
        {/* Caption */}
        <div className="absolute bottom-0 left-0 right-0 p-6 glass-dark rounded-b-2xl">
          <p className="text-white text-xl font-semibold mb-1">{photo.date}</p>
          <p className="text-white/80">{photo.location}</p>
        </div>
      </div>
    </div>
  );
};

export default PhotoModal;