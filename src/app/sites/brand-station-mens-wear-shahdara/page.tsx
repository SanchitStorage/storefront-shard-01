"use client"

import Image from 'next/image'
import { motion } from 'framer-motion'
import { MapPin, Phone, Star, Quote, ShoppingBag, Shirt, Scissors, Gem, ThumbsUp, Award } from 'lucide-react'

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } }
}

const reviews = [
  {
    stars: 5,
    text: "Great place to shop premium quality in a good price, shopping since 7-8 years. Fully satisfied with the quality. Gagan sir is a great consultant and owner himself, make sure to consult and take suggestions before buying. Cheers to the Polite salesperson salman bhai.",
    time: "7 months ago"
  },
  {
    stars: 5,
    text: "I've had a great experience doing my shopping at BRAND STATION! The amount of styles — ranging from fashion-forward outfits to classic designs — is remarkable. The quality of the fabrics is excellent, and the prices are fair considering what you receive.\n\nThe staff are friendly and never fail to assist with recommendations, fittings, and styling advice. The shop is spotlessly clean, well-arranged, and a pleasure to shop. Whether you're picking up something for a regular day or a special event, this store never fails.\n\nStrongly recommend to anyone who wants quality fashion and a welcoming shopping experience!\nThanks",
    time: "6 months ago"
  },
  {
    stars: 5,
    text: "Sardaar ji is very friendly. Items are value for money. All the items are hand picked.",
    time: "a month ago"
  },
  {
    stars: 5,
    text: "I’m very satisfied with the clothes. The material quality is outstanding and it delivers exactly as promised. Packaging and overall presentation were also good 👍",
    time: "6 months ago"
  },
  {
    stars: 5,
    text: "Collection is very unique and price is so affordable another thing which is more important Quality is next level. If you're looking for genuine products, You must visit here.",
    time: "5 months ago"
  }
]

const galleryImages = [
  { src: 'https://img.magicpin.com/8087355_cover_0.jpg', alt: 'Brand Station store front display' },
  { src: 'https://img.magicpin.com/8087355_store_images_7.jpg', alt: 'Premium men’s apparel arrangement' },
  { src: 'https://img.magicpin.com/8087355_store_images_1.jpg', alt: 'Fashionable men’s clothing collection' },
  { src: 'https://images.jdmagicbox.com/v2/comp/delhi/k5/011pxx11.xx11.200522042322.x2k5/catalogue/brand-station-shahdara-delhi-kurta-pyjama-wholesalers-2pfyvuke65.jpg', alt: 'Kurta pyjama display at Brand Station' },
  { src: 'https://images.jdmagicbox.com/v2/comp/delhi/k5/011pxx11.xx11.200522042322.x2k5/catalogue/brand-station-shahdara-delhi-kurta-pyjama-wholesalers-ffw0rd4stq.jpg', alt: 'Additional men’s ethnic wear' }
]

