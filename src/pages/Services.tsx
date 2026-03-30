import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

export default function Services() {
  const categories = [
    {
      title: "Medi-Spa Treatments",
      description: "Advanced medical aesthetics performed by certified professionals.",
      image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=2070&auto=format&fit=crop",
      services: [
        { name: "Botox & Dysport", price: "From $10/unit" },
        { name: "Dermal Fillers", price: "From $500/syringe" },
        { name: "Laser Hair Removal", price: "From $75/session" },
        { name: "Microneedling (PRP)", price: "From $350/session" },
        { name: "IPL Photofacial", price: "From $250/session" }
      ]
    },
    {
      title: "Skin Care & Facials",
      description: "Rejuvenating treatments tailored to your unique skin type.",
      image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2070&auto=format&fit=crop",
      services: [
        { name: "Signature Custom Facial", price: "$120 (60 min)" },
        { name: "HydraFacial MD", price: "$199 (45 min)" },
        { name: "Chemical Peels", price: "From $150" },
        { name: "Dermaplaning", price: "$85 (30 min)" },
        { name: "Acne Clearing Treatment", price: "$130 (60 min)" }
      ]
    },
    {
      title: "Body & Wellness",
      description: "Holistic therapies to relax your mind and contour your body.",
      image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2070&auto=format&fit=crop",
      services: [
        { name: "Relaxation Massage", price: "$100 (60 min)" },
        { name: "Deep Tissue Massage", price: "$120 (60 min)" },
        { name: "Body Contouring", price: "Consultation Required" },
        { name: "Laser Vein Therapy", price: "From $150" },
        { name: "Teeth Whitening", price: "$149 (45 min)" }
      ]
    }
  ];

  return (
    <div className="w-full pt-20">
      {/* Header */}
      <section className="bg-spa-dark text-white py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="block text-spa-accent text-sm tracking-[0.3em] uppercase mb-6"
          >
            Our Offerings
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-6xl font-serif mb-8"
          >
            Exceptional Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Discover our comprehensive range of skin care and medi-spa treatments designed to enhance your natural beauty and promote overall wellness.
          </motion.p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24 px-4 bg-spa-bg">
        <div className="max-w-7xl mx-auto space-y-32">
          {categories.map((category, index) => (
            <div key={category.title} className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-16 items-center`}>
              
              {/* Image */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 1 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="w-full lg:w-1/2"
              >
                <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </motion.div>

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 1 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="w-full lg:w-1/2"
              >
                <h2 className="text-4xl font-serif text-spa-dark mb-4">{category.title}</h2>
                <p className="text-gray-600 mb-10 text-lg">{category.description}</p>
                
                <ul className="space-y-6">
                  {category.services.map((service) => (
                    <li key={service.name} className="flex items-start justify-between border-b border-gray-200 pb-4">
                      <div className="flex items-center space-x-3">
                        <CheckCircle2 className="w-5 h-5 text-spa-accent shrink-0" />
                        <span className="text-spa-dark font-medium text-lg">{service.name}</span>
                      </div>
                      <span className="text-gray-500 font-sans">{service.price}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-12">
                  <a
                    href="tel:+1234567890"
                    className="inline-block px-8 py-4 bg-spa-dark text-white rounded-full hover:bg-spa-accent transition-colors duration-300 uppercase tracking-widest text-sm font-medium"
                  >
                    Book This Service
                  </a>
                </div>
              </motion.div>

            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
