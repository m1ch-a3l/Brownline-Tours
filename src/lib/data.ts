// ============================================================
// SAMPLE DATA — Ghana Tours, Testimonials, Team, Blog Posts
// ============================================================

export interface MealPlan {
  breakfast: boolean;
  lunch: boolean;
  dinner: boolean;
  snacks: boolean;
  note?: string;
}

export interface Restaurant {
  name: string;
  cuisine: string;
  priceRange: '$' | '$$' | '$$$' | '$$$$';
  specialty: string;
  address: string;
  mustTry: string;
}

export interface FoodAddOn {
  id: string;
  name: string;
  description: string;
  price: number;
  perPerson: boolean;
  icon: string;
}

export interface Tour {
  id: string;
  title: string;
  slug: string;
  location: string;
  country: string;
  category: string;
  price: number;
  doublePrice: number;
  duration: string;
  durationDays: number;
  rating: number;
  reviewCount: number;
  maxGuests: number;
  image: string;
  gallery: string[];
  description: string;
  highlights: string[];
  included: string[];
  excluded: string[];
  itinerary: { day: number; title: string; description: string; meals?: string[] }[];
  region: string;
  badge?: 'Popular' | 'New' | 'Sale' | 'Top Rated' | 'Signature';
  discount?: number;
  difficulty: 'Easy' | 'Moderate' | 'Challenging';
  tags: string[];
  mealPlan?: MealPlan;
  restaurants?: Restaurant[];
  foodAddOns?: FoodAddOn[];
  cuisineHighlights?: string[];
  optionalExperiences?: string[];
  perfectFor?: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  avatar: string;
  rating: number;
  comment: string;
  tourName: string;
  date: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
  author: string;
  authorAvatar: string;
  date: string;
  readTime: string;
  tags: string[];
}

export interface Booking {
  id: string;
  tourId: string;
  tourTitle: string;
  tourImage: string;
  name: string;
  email: string;
  phone: string;
  adults: number;
  children: number;
  date: string;
  totalPrice: number;
  status: 'Confirmed' | 'Pending' | 'Cancelled';
  specialRequests?: string;
  createdAt: string;
}

// ─── TOURS ────────────────────────────────────────────────────

