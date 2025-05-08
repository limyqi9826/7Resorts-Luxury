export const navItems = [
  { id: 'home', text: 'Home', link: '#home' },
  { id: 'about', text: 'About Us', link: '#about' },
  { id: 'service', text: 'Services', link: '#service' },
  { id: 'promotion', text: 'Promotions', link: '#promotion' },
  { id: 'contact', text: 'Contact', link: '#contact' },
]

export const carouselSlides = [
  {
    image: new URL('../assets/images/carousel/luxury-island-escape.jpg', import.meta.url).href,
    title: 'Luxury Island Escape',
    content: 'Experience the ultimate getaway in our private island paradise',
  },
  {
    image: new URL('../assets/images/carousel/pristine-beaches.jpg', import.meta.url).href,
    title: 'Pristine Beaches',
    content: 'Walk along miles of untouched white sand beaches',
  },
  {
    image: new URL('../assets/images/carousel/underwater-wonders.jpg', import.meta.url).href,
    title: 'Underwater Wonders',
    content: 'Explore vibrant coral reefs and marine life right from your villa',
  },
]

export const services = [
  {
    title: 'Villas',
    description: 'Private villas with plunge pools & ocean views',
    image: new URL('../assets/images/services/villas.jpg', import.meta.url).href,
    link: '/services/villas',
    buttonText: 'Explore Villas →',
  },
  {
    title: 'Dining',
    description: 'Beachfront fine dining & 24/7 in-villa service',
    image: new URL('../assets/images/services/dining.jpg', import.meta.url).href,
    link: '/services/dining',
    buttonText: 'View Menus →',
  },
  {
    title: 'Pool',
    description: 'Infinity-edge with swim-up cocktail bar',
    image: new URL('../assets/images/services/infinity-pool.jpg', import.meta.url).href,
    link: '/services/pool',
    buttonText: 'See Amenities →',
  },
  {
    title: 'Spa',
    description: 'Overwater treatment rooms with marine therapies',
    image: new URL('../assets/images/services/spa.jpg', import.meta.url).href,
    link: '/services/spa',
    buttonText: 'Book Treatments →',
  },
  {
    title: 'Events',
    description: 'Beach weddings & corporate retreats',
    image: new URL('../assets/images/services/events.jpg', import.meta.url).href,
    link: '/services/events',
    buttonText: 'Plan Event →',
  },
]

export const restaurants = [
  {
    name: 'Azure',
    cuisine: 'Contemporary Seafood',
    description:
      'Our signature overwater restaurant offering the freshest seafood with panoramic ocean views.',
    image: new URL('@/assets/images/services/restaurant-azure.jpg', import.meta.url).href,
    features: [
      "Chef's tasting menu with wine pairing",
      'Overwater dining with glass floor panels',
      'Sunset views from every table',
      'Fresh local seafood daily',
    ],
    hours: '6:00 PM - 10:30 PM',
  },
  {
    name: 'Saffron',
    cuisine: 'Maldivian & Asian Fusion',
    description: 'Authentic flavors with a modern twist, served in our beachfront pavilion.',
    image: new URL('@/assets/images/services/restaurant-saffron.jpg', import.meta.url).href,
    features: [
      'Traditional Maldivian dishes',
      'Live cooking stations',
      'Outdoor seating under the stars',
      'Signature cocktail menu',
    ],
    hours: '7:00 AM - 10:30 AM, 6:00 PM - 10:00 PM',
  },
  {
    name: 'The Reef',
    cuisine: 'International',
    description: 'Casual all-day dining with themed buffet nights and à la carte options.',
    image: new URL('@/assets/images/services/restaurant-reef.jpg', import.meta.url).href,
    features: [
      'Breakfast buffet with live stations',
      'Weekly themed dinner nights',
      "Kids' menu available",
      'Indoor and outdoor seating',
    ],
    hours: '7:00 AM - 10:30 PM',
  },
]

export const specialExperiences = [
  {
    title: 'Private Beach Dinner',
    description: 'Romantic candlelit dinner on your own stretch of beach',
    image: new URL('@/assets/images/services/beach-dinner.jpg', import.meta.url).href,
  },
  {
    title: 'Sunset Champagne Cruise',
    description: 'Gourmet picnic aboard our luxury dhoni at sunset',
    image: new URL('@/assets/images/services/champagne-cruise.jpg', import.meta.url).href,
  },
  {
    title: "Chef's Table",
    description: 'Exclusive multi-course tasting menu in our kitchen',
    image: new URL('@/assets/images/services/chefs-table.jpg', import.meta.url).href,
  },
]

export const signatureTreatments = [
  {
    name: 'Maldivian Pearl Ritual',
    duration: 90,
    description:
      'A luxurious body treatment using pearl powder and coconut milk to brighten and hydrate the skin.',
    price: '$220',
    image: new URL('@/assets/images/services/treatment-pearl.jpg', import.meta.url).href,
  },
  {
    name: 'Ocean Harmony Massage',
    duration: 60,
    description: 'A rhythmic massage using warm seashells and marine oils to ease muscle tension.',
    price: '$180',
    image: new URL('@/assets/images/services/treatment-massage.jpg', import.meta.url).href,
  },
  {
    name: 'Coral Facial',
    duration: 75,
    description:
      'An anti-aging facial using marine collagen and antioxidant-rich seaweed extracts.',
    price: '$195',
    image: new URL('@/assets/images/services/treatment-facial.jpg', import.meta.url).href,
  },
  {
    name: 'Sunset Couples Retreat',
    duration: 120,
    description: 'Side-by-side massages in our overwater pavilion with champagne and chocolate.',
    price: '$450 per couple',
    image: new URL('@/assets/images/services/treatment-couples.jpg', import.meta.url).href,
  },
]

