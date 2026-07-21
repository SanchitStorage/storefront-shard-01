"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Lora, Source_Sans_3 } from "next/font/google";
import {
  Menu,
  X,
  Shirt,
  Sparkles,
  Clock,
  Feather,
  UserCheck,
  DollarSign,
} from "lucide-react";
import { MapIframe } from "@/components/MapIframe";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source-sans",
});

const serviceIcons: Record<string, React.ElementType> = {
  Shirt,
  Sparkles,
  Clock,
  Feather,
  UserCheck,
  DollarSign,
};

const servicesData = [
  {
    title: "Premium Apparel",
    iconName: "Shirt",
    description: "Hand-picked garments in high-quality fabrics that stand the test of time.",
  },
  {
    title: "Fashion-Forward Outfits",
    iconName: "Sparkles",
    description: "Stay ahead with the latest trends and unique, eye-catching designs.",
  },
  {
    title: "Classic Designs",
    iconName: "Clock",
    description: "Timeless pieces that never go out of style, perfect for any occasion.",
  },
  {
    title: "High-Quality Fabrics",
    iconName: "Feather",
    description: "We source only the best materials for comfort and durability.",
  },
  {
    title: "Personalized Styling Advice",
    iconName: "UserCheck",
    description: "Our friendly team helps you find the perfect fit and look.",
  },
  {
    title: "Value-for-Money Fashion",
    iconName: "DollarSign",
    description: "Premium quality at prices that make sense for your wallet.",
  },
];