export const tours: Tour[] = [
  {
    id: "t10",
    title: "Return to the Motherland Experience",
    slug: "return-to-the-motherland-experience",
    location: "Accra, Volta, Ashanti & Central Regions",
    country: "Ghana",
    category: "Heritage",
    price: 4990,
    doublePrice: 3995,
    duration: "12 Days",
    durationDays: 12,
    rating: 5.0,
    reviewCount: 11,
    maxGuests: 12,
    image: "/tourist_site/Kwame/kwame-nkrumah-memorial.jpg",
    gallery: [
      "/tourist_site/Kwame/kwame-nkrumah-memorial.jpg",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
      "https://images.unsplash.com/photo-1504829857797-ddff29c27927?w=800&q=80",
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&q=80",
      "/tourist_site/Cape Coast/the-world-famous-cape.jpg",
      "/tourist_site/Kakum/caption (1).jpg",
      "/tourist_site/Kwame/dr-kwame-nkrumah-s-mausoleum.jpg",
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80",
    ],
    description: "Brownline Tours' signature heritage experience, designed for the African diaspora and cultural travelers seeking a deep, emotional, and educational connection with Ghana. Across 12 days, this journey blends history, royal culture, ancestral reflection, community engagement, and coastal beauty into one powerful homecoming — from the halls of Ghana's independence in Accra, to the waterfalls and lakes of the Volta Region, the royal courts of the Ashanti Kingdom, and the ancestral slave route along the Central coast.",
    highlights: [
      "Accra cultural and historical tour",
      "Ghanaian cooking class experience",
      "Cedi bead-making experience",
      "Community immersion experience",
      "Shai Hills wildlife experience",
      "Wli Waterfalls (Upper & Lower Falls)",
      "Volta Lake boat cruise in Akosombo",
      "Ashanti Kingdom cultural experience",
      "Kente weaving and Adinkra printing",
      "Assin Manso ancestral heritage site",
      "Kakum National Park canopy walkway",
      "Elmina Castle historical tour",
    ],
    included: [
      "Airport meet and greet",
      "Private transportation throughout",
      "4–5-star accommodation",
      "Daily breakfast",
      "Selected meals",
      "Guided tours and entrance fees",
      "Volta River cruise",
      "Bottled water during tours",
    ],
    excluded: [
      "International flights",
      "Visa fees",
      "Travel insurance",
      "Personal expenses",
      "Alcoholic beverages",
      "Optional add-ons",
      "Tips and gratuities",
    ],
    perfectFor: [
      "African diaspora travelers",
      "Heritage and cultural seekers",
      "Families and groups",
      "Solo travelers",
      "Educational and emotional journey travelers",
    ],
    itinerary: [
      { day: 1, title: "Arrival in Accra — Welcome to the Motherland", description: "Upon arrival at Kotoka International Airport, you will be warmly welcomed by the Brownline Tours team and transferred to your carefully selected 4–5-star hotel in Accra. The evening is for rest and recovery after your international journey." },
      { day: 2, title: "Accra Heritage Discovery", description: "Explore Ghana's capital with visits to Kwame Nkrumah Memorial Park, Independence Square, Jamestown, and the Arts Centre for National Culture. Learn about Ghana's independence history, culture, and modern identity." },
      { day: 3, title: "Ghanaian Cooking Class & Cultural Immersion", description: "Begin your deep cultural connection with a hands-on Ghanaian cooking class, where you learn how to prepare traditional dishes using local ingredients and authentic methods.", meals: ["Lunch (cooked by you)"] },
      { day: 4, title: "Shai Hills & Volta Region Transfer", description: "Travel through scenic landscapes to Shai Hills Resource Reserve for a light safari and nature experience. Continue into the Volta Region and settle into your eco-lodge surrounded by nature." },
      { day: 5, title: "Wli Waterfalls Experience", description: "Visit the spectacular Wli Waterfalls, the tallest waterfall in West Africa. Enjoy a guided forest hike and experience either the Upper or Lower Falls depending on preference." },
      { day: 6, title: "Akosombo Lake Volta Experience", description: "Travel to Akosombo for a peaceful Volta River experience. Enjoy a scenic boat cruise on Lake Volta before checking into your lakeside accommodation." },
      { day: 7, title: "Ashanti Kingdom Experience (Kumasi)", description: "Travel to Kumasi, the cultural heart of the Ashanti Kingdom. Visit the Manhyia Palace Museum and learn about Ashanti royalty, history, and traditions." },
      { day: 8, title: "Ashanti Cultural Craft Experience", description: "Visit Adanwomase for Kente weaving and Ntonso for Adinkra symbol printing. Engage directly with master artisans and learn the meaning behind Ghana's most iconic cultural expressions." },
      { day: 9, title: "Free Day in Kumasi — Relaxation & Optional Activities", description: "Enjoy a relaxed day at leisure. Optional activities include spa treatments, shopping, café visits, or exploring Lake Bosomtwe (optional add-on). This day allows rest and reflection." },
      { day: 10, title: "Assin Manso & Coastal Transfer", description: "Travel through Ghana's forest belt with a stop at Assin Manso Ancestral Slave River Site, a deeply significant ancestral site. Continue to Elmina and check into your beachfront accommodation." },
      { day: 11, title: "Kakum National Park & Elmina Heritage", description: "Visit Kakum National Park for the famous canopy walkway experience. Continue with a visit to Elmina Castle, reflecting on the transatlantic slave trade and ancestral history." },
      { day: 12, title: "Return to Accra & Departure", description: "Travel back to Accra for final shopping, relaxation, or reflection. Later, transfer to Kotoka International Airport for your departure flight." },
    ],
    region: "Multi-Region",
    badge: "Signature",
    difficulty: "Moderate",
    tags: ["heritage", "diaspora", "ancestral", "signature", "ghana", "multi-region", "homecoming"],
  },
  {
    id: "t11",
    title: "Northern Ghana Safari & Cultural Expedition",
    slug: "northern-ghana-safari-cultural-expedition",
    location: "Accra, Ashanti, Northern & Central Regions",
    country: "Ghana",
    category: "Safari",
    price: 4645,
    doublePrice: 3795,
    duration: "10 Days",
    durationDays: 10,
    rating: 5.0,
    reviewCount: 9,
    maxGuests: 12,
    image: "/tourist_site/Mole/mole-national-park-is.jpg",
    gallery: [
      "/tourist_site/Mole/mole-national-park-is.jpg",
      "/tourist_site/Mole/safari-guided-tours-at.jpg",
      "/tourist_site/hero/facade-avant-mosquee.jpg",
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&q=80",
      "/tourist_site/Cape Coast/the-world-famous-cape.jpg",
      "/tourist_site/Cape Coast/visit-the-cape-coast.jpg",
      "/tourist_site/Mole/it-s-interesting-for.jpg",
      "/tourist_site/Mole/caption.jpg",
    ],
    description: "A powerful journey through Ghana's northern savanna landscapes and southern heritage corridor. This experience combines safari adventure, ancient architecture, indigenous culture, and emotional historical reflection across Ghana's most iconic regions — from the wild plains of Mole National Park, through the royal Ashanti Kingdom, to the ancestral slave route along the Central coast.",
    highlights: [
      "Mole National Park safari experience",
      "Wildlife game drives and nature walks",
      "Larabanga Mosque visit",
      "Mystic Stone cultural site",
      "Kumasi Ashanti cultural region",
      "Assin Manso ancestral heritage site",
      "Cape Coast Castle historical tour",
      "Scenic cross-country journey through Ghana",
    ],
    included: [
      "Airport meet and greet",
      "Private transportation throughout",
      "4–5-star accommodation and safari lodge stays",
      "Daily breakfast",
      "Selected meals",
      "Guided tours and entrance fees",
      "Mole National Park safari experience",
      "Bottled water during tours",
    ],
    excluded: [
      "International flights",
      "Visa fees",
      "Travel insurance",
      "Personal expenses",
      "Alcoholic beverages",
      "Optional add-ons",
      "Tips and gratuities",
    ],
    optionalExperiences: [
      "Private safari photography sessions",
      "Cultural storytelling experiences",
      "Guided city tours in Kumasi",
      "Spa and wellness treatments",
      "Night cultural performances",
      "Extended safari upgrades",
    ],
    perfectFor: [
      "Safari and wildlife lovers",
      "Cultural and heritage travelers",
      "Diaspora reconnecting journeys",
      "Photographers and explorers",
      "Adventure seekers",
    ],
    itinerary: [
      { day: 1, title: "Arrival in Accra — Welcome to Ghana", description: "Upon arrival at Kotoka International Airport, you will be welcomed by the Brownline Tours team and transferred to your 4–5-star hotel in Accra. The evening is free for rest and recovery." },
      { day: 2, title: "Accra to Kumasi — Transition to the Ashanti Region", description: "Depart Accra and travel through Ghana's forest belt into Kumasi, the cultural capital of the Ashanti Kingdom. Arrive and check into your hotel for rest." },
      { day: 3, title: "Kumasi to Northern Ghana — Scenic Transfer", description: "Continue the journey north through changing landscapes into Ghana's savanna zone. Arrive in the Tamale/Damongo area and settle into your accommodation in preparation for safari activities." },
      { day: 4, title: "Mole National Park Safari Experience", description: "Experience the iconic Mole National Park, Ghana's largest wildlife reserve. Enjoy guided safari walks and game drives where you may encounter elephants, antelopes, baboons, warthogs, and diverse birdlife in their natural habitat. This is Ghana's premier safari experience." },
      { day: 5, title: "Larabanga Mosque & Mystic Stone Experience", description: "Visit the historic Larabanga Mosque, one of West Africa's oldest Islamic structures known for its unique Sudano-Sahelian architecture. Continue to the mystical Mystic Stone, a culturally significant site surrounded by local legends and spiritual interpretations. Return to your lodge for relaxation." },
      { day: 6, title: "Transfer to Kumasi — Return to Ashanti Region", description: "Depart Northern Ghana and travel south back to Kumasi. Enjoy scenic views as you transition from savanna back into forest landscapes. Arrive and check into your hotel for rest." },
      { day: 7, title: "Free Day in Kumasi — Leisure & Optional Activities", description: "Enjoy a full day at leisure in Kumasi. Optional activities include spa treatments, local market visits, cultural shopping, café experiences, or rest at your hotel." },
      { day: 8, title: "Assin Manso & Cape Coast Castle Experience", description: "Travel from Kumasi toward the Central Region with a meaningful stop at the Assin Manso Ancestral Slave River Site, a powerful ancestral remembrance site. Continue to Cape Coast Castle for a guided historical tour exploring Ghana's role in the transatlantic slave trade and its deep emotional heritage." },
      { day: 9, title: "Return to Accra — Leisure & Reflection", description: "Travel back to Accra for your final full day in Ghana. Enjoy shopping, relaxation, café visits, or optional spa experiences. This day is designed for rest and reflection after the journey." },
      { day: 10, title: "Departure", description: "After breakfast, transfer to Kotoka International Airport for your departure flight, taking home unforgettable memories of Ghana's wildlife, culture, and heritage." },
    ],
    region: "Multi-Region",
    badge: "Signature",
    difficulty: "Moderate",
    tags: ["safari", "wildlife", "heritage", "signature", "northern ghana", "multi-region", "diaspora"],
  },
  {
    id: "t12",
    title: "Ghana Festivals & Cultural Celebration Experience",
    slug: "ghana-festivals-cultural-celebration-experience",
    location: "Accra, Volta, Ashanti & Central Regions",
    country: "Ghana",
    category: "Cultural",
    price: 4500,
    doublePrice: 3650,
    duration: "10 Days",
    durationDays: 10,
    rating: 5.0,
    reviewCount: 7,
    maxGuests: 12,
    image: "/tourist_site/Kwame/kwame-nkrumah-memorial.jpg",
    gallery: [
      "/tourist_site/Kwame/kwame-nkrumah-memorial.jpg",
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&q=80",
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80",
      "/tourist_site/Cape Coast/visit-the-cape-coast.jpg",
      "/tourist_site/Kakum/caption (1).jpg",
      "/tourist_site/Cape Coast/the-world-famous-cape.jpg",
      "/tourist_site/Kwame/dr-kwame-nkrumah-s-mausoleum.jpg",
      "/tourist_site/Kakum/caption (2).jpg",
    ],
    description: "Ghana at its most alive, colorful and powerful — an immersive cultural journey built around Ghana's vibrant festival calendar, traditional celebrations, music, dance, food, and royal ceremonies. Designed for diaspora travelers and international visitors who want to experience Ghana beyond sightseeing, through real community celebrations, living traditions, and unforgettable cultural energy.",
    highlights: [
      "Accra city cultural tour",
      "Artisan workshops (kente, bead, batik)",
      "Ghana festival participation (seasonal)",
      "Volta River cruise in Akosombo",
      "Ashanti Kingdom cultural experience",
      "Akwasidae / royal cultural ceremonies (seasonal)",
      "Assin Manso heritage site visit",
      "Kakum National Park canopy walk",
      "Elmina beachfront relaxation",
      "Farewell cultural dinner",
    ],
    included: [
      "Airport meet and greet",
      "Private transportation throughout",
      "4–5-star accommodation",
      "Daily breakfast",
      "Selected meals",
      "Guided tours and entrance fees",
      "Volta River cruise",
      "Bottled water during tours",
    ],
    excluded: [
      "International flights",
      "Visa fees",
      "Travel insurance",
      "Personal expenses",
      "Alcoholic beverages",
      "Optional VIP event tickets",
      "Tips and gratuities",
    ],
    optionalExperiences: [
      "VIP festival access upgrades",
      "Private cultural guides",
      "Photography and videography packages",
      "Beach bonfire events",
      "Spa and wellness treatments",
      "Nightlife and concert experiences",
    ],
    perfectFor: [
      "Festival lovers",
      "African diaspora travelers",
      "Cultural explorers",
      "Content creators",
      "Groups and friends",
      "Solo travelers",
    ],
    itinerary: [
      { day: 1, title: "Arrival in Accra — VIP Welcome", description: "Upon arrival at Kotoka International Airport, you will be warmly welcomed by the Brownline Tours team and transferred to your carefully selected 4–5-star hotel. After check-in, enjoy a relaxed evening or an optional rooftop welcome experience depending on arrival time." },
      { day: 2, title: "Accra City & Cultural Introduction", description: "Explore Accra's key landmarks including Kwame Nkrumah Memorial Park, Jamestown, Independence Square, and the Arts Centre for National Culture. This day introduces you to Ghana's history, independence journey, and creative culture." },
      { day: 3, title: "Traditional Arts & Creative Ghana", description: "Visit artisan communities and experience Ghana's creative traditions including kente weaving demonstrations, batik making, bead crafting, and local art workshops. Evening free for relaxation or nightlife experience in Accra." },
      { day: 4, title: "Festival Experience — Local Celebration Day", description: "Depending on travel dates, participate in one of Ghana's vibrant cultural festivals or events such as street carnivals, Homowo celebrations, Akwasidae ceremonies, or live cultural performances in selected communities. Enjoy drumming, dancing, storytelling, and traditional royal displays where available." },
      { day: 5, title: "Akosombo & Volta River Experience", description: "Travel to Akosombo with scenic stops along the way. Enjoy a relaxing Volta River boat cruise surrounded by hills and islands. Overnight stay in a serene lakeside environment." },
      { day: 6, title: "Ashanti Culture & Royal Experience (Kumasi)", description: "Travel to Kumasi, the cultural capital of the Ashanti Kingdom. Visit the Manhyia Palace Museum and, where available, witness Akwasidae celebrations or royal cultural activities. Experience deep Ashanti traditions, history, and hospitality before settling into your hotel." },
      { day: 7, title: "Assin Manso & Coastal Transfer", description: "Travel through Ghana's forest belt with a stop at Assin Manso Ancestral Slave River Site, a deeply meaningful heritage site. Continue to Elmina and check into your beachfront accommodation for a relaxed evening by the Atlantic Ocean." },
      { day: 8, title: "Kakum National Park & Beach Experience", description: "Visit Kakum National Park for the famous canopy walkway experience above the rainforest. Later, relax at the beach in Elmina with optional cultural entertainment or bonfire experience." },
      { day: 9, title: "Return to Accra & Farewell Celebration", description: "Travel back to Accra. Enjoy free time for shopping, leisure, or spa experiences. In the evening, gather for a farewell cultural dinner with music, storytelling, and celebration of your journey through Ghana." },
      { day: 10, title: "Departure", description: "After breakfast, transfer to Kotoka International Airport for your departure flight, taking home unforgettable memories of Ghana's festivals, culture, history, and hospitality." },
    ],
    region: "Multi-Region",
    badge: "Signature",
    difficulty: "Moderate",
    tags: ["festival", "cultural", "heritage", "signature", "ghana", "multi-region", "diaspora"],
  },
  {
    id: "t13",
    title: "Detty December Ghana Experience",
    slug: "detty-december-ghana-experience",
    location: "Accra, Volta & Central Regions",
    country: "Ghana",
    category: "Cultural",
    price: 5145,
    doublePrice: 4295,
    duration: "10 Days",
    durationDays: 10,
    rating: 5.0,
    reviewCount: 5,
    maxGuests: 12,
    image: "/tourist_site/Kwame/kwame-nkrumah-memorial.jpg",
    gallery: [
      "/tourist_site/Kwame/kwame-nkrumah-memorial.jpg",
      "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=800&q=80",
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80",
      "/tourist_site/Cape Coast/the-world-famous-cape.jpg",
      "/tourist_site/Kakum/caption (1).jpg",
      "/tourist_site/Cape Coast/visit-the-cape-coast.jpg",
      "/tourist_site/Busua/busua-beach.jpg",
      "/tourist_site/Kwame/dr-kwame-nkrumah-s-mausoleum.jpg",
    ],
    description: "Experience Ghana at its most electric time of the year. Detty December is not just a holiday — it is a global cultural movement that brings together the African diaspora, creatives, professionals, and travelers from around the world for unforgettable celebrations, beach festivals, music, luxury experiences, and heritage discovery. This curated Brownline Tours experience blends VIP-style leisure, cultural immersion, and Ghana's legendary December nightlife into one seamless journey — where heritage meets luxury, music, beach, and celebration.",
    highlights: [
      "VIP airport arrival experience",
      "Rooftop welcome night in Accra",
      "Labadi Beach lifestyle experience",
      "Premium beach club access",
      "Akosombo Volta River sunset cruise",
      "Shai Hills scenic stop",
      "Elmina beachfront luxury stay",
      "Kakum National Park canopy walk",
      "Cape Coast / Elmina Castle experience",
      "Beach bonfire night",
      "AfroFuture / December festival access (seasonal)",
      "Accra nightlife & lounge experience",
      "Optional yacht parties & private experiences",
    ],
    included: [
      "Airport pickup and drop-off",
      "4–5-star hotel accommodation",
      "Daily breakfast",
      "Selected lunches and dinners",
      "Private air-conditioned transport",
      "Professional tour guide services",
      "Entrance fees to listed attractions",
      "Volta River cruise",
      "Bottled water during tours",
    ],
    excluded: [
      "International flights",
      "Visa fees",
      "Travel insurance",
      "Personal expenses",
      "Alcoholic beverages",
      "Optional VIP events and upgrades",
      "Tips and gratuities",
    ],
    optionalExperiences: [
      "Yacht party experience",
      "Private photographer throughout trip",
      "Helicopter scenic flights",
      "Luxury spa & wellness treatments",
      "VIP concert & AfroFuture tickets",
      "Private beach dinners",
      "Personal concierge services",
    ],
    perfectFor: [
      "African diaspora travelers",
      "Groups of friends",
      "Young professionals",
      "Festival lovers",
      "Couples",
      "Content creators",
      "Luxury adventure seekers",
    ],
    itinerary: [
      { day: 1, title: "Arrival in Accra — VIP Welcome", description: "Arrive at Kotoka International Airport where you are met by the Brownline Tours team for VIP-style pickup and transfer to your carefully selected 4–5-star hotel. After check-in and relaxation, the evening begins with a stylish welcome cocktail gathering at a rooftop lounge overlooking Accra." },
      { day: 2, title: "Accra City & Sunset Beach Vibes", description: "Explore the highlights of Accra including Kwame Nkrumah Memorial Park, Independence Square, and Jamestown's creative streets. In the afternoon, unwind at Labadi Beach with music, food, and ocean views before enjoying dinner at one of Accra's top dining spots." },
      { day: 3, title: "Beach Club & Nightlife Experience", description: "Spend the day at a premium beach club enjoying music, relaxation, optional jet skiing, or ATV experiences along the coast. As night falls, experience Accra's nightlife with curated entry to top lounges, rooftop bars, or live Afrobeats events." },
      { day: 4, title: "Akosombo Sunset Escape", description: "Travel to Akosombo for a scenic Volta River experience. Stop at Shai Hills en route before enjoying a luxury sunset boat cruise on the river. Return to your hotel for a relaxed evening surrounded by nature and calm." },
      { day: 5, title: "Christmas / Coastal Experience in Elmina", description: "Journey to Ghana's historic coast and check into a beachfront resort in Elmina. Enjoy a relaxed afternoon by the ocean followed by a special beachside dinner featuring fresh seafood and live cultural ambiance." },
      { day: 6, title: "Heritage & Beach Bonfire Night", description: "Visit Kakum National Park for the iconic canopy walkway before continuing to Cape Coast Castle or Elmina Castle for a powerful historical experience. End the day with a beach bonfire night, music, storytelling, and relaxation by the Atlantic Ocean." },
      { day: 7, title: "Return to Accra & Spa Relaxation", description: "Travel back to Accra and enjoy a slow-paced day of recovery and leisure. Optional spa treatments, café hopping, and light shopping are available. In the evening, enjoy a relaxed lounge experience in the city." },
      { day: 8, title: "Festival / Afrobeats Experience Day", description: "Immerse yourself in Ghana's biggest December events including AfroFuture (subject to schedule), beach festivals, concerts, street carnivals, or curated private events. VIP upgrade options available for premium access." },
      { day: 9, title: "Luxury Leisure & Farewell Gala", description: "Spend your final full day in Ghana at your own pace. Optional yacht cruise, professional photoshoot, shopping, or relaxation at your hotel. In the evening, enjoy a farewell gala dinner celebrating your Detty December journey." },
      { day: 10, title: "Departure", description: "After breakfast, transfer to Kotoka International Airport for your departure flight, taking home unforgettable memories of Ghana's culture, energy, music, and hospitality." },
    ],
    region: "Multi-Region",
    badge: "Signature",
    difficulty: "Moderate",
    tags: ["december", "detty december", "festival", "luxury", "beach", "nightlife", "signature", "diaspora", "multi-region"],
  },
  {
    id: "t14",
    title: "Ghana Luxury Escape",
    slug: "ghana-luxury-escape",
    location: "Accra, Volta, Ashanti & Central Regions",
    country: "Ghana",
    category: "Cultural",
    price: 4700,
    doublePrice: 3850,
    duration: "10 Days",
    durationDays: 10,
    rating: 5.0,
    reviewCount: 4,
    maxGuests: 10,
    image: "/tourist_site/Kwame/kwame-nkrumah-memorial.jpg",
    gallery: [
      "/tourist_site/Kwame/kwame-nkrumah-memorial.jpg",
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80",
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&q=80",
      "/tourist_site/Cape Coast/the-world-famous-cape.jpg",
      "/tourist_site/Cape Coast/visit-the-cape-coast.jpg",
      "/tourist_site/Kakum/caption (1).jpg",
      "/tourist_site/Kwame/dr-kwame-nkrumah-s-mausoleum.jpg",
      "/tourist_site/Kakum/caption (2).jpg",
    ],
    description: "Discover Ghana through a carefully curated luxury journey designed for comfort, privacy, and meaningful cultural immersion. This 10-day experience blends heritage, nature, relaxation, and coastal luxury with carefully selected 4–5-star accommodation and seamless private transportation throughout — where heritage, nature, and coastal beauty meet world-class hospitality.",
    highlights: [
      "Luxury 4–5-star accommodation throughout",
      "Private airport transfers and transportation",
      "Accra city and heritage tour",
      "Shai Hills nature experience",
      "Volta River private sunset cruise",
      "Manhyia Palace Museum guided visit",
      "Kente weaving cultural experience",
      "Adinkra craft workshop",
      "Assin Manso heritage site visit",
      "Cape Coast Castle guided tour",
      "Elmina beachfront luxury stay",
      "Kakum National Park canopy walkway",
      "Leisure and wellness days in Kumasi and Accra",
    ],
    included: [
      "Airport meet and greet",
      "Private airport transfers",
      "Luxury 4–5-star accommodation",
      "Daily breakfast",
      "Selected meals",
      "Private guided tours",
      "Entrance fees to all listed attractions",
      "Volta River cruise",
      "Bottled water during tours",
    ],
    excluded: [
      "International flights",
      "Visa fees",
      "Travel insurance",
      "Personal expenses",
      "Alcoholic beverages",
      "Optional premium experiences",
      "Tips and gratuities",
    ],
    optionalExperiences: [
      "Private chef dining experiences",
      "Luxury spa and wellness treatments",
      "Helicopter scenic tours",
      "Yacht or private boat experiences",
      "Personal photographer and content creation package",
      "VIP cultural or nightlife experiences in Accra",
    ],
    perfectFor: [
      "Luxury travelers",
      "Couples and honeymooners",
      "Diaspora visitors seeking comfort and heritage",
      "Executives and professionals",
      "Small private groups",
    ],
    itinerary: [
      { day: 1, title: "Arrival in Accra — Luxury Welcome", description: "Upon arrival at Kotoka International Airport, you will be warmly received by the Brownline Tours team and transferred in a private vehicle to your luxury 4–5-star hotel in Accra. After check-in, the rest of the day is at leisure to rest and recover from your international flight." },
      { day: 2, title: "Accra Heritage & City Experience", description: "Explore Accra's cultural and historical highlights including Kwame Nkrumah Memorial Park, Independence Square, Jamestown, and the Arts Centre for National Culture. Enjoy curated cultural interactions, local art browsing, and optional fine dining in the evening." },
      { day: 3, title: "Shai Hills & Volta River Sunset Cruise", description: "Travel through scenic landscapes to Shai Hills Resource Reserve for a guided nature experience. Continue to Akosombo for a private sunset cruise on the Volta River, offering one of Ghana's most peaceful and scenic luxury experiences. Return to your accommodation for a relaxed evening." },
      { day: 4, title: "Journey to Kumasi — Ashanti Royal City", description: "Travel in comfort to Kumasi, the cultural capital of the Ashanti Kingdom. Upon arrival, enjoy a guided visit to the Manhyia Palace Museum to learn about Ashanti royalty, traditions, and history. Check into your luxury hotel and enjoy a quiet evening." },
      { day: 5, title: "Ashanti Cultural Experience", description: "Experience the rich craftsmanship of the Ashanti Region with visits to Adanwomase Kente Weaving Village and Ntonso Adinkra Craft Village. Engage in private demonstrations and cultural storytelling sessions with master artisans." },
      { day: 6, title: "Kumasi Leisure & Wellness Day", description: "Enjoy a full day at leisure designed for relaxation and comfort. Guests may choose to enjoy spa treatments, poolside relaxation, café visits, or optional light cultural exploration at their own pace." },
      { day: 7, title: "Cape Coast & Elmina Beachfront Experience", description: "Depart Kumasi for Ghana's historic coastline with a meaningful stop at Assin Manso Ancestral Slave River Park. Continue to Cape Coast Castle for a guided historical tour before checking into a luxury beachfront resort in Elmina. Enjoy a peaceful evening by the ocean." },
      { day: 8, title: "Kakum National Park & Return to Accra", description: "Begin the day with a visit to Kakum National Park for the famous canopy walkway experience. After the tour, travel back to Accra. The evening is free for relaxation at your hotel or optional fine dining in the city." },
      { day: 9, title: "Accra Leisure & Relaxation Day", description: "Enjoy a full day at leisure in Accra. This is your time to unwind, shop for souvenirs, visit cafés, enjoy spa treatments, or simply relax at your luxury hotel as your journey comes to a peaceful close." },
      { day: 10, title: "Departure", description: "After breakfast, you will be transferred to Kotoka International Airport for your departure flight, taking home unforgettable memories of Ghana's culture, heritage, and luxury hospitality." },
    ],
    region: "Multi-Region",
    badge: "Signature",
    difficulty: "Moderate",
    tags: ["luxury", "heritage", "wellness", "signature", "ghana", "multi-region", "diaspora"],
  },
  {
    id: "t15",
    title: "Nature, Adventure & Wellness Ghana",
    slug: "nature-adventure-wellness-ghana",
    location: "Accra, Volta, Ashanti & Central Regions",
    country: "Ghana",
    category: "Nature",
    price: 4345,
    doublePrice: 3495,
    duration: "10 Days",
    durationDays: 10,
    rating: 5.0,
    reviewCount: 6,
    maxGuests: 12,
    image: "/tourist_site/Kwame/kwame-nkrumah-memorial.jpg",
    gallery: [
      "/tourist_site/Kwame/kwame-nkrumah-memorial.jpg",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
      "https://images.unsplash.com/photo-1504829857797-ddff29c27927?w=800&q=80",
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80",
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&q=80",
      "/tourist_site/Cape Coast/the-world-famous-cape.jpg",
      "/tourist_site/Kakum/caption (1).jpg",
      "/tourist_site/Kakum/caption (2).jpg",
    ],
    description: "A carefully curated journey through Ghana's most breathtaking natural and cultural landscapes. This itinerary blends waterfalls, mountains, forests, rivers, wildlife, heritage, and coastal relaxation into one seamless wellness experience — designed for balance, discovery, and connection.",
    highlights: [
      "Accra city and coastal experience",
      "Shai Hills wildlife and hiking",
      "Wli Waterfalls (Upper & Lower Falls)",
      "Lake Volta boat cruise in Akosombo",
      "Ashanti cultural heritage in Kumasi",
      "Assin Manso ancestral heritage site",
      "Kakum National Park canopy walkway",
      "Elmina beachfront relaxation",
    ],
    included: [
      "Airport meet and greet",
      "Private transportation throughout",
      "4–5-star hotel and eco-lodge accommodation",
      "Daily breakfast",
      "Selected meals",
      "Guided tours and entrance fees",
      "Lake Volta boat cruise",
      "Bottled water during excursions",
    ],
    excluded: [
      "International flights",
      "Visa fees",
      "Travel insurance",
      "Personal expenses",
      "Alcoholic beverages",
      "Optional add-ons",
      "Tips and gratuities",
    ],
    optionalExperiences: [
      "Spa and massage treatments",
      "Yoga and meditation sessions",
      "Private nature hikes",
      "Beachfront dining experiences",
      "Photography tours",
    ],
    perfectFor: [
      "Nature lovers",
      "Wellness travelers",
      "Couples and solo travelers",
      "Diaspora reconnecting with Ghana",
      "Adventure seekers seeking soft travel experiences",
    ],
    itinerary: [
      { day: 1, title: "Arrival in Accra — Welcome & Relaxation", description: "Upon arrival at Kotoka International Airport, you will be warmly welcomed by the Brownline Tours team and transferred to your 4–5-star hotel in Accra. The rest of the day is free to relax and recover from your journey." },
      { day: 2, title: "Accra Heritage & Coastal Experience", description: "Explore Accra with visits to Kwame Nkrumah Memorial Park, Jamestown fishing community, and the Arts Centre for National Culture. Enjoy a relaxed coastal walk along the Atlantic shoreline before returning to your hotel for rest." },
      { day: 3, title: "Shai Hills Nature Reserve & Transfer to Volta Region", description: "Travel through scenic landscapes to Shai Hills Resource Reserve for a guided wildlife and light hiking experience. Continue into the Volta Region and check into your eco-lodge surrounded by nature." },
      { day: 4, title: "Wli Waterfalls Experience (Upper & Lower Falls)", description: "Visit the spectacular Wli Waterfalls, the tallest waterfall in West Africa. Enjoy a guided forest hike through lush vegetation filled with birds and butterflies. Depending on preference and energy level, explore either the Lower Falls for a relaxed swim and leisure experience or the Upper Falls for a more adventurous hike. Return to your lodge for a peaceful evening in nature." },
      { day: 5, title: "Akosombo Lake Volta Experience & Boat Cruise", description: "Depart the Volta Region and travel to Akosombo. Upon arrival, check into your lakeside accommodation and enjoy a relaxed afternoon. Later, experience a scenic boat cruise on Lake Volta, surrounded by calm waters and beautiful island views. Overnight in Akosombo." },
      { day: 6, title: "Journey to Kumasi — Ashanti Kingdom Experience", description: "Travel to Kumasi, the cultural capital of the Ashanti Kingdom. Visit the Manhyia Palace Museum for a guided introduction to Ashanti history, royalty, and traditions. Check into your hotel and enjoy a relaxed evening." },
      { day: 7, title: "Assin Manso & Coastal Arrival in Elmina", description: "Travel through Ghana's forest belt toward the Central Region with a meaningful stop at Assin Manso Ancestral Slave River Site, where enslaved Africans took their final bath before being taken to the coast. Continue to Elmina and check into your beachfront accommodation. Spend the evening relaxing by the Atlantic Ocean." },
      { day: 8, title: "Kakum National Park & Canopy Walk Experience", description: "Begin the day with a visit to Kakum National Park for the famous canopy walkway experience above the rainforest. Return to Elmina for a relaxed afternoon with optional wellness activities, spa treatments, or beach relaxation." },
      { day: 9, title: "Return to Accra & Leisure Day", description: "Travel back to Accra for your final full day in Ghana. Enjoy leisure time for shopping, café visits, spa experiences, or relaxation at your hotel depending on your schedule. This day is designed for rest and reflection before departure." },
      { day: 10, title: "Departure", description: "After breakfast, you will be transferred to Kotoka International Airport for your departure flight. Take home unforgettable memories of Ghana's nature, culture, heritage, and warm hospitality." },
    ],
    region: "Multi-Region",
    badge: "Signature",
    difficulty: "Moderate",
    tags: ["nature", "wellness", "adventure", "heritage", "signature", "ghana", "multi-region", "diaspora"],
  },
];

