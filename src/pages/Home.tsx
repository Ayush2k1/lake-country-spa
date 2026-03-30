import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Sparkles, Droplets, Leaf, ShieldCheck } from 'lucide-react';

// --- Improved Section: Sanctuary Gallery ---
const SanctuaryGallery = () => {
  return (
    <section className="py-32 px-4 bg-spa-dark overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-spa-accent text-sm tracking-[0.3em] uppercase mb-4 block"
          >
            Our Sanctuary
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl font-serif text-white"
          >
            A Space to Unwind
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Image 1: Left, large */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="md:col-span-7 h-[50vh] md:h-[75vh] rounded-[2.5rem] overflow-hidden relative group shadow-2xl"
          >
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-700 z-10" />
            <img 
              src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2070&auto=format&fit=crop" 
              alt="Spa interior"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
              referrerPolicy="no-referrer"
            />
          </motion.div>

          {/* Right column with 2 smaller images */}
          <div className="md:col-span-5 flex flex-col gap-8">
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="h-[30vh] md:h-[40vh] rounded-[2.5rem] overflow-hidden relative group shadow-xl"
            >
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-700 z-10" />
              <img 
                src="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?q=80&w=2070&auto=format&fit=crop" 
                alt="Spa treatment room"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="h-[30vh] md:h-[40vh] rounded-[2.5rem] overflow-hidden relative group md:-ml-16 md:mt-4 border-[8px] border-spa-dark z-10 shadow-2xl"
            >
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-700 z-10" />
              <img 
                src="https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=2070&auto=format&fit=crop" 
                alt="Spa details"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- New Section: Parallax Experience ---
const ParallaxExperience = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  return (
    <section ref={ref} className="relative h-[90vh] overflow-hidden flex items-center justify-center">
      <motion.div style={{ y }} className="absolute inset-0 z-0 w-full h-[140%] -top-[20%]">
        <img
          src="https://images.unsplash.com/photo-1583416750470-965b2707b355?q=80&w=2070&auto=format&fit=crop"
          alt="Parallax Spa"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </motion.div>
      <div className="absolute inset-0 bg-spa-dark/50 z-10" />
      <div className="relative z-20 text-center px-4 w-full">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="max-w-3xl mx-auto bg-white/10 backdrop-blur-md border border-white/20 p-10 md:p-16 rounded-[3rem] shadow-2xl"
        >
          <Sparkles className="w-10 h-10 text-spa-accent mx-auto mb-6" />
          <h2 className="text-4xl md:text-6xl font-serif text-white mb-6">The Ultimate Escape</h2>
          <p className="text-white/90 text-lg md:text-xl leading-relaxed mb-10 font-light">
            Immerse yourself in a world of tranquility. Our expert therapists use a blend of ancient techniques and modern science to restore your body and mind.
          </p>
          <Link 
            to="/contact" 
            className="inline-block px-10 py-5 bg-spa-accent text-white rounded-full hover:bg-white hover:text-spa-dark transition-all duration-500 uppercase tracking-widest text-sm font-medium shadow-xl hover:shadow-2xl hover:-translate-y-1"
          >
            Reserve Your Time
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

// --- New Section: Bento Grid Benefits ---
const BentoBenefits = () => {
  return (
    <section className="py-32 px-4 bg-spa-bg">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-spa-accent text-sm tracking-[0.3em] uppercase mb-4 block"
          >
            The Experience
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl font-serif text-spa-dark"
          >
            Why Choose Us
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:auto-rows-[320px]">
          {/* Large Feature */}
          <motion.div 
            whileHover={{ scale: 0.98 }} 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 md:row-span-2 rounded-[2.5rem] overflow-hidden relative group cursor-pointer shadow-lg"
          >
            <img 
              src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=2070&auto=format&fit=crop" 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-spa-dark/90 via-spa-dark/20 to-transparent p-10 flex flex-col justify-end">
              <Leaf className="w-10 h-10 text-spa-accent mb-4" />
              <h3 className="text-3xl md:text-4xl font-serif text-white mb-3">Holistic Approach</h3>
              <p className="text-white/80 text-lg font-light max-w-md">Treating the mind, body, and spirit as one interconnected system for complete wellness.</p>
            </div>
          </motion.div>

          {/* Small Feature 1 */}
          <motion.div 
            whileHover={{ scale: 0.98 }} 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:col-span-2 rounded-[2.5rem] overflow-hidden relative group cursor-pointer shadow-lg bg-spa-light p-10 flex flex-col justify-center"
          >
            <ShieldCheck className="w-12 h-12 text-spa-accent mb-6" />
            <h3 className="text-3xl font-serif text-spa-dark mb-3">Medical Grade</h3>
            <p className="text-gray-600 text-lg font-light">Advanced aesthetic treatments performed by certified professionals using state-of-the-art technology.</p>
          </motion.div>

          {/* Small Feature 2 */}
          <motion.div 
            whileHover={{ scale: 0.98 }} 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="md:col-span-1 rounded-[2.5rem] overflow-hidden relative group cursor-pointer shadow-lg"
          >
            <img 
              src="https://images.unsplash.com/photo-1552693673-1bf958298935?q=80&w=2073&auto=format&fit=crop" 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-500 p-8 flex flex-col justify-end">
              <h3 className="text-2xl font-serif text-white">Premium Products</h3>
            </div>
          </motion.div>

          {/* Small Feature 3 */}
          <motion.div 
            whileHover={{ scale: 0.98 }} 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="md:col-span-1 rounded-[2.5rem] overflow-hidden relative group cursor-pointer shadow-lg bg-spa-accent p-8 flex flex-col justify-center text-white"
          >
            <Droplets className="w-10 h-10 text-white/80 mb-4" />
            <h3 className="text-2xl font-serif mb-2">Deep Hydration</h3>
            <p className="text-white/80 font-light text-sm">Signature facials designed to restore your natural glow.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.img
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
            src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2070&auto=format&fit=crop"
            alt="Spa background"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="block text-spa-accent text-sm md:text-base tracking-[0.3em] uppercase mb-6"
          >
            Feel Good, Look Amazing
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-7xl lg:text-8xl text-white font-serif mb-8 leading-tight"
          >
            Reveal Your <br />
            <span className="italic font-light">Natural Beauty</span>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              to="/services"
              className="px-8 py-4 bg-spa-accent text-white rounded-full hover:bg-spa-accent-hover transition-colors duration-300 uppercase tracking-widest text-sm font-medium w-full sm:w-auto"
            >
              Explore Services
            </Link>
            <a
              href="tel:+1234567890"
              className="px-8 py-4 bg-transparent border border-white text-white rounded-full hover:bg-white hover:text-spa-dark transition-colors duration-300 uppercase tracking-widest text-sm font-medium w-full sm:w-auto"
            >
              Book Appointment
            </a>
          </motion.div>
        </div>
      </section>

      {/* --- New Section: Infinite Marquee --- */}
      <div className="bg-spa-dark py-6 overflow-hidden flex whitespace-nowrap border-y border-spa-accent/20">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 25 }}
          className="flex items-center text-spa-accent font-serif text-2xl md:text-4xl uppercase tracking-widest"
        >
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center">
              <span className="mx-8">Relax</span><span className="text-spa-accent/30">•</span>
              <span className="mx-8">Rejuvenate</span><span className="text-spa-accent/30">•</span>
              <span className="mx-8">Restore</span><span className="text-spa-accent/30">•</span>
              <span className="mx-8">Refresh</span><span className="text-spa-accent/30">•</span>
              <span className="mx-8">Renew</span><span className="text-spa-accent/30">•</span>
              <span className="mx-8">Revitalize</span><span className="text-spa-accent/30">•</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Welcome Section */}
      <section className="py-32 px-4 bg-spa-bg">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-6xl font-serif text-spa-dark mb-8 leading-tight">
                Welcome To Lake Country <br />
                <span className="italic text-spa-accent">Skin Care & Medi-Spa</span>
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed text-lg font-light">
                At Lake Country Skin Care & Medi Spa, we take pride in offering exceptional care. 
                Our team of dedicated professionals is committed to helping you achieve your aesthetic 
                and wellness goals in a serene, relaxing environment.
              </p>
              <p className="text-gray-600 mb-10 leading-relaxed text-lg font-light">
                Whether you're looking for advanced medical aesthetics, rejuvenating skin care treatments, 
                or simply a moment of tranquility, we tailor every experience to your unique needs.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center space-x-3 text-spa-accent font-medium hover:text-spa-dark transition-colors uppercase tracking-widest text-sm group"
              >
                <span>Read Our Story</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-t-full rounded-b-[3rem] overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?q=80&w=2070&auto=format&fit=crop"
                  alt="Spa treatment"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
                  referrerPolicy="no-referrer"
                />
              </div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="absolute -bottom-8 -left-8 bg-white p-10 rounded-full shadow-2xl hidden md:block border border-spa-light"
              >
                <div className="text-center">
                  <span className="block text-5xl font-serif text-spa-accent mb-2">10+</span>
                  <span className="text-xs uppercase tracking-widest text-gray-500 font-medium">Years of<br/>Excellence</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- Improved Section: Sanctuary Gallery --- */}
      <SanctuaryGallery />

      {/* Featured Services */}
      <section className="py-32 px-4 bg-spa-light">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-spa-accent text-sm tracking-[0.3em] uppercase mb-4 block"
            >
              Our Expertise
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-6xl font-serif text-spa-dark"
            >
              Signature Treatments
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                title: 'Medi-Spa Services',
                desc: 'Advanced medical aesthetics including Botox, dermal fillers, and laser treatments.',
                img: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=2070&auto=format&fit=crop'
              },
              {
                title: 'Skin Care',
                desc: 'Rejuvenating facials, chemical peels, and customized skincare routines.',
                img: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2070&auto=format&fit=crop'
              },
              {
                title: 'Body Treatments',
                desc: 'Relaxing massages, body contouring, and holistic wellness therapies.',
                img: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2070&auto=format&fit=crop'
              }
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="group cursor-pointer bg-white rounded-[2rem] p-4 shadow-sm hover:shadow-xl transition-all duration-500"
              >
                <div className="overflow-hidden rounded-[1.5rem] mb-8 aspect-[4/3] relative">
                  <div className="absolute inset-0 bg-spa-dark/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="px-4 pb-6">
                  <h3 className="text-3xl font-serif text-spa-dark mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6 font-light leading-relaxed">{service.desc}</p>
                  <Link to="/services" className="inline-flex items-center space-x-2 text-spa-accent text-sm uppercase tracking-widest font-medium group-hover:text-spa-dark transition-colors">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- New Section: Parallax Experience --- */}
      <ParallaxExperience />

      {/* --- New Section: Bento Grid Benefits --- */}
      <BentoBenefits />

      {/* Testimonials */}
      <section className="py-32 px-4 bg-spa-dark text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
          >
            <Star className="w-12 h-12 text-spa-accent mx-auto mb-10" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <p className="text-3xl md:text-5xl font-serif leading-tight mb-12 italic font-light text-white/90">
              "The most relaxing and professional spa experience I've ever had. 
              The staff is incredibly knowledgeable and my skin has never looked better. 
              Highly recommend the signature facial!"
            </p>
            <span className="block text-sm uppercase tracking-[0.3em] text-spa-accent font-medium">
              — Sarah Jenkins
            </span>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
