export default function OurFuture() {
  const videos = [
    { id: 1, src: '/videos/v1.mp4', title: 'Our Moment 1 🎬' },
    { id: 2, src: '/videos/v2.mp4', title: 'Our Moment 2 🎬' },
    { id: 3, src: '/videos/v3.mp4', title: 'Our Moment 3 🎬' },
  ];

  return (
    <div
      className="min-h-screen pt-24 pb-16 px-6"
      style={{ background: 'transparent' }}
    >
      {/* Header */}
      <div className="text-center mb-14">
        <p className="text-amber-400/80 text-sm tracking-[0.3em] uppercase mb-4">
          ✨ Captured Forever ✨
        </p>
        <h1
          className="mb-3"
          style={{
            fontFamily: "'Dancing Script', cursive",
            fontSize: 'clamp(2.5rem, 7vw, 5rem)',
            background: 'linear-gradient(135deg, #F59E0B, #FCD34D)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          Our Moments Together
        </h1>
        <p
          className="text-amber-100/60 text-lg italic"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Every second with you is a memory I never want to forget 💛
        </p>
        <div className="w-24 h-px bg-gradient-to-r from-transparent via-amber-400/60 to-transparent mx-auto mt-4" />
      </div>

      {/* Video Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {videos.map((video) => (
          <div
            key={video.id}
            className="rounded-3xl overflow-hidden"
            style={{
              background: 'rgba(30, 41, 59, 0.5)',
              border: '1px solid rgba(245,158,11,0.2)',
              boxShadow: '0 0 30px rgba(245,158,11,0.08)',
            }}
          >
            <video
              src={video.src}
              controls
              playsInline
              className="w-full"
              style={{ height: '500px', width: '100%', objectFit: 'contain', background: '#0F172A' }}
            />
            <div className="p-4 text-center">
              <p
                style={{
                  fontFamily: "'Dancing Script', cursive",
                  fontSize: '1.4rem',
                  background: 'linear-gradient(135deg, #F59E0B, #FCD34D)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                {video.title}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Closing */}
      <div className="text-center mt-16">
        <p
          className="text-amber-100/60 text-xl italic"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          "The best moments are the ones we lived together" 💛
        </p>
      </div>
    </div>
  );
}