'use client'

import { useState } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

const galleryImages = [
  {
    src: './Foto bangunan.png',
    alt: 'Gedung Madrasah',

  },
  {
    src: './2.jpeg',
    alt: 'Penyembelihan Hewan Kurban Idul Adha 1447 Hijriah',
  },
  {
    src: './UAS Gasal.jpeg',
    alt: 'Ujian Akhir Semester Gasal 2026/2027',
  },
  {
    src: './Monitoring Kemenag.jpeg',
    alt: 'Monitoring Kemenag dari KUA, dalam proses penerbitan Izin Operasinal MDTU BAITUL HADI',
  }

]

export default function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState(null)

  const openLightbox = (index) => {
    setSelectedIndex(index)
  }

  const closeLightbox = () => {
    setSelectedIndex(null)
  }

  const goToPrevious = () => {
    setSelectedIndex((prev) =>
      prev === 0 ? galleryImages.length - 1 : prev - 1
    )
  }

  const goToNext = () => {
    setSelectedIndex((prev) =>
      prev === galleryImages.length - 1 ? 0 : prev + 1
    )
  }

  return (
    <section id="galeri" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-accent font-medium mb-2">Kegiatan</p>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-4 text-balance">
            Momen Berharga di Madrasah Kami
          </h2>
          <p className="text-muted-foreground text-lg">
            Dokumentasi berbagai kegiatan dan momen berkesan
            di Madrasah Takmiliyah Ula Baitul Hadi.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <button
              key={index}
              onClick={() => openLightbox(index)}
              className="group relative aspect-square overflow-hidden rounded-xl"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-4 left-4">
                  <p className="text-white text-sm font-medium">{image.alt}</p>
                  <p className="text-white/70 text-xs">{image.category}</p>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Lightbox */}
        {selectedIndex !== null && (
          <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 p-2 text-white hover:bg-white/20 rounded-full transition-colors"
              aria-label="Close lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            <button
              onClick={goToPrevious}
              className="absolute left-4 p-2 text-white hover:bg-white/20 rounded-full transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>

            <div className="max-w-4xl max-h-[80vh] relative">
              <img
                src={galleryImages[selectedIndex].src}
                alt={galleryImages[selectedIndex].alt}
                className="max-w-full max-h-[80vh] object-contain rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent rounded-b-lg">
                <p className="text-white font-medium">{galleryImages[selectedIndex].alt}</p>
                <p className="text-white/70 text-sm">{galleryImages[selectedIndex].category}</p>
              </div>
            </div>

            <button
              onClick={goToNext}
              className="absolute right-4 p-2 text-white hover:bg-white/20 rounded-full transition-colors"
              aria-label="Next image"
            >
              <ChevronRight className="w-8 h-8" />
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
