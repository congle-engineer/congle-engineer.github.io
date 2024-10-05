export default function Hero() {
  return (
    <div className="relative bg-cover bg-center h-screen" style={{ backgroundImage: "url('/hero-image.jpg')" }}>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 text-center flex flex-col items-center justify-center h-full">
        <h1 className="text-5xl font-bold text-white">Welcome to My Blog</h1>
        <p className="mt-4 text-lg text-gray-300">Sharing thoughts, ideas, and inspiration.</p>
        <button className="mt-8 px-6 py-3 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600">
          Explore Now
        </button>
      </div>
    </div>
  );
}