const testimonialsData = [
  {
    title: "Loyal Customer",
    description:
      "Great place to shop premium quality in a good price, shopping since 7-8 years. Fully satisfied with the quality. Gagan sir is a great consultant.",
  },
  {
    title: "Satisfied Shopper",
    description:
      "Great experience doing my shopping at BRAND STATION! The amount of styles is remarkable. The quality of the fabrics is excellent and prices are fair.",
  },
  {
    title: "Value Seeker",
    description:
      "Sardaar ji is very friendly. Items are value for money. All the items are hand picked.",
  },
  {
    title: "Quality Conscious",
    description:
      "Very satisfied with the clothes. Material quality is outstanding and it delivers exactly as promised.",
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className={`${sourceSans.variable} ${lora.variable}`}>
      <div className={`${sourceSans.className} bg-[#EEF2F6] min-h-screen`}>
        {/* Header */}
        <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-[#D6CCC0] shadow-sm">
          <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
            <Link
              href="/"
              className={`${lora.className} text-2xl font-semibold text-[#2C4053]`}
            >
              Brand Station
            </Link>
            <nav className="hidden md:flex space-x-8 text-sm font-medium text-[#2C4053]">
              <Link href="#services" className="hover:text-[#8B6B4A] transition">
                Services
              </Link>
              <Link href="#about" className="hover:text-[#8B6B4A] transition">
                About
              </Link>
              <Link href="#testimonials" className="hover:text-[#8B6B4A] transition">
                Testimonials
              </Link>
              <Link href="#location" className="hover:text-[#8B6B4A] transition">
                Visit
              </Link>
              <Link href="#cta" className="hover:text-[#8B6B4A] transition">
                Contact
              </Link>
            </nav>
            <div className="md:hidden">
              <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
                {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
          {menuOpen && (
            <div className="md:hidden bg-white border-t border-[#D6CCC0] px-4 py-4 space-y-3">
              <Link
                href="#services"
                className="block py-2"
                onClick={() => setMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="#about"
                className="block py-2"
                onClick={() => setMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="#testimonials"
                className="block py-2"
                onClick={() => setMenuOpen(false)}
              >
                Testimonials
              </Link>
              <Link
                href="#location"
                className="block py-2"
                onClick={() => setMenuOpen(false)}
              >
                Visit
              </Link>
              <Link
                href="#cta"
                className="block py-2"
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          )}
        </header>

        {/* Hero */}
        <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
          <Image
            src="https://img.magicpin.com/8087355_cover_0.jpg"
            alt="Brand Station store"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/20" />
          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto text-white">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className={`${lora.className} text-4xl md:text-6xl font-semibold leading-tight`}
            >
              Stylish Menswear, Tailored Just for You
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="mt-6 text-lg md:text-xl text-gray-200 max-w-2xl mx-auto"
            >
              Premium quality and unique designs in Shahdara
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-10"
            >
              <Link
                href="#services"
                className="inline-block px-8 py-3 bg-[#3A3A3C] text-white rounded-[2px] shadow-md hover:bg-opacity-90 transition text-base font-medium"
              >
                Explore Our Collection
              </Link>
            </motion.div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="max-w-7xl mx-auto px-4 py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative aspect-[4/3] w-full rounded-[2px] overflow-hidden shadow-md"
          >
            <Image
              src="https://img.magicpin.com/8087355_store_images_7.jpg"
              alt="Brand Station interior"
              fill
              className="object-cover"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2
              className={`${lora.className} text-3xl md:text-4xl font-semibold text-[#2C4053]`}
            >
              Your Trusted Menswear Destination in Shahdara
            </h2>
            <p className="mt-6 text-[#2C4053] leading-relaxed">
              For over 7 years, Brand Station has been the go-to shop for men who want
              premium quality fabrics, fashion-forward styles, and classic designs at
              fair prices. Our friendly staff, including Gagan sir and Salman bhai,
              provide personalized styling advice to make sure you leave looking and
              feeling your best.
            </p>
          </motion.div>
        </section>

        {/* Services */}
        <section id="services" className="bg-white py-24">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className={`${lora.className} text-3xl md:text-4xl font-semibold text-[#2C4053]`}
              >
                What We Offer
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="mt-4 text-lg text-[#6C7A89]"
              >
                Quality, style, and value in every piece
              </motion.p>
            </div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.1 },
                },
              }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {servicesData.map((service, index) => {
                const Icon = serviceIcons[service.iconName] || Shirt;
                return (
                  <motion.div
                    key={index}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    transition={{ duration: 0.5 }}
                    className="bg-[#F7FAFD] border border-[#D6CCC0] rounded-[2px] p-6 shadow-sm flex flex-col items-start"
                  >
                    <Icon className="w-8 h-8 text-[#8B6B4A] mb-4" />
                    <h3
                      className={`${lora.className} text-xl font-semibold text-[#2C4053]`}
                    >
                      {service.title}
                    </h3>
                    <p className="mt-3 text-[#2C4053] leading-relaxed text-sm">
                      {service.description}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="py-24">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className={`${lora.className} text-3xl md:text-4xl font-semibold text-[#2C4053]`}
              >
                What Our Customers Say
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="mt-4 text-lg text-[#6C7A89]"
              >
                Real reviews from real shoppers
              </motion.p>
            </div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.1 },
                },
              }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {testimonialsData.map((testimonial, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.5 }}
                  className="bg-white border border-[#D6CCC0] rounded-[2px] p-6 shadow-sm"
                >
                  <p className="text-[#2C4053] italic leading-relaxed">
                    “{testimonial.description}”
                  </p>
                  <p className="mt-4 text-sm font-medium text-[#8B6B4A]">
                    {testimonial.title}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Location Map */}
        <section id="location" className="bg-white py-24">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className={`${lora.className} text-3xl md:text-4xl font-semibold text-[#2C4053]`}
              >
                Find Us in Shahdara
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="mt-4 text-lg text-[#6C7A89]"
              >
                Visit our store for a personal shopping experience
              </motion.p>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="rounded-[2px] overflow-hidden shadow-md"
            >
              <MapIframe
                lat={28.682997600000004}
                lng={77.28741459999999}
                className="w-full h-[400px]"
              />
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="mt-8 text-center text-[#2C4053] leading-relaxed max-w-2xl mx-auto"
            >
              We are located in Shahdara, Delhi. Drop by and say hello!
            </motion.p>
          </div>
        </section>

        {/* CTA */}
        <section id="cta" className="bg-[#3A3A3C] text-white py-24">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className={`${lora.className} text-3xl md:text-5xl font-semibold`}
            >
              Ready to Elevate Your Wardrobe?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="mt-6 text-lg text-gray-200"
            >
              Visit us today and get personalized styling advice.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="mt-4 text-sm text-gray-300"
            >
              We are open all week. Call or visit us for a great shopping
              experience.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="mt-10"
            >
              <Link
                href="https://maps.google.com/?q=28.6829976,77.2874146"
                className="inline-block px-8 py-3 bg-white text-[#3A3A3C] rounded-[2px] shadow-md hover:bg-gray-100 transition font-medium"
              >
                Visit Us
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Floating WhatsApp */}
        <FloatingWhatsApp
          phoneNumber="09910309313"
          message="Hi! I'd like to know more about your collection."
        />

        {/* Footer */}
        <footer className="bg-white border-t border-[#D6CCC0] py-12 mt-0">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <p
              className={`${lora.className} text-xl font-semibold text-[#2C4053]`}
            >
              Brand Station
            </p>
            <p className="text-[#6C7A89] mt-2">099103 09313</p>
            <p className="text-[#6C7A89] mt-1">
              © {new Date().getFullYear()} Brand Station. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}