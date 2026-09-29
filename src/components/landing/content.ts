import { tKeys } from "@/localization/tKeys";

const t = tKeys.landing;

export const NAV_LINKS = [
  { label: t.nav.place, href: "#place" },
  { label: t.nav.rooms, href: "#rooms" },
  { label: t.nav.faq, href: "#faq" },
  { label: t.nav.contact, href: "#footer" },
] as const;

export const HERO = {
  kicker: t.hero.kicker,
  title: t.hero.title,
  location: t.hero.location,
  slotId: "mry-hero",
  slotSrc: "/images/main.JPG",
  slotAlt: t.hero.imageAlt,
  slotPlaceholder: t.hero.placeholder,
} as const;

export const PLACE = {
  label: t.place.label,
  heading: t.place.heading,
  paragraphs: [t.place.paragraph1, t.place.paragraph2, t.place.paragraph3],
} as const;

export const PLACE_GALLERY = {
  images: [
    {
      id: "mry-place-1",
      src: "/images/view.JPG",
      alt: t.gallery.bay.alt,
      placeholder: t.gallery.bay.placeholder,
    },
    {
      id: "mry-place-2",
      src: "/images/pizza.JPG",
      alt: t.gallery.pizza.alt,
      placeholder: t.gallery.pizza.placeholder,
    },
    {
      id: "mry-place-3",
      src: "/images/view2.JPG",
      alt: t.gallery.sunset.alt,
      placeholder: t.gallery.sunset.placeholder,
    },
  ],
  ratio: 2 / 3,
} as const;

export const ROOMS = {
  label: t.rooms.label,
  photoPlaceholder: t.rooms.photoPlaceholder,
} as const;

export const FAQ = {
  label: t.faq.label,
  heading: t.faq.heading,
  note: t.faq.note,
  items: [
    t.faq.checkIn,
    t.faq.checkout,
    t.faq.houseRules,
    t.faq.kitchen,
    t.faq.activities,
  ],
} as const;

export const FOOTER = {
  brand: "Maryama",
  tagline: t.footer.tagline,
  address: {
    label: t.footer.addressLabel,
    lines: [
      t.footer.addressLine1,
      t.footer.addressLine2,
      t.footer.addressLine3,
    ],
  },
  contact: {
    label: t.footer.contactLabel,
    phone: "+212 600 000 000",
    phoneHref: "tel:+212600000000",
    email: "hello@example.com",
    emailHref: "mailto:hello@example.com",
  },
  follow: {
    label: t.footer.followLabel,
    socials: [
      {
        label: "Instagram",
        href: "https://instagram.com",
        icon: "instagram" as const,
      },
      {
        label: "WhatsApp",
        href: "https://wa.me/212600000000",
        icon: "whatsapp" as const,
      },
    ],
  },
  copyright: "© 2026 Maryama",
  closingLine: t.footer.closingLine,
} as const;