// ─── TESTIMONIALS ──────────────────────────────────────────────

export const testimonials: Testimonial[] = [
  {
    id: "r1",
    name: "Sophie Hartmann",
    location: "Berlin, Germany",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&q=80",
    rating: 5,
    comment: "The Mole National Park safari exceeded every expectation. Walking within metres of wild elephants — only your ranger between you and them — is something I will never forget. Our guide Kofi knew the park intimately. Brownline Tours made everything seamless, from Accra to the bush and back.",
    tourName: "Mole National Park Safari",
    date: "March 2025",
  },
  {
    id: "r2",
    name: "Marcus Johnson",
    location: "Atlanta, USA",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
    rating: 5,
    comment: "As a descendant of enslaved Africans, visiting Cape Coast Castle was the most powerful experience of my life. The historian guide gave us space to feel, to grieve, and to understand. Brownline Tours treated this tour with the reverence and depth it deserves. Ghana welcomed me home.",
    tourName: "Cape Coast & Elmina Heritage Journey",
    date: "February 2025",
  },
  {
    id: "r3",
    name: "Chiara Russo",
    location: "Milan, Italy",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80",
    rating: 5,
    comment: "Standing on the canopy walkway in Kakum, 40 metres above the ancient rainforest, was absolutely breathtaking. The next day at Cape Coast Castle was deeply moving. Ghana is extraordinary — so full of life, history, and warmth. Brownline Tours's small group made everything feel personal.",
    tourName: "Kakum Canopy Walk & Cape Coast Heritage",
    date: "January 2025",
  },
  {
    id: "r4",
    name: "David Osei-Bonsu",
    location: "London, UK",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80",
    rating: 5,
    comment: "I booked the Kumasi cultural tour to reconnect with my Ashanti roots. Watching kente being woven in Bonwire — the same village my grandfather learned the craft — brought tears to my eyes. Brownline Tours's cultural guide was encyclopaedic in knowledge and deeply respectful.",
    tourName: "Kumasi & Ashanti Kingdom Cultural Tour",
    date: "December 2024",
  },
  {
    id: "r5",
    name: "Amara Diallo",
    location: "Paris, France",
    avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&q=80",
    rating: 5,
    comment: "The Volta Region completely surprised me — I did not expect Ghana to be so green and dramatic. The Wli Falls hike through the forest was magical and the summit of Afadjato at sunrise was simply stunning. Brownline Tours's guide was incredible — patient, knowledgeable, and great fun.",
    tourName: "Volta Region Waterfalls & Afadjato Trek",
    date: "November 2024",
  },
  {
    id: "r6",
    name: "James Whitfield",
    location: "Sydney, Australia",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80",
    rating: 5,
    comment: "Ada Foah was pure paradise — we had an entire sandbar to ourselves for a full afternoon. The canoe ride through the estuary at sunrise, hippos calling in the distance, was pure Africa. And the grilled tilapia that evening was the best fish I have ever eaten. Ghana, I'll be back.",
    tourName: "Ada Foah Beach & Volta Estuary Retreat",
    date: "September 2024",
  },
];