export default function BrandStationLanding() {
  return (
    <div className="min-h-screen bg-[#F6F4EF] font-['Inter',Arial,sans-serif] text-[#2D2A26]">
      {/* Header */}
      <motion.header 
        initial={{ y: -20, opacity: 0 }} 
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white/90 backdrop-blur-md sticky top-0 z-50 border-b border-[#D4D0C9]"
      >
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <div>
            <h1 className="text-xl md:text-2xl font-bold font-['Playfair_Display',serif] text-[#1B2634]">BRAND STATION</h1>
            <p className="text-xs text-[#C2A262] font-medium tracking-wide">Shahdara</p>
          </div>
          <div className="flex items-center gap-4">
            <a href="tel:09910309313" className="hidden sm:flex items-center gap-1 text-[#1B2634] hover:text-[#C2A262] transition-colors text-sm font-medium">
              <Phone size={16} /> 099103 09313
            </a>
            <motion.a 
              href="tel:09910309313"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#1B2634] text-white px-5 py-2 rounded-full text-sm font-semibold shadow-md hover:shadow-lg hover:bg-[#141E2B] transition-all"
            >
              Call Now
            </motion.a>
          </div>
        </div>
      </motion.header>

      {/* Hero Section */}
      <motion.section 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
        className="relative w-full h-[70vh] md:h-[80vh] overflow-hidden"
      >
        <Image 
          src="https://img.magicpin.com/8087355_cover_0.jpg" 
          alt="Brand Station premium men’s fashion interior" 
          fill 
          className="object-cover object-center" 
          priority 
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1B2634]/80 to-[#1B2634]/30 flex items-center">
          <div className="max-w-7xl mx-auto px-4 w-full">
            <motion.div variants={fadeInUp} className="max-w-xl">
              <div className="flex items-center gap-2 mb-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} className="fill-[#C2A262] text-[#C2A262]" />
                  ))}
                </div>
                <span className="text-white/90 ml-2 text-sm">4.6 (186 reviews)</span>
              </div>
              <h1 className="font-['Playfair_Display',serif] text-4xl md:text-6xl font-bold text-white leading-tight mb-4">
                Shahdara&apos;s Destination for<br/><span className="text-[#C2A262]">Premium Men&apos;s Fashion</span>
              </h1>
              <p className="text-white/80 text-lg mb-8 max-w-md">Quality Styles, Unbeatable Value — tailored for the modern man who appreciates fine fabrics and timeless elegance.</p>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#C2A262] text-[#1B2634] font-semibold px-8 py-4 rounded-full shadow-lg hover:bg-[#D3B36B] transition-all text-base flex items-center gap-2"
              >
                <ShoppingBag size={20} /> Explore Collection
              </motion.button>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Address & Rating Bar */}
      <motion.div 
        initial={{ opacity: 0 }} 
        whileInView={{ opacity: 1 }} 
        viewport={{ once: true }}
        className="bg-white border-b border-[#D4D0C9]"
      >
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-[#1B2634]">
            <MapPin size={18} className="text-[#C2A262]" />
            <span className="text-sm">1/7037, Shivaji Park, Shahdara, Delhi, 110032</span>
          </div>
          <div className="flex items-center gap-2 text-[#1B2634]">
            <Phone size={18} className="text-[#C2A262]" />
            <a href="tel:09910309313" className="text-sm font-semibold hover:text-[#C2A262] transition-colors">099103 09313</a>
          </div>
          <div className="flex items-center gap-1 text-[#1B2634] text-sm">
            <Star size={16} className="fill-[#C2A262] text-[#C2A262]" /> 4.6 • 186 reviews
          </div>
        </div>
      </motion.div>

      {/* Key Services */}
      <motion.section 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
        className="max-w-7xl mx-auto px-4 py-16 md:py-24"
      >
        <motion.div variants={fadeInUp} className="text-center mb-12">
          <h2 className="font-['Playfair_Display',serif] text-3xl md:text-4xl font-bold text-[#1B2634] mb-3">Why Brand Station?</h2>
          <p className="text-[#2D2A26]/80 max-w-2xl mx-auto">Experience premium menswear with a personal touch — where quality meets affordability.</p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { icon: Shirt, title: 'Premium Men’s Apparel', desc: 'From fashion-forward pieces to classic staples, every item is handpicked for superior quality.' },
            { icon: Scissors, title: 'Personalized Styling Advice', desc: 'Gagan sir and the team offer expert suggestions to help you put together the perfect look.' },
            { icon: Gem, title: 'Excellent Fabric Quality', desc: 'We prioritize comfort, durability, and texture — fabrics that feel as good as they look.' },
            { icon: ThumbsUp, title: 'Value for Money', desc: 'Honest pricing that respects your wallet without compromising on the premium experience.' },
            { icon: Award, title: 'Unmatched Collection', desc: 'Unique, curated styles you won’t find elsewhere — always fresh and distinctive.' },
            { icon: ShoppingBag, title: 'Complete Shopping Experience', desc: 'Clean, well-arranged store with friendly staff who make every visit a pleasure.' }
          ].map((service, idx) => (
            <motion.div 
              key={idx}
              variants={fadeInUp}
              className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 group border border-transparent hover:border-[#C2A262]/30"
            >
              <div className="w-12 h-12 bg-[#F6F4EF] rounded-full flex items-center justify-center mb-4 text-[#C2A262] group-hover:bg-[#C2A262] group-hover:text-white transition-colors">
                <service.icon size={24} />
              </div>
              <h3 className="text-lg font-semibold text-[#1B2634] mb-2">{service.title}</h3>
              <p className="text-[#2D2A26]/70 text-sm">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Gallery / Visual Story */}
      <motion.section 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
        className="bg-white py-16 md:py-24"
      >
        <div className="max-w-7xl mx-auto px-4">
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="font-['Playfair_Display',serif] text-3xl md:text-4xl font-bold text-[#1B2634] mb-3">Inside Brand Station</h2>
            <p className="text-[#2D2A26]/80">Explore the atmosphere where style meets comfort.</p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[minmax(200px,auto)]">
            {galleryImages.map((img, idx) => (
              <motion.div 
                key={idx} 
                variants={fadeInUp}
                className={`relative overflow-hidden rounded-2xl ${idx === 0 ? 'col-span-2 md:col-span-1 md:row-span-2' : ''} 
                  ${idx === 1 ? 'md:col-span-1 md:row-span-1' : ''} 
                  ${idx === 2 ? 'md:col-span-1 md:row-span-1' : ''}`}
              >
                <div className="relative w-full h-64 md:h-full min-h-[200px]">
                  <Image 
                    src={img.src} 
                    alt={img.alt} 
                    fill 
                    className="object-cover transition-transform duration-500 group-hover:scale-105" 
                  />
                </div>
                <div className="absolute inset-0 bg-black/10 hover:bg-black/0 transition-colors" />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Testimonials */}
      <motion.section 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true, amount: 0.1 }}
        variants={staggerContainer}
        className="max-w-7xl mx-auto px-4 py-16 md:py-24"
      >
        <motion.div variants={fadeInUp} className="text-center mb-12">
          <h2 className="font-['Playfair_Display',serif] text-3xl md:text-4xl font-bold text-[#1B2634] mb-3">What Our Customers Say</h2>
          <p className="text-[#2D2A26]/80">Genuine feedback from men who value quality.</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, idx) => (
            <motion.div 
              key={idx}
              variants={fadeInUp}
              className="bg-[#FDFCF9] border-l-4 border-[#C2A262] p-6 rounded-r-2xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-1 mb-3">
                {[...Array(review.stars)].map((_, i) => (
                  <Star key={i} size={16} className="fill-[#C2A262] text-[#C2A262]" />
                ))}
                <span className="text-xs text-[#2D2A26]/60 ml-auto">{review.time}</span>
              </div>
              <Quote className="text-[#C2A262] opacity-30 mb-2" size={28} />
              <p className="text-[#2D2A26] text-sm leading-relaxed whitespace-pre-line">{review.text}</p>
              <p className="text-xs text-[#2D2A26]/50 mt-3 font-medium">— Verified Customer</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* CTA Banner */}
      <motion.section 
        initial={{ opacity: 0 }} 
        whileInView={{ opacity: 1 }} 
        viewport={{ once: true }}
        className="bg-[#1B2634] text-white py-16 md:py-20"
      >
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="font-['Playfair_Display',serif] text-3xl md:text-4xl font-bold mb-4">Ready to Elevate Your Wardrobe?</h2>
          <p className="text-white/70 mb-8 max-w-xl mx-auto">Visit our store in Shahdara and experience premium men’s fashion with personal attention.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <motion.a 
              href="tel:09910309313"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#C2A262] text-[#1B2634] font-semibold px-8 py-4 rounded-full shadow-lg hover:bg-[#D3B36B] transition-all flex items-center gap-2"
            >
              <Phone size={20} /> Call Now
            </motion.a>
            <motion.a 
              href="https://maps.google.com/?q=Brand+Station+Shivaji+Park+Shahdara+Delhi"
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white text-white font-semibold px-8 py-4 rounded-full hover:bg-white hover:text-[#1B2634] transition-all flex items-center gap-2"
            >
              <MapPin size={20} /> Get Directions
            </motion.a>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="bg-[#F6F4EF] border-t border-[#D4D0C9]">
        <div className="max-w-7xl mx-auto px-4 py-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="font-['Playfair_Display',serif] text-xl font-bold text-[#1B2634] mb-1">BRAND STATION</h3>
            <p className="text-sm text-[#2D2A26]/70">Premium Men’s Fashion, Shahdara</p>
          </div>
          <div className="flex flex-col items-center md:items-end">
            <div className="flex items-center gap-1 text-[#1B2634] text-sm mb-1">
              <MapPin size={16} className="text-[#C2A262]" /> 1/7037, Shivaji Park, Shahdara, Delhi, 110032
            </div>
            <a href="tel:09910309313" className="flex items-center gap-1 text-[#1B2634] hover:text-[#C2A262] transition-colors text-sm font-medium">
              <Phone size={15} className="text-[#C2A262]" /> 099103 09313
            </a>
          </div>
        </div>
        <div className="border-t border-[#D4D0C9] py-4 text-center text-xs text-[#2D2A26]/50">
          © {new Date().getFullYear()} Brand Station. All rights reserved. Crafted with care for the modern man.
        </div>
      </footer>
    </div>
  )
}