export const facilities = [
  {
    icon: 'fas fa-water',
    name: 'Hydrotherapy Pool',
    description: 'Heated seawater pool with massage jets',
  },
  {
    icon: 'fas fa-fire',
    name: 'Sauna & Steam',
    description: 'Traditional heat therapies with ocean views',
  },
  {
    icon: 'fas fa-snowflake',
    name: 'Ice Fountain',
    description: 'Revitalizing cold therapy after heat treatments',
  },
  {
    icon: 'fas fa-spa',
    name: 'Relaxation Lounge',
    description: 'Silent area with herbal teas and fruit',
  },
  {
    icon: 'fas fa-leaf',
    name: 'Yoga Pavilion',
    description: 'Daily sunrise and sunset yoga sessions',
  },
  {
    icon: 'fas fa-bath',
    name: 'Vitality Pools',
    description: 'Contrast therapy pools with different temperatures',
  },
]

export const promotions = [
  { image: new URL('../assets/images/promotions/honeymoon-offer.jpg', import.meta.url).href },
  { image: new URL('../assets/images/promotions/family-package.jpg', import.meta.url).href },
  { image: new URL('../assets/images/promotions/early-bird.jpg', import.meta.url).href },
  { image: new URL('../assets/images/promotions/family-package.jpg', import.meta.url).href },
]

export const socialLinks = [
  { icon: 'fa-facebook-f' },
  { icon: 'fa-instagram' },
  { icon: 'fa-twitter' },
  { icon: 'fa-youtube' },
]

export const villaAmenities = [
  {
    icon: 'fas fa-umbrella-beach',
    title: 'Private Beach Access',
    description: 'Direct access to pristine beaches from your villa',
  },
  {
    icon: 'fas fa-swimming-pool',
    title: 'Infinity Pools',
    description: 'Private pools with stunning ocean views',
  },
  {
    icon: 'fas fa-wine-glass-alt',
    title: 'Mini Bar',
    description: 'Well-stocked with premium beverages and snacks',
  },
  {
    icon: 'fas fa-spa',
    title: 'Spa Bathrooms',
    description: 'Luxurious bathrooms with premium amenities',
  },
  {
    icon: 'fas fa-tv',
    title: 'Entertainment',
    description: 'Smart TVs with international channels',
  },
  {
    icon: 'fas fa-concierge-bell',
    title: '24/7 Butler',
    description: 'Dedicated butler service for all your needs',
  },
]

export const eventTypes = [
  {
    name: 'Beach Weddings',
    description: 'Say "I do" with your toes in the sand and the ocean as your backdrop',
    features: [
      'Custom ceremony setups',
      'Officiant services',
      'Bridal preparation villa',
      'Photography packages',
    ],
    image: new URL('@/assets/images/services/wedding-beach.jpg', import.meta.url).href,
  },
  {
    name: 'Corporate Retreats',
    description: 'Inspire your team with a productive island getaway',
    features: ['Meeting facilities', 'Team building activities', 'Custom catering', 'AV equipment'],
    image: new URL('@/assets/images/services/event-corporate.jpg', import.meta.url).href,
  },
  {
    name: 'Private Celebrations',
    description: 'Milestone birthdays, anniversaries, and special occasions',
    features: [
      'Custom decor and theming',
      'Entertainment coordination',
      'Specialty menus',
      'Fireworks displays',
    ],
    image: new URL('@/assets/images/services/event-party.jpg', import.meta.url).href,
  },
]

export const weddingPackages = [
  {
    name: 'Island Romance',
    price: 'From $5,000',
    inclusions: [
      'Beach ceremony setup',
      'Bridal bouquet and boutonniere',
      '1-hour photography',
      'Champagne toast',
      'Romantic dinner for two',
    ],
  },
  {
    name: 'Luxury Celebration',
    price: 'From $12,000',
    inclusions: [
      'Premium ceremony setup',
      'Full floral arrangements',
      '3-hour photography',
      'Cocktail reception for 20',
      '3-course dinner',
      'Wedding cake',
      'Live music',
    ],
  },
]

export const testimonials = [
  {
    name: 'Sarah & Michael',
    event: 'Wedding, March 2024',
    quote:
      'Our beach wedding was beyond perfect. The team handled every detail so we could just enjoy our day.',
    image: new URL('@/assets/images/services/testimonial1.jpg', import.meta.url).href,
  },
  {
    name: 'TechSolutions Inc.',
    event: 'Corporate Retreat, January 2024',
    quote: 'The perfect balance of work and play. Our team came back more connected and inspired.',
    image: new URL('@/assets/images/services/testimonial2.jpg', import.meta.url).href,
  },
  {
    name: 'The Johnson Family',
    event: '50th Anniversary, December 2023',
    quote: "Three generations celebrated together in paradise. Memories we'll cherish forever.",
    image: new URL('@/assets/images/services/testimonial3.jpg', import.meta.url).href,
  },
]
