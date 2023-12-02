import varsityRed from "../../public/merchandise/varsityRed.jpeg"
import varsityGreen from "../../public/merchandise/varsityGreen.jpeg"

const merchs = [
  // {
  //   name: 'Varsity Jacket Green',
  //   image: './merchandise/VarsityGreen.png',
  //   price: 'Rp199.000',
  //   desc: 'Jaket varsity hijau ini adalah pilihan gaya yang sempurna untuk gaya kasual yang berkelas. Dibuat dengan menggunakan bahan cotton fleece yang lembut dan nyaman, jaket ini tidak hanya memberikan kehangatan tetapi juga memberikan tampilan yang stylish. Detail jahitan embroidery dan print yang dipadukan dengan warna hijau yang menambahkan sentuhan estetika yang menarik pada jaket ini. Cocok untuk menambahkan sentuhan retro-modern pada penampilan Anda.',
  // },
  // {
  //   name: 'Varsity Jacket Red',
  //   image: './merchandise/VarsityRed.png',
  //   price: 'Rp199.000',
  //   desc: 'Jaket varsity merah ini adalah pilihan gaya yang penuh semangat dan energi. Terbuat dari bahan cotton fleece yang nyaman, jaket ini tidak hanya memberikan kehangatan tetapi juga tampilan yang trendi. Detail jahitan embroidery dan print yang disematkan pada jaket ini menambahkan sentuhan yang khas, sehingga Anda dapat tampil bergaya dengan percaya diri. Jaket ini adalah pilihan yang sempurna untuk tampil stylish dengan warna merah yang khas.',
  // },
  // {
  //   name: 'Gama Keychain',
  //   image: './merchandise/gamaKeychain.png',
  //   price: 'Rp15.000',
  //   desc: 'Gantungan kunci Gama ini terbuat dari bahan akrilik berkualitas tinggi. Desainnya sederhana namun elegan, menjadikannya aksesoris yang sempurna untuk menghias kunci, tas, dan peralatan lainnya. Dengan bahan akrilik yang tahan lama, gantungan kunci ini akan memberikan sentuhan gaya pada koleksi Anda, serta memberikan penampilan ekstra yang memukau.',
  // },
  // {
  //   name: 'Acrylic Pin 3 Item',
  //   image: './merchandise/pin.png',
  //   price: 'Rp15.000',
  //   desc: 'Pin akrilik ini adalah aksesori kecil yang penuh gaya. Dibuat dari bahan akrilik berkualitas tinggi, pin ini memiliki tampilan yang jernih dan elegan. Desainnya yang ringkas dan serbaguna membuatnya cocok untuk dipasangkan pada jaket, tas, topi, atau bahkan di koleksi pin Anda sendiri. Dengan pin akrilik ini, Anda dapat menambahkan sentuhan personal dan gaya pada penampilan Anda dengan mudah.',
  // },
  // {
  //   name: 'Sticker A5 (1 Sheet)',
  //   image: './merchandise/sticker.png',
  //   price: 'Rp10.000',
  //   desc: 'Stiker khusus limited edition dari TEDxUGM yang kami buat dengan sepenuh hati agar menarik perhatian',
  // },
  // {
  //   name: 'Special Bundling Package Green',
  //   image: './merchandise/bundlingGreen.png',
  //   price: 'Rp299.000',
  //   desc: 'Paket bundling ini adalah kombinasi yang sempurna untuk menambah gaya Anda. Terdiri dari jaket varsity yang trendy, gantungan kunci, pin yang unik, dan stiker beragam desain, paket ini menciptakan kesan yang luar biasa. Jaket varsity memberikan tampilan yang berkelas, sementara gantungan kunci, pin, dan stiker menambahkan aksen personal pada koleksi aksesori Anda. Dengan paket bundling ini, Anda siap untuk tampil bergaya dan memancarkan kepribadian Anda.',
  // },
  // {
  //   name: 'Special Bundling Package Red',
  //   image: './merchandise/bundlingRed.png',
  //   price: 'Rp299.000',
  //   desc: 'Paket bundling ini adalah kombinasi yang sempurna untuk menambah gaya Anda. Terdiri dari jaket varsity yang trendy, gantungan kunci, pin yang unik, dan stiker beragam desain, paket ini menciptakan kesan yang luar biasa. Jaket varsity memberikan tampilan yang berkelas, sementara gantungan kunci, pin, dan stiker menambahkan aksen personal pada koleksi aksesori Anda. Dengan paket bundling ini, Anda siap untuk tampil bergaya dan memancarkan kepribadian Anda.',
  // },

  {
    name: 'Open PO Merchandise',
    image: './merchandise/baru/merchandise.jpeg',
    // price: 'Rp199.000',
    desc: 'Jaket varsity hijau ini adalah pilihan gaya yang sempurna untuk gaya kasual yang berkelas. Dibuat dengan menggunakan bahan cotton fleece yang lembut dan nyaman, jaket ini tidak hanya memberikan kehangatan tetapi juga memberikan tampilan yang stylish. Detail jahitan embroidery dan print yang dipadukan dengan warna hijau yang menambahkan sentuhan estetika yang menarik pada jaket ini. Cocok untuk menambahkan sentuhan retro-modern pada penampilan Anda.',
  },
  {
    name: 'Varsity Jacket Package',
    image: './merchandise/baru/priceList.jpeg',
    // price: 'Rp199.000',
    desc: 'Jaket varsity hijau ini adalah pilihan gaya yang sempurna untuk gaya kasual yang berkelas. Dibuat dengan menggunakan bahan cotton fleece yang lembut dan nyaman, jaket ini tidak hanya memberikan kehangatan tetapi juga memberikan tampilan yang stylish. Detail jahitan embroidery dan print yang dipadukan dengan warna hijau yang menambahkan sentuhan estetika yang menarik pada jaket ini. Cocok untuk menambahkan sentuhan retro-modern pada penampilan Anda.',
  },
  {
    name: 'Varsity Jacket Green',
    image: './merchandise/baru/greenJacket.jpeg',
    price: 'Rp214.000',
    desc: 'Jaket varsity hijau ini adalah pilihan gaya yang sempurna untuk gaya kasual yang berkelas. Dibuat dengan menggunakan bahan cotton fleece yang lembut dan nyaman, jaket ini tidak hanya memberikan kehangatan tetapi juga memberikan tampilan yang stylish. Detail jahitan embroidery dan print yang dipadukan dengan warna hijau yang menambahkan sentuhan estetika yang menarik pada jaket ini. Cocok untuk menambahkan sentuhan retro-modern pada penampilan Anda.',
  },
  {
    name: 'Varsity Jacket Pink',
    image: './merchandise/baru/pinkJacket.jpeg',
    price: 'Rp214.000',
    desc: 'Jaket varsity pink ini adalah pilihan gaya yang sempurna untuk gaya kasual yang berkelas. Dibuat dengan menggunakan bahan cotton fleece yang lembut dan nyaman, jaket ini tidak hanya memberikan kehangatan tetapi juga memberikan tampilan yang stylish. Detail jahitan embroidery dan print yang dipadukan dengan warna pink yang menambahkan sentuhan estetika yang menarik pada jaket ini. Cocok untuk menambahkan sentuhan retro-modern pada penampilan Anda.',
  },
  {
    name: 'Varsity Jacket Red',
    image: './merchandise/baru/redJacket.jpeg',
    price: 'Rp214.000',
    desc: 'Jaket varsity merah ini adalah pilihan gaya yang penuh semangat dan energi. Terbuat dari bahan cotton fleece yang nyaman, jaket ini tidak hanya memberikan kehangatan tetapi juga tampilan yang trendi. Detail jahitan embroidery dan print yang disematkan pada jaket ini menambahkan sentuhan yang khas, sehingga Anda dapat tampil bergaya dengan percaya diri. Jaket ini adalah pilihan yang sempurna untuk tampil stylish dengan warna merah yang khas.',
  },
];
export default merchs;