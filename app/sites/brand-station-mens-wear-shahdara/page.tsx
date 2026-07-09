import { Playfair_Display, Inter } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Star, Phone, MapPin, ChevronRight, Menu, X } from 'lucide-react';
import { useState } from 'react';

const playfair = Playfair_Display({ subsets: ['latin'], weight: ['500', '600', '700'] });
const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '600', '700'] });

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className={`${inter.className} bg-[#F5F1EB] text-[#1E1E1E]`}>
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-[#1A2B3C] shadow-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8">
          <Link href="/" className={`${playfair.className} text-2xl font-bold text-white`}>
            <span className="text-[#C89B3C]">Brand</span> Station
          </Link>
          <ul className="hidden items-center gap-8 md:flex">
            <li><Link href="#" className="text-[#E4DDD4] hover:text-white transition-colors">Home</Link></li>
            <li><Link href="#" className="text-[#E4DDD4] hover:text-white transition-colors">Products</Link></li>
            <li><Link href="#" className="text-[#E4DDD4] hover:text-white transition-colors">Testimonials</Link></li>
            <li><Link href="#" className="text-[#E4DDD4] hover:text-white transition-colors">Contact</Link></li>
          </ul>
          <button
            className="block md:hidden text-white p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-[#1A2B3C] px-4 pb-4"
          >
            <ul className="flex flex-col gap-3">
              <li><Link href="#" className="text-[#E4DDD4] hover:text-white transition-colors" onClick={() => setMenuOpen(false)}>Home</Link></li>
              <li><Link href="#" className="text-[#E4DDD4] hover:text-white transition-colors" onClick={() => setMenuOpen(false)}>Products</Link></li>
              <li><Link href="#" className="text-[#E4DDD4] hover:text-white transition-colors" onClick={() => setMenuOpen(false)}>Testimonials</Link></li>
              <li><Link href="#" className="text-[#E4DDD4] hover:text-white transition-colors" onClick={() => setMenuOpen(false)}>Contact</Link></li>
            </ul>
          </motion.div>
        )}
      </nav>

      {/* Hero */}
      <section className="relative bg-[#1A2B3C] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://img.magicpin.com/8087355_cover_0.jpg"
            alt="Brand Station store"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 md:py-32 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <h1 className={`${playfair.className} text-4xl font-bold leading-tight md:text-6xl`}>
              Shahdara's Destination for Premium Men's Fashion
            </h1>
            <p className="mt-6 text-lg text-[#D4CCC2] md:text-xl">
              Quality Styles, Unbeatable Value.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className={i < 4 ? 'fill-[#C89B3C] text-[#C89B3C]' : 'fill-[#D4CCC2] text-[#D4CCC2]'}
                  />
                ))}
                <span className="ml-2 text-sm text-[#D4CCC2]">4.6 (186 reviews)</span>
              </div>
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="#contact"
                className="rounded-md bg-[#C89B3C] px-6 py-3 font-semibold text-white shadow transition-all hover:bg-[#DBA94D] hover:shadow-lg"
              >
                Visit Us Today
              </Link>
              <Link
                href="#testimonials"
                className="rounded-md border-2 border-white px-6 py-3 font-semibold text-white transition-all hover:bg-white hover:text-[#1A2B3C]"
              >
                See Reviews
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="mx-auto max-w-7xl px-4 py-16 md:py-24 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className={`${playfair.className} text-3xl font-bold md:text-4xl`}>
            What We Offer
          </h2>
          <hr className="mx-auto mt-4 w-24 border-t-2 border-[#C89B3C]" />
        </motion.div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { title: 'Premium Men’s Apparel', desc: 'Curated collections for every occasion – from casual to formal.' },
            { title: 'Fashion-Forward & Classic Styles', desc: 'Trendsetting designs meet timeless silhouettes.' },
            { title: 'Excellent Fabric Quality', desc: 'Only the finest materials, hand-picked for durability and comfort.' },
            { title: 'Personalized Styling Advice', desc: 'Our experts help you find the perfect look.' },
            { title: 'Value for Money Collections', desc: 'Premium fashion at prices that respect your wallet.' },
            { title: 'Trusted Since Years', desc: 'Serving Shahdara with pride – your satisfaction is our legacy.' },
          ].map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="rounded-lg bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
            >
              <div className="mb-3 h-10 w-10 rounded-full bg-[#C89B3C] flex items-center justify-center text-white font-bold text-lg">
                {idx + 1}
              </div>
              <h3 className={`${playfair.className} text-xl font-semibold`}>{service.title}</h3>
              <p className="mt-2 text-[#6B6258]">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Image Gallery */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            <h2 className={`${playfair.className} text-3xl font-bold md:text-4xl`}>
              Our Collections
            </h2>
            <hr className="mx-auto mt-4 w-24 border-t-2 border-[#C89B3C]" />
          </motion.div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { src: 'https://img.magicpin.com/8087355_store_images_7.jpg', alt: 'Brand Station store interior' },
              { src: 'https://img.magicpin.com/8087355_store_images_1.jpg', alt: 'Brand Station clothing display' },
              { src: 'https://images.jdmagicbox.com/v2/comp/delhi/k5/011pxx11.xx11.200522042322.x2k5/catalogue/brand-station-shahdara-delhi-kurta-pyjama-wholesalers-2pfyvuke65.jpg', alt: 'Kurta pyjama collection' },
              { src: 'https://images.jdmagicbox.com/v2/comp/delhi/k5/011pxx11.xx11.200522042322.x2k5/catalogue/brand-station-shahdara-delhi-kurta-pyjama-wholesalers-ffw0rd4stq.jpg', alt: 'Brand Station products' },
              { src: 'https://img.magicpin.com/8087355_cover_0.jpg', alt: 'Brand Station store front' },
            ].map((img, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="group relative h-64 overflow-hidden rounded-lg shadow-sm"
              >
                <Image src={img.src} alt={img.alt} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="mx-auto max-w-7xl px-4 py-16 md:py-24 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className={`${playfair.className} text-3xl font-bold md:text-4xl`}>
            What Our Customers Say
          </h2>
          <hr className="mx-auto mt-4 w-24 border-t-2 border-[#C89B3C]" />
        </motion.div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              text: 'Great place to shop premium quality in a good price, shopping since 7-8 years. Fully satisfied with the quality. Gagan sir is a great consultant and owner himself, make sure to consult and take suggestions before buying.\nCheers to the Polite salesperson salman bhai.',
              stars: 5,
              author: 'Customer',
              date: '7 months ago',
            },
            {
              text: "I've had a great experience doing my shopping at BRAND STATION! The amount of styles — ranging from fashion-forward outfits to classic designs — is remarkable. The quality of the fabrics is excellent, and the prices are fair considering what you receive.\n\nThe staff are friendly and never fail to assist with recommendations, fittings, and styling advice. The shop is spotlessly clean, well-arranged, and a pleasure to shop. Whether you're picking up something for a regular day or a special event, this store never fails.\n\nStrongly recommend to anyone who wants quality fashion and a welcoming shopping experience!\nThanks",
              stars: 5,
              author: 'Customer',
              date: '6 months ago',
            },
            {
              text: 'Sardaar ji is very friendly. Items are value for money. All the items are hand picked.',
              stars: 5,
              author: 'Customer',
              date: 'a month ago',
            },
            {
              text: 'I’m very satisfied with the clothes. The material quality is outstanding and it delivers exactly as promised. Packaging and overall presentation were also good 👍',
              stars: 5,
              author: 'Customer',
              date: '6 months ago',
            },
            {
              text: "Collection is very unique and price is so affordable another thing which is more important Quality is next level. If you're looking for genuine products, You must visit here.",
              stars: 5,
              author: 'Customer',
              date: '5 months ago',
            },
          ].map((review, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="rounded-lg bg-white p-6 shadow-sm transition-all hover:shadow-md"
            >
              <div className="mb-3 flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={i < review.stars ? 'fill-[#C89B3C] text-[#C89B3C]' : 'fill-[#D4CCC2] text-[#D4CCC2]'}
                  />
                ))}
              </div>
              <blockquote className="border-l-4 border-[#C89B3C] pl-4 italic text-[#1E1E1E]">
                {review.text.split('\n').map((line, i) => (
                  <p key={i} className="mb-1">{line}</p>
                ))}
              </blockquote>
              <p className="mt-3 text-sm font-semibold text-[#6B6258]">
                – {review.author}, {review.date}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-[#1A2B3C] py-16 text-white md:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            <h2 className={`${playfair.className} text-3xl font-bold md:text-4xl`}>
              Visit Us
            </h2>
            <hr className="mx-auto mt-4 w-24 border-t-2 border-[#C89B3C]" />
          </motion.div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <div className="flex items-start gap-4">
                <MapPin className="mt-1 text-[#C89B3C]" size={20} />
                <div>
                  <p className="font-semibold">Address</p>
                  <p className="text-[#D4CCC2]">
                    Brand Station, 1/7037, Shivaji Park, Shahdara, Delhi, 110032, India
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="mt-1 text-[#C89B3C]" size={20} />
                <div>
                  <p className="font-semibold">Phone</p>
                  <a href="tel:09910309313" className="text-[#D4CCC2] hover:text-white transition-colors">
                    099103 09313
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Star className="mt-1 text-[#C89B3C]" size={20} />
                <div>
                  <p className="font-semibold">Rating</p>
                  <p className="text-[#D4CCC2]">4.6 ⭐ (186 reviews)</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center justify-center"
            >
              <div className="rounded-lg bg-white p-2 shadow-lg">
                <Image
                  src="https://img.magicpin.com/8087355_store_images_1.jpg"
                  alt="Brand Station store"
                  width={400}
                  height={300}
                  className="rounded-md object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1A2B3C] border-t border-[#2C4052] py-8 text-[#D4CCC2]">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <h3 className={`${playfair.className} text-xl font-bold text-white`}>
                <span className="text-[#C89B3C]">Brand</span> Station
              </h3>
              <p className="mt-2 text-sm">
                Shahdara's destination for premium men's fashion since years.
              </p>
            </div>
            <div>
              <h4 className="mb-3 font-semibold text-white">Quick Links</h4>
              <ul className="space-y-1 text-sm">
                <li><Link href="#" className="hover:text-white transition-colors">Home</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Products</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Testimonials</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-3 font-semibold text-white">Contact</h4>
              <ul className="space-y-1 text-sm">
                <li>1/7037, Shivaji Park, Shahdara</li>
                <li>Delhi, 110032</li>
                <li><a href="tel:09910309313" className="hover:text-white transition-colors">099103 09313</a></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-3 font-semibold text-white">Hours</h4>
              <ul className="space-y-1 text-sm">
                <li>Mon – Sat: 10 AM – 8 PM</li>
                <li>Sun: 11 AM – 6 PM</li>
              </ul>
            </div>
          </div>
          <hr className="my-6 border-[#2C4052]" />
          <p className="text-center text-xs">
            © {new Date().getFullYear()} Brand Station. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}