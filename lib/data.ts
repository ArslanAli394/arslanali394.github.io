import {
  Globe,
  ShoppingCart,
  Cloud,
  Search,
  Wrench,
  Code,
  type LucideIcon,
} from "lucide-react";

// ─── Contact Info ───────────────────────────────────────────
export const siteConfig = {
  name: "Arslan Ali",
  title: "Arslan Ali — Web Developer & Cloud Engineer",
  description:
    "I help businesses build & grow their online presence. From stunning websites to e-commerce stores and cloud hosting — I turn your ideas into powerful digital experiences.",
  url: "https://arslanali394.github.io",
  email: "arslanmushtaq674@gmail.com",
  whatsapp: "923224300483",
  fiverr: "https://www.fiverr.com/arslanali33?public_mode=true",
  linkedin: "https://www.linkedin.com/in/arslan-ali-mushtaq/",
  github: "https://github.com/arslanali394",
  web3formsKey: "YOUR_WEB3FORMS_ACCESS_KEY", // Replace with your Web3Forms key
};

// ─── Navigation ─────────────────────────────────────────────
export const navLinks = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

// ─── Hero ───────────────────────────────────────────────────
export const hero = {
  headline: "I Help Businesses Build & Grow Their Online Presence",
  subheadline:
    "From stunning websites to e-commerce stores and cloud hosting — I turn your ideas into powerful digital experiences.",
  stats: [
    { value: "50+", label: "Projects Delivered" },
    { value: "5-Star", label: "Rated on Fiverr" },
    { value: "4+", label: "Years Experience" },
  ],
};

// ─── Services ───────────────────────────────────────────────
export interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const services: Service[] = [
  {
    icon: Globe,
    title: "Website Design & Development",
    description:
      "Custom, responsive websites built to attract customers and grow your business.",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Store Setup",
    description:
      "Sell online with a professional store — Shopify, WooCommerce, or custom-built.",
  },
  {
    icon: Cloud,
    title: "Cloud Hosting & Deployment",
    description:
      "Fast, secure hosting that keeps your site online 24/7.",
  },
  {
    icon: Search,
    title: "SEO & Online Presence",
    description:
      "Get found on Google. I optimize your site so customers can find you.",
  },
  {
    icon: Wrench,
    title: "Maintenance & Support",
    description:
      "Ongoing updates, security patches, and support so you can focus on your business.",
  },
  {
    icon: Code,
    title: "Custom Software Solutions",
    description:
      "Custom web apps and automation tailored to your unique business needs.",
  },
];

// ─── About ──────────────────────────────────────────────────
export const about = {
  bio: `Hi, I'm Arslan — a web developer and cloud engineer with 4+ years of experience helping businesses go digital. I've worked with startups, local shops, and growing companies to build websites, online stores, and custom software that actually delivers results. I don't speak in tech jargon — I focus on understanding your goals and building solutions that help you reach more customers and grow your revenue.`,
  stats: [
    { value: "50+", label: "Projects Delivered" },
    { value: "4+", label: "Years Experience" },
    { value: "30+", label: "Happy Clients" },
  ],
};

// ─── Portfolio ──────────────────────────────────────────────
export type ProjectCategory = "All" | "Websites" | "E-Commerce" | "Web Apps";

export interface Project {
  title: string;
  category: ProjectCategory;
  description: string;
  image: string; // placeholder — swap with real screenshots
}

export const projects: Project[] = [
  {
    title: "Fresh Mart — E-Commerce Store",
    category: "E-Commerce",
    description:
      "A full-featured grocery e-commerce store with cart, checkout, and payment integration.",
    image: "/images/project-1.svg",
  },
  {
    title: "Bloom & Petal — Florist Website",
    category: "Websites",
    description:
      "A beautiful, elegant website for a local florist with online ordering.",
    image: "/images/project-2.svg",
  },
  {
    title: "CloudServe Solutions — SaaS Dashboard",
    category: "Web Apps",
    description:
      "A modern SaaS dashboard with analytics, user management, and billing.",
    image: "/images/project-3.svg",
  },
  {
    title: "Al-Noor Restaurant — Restaurant Website",
    category: "Websites",
    description:
      "A warm, inviting restaurant website with menu, reservations, and gallery.",
    image: "/images/project-4.svg",
  },
  {
    title: "StyleHub — Fashion E-Commerce",
    category: "E-Commerce",
    description:
      "A trendy fashion store with product filtering, wishlists, and secure checkout.",
    image: "/images/project-5.svg",
  },
  {
    title: "TechFix — IT Services Website",
    category: "Websites",
    description:
      "A professional IT services website with service booking and client portal.",
    image: "/images/project-6.svg",
  },
];

export const projectCategories: ProjectCategory[] = [
  "All",
  "Websites",
  "E-Commerce",
  "Web Apps",
];

// ─── Testimonials ───────────────────────────────────────────
export interface Testimonial {
  name: string;
  role: string;
  text: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    name: "Sarah Mitchell",
    role: "Owner, Bloom & Petal",
    text: "Arslan built our website from scratch and it looks absolutely stunning. Our online orders have doubled since launch. Highly recommend!",
    rating: 5,
  },
  {
    name: "James Carter",
    role: "Founder, Fresh Mart",
    text: "Professional, responsive, and delivered on time. Arslan understood exactly what we needed for our e-commerce store. Five stars!",
    rating: 5,
  },
  {
    name: "Ahmed Khan",
    role: "Manager, Al-Noor Restaurant",
    text: "Our new website has brought in so many more reservations. Arslan was a pleasure to work with — patient, skilled, and reliable.",
    rating: 5,
  },
  {
    name: "Lisa Thompson",
    role: "CEO, CloudServe Solutions",
    text: "The dashboard Arslan built for us is exactly what we envisioned. Clean design, fast performance, and our team loves using it.",
    rating: 5,
  },
];
