import { motion } from 'motion/react';
import { Heart, ShieldCheck, Sparkles } from 'lucide-react';

export default function About() {
  return (
    <div className="w-full pt-20">
      {/* Header */}
      <section className="bg-spa-dark text-white py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=2070&auto=format&fit=crop"
            alt="Spa interior"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="block text-spa-accent text-sm tracking-[0.3em] uppercase mb-6"
          >
            Our Story
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-6xl font-serif mb-8"
          >
            About Lake Country
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed"
          >
            We are a premier skin care and medi-spa facility dedicated to providing 
            exceptional aesthetic and wellness services in a relaxing, professional environment.
          </motion.p>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 px-4 bg-spa-bg">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-serif text-spa-dark mb-6">Our Philosophy</h2>
              <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                At Lake Country Skin Care & Medi-Spa, we believe that true beauty comes from 
                feeling confident and comfortable in your own skin. Our mission is to enhance 
                your natural beauty through personalized, science-backed treatments.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                We combine the relaxing atmosphere of a traditional spa with the advanced 
                technology and expertise of a medical clinic. Every treatment plan is 
                customized to address your unique concerns and goals.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-2 gap-4"
            >
              <img
                src="https://images.unsplash.com/photo-1552693673-1bf958298935?q=80&w=2073&auto=format&fit=crop"
                alt="Spa treatment"
                className="w-full h-64 object-cover rounded-2xl rounded-tr-[100px]"
                referrerPolicy="no-referrer"
              />
              <img
                src="https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=1974&auto=format&fit=crop"
                alt="Spa products"
                className="w-full h-64 object-cover rounded-2xl rounded-bl-[100px] mt-12"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-4 bg-spa-light">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-serif text-spa-dark mb-16">Why Choose Us</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: <ShieldCheck className="w-10 h-10 text-spa-accent" />,
                title: 'Medical Expertise',
                desc: 'Our treatments are performed by certified medical professionals and highly trained aestheticians.'
              },
              {
                icon: <Sparkles className="w-10 h-10 text-spa-accent" />,
                title: 'Advanced Technology',
                desc: 'We utilize state-of-the-art equipment and premium products to ensure optimal, safe results.'
              },
              {
                icon: <Heart className="w-10 h-10 text-spa-accent" />,
                title: 'Personalized Care',
                desc: 'We take the time to understand your goals and create a customized treatment plan just for you.'
              }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-20 h-20 mx-auto bg-spa-light rounded-full flex items-center justify-center mb-6">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-serif text-spa-dark mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
