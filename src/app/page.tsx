export default function Home() {
  return (
    <div className="flex flex-col flex-1">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-[#0A0A0F]/80 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <span className="text-xl font-semibold tracking-tight">Manila Creatives</span>
          <div className="hidden md:flex items-center gap-8 text-sm text-gray-400">
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#testimonials" className="hover:text-white transition-colors">Testimonials</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>
          <a
            href="#contact"
            className="bg-[#FF6B4A] hover:bg-[#ff5533] text-white px-5 py-2 rounded-full text-sm font-medium transition-colors"
          >
            Get Started
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Hero Image */}
          <div className="mb-12 relative">
            <img
              src="/hero-placeholder.svg"
              alt="Manila Creatives Hero"
              className="w-full max-w-2xl mx-auto rounded-2xl shadow-2xl shadow-[#FF6B4A]/20"
            />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
            We craft high-performance websites that{" "}
            <span className="text-[#FF6B4A]">grow your business</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Manila Creatives is a web development studio building fast, beautiful, and conversion-focused websites for ambitious businesses.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="bg-[#FF6B4A] hover:bg-[#ff5533] text-white px-8 py-4 rounded-full font-medium transition-colors text-lg"
            >
              Start Your Project
            </a>
            <a
              href="#services"
              className="border border-white/20 hover:border-white/40 text-white px-8 py-4 rounded-full font-medium transition-colors text-lg"
            >
              View Services
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-6 bg-[#0F0F18]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#FF6B4A] text-sm font-medium uppercase tracking-wider">What We Do</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">Our Services</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              From concept to launch, we deliver full-stack web solutions that drive real business results.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Custom Websites", desc: "Bespoke designs tailored to your brand. No templates, just unique experiences that captivate visitors.", icon: "🎨" },
              { title: "E-commerce", desc: "Powerful online stores with seamless checkout, inventory management, and payment integration.", icon: "🛒" },
              { title: "Web Applications", desc: "Complex web apps built with modern frameworks. Scalable, secure, and lightning-fast.", icon: "⚡" },
              { title: "Landing Pages", desc: "High-converting landing pages designed to turn visitors into customers. Perfect for campaigns.", icon: "🚀" },
              { title: "CMS Integration", desc: "Easy-to-use content management systems so you can update your site without coding.", icon: "📝" },
              { title: "Maintenance", desc: "Ongoing support, updates, and optimizations to keep your site running smooth.", icon: "🛠️" },
            ].map((service, i) => (
              <div
                key={i}
                className="bg-[#1a1a24] border border-white/5 rounded-2xl p-8 hover:border-[#FF6B4A]/30 transition-colors group"
              >
                <span className="text-4xl mb-4 block">{service.icon}</span>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-[#FF6B4A] transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[#FF6B4A] text-sm font-medium uppercase tracking-wider">About Us</span>
              <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">Built in Manila, deployed worldwide</h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                Manila Creatives is a boutique web development studio founded by a team of passionate developers and designers. We combine technical expertise with creative vision to build websites that don't just look good—they perform.
              </p>
              <p className="text-gray-400 leading-relaxed mb-8">
                Whether you're a startup looking to establish your online presence or an established business ready tolevel up, we bring the same dedication to every project.
              </p>
              <div className="grid grid-cols-3 gap-8">
                <div>
                  <div className="text-3xl font-bold text-[#FF6B4A]">50+</div>
                  <div className="text-gray-400 text-sm">Projects Delivered</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#FF6B4A]">98%</div>
                  <div className="text-gray-400 text-sm">Client Satisfaction</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#FF6B4A]">5+</div>
                  <div className="text-gray-400 text-sm">Years Experience</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-[#FF6B4A]/20 to-transparent rounded-3xl p-1">
                <div className="bg-[#1a1a24] rounded-3xl p-8 border border-white/10">
                  <h3 className="text-xl font-semibold mb-6">Why Choose Us?</h3>
                  <ul className="space-y-4">
                    {[
                      "Performance-first development",
                      "Mobile-responsive designs",
                      "Clean, maintainable code",
                      "Transparent communication",
                      "On-time delivery",
                      "Post-launch support",
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-gray-300">
                        <span className="text-[#FF6B4A]">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 px-6 bg-[#0F0F18]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#FF6B4A] text-sm font-medium uppercase tracking-wider">Testimonials</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4">What Our Clients Say</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { quote: "Manila Creatives transformed our online presence. Our new site loads 3x faster and conversions are up 40%.", name: "Maria Santos", role: "CEO, TechStart PH" },
              { quote: "Professional, responsive, and incredibly talented. They understood our vision perfectly and delivered beyond expectations.", name: "James Chen", role: "Founder, GreenLeaf Co" },
              { quote: "The e-commerce site they built us handles thousands of orders daily without a hitch. Highly recommended!", name: "Ana Reyes", role: "Director, StyleManila" },
            ].map((testimonial, i) => (
              <div key={i} className="bg-[#1a1a24] border border-white/5 rounded-2xl p-8">
                <p className="text-gray-300 leading-relaxed mb-6">"{testimonial.quote}"</p>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-gray-500 text-sm">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <span className="text-[#FF6B4A] text-sm font-medium uppercase tracking-wider">Get In Touch</span>
              <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">Let's build something great</h2>
              <p className="text-gray-400 leading-relaxed mb-8">
                Ready to start your project? Fill out the form and we'll get back to you within 24 hours to discuss your needs.
              </p>
              <div className="space-y-4 text-gray-400">
                <p>📧 hello@manilacreatives.com</p>
                <p>📱 +63 912 345 6789</p>
                <p>📍 Manila, Philippines</p>
              </div>
            </div>
            <div className="bg-[#1a1a24] border border-white/5 rounded-2xl p-8">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Your Name</label>
                  <input
                    type="text"
                    placeholder="Juan dela Cruz"
                    className="w-full bg-[#0A0A0F] border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-[#FF6B4A] transition-colors placeholder:text-gray-600"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email Address</label>
                  <input
                    type="email"
                    placeholder="juan@company.com"
                    className="w-full bg-[#0A0A0F] border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-[#FF6B4A] transition-colors placeholder:text-gray-600"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Project Type</label>
                  <select className="w-full bg-[#0A0A0F] border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-[#FF6B4A] transition-colors text-gray-400">
                    <option value="">Select a service</option>
                    <option value="website">Custom Website</option>
                    <option value="ecommerce">E-commerce</option>
                    <option value="webapp">Web Application</option>
                    <option value="landing">Landing Page</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Project Details</label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your project..."
                    className="w-full bg-[#0A0A0F] border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-[#FF6B4A] transition-colors placeholder:text-gray-600 resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#FF6B4A] hover:bg-[#ff5533] text-white font-medium py-4 rounded-xl transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-500 text-sm">
            © 2026 Manila Creatives. All rights reserved.
          </div>
          <div className="flex gap-6 text-gray-500 text-sm">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