// ─── TEAM ──────────────────────────────────────────────────────

// ─── BLOG POSTS ────────────────────────────────────────────────

export const blogPosts: BlogPost[] = [
  {
    id: "b1",
    slug: "complete-guide-to-ghana",
    title: "The Complete First-Timer's Guide to Visiting Ghana",
    excerpt: "From visa requirements to currency, safety, local customs, and must-know phrases in Twi — everything you need to know before your first trip to the 'Gateway to Africa'.",
    content: `Ghana is one of the most welcoming and accessible countries in West Africa for first-time visitors...`,
    image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800&q=80",
    category: "Guides",
    author: "Kwame Asante",
    authorAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
    date: "April 5, 2025",
    readTime: "10 min read",
    tags: ["ghana", "travel guide", "first time", "tips"],
  },
  {
    id: "b2",
    slug: "cape-coast-elmina-guide",
    title: "Visiting Cape Coast & Elmina Castles: What to Know and How to Prepare",
    excerpt: "The slave castles of Ghana's Central Region are among the world's most important historical sites. Here's how to experience them with the depth and understanding they deserve.",
    content: `Cape Coast Castle and Elmina Castle are UNESCO World Heritage Sites that represent one of history's most important and painful chapters...`,
    image: "https://images.unsplash.com/photo-1574234225714-9e1a79cc2d0b?w=800&q=80",
    category: "Heritage",
    author: "Abena Owusu",
    authorAvatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&q=80",
    date: "March 20, 2025",
    readTime: "12 min read",
    tags: ["cape coast", "elmina", "history", "heritage"],
  },
  {
    id: "b3",
    slug: "ghana-food-guide",
    title: "Ghana Food Guide: 12 Dishes You Absolutely Must Try",
    excerpt: "From jollof rice to waakye, banku to kelewele — Ghanaian cuisine is one of West Africa's richest. Our local food guide will make sure you eat like a local from day one.",
    content: `Ghanaian food is bold, nourishing, and deeply tied to community and celebration...`,
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80",
    category: "Food & Culture",
    author: "Akosua Mensah",
    authorAvatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&q=80",
    date: "March 8, 2025",
    readTime: "8 min read",
    tags: ["food", "ghana cuisine", "jollof", "culture"],
  },
  {
    id: "b4",
    slug: "best-beaches-ghana",
    title: "The Best Beaches in Ghana: A Region-by-Region Breakdown",
    excerpt: "Ghana has over 550km of Atlantic coastline with beaches ranging from wild surf breaks to serene river estuaries. Here's how to find the one that's perfect for you.",
    content: `Ghana's coastline is vastly underrated. While most travellers head straight for the castles, the beaches are spectacular...`,
    image: "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=800&q=80",
    category: "Beaches",
    author: "Yaw Boateng",
    authorAvatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&q=80",
    date: "February 25, 2025",
    readTime: "7 min read",
    tags: ["beach", "busua", "ada foah", "ghana coast"],
  },
  {
    id: "b5",
    slug: "mole-national-park-guide",
    title: "Mole National Park: Everything You Need to Know Before You Go",
    excerpt: "Mole is West Africa's best wildlife experience — but getting there, timing it right, and choosing the right activities takes planning. Our expert guide covers it all.",
    content: `Mole National Park is Ghana's largest protected area and the crown jewel of West African wildlife tourism...`,
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&q=80",
    category: "Wildlife",
    author: "Akosua Mensah",
    authorAvatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&q=80",
    date: "February 10, 2025",
    readTime: "9 min read",
    tags: ["mole", "wildlife", "safari", "northern ghana"],
  },
  {
    id: "b6",
    slug: "kente-weaving-bonwire",
    title: "The Story of Kente: Ghana's Royal Cloth and Where to See It Made",
    excerpt: "Kente is one of the world's most recognisable textiles — but most people know almost nothing of its origin, meanings, and the master weavers who keep the tradition alive in Bonwire.",
    content: `Every strip of kente cloth tells a story. The colours, the patterns, the names — all carry specific meaning in Ashanti culture...`,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    category: "Culture",
    author: "Abena Owusu",
    authorAvatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&q=80",
    date: "January 28, 2025",
    readTime: "6 min read",
    tags: ["kente", "culture", "ashanti", "weaving", "kumasi"],
  },
];

