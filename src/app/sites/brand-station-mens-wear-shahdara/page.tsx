"use client"

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Menu,
  X,
  Phone,
  MapPin,
  Star,
  Shirt,
  ShoppingBag,
  Scissors,
  UserCheck,
  Banknote,
} from "lucide-react";

const services = [
  {
    icon: ShoppingBag,
    title: "Premium Men's Apparel",
    description: "Curated collections for every occasion.",
  },
  {
    icon: Shirt,
    title: "Fashion-forward & Classic Styles",
    description: "Trend-led and timeless pieces side by side.",
  },
  {
    icon: Scissors,
    title: "Excellent Fabric Quality",
    description: "Handpicked fabrics that feel and last.",
  },
  {
    icon: UserCheck,
    title: "Personalized Styling Advice",
    description: "Gagan sir and team at your service.",
  },
  {
    icon: Banknote,
    title: "Value for Money Collections",
    description: "Premium looks without the premium price tag.",
  },
];

const reviews = [
  {
    rating: 5,
    date: "7 months ago",
    text: "Great place to shop premium quality in a good price, shopping since 7-8 years. Fully satisfied with the quality. Gagan sir is a great consultant and owner himself, make sure to consult and take suggestions before buying.\nCheers to the Polite salesperson salman bhai.",
  },
  {
    rating: 5,
    date: "6 months ago",
    text: "I've had a great experience doing my shopping at BRAND STATION! The amount of styles — ranging from fashion-forward outfits to classic designs — is remarkable. The quality of the fabrics is excellent, and the prices are fair considering what you receive.\n\nThe staff are friendly and never fail to assist with recommendations, fittings, and styling advice. The shop is spotlessly clean, well-arranged, and a pleasure to shop. Whether you're picking up something for a regular day or a special event, this store never fails.\n\nStrongly recommend to anyone who wants quality fashion and a welcoming shopping experience!\nThanks",
  },
  {
    rating: 5,
    date: "a month ago",
    text: "Sardaar ji is very friendly. Items are value for money. All the items are hand picked.",
  },
  {
    rating: 5,
    date: "6 months ago",
    text: "I’m very satisfied with the clothes. The material quality is outstanding and it delivers exactly as promised. Packaging and overall presentation were also good 👍",
  },
  {
    rating: 5,
    date: "5 months ago",
    text: "Collection is very unique and price is so affordable another thing which is more important Quality is next level. If you're looking for genuine products, You must visit here.",
  },
];

