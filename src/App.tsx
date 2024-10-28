import React from 'react';
import { Phone, Mail, MapPin, Instagram, Facebook, Star, Users, Home, Clock, CheckCircle2, Paintbrush, Layout, Sofa, Ruler } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="relative h-screen">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1631679706909-1844bbd07221?auto=format&fit=crop&q=80"
            className="w-full h-full object-cover"
            alt="Luxury Interior"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        
        <nav className="relative z-10 flex justify-between items-center px-6 py-4 lg:px-12">
          <div className="text-white text-2xl font-bold flex items-center gap-2">
            <Home className="h-8 w-8" />
            <span>Elegance Interiors</span>
          </div>
          <div className="hidden md:flex space-x-8 text-white">
            <a href="#services" className="hover:text-gray-300">Services</a>
            <a href="#portfolio" className="hover:text-gray-300">Portfolio</a>
            <a href="#testimonials" className="hover:text-gray-300">Testimonials</a>
            <a href="#contact" className="hover:text-gray-300">Contact</a>
          </div>
        </nav>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Transform Your Space Into Art
          </h1>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl">
            Bringing luxury and elegance to homes across Hyderabad since 2015
          </p>
          <a href="#contact" className="bg-white text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition duration-300">
            Get Free Consultation
          </a>
        </div>
      </header>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Layout className="h-8 w-8" />,
                title: "Space Planning",
                description: "Optimize your space with our expert planning services for maximum functionality and flow."
              },
              {
                icon: <Paintbrush className="h-8 w-8" />,
                title: "Interior Design",
                description: "Full-service interior design bringing your vision to life with our signature elegant touch."
              },
              {
                icon: <Sofa className="h-8 w-8" />,
                title: "Furniture Selection",
                description: "Curated furniture selection that perfectly balances aesthetics and comfort."
              },
              {
                icon: <Ruler className="h-8 w-8" />,
                title: "Renovation",
                description: "Complete renovation services from concept to execution with meticulous attention to detail."
              }
            ].map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-blue-600 mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Our Portfolio</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80",
                title: "Modern Living Room",
                location: "Banjara Hills Villa"
              },
              {
                image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80",
                title: "Luxury Kitchen",
                location: "Jubilee Hills Apartment"
              },
              {
                image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80",
                title: "Master Bedroom",
                location: "Gachibowli Residence"
              },
              {
                image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80",
                title: "Home Office",
                location: "Film Nagar Project"
              },
              {
                image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&q=80",
                title: "Dining Space",
                location: "Madhapur Penthouse"
              },
              {
                image: "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&q=80",
                title: "Bathroom Design",
                location: "HITEC City Villa"
              }
            ].map((project, index) => (
              <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-sm">{project.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Users className="h-12 w-12 text-blue-600" />
            </div>
            <h3 className="text-4xl font-bold text-gray-900 mb-2">30+</h3>
            <p className="text-gray-600">Happy Clients</p>
          </div>
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <CheckCircle2 className="h-12 w-12 text-blue-600" />
            </div>
            <h3 className="text-4xl font-bold text-gray-900 mb-2">50+</h3>
            <p className="text-gray-600">Projects Completed</p>
          </div>
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Clock className="h-12 w-12 text-blue-600" />
            </div>
            <h3 className="text-4xl font-bold text-gray-900 mb-2">8+</h3>
            <p className="text-gray-600">Years Experience</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Priya Reddy",
                text: "Elegance Interiors transformed our home beyond our expectations. Their attention to detail is remarkable.",
                role: "Homeowner, Banjara Hills"
              },
              {
                name: "Raj Sharma",
                text: "Professional team with excellent taste. They completed our office renovation right on schedule.",
                role: "Business Owner, Jubilee Hills"
              },
              {
                name: "Anita Desai",
                text: "The team's creativity and understanding of our vision made the whole process smooth and enjoyable.",
                role: "Villa Owner, Gachibowli"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">{testimonial.text}</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Get In Touch</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="h-6 w-6 mr-4" />
                  <p>+91 98765 43210</p>
                </div>
                <div className="flex items-center">
                  <Mail className="h-6 w-6 mr-4" />
                  <p>info@eleganceinteriors.com</p>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-6 w-6 mr-4" />
                  <p>Road No. 12, Banjara Hills, Hyderabad</p>
                </div>
                <div className="flex space-x-4 mt-6">
                  <a href="#" className="hover:text-gray-300">
                    <Instagram className="h-6 w-6" />
                  </a>
                  <a href="#" className="hover:text-gray-300">
                    <Facebook className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </div>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-500"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-500"
              />
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-500"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8">
        <div className="container mx-auto px-4 text-center">
          <p>© 2024 Elegance Interiors. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;