// ─── BOOKINGS (Sample / Mock) ─────────────────────────────────

export const sampleBookings: Booking[] = [
  {
    id: "BK-001",
    tourId: "t1",
    tourTitle: "Mole National Park Safari",
    tourImage: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=400&q=80",
    name: "Sophie Hartmann",
    email: "sophie@example.com",
    phone: "+49 30 1234 5678",
    adults: 2,
    children: 0,
    date: "2025-06-15",
    totalPrice: 1598,
    status: "Confirmed",
    createdAt: "2025-03-10",
  },
  {
    id: "BK-002",
    tourId: "t5",
    tourTitle: "Kumasi & Ashanti Kingdom Cultural Tour",
    tourImage: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&q=80",
    name: "Marcus Johnson",
    email: "marcus@example.com",
    phone: "+1 404 555 0192",
    adults: 2,
    children: 1,
    date: "2025-07-20",
    totalPrice: 1327,
    status: "Confirmed",
    createdAt: "2025-02-28",
  },
  {
    id: "BK-003",
    tourId: "t3",
    tourTitle: "Volta Region Waterfalls & Afadjato Trek",
    tourImage: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=80",
    name: "Chiara Russo",
    email: "chiara@example.com",
    phone: "+39 02 1234 5678",
    adults: 1,
    children: 0,
    date: "2025-09-01",
    totalPrice: 649,
    status: "Pending",
    createdAt: "2025-04-01",
  },
];

