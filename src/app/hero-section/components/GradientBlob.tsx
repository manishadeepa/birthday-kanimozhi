'use client';
interface GradientBlobProps {
  className?: string;
  color: 'primary' | 'secondary' | 'accent';
}

const GradientBlob = ({ className = '', color }: GradientBlobProps) => {
  const colorClasses = {
    primary: 'bg-primary/10',
    secondary: 'bg-secondary/10',
    accent: 'bg-accent/20',
  };

  return (
    <div
      className={`absolute rounded-full blur-[120px] ${colorClasses[color]} ${className}`}
      aria-hidden="true"
    />
  );
};

export default GradientBlob;