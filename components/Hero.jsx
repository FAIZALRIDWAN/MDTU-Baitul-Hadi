import { ChevronRight, Users, Trophy, BookOpen } from 'lucide-react'

const stats = [

]

export default function Hero() {
  return (
    <section id="beranda" className="relative min-h-screen flex items-center pt-16">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/10" />
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/20 text-secondary-foreground rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              Pendaftaran Tahun Ajaran 2026/2027 Di Buka
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-foreground leading-tight text-balance">
              Mencetak{' '}
              <span className="text-primary">Generasi berakhlak Mulia</span>{' '}
              berwawasan luas serta berpegang teguh pada Al-qur'an dan Hadits
            </h1>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#tentang"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-md hover:bg-primary/90 transition-colors"
              >
                Jelajahi Madrasah
                <ChevronRight className="w-4 h-4" />
              </a>
              <a
                href="#kontak"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-border text-foreground font-medium rounded-md hover:bg-muted transition-colors"
              >
                Hubungi Kami
              </a>
            </div>
          </div>

          {/* Image / Visual */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="./Foto bangunan.png"
                alt="Siswa SMA Negeri 1 Nusantara"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating Card */}
            
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex items-center gap-4 p-6 bg-card rounded-xl border border-border hover:shadow-md transition-shadow"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center">
                <stat.icon className="w-7 h-7 text-primary" />
              </div>
              <div>
                <p className="text-3xl font-bold text-foreground">{stat.value}</p>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