// ─── GLOBAL FOOD ADD-ONS ──────────────────────────────────────

export const globalFoodAddOns: FoodAddOn[] = [
  {
    id: "fa1",
    name: "Ghanaian Cooking Masterclass",
    description: "Learn to cook 3 classic Ghanaian dishes (jollof rice, groundnut soup, kelewele) with a local chef. Includes market visit, hands-on cooking, and sit-down meal.",
    price: 65,
    perPerson: true,
    icon: "🍳",
  },
  {
    id: "fa2",
    name: "Beachside Seafood Dinner",
    description: "Exclusive grilled seafood dinner on the beach — fresh tilapia, prawns, and lobster with Ghanaian sides, served at sunset over the Atlantic.",
    price: 55,
    perPerson: true,
    icon: "🦞",
  },
  {
    id: "fa3",
    name: "Accra Street Food Walking Tour",
    description: "2-hour guided street food walk with a local foodie. Taste waakye, kelewele, bofrot, and freshly pressed sugarcane juice at spots only locals know.",
    price: 35,
    perPerson: true,
    icon: "🌮",
  },
  {
    id: "fa4",
    name: "Local Market & Farm Visit",
    description: "Morning visit to a working cocoa or cassava farm. Meet the farmers, taste fresh produce, and take home a Ghanaian recipe card.",
    price: 30,
    perPerson: true,
    icon: "🥬",
  },
  {
    id: "fa5",
    name: "Palm Wine & Pito Tasting",
    description: "Guided tasting of traditional Ghanaian fermented beverages — sweet palm wine from the coast and millet-based pito from the north, with local snacks.",
    price: 25,
    perPerson: true,
    icon: "🍺",
  },
  {
    id: "fa6",
    name: "Chop House Lunch Upgrade",
    description: "Elevate your midday meal to a sit-down lunch at a hand-picked traditional chop house — full banku, fufu, or rice dish with protein and fresh pepper sauce.",
    price: 20,
    perPerson: true,
    icon: "🍽️",
  },
  {
    id: "fa7",
    name: "Farewell Jollof & Highlife Dinner",
    description: "A celebratory farewell dinner at a top Accra restaurant with live highlife music, a full Ghanaian feast, and drinks.",
    price: 75,
    perPerson: true,
    icon: "🎊",
  },
  {
    id: "fa8",
    name: "Cocoa Farm & Chocolate Tasting",
    description: "Visit a working cocoa farm in the Eastern or Western Region. Learn how Ghana's famous cocoa is grown, fermented, and dried. Taste fresh cacao and artisan Ghanaian chocolate.",
    price: 40,
    perPerson: true,
    icon: "🍫",
  },
];

