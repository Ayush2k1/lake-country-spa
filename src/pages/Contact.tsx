import { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');

    const formData = new FormData(e.currentTarget);
    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

    if (!accessKey || accessKey === 'YOUR_ACCESS_KEY_HERE') {
      alert('Please configure your Web3Forms access key in the environment variables to enable form submissions.');
      setStatus('idle');
      return;
    }

    formData.append('access_key', accessKey);
    formData.append('subject', 'New Contact Form Submission from Lake Country Spa');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setStatus('success');
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('error');
    }
  };

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
            Get In Touch
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-6xl font-serif mb-8"
          >
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed"
          >
            We're here to answer any questions you may have about our services, 
            products, or to help you schedule an appointment.
          </motion.p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-24 px-4 bg-spa-bg">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Details */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-serif text-spa-dark mb-10">Visit Our Spa</h2>
              
              <div className="space-y-8">
                <div className="flex items-start space-x-6">
                  <div className="w-14 h-14 bg-spa-light rounded-full flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-spa-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-serif text-spa-dark mb-2">Location</h3>
                    <p className="text-gray-600 leading-relaxed">
                      123 Spa Boulevard<br />
                      Saskatchewan, Canada<br />
                      S0K 0A0
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="w-14 h-14 bg-spa-light rounded-full flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-spa-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-serif text-spa-dark mb-2">Phone</h3>
                    <p className="text-gray-600 leading-relaxed">
                      <a href="tel:+1234567890" className="hover:text-spa-accent transition-colors">(123) 456-7890</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="w-14 h-14 bg-spa-light rounded-full flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-spa-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-serif text-spa-dark mb-2">Email</h3>
                    <p className="text-gray-600 leading-relaxed">
                      <a href="mailto:info@lakecountryspa.ca" className="hover:text-spa-accent transition-colors">info@lakecountryspa.ca</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="w-14 h-14 bg-spa-light rounded-full flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6 text-spa-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-serif text-spa-dark mb-2">Hours</h3>
                    <ul className="text-gray-600 space-y-2">
                      <li className="flex justify-between w-48"><span>Mon - Fri:</span> <span>9am - 7pm</span></li>
                      <li className="flex justify-between w-48"><span>Saturday:</span> <span>10am - 5pm</span></li>
                      <li className="flex justify-between w-48"><span>Sunday:</span> <span>Closed</span></li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white p-10 rounded-3xl shadow-sm"
            >
              <h2 className="text-3xl font-serif text-spa-dark mb-8">Send a Message</h2>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-spa-accent focus:border-transparent transition-all"
                      placeholder="Jane"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-spa-accent focus:border-transparent transition-all"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-spa-accent focus:border-transparent transition-all"
                    placeholder="jane@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-spa-accent focus:border-transparent transition-all"
                    placeholder="(123) 456-7890"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-spa-accent focus:border-transparent transition-all resize-none"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full py-4 bg-spa-dark text-white rounded-lg hover:bg-spa-accent transition-colors duration-300 uppercase tracking-widest text-sm font-medium disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {status === 'submitting' ? 'Sending...' : 'Send Message'}
                </button>
                
                {status === 'success' && (
                  <p className="text-green-600 text-center font-medium mt-4">Message sent successfully! We'll be in touch soon.</p>
                )}
                {status === 'error' && (
                  <p className="text-red-600 text-center font-medium mt-4">Something went wrong. Please try again later.</p>
                )}
              </form>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
}
