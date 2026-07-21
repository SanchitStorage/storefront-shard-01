"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Yatra_One, Mukta } from "next/font/google";
import {
  Menu,
  X,
  Sparkles,
  Shirt,
  Baby,
  Gem,
  HeartHandshake,
  MapPin,
  Phone,
  Star,
  ArrowRight
} from "lucide-react";
import { MapIframe } from "@/components/MapIframe";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

// ---------- Fonts ----------
const yatraOne = Yatra_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-yatra-one",
});
const mukta = Mukta({
  subsets: ["latin"],
  variable: "--font-mukta",
  weight: ["300", "400", "500", "600", "700"],
});

// ---------- Design Tokens (as constants for Tailwind) ----------
const colors = {
  bg: "#F3EDE2",
  surface: "#F9F5EF",
  primary: "#621B24",
  secondary: "#C99C3A",
  textPrimary: "#1A1A1A",
  textSecondary: "#2B3B4C",
  border: "#E5D4C0",
};

// ---------- Animation Variants ----------
const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

// ---------- Business Data ----------
const business = {
  name: "Jain Apparel House",
  phone: "098111 55206",
  address: "484, Telibara, Shahdara, Delhi, 110032, India",
};

// ---------- Section Icons Map ----------
const iconMap: Record<string, React.FC<{ className?: string }>> = {
  Sparkles,
  Shirt,
  Baby,
  Gem,
  HeartHandshake,
};