// ─── RESTAURANT RECOMMENDATIONS BY DESTINATION ────────────────

export const restaurantsByDestination: Record<string, Restaurant[]> = {
  "Northern Region": [
    { name: "Mole Motel Restaurant", cuisine: "Ghanaian / Continental", priceRange: "$$", specialty: "Locally sourced bush meat and groundnut soup overlooking the wildlife waterhole", address: "Mole National Park", mustTry: "Groundnut soup with fufu — best enjoyed watching elephants at the waterhole" },
    { name: "Buipewura's Guesthouse Chop Bar", cuisine: "Northern Ghanaian", priceRange: "$", specialty: "TZ (tuo zaafi) with green leafy soup — the staple of northern Ghana", address: "Damongo town centre", mustTry: "TZ with freshly pounded dawadawa soup and dried fish" },
  ],
  "Central Region": [
    { name: "Baobab House", cuisine: "Ghanaian Coastal", priceRange: "$$", specialty: "Freshly caught Atlantic seafood grilled over charcoal with Ghanaian pepper sauce", address: "Victoria Road, Cape Coast", mustTry: "Grilled barracuda with banku and shito (black pepper sauce)" },
    { name: "Elmina Harbour Fish Stalls", cuisine: "Street Seafood", priceRange: "$", specialty: "Smoked and grilled fish straight from the morning catch at Elmina's legendary harbour", address: "Elmina fishing harbour", mustTry: "Fresh grilled red snapper with kenkey and pepper — eaten by the water" },
    { name: "Hans Cottage Botel", cuisine: "Ghanaian / International", priceRange: "$$", specialty: "Dining over a crocodile pond — Ghanaian delicacies with an unforgettable setting", address: "Pedu, Cape Coast", mustTry: "Kontomire stew with boiled yam, while local crocodiles bask below" },
  ],
  "Volta Region": [
    { name: "Chances Restaurant, Ho", cuisine: "Ghanaian / Continental", priceRange: "$$", specialty: "Volta River tilapia and regional Ewe cuisine in a garden setting", address: "Ho town, Volta Region", mustTry: "Akple with fetri detsi (okra stew) — the staple Ewe dish of the Volta Region" },
    { name: "Taste Lodge, Hohoe", cuisine: "Local Ghanaian", priceRange: "$", specialty: "Home-cooked Ghanaian meals, fresh palm wine served straight from the tree", address: "Hohoe, Volta Region", mustTry: "Yam ampesi with garden egg stew and freshly pressed palm wine" },
  ],
  "Greater Accra": [
    { name: "Buka Restaurant", cuisine: "West African", priceRange: "$$", specialty: "Authentic Nigerian-Ghanaian crossover cuisine in a vibrant open-air setting", address: "South Legon, Accra", mustTry: "Ofe akwu (palm nut soup) with pounded yam — West Africa in a bowl" },
    { name: "Oseikrom", cuisine: "Ghanaian Fine Dining", priceRange: "$$$", specialty: "Elevated Ghanaian classics — the best fufu and light soup in Accra", address: "Airport Residential, Accra", mustTry: "Light soup with fresh tilapia and pounded fufu — elevated to fine dining standard" },
    { name: "Jamestown Café", cuisine: "Ghanaian Modern", priceRange: "$$", specialty: "Modern Accra cuisine in the heart of historic Jamestown", address: "Ussher Town, Accra", mustTry: "Waakye platter — rice and beans with everything, the full Accra street food experience" },
  ],
  "Ashanti Region": [
    { name: "Nkrumah Roof Top, Kumasi", cuisine: "Ghanaian / International", priceRange: "$$", specialty: "Panoramic Kumasi city views with the best fufu in the Ashanti Region", address: "Adum, Kumasi", mustTry: "Fufu with palmnut soup and fresh tilapia — the Ashanti gold standard" },
    { name: "Vic Baboo's Café", cuisine: "Continental / Ghanaian", priceRange: "$$", specialty: "Beloved Kumasi institution open since 1964 — sandwiches, pies, and Ghanaian staples", address: "Prempeh II Street, Kumasi", mustTry: "Their legendary meat pie with fresh orange juice — a Kumasi morning institution" },
  ],
  "Western Region": [
    { name: "Busua Beach Bar & Restaurant", cuisine: "Coastal Ghanaian", priceRange: "$$", specialty: "Freshly grilled whole fish and lobster, feet in the sand on Busua Beach", address: "Busua Beach, Western Region", mustTry: "Whole grilled lobster with chips and garlic butter — best eaten at sunset" },
    { name: "African Rainbow", cuisine: "Ghanaian / International", priceRange: "$$", specialty: "Beachside dining with fresh catch of the day and classic Ghanaian dishes", address: "Busua", mustTry: "Fried plantain and fresh pepper sauce with crispy barracuda" },
  ],
};

