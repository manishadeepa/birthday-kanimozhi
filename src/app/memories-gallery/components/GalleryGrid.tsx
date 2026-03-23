'use client';

import { useState } from 'react';
import PhotoCard from './PhotoCard';
import PhotoModal from './PhotoModal';

interface Photo {
  id: string;
  src: string;
  alt: string;
  date: string;
  location: string;
  aspectRatio: string;
}

const photos: Photo[] = [
  { id: 'memory_1', src: '/images/1.jpeg', alt: 'Memory 1', date: '', location: '', aspectRatio: 'aspect-[3/4]' },
  { id: 'memory_2', src: '/images/2.jpeg', alt: 'Memory 2', date: '', location: '', aspectRatio: 'aspect-square' },
  { id: 'memory_3', src: '/images/3.jpeg', alt: 'Memory 3', date: '', location: '', aspectRatio: 'aspect-[4/5]' },
  { id: 'memory_4', src: '/images/4.jpeg', alt: 'Memory 4', date: '', location: '', aspectRatio: 'aspect-square' },
  { id: 'memory_5', src: '/images/5.jpeg', alt: 'Memory 5', date: '', location: '', aspectRatio: 'aspect-[3/4]' },
  { id: 'memory_6', src: '/images/6.jpeg', alt: 'Memory 6', date: '', location: '', aspectRatio: 'aspect-[4/5]' },
  { id: 'memory_7', src: '/images/7.jpeg', alt: 'Memory 7', date: '', location: '', aspectRatio: 'aspect-square' },
  { id: 'memory_8', src: '/images/8.jpeg', alt: 'Memory 8', date: '', location: '', aspectRatio: 'aspect-[3/4]' },
  { id: 'memory_9', src: '/images/9.jpeg', alt: 'Memory 9', date: '', location: '', aspectRatio: 'aspect-square' },
  { id: 'memory_10', src: '/images/10.jpeg', alt: 'Memory 10', date: '', location: '', aspectRatio: 'aspect-[4/5]' },
  { id: 'memory_11', src: '/images/11.jpeg', alt: 'Memory 11', date: '', location: '', aspectRatio: 'aspect-square' },
  { id: 'memory_12', src: '/images/12.jpeg', alt: 'Memory 12', date: '', location: '', aspectRatio: 'aspect-[3/4]' },
  { id: 'memory_13', src: '/images/13.jpeg', alt: 'Memory 13', date: '', location: '', aspectRatio: 'aspect-square' },
  { id: 'memory_14', src: '/images/14.jpeg', alt: 'Memory 14', date: '', location: '', aspectRatio: 'aspect-[4/5]' },
  { id: 'memory_15', src: '/images/15.jpeg', alt: 'Memory 15', date: '', location: '', aspectRatio: 'aspect-square' },
  { id: 'memory_16', src: '/images/16.jpeg', alt: 'Memory 16', date: '', location: '', aspectRatio: 'aspect-[3/4]' },
  { id: 'memory_17', src: '/images/17.jpeg', alt: 'Memory 17', date: '', location: '', aspectRatio: 'aspect-square' },
  { id: 'memory_18', src: '/images/18.jpeg', alt: 'Memory 18', date: '', location: '', aspectRatio: 'aspect-[4/5]' },
  { id: 'memory_19', src: '/images/19.jpeg', alt: 'Memory 19', date: '', location: '', aspectRatio: 'aspect-square' },
  { id: 'memory_20', src: '/images/20.jpeg', alt: 'Memory 20', date: '', location: '', aspectRatio: 'aspect-[3/4]' },
];

const GalleryGrid = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleImageClick = (photo: Photo) => {
    const index = photos.findIndex((p) => p.id === photo.id);
    setCurrentIndex(index);
    setSelectedPhoto(photo);
  };

  const handlePrevious = () => {
    const newIndex = currentIndex === 0 ? photos.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    setSelectedPhoto(photos[newIndex]);
  };

  const handleNext = () => {
    const newIndex = currentIndex === photos.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    setSelectedPhoto(photos[newIndex]);
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {photos.map((photo) =>
          <PhotoCard key={photo.id} photo={photo} onImageClick={handleImageClick} />
        )}
      </div>

      <PhotoModal
        photo={selectedPhoto}
        onClose={() => setSelectedPhoto(null)}
        onPrevious={handlePrevious}
        onNext={handleNext}
      />
    </>
  );
};

export default GalleryGrid;