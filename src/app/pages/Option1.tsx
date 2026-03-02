import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import {
  Download,
  Star,
  Sparkles,
  Shirt,
  Palette,
  Camera,
  Users,
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";
import headerLogo from "figma:asset/aeafc5e8870bbaf27d42b747cf4431cc38cf4467.png";

export default function Option1() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  const screenshots = [
    "https://images.unsplash.com/photo-1587803537744-c6d63897f2cb?w=400",
    "https://images.unsplash.com/photo-1628605007510-696cd5731961?w=400",
    "https://images.unsplash.com/photo-1655650876411-baf437280c44?w=400",
    "https://images.unsplash.com/photo-1659200735595-c9700eee4ece?w=400",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % screenshots.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [screenshots.length]);

  useEffect(() => {
    if (isVideoModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isVideoModalOpen]);

  const features = [
    {
      icon: Shirt,
      title: "100+ Outfits",
      description: "Dress your Spookiz in hundreds of unique costumes and accessories",
      gradient: "from-pink-500 to-rose-500",
    },
    {
      icon: Palette,
      title: "Color Customization",
      description: "Mix and match colors to create your perfect look",
      gradient: "from-purple-500 to-indigo-500",
    },
    {
      icon: Camera,
      title: "Photo Studio",
      description: "Capture and share your amazing creations with friends",
      gradient: "from-orange-500 to-yellow-500",
    },
    {
      icon: Users,
      title: "Collect Characters",
      description: "Unlock all 5 adorable Spookiz characters",
      gradient: "from-green-500 to-teal-500",
    },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Header height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 via-pink-700 to-orange-500 overflow-hidden">
      {/* Floating Shapes Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-yellow-400 rounded-full opacity-20 blur-xl"
          animate={{
            y: [0, -30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-40 right-20 w-48 h-48 bg-pink-400 rounded-full opacity-20 blur-xl"
          animate={{
            y: [0, 40, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 left-1/4 w-40 h-40 bg-purple-400 rounded-full opacity-20 blur-xl"
          animate={{
            y: [0, -40, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Sticky Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-lg">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <img src={headerLogo} alt="Spookiz Daycare" className="h-12" />
            </div>

            {/* Download Button */}
            <motion.button
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full font-bold flex items-center gap-2 hover:scale-105 transition-transform shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download className="w-5 h-5" />
              <span className="hidden sm:inline">Download Now</span>
            </motion.button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-block bg-white/20 backdrop-blur-md px-4 py-2 rounded-full mb-6"
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            >
              <span className="text-yellow-300 font-bold flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                #1 Kids Dress-Up Game
              </span>
            </motion.div>

            <h1 className="text-7xl font-black text-white mb-6 leading-tight">
              <span className="bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300 bg-clip-text text-transparent">
                Spookiz
              </span>
              <br />
              Dress-Up!
            </h1>

            <p className="text-2xl text-white/90 mb-8">
              Create spooky-cute fashion with your favorite monsters! Mix and match
              outfits, accessories, and styles in this magical dress-up adventure!
            </p>

            <div className="flex flex-wrap gap-4">
              <motion.button
                className="bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 text-white px-8 py-4 rounded-full font-black text-xl shadow-2xl flex items-center gap-3 hover:scale-105 transition-transform"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download className="w-6 h-6" />
                Download Now
              </motion.button>

              <motion.button
                onClick={() => setIsVideoModalOpen(true)}
                className="bg-white/20 backdrop-blur-md border-2 border-white text-white px-8 py-4 rounded-full font-black text-xl hover:bg-white/30 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Watch Trailer
              </motion.button>
            </div>

            <div className="flex items-center gap-8 mt-8">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-yellow-300 text-yellow-300" />
                ))}
              </div>
              <div className="text-white">
                <div className="font-bold text-xl">4.9/5.0</div>
                <div className="text-white/70">10M+ Downloads</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ y }}
          >
            <div className="relative">
              {/* Comic-style frame */}
              <div className="absolute -inset-4 bg-white rounded-3xl transform rotate-3" />
              <div className="absolute -inset-2 bg-yellow-300 rounded-3xl transform -rotate-2" />
              <div className="relative bg-white rounded-3xl p-4 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1655650876411-baf437280c44?w=600"
                  alt="Spookiz Character"
                  className="rounded-2xl w-full"
                />
              </div>

              {/* Floating stickers */}
              <motion.div
                className="absolute -top-6 -right-6 bg-pink-500 rounded-full p-4 shadow-xl"
                animate={{
                  rotate: [0, 10, -10, 0],
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
              >
                <Sparkles className="w-8 h-8 text-white" />
              </motion.div>

              <motion.div
                className="absolute -bottom-6 -left-6 bg-yellow-400 rounded-2xl p-4 shadow-xl font-black text-purple-900 text-lg"
                animate={{
                  rotate: [-5, 5, -5],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                }}
              >
                NEW!
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section id="about" className="relative py-20 bg-white/10 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl font-black text-white mb-6">
              Meet the Spookiz Gang! 👻
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Join Cula, Frankie, Zizi, Kebi, and Kongkong in their fashion
              adventure! These lovable monsters need YOUR help to become the most
              stylish crew in town. With hundreds of outfits, accessories, and
              magical items to discover, every day is a new fashion show!
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-12">
              {[
                { name: "Cula", emoji: "🧛", description: "The vampire with a flair for dramatic capes!" },
                { name: "Frankie", emoji: "🧟", description: "Frankenstein's fashion-forward cousin!" },
                { name: "Zizi", emoji: "🦇", description: "The bat who loves sparkly accessories!" },
                { name: "Kebi", emoji: "👻", description: "The ghost with the coolest style!" },
                { name: "Kongkong", emoji: "🐺", description: "The werewolf with wild fashion sense!" },
              ].map((character, i) => (
                <motion.div
                  key={character.name}
                  className="bg-white/20 backdrop-blur-md rounded-2xl p-6 border-4 border-white/40"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ scale: 1.05, rotate: i % 2 === 0 ? 2 : -2 }}
                >
                  <div className="text-6xl mb-3">
                    {character.emoji}
                  </div>
                  <h3 className="text-2xl font-black text-white mb-2">{character.name}</h3>
                  <p className="text-white/80 text-sm">
                    {character.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative py-20">
        <div className="container mx-auto px-6">
          <motion.h2
            className="text-5xl font-black text-white text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            ✨ Amazing Features ✨
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                className="relative group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-white/30 to-white/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all" />
                <div className="relative bg-white/20 backdrop-blur-md rounded-3xl p-8 border-2 border-white/40 h-full hover:bg-white/30 transition-all">
                  <div
                    className={`bg-gradient-to-br ${feature.gradient} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                  >
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-black text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-white/80">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Screenshots Carousel */}
      <section id="screenshots" className="relative py-20 bg-white/5 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <motion.h2
            className="text-5xl font-black text-white text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            📸 See It In Action 📸
          </motion.h2>

          <div className="relative max-w-5xl mx-auto">
            <div className="relative overflow-hidden rounded-3xl">
              <div
                className="flex transition-transform duration-500"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {screenshots.map((screenshot, i) => (
                  <div key={i} className="min-w-full px-4">
                    <div className="relative">
                      <div className="absolute -inset-4 bg-gradient-to-r from-pink-500 via-purple-500 to-yellow-500 rounded-3xl blur-2xl opacity-50" />
                      <img
                        src={screenshot}
                        alt={`Screenshot ${i + 1}`}
                        className="relative rounded-2xl w-full shadow-2xl"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={() =>
                setCurrentSlide(
                  (prev) => (prev - 1 + screenshots.length) % screenshots.length
                )
              }
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-md p-4 rounded-full hover:bg-white/30 transition-all"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            <button
              onClick={() =>
                setCurrentSlide((prev) => (prev + 1) % screenshots.length)
              }
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-md p-4 rounded-full hover:bg-white/30 transition-all"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-8">
              {screenshots.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentSlide(i)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    currentSlide === i
                      ? "bg-white w-8"
                      : "bg-white/40 hover:bg-white/60"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="relative py-20">
        <div className="container mx-auto px-6">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 rounded-3xl blur-3xl opacity-50" />
              <div className="relative bg-white/20 backdrop-blur-md rounded-3xl p-12 border-4 border-white/40">
                <h2 className="text-5xl font-black text-white mb-6">
                  Ready to Play? 🎮
                </h2>
                <p className="text-xl text-white/90 mb-8">
                  Download Spookiz Dress-Up now and start your fashion adventure!
                  It's FREE to play!
                </p>

                <motion.button
                  className="bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 text-white px-12 py-6 rounded-full font-black text-2xl shadow-2xl inline-flex items-center gap-3"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  animate={{
                    boxShadow: [
                      "0 0 20px rgba(255,255,255,0.5)",
                      "0 0 40px rgba(255,255,255,0.8)",
                      "0 0 20px rgba(255,255,255,0.5)",
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                >
                  <Download className="w-8 h-8" />
                  Download for Android
                </motion.button>

                <div className="mt-6 text-white/70">
                  Available on Google Play Store
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-16 bg-slate-900 border-t border-white/10">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-bold text-white mb-6">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <button
                    onClick={() => scrollToSection("features")}
                    className="text-white/70 hover:text-purple-400 transition-colors"
                  >
                    Features
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("screenshots")}
                    className="text-white/70 hover:text-purple-400 transition-colors"
                  >
                    Screenshots
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("download")}
                    className="text-white/70 hover:text-purple-400 transition-colors"
                  >
                    Download
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("about")}
                    className="text-white/70 hover:text-purple-400 transition-colors"
                  >
                    About Us
                  </button>
                </li>
              </ul>
            </div>

            {/* Follow Us */}
            <div>
              <h3 className="text-xl font-bold text-white mb-6">Follow Us on:</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 hover:text-purple-400 transition-colors"
                  >
                    YouTube
                  </a>
                </li>
                <li>
                  <a
                    href="https://tiktok.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 hover:text-purple-400 transition-colors"
                  >
                    Tiktok
                  </a>
                </li>
                <li>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 hover:text-purple-400 transition-colors"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="https://x.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 hover:text-purple-400 transition-colors"
                  >
                    X
                  </a>
                </li>
                <li>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 hover:text-purple-400 transition-colors"
                  >
                    Facebook
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="text-xl font-bold text-white mb-6">Legal</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-white/70 hover:text-purple-400 transition-colors">
                    Terms of Use
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="pt-8 border-t border-white/10 text-center">
            <p className="text-white/60">©Sony Music Labels Inc.</p>
          </div>
        </div>
      </footer>

      {/* Video Modal */}
      {isVideoModalOpen && (
        <motion.div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsVideoModalOpen(false)}
        >
          <motion.div
            className="relative w-full max-w-4xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsVideoModalOpen(false)}
              className="absolute top-4 right-4 z-10 bg-white/20 backdrop-blur-md hover:bg-white/30 text-white p-3 rounded-full transition-all"
            >
              <X className="w-6 h-6" />
            </button>

            {/* YouTube Video */}
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
              title="Spookiz Dress-Up Trailer"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}