export const allTours: Tour[] = [...tours];

// ─── DIETARY PREFERENCES ─────────────────────────────────────

export const dietaryOptions = [
  { id: "vegetarian",      label: "Vegetarian",        icon: "🥗" },
  { id: "vegan",           label: "Vegan",              icon: "🌱" },
  { id: "gluten-free",     label: "Gluten-Free",        icon: "🌾" },
  { id: "halal",           label: "Halal",              icon: "☪️" },
  { id: "kosher",          label: "Kosher",             icon: "✡️" },
  { id: "nut-allergy",     label: "Nut Allergy",        icon: "🥜" },
  { id: "dairy-free",      label: "Dairy-Free",         icon: "🥛" },
  { id: "seafood-allergy", label: "Seafood Allergy",    icon: "🦐" },
  { id: "no-pork",         label: "No Pork",            icon: "🐷" },
  { id: "diabetic",        label: "Diabetic-Friendly",  icon: "💉" },
];

// ─── STATS ─────────────────────────────────────────────────────

export const stats = [
  { label: "Happy Travelers", value: "15,000+", icon: "users" },
  { label: "Ghana Regions",   value: "10",       icon: "globe" },
  { label: "Tour Packages",   value: "45+",      icon: "map"   },
  { label: "Years of Experience", value: "12+",  icon: "award" },
];

// ─── GHANA REGIONS ────────────────────────────────────────────

export interface GhanaRegion {
  id: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  accentColor: string;
  emoji: string;
}

export const ghanaRegions: GhanaRegion[] = [
  {
    id: "Northern Ghana",
    name: "Northern Ghana",
    tagline: "Wildlife, savannas & ancient traditions",
    description: "Home to Mole National Park — West Africa's finest safari with wild elephants, hippos, and 300+ bird species in the Northern savanna.",
    image: "/tourist_site/Mole/safari-guided-tours-at.jpg",
    accentColor: "#C2410C",
    emoji: "🐘",
  },
  {
    id: "Central Region",
    name: "Central Region",
    tagline: "Heritage castles & rainforest canopy",
    description: "UNESCO World Heritage slave castles, Kakum's suspended walkway 40m above ancient rainforest, and Ghana's most storied Atlantic coastline.",
    image: "/tourist_site/Cape Coast/visit-the-cape-coast.jpg",
    accentColor: "#1D4ED8",
    emoji: "🏰",
  },
  {
    id: "Volta Region",
    name: "Volta Region",
    tagline: "Mountains, waterfalls & highland trails",
    description: "Wli Falls — West Africa's highest waterfall — Mount Afadjato, vast Lake Volta, and the lush green highlands straddling the Togo border.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    accentColor: "#15803D",
    emoji: "🏔️",
  },
  {
    id: "Greater Accra",
    name: "Greater Accra",
    tagline: "City life, beaches & the Volta estuary",
    description: "Ghana's dynamic capital, historic Jamestown, Labadi Beach, and the pristine Ada Foah estuary where the Volta River meets the Atlantic.",
    image: "/tourist_site/Kwame/kwame-nkrumah-memorial.jpg",
    accentColor: "#7C3AED",
    emoji: "🏙️",
  },
  {
    id: "Ashanti Region",
    name: "Ashanti Region",
    tagline: "Kente, royalty & the Garden City",
    description: "Kumasi — proud seat of the Ashanti Kingdom — home of kente weaving, West Africa's largest open-air market, and the sacred crater Lake Bosumtwi.",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&q=80",
    accentColor: "#92400E",
    emoji: "👑",
  },
  {
    id: "Western Region",
    name: "Western Region",
    tagline: "Surf, rainforest & stilt villages",
    description: "Busua Beach, Ankasa's virgin rainforest, the extraordinary Nzulezo stilt village built entirely over water, and 17th-century Dutch coastal forts.",
    image: "/tourist_site/Busua/busua-beach.jpg",
    accentColor: "#0369A1",
    emoji: "🌊",
  },
  {
    id: "Eastern Region",
    name: "Eastern Region",
    tagline: "Botanical gardens, cocoa & waterfalls",
    description: "Aburi Botanical Gardens on the misty Akwapim Ridge, the Tetteh Quashie Cocoa Farm where Ghana's cocoa revolution began, and the spectacular twin Boti Falls.",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80",
    accentColor: "#166534",
    emoji: "🌿",
  },
];

// ─── DESTINATIONS (Hero carousel) ─────────────────────────────

export const featuredDestinations = [
  { name: "Mole National Park", country: "Northern Ghana", image: "/tourist_site/hero/caption (1).jpg" },
  { name: "Cape Coast Castle",  country: "Central Region", image: "/tourist_site/hero/caption.jpg" },
  { name: "Larabanga Mosque",   country: "Northern Ghana", image: "/tourist_site/hero/facade-avant-mosquee.jpg" },
  { name: "Ghana Wildlife",     country: "Northern Ghana", image: "/tourist_site/hero/25.jpg" },
];
