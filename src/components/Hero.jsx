// src/components/Hero.js

const Hero = () => {
  return (
    <header className="bg-cover bg-center h-screen relative" style={{ backgroundImage: "url('herobg4.jpg')" }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 text-center text-white flex flex-col justify-center items-center h-full">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Hi, I&apos;m Rajesh Kumar</h1>
        <p className="text-xl mb-6">Full-stack Developer | Laravel & React Expert</p>
        <a href="#projects" className="bg-orange-500 text-white px-6 py-3 rounded-full text-lg hover:bg-orange-600 transition duration-300">
          View My Work
        </a>
      </div>
    </header>
  );
};

export default Hero;
