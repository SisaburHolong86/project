import React, { useState } from 'react';

const RomanticMemoryWebsite = () => {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  const memories = [
    {
      image: "https://placeholder-image-service.onrender.com/image/500x400?prompt=Romantic-couple-hugging-at-sunset-with-golden-hour-lighting-and-smiling-faces&id=mem1-romantic",
      caption: "Setiap detik bersamamu adalah kenangan terindah yang selalu ingin kurelakanikan. Kamu membuat hari-hariku bersinar seperti matahari terbenam ini."
    },
    {
      image: "https://placeholder-image-service.onrender.com/image/500x400?prompt=Couple-laughing-together-in-a-beautiful-garden-with-flowers-and-natural-lighting&id=mem2-happy",
      caption: "Tawamu adalah musik terindah di telingaku. Setiap kali kamu tersenyum, dunia terasa lebih cerah dan hidup lebih berarti."
    },
    {
      image: "https://placeholder-image-service.onrender.com/image/500x400?prompt=Couple-holding-hands-walking-on-beach-at-sunset-with-silhouette&id=mem3-beach",
      caption: "Bersamamu, setiap langkah terasa seperti petualangan yang menakjubkan. Aku ingin terus berjalan bersamamu selamanya."
    },
    {
      image: "https://placeholder-image-service.onrender.com/image/500x400?prompt=Couple-cuddling-on-sofa-with-cozy-blanket-and-warm-lighting&id=mem4-cozy",
      caption: "Momen-momen tenang bersamamu adalah harta karun yang paling berharga. Di pelukanmu, aku menemukan kedamaian sejati."
    },
    {
      image: "https://placeholder-image-service.onrender.com/image/500x400?prompt=Couple-dancing-under-starry-night-sky-with-fairy-lights&id=mem5-dance",
      caption: "Bersamamu, hidupku seperti tarian yang indah. Setiap gerakan, setiap langkah, sempurna karena dilakukan bersamamu."
    }
  ];

  const nextPhoto = () => {
    setCurrentPhotoIndex((prev) => (prev + 1) % memories.length);
  };

  const prevPhoto = () => {
    setCurrentPhotoIndex((prev) => (prev - 1 + memories.length) % memories.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-rose-100 font-sans">
      {/* Header */}
      <header className="text-center py-8 px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-rose-700 mb-4">
          Selamat Ulang Tahun Sayangku! 🎂
        </h1>
        <p className="text-lg md:text-xl text-rose-600">
          22 - Tanggal yang spesial untuk orang yang paling spesial
        </p>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Memory Gallery */}
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-rose-800 text-center mb-8">
            Kenangan Indah Bersamamu
          </h2>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            {/* Navigation Buttons - Mobile */}
            <div className="flex md:hidden justify-center gap-4 mb-4">
              <button
                onClick={prevPhoto}
                className="p-3 bg-rose-100 hover:bg-rose-200 rounded-full transition-colors"
                aria-label="Foto sebelumnya"
              >
                <svg className="w-6 h-6 text-rose-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={nextPhoto}
                className="p-3 bg-rose-100 hover:bg-rose-200 rounded-full transition-colors"
                aria-label="Foto berikutnya"
              >
                <svg className="w-6 h-6 text-rose-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Photo */}
            <div className="flex-1 max-w-md">
              <div className="relative group">
                <img
                  src={memories[currentPhotoIndex].image}
                  alt="Foto kenangan romantis pasangan sedang berpelukan dengan latar pemandangan indah"
                  className="w-full h-auto rounded-2xl shadow-lg object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>

            {/* Caption */}
            <div className="flex-1 max-w-md">
              <div className="bg-rose-50 p-6 rounded-2xl border border-rose-200">
                <div className="text-center mb-4">
                  <span className="text-sm text-rose-500">Kenangan {currentPhotoIndex + 1} dari {memories.length}</span>
                </div>
                <p className="text-lg md:text-xl text-rose-800 leading-relaxed italic text-center">
                  "{memories[currentPhotoIndex].caption}"
                </p>
              </div>
            </div>

            {/* Navigation Buttons - Desktop */}
            <div className="hidden md:flex flex-col gap-4">
              <button
                onClick={prevPhoto}
                className="p-3 bg-rose-100 hover:bg-rose-200 rounded-full transition-colors"
                aria-label="Foto sebelumnya"
              >
                <svg className="w-8 h-8 text-rose-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={nextPhoto}
                className="p-3 bg-rose-100 hover:bg-rose-200 rounded-full transition-colors"
                aria-label="Foto berikutnya"
              >
                <svg className="w-8 h-8 text-rose-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
          {memories.map((memory, index) => (
            <button
              key={index}
              onClick={() => setCurrentPhotoIndex(index)}
              className={`relative group overflow-hidden rounded-xl transition-transform duration-300 ${
                currentPhotoIndex === index ? 'ring-4 ring-rose-500 scale-105' : 'hover:scale-105'
              }`}
            >
              <img
                src={memory.image}
                alt={`Thumbnail kenangan ${index + 1} menunjukkan momen bahagia bersama`}
                className="w-full h-32 object-cover"
              />
              <div className={`absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center ${
                currentPhotoIndex === index ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
              } transition-opacity duration-300`}>
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
            </button>
          ))}
        </div>

        {/* Love Message */}
        <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-rose-800 mb-4">Untuk Sayangku</h3>
          <p className="text-lg text-rose-700 leading-relaxed mb-4">
            Di hari spesialmu ini, aku ingin mengucapkan...
          </p>
          <div className="bg-rose-50 p-6 rounded-xl border border-rose-200">
            <p className="text-xl md:text-2xl text-rose-800 font-semibold italic">
              "Selamat ulang tahun sayang! Terima kasih sudah menjadi bagian terindah dalam hidupku. 
              Setiap kenangan bersamamu adalah hadiah terbesar yang bisa kuminta. 
              Aku mencintaimu selamanya! 💖"
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center py-8 px-4">
        <p className="text-rose-600">
          Dibuat dengan cinta untuk ulang tahunmu yang spesial ❤️
        </p>
        <p className="text-sm text-rose-500 mt-2">
          © {new Date().getFullYear()} - Untuk yang tersayang
        </p>
      </footer>
    </div>
  );
};

export default RomanticMemoryWebsite;