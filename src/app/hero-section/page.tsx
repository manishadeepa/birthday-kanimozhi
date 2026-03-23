import { Metadata } from 'next';
import BirthdayPage from './components/BirthdayPage';

export const metadata: Metadata = {
  title: 'Happy Birthday Domerr 🎂',
  description: 'A heartfelt birthday celebration — warm, intimate, and made with love.',
};

export default function HeroSection() {
  return <BirthdayPage />;
}