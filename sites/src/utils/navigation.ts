// An array of links for navigation bar
const navBarLinks = [
  { name: "Home", url: "/" },
  { name: "Services", url: "/services" },
  { name: "Products", url: "/products" },
  { name: "Articles", url: "/blog" },
  { name: "Contact", url: "/contact" },
  { name: "Docs", url: "/documentation/" },
];
// An array of links for footer
const footerLinks = [
  {
    section: "Ecosystem",
    links: [
      { name: "Web Development", url: "/services" },
      { name: "Social Media Menegement", url: "#" },
      { name: "Digital Products", url: "/products" },
    ],
  },
  {
    section: "Profile",
    links: [
      { name: "About us", url: "#" },
      { name: "Contact us", url: "#" },
      { name: "Carrers", url: "#" },
      { name: "Customers", url: "#" },
    ],
  },
  {
    section: "Resources",
    links: [
      { name: "Documentation", url: "/documentation/" },
      { name: "Articles", url: "/blog" },
      { name: "Help Center", url: "#" },
    ],
  },
];
// An object of links for social icons
const socialLinks = {
  facebook: "https://www.facebook.com/",
  x: "https://twitter.com/",
  github: "https://github.com/pediafy-id/",
  google: "https://www.google.com/",
  slack: "https://slack.com/",
};

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
};