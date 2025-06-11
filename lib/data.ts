export interface Place {
  id: string;
  name: string;
  province: string;
  type: 'temple' | 'beach' | 'mountain' | 'city' | 'nature' | 'cultural';
  description: string;
  image: string;
  images: string[];
  rating: number;
  location: {
    lat: number;
    lng: number;
  };
  highlights: string[];
  bestTimeToVisit: string;
  entryFee: string;
  duration: string;
  difficulty: 'Easy' | 'Moderate' | 'Challenging';
  facilities: string[];
  nearbyAttractions: string[];
}

export const provinces = [
  'All Provinces',
  'Siem Reap',
  'Phnom Penh',
  'Sihanoukville',
  'Battambang',
  'Kampot',
  'Kep',
  'Mondulkiri',
  'Ratanakiri',
  'Kratie',
  'Banteay Meanchey',
  'Preah Vihear'
];

export const placeTypes = [
  { value: 'all', label: 'All Types' },
  { value: 'temple', label: 'Temples' },
  { value: 'beach', label: 'Beaches' },
  { value: 'mountain', label: 'Mountains' },
  { value: 'city', label: 'Cities' },
  { value: 'nature', label: 'Nature' },
  { value: 'cultural', label: 'Cultural' }
];

export const places: Place[] = [
  {
    id: '1',
    name: 'Angkor Wat',
    province: 'Siem Reap',
    type: 'temple',
    description: 'The largest religious monument in the world, this 12th-century temple complex is Cambodia\'s crown jewel and a UNESCO World Heritage Site. Built during the reign of King Suryavarman VII, it represents the pinnacle of Khmer architecture and artistry.',
    image: 'https://images.pexels.com/photos/2670898/pexels-photo-2670898.jpeg',
    images: [
      'https://images.pexels.com/photos/2670898/pexels-photo-2670898.jpeg',
      'https://images.pexels.com/photos/2670901/pexels-photo-2670901.jpeg',
      'https://images.pexels.com/photos/2670899/pexels-photo-2670899.jpeg',
      'https://images.pexels.com/photos/2670900/pexels-photo-2670900.jpeg',
      'https://images.pexels.com/photos/5206275/pexels-photo-5206275.jpeg'
    ],
    rating: 4.9,
    location: { lat: 13.4125, lng: 103.8670 },
    highlights: ['UNESCO World Heritage Site', 'Sunrise viewing', 'Ancient Khmer architecture', 'Intricate bas-reliefs'],
    bestTimeToVisit: 'November to March (dry season)',
    entryFee: '$37 (1-day pass)',
    duration: '4-6 hours',
    difficulty: 'Easy',
    facilities: ['Parking', 'Restrooms', 'Food stalls', 'Souvenir shops', 'Audio guides'],
    nearbyAttractions: ['Angkor Thom', 'Bayon Temple', 'Ta Prohm', 'Banteay Srei']
  },
  {
    id: '2',
    name: 'Royal Palace',
    province: 'Phnom Penh',
    type: 'cultural',
    description: 'A stunning complex of buildings serving as the royal residence of the King of Cambodia, featuring beautiful Khmer architecture and the famous Silver Pagoda with its floor made of silver tiles.',
    image: 'https://images.pexels.com/photos/5206275/pexels-photo-5206275.jpeg',
    images: [
      'https://images.pexels.com/photos/5206275/pexels-photo-5206275.jpeg',
      'https://images.pexels.com/photos/2670898/pexels-photo-2670898.jpeg',
      'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg',
      'https://images.pexels.com/photos/2743754/pexels-photo-2743754.jpeg'
    ],
    rating: 4.7,
    location: { lat: 11.5564, lng: 104.9282 },
    highlights: ['Royal residence', 'Silver Pagoda', 'Khmer architecture', 'Royal treasures'],
    bestTimeToVisit: 'Year-round (avoid midday heat)',
    entryFee: '$10',
    duration: '2-3 hours',
    difficulty: 'Easy',
    facilities: ['Guided tours', 'Museum shop', 'Photography areas', 'Gardens'],
    nearbyAttractions: ['National Museum', 'Wat Phnom', 'Central Market', 'Mekong Riverfront']
  },
  {
    id: '3',
    name: 'Otres Beach',
    province: 'Sihanoukville',
    type: 'beach',
    description: 'A pristine stretch of white sand beach offering crystal clear waters, perfect for swimming, sunbathing, and water sports. Less crowded than other beaches, it maintains a peaceful, tropical paradise atmosphere.',
    image: 'https://images.pexels.com/photos/1007409/pexels-photo-1007409.jpeg',
    images: [
      'https://images.pexels.com/photos/1007409/pexels-photo-1007409.jpeg',
      'https://images.pexels.com/photos/1430677/pexels-photo-1430677.jpeg',
      'https://images.pexels.com/photos/2850833/pexels-photo-2850833.jpeg',
      'https://images.pexels.com/photos/1761279/pexels-photo-1761279.jpeg'
    ],
    rating: 4.6,
    location: { lat: 10.5693, lng: 103.5064 },
    highlights: ['White sand beach', 'Water sports', 'Beachfront dining', 'Sunset views'],
    bestTimeToVisit: 'November to April (dry season)',
    entryFee: 'Free',
    duration: 'Full day',
    difficulty: 'Easy',
    facilities: ['Beach bars', 'Restaurants', 'Water sports rental', 'Accommodation', 'Massage services'],
    nearbyAttractions: ['Serendipity Beach', 'Ream National Park', 'Kbal Chhay Waterfalls']
  },
  {
    id: '4',
    name: 'Bamboo Train',
    province: 'Battambang',
    type: 'cultural',
    description: 'A unique railway experience through Cambodia\'s countryside on bamboo platforms powered by small engines. This ingenious local transport offers scenic views of rice paddies and rural life.',
    image: 'https://images.pexels.com/photos/1007410/pexels-photo-1007410.jpeg',
    images: [
      'https://images.pexels.com/photos/1007410/pexels-photo-1007410.jpeg',
      'https://images.pexels.com/photos/2743754/pexels-photo-2743754.jpeg',
      'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg',
      'https://images.pexels.com/photos/2850833/pexels-photo-2850833.jpeg'
    ],
    rating: 4.5,
    location: { lat: 13.1027, lng: 103.1988 },
    highlights: ['Unique transport', 'Countryside views', 'Local experience', 'Photography opportunities'],
    bestTimeToVisit: 'November to March',
    entryFee: '$5',
    duration: '1-2 hours',
    difficulty: 'Easy',
    facilities: ['Local guides', 'Refreshments', 'Photo stops'],
    nearbyAttractions: ['Phnom Sampeau', 'Killing Caves', 'Wat Banan', 'Battambang Market']
  },
  {
    id: '5',
    name: 'Bokor National Park',
    province: 'Kampot',
    type: 'nature',
    description: 'A mountain national park featuring abandoned French colonial buildings, spectacular waterfalls, and diverse wildlife. The cool mountain climate provides a refreshing escape from the tropical heat.',
    image: 'https://images.pexels.com/photos/1761279/pexels-photo-1761279.jpeg',
    images: [
      'https://images.pexels.com/photos/1761279/pexels-photo-1761279.jpeg',
      'https://images.pexels.com/photos/2743754/pexels-photo-2743754.jpeg',
      'https://images.pexels.com/photos/1430677/pexels-photo-1430677.jpeg',
      'https://images.pexels.com/photos/2850833/pexels-photo-2850833.jpeg'
    ],
    rating: 4.4,
    location: { lat: 10.6380, lng: 104.0057 },
    highlights: ['Mountain views', 'Waterfalls', 'Colonial history', 'Wildlife spotting'],
    bestTimeToVisit: 'November to April',
    entryFee: '$5',
    duration: 'Full day',
    difficulty: 'Moderate',
    facilities: ['Hiking trails', 'Viewpoints', 'Picnic areas', 'Parking'],
    nearbyAttractions: ['Kampot town', 'Pepper farms', 'Salt fields', 'Kep National Park']
  },
  {
    id: '6',
    name: 'Kep Crab Market',
    province: 'Kep',
    type: 'cultural',
    description: 'Famous for its fresh crab and seafood, this coastal market offers the best of Cambodian coastal cuisine. The market comes alive with local fishermen bringing in their daily catch.',
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg',
    images: [
      'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg',
      'https://images.pexels.com/photos/1007409/pexels-photo-1007409.jpeg',
      'https://images.pexels.com/photos/2850833/pexels-photo-2850833.jpeg',
      'https://images.pexels.com/photos/1430677/pexels-photo-1430677.jpeg'
    ],
    rating: 4.3,
    location: { lat: 10.4833, lng: 104.3167 },
    highlights: ['Fresh seafood', 'Local cuisine', 'Coastal views', 'Cultural experience'],
    bestTimeToVisit: 'Early morning (6-10 AM)',
    entryFee: 'Free',
    duration: '2-3 hours',
    difficulty: 'Easy',
    facilities: ['Restaurants', 'Fresh market', 'Cooking demonstrations', 'Parking'],
    nearbyAttractions: ['Kep Beach', 'Rabbit Island', 'Kep National Park', 'Salt fields']
  },
  {
    id: '7',
    name: 'Mondulkiri Waterfalls',
    province: 'Mondulkiri',
    type: 'nature',
    description: 'Spectacular waterfalls surrounded by lush jungle, perfect for trekking and nature photography. The area is home to indigenous communities and offers elephant sanctuary experiences.',
    image: 'https://images.pexels.com/photos/2743754/pexels-photo-2743754.jpeg',
    images: [
      'https://images.pexels.com/photos/2743754/pexels-photo-2743754.jpeg',
      'https://images.pexels.com/photos/1761279/pexels-photo-1761279.jpeg',
      'https://images.pexels.com/photos/1430677/pexels-photo-1430677.jpeg',
      'https://images.pexels.com/photos/2850833/pexels-photo-2850833.jpeg'
    ],
    rating: 4.8,
    location: { lat: 12.4537, lng: 107.2176 },
    highlights: ['Jungle trekking', 'Photography', 'Natural pools', 'Indigenous culture'],
    bestTimeToVisit: 'November to April',
    entryFee: '$3',
    duration: '4-6 hours',
    difficulty: 'Moderate',
    facilities: ['Trekking guides', 'Swimming areas', 'Picnic spots', 'Elephant sanctuary'],
    nearbyAttractions: ['Elephant Valley Project', 'Bousra Waterfall', 'Indigenous villages', 'Coffee plantations']
  },
  {
    id: '8',
    name: 'Yeak Laom Lake',
    province: 'Ratanakiri',
    type: 'nature',
    description: 'A pristine volcanic lake surrounded by protected forest, perfect for swimming and cultural experiences with local indigenous communities. The crystal-clear water maintains a constant temperature year-round.',
    image: 'https://images.pexels.com/photos/1430677/pexels-photo-1430677.jpeg',
    images: [
      'https://images.pexels.com/photos/1430677/pexels-photo-1430677.jpeg',
      'https://images.pexels.com/photos/2743754/pexels-photo-2743754.jpeg',
      'https://images.pexels.com/photos/1761279/pexels-photo-1761279.jpeg',
      'https://images.pexels.com/photos/2850833/pexels-photo-2850833.jpeg'
    ],
    rating: 4.7,
    location: { lat: 13.7500, lng: 106.9833 },
    highlights: ['Volcanic lake', 'Swimming', 'Indigenous culture', 'Forest walks'],
    bestTimeToVisit: 'November to March',
    entryFee: '$2',
    duration: '3-4 hours',
    difficulty: 'Easy',
    facilities: ['Swimming area', 'Walking trails', 'Cultural center', 'Local guides'],
    nearbyAttractions: ['Banlung town', 'Gem mines', 'Virachey National Park', 'Indigenous villages']
  },
  {
    id: '9',
    name: 'Mekong Dolphin Watching',
    province: 'Kratie',
    type: 'nature',
    description: 'One of the last places to see the endangered Irrawaddy dolphins in their natural habitat along the Mekong River. These rare freshwater dolphins are considered sacred by locals.',
    image: 'https://images.pexels.com/photos/2850833/pexels-photo-2850833.jpeg',
    images: [
      'https://images.pexels.com/photos/2850833/pexels-photo-2850833.jpeg',
      'https://images.pexels.com/photos/1430677/pexels-photo-1430677.jpeg',
      'https://images.pexels.com/photos/1761279/pexels-photo-1761279.jpeg',
      'https://images.pexels.com/photos/2743754/pexels-photo-2743754.jpeg'
    ],
    rating: 4.6,
    location: { lat: 12.4833, lng: 106.0167 },
    highlights: ['Dolphin watching', 'Mekong River', 'Wildlife conservation', 'Boat tours'],
    bestTimeToVisit: 'December to May (dry season)',
    entryFee: '$7 (boat tour)',
    duration: '2-3 hours',
    difficulty: 'Easy',
    facilities: ['Boat tours', 'Local guides', 'Visitor center', 'Refreshments'],
    nearbyAttractions: ['Kratie town', 'Koh Trong Island', 'Sambor Prei Kuk', 'French colonial buildings']
  },
  {
    id: '10',
    name: 'Banteay Srei',
    province: 'Siem Reap',
    type: 'temple',
    description: 'Known as the "Citadel of Women," this 10th-century temple is renowned for its intricate pink sandstone carvings and exceptional preservation. The detailed artistry represents the finest examples of classical Khmer art.',
    image: 'https://images.pexels.com/photos/2670901/pexels-photo-2670901.jpeg',
    images: [
      'https://images.pexels.com/photos/2670901/pexels-photo-2670901.jpeg',
      'https://images.pexels.com/photos/2670898/pexels-photo-2670898.jpeg',
      'https://images.pexels.com/photos/2670899/pexels-photo-2670899.jpeg',
      'https://images.pexels.com/photos/2670900/pexels-photo-2670900.jpeg'
    ],
    rating: 4.8,
    location: { lat: 13.5928, lng: 103.9641 },
    highlights: ['Pink sandstone', 'Intricate carvings', 'Khmer art', 'Well-preserved'],
    bestTimeToVisit: 'November to March',
    entryFee: 'Included in Angkor Pass',
    duration: '2-3 hours',
    difficulty: 'Easy',
    facilities: ['Parking', 'Restrooms', 'Souvenir shops', 'Guided tours'],
    nearbyAttractions: ['Angkor Wat', 'Beng Mealea', 'Kbal Spean', 'Landmine Museum']
  },
  {
    id: '11',
    name: 'Preah Vihear Temple',
    province: 'Preah Vihear',
    type: 'temple',
    description: 'A clifftop temple complex offering breathtaking views and ancient Khmer architecture, another UNESCO World Heritage Site. Perched on a 525-meter cliff, it provides spectacular panoramic views of the Cambodian plains.',
    image: 'https://images.pexels.com/photos/2670899/pexels-photo-2670899.jpeg',
    images: [
      'https://images.pexels.com/photos/2670899/pexels-photo-2670899.jpeg',
      'https://images.pexels.com/photos/2670898/pexels-photo-2670898.jpeg',
      'https://images.pexels.com/photos/2670901/pexels-photo-2670901.jpeg',
      'https://images.pexels.com/photos/2670900/pexels-photo-2670900.jpeg'
    ],
    rating: 4.7,
    location: { lat: 14.3900, lng: 104.6758 },
    highlights: ['Mountain temple', 'Panoramic views', 'UNESCO site', 'Ancient architecture'],
    bestTimeToVisit: 'November to March',
    entryFee: '$10',
    duration: '4-5 hours',
    difficulty: 'Moderate',
    facilities: ['Mountain access', 'Viewpoints', 'Parking', 'Local guides'],
    nearbyAttractions: ['Koh Ker temples', 'Tbeng Meanchey', 'Kulen Mountain', 'Remote villages']
  },
  {
    id: '12',
    name: 'Banteay Chhmar',
    province: 'Banteay Meanchey',
    type: 'temple',
    description: 'A remote temple complex less visited by tourists, offering an authentic exploration experience of ancient Khmer ruins. Built by Jayavarman VII, it features impressive face towers and intricate bas-reliefs.',
    image: 'https://images.pexels.com/photos/2670900/pexels-photo-2670900.jpeg',
    images: [
      'https://images.pexels.com/photos/2670900/pexels-photo-2670900.jpeg',
      'https://images.pexels.com/photos/2670898/pexels-photo-2670898.jpeg',
      'https://images.pexels.com/photos/2670901/pexels-photo-2670901.jpeg',
      'https://images.pexels.com/photos/2670899/pexels-photo-2670899.jpeg'
    ],
    rating: 4.5,
    location: { lat: 13.7667, lng: 102.9667 },
    highlights: ['Remote location', 'Authentic experience', 'Ancient ruins', 'Face towers'],
    bestTimeToVisit: 'November to March',
    entryFee: '$5',
    duration: '3-4 hours',
    difficulty: 'Moderate',
    facilities: ['Local guides', 'Community tourism', 'Homestays', 'Traditional crafts'],
    nearbyAttractions: ['Sisophon town', 'Poipet border', 'Local villages', 'Silk weaving centers']
  }
];