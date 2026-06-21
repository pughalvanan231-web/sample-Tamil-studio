export interface Service {
  title: string;
  description: string;
  icon: string;
}

export interface PortfolioItem {
  id: number;
  src: string;
  title: string;
  category: string;
  width: number;
  height: number;
}

export interface Testimonial {
  name: string;
  role: string;
  content: string;
  rating: number;
}

export interface Stat {
  label: string;
  value: number;
  suffix: string;
}

export const services: Service[] = [
  {
    title: "Wedding Photography",
    description: "Capturing every precious moment of your special day with cinematic elegance and timeless artistry.",
    icon: "💍",
  },
  {
    title: "Maternity Photography",
    description: "Celebrating the beauty of motherhood with dreamy, emotional, and tasteful maternity portraits.",
    icon: "🤰",
  },
  {
    title: "Baby Shower Photography",
    description: "Documenting the joy and excitement of your baby shower with candid and creative shots.",
    icon: "🎀",
  },
  {
    title: "Outdoor Photoshoots",
    description: "Breathtaking outdoor sessions that blend natural beauty with professional photography expertise.",
    icon: "🌿",
  },
  {
    title: "Couple Shoots",
    description: "Romantic and artistic couple portraits that tell your unique love story.",
    icon: "💑",
  },
  {
    title: "Family Photography",
    description: "Heartwarming family portraits that freeze your beautiful family moments in time.",
    icon: "👨‍👩‍👧‍👦",
  },
  {
    title: "Album Designing",
    description: "Premium handcrafted photo albums with elegant layouts and luxurious finishes.",
    icon: "📖",
  },
  {
    title: "Event Photography",
    description: "Comprehensive event coverage from corporate gatherings to private celebrations.",
    icon: "🎉",
  },
];

export const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
    title: "Elegant Wedding Ceremony",
    category: "Wedding",
    width: 800,
    height: 1000,
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1510076857177-7470076d4098?w=800&q=80",
    title: "Maternity Glow",
    category: "Maternity",
    width: 800,
    height: 600,
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1559589689-577aabd1db4f?w=800&q=80",
    title: "Outdoor Love Story",
    category: "Couple",
    width: 800,
    height: 1200,
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800&q=80",
    title: "Baby Shower Bliss",
    category: "Baby Shower",
    width: 800,
    height: 800,
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
    title: "Family Portrait",
    category: "Family",
    width: 800,
    height: 1000,
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=800&q=80",
    title: "Golden Hour Photoshoot",
    category: "Outdoor",
    width: 800,
    height: 600,
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80",
    title: "Grand Reception",
    category: "Event",
    width: 800,
    height: 900,
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1529636798458-92182e662485?w=800&q=80",
    title: "Wedding Details",
    category: "Wedding",
    width: 800,
    height: 700,
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&q=80",
    title: "Maternal Love",
    category: "Maternity",
    width: 800,
    height: 1100,
  },
  {
    id: 10,
    src: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&q=80",
    title: "Romantic Rooftop",
    category: "Couple",
    width: 800,
    height: 800,
  },
  {
    id: 11,
    src: "https://images.unsplash.com/photo-1492725764893-90b379c2b6e7?w=800&q=80",
    title: "Outdoor Adventure",
    category: "Outdoor",
    width: 800,
    height: 1000,
  },
  {
    id: 12,
    src: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=800&q=80",
    title: "Event Gala",
    category: "Event",
    width: 800,
    height: 650,
  },
];

export const testimonials: Testimonial[] = [
  {
    name: "Priya & Arjun",
    role: "Wedding Clients",
    content:
      "Tamil Photography captured our wedding absolutely beautifully. Every photo tells a story and the album quality is beyond premium. They made us feel completely at ease throughout the day.",
    rating: 5,
  },
  {
    name: "Kavitha",
    role: "Maternity Client",
    content:
      "The maternity shoot was such a magical experience. The team was incredibly professional and creative. The final portraits are works of art that we'll treasure forever.",
    rating: 5,
  },
  {
    name: "Suresh Family",
    role: "Family Portrait",
    content:
      "Our family photoshoot was wonderful! They were so patient with our kids and captured the most natural, happy moments. The album design is stunning. Highly recommended!",
    rating: 5,
  },
  {
    name: "Meena & Rahul",
    role: "Baby Shower",
    content:
      "Thank you for documenting our baby shower so beautifully! The candid shots are our favorites. You truly captured the joy and excitement of the day. Exceptional service!",
    rating: 5,
  },
  {
    name: "Ananya",
    role: "Event Client",
    content:
      "Professional, creative, and incredibly talented. Tamil Photography exceeded all our expectations. The editing quality and attention to detail set them apart from others.",
    rating: 5,
  },
  {
    name: "Deepak",
    role: "Album Design Client",
    content:
      "The album design is absolutely breathtaking. The layout, the paper quality, the binding - everything is premium. It's not just a photo album; it's a legacy piece.",
    rating: 5,
  },
];

export const stats: Stat[] = [
  { label: "Happy Clients", value: 500, suffix: "+" },
  { label: "Events Covered", value: 800, suffix: "+" },
  { label: "Years of Experience", value: 10, suffix: "+" },
  { label: "Positive Reviews", value: 450, suffix: "+" },
];

export const categories = [
  "All",
  "Wedding",
  "Maternity",
  "Baby Shower",
  "Couple",
  "Family",
  "Outdoor",
  "Event",
] as const;
