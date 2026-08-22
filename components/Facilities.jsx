import { 
  FlaskConical, 
  Monitor, 
  BookOpen, 
  Dumbbell, 
  Music, 
  Utensils,
  Wifi,
  Car
} from 'lucide-react'

const facilities = [
  {
    icon: FlaskConical,
    name: 'Laboratorium IPA',
    description: 'Dilengkapi peralatan modern untuk praktikum Fisika, Kimia, dan Biologi',
    image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=400&h=300&fit=crop'
  },
  {
    icon: Monitor,
    name: 'Lab Komputer',
    description: '60 unit komputer terbaru dengan koneksi internet berkecepatan tinggi',
    image: 'https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=400&h=300&fit=crop'
  },
  {
    icon: BookOpen,
    name: 'Perpustakaan',
    description: 'Koleksi 15.000+ buku, e-library, dan ruang baca yang nyaman',
    image: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=400&h=300&fit=crop'
  },
  {
    icon: Dumbbell,
    name: 'Fasilitas Olahraga',
    description: 'Lapangan basket, futsal, bulu tangkis, dan fitness center',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=300&fit=crop'
  },
  {
    icon: Music,
    name: 'Studio Musik',
    description: 'Ruang kedap suara dengan instrumen lengkap untuk pengembangan bakat seni',
    image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=400&h=300&fit=crop'
  },
  {
    icon: Utensils,
    name: 'Kantin Sehat',
    description: 'Menu bergizi dengan standar kebersihan tinggi dan harga terjangkau',
    image: 'https://images.unsplash.com/photo-1567521464027-f127ff144326?w=400&h=300&fit=crop'
  }
]

const additionalFacilities = [
  { icon: Wifi, name: 'WiFi Kampus' },
  { icon: Car, name: 'Area Parkir Luas' },
  { icon: Monitor, name: 'Smart Classroom' },
  { icon: BookOpen, name: 'Ruang Konseling' },
]

export default function Facilities() {
  return (
    <section id="fasilitas" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-accent font-medium mb-2">Fasilitas</p>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-4 text-balance">
            Fasilitas Modern untuk Pembelajaran Optimal
          </h2>
          <p className="text-muted-foreground text-lg">
            Kami menyediakan fasilitas lengkap dan modern untuk mendukung 
            proses belajar mengajar yang efektif dan menyenangkan.
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {facilities.map((facility, index) => (
            <div 
              key={index}
              className="group bg-card rounded-xl border border-border overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={facility.image}
                  alt={facility.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <facility.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground">{facility.name}</h3>
                </div>
                <p className="text-muted-foreground text-sm">{facility.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Facilities */}
        <div className="bg-primary/5 rounded-2xl p-8">
          <h3 className="text-xl font-semibold text-foreground text-center mb-6">
            Fasilitas Pendukung Lainnya
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {additionalFacilities.map((item, index) => (
              <div 
                key={index}
                className="flex items-center gap-3 p-4 bg-card rounded-lg border border-border"
              >
                <item.icon className="w-5 h-5 text-primary" />
                <span className="font-medium text-foreground">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
