import { Target, Eye, Heart, Award } from 'lucide-react'

const values = [
  {
    icon: Target,
    title: 'Visi',
    description: 'Menjadi Madrasah Diniyah Takmiliyah Ula yang terdepan dalam membentuk generasi berakhlak mulia, berwawasan luas serta berpegang teguh pada Al-Quran dan Hadits'
  },
  {
    icon: Eye,
    title: 'Misi',
    description: '1. Menumbuhkan rasa cinta kepada Allah SWT dan Rosul-Nya. 2. Menumbuhkan semangat belajar terhadap Pendidikan Agama Islam. 3. Mampu melaksanakan ibadah dengan baik dan benar sesuai Al-Quran dan sunnah'
  },

]

export default function About() {
  return (
    <section id="tentang" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-accent font-medium mb-2">Tentang Kami</p>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-4 text-balance">
            Profil Kami
          </h2>
          <p className="text-muted-foreground text-lg">
            Lembaga Pendidikan Baitul Hadi merupakan lembaga pendidikan keagamaan Islam yang berdiri pada tahun 2020 di Desa Trayeman, Kecamatan Slawi, Kabupaten Tegal. Berdirinya Lembaga Pendidikan Baitul Hadi dilatar belakangi oleh keinginan masyarakat dan tokoh agama setempat untuk menyediakan pendidikan agama Islam yang terarah, terjangkau, dan berkualitas bagi anak-anak di lingkungan sekitar.
          </p>
          <p className="text-muted-foreground text-lg">
            Aspirasi masyarakat ini didukung oleh keberadaan salah seorang tokoh masarakat yaitu Alm. H. Karnadi yang berwasiat kepada putra-putrinya untuk me-Wakafkan sebagian tanah peninggalannya untuk mendirikan sarana ibadah dan Pendidikan ke agamaan.
          </p>
          <p className="text-muted-foreground text-lg">
            Pada awal tahun 2020, beberapa tokoh masyarakat, ustadz, dan keluarga yang mewaqafkan tanah bermusyawarah untuk mendirikan lembaga pendidikan Baitul Hadi yang mampu menjadi tempat pembinaan akhlak, ibadah, dan pengetahuan keislaman bagi generasi muda.
          </p>
          <p className="text-muted-foreground text-lg">
            Dari hasil musyawarah tersebut, disepakati pendirian TPQ, RTQ Baitul Hadi dengan jumlah santri, tenaga pendidik, maupun sarana pembelajaran seadanya, berawal dari kegiatan yang di laksanakan di rumah H. Karnadi-Hj. Taslicha.
          </p>
          <p className="text-muted-foreground text-lg">
            Pada masa awal berdiri, kegiatan belajar mengajar dilaksanakan secara sederhana dengan memanfaatkan ruang belajar seadanya serta dukungan swadaya masyarakat. Meskipun berdiri di tengah berbagai keterbatasan, semangat para pendiri, tenaga pengajar, dan wali santri tetap tinggi dalam mengembangkan pendidikan agama Islam di lingkungan Trayeman.
            Sejak berdiri, Lembaga Pendidikan Baitul Hadi terus berkembang baik dari adanya Kurikulum yang diterapkan meliputi pembelajaran Al-Qur’an, aqidah akhlak, fiqih, sejarah kebudayaan Islam, bahasa Arab, serta praktik ibadah sehari-hari. Selain kegiatan belajar rutin, madrasah juga aktif mengadakan kegiatan keagamaan seperti peringatan hari besar Islam, lomba keagamaan, dan pembinaan akhlak santri.
            Seiring berjalannya waktu, para orangtua santri TPQ menghendaki adanya Lembaga pendidikan yang bisa menampung kelanjutan dari TPQ. Awal tahun 2026, pengelola berusaha memenuhi keinginan masyarakat khususnya orang tua dan wali santri TPQ.
            Berdirilah Madrasah Diniyah Takmiliyah Ula (MDTU) dengan nama “MDTU Baitul Hadi” yang memiliki makna “rumah petunjuk”, sebagai harapan agar lembaga ini menjadi tempat lahirnya generasi yang berilmu, beriman, dan berakhlakul karimah.
            Bersamaan dengan itu, juga didirikan Yayasan untuk menaungi dan diharapkan bisa berkembang merintis lembaga pendidikan Islam lain, baik Formal maupun Informal. Yayasan itu di beri nama YAYASAN HADI INSAN CENDEKIA.
          </p>
          <p className="text-muted-foreground text-lg">
            HADI  bermakna pemimpin, pemandu, atau orang yang memberi petunjuk ke jalan yang benar, juga merupakan singkatan TASLICHA KARNADI
          </p>
          <p className="text-muted-foreground text-lg">
            INSAN   bermakna manusia sebagai makhluk mulia yang memiliki potensi jasmani dan rohani, berakal, jinak/harmonis (al-uns), serta pelupa (nasiya)
          </p>
          <p className="text-muted-foreground text-lg">
            CENDIKIA : orang yang tajam pikiran, pandai, terpelajar, dan berilmu luas
          </p>
          <p className="text-muted-foreground text-lg">
            Dengan dukungan masyarakat dan pengurus yayasan, MDTU Baitul Hadi Trayeman diharapkan terus menjadi lembaga pendidikan Islam yang mampu mencetak generasi Qur’ani, berakhlak mulia, serta bermanfaat bagi agama, bangsa, dan masyarakat.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="aspect-[3/4] rounded-xl overflow-hidden">
                <img
                  src="./bangunan.jpeg"
                  alt="Kegiatan belajar mengajar"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
