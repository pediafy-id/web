
const navBarLinks = [
  { name: "Rumah", url: "/id" },
  { name: "Produk", url: "/id/products" },
  { name: "Layanan", url: "/id/services" },
  { name: "Artikel", url: "/id/blog" },
  { name: "Kontak", url: "/id/contact" },
];

const footerLinks = [
  {
    section: "Ekosistem",
    links: [
      { name: "Dokumentasi", url: "/id/welcome-to-docs/" },
      { name: "Produk Digital", url: "/id/products" },
      { name: "Pembuat Website", url: "/id/services" },
    ],
  },
  {
    section: "Profil",
    links: [
      { name: "Tentang Kami", url: "#" },
      { name: "Artikel", url: "/id/blog" },
      { name: "Karirmu", url: "#" },
      { name: "Customer", url: "#" },
    ],
  },
];

const socialLinks = {
  facebook: "#",
  x: "#",
  github: "https://github.com/pediafy-id/web/",
  google: "#",
  slack: "#",
};

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
};