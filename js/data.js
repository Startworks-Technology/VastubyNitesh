/**
 * Vastu by Nitesh - Profile, Services, Testimonials & Blog Data
 * Authoritative Vastu Shastra Consultant & Energy Alignment Expert
 */

const SITE_CONFIG = {
  // Configurable WhatsApp Phone Number
  whatsappNumber: "917730903111", 
  whatsappDisplayNumber: "+91 77309 03111",
  whatsappDefaultMsg: "Namaste Nitesh ji, I would like to consult with you regarding Vastu Shastra for my space.",
  
  // Medium Publication / Profile Configuration
  mediumProfileUrl: "https://medium.com/@niteshalag",
  mediumUsername: "@niteshalag",
  mediumAuthorName: "Nitesh Alag"
};

const PROFILE_DATA = {
  name: "Nitesh Alag",
  title: "Vastu Shastra Expert & Spatial Energy Consultant",
  tagline: "Bridging 5,000-Year-Old Vedic Spatial Science with 22+ Years Analytical IT Precision",
  experienceYears: "12+",
  itExperienceYears: "22+",
  rating: 4.9,
  ratingsCount: 18,
  bookingsCount: "63+",
  testimonialsCount: "18+",
  caseStudiesCount: "1,000+",
  avatar: "assets/nitesh-alag.png",
  avatarFallback: "assets/nitesh-alag.png",
  jobTitle: "🏢 Scientific Vastu for IT Parks, Commercial Hubs & Modern Apartments 🏡 Non-Demolition Spatial Remedies & L-ROD Energy Scanning 🌸 Holistic Emotional Well-being via Bach Flower Therapy 🔮 Over 12+ years, guiding clients across India and globally",
  headlinePoints: [
    "🏢 Scientific Vastu for IT Parks, Commercial Hubs & Modern Apartments",
    "🏡 Non-Demolition Spatial Remedies & L-ROD Telluric Energy Scanning",
    "🧭 Directional 16-Zone Energy Balancing for Health, Wealth & Focus",
    "🌸 Holistic Wellness: Bach Flower Therapy & Complementary Vedic Astrology"
  ],
  bio: `Nitesh Alag is an accomplished Vastu Shastra Expert and Spatial Energy Consultant with over 12+ years of professional practice in occult and architectural energy sciences. Uniquely combining 22+ years of high-level IT database architecture experience with ancient Vedic spatial design, Nitesh brings an unmatched analytical, data-driven rigor to energy alignment.

His expertise specializes in modern high-rise apartments, tech parks, corporate offices, and luxury residences. Recognizing that modern architectural constraints make structural breaking impractical, Nitesh champions the 'Zero-Demolition Vastu' philosophy—rectifying energy imbalances through subtle elemental re-balancing, metallic inserts, sacred geometry, color harmonics, and precision directional orientation.

Trained formally under distinguished Gurus, his mastery encompasses Vastu Shastra, advanced L-ROD energy scanning for geopathic stress, Swaryoga, and certified Bach Flower Therapy. Whether evaluating a tech startup's founder cabin for cash flow, or realigning a luxury high-rise apartment for peace and health, Nitesh provides clear, logical, and transformative guidance trusted by doctors, corporate executives, entrepreneurs, and homeowners across India and worldwide.`,
  badges: ["Vastu Authority", "IT Veteran", "Community Care", "Host Worthy"],
  socials: [
    { name: "Medium", url: "https://medium.com/@niteshalag", icon: "medium" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/nitesh-alag", icon: "linkedin" },
    { name: "Instagram", url: "https://www.instagram.com/niteshalag?utm_source=qr&igsh=MWVuOGQzNmdnejFuaA==", icon: "instagram" },
    { name: "YouTube", url: "https://www.youtube.com/channel/UCFUpGc246iC45c550RppUaA/videos", icon: "youtube" },
    { name: "Facebook", url: "https://www.facebook.com/Vgyaanvastu?mibextid=ZbWKwL", icon: "facebook" },
    { name: "Twitter/X", url: "https://x.com/NiteshAlag1301?t=nyC073PaZcXAZEpxWBMy4A&s=09", icon: "twitter" }
  ]
};

const VASTU_ELEMENTS = [
  {
    element: "Jal (Water)",
    zone: "North-East (Ishanya)",
    color: "#3E6B7A",
    deity: "Lord Shiva / Kuber",
    description: "Governs mental clarity, visionary leadership, financial influx, and tranquility. Best kept open, pristine, and light.",
    icon: "droplet"
  },
  {
    element: "Vayu (Air)",
    zone: "North-West (Vayavya)",
    color: "#4F6E5F",
    deity: "Vayu Deva",
    description: "Rules social networks, team collaboration, business partnerships, and smooth logistical movement.",
    icon: "wind"
  },
  {
    element: "Agni (Fire)",
    zone: "South-East (Agneya)",
    color: "#B86749",
    deity: "Agni Deva",
    description: "Fosters vitality, operational speed, passion, cash liquidity, and active conversion. Ideal for servers, kitchens, and power sources.",
    icon: "flame"
  },
  {
    element: "Prithvi (Earth)",
    zone: "South-West (Nairutya)",
    color: "#7D6B56",
    deity: "Nirriti / Stability",
    description: "Anchors grounded stability, leadership authority, executive cabins, and financial retention. Governs structural weight and master suites.",
    icon: "mountain"
  },
  {
    element: "Akasha (Space)",
    zone: "Center (Brahma Sthan)",
    color: "#6B7C72",
    deity: "Brahma",
    description: "The core vibrational nexus of your building or apartment. Must remain unobstructed, unburdened, and illuminated for ambient cosmic energy circulation.",
    icon: "sun"
  }
];

const SERVICES_DATA = [
  {
    id: "1071967",
    title: "Vastu Analysis with Solutions",
    category: "vastu",
    categoryLabel: "Vastu Shastra",
    type: "Call or Written (Your Choice)",
    price: 33500,
    formattedPrice: "₹33,500",
    highlight: true,
    tag: "Most Comprehensive",
    summary: "Complete spatial energy audit of your home, shop, or commercial facility with customized non-demolition remedies. Available via live consultation call or comprehensive written audit (your choice).",
    features: [
      "Format: 1:1 Live Consultation Call or Exhaustive Written Report (Your Choice)",
      "Full architectural floor plan mapping & 16-zone directional analysis",
      "Identification of geopathic stress & energy blockages",
      "Elemental balancing (Pancha Tattva corrections without demolition)",
      "Detailed remedial placement guide (colors, metals, sacred yantras)",
      "Follow-up review session after remedy implementation"
    ],
    whatsappMsg: "Namaste Nitesh ji, I am interested in booking 'Vastu Analysis with Solutions' (₹33,500) via Call or Written format (my choice). Please share the next steps and required floor plan details."
  },
  {
    id: "2177020",
    title: "Online Vastu Consultation",
    category: "vastu",
    categoryLabel: "Vastu Shastra",
    type: "Call or Written (Your Choice)",
    price: 21000,
    formattedPrice: "₹21,000",
    highlight: false,
    tag: "High Demand",
    summary: "Remote Vastu consultation to diagnose spatial imbalance for apartments and villas. Conducted via live video/phone call or comprehensive written guidance (your choice).",
    features: [
      "Format: 1:1 Live Video/Phone Call or Structured Written Report (Your Choice)",
      "Remote assessment of 2D/3D floor layouts",
      "Room-by-room directional evaluation (Pooja, Kitchen, Bed, Entrance)",
      "Practical remedies for doors, toilets, and kitchen misalignments",
      "Direct Q&A to answer your immediate concerns"
    ],
    whatsappMsg: "Namaste Nitesh ji, I would like to book an 'Online Vastu Consultation' (₹21,000) via Call or Written format (my choice) for my residence/property."
  },
  {
    id: "2233987",
    title: "Business Logo Design with Astro-Vastu",
    category: "vastu",
    categoryLabel: "Vastu & Branding",
    type: "Call or Written (Your Choice)",
    price: 24500,
    formattedPrice: "₹24,500",
    highlight: false,
    tag: "For Businesses",
    summary: "Align your brand symbol, corporate colors, and geometry with your birth chart and business elemental quadrant. Conducted via 1:1 strategy call or detailed written design dossier (your choice).",
    features: [
      "Format: 1:1 Strategic Discussion Call or Detailed Written Dossier (Your Choice)",
      "Analysis of founder's horoscope & favorable elemental colors",
      "Sacred geometry and shape alignment according to company industry",
      "Directional placement recommendations on letterheads & digital assets",
      "Delivered with comprehensive design rationale guidelines"
    ],
    whatsappMsg: "Namaste Nitesh ji, I would like to consult on 'Business Logo Design with Astro-Vastu' (₹24,500) via Call or Written format (my choice) for my brand."
  },
  {
    id: "2175276",
    title: "Muhurat Consultation",
    category: "vastu",
    categoryLabel: "Vastu & Timings",
    type: "Call or Written (Your Choice)",
    price: 3300,
    formattedPrice: "₹3,300",
    highlight: false,
    tag: "Auspicious Timing",
    summary: "Pinpoint precise auspicious celestial windows (Shubh Muhurat) for Griha Pravesh, property purchase, or registrations. Discuss over a direct call or receive a complete written report (your choice).",
    features: [
      "Format: Discussion Call or Complete Written Timing Report (Your Choice)",
      "Panchang calculation tailored to your family's Nakshatras",
      "Griha Pravesh, Bhoomi Pujan, or business launch timings",
      "Dos and Don'ts for the ceremony according to Vedic traditions",
      "Written report with backup auspicious dates"
    ],
    whatsappMsg: "Namaste Nitesh ji, I would like to get a 'Muhurat Consultation' (₹3,300) via Call or Written format (my choice) for an auspicious occasion."
  },
  {
    id: "1639370",
    title: "Astrology Detailed Consulting",
    category: "astrology",
    categoryLabel: "Vedic Astrology",
    type: "Call or Written (Your Choice)",
    price: 5300,
    formattedPrice: "₹5,300",
    highlight: true,
    tag: "Popular",
    summary: "Comprehensive life-path horoscope reading covering career trajectory, relationship dynamics, financial yogas, and health. Available via 1:1 deep-dive call or full written analysis (your choice).",
    features: [
      "Format: 1:1 Deep-Dive Call or Comprehensive Written Horoscope Reading (Your Choice)",
      "In-depth analysis of Lagna, D9 Navamsha, and Current Mahadasha",
      "Career growth, business prospects, and financial timeline",
      "Marriage, relationship harmony, and partner compatibility checks",
      "Actionable, personalized Vedic remedies and gemstone/mantra advice"
    ],
    whatsappMsg: "Namaste Nitesh ji, I would like to schedule an 'Astrology Detailed Consulting' (₹5,300) via Call or Written format (my choice). Kindly let me know available slots."
  },
  {
    id: "1637349",
    title: "Single Question Detailing",
    category: "astrology",
    categoryLabel: "Vedic Astrology",
    type: "Call or Written (Your Choice)",
    price: 3300,
    formattedPrice: "₹3,300",
    highlight: false,
    tag: "Focused Clarity",
    summary: "Receive a thorough breakdown of a specific critical dilemma (job switch, marriage timing, litigation, or health). Delivered via dedicated discussion call or detailed written analysis (your choice).",
    features: [
      "Format: Dedicated 1:1 Call or Exhaustive Written Analysis (Your Choice)",
      "Exhaustive planetary assessment around your single question",
      "Timeline predictions and favorable transit periods",
      "Custom remedial roadmap delivered via your chosen format"
    ],
    whatsappMsg: "Namaste Nitesh ji, I would like to request 'Single Question Detailing' (₹3,300) via Call or Written format (my choice). I have a specific question to analyze."
  },
  {
    id: "2307149",
    title: "Multiple Question Detailed Report",
    category: "astrology",
    categoryLabel: "Vedic Astrology",
    type: "Call or Written (Your Choice)",
    price: 6000,
    formattedPrice: "₹6,000",
    highlight: false,
    tag: "In-Depth Assessment",
    summary: "Comprehensive multi-question assessment addressing up to 4 major life questions with detailed planetary insights. Available via 1:1 consultation call or complete written dossier (your choice).",
    features: [
      "Format: 1:1 Consultation Call or Complete Written Dossier (Your Choice)",
      "Detailed analysis for up to 4 life queries",
      "Dasha breakdown and future milestones",
      "Customized remedial recommendations for each sphere of life"
    ],
    whatsappMsg: "Namaste Nitesh ji, I would like to order a 'Multiple Question Detailed Report' (₹6,000) via Call or Written format (my choice) for my horoscope."
  },
  {
    id: "2289267",
    title: "Prashna Kundali - Single Question",
    category: "astrology",
    categoryLabel: "Horary Astrology",
    type: "Call or Written (Your Choice)",
    price: 2400,
    formattedPrice: "₹2,400",
    highlight: false,
    tag: "No Birth Chart Needed",
    summary: "Horary astrology reading using the exact moment your question is received. Ideal if birth time is unverified. Consult via direct call or written response (your choice).",
    features: [
      "Format: Direct Call or Detailed Written Response (Your Choice)",
      "Cast on the precise time and place of inquiry",
      "Calculates instant outcome for urgent dilemmas (deals, lost items, interviews)",
      "Prompt response within 24-48 hours"
    ],
    whatsappMsg: "Namaste Nitesh ji, I would like to consult via 'Prashna Kundali' (₹2,400) via Call or Written format (my choice) for an urgent matter."
  },
  {
    id: "1637635",
    title: "Bach Flower Health Consultation",
    category: "bachflower",
    categoryLabel: "Bach Flower Therapy",
    type: "Call or Written (Your Choice)",
    price: 2700,
    formattedPrice: "₹2,700",
    highlight: true,
    tag: "Holistic Health",
    summary: "Gentle natural therapy using Dr. Edward Bach's flower remedies to release anxiety, stress, fears, and psychosomatic blocks. Available via 1:1 healing call or structured written assessment (your choice).",
    features: [
      "Format: 1:1 Healing Call or Structured Written Assessment (Your Choice)",
      "Emotional assessment and root-cause behavioral dialogue",
      "Custom formulation of flower essences tailored to your mental state",
      "Safe, non-habit forming, zero side effects natural remedy protocol",
      "Usage dosage schedule and emotional tracking guidance"
    ],
    whatsappMsg: "Namaste Nitesh ji, I would like to book a 'Bach Flower Health Consultation' (₹2,700) via Call or Written format (my choice) for emotional and health balance."
  },
  {
    id: "2304189",
    title: "On Demand Learning Session",
    category: "learning",
    categoryLabel: "Mentorship",
    type: "Call or Written (Your Choice)",
    price: 2700,
    formattedPrice: "₹2,700",
    highlight: false,
    tag: "Knowledge Transfer",
    summary: "Personalized 1-on-1 teaching session in occult sciences: learn Vastu principles, Swaryoga breathing, or chart reading fundamentals. Available via live masterclass call or guided written curriculum (your choice).",
    features: [
      "Format: 1:1 Live Masterclass Call or Guided Written Curriculum (Your Choice)",
      "Curriculum tailored to your interest and level",
      "Hands-on case studies and technique deconstruction",
      "Practical question-and-answer exploration"
    ],
    whatsappMsg: "Namaste Nitesh ji, I would like to book an 'On Demand Learning Session' (₹2,700) via Call or Written format (my choice) with you."
  }
];

const TESTIMONIALS_DATA = [
  {
    id: 1,
    name: "Popular Doctor From Delhi",
    role: "Senior Medical Specialist",
    rating: 5,
    pinned: true,
    highlight: "Grateful for divine support",
    text: "Hi Nitesh, I am grateful to god to have your support at the time when I needed the most 🙏"
  },
  {
    id: 2,
    name: "Smita Tapaswini",
    role: "Client",
    rating: 5,
    pinned: true,
    highlight: "Clear, patient & practical guidance",
    text: "Thank you so much, bhaiya! I really appreciate how patient you were with me. The examples you gave made it so much easier for me to understand my actual problem. I feel a lot clearer now. If anyone is looking for guidance, reach out to Nitesh bhaiya without a second thought 🙏."
  },
  {
    id: 3,
    name: "Deepak Behera",
    role: "Long-term Client",
    rating: 5,
    pinned: true,
    highlight: "Fruitful advice on marriage & property Vastu",
    text: "Whenever I have connected with Nitesh ji, it has always been a next level of experience. His guidance and suggestions are always to the point and fruitful. The remedies suggested have always worked when it is followed as advised by him. I have taken many major decisions with his kind advice including my marriage. The recent one is his suggestion on timings and other vastu expertise in selecting the property. Thank you for always being available for the kind help and support."
  },
  {
    id: 4,
    name: "Preetam Prajapati",
    role: "Client",
    rating: 5,
    pinned: false,
    highlight: "Left feeling confident and empowered",
    text: "I truly appreciated my meeting with Nitesh. He was incredibly attentive, taking the time to listen thoroughly to my questions and understand the specific challenges I was facing. Nitesh then impressed me with his insightful solutions and proactive approach. He not only addressed my immediate concerns but also provided valuable suggestions that will equip me to handle similar situations in the future. I left the meeting feeling confident and empowered, thanks to Nitesh's guidance."
  },
  {
    id: 5,
    name: "Annkur Aggarwal",
    role: "Client",
    rating: 5,
    pinned: false,
    highlight: "Knowledgeable and relief-oriented remedies",
    text: "Nitesh ji amazed me with his knowledge of astrology and provided me best of resolution for my health problems. I will follow the remedies and am sure that I will find relief."
  },
  {
    id: 6,
    name: "Preeti Sharma",
    role: "Client",
    rating: 5,
    pinned: false,
    highlight: "Connected the dots on health issues",
    text: "It was an amazing interaction with Nitesh ji. He connected the dots and understood the reasons for my health issues quite well."
  },
  {
    id: 7,
    name: "Annkur Aggarwal (Follow-up)",
    role: "Client",
    rating: 5,
    pinned: false,
    highlight: "Straightforward remedies to balance life",
    text: "Great guy he is, gave simple remedies to balance life. Straight forward, no extra talks. I found him suitable person to connect for all life problems."
  },
  {
    id: 8,
    name: "Health Consultation Client",
    role: "Bach Flower Recipient",
    rating: 5,
    pinned: false,
    highlight: "Understood problems in a new way",
    text: "It was really helpful for me taking consultation of Bach Flower with Nitesh ji. I understand my problems in a different way and will solve through that."
  },
  {
    id: 9,
    name: "Occult Science Student",
    role: "Learning Session Attendee",
    rating: 5,
    pinned: false,
    highlight: "Mind blowing techniques",
    text: "It was really a great experience learning from you Nitesh ji. The techniques which you have taught is really mind blowing. Thanks a lot for sharing your knowledge with us."
  }
];

const FAQS_DATA = [
  {
    q: "How does an Online Vastu Consultation work without an in-person visit?",
    a: "Through precise architectural floor plans, satellite Google Earth coordinates, and video walkthroughs, we evaluate all 16 Vastu zones and energy pathways. Scientific Vastu remedies (color balancing, elemental corrections, copper/brass rods) can be accurately placed without requiring destructive structural remodeling."
  },
  {
    q: "Do I need to break walls or renovate my home for Vastu remedies?",
    a: "No. Nitesh specializes in non-demolition, non-destructive Vastu solutions. Through elemental balancing (Pancha Tattva), directional realignment, metallic energy strips, yantras, and lighting, energy flow is corrected without disturbing your architecture."
  },
  {
    q: "How quickly do you respond when I book via WhatsApp?",
    a: "WhatsApp inquiries are personally reviewed by Nitesh and his coordination team, usually responding within 1 to 3 hours with slot availability, preparation instructions, and intake questionnaire."
  },
  {
    q: "Can I choose between a Call or a Written consultation for any service?",
    a: "Yes, absolutely! For all services, the choice is entirely yours. You can opt for an interactive 1:1 direct phone/video call to discuss your queries live, or receive a comprehensive written report and step-by-step remedial roadmap directly on WhatsApp/email—whichever format suits you best."
  },
  {
    q: "What is Bach Flower Therapy and how does it combine with Astrology?",
    a: "Bach Flower Therapy consists of 38 natural flower remedies discovered by Dr. Edward Bach that treat emotional imbalances (fear, anxiety, grief, indecision). By cross-analyzing your planetary dasha and moon sign, Nitesh identifies psychosomatic vulnerabilities and prescribes targeted remedies."
  }
];

// Blog Posts Data & Medium Integration
const BLOG_POSTS_DATA = [
  {
    id: "blog-1",
    title: "Vastu Shastra for High-Tech IT Parks & Corporate Workspaces",
    slug: "vastu-for-it-parks-corporate-workspaces",
    category: "commercial",
    categoryLabel: "Corporate & IT Vastu",
    readTime: "6 min read",
    date: "Sep 2026",
    image: "assets/vastu-it-building.jpg",
    mediumUrl: "https://medium.com/@niteshalag",
    summary: "How modern tech campuses and IT enterprises leverage ancient 16-zone directional alignments to elevate engineering focus, reduce team attrition, and protect cash reserves.",
    bullets: [
      "Why founder cabins in Nairutya (South-West) anchor corporate stability",
      "Server room energy: Managing Agni (Fire) zone without electromagnetic fatigue",
      "Practical non-intrusive floor alignment for open-plan agile workspaces"
    ]
  },
  {
    id: "blog-2",
    title: "Balancing Modern High-Rise Apartments with Zero Demolition",
    slug: "modern-apartment-vastu-zero-demolition",
    category: "residential",
    categoryLabel: "Apartment Vastu",
    readTime: "5 min read",
    date: "Sep 2026",
    image: "assets/vastu-modern-apartment.jpg",
    mediumUrl: "https://medium.com/@niteshalag",
    summary: "Living on the 14th floor of a concrete tower? Discover how subtle color harmonics, metallic boundary inserts, and elemental balances overcome structural flaws without breaking a single tile.",
    bullets: [
      "Rectifying North-East toilets and cut corners in builder flats",
      "Optimizing balcony airflow and positive morning sunlight capture",
      "Master bedroom Vastu for deep rejuvenating sleep and emotional calm"
    ]
  },
  {
    id: "blog-3",
    title: "The Emotional Environment: Bach Flower Therapy Meets Spatial Energy",
    slug: "bach-flower-therapy-spatial-energy",
    category: "wellness",
    categoryLabel: "Bach Flower Wellness",
    readTime: "4 min read",
    date: "Aug 2026",
    image: "assets/vastu-flowers-wellness.jpg",
    mediumUrl: "https://medium.com/@niteshalag",
    summary: "How environmental geopathic stress triggers psychosomatic fatigue, and why gentle natural flower remedies act as a gentle energetic bridge to restore inner equilibrium.",
    bullets: [
      "Understanding Dr. Edward Bach's 38 flower essence philosophy",
      "Why sensitive individuals absorb apartment energy blockages",
      "Simple daily wellness routines for a peaceful, centered mind"
    ]
  },
  {
    id: "blog-4",
    title: "Creating a Thriving Home Sanctuary for Family Joy & Abundance",
    slug: "creating-a-thriving-home-sanctuary",
    category: "lifestyle",
    categoryLabel: "Harmonious Living",
    readTime: "5 min read",
    date: "Aug 2026",
    image: "assets/vastu-happy-living.jpg",
    mediumUrl: "https://medium.com/@niteshalag",
    summary: "A practical guide to welcoming prana (vital life force) into your everyday living room through natural sunlight, indoor flora, and unburdened central space.",
    bullets: [
      "The sacred role of Brahma Sthan (the central core of your home)",
      "Plants and flowers that enhance Jal and Vayu zones",
      "How decluttering specific directional corners unlocks family happiness"
    ]
  }
];
