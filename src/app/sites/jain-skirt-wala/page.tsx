"use client";

import React from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Playfair_Display, Nunito } from "next/font/google";
import {
  ShoppingBag,
  Shirt,
  Baby,
  Sparkles,
  Sun,
  Star,
  MapPin,
  Phone,
  Menu,
  X,
  ArrowRight,
} from "lucide-react";
import { MapIframe } from "@/components/MapIframe";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  display: "swap",
});

const business = {
  name: "Jain Skirt Wala",
  phone: "098111 55206",
  address: "484, Telibara, Shahdara, Delhi, 110032, India",
};

const heroImage = "https://lh3.googleusercontent.com/XCsZe8xbOX-c9D4ucDde4qodNNEC9LO5StzTpD98yI8X3qePMNsHICnbPh-ogER2ZigS8os5NPuDYJOMzOKi3Hk9NTXO=w1200-rw";

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function LandingPage() {
  const aboutRef = React.useRef(null);
  const servicesRef = React.useRef(null);
  const testimonialsRef = React.useRef(null);

  const aboutInView = useInView(aboutRef, { once: true, margin: "-100px" });
  const servicesInView = useInView(servicesRef, { once: true, margin: "-100px" });
  const testimonialsInView = useInView(testimonialsRef, { once: true, margin: "-100px" });

  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <>
      <div className={`${nunito.className} bg-[#DBE9F2] text-[#3E332E] min-h-screen`}>
        {/* Header */}
        <header className="sticky top-0 z-50 bg-[#DBE9F2]/95 backdrop-blur-sm border-b border-[#E3DDD2]">
          <nav className="max-w-[1280px] mx-auto px-4 md:px-8 flex items-center justify-between h-16">
            <Link href="#" className="text-xl font-bold tracking-tight" style={{ fontFamily: "var(--font-playfair)" }}>
              {business.name}
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
              <a href="#about" className="hover:text-[#D97706] transition-colors">
                About
              </a>
              <a href="#services" className="hover:text-[#D97706] transition-colors">
                Collections
              </a>
              <a href="#testimonials" className="hover:text-[#D97706] transition-colors">
                Reviews
              </a>
              <a href="#location" className="hover:text-[#D97706] transition-colors">
                Visit
              </a>
              <a
                href="tel:09811155206"
                className="inline-flex items-center gap-2 bg-[#D97706] text-[#EDF3FA] px-4 py-2 rounded-[2px] text-sm shadow-[0_1px_4px_rgba(0,0,0,0.06)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.08)] transition-shadow"
              >
                <Phone size={16} />
                {business.phone}
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-[2px] hover:bg-[#EDF3FA] transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </nav>

          {/* Mobile Menu Dropdown */}
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="md:hidden bg-[#EDF3FA] border-t border-[#E3DDD2] px-4 py-4 flex flex-col space-y-3 text-sm font-medium"
            >
              <a href="#about" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#D97706]">
                About
              </a>
              <a href="#services" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#D97706]">
                Collections
              </a>
              <a href="#testimonials" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#D97706]">
                Reviews
              </a>
              <a href="#location" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#D97706]">
                Visit
              </a>
              <a
                href="tel:09811155206"
                className="inline-flex items-center gap-2 bg-[#D97706] text-[#EDF3FA] px-4 py-2 rounded-[2px] w-fit"
              >
                <Phone size={16} />
                {business.phone}
              </a>
            </motion.div>
          )}
        </header>

        {/* Hero Section */}
        <section className="relative h-[80vh] min-h-[500px] overflow-hidden">
          <Image
            src={heroImage}
            alt="Jain Skirt Wala store interior"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-[1280px] mx-auto px-4 md:px-8 w-full">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className={`${playfair.className} text-white max-w-2xl`}
              >
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4">
                  Unique Clothes,
                  <br />
                  Honest Prices
                </h1>
                <p className={`${nunito.className} text-lg md:text-xl text-[#DBE9F2] mb-8`}>
                  Shahdara&apos;s most loved clothing store for the whole family.
                </p>
                <Link
                  href="#location"
                  className="inline-flex items-center gap-3 bg-[#D97706] text-[#EDF3FA] px-6 py-3 rounded-[2px] font-semibold shadow-[0_1px_4px_rgba(0,0,0,0.06)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.08)] transition-shadow"
                >
                  Visit Our Store
                  <ArrowRight size={20} />
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" ref={aboutRef} className="py-16 md:py-24 px-4 md:px-8 max-w-[1280px] mx-auto">
          <motion.div
            initial="hidden"
            animate={aboutInView ? "visible" : "hidden"}
            variants={sectionVariants}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <p className={`${nunito.className} text-[#6E6259] text-sm uppercase tracking-wider mb-2`}>
                A family tradition of quality and style.
              </p>
              <h2 className={`${playfair.className} text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight`}>
                About Jain Skirt Wala
              </h2>
              <p className={`${nunito.className} text-[#3E332E] text-lg leading-relaxed`}>
                We are a beloved clothing store in Shahdara, Delhi, offering a wide range of apparel for men, women, and kids.
                From everyday casuals to stunning party wear, we bring you unique designs, top-quality fabrics, and prices that
                fit your budget. Step in for a personalized shopping experience where every piece is chosen with care.
              </p>
            </div>
            <div className="relative h-[300px] md:h-[400px] w-full overflow-hidden rounded-[2px] border border-[#E3DDD2]">
              <Image
                src="https://images.jdmagicbox.com/v2/comp/delhi/22/011p5503122/catalogue/jain-skirt-wala-shahdara-delhi-readymade-garment-retailers-1m3xi6d.jpg"
                alt="Clothing rack at Jain Skirt Wala"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </section>

        {/* Services Section */}
        <section id="services" ref={servicesRef} className="py-16 md:py-24 bg-[#EDF3FA]">
          <div className="max-w-[1280px] mx-auto px-4 md:px-8">
            <motion.div
              initial="hidden"
              animate={servicesInView ? "visible" : "hidden"}
              variants={sectionVariants}
              className="text-center mb-12"
            >
              <p className={`${nunito.className} text-[#6E6259] uppercase tracking-wider text-sm mb-2`}>
                Discover our wide range of clothing for the whole family.
              </p>
              <h2 className={`${playfair.className} text-3xl md:text-4xl lg:text-5xl font-bold mb-4`}>
                Collections for Everyone
              </h2>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Women's Fashion",
                  icon: ShoppingBag,
                  description:
                    "Trendy kurtas, suits, skirts, and more. Find your perfect look for every occasion.",
                },
                {
                  title: "Men's Apparel",
                  icon: Shirt,
                  description:
                    "From formal wear to casual shirts, trousers, and accessories—all under one roof.",
                },
                {
                  title: "Kids Collection",
                  icon: Baby,
                  description:
                    "Adorable and comfortable clothes for children of all ages, loved by parents and kids alike.",
                },
                {
                  title: "Party & Occasion Wear",
                  icon: Sparkles,
                  description:
                    "Stand out at weddings, festivals, and special events with our stunning collection.",
                },
                {
                  title: "Casual Daily Wear",
                  icon: Sun,
                  description:
                    "Soft, breathable fabrics for your everyday style—comfort meets fashion.",
                },
              ].map((service, i) => (
                <motion.div
                  key={service.title}
                  initial="hidden"
                  animate={servicesInView ? "visible" : "hidden"}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { delay: i * 0.1, duration: 0.4 },
                    },
                  }}
                  className="group bg-[#DBE9F2] border border-[#E3DDD2] rounded-[2px] p-6 hover:shadow-[0_4px_12px_rgba(0,0,0,0.08)] transition-shadow"
                >
                  <service.icon className="w-8 h-8 text-[#D97706] mb-4" strokeWidth={1.5} />
                  <h3 className={`${playfair.className} text-xl font-bold mb-2`}>{service.title}</h3>
                  <p className={`${nunito.className} text-[#6E6259]`}>{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" ref={testimonialsRef} className="py-16 md:py-24 px-4 md:px-8 max-w-[1280px] mx-auto">
          <motion.div
            initial="hidden"
            animate={testimonialsInView ? "visible" : "hidden"}
            variants={sectionVariants}
            className="text-center mb-12"
          >
            <p className={`${nunito.className} text-[#6E6259] uppercase tracking-wider text-sm mb-2`}>
              Real reviews from real people.
            </p>
            <h2 className={`${playfair.className} text-3xl md:text-4xl lg:text-5xl font-bold mb-4`}>
              Why Our Customers Love Us
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Unique Selection",
                description:
                  "They sell amazing clothes. Every cloth is different from the other. I personally feel it's a bit expensive but it's always crowded which means that people value quality over pockets.",
              },
              {
                title: "Best Value",
                description:
                  "Many gent's wear brand under one roof from top to bottom at a very reasonable price. Nice dealing of staff with customers.",
              },
              {
                title: "Trendy Designs",
                description:
                  "Unique and trendy clothes ….. owner is very nice and humble and staff is very good.",
              },
              {
                title: "One-Stop Shop",
                description:
                  "Best shop for all your clothing needs. Here you can find all the varieties whether its (Formal, Casual, Daily wear or even the auspicious party wear). All the products are available at unbeatable prices and the product quality is topnotch.",
              },
              {
                title: "Favourite for Kids",
                description: "All time my favourite shop for kids collection!",
              },
            ].map((testimonial, i) => (
              <motion.div
                key={testimonial.title}
                initial="hidden"
                animate={testimonialsInView ? "visible" : "hidden"}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { delay: i * 0.1, duration: 0.4 },
                  },
                }}
                className="bg-[#EDF3FA] border border-[#E3DDD2] rounded-[2px] p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex gap-1 mb-3">
                    {[...Array(5)].map((_, starI) => (
                      <Star key={starI} size={16} className="fill-[#D97706] text-[#D97706]" />
                    ))}
                  </div>
                  <h3 className={`${playfair.className} text-lg font-bold mb-2`}>{testimonial.title}</h3>
                  <p className={`${nunito.className} text-[#6E6259]`}>{testimonial.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Location Map Section */}
        <section id="location" className="py-16 md:py-24 bg-[#EDF3FA]">
          <div className="max-w-[1280px] mx-auto px-4 md:px-8">
            <div className="text-center mb-10">
              <p className={`${nunito.className} text-[#6E6259] uppercase tracking-wider text-sm mb-2`}>
                Come see the collection for yourself.
              </p>
              <h2 className={`${playfair.className} text-3xl md:text-4xl lg:text-5xl font-bold mb-4`}>
                Visit Our Store
              </h2>
            </div>
            <div className="rounded-[2px] overflow-hidden border border-[#E3DDD2] h-[400px] w-full">
              <MapIframe lat={28.67069} lng={77.29055} className="w-full h-full" />
            </div>
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
              <Link
                href="https://www.google.com/maps?q=28.67069,77.29055"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#1E3A5F] text-[#EDF3FA] px-5 py-3 rounded-[2px] shadow-[0_1px_4px_rgba(0,0,0,0.06)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.08)] transition-shadow"
              >
                <MapPin size={18} />
                Get Directions
              </Link>
              <span className={`${nunito.className} text-[#6E6259]`}>{business.address}</span>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section id="cta" className="py-16 md:py-24 px-4 md:px-8 max-w-[1280px] mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-[#1E3A5F] text-[#EDF3FA] rounded-[2px] p-10 md:p-16 shadow-[0_4px_12px_rgba(0,0,0,0.08)]"
          >
            <h2 className={`${playfair.className} text-3xl md:text-4xl lg:text-5xl font-bold mb-4`}>
              Ready for a Style Update?
            </h2>
            <p className={`${nunito.className} text-lg mb-8 max-w-xl mx-auto text-[#DBE9F2]`}>
              Call us or drop by—we’re here to help you find the perfect outfit.
            </p>
            <Link
              href="tel:09811155206"
              className="inline-flex items-center gap-3 bg-[#D97706] text-[#EDF3FA] px-8 py-4 rounded-[2px] font-semibold text-lg shadow-[0_1px_4px_rgba(0,0,0,0.06)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.08)] transition-shadow"
            >
              <Phone size={22} />
              Call Now
            </Link>
          </motion.div>
        </section>

        {/* Footer */}
        <footer className="bg-[#1E3A5F] text-[#DBE9F2] py-12 px-4 md:px-8">
          <div className="max-w-[1280px] mx-auto grid md:grid-cols-3 gap-8 items-start">
            <div>
              <h3 className={`${playfair.className} text-2xl font-bold mb-2`}>{business.name}</h3>
              <p className={nunito.className}>A family tradition of quality and style.</p>
            </div>
            <div>
              <h4 className={`${playfair.className} font-bold mb-2`}>Contact</h4>
              <ul className={`${nunito.className} space-y-2`}>
                <li className="flex items-center gap-2">
                  <Phone size={16} />
                  <a href="tel:09811155206" className="hover:text-[#D97706] transition-colors">
                    {business.phone}
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <MapPin size={16} />
                  <span>{business.address}</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className={`${playfair.className} font-bold mb-2`}>Quick Links</h4>
              <ul className={`${nunito.className} space-y-2`}>
                <li>
                  <a href="#about" className="hover:text-[#D97706] transition-colors">About</a>
                </li>
                <li>
                  <a href="#services" className="hover:text-[#D97706] transition-colors">Collections</a>
                </li>
                <li>
                  <a href="#testimonials" className="hover:text-[#D97706] transition-colors">Reviews</a>
                </li>
              </ul>
            </div>
          </div>
          <div className={`${nunito.className} border-t border-[#E3DDD2] mt-8 pt-6 text-center text-sm text-[#6E6259]`}>
            © {new Date().getFullYear()} {business.name}. All rights reserved.
          </div>
        </footer>
      </div>

      {/* Floating WhatsApp */}
      <FloatingWhatsApp
        phoneNumber="09811155206"
        message="Hi, I'm looking for some new clothes!"
        className="z-50"
      />
    </>
  );
}