const galleryImages = [
  { src: "https://img.magicpin.com/8087355_store_images_7.jpg", alt: "Store interior" },
  { src: "https://img.magicpin.com/8087355_store_images_1.jpg", alt: "Apparel display" },
  { src: "https://images.jdmagicbox.com/v2/comp/delhi/k5/011pxx11.xx11.200522042322.x2k5/catalogue/brand-station-shahdara-delhi-kurta-pyjama-wholesalers-2pfyvuke65.jpg", alt: "Kurta collection" },
  { src: "https://images.jdmagicbox.com/v2/comp/delhi/k5/011pxx11.xx11.200522042322.x2k5/catalogue/brand-station-shahdara-delhi-kurta-pyjama-wholesalers-ffw0rd4stq.jpg", alt: "Customer shopping" },
];

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F5F5DC] text-[#6D3B07] font-['DM_Sans'] antialiased">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-[#F5F5DC]/95 backdrop-blur-sm border-b border-[#E5E5E5]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8 flex items-center justify-between h-16">
          <Link href="/" className="font-['Playfair_Display'] font-bold text-2xl text-[#6F4E37]">
            Brand Station
          </Link>
          
          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-[#6D3B07] hover:text-[#D47E30] transition-colors font-medium">Services</a>
            <a href="#gallery" className="text-[#6D3B07] hover:text-[#D47E30] transition-colors font-medium">Gallery</a>
            <a href="#reviews" className="text-[#6D3B07] hover:text-[#D47E30] transition-colors font-medium">Reviews</a>
            <a href="#contact" className="text-[#6D3B07] hover:text-[#D47E30] transition-colors font-medium">Contact</a>
            <a
              href="tel:09910309313"
              className="inline-flex items-center gap-2 bg-[#D47E30] hover:bg-[#B55B23] text-white font-medium rounded-lg py-2.5 px-5 transition-colors duration-150"
            >
              <Phone size={18} />
              <span>099103 09313</span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg text-[#6F4E37] hover:bg-[#E5E5E5]/50 transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="md:hidden bg-[#F5F5DC] border-t border-[#E5E5E5] px-4 py-6 space-y-4"
          >
            <a
              href="#services"
              onClick={() => setIsMenuOpen(false)}
              className="block text-[#6D3B07] font-medium hover:text-[#D47E30] transition-colors"
            >
              Services
            </a>
            <a
              href="#gallery"
              onClick={() => setIsMenuOpen(false)}
              className="block text-[#6D3B07] font-medium hover:text-[#D47E30] transition-colors"
            >
              Gallery
            </a>
            <a
              href="#reviews"
              onClick={() => setIsMenuOpen(false)}
              className="block text-[#6D3B07] font-medium hover:text-[#D47E30] transition-colors"
            >
              Reviews
            </a>
            <a
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
              className="block text-[#6D3B07] font-medium hover:text-[#D47E30] transition-colors"
            >
              Contact
            </a>
            <a
              href="tel:09910309313"
              className="inline-flex items-center gap-2 bg-[#D47E30] hover:bg-[#B55B23] text-white font-medium rounded-lg py-2.5 px-5 transition-colors duration-150"
            >
              <Phone size={18} />
              <span>099103 09313</span>
            </a>
          </motion.div>
        )}
      </nav>

      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-[#F5F5DC]">
          <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16 grid lg:grid-cols-12 gap-8 items-center">
            {/* Text Block */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, amount: 0.3 }}
              className="lg:col-span-5"
            >
              <h1 className="font-['Playfair_Display'] font-bold text-4xl md:text-5xl lg:text-6xl text-[#6F4E37] leading-tight">
                Shahdara's Destination for Premium Men's Fashion
              </h1>
              <p className="mt-4 text-lg md:text-xl text-[#6D3B07]/80 font-['DM_Sans']">
                Quality Styles, Unbeatable Value — where every garment tells a story.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:09910309313"
                  className="inline-flex items-center gap-2 bg-[#D47E30] hover:bg-[#B55B23] text-white font-medium rounded-lg py-3 px-6 transition-colors duration-150 shadow-md"
                >
                  <Phone size={18} />
                  Call Now
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 border-2 border-[#6F4E37] text-[#6F4E37] hover:bg-[#6F4E37]/5 font-medium rounded-lg py-3 px-6 transition-colors duration-150"
                >
                  <MapPin size={18} />
                  Get Directions
                </a>
              </div>
              <div className="mt-6 flex items-center gap-2 text-[#737373] text-sm">
                <Star className="fill-[#D47E30] text-[#D47E30]" size={16} />
                <span className="font-medium text-[#6D3B07]">4.6</span>
                <span>(186 reviews)</span>
              </div>
            </motion.div>

            {/* Hero Image - Bleeds right on desktop */}
            <motion.div
              initial={{ opacity: 0, scale: 1.05 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, amount: 0.3 }}
              className="lg:col-span-7 relative w-full h-80 md:h-[32rem] lg:h-[40rem] overflow-hidden rounded-2xl lg:rounded-l-2xl lg:rounded-r-none shadow-lg"
            >
              <Image
                src="https://img.magicpin.com/8087355_cover_0.jpg"
                alt="Brand Station premium men's fashion"
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          </div>
          {/* Subtle decorative line */}
          <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#D47E30]/0 via-[#D47E30] to-[#D47E30]/0" />
        </section>

        {/* Services Section */}
        <section id="services" className="py-12 md:py-16 bg-white">
          <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, amount: 0.2 }}
              className="text-center mb-12"
            >
              <h2 className="font-['Playfair_Display'] font-bold text-3xl md:text-4xl text-[#6F4E37]">
                What Makes Us Different
              </h2>
              <div className="w-16 h-0.5 bg-[#D47E30] mx-auto mt-4" />
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  className="bg-[#F5F5DC] p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-150 border border-[#E5E5E5]/50"
                >
                  <div className="w-12 h-12 bg-[#D47E30]/10 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="text-[#D47E30]" size={24} />
                  </div>
                  <h3 className="font-['Playfair_Display'] font-bold text-xl text-[#6F4E37] mb-2">
                    {service.title}
                  </h3>
                  <p className="text-[#6D3B07]/70 font-['DM_Sans']">
                    {service.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section id="gallery" className="py-12 md:py-16 bg-[#F5F5DC]">
          <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, amount: 0.2 }}
              className="text-center mb-12"
            >
              <h2 className="font-['Playfair_Display'] font-bold text-3xl md:text-4xl text-[#6F4E37]">
                Step Inside Brand Station
              </h2>
              <div className="w-16 h-0.5 bg-[#D47E30] mx-auto mt-4" />
            </motion.div>
            <div className="grid md:grid-cols-2 gap-6">
              {galleryImages.map((img, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  className="relative w-full h-72 md:h-96 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-150"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        <section id="reviews" className="py-12 md:py-16 bg-white">
          <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, amount: 0.2 }}
              className="text-center mb-12"
            >
              <h2 className="font-['Playfair_Display'] font-bold text-3xl md:text-4xl text-[#6F4E37]">
                What Our Customers Say
              </h2>
              <div className="w-16 h-0.5 bg-[#D47E30] mx-auto mt-4" />
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {reviews.map((review, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  className="bg-[#F5F5DC] rounded-xl p-6 shadow-sm border border-[#E5E5E5]/50 flex flex-col"
                >
                  <div className="flex items-center gap-1 mb-3">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Star key={i} className="fill-[#D47E30] text-[#D47E30]" size={16} />
                    ))}
                  </div>
                  <p className="text-[#6D3B07]/80 font-['DM_Sans'] text-sm leading-relaxed flex-1 whitespace-pre-line">
                    {review.text}
                  </p>
                  <p className="mt-4 text-xs text-[#737373] font-['DM_Sans'] uppercase tracking-wide">
                    {review.date}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact & Location Section */}
        <section id="contact" className="py-12 md:py-16 bg-[#F5F5DC]">
          <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, amount: 0.2 }}
              className="text-center mb-12"
            >
              <h2 className="font-['Playfair_Display'] font-bold text-3xl md:text-4xl text-[#6F4E37]">
                Visit Us
              </h2>
              <div className="w-16 h-0.5 bg-[#D47E30] mx-auto mt-4" />
            </motion.div>
            <div className="flex flex-col lg:flex-row gap-8 items-center">
              <div className="flex-1 space-y-6">
                <div className="bg-white rounded-xl p-6 shadow-sm border border-[#E5E5E5]/50">
                  <div className="flex items-start gap-4">
                    <MapPin className="text-[#D47E30] mt-1 flex-shrink-0" size={24} />
                    <div>
                      <h3 className="font-['Playfair_Display'] font-bold text-xl text-[#6F4E37] mb-1">
                        Brand Station
                      </h3>
                      <p className="text-[#6D3B07]/80 font-['DM_Sans']">
                        1/7037, Shivaji Park, Shahdara, Delhi, 110032, India
                      </p>
                    </div>
                  </div>
                  <div className="mt-6 flex items-center gap-4">
                    <Phone className="text-[#D47E30]" size={20} />
                    <a
                      href="tel:09910309313"
                      className="text-[#6D3B07] hover:text-[#D47E30] font-medium font-['DM_Sans'] transition-colors"
                    >
                      099103 09313
                    </a>
                  </div>
                </div>
                <div className="flex gap-4">
                  <a
                    href="tel:09910309313"
                    className="inline-flex items-center gap-2 bg-[#D47E30] hover:bg-[#B55B23] text-white font-medium rounded-lg py-3 px-6 transition-colors duration-150 shadow-md"
                  >
                    <Phone size={18} />
                    Call Now
                  </a>
                  <a
                    href="https://www.google.com/maps/dir/?api=1&destination=Brand+Station,1/7037+Shivaji+Park+Shahdara+Delhi+110032"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border-2 border-[#6F4E37] text-[#6F4E37] hover:bg-[#6F4E37]/5 font-medium rounded-lg py-3 px-6 transition-colors duration-150"
                  >
                    <MapPin size={18} />
                    Get Directions
                  </a>
                </div>
              </div>
              <div className="flex-1 w-full min-h-[300px] rounded-xl overflow-hidden shadow-md border border-[#E5E5E5]/50">
                {/* Replace with actual map embed if desired; keeping a stylized placeholder */}
                <div className="w-full h-full bg-white flex items-center justify-center p-4 text-center">
                  <p className="text-[#737373] font-['DM_Sans']">
                    Brand Station, Shivaji Park, Shahdara, Delhi 110032
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#6F4E37] text-white py-8">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <h4 className="font-['Playfair_Display'] font-bold text-lg">Brand Station</h4>
            <p className="text-white/70 text-sm font-['DM_Sans'] mt-1">
              Premium Men's Fashion in Shahdara
            </p>
          </div>
          <div className="flex items-center gap-2 text-sm text-white/70 font-['DM_Sans']">
            <span>© {new Date().getFullYear()} Brand Station</span>
            <span className="hidden sm:inline">•</span>
            <a href="tel:09910309313" className="hover:text-white transition-colors">
              099103 09313
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}