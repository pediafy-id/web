
const navBarLinks = [
  { name: "Rumah", url: "/fr" },
  { name: "Layanan", url: "/fr/services" },
  { name: "Produk", url: "/fr/products" },
  { name: "Artikel", url: "/fr/blog" },
  { name: "Kontak", url: "/fr/contact" },
  { name: "Dokumentasi", url: "/fr/welcome-to-docs/" },
];

const footerLinks = [
  {
    section: "Ekosistem",
    links: [
      { name: "Pembuat Website", url: "/fr/services" },
      { name: "Media Sosial Management", url: "/fr/services" },
      { name: "Digital Produk", url: "/fr/products" },
    ],
  },
  {
    section: "Profil",
    links: [
      { name: "Tentang Kami", url: "#" },
      { name: "Kontak", url: "/fr/contact" },
      { name: "Karirmu", url: "#" },
      { name: "Pelanggan", url: "#" },
    ],
  },
  {
    section: "Sumber Daya",
    links: [
      { name: "Dokumentasi", url: "/fr/welcome-to-docs/" },
      { name: "Artikel", url: "/fr/blog" },
      { name: "Kontak Bantuan", url: "#" },
    ],
  },
];

const socialLinks = {
  facebook: "#",
  x: "#",
  github: "https://github.com/mearashadowfax/ScrewFast",
  google: "#",
  slack: "#",
};

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
};