// ---------- The Page Component ----------
export default function LandingPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main
      className={`${mukta.className} relative min-h-screen`}
      style={{ backgroundColor: colors.bg, color: colors.textPrimary }}
    >
      {/* ---------- Header ---------- */}
      <header
        className="fixed top-0 left-0 w-full z-50 shadow-[0_2px_8px_rgba(26,26,26,0.08)] transition-all"
        style={{ backgroundColor: colors.surface, borderBottom: `1px solid ${colors.border}` }}
      >
        <nav className="max-w-[1280px] mx-auto px-4 md:px-8 flex items-center justify-between h-16">
          {/* Logo / Brand */}
          <Link
            href="/"
            className={`${yatraOne.className} text-xl`}
            style={{ color: colors.primary }}
          >
            {business.name}
          </Link>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-6 text-sm font-medium"
            style={{ color: colors.textSecondary }}
          >
            {[
              { label: "Services", href: "#services" },
              { label: "About", href: "#about" },
              { label: "Reviews", href: "#testimonials" },
              { label: "Location", href: "#location" },
              { label: "Contact", href: "#contact" },
            ].map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="hover:underline underline-offset-4 transition-colors"
                  style={{ color: colors.primary }}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={`tel:${business.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-1 font-semibold"
                style={{ color: colors.primary }}
              >
                <Phone size={14} /> {business.phone}
              </a>
            </li>
          </ul>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2"
            style={{ color: colors.primary }}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.nav
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="md:hidden overflow-hidden border-t"
              style={{ borderColor: colors.border }}
            >
              <ul className="flex flex-col gap-3 px-4 py-4 text-sm font-medium"
                style={{ color: colors.textSecondary }}
              >
                {[
                  { label: "Services", href: "#services" },
                  { label: "About", href: "#about" },
                  { label: "Reviews", href: "#testimonials" },
                  { label: "Location", href: "#location" },
                  { label: "Contact", href: "#contact" },
                ].map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      className="block py-1"
                      style={{ color: colors.primary }}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
                <li>
                  <a
                    href={`tel:${business.phone.replace(/\s/g, "")}`}
                    className="flex items-center gap-1 font-semibold text-base"
                    style={{ color: colors.primary }}
                  >
                    <Phone size={16} /> {business.phone}
                  </a>
                </li>
              </ul>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>

      {/* Spacer for fixed header */}
      <div className="h-16" />

      {/* ---------- HERO SECTION ---------- */}
      <section className="relative w-full h-[85vh] md:h-[90vh] flex items-center justify-center overflow-hidden">
        <Image
          src="https://content.jdmagicbox.com/v2/comp/delhi/22/011p5503122/catalogue/jain-skirt-wala-shahdara-delhi-kids-readymade-garment-retailers-pte7ocskpw-250.jpg"
          alt="Jain Apparel House storefront"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
          className="relative z-10 text-center px-4 max-w-3xl"
        >
          <h1
            className={`${yatraOne.className} text-4xl md:text-6xl lg:text-7xl mb-4`}
            style={{ color: colors.surface }}
          >
            Jain Apparel House
          </h1>
          <p
            className="text-lg md:text-xl font-light mb-2"
            style={{ color: colors.surface }}
          >
            Your Family’s Favourite Clothing Store, Since 1985
          </p>
          <p
            className="text-base md:text-lg mb-8"
            style={{ color: colors.surface }}
          >
            Unique, trendy styles for men, women, and children — right here in Shahdara.
          </p>
          <a
            href="#services"
            className="inline-block px-8 py-3 font-semibold text-sm uppercase tracking-wider transition-colors duration-200 ease-out rounded-none"
            style={{ backgroundColor: colors.primary, color: "#FEFAF4" }}
          >
            Explore Our Collections
          </a>
        </motion.div>
      </section>

      {/* ---------- ABOUT SECTION ---------- */}
      <section id="about" className="py-16 md:py-24 px-4 md:px-8 max-w-[1280px] mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
          transition={{ duration: 0.5 }}
          className="order-2 md:order-1"
        >
          <h2
            className={`${yatraOne.className} text-3xl md:text-4xl mb-3`}
            style={{ color: colors.primary }}
          >
            A Shahdara Tradition of Quality
          </h2>
          <p
            className="text-lg italic mb-4"
            style={{ color: colors.textSecondary }}
          >
            Not just another clothing store — a family destination
          </p>
          <p className="leading-relaxed" style={{ color: colors.textPrimary }}>
            For over 40 years, Jain Apparel House (fondly known as Jain Skirt Wala) has been the
            go‑to spot for discerning families. Nestled in the heart of Shahdara, we believe every
            piece of clothing should have its own character. From daily wear to dazzling party
            outfits, we source and curate unique designs you won’t find anywhere else. Our
            customers say it best — great quality, warm service, and a collection that keeps them
            coming back.
          </p>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="order-1 md:order-2 relative h-[350px] w-full rounded overflow-hidden shadow-[0_2px_8px_rgba(26,26,26,0.08)]"
        >
          <Image
            src="https://images.jdmagicbox.com/v2/comp/delhi/22/011p5503122/catalogue/jain-skirt-wala-shahdara-delhi-readymade-garment-retailers-1m3xi6d.jpg"
            alt="Shop interior"
            fill
            className="object-cover"
          />
        </motion.div>
      </section>

      {/* ---------- SERVICES SECTION (MODULAR GRID / FABRIC SWATCHES) ---------- */}
      <section id="services" className="py-16 md:py-24 px-4 md:px-8 max-w-[1280px] mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2
            className={`${yatraOne.className} text-3xl md:text-4xl mb-2`}
            style={{ color: colors.primary }}
          >
            What We Offer
          </h2>
          <p className="text-lg" style={{ color: colors.textSecondary }}>
            Everything from formals to festive, for the whole family
          </p>
        </motion.div>

        {/* Modular grid – varying proportions like fabric swatches */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Card 1 – Women's Wear (tall, wide) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
            }}
            className="p-6 rounded border shadow-[0_2px_8px_rgba(26,26,26,0.08)] flex flex-col justify-center
                       min-h-[400px] md:col-span-1 lg:col-span-2 lg:row-span-2"
            style={{ backgroundColor: colors.surface, borderColor: colors.border }}
          >
            {iconMap["Sparkles"] && <iconMap.Sparkles className="w-8 h-8 mb-4" style={{ color: colors.primary }} />}
            <h3 className={`${yatraOne.className} text-xl mb-2`} style={{ color: colors.primary }}>Women’s Wear</h3>
            <p className="text-sm leading-relaxed" style={{ color: colors.textSecondary }}>
              Skirts, casual tops, and stunning party wear. Each piece is handpicked for style and comfort.
            </p>
          </motion.div>

          {/* Card 2 – Men’s Wear (compact) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.4, delay: 0.1 } },
            }}
            className="p-6 rounded border shadow-[0_2px_8px_rgba(26,26,26,0.08)] min-h-[220px]"
            style={{ backgroundColor: colors.surface, borderColor: colors.border }}
          >
            {iconMap["Shirt"] && <iconMap.Shirt className="w-8 h-8 mb-4" style={{ color: colors.primary }} />}
            <h3 className={`${yatraOne.className} text-xl mb-2`} style={{ color: colors.primary }}>Men’s Wear</h3>
            <p className="text-sm leading-relaxed" style={{ color: colors.textSecondary }}>
              Sharp formals, relaxed casuals, and accessories. Top brands at unbeatable prices.
            </p>
          </motion.div>

          {/* Card 3 – Kids’ Collection (compact) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.4, delay: 0.2 } },
            }}
            className="p-6 rounded border shadow-[0_2px_8px_rgba(26,26,26,0.08)] min-h-[220px]"
            style={{ backgroundColor: colors.surface, borderColor: colors.border }}
          >
            {iconMap["Baby"] && <iconMap.Baby className="w-8 h-8 mb-4" style={{ color: colors.primary }} />}
            <h3 className={`${yatraOne.className} text-xl mb-2`} style={{ color: colors.primary }}>Kids’ Collection</h3>
            <p className="text-sm leading-relaxed" style={{ color: colors.textSecondary }}>
              From everyday playwear to festive outfits, our kids’ range is a hit with little ones and parents.
            </p>
          </motion.div>

          {/* Card 4 – Unique Designs (wide, short) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.4, delay: 0.1 } },
            }}
            className="p-6 rounded border shadow-[0_2px_8px_rgba(26,26,26,0.08)] lg:col-span-2 min-h-[180px]"
            style={{ backgroundColor: colors.surface, borderColor: colors.border }}
          >
            {iconMap["Gem"] && <iconMap.Gem className="w-8 h-8 mb-4" style={{ color: colors.primary }} />}
            <h3 className={`${yatraOne.className} text-xl mb-2`} style={{ color: colors.primary }}>Unique Designs</h3>
            <p className="text-sm leading-relaxed" style={{ color: colors.textSecondary }}>
              We search far and wide to bring you clothes that stand out. No two pieces are alike.
            </p>
          </motion.div>

          {/* Card 5 – Personal Touch (wide, short) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.4, delay: 0.2 } },
            }}
            className="p-6 rounded border shadow-[0_2px_8px_rgba(26,26,26,0.08)] lg:col-span-2 min-h-[180px]"
            style={{ backgroundColor: colors.surface, borderColor: colors.border }}
          >
            {iconMap["HeartHandshake"] && <iconMap.HeartHandshake className="w-8 h-8 mb-4" style={{ color: colors.primary }} />}
            <h3 className={`${yatraOne.className} text-xl mb-2`} style={{ color: colors.primary }}>Personal Touch</h3>
            <p className="text-sm leading-relaxed" style={{ color: colors.textSecondary }}>
              Our friendly owner and staff make sure you leave with a smile and the perfect fit.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ---------- TESTIMONIALS SECTION (LEDGER / PATTERN CARDS) ---------- */}
      <section id="testimonials" className="py-16 md:py-24 px-4 md:px-8"
        style={{ backgroundColor: colors.surface }}
      >
        <div className="max-w-[1280px] mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2
              className={`${yatraOne.className} text-3xl md:text-4xl mb-2`}
              style={{ color: colors.primary }}
            >
              What Our Customers Say
            </h2>
            <p className="text-lg" style={{ color: colors.textSecondary }}>
              Real reviews from people who love us
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Amazing Variety & Quality",
                description:
                  "They sell amazing clothes. Every cloth is different from the other. People value quality over pockets. That's why it's always crowded.",
              },
              {
                title: "One-Stop Shop",
                description:
                  "Best shop for all your clothing needs — formal, casual, daily wear, or party wear. Products at unbeatable prices and top-notch quality. Customer service is the best!",
              },
              {
                title: "Gentlemen’s Paradise",
                description:
                  "Many men's wear brands under one roof, top to bottom, at very reasonable prices. The staff are great to deal with.",
              },
              {
                title: "Favourite for Kids",
                description:
                  "All time favourite shop for kids collection! The styles are just too cute.",
              },
              {
                title: "Warm & Humble Service",
                description:
                  "Unique and trendy clothes. The owner is very nice and humble, and the staff is excellent.",
              },
            ].map((t, idx) => (
              <motion.blockquote
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeInUp}
                transition={{ delay: idx * 0.1, duration: 0.4 }}
                className="relative p-6 rounded border overflow-hidden"
                style={{ backgroundColor: colors.bg, borderColor: colors.border }}
              >
                {/* Left accent bar – ledger style */}
                <div className="absolute left-0 top-0 bottom-0 w-1" style={{ backgroundColor: colors.primary }} />
                <span className="text-xs uppercase tracking-widest mb-2 block" style={{ color: colors.textSecondary }}>
                  Customer Note
                </span>
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill={colors.secondary} color={colors.secondary} />
                  ))}
                </div>
                <p className="text-sm leading-relaxed italic" style={{ color: colors.textSecondary }}>
                  “{t.description}”
                </p>
                <footer className="mt-3 font-semibold" style={{ color: colors.primary }}>
                  — {t.title}
                </footer>
              </motion.blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- LOCATION MAP SECTION ---------- */}
      <section id="location" className="py-16 md:py-24 px-4 md:px-8 max-w-[1280px] mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2
            className={`${yatraOne.className} text-3xl md:text-4xl mb-2`}
            style={{ color: colors.primary }}
          >
            Find Us in Shahdara
          </h2>
          <p className="text-lg" style={{ color: colors.textSecondary }}>
            Easily accessible, right in the heart of the community
          </p>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
          transition={{ duration: 0.5 }}
          className="rounded overflow-hidden shadow-[0_2px_8px_rgba(26,26,26,0.08)] border"
          style={{ borderColor: colors.border }}
        >
          <MapIframe lat={28.67069} lng={77.29055} className="w-full h-[400px]" />
        </motion.div>
      </section>

      {/* ---------- CONTACT FORM SECTION ---------- */}
      <section id="contact" className="py-16 md:py-24 px-4 md:px-8"
        style={{ backgroundColor: colors.surface }}
      >
        <div className="max-w-[720px] mx-auto text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            <h2
              className={`${yatraOne.className} text-3xl md:text-4xl mb-2`}
              style={{ color: colors.primary }}
            >
              Get In Touch
            </h2>
            <p className="text-lg mb-1" style={{ color: colors.textSecondary }}>
              Have a question or need styling advice? Call or drop us a line.
            </p>
            <p className="text-base mb-8" style={{ color: colors.textSecondary }}>
              We’re here to help. Call us at {business.phone} or fill the form below.
            </p>
          </motion.div>
          <motion.form
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
            transition={{ duration: 0.5 }}
            className="space-y-6 text-left"
          >
            <div>
              <label className="block text-sm font-medium mb-1" style={{ color: colors.textPrimary }}>
                Your Name
              </label>
              <input
                type="text"
                placeholder="e.g. Priya Sharma"
                className="w-full px-4 py-3 rounded-sm border focus:outline-none focus:ring-0 transition-colors duration-200"
                style={{
                  borderColor: colors.border,
                  backgroundColor: colors.bg,
                  color: colors.textPrimary,
                }}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1" style={{ color: colors.textPrimary }}>
                Your Message
              </label>
              <textarea
                rows={4}
                placeholder="How can we help you?"
                className="w-full px-4 py-3 rounded-sm border focus:outline-none focus:ring-0 transition-colors duration-200 resize-none"
                style={{
                  borderColor: colors.border,
                  backgroundColor: colors.bg,
                  color: colors.textPrimary,
                }}
              />
            </div>
            <button
              type="submit"
              className="w-full px-8 py-3 font-semibold text-sm uppercase tracking-wider transition-colors duration-200 ease-out rounded-none"
              style={{ backgroundColor: colors.primary, color: "#FEFAF4" }}
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </section>

      {/* ---------- CALL TO ACTION SECTION ---------- */}
      <section className="py-16 md:py-24 px-4 text-center"
        style={{ backgroundColor: colors.bg }}
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="max-w-[720px] mx-auto"
        >
          <h2
            className={`${yatraOne.className} text-3xl md:text-4xl mb-2`}
            style={{ color: colors.primary }}
          >
            Visit Us Today
          </h2>
          <p className="text-lg mb-8" style={{ color: colors.textSecondary }}>
            Experience the warmth and variety that keeps Shahdara coming back.
          </p>
          <a
            href={`tel:${business.phone.replace(/\s/g, "")}`}
            className="inline-flex items-center gap-2 px-8 py-3 font-semibold text-sm uppercase tracking-wider transition-colors duration-200 ease-out rounded-none"
            style={{ backgroundColor: colors.primary, color: "#FEFAF4" }}
          >
            <Phone size={18} /> Call for Directions
          </a>
        </motion.div>
      </section>

      {/* ---------- FOOTER ---------- */}
      <footer
        className="py-8 px-4 md:px-8 border-t"
        style={{ borderColor: colors.border, backgroundColor: colors.surface }}
      >
        <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm"
          style={{ color: colors.textSecondary }}
        >
          <p className="text-center md:text-left">
            &copy; {new Date().getFullYear()} {business.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href={`tel:${business.phone.replace(/\s/g, "")}`}
              className="flex items-center gap-1 hover:underline"
              style={{ color: colors.primary }}
            >
              <Phone size={16} /> {business.phone}
            </a>
            <span className="flex items-center gap-1">
              <MapPin size={16} /> {business.address}
            </span>
          </div>
        </div>
      </footer>

      {/* ---------- FLOATING WHATSAPP ---------- */}
      <FloatingWhatsApp phoneNumber={business.phone} />
    </main>
  );
}