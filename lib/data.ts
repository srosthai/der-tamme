export interface Place {
  id: string;
  name: string;
  province: string;
  type: 'temple' | 'cafe' | 'mountain' | 'city' | 'nature' | 'cultural';
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


export const placeTypes = [
  { value: 'all', label: 'All Types' },
  { value: 'temple', label: 'Temples' },
  { value: 'cafe', label: 'Cafes' },
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
    image: 'https://globalcastaway.com/wp-content/uploads/2019/11/the-ultimate-guide-for-visiting-Angkor-Wat.jpg',
    images: [
      'https://globalcastaway.com/wp-content/uploads/2019/11/the-ultimate-guide-for-visiting-Angkor-Wat.jpg',
      'https://ik.imgkit.net/3vlqs5axxjf/TAW/ik-seo/uploadedImages/All_Gateways/ASPAC/Hotel_Review/Angkor%20Wat%20Hotels_HERO-2/Visiting-Angkor-Wat%3F-These-Two-Siem-Reap-Hotels-Ma.jpg?tr=w-1008%2Ch-567%2Cfo-auto',
      'https://www.agoda.com/wp-content/uploads/2024/04/siem-reap-cambodia-angkor-wat.jpg',
      'https://thebettercambodia.com/wp-content/uploads/2024/06/fn-2024-06-03-11-46-12-0.jpg',
      'https://cdn.tourradar.com/s3/tour/1500x800/249057_65eb00d86b238.jpg'
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
    id: '10',
    name: 'Banteay Srei',
    province: 'Siem Reap',
    type: 'temple',
    description: 'Known as the "Citadel of Women," this 10th-century temple is renowned for its intricate pink sandstone carvings and exceptional preservation. The detailed artistry represents the finest examples of classical Khmer art.',
    image: 'https://files.intocambodia.org/wp-content/uploads/2024/08/10123701/Banteay-Srei-Temple.jpg',
    images: [
      'https://files.intocambodia.org/wp-content/uploads/2024/08/10123701/Banteay-Srei-Temple.jpg',
      'https://gadttravel.com/uploads/cambodia/siem-reap/BanteaySreiBackcountryTourinSiemReap-KlookVi%E1%BB%87tNam.jpg',
      'https://www.asiakingtravel.com/cuploads/images/Blog/Banteay%20Srei%20temple/Banteay-Srei-temple-3.jpg',
      'https://toursbyjeeps.com/wp-content/uploads/2021/01/BTS.jpg',
      'https://www.guidingcambodia.com/wp-content/uploads/2023/11/Banteay-Srei-Temple-09-853x640-1.jpg'
    ],
    rating: 4.8,
    location: { lat: 13.5988, lng: 103.9625 },
    highlights: ['Pink sandstone', 'Intricate carvings', 'Khmer art', 'Well-preserved'],
    bestTimeToVisit: 'November to March',
    entryFee: 'Included in Angkor Pass',
    duration: '2-3 hours',
    difficulty: 'Easy',
    facilities: ['Parking', 'Restrooms', 'Souvenir shops', 'Guided tours'],
    nearbyAttractions: ['Angkor Wat', 'Beng Mealea', 'Kbal Spean', 'Landmine Museum']
  },
  {
    id: '14',
    name: 'Bayon Temple',
    province: 'Siem Reap',
    type: 'temple',
    description: 'Located in the heart of Angkor Thom, Bayon Temple is famous for its serene and massive stone faces carved onto its many towers. This 12th-century Mahayana Buddhist temple was built by King Jayavarman VII and is a masterpiece of Khmer architecture.',
    image: 'https://www.siemreap.net/wp-content/uploads/2018/04/bayon-temple.jpg',
    images: [
      'https://www.siemreap.net/wp-content/uploads/2018/04/bayon-temple.jpg',
      'https://www.dailyartmagazine.com/wp-content/uploads/2021/10/cropped-bayon-temple-3.jpg',
      'https://aojourneys.com/Data/Sites/1/News/458/bayon-temple.jpg',
      'https://cambodiatravel.com/images/2020/12/Bayon-Temple-angkor-thom-cambodia-1.jpg',
      'https://www.angkorenterprise.gov.kh/upload/images/1546938113316.jpg'
    ],
    rating: 4.8,
    location: { lat: 13.4413, lng: 103.8590 },
    highlights: ['Giant stone faces', 'Central location in Angkor Thom', 'Intricate bas-reliefs depicting historical events and daily life', 'Khmer architecture'],
    bestTimeToVisit: 'November to March (dry season, cooler weather)',
    entryFee: 'Included in Angkor Pass ($37 for 1-day, $62 for 3-day, $72 for 7-day)',
    duration: '2-3 hours',
    difficulty: 'Easy',
    facilities: ['Parking', 'Restrooms', 'Food stalls nearby', 'Souvenir shops nearby', 'Local guides available'],
    nearbyAttractions: ['Angkor Wat', 'Ta Prohm', 'Terrace of the Leper King', 'Terrace of the Elephants', 'Baphuon']
  },
  {
    id: '15',
    name: 'Pre Rup Temple',
    province: 'Siem Reap',
    type: 'temple',
    description: 'Pre Rup is a Hindu temple at Angkor, Cambodia, built as the state temple of Khmer king Rajendravarman and dedicated in 961 or early 962. It is a temple mountain of combined brick, laterite and sandstone construction. The temple’s name is a comparatively modern one meaning "turn the body". This reflects the common belief among Cambodians that funerals were conducted at the temple, with the ashes of the body being ritually rotated in different directions as the service progressed. It offers excellent sunset views from its upper tiers.',
    image: 'https://www.siemreap.net/wp-content/uploads/2019/05/pre-rup.jpg',
    images: [
      'https://www.siemreap.net/wp-content/uploads/2019/05/pre-rup.jpg',
      'https://image.arrivalguides.com/415x300/10/f0244f5a6e6a678bf8b428d2056b5efb.jpg',
      'https://img.traveltriangle.com/blog/wp-content/uploads/2024/05/pre-rup-temple.jpg',
      'https://img.fotocommunity.com/prasat-pre-rup-in-sunset-light-48e29159-ed90-4cca-856b-90ee64ecf78d.jpg?height=1080',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbP7MUZTDa089dP0xpjVtLXnHBsE-PeNFxpUM2iLuhBD6BCwQ3RGb8c6vG1ssTak0Stvc&usqp=CAU'
    ],
    rating: 4.6,
    location: { lat: 13.4350, lng: 103.9208 },
    highlights: ['Sunset views', 'Laterite and brick construction', 'Pyramid-like structure', 'Detailed lintels and pediments'],
    bestTimeToVisit: 'Late afternoon for sunset, November to March (dry season)',
    entryFee: 'Included in Angkor Pass ($37 for 1-day, $62 for 3-day, $72 for 7-day)',
    duration: '1-1.5 hours',
    difficulty: 'Easy',
    facilities: ['Parking area', 'Steep stairs to upper levels', 'Vendors nearby for drinks/snacks'],
    nearbyAttractions: ['East Mebon', 'Srah Srang', 'Banteay Kdei', 'Ta Prohm', 'Angkor Wat']
  },
  {
    id: '16',
    name: 'Baphuon Temple',
    province: 'Siem Reap',
    type: 'temple',
    description: 'A massive 11th-century temple mountain located in Angkor Thom, northwest of the Bayon. Originally dedicated to Shiva, it features a long causeway leading to its impressive, tiered structure. A giant reclining Buddha was later added to its western face in the 15th century. The temple offers panoramic views and is known for the extensive restoration work undertaken to reassemble it.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/3/3a/2016_Angkor%2C_Angkor_Thom%2C_Baphuon_%2817%29.jpg',
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/3/3a/2016_Angkor%2C_Angkor_Thom%2C_Baphuon_%2817%29.jpg',
      'https://www.areacambodia.com/wp-content/uploads/2023/09/Baphuon-Temple-Pyramid-Temple-in-Angkor.jpg',
      'https://media.istockphoto.com/id/465078554/photo/the-baphuon-is-a-temple-at-angkor-thom-the-main-entrance.jpg?s=612x612&w=0&k=20&c=YFer63QDhamECensnK7xXVaRNFRQ6AdUxKSC8h3Qdbg=',
      'https://data.agatetravel.com/images/photogallery/2020/baphuon-temple-angkor-thom.jpg',
      'https://live.staticflickr.com/1866/42723816630_dee663e545_b.jpg'
    ],
    rating: 4.7,
    location: { lat: 13.4442, lng: 103.8575 },
    highlights: ['Massive temple mountain', 'Impressive causeway entrance', 'Giant reclining Buddha', 'Panoramic views', '11th-century architecture', 'Extensive restoration'],
    bestTimeToVisit: 'November to March (dry season), early morning or late afternoon',
    entryFee: 'Included in Angkor Pass',
    duration: '1.5-2.5 hours',
    difficulty: 'Moderate',
    facilities: ['Parking nearby', 'Steep staircases', 'Walkways', 'Viewing platforms', 'Restrooms (Angkor Thom area)'],
    nearbyAttractions: ['Bayon Temple', 'Royal Palace area (Phimeanakas)', 'Terrace of the Leper King', 'Terrace of the Elephants', 'Angkor Wat']
  },
  {
    id: '17',
    name: 'Banteay Kdei Temple',
    province: 'Siem Reap',
    type: 'temple',
    description: "Known as the 'Citadel of Monks\' Cells', Banteay Kdei is a serene Buddhist monastic complex built in the mid-12th to early 13th centuries under Jayavarman VII. In the Bayon style, it shares similarities with Ta Prohm and Preah Khan but offers a quieter, less crowded experience. It features intricate carvings and a tranquil atmosphere.",
    image: 'https://mysiemreaptours.com/wp-content/uploads/2024/07/Banteay-Kdei-Temple-A-Buddhist-Sanctuary-1024x683.jpg',
    images: [
      'https://mysiemreaptours.com/wp-content/uploads/2024/07/Banteay-Kdei-Temple-A-Buddhist-Sanctuary-1024x683.jpg',
      'https://visitlocaltravel.com/blog/wp-content/uploads/2024/07/Banteay-Kdei-Temple-Tavel-Guide.png',
      'https://media.istockphoto.com/id/1257080402/photo/banteay-srei-temple-in-angkor-wat.jpg?s=612x612&w=0&k=20&c=qlpfenHdFykH6gdb22vfM--YSieaM4hf9iyee1dsIfI=',
      'https://www.angkor-temples-in-cambodia.com/uploads/3/0/0/4/30047791/banteay-kdei-05-600_orig.jpg',
      'https://media.istockphoto.com/id/1257079797/photo/banteay-srei-temple-in-angkor-wat.jpg?s=612x612&w=0&k=20&c=wj7pAYvK2KWa8XsHId_WQJ0K0zPBJRRkqlebThktDGk=',
    ],
    rating: 4.6,
    location: { lat: 13.4275, lng: 103.8983 },
    highlights: ['Serene atmosphere', 'Bayon style architecture', 'Carvings of garudas and devatas', 'Less crowded', 'Hall of Dancers'],
    bestTimeToVisit: 'November to March (dry season), early morning or late afternoon',
    entryFee: 'Included in Angkor Pass',
    duration: '1-1.5 hours',
    difficulty: 'Easy',
    facilities: ['Parking nearby', 'Walkways', 'Vendors for drinks/snacks outside', 'Restrooms (Angkor complex)'],
    nearbyAttractions: ['Srah Srang', 'Ta Prohm', 'Pre Rup', 'Angkor Wat', 'Angkor Thom']
  },
  {
    id: '18',
    name: 'Banteay Samre Temple',
    province: 'Siem Reap',
    type: 'temple',
    description: 'Banteay Samré is a temple at Angkor, Cambodia, located east of the East Baray. Built under Suryavarman II and Yasovarman II in the early 12th century, it is a Hindu temple in the Angkor Wat style. Named after the Samré, an ancient people of Indochina, the temple uses similar materials to Banteay Srei and is known for its well-preserved carvings and less crowded atmosphere.',
    image: 'https://apsaraauthority.gov.kh/wp-content/uploads/2021/08/Apsara-National-Authority-anteay-Sanre-temple-42.jpg',
    images: [
      'https://apsaraauthority.gov.kh/wp-content/uploads/2021/08/Apsara-National-Authority-anteay-Sanre-temple-42.jpg',
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/04/b3/58/18/banteay-samre.jpg?w=900&h=500&s=1',
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/04/b3/58/18/banteay-samre.jpg?w=900&h=500&s=1',
      'https://www.holidify.com/images/cmsuploads/compressed/shutterstock_1207109479_20200302172907_20200302172916.png',
      'https://cambodgeautrement.fr/images/Temples/Banteay%20Samre_02.jpg'
    ],
    rating: 4.7,
    location: { lat: 13.4455, lng: 103.9230 },
    highlights: ['Angkor Wat style architecture', 'Well-preserved carvings', 'Less crowded atmosphere', 'Moat and laterite walls', 'Named after the Samre people'],
    bestTimeToVisit: 'November to March (dry season), early morning or late afternoon',
    entryFee: 'Included in Angkor Pass',
    duration: '1-1.5 hours',
    difficulty: 'Easy',
    facilities: ['Parking area', 'Walkways', 'Vendors for drinks/snacks nearby', 'Restrooms (Angkor complex)'],
    nearbyAttractions: ['East Mebon', 'Pre Rup', 'Ta Som', 'Neak Pean', 'Banteay Srei']
  },
  {
    id: '20',
    name: 'Phnom Krom Temple',
    province: 'Siem Reap',
    type: 'temple',
    description: 'Phnom Krom is a 10th-century Angkorian temple built on a hilltop southwest of Siem Reap, during the reign of King Yasovarman I. Dedicated to the Hindu trinity of Shiva, Vishnu, and Brahma, it offers stunning panoramic views of the Tonle Sap Lake and the surrounding countryside, especially popular for sunset.',
    image: 'https://www.vivutravel.com/images/des-cambodia1/Cambodia-travel-to-Phnom-Krom-Hilltop-Temple.jpg',
    images: [
      'https://www.vivutravel.com/images/des-cambodia1/Cambodia-travel-to-Phnom-Krom-Hilltop-Temple.jpg',
      'https://visitlocaltravel.com/blog/wp-content/uploads/2023/12/phnom-krom-temple.png',
      'https://ramblingfeet.net/wp-content/uploads/2017/04/15002522_10154130992581801_5941973201705882_o.jpg',
      'https://www.areacambodia.com/wp-content/uploads/2023/10/Phnom-Krom-The-Best-Sunset-Viewing-Spot-in-Siem-Reap-Beautiful-Girl.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-s/1a/d6/b1/57/sunset-trip-at-phnom.jpg'
    ],
    rating: 4.4,
    location: { lat: 13.2833, lng: 103.8167 },
    highlights: ['Panoramic Tonle Sap Lake views', 'Sunset viewing spot', '10th-century Yasovarman I temple', 'Hindu trinity dedication', 'Less crowded experience'],
    bestTimeToVisit: 'Late afternoon for sunset, November to March (dry season)',
    entryFee: 'Included in Angkor Pass',
    duration: '1.5-2.5 hours',
    difficulty: 'Moderate',
    facilities: ['Parking at hill base', 'Stairs to temple', 'Viewpoints', 'Basic refreshment stalls nearby'],
    nearbyAttractions: ['Tonle Sap Lake (Chong Kneas)', 'Siem Reap town', 'Wat Athvea', 'Angkor temples (further afield)']
  },
  {
    id: '21',
    name: 'Ta Prohm Temple',
    province: 'Siem Reap',
    type: 'temple',
    description: 'Famously known as the "Tomb Raider" temple, Ta Prohm is renowned for the giant silk-cotton and strangler fig trees growing out of its ruins, creating a mystical and atmospheric experience. Built in the late 12th and early 13th centuries by King Jayavarman VII, it was originally a Mahayana Buddhist monastery and university.',
    image: 'https://www.theangkorguide.net/userfiles/ta-prohm-temple-gallery-1.jpg',
    images: [
      'https://www.theangkorguide.net/userfiles/ta-prohm-temple-gallery-1.jpg',
      'https://media.istockphoto.com/id/990208164/photo/angkor-ta-prohm-temple-of-angkor-thom-in-cambodia.jpg?s=612x612&w=0&k=20&c=69y8PVZgoQQsY36W7lf-Ig8Gxtaw7rHWkZ7nveXLbOk=',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzitxp8ETEptsAlYUtNiZ2_tiZ8kF5xfeMV_Z9CZZeWlUH3ZjjN7K2f10RlgZUzjFzoa8&usqp=CAU',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYVtAtQb8jistwREEZp7V3i0JLgNf6j6UdYw&s',
      'https://www.angkorhotel.net/userfiles/ta-prohm_2(1).jpg'
    ],
    rating: 4.8,
    location: { lat: 13.4348, lng: 103.8891 },
    highlights: ['Giant trees intertwined with ruins', '"Tomb Raider" filming location', 'Atmospheric jungle temple', 'Intricate carvings', 'Monastic complex'],
    bestTimeToVisit: 'November to March (dry season), early morning or late afternoon to avoid crowds',
    entryFee: 'Included in Angkor Pass ($37 for 1-day, $62 for 3-day, $72 for 7-day)',
    duration: '1.5-2.5 hours',
    difficulty: 'Easy',
    facilities: ['Parking', 'Restrooms', 'Souvenir stalls', 'Food and drink vendors nearby', 'Wooden walkways for preservation and access', 'Local guides available'],
    nearbyAttractions: ['Angkor Wat', 'Angkor Thom (Bayon, Baphuon)', 'Banteay Kdei', 'Srah Srang', 'Pre Rup']
  },
  {
    id: '22',
    name: 'Preah Khan Temple',
    province: 'Siem Reap',
    type: 'temple',
    description: 'A large, monastic complex built in the 12th century by King Jayavarman VII to honor his father. Preah Khan features a labyrinth of corridors, intricate carvings, and a unique two-story pavilion. It was a center for administration, education, and worship, with nearly 100,000 officials and servants. The temple has been largely left unrestored, with trees growing amongst the ruins, similar to Ta Prohm.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Preah_Khan%2C_Angkor%2C_Camboya%2C_2013-08-17%2C_DD_26.JPG/1200px-Preah_Khan%2C_Angkor%2C_Camboya%2C_2013-08-17%2C_DD_26.JPG',
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Preah_Khan%2C_Angkor%2C_Camboya%2C_2013-08-17%2C_DD_26.JPG/1200px-Preah_Khan%2C_Angkor%2C_Camboya%2C_2013-08-17%2C_DD_26.JPG',
      'https://www.cambodiaacountryfullofcharm.com/wp-content/uploads/2022/11/preah-khan-cambodia-scaled.jpg',
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/c7/23/e1/preah-khan.jpg?w=1200&h=1200&s=1',
      'https://helloangkor.com/wp-content/uploads/2021/01/HA5D0642-1024x683.jpg',
      'https://live.staticflickr.com/2855/11155363094_a022f127e0_b.jpg',
      'https://us.images.westend61.de/0001366004pw/prasat-preah-khan-temple-ruins-siem-reap-cambodia-CAVF79135.jpg'
    ],
    rating: 4.7,
    location: { lat: 13.4625, lng: 103.8725 },
    highlights: ['Large monastic complex', 'Labyrinthine corridors', 'Two-story pavilion', 'Dedicated to Jayavarman VII\'s father', 'Intricate carvings'],
    bestTimeToVisit: 'November to March (dry season)',
    entryFee: 'Included in Angkor Pass',
    duration: '1.5-2.5 hours',
    difficulty: 'Easy',
    facilities: ['Parking', 'Restrooms nearby', 'Souvenir stalls', 'Local guides available', 'Walkways'],
    nearbyAttractions: ['Neak Pean', 'Ta Som', 'Angkor Thom (North Gate)', 'Banteay Prei', 'Krol Ko']
  },
  {
    id: '23',
    name: 'Phnom Bakheng',
    province: 'Siem Reap',
    type: 'temple',
    description: 'One of the oldest temples in the Angkor region, Phnom Bakheng is a Hindu temple mountain built in the late 9th century by King Yasovarman I. Perched on a hilltop, it was the state temple of the first Khmer capital at Angkor, Yasodharapura. It is famously popular as a sunset viewing spot, offering panoramic views of the surrounding jungle and a distant Angkor Wat.',
    image: 'https://files.intocambodia.org/wp-content/uploads/2024/08/17082608/Bakheng-Temple-3.jpg',
    images: [
      'https://files.intocambodia.org/wp-content/uploads/2024/08/17082608/Bakheng-Temple-3.jpg',
      'https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/09/ed/79/0d.jpg',
      'https://www.centralsuiteresidence.com/userfiles/blog/sunset_at_bakheng.png',
      'https://www.siemreap.net/wp-content/uploads/2017/01/phnom-bakeng-sunset-696x417.jpg.webp',
      'https://angkorfocus.com/userfiles/thumbs/new-Sunset-at-Phnom-Bakheng.jpg'
    ],
    rating: 4.5,
    location: { lat: 13.4236, lng: 103.8564 },
    highlights: ['Iconic sunset views over Angkor Wat', 'Hilltop temple', 'State temple of Yasodharapura', 'Panoramic landscape views', '9th-century architecture'],
    bestTimeToVisit: 'Late afternoon for sunset (arrive at least 90 minutes before sunset due to visitor limits on top). November to March for best weather.',
    entryFee: 'Included in Angkor Pass (Note: A separate pass may be issued at the base to limit the number of visitors on the temple at sunset).',
    duration: '2-3 hours',
    difficulty: 'Moderate',
    facilities: ['Parking at the hill base', 'Well-maintained path up the hill', 'Designated viewing areas', 'Restrooms at the base'],
    nearbyAttractions: ['Angkor Wat', 'Angkor Thom (South Gate)', 'Bayon Temple', 'Baksei Chamkrong']
  },
  {
    id: '24',
    name: 'Neak Pean',
    province: 'Siem Reap',
    type: 'temple',
    description: 'Neak Pean ("The Entwined Serpents") is a unique island temple built in the late 12th century by King Jayavarman VII. Located in the center of a large baray (Preah Khan Baray), it was originally designed for medicinal purposes, representing the mythical Himalayan lake of Anavatapta, whose waters were believed to cure all illnesses. The central sanctuary is surrounded by four smaller pools, creating a distinctive and symbolic layout.',
    image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/23/55/4b/e5/80rjtc-apsara-apsaranationalau.jpg?w=900&h=500&s=1',
    images: [
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/23/55/4b/e5/80rjtc-apsara-apsaranationalau.jpg?w=900&h=500&s=1',
      'https://www.cambotours.com/userfiles/thumbs/neak-pean-temple.jpg',
      'https://mysiemreaptours.com/wp-content/uploads/2023/07/Neak-Pean-Temple-and-the-Healing-Waters-of-Angkor.jpg',
      'https://apsaraauthority.gov.kh/wp-content/uploads/2021/08/Apsara-National-Authority-Neak-Pean-temple-6.jpg',
      'https://www.khmertimeskh.com/wp-content/uploads/2022/10/bridge22895-750x440.jpg',
      'https://media.istockphoto.com/id/2157915142/photo/beautiful-reflection-of-neak-pean-temple-in-the-angkor-wat-historical-site-siem-reap-cambodia.jpg?s=612x612&w=0&k=20&c=33b1SjQXbCA5aT9YmWGWji23IxZw9TfBIc3U4qowEAI='
    ],
    rating: 4.6,
    location: { lat: 13.4633, lng: 103.8933 },
    highlights: ['Artificial island temple', 'Symbolic healing sanctuary', 'Represents mythical Lake Anavatapta', 'Statue of the horse Balaha', 'Unique water-based design'],
    bestTimeToVisit: 'November to March (dry season)',
    entryFee: 'Included in Angkor Pass',
    duration: '30-45 minutes',
    difficulty: 'Easy',
    facilities: ['Long wooden walkway over water', 'Parking area', 'Vendors for drinks/snacks at entrance', 'Viewing platforms'],
    nearbyAttractions: ['Preah Khan Temple', 'Ta Som Temple', 'Banteay Prei', 'Krol Ko', 'Angkor Thom']
  },
  {
    id: '25',
    name: 'Ta Som',
    province: 'Siem Reap',
    type: 'temple',
    description: 'A small but enchanting temple built in the late 12th century by King Jayavarman VII. Ta Som is known for its serene atmosphere and the iconic, photogenic strangler fig tree that has completely engulfed the eastern gopura (gateway), creating a stunning fusion of nature and architecture.',
    image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/e7/52/62/photo9jpg.jpg?w=900&h=500&s=1',
    images: [
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/e7/52/62/photo9jpg.jpg?w=900&h=500&s=1',
      'https://www.renown-travel.com/images/ta-som-angkor-l.jpg',
      'https://helloangkor.com/wp-content/uploads/2021/01/HA5D5882.jpg',
      'https://previews.123rf.com/images/efired/efired1507/efired150700071/43321216-one-of-entrances-to-ancient-ta-som-temple-in-amazing-angkor-siem-reap-cambodia-enigmatic-ta-som.jpg',
      'https://preview.redd.it/wonderful-cambodia-ta-som-temple-gate-late-12-century-v0-ciyv8sfgii6a1.jpg?width=640&crop=smart&auto=webp&s=d8ca35d2abb39b28c7c77a1a701914e4ac752a8a'
    ],
    rating: 4.6,
    location: { lat: 13.4647, lng: 103.9133 },
    highlights: ['Iconic tree-covered eastern gate', 'Bayon architectural style', 'Serene and less crowded', 'Intricate devata carvings', 'Single-tower sanctuary'],
    bestTimeToVisit: 'November to March (dry season)',
    entryFee: 'Included in Angkor Pass',
    duration: '30-45 minutes',
    difficulty: 'Easy',
    facilities: ['Parking area', 'Walkways', 'Vendors for drinks/snacks at entrance'],
    nearbyAttractions: ['Neak Pean', 'East Mebon', 'Preah Khan', 'Banteay Samré', 'Pre Rup']
  },
  {
    id: '26',
    name: 'East Mebon',
    province: 'Siem Reap',
    type: 'temple',
    description: 'A 10th-century temple built by King Rajendravarman, located on what was once an artificial island in the now-dry East Baray reservoir. It is known for its five towers arranged in a quincunx pattern and its impressive, life-sized elephant sculptures at the corners of its tiers.',
    image: 'https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/06/91/d2/34.jpg',
    images: [
      'https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/06/91/d2/34.jpg',
      'https://mysiemreaptours.com/wp-content/uploads/2023/08/Beat-the-Heat-The-Best-Times-to-Visit-the-Eastern-Mebon-Temple-Eastern-Mebon-Temple-Opening-Time.jpg',
      'https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/06/91/d2/33.jpg',
      'https://www.iamthetraveller.com/wp-content/uploads/2017/09/day-1-18-east-mebon-magnificent-view_siem-reap_cambodia.jpg',
      'https://www.mediastorehouse.com.au/p/467/east-mebon-temple-ruins-dating-953-13925218.jpg.webp',
      'https://img.freepik.com/premium-photo/east-mebon-mount-temple-was-erected-honor-god-shiva-temple-khmer-civilization-located-territory-angkor-cambodia_556412-6461.jpg'
    ],
    rating: 4.6,
    location: { lat: 13.4458, lng: 103.9194 },
    highlights: ['Life-sized elephant sculptures', 'Island temple concept (formerly)', '10th-century architecture', 'Five-tower quincunx layout', 'Views of the surrounding area'],
    bestTimeToVisit: 'November to March (dry season)',
    entryFee: 'Included in Angkor Pass',
    duration: '45-60 minutes',
    difficulty: 'Easy',
    facilities: ['Parking area', 'Stairs to upper levels', 'Vendors for drinks/snacks nearby'],
    nearbyAttractions: ['Pre Rup', 'Ta Som', 'Neak Pean', 'Banteay Samré', 'Srah Srang']
  },
  {
    id: '27',
    name: 'Srah Srang',
    province: 'Siem Reap',
    type: 'cultural',
    description: 'Known as the "Royal Bath," Srah Srang is a large baray (reservoir) with an elegant, multi-tiered landing stage on its western side. Originally created in the 10th century and later remodeled by Jayavarman VII, it is a popular and serene spot to watch the sunrise over the water, offering a peaceful alternative to the crowds at Angkor Wat.',
    image: 'https://angkorfocus.com/userfiles/thumbs/srah-srang-siem-reap.jpg',
    images: [
      'https://angkorfocus.com/userfiles/thumbs/srah-srang-siem-reap.jpg',
      'https://angkorfocus.com/userfiles/attraction-Srah-Srang-Tours.jpg',
      'https://visitlocaltravel.com/blog/wp-content/uploads/2024/07/Srah-Srang-Bathing-Pool.png',
      'https://visitlocaltravel.com/blog/wp-content/uploads/2024/07/Srah-Srang.png',
      'https://www.destinationcambodge.com/wp-content/uploads/2021/07/Srah-Srang-1-1280x720.jpg'
    ],
    rating: 4.6,
    location: { lat: 13.4286, lng: 103.8986 },
    highlights: ['Popular sunrise spot', 'Royal Bathing Pool', 'Sandstone landing stage with naga balustrades', 'Serene water views', 'Less crowded than Angkor Wat for sunrise'],
    bestTimeToVisit: 'Sunrise, November to March (dry season)',
    entryFee: 'Included in Angkor Pass',
    duration: '30-45 minutes',
    difficulty: 'Easy',
    facilities: ['Parking area', 'Viewing platform', 'Vendors for coffee/breakfast nearby'],
    nearbyAttractions: ['Banteay Kdei', 'Ta Prohm', 'Pre Rup', 'Angkor Wat', 'Angkor Thom']
  },
  {
    id: '28',
    name: 'Prasat Kravan',
    province: 'Siem Reap',
    type: 'temple',
    description: 'A small but remarkable 10th-century temple consisting of five reddish brick towers on a common terrace. Prasat Kravan is unique for its large and detailed bas-reliefs of Vishnu and Lakshmi carved into the interior brick walls, a rare feature in Khmer architecture. It was dedicated to Vishnu and built by high court officials rather than a king.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/b/bf/Prasat_Kravan%2C_Angkor%2C_Camboya%2C_2013-08-16%2C_DD_05.JPG',
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/b/bf/Prasat_Kravan%2C_Angkor%2C_Camboya%2C_2013-08-16%2C_DD_05.JPG',
      'https://www.angkor-temples-in-cambodia.com/uploads/3/0/0/4/30047791/prasat-kravan-02-600_orig.jpg',
      'https://helloangkor.com/wp-content/uploads/2021/01/HA5D4518-1.jpg',
      'https://www.renown-travel.com/images/prasat-kravan-l.jpg',
      'https://visitlocaltravel.com/blog/wp-content/uploads/2024/05/Prasat-Kravan-Temple-in-Siem-Reap.webp',
      'https://www.renown-travel.com/images/prasat-kravan-bas-relief-l.jpg',
      'https://i.natgeofe.com/n/e32a91f6-ec4e-4590-a2cc-0b946bbdfb80/NationalGeographic_1237488.jpg'
    ],
    rating: 4.5,
    location: { lat: 13.4250, lng: 103.8819 },
    highlights: ['Unique interior brick bas-reliefs', 'Dedicated to Vishnu', 'Five brick towers', '10th-century architecture'],
    bestTimeToVisit: 'November to March (dry season)',
    entryFee: 'Included in Angkor Pass',
    duration: '30-45 minutes',
    difficulty: 'Easy',
    facilities: ['Parking area', 'Walkways', 'Vendors for drinks/snacks nearby'],
    nearbyAttractions: ['Srah Srang', 'Banteay Kdei', 'Angkor Wat', 'Ta Prohm', 'Phnom Bakheng']
  },
  {
    id: '29',
    name: 'Thommanon',
    province: 'Siem Reap',
    type: 'temple',
    description: 'A small and elegant temple from the late 11th and early 12th centuries, located just east of the Victory Gate of Angkor Thom. Thommanon is a single-towered temple noted for its well-preserved and exquisite carvings of devatas (female deities), which are considered some of the finest in Angkor. It is a sister temple to the nearby Chau Say Tevoda.',
    image: 'https://guiaportuguesdeangkorwat.com/en/userfiles/thommanon.jpg',
    images: [
      'https://guiaportuguesdeangkorwat.com/en/userfiles/thommanon.jpg',
      'https://mysiemreaptours.com/wp-content/uploads/2023/07/Thommanon-Temple-Location-and-Strategic-Importance.jpg',
      'https://angkorfocus.com/userfiles/thumbs/thommanon-temple.jpg',
      'https://www.areacambodia.com/wp-content/uploads/2023/09/Thommanon-Temple-Angkor-Archeological-Park.png',
      'https://www.khmertimeskh.com/wp-content/uploads/2021/11/Thommanon-Temple-where-Gods-once-stood.jpg',
      'https://images.locationscout.net/2017/07/thommanon-cambodia.jpg?w=1080&q=60',
      'https://helloangkor.com/wp-content/uploads/2021/01/HA5D0736-1.jpg'
    ],
    rating: 4.6,
    location: { lat: 13.4469, lng: 103.8778 },
    highlights: ['Exquisite devata carvings', 'Well-preserved Angkor Wat style', 'Paired with Chau Say Tevoda', 'Elegant single tower design'],
    bestTimeToVisit: 'November to March (dry season)',
    entryFee: 'Included in Angkor Pass',
    duration: '30 minutes',
    difficulty: 'Easy',
    facilities: ['Parking area', 'Walkways', 'Vendors across the road'],
    nearbyAttractions: ['Chau Say Tevoda', 'Angkor Thom (Victory Gate)', 'Ta Keo', 'Ta Prohm', 'Bayon Temple']
  },
  {
    id: '30',
    name: 'Chau Say Tevoda',
    province: 'Siem Reap',
    type: 'temple',
    description: 'A 12th-century Hindu temple built during the reign of King Suryavarman II. It is a sister temple to the nearby Thommanon and is noted for its fine carvings of female deities (devatas) and scenes from Hindu epics like the Ramayana. The temple underwent extensive restoration, which has brought back much of its former glory.',
    image: 'https://mysiemreaptours.com/wp-content/uploads/2023/07/Chau-Say-Tevoda-Temple-Unique-Intricate-Carvings-and-Architectural-Style.jpg',
    images: [
      'https://mysiemreaptours.com/wp-content/uploads/2023/07/Chau-Say-Tevoda-Temple-Unique-Intricate-Carvings-and-Architectural-Style.jpg',
      'https://justsiemreap.com/wp-content/uploads/2018/05/chau-say-tevoda-inside-1920x1280_tw.jpg',
      'https://angkorfocus.com/userfiles/thumbs/chau-say-tevoda-temple.jpg',
      'https://helloangkor.com/wp-content/uploads/2021/01/HA5D3390.jpg',
      'https://helloangkor.com/wp-content/uploads/2021/01/HA5D9865-1.jpg',
      'https://helloangkor.com/wp-content/uploads/2021/01/IMG_20200612_102527.jpg',
      'https://justsiemreap.com/wp-content/uploads/2018/05/chau-say-tevoda-temple-ground-1920x1280_tw.jpg'
    ],
    rating: 4.5,
    location: { lat: 13.4456, lng: 103.8778 },
    highlights: ['Paired with Thommanon', 'Ramayana carvings', 'Restored 12th-century temple', 'Elegant devata figures'],
    bestTimeToVisit: 'November to March (dry season)',
    entryFee: 'Included in Angkor Pass',
    duration: '30 minutes',
    difficulty: 'Easy',
    facilities: ['Parking area', 'Walkways', 'Vendors across the road'],
    nearbyAttractions: ['Thommanon', 'Angkor Thom (Victory Gate)', 'Ta Keo', 'Ta Prohm', 'Bayon Temple']
  },
  {
    id: '31',
    name: 'Bakong Temple',
    province: 'Siem Reap',
    type: 'temple',
    description: 'The first major temple mountain of sandstone constructed by rulers of the Khmer empire at Angkor. Built in the late 9th century by King Indravarman I, it served as the official state temple of the city of Hariharalaya. Bakong is the most impressive member of the Roluos Group of temples and features a pyramid-like structure with multiple tiers.',
    image: 'https://mysiemreaptours.com/wp-content/uploads/2024/09/The-Secret-Sunset-Spot-That-Rivals-Angkor-Wat-Without-the-Crowds%E2%80%8B.jpg',
    images: [
      'https://mysiemreaptours.com/wp-content/uploads/2024/09/The-Secret-Sunset-Spot-That-Rivals-Angkor-Wat-Without-the-Crowds%E2%80%8B.jpg',
      'https://guiaportuguesdeangkorwat.com/en/userfiles/templo-de-bakong.jpg',
      'https://preview.redd.it/bakong-a-step-pyramid-temple-to-shiva-with-surrounding-v0-bsck0yavyjd81.jpg?auto=webp&s=bda284c6e41c719d86b1baedf16928f504fb7049',
      'https://www.aboutcambodiatravel.com/uploads/images/GalleryThumbs/1437-19.jpg',
      'https://mysiemreaptours.com/wp-content/uploads/2025/04/mysiemreaptours.com-Best-Tours-Including-Bakong-Temple-Cambodia-1024x740.jpg',
      'https://mysiemreaptours.com/wp-content/uploads/2024/06/Unraveling-the-Rich-History-of-Bakong.jpg',
      'https://img.traveltriangle.com/blog/wp-content/uploads/2024/06/bakong-temples.jpg',
    ],
    rating: 4.6,
    location: { lat: 13.3360, lng: 103.9740 },
    highlights: ['First major sandstone temple mountain', 'Part of the Roluos Group', '9th-century architecture', 'Active Buddhist monastery on site', 'Impressive moat and causeways'],
    bestTimeToVisit: 'November to March (dry season)',
    entryFee: 'Included in Angkor Pass (or separate Roluos Group pass)',
    duration: '1-1.5 hours',
    difficulty: 'Easy',
    facilities: ['Parking', 'Local guides', 'Souvenir and drink stalls', 'Active monastery'],
    nearbyAttractions: ['Preah Ko Temple', 'Lolei Temple', 'Tonle Sap Lake', 'Siem Reap town']
  },
  {
    id: '32',
    name: 'Lolei Temple',
    province: 'Siem Reap',
    type: 'temple',
    description: 'The northernmost temple of the Roluos Group, Lolei was built on an island in the center of the now-dry Indratataka baray in the late 9th century by Yasovarman I. It consists of four brick towers dedicated to Shiva and the king\'s ancestors. The temple is known for its well-preserved sandstone carvings and inscriptions.',
    image: 'https://www.cambotours.com/userfiles/thumbs/lolei-temple-prasat-lolei.jpg',
    images: [
      'https://www.cambotours.com/userfiles/thumbs/lolei-temple-prasat-lolei.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-s/0e/c6/d0/3e/photo5jpg.jpg',
      'https://www.angkor-temples-in-cambodia.com/uploads/3/0/0/4/30047791/lolei-01-600_orig.jpg',
      'https://angkorfocus.com/userfiles/Lolei-Temple-3.jpg',
      'https://static.wixstatic.com/media/86e751_7a267241cf38444f8fd7c4d052c7ac55~mv2.jpg/v1/fill/w_640,h_458,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/86e751_7a267241cf38444f8fd7c4d052c7ac55~mv2.jpg',
      'https://lp-cms-production.imgix.net/2023-07/500pxRF155059645.jpg?fit=crop&ar=1%3A1&w=1200&auto=format&q=75',
      'https://media.safarway.com/content/99538184-0ad0-4ffb-8286-695e98053742_lg.jpg'
    ],
    rating: 4.4,
    location: { lat: 13.3533, lng: 103.9725 },
    highlights: ['Part of the Roluos Group', 'Island temple concept (formerly)', '9th-century brick towers', 'Dedicated to royal ancestors', 'Sandstone carvings'],
    bestTimeToVisit: 'November to March (dry season)',
    entryFee: 'Included in Angkor Pass (or separate Roluos Group pass)',
    duration: '30 minutes',
    difficulty: 'Easy',
    facilities: ['Parking', 'Active monastery on site', 'Souvenir and drink stalls nearby'],
    nearbyAttractions: ['Bakong Temple', 'Preah Ko Temple', 'Siem Reap town', 'Tonle Sap Lake']
  },
  {
    id: '33',
    name: 'Preah Ko Temple',
    province: 'Siem Reap',
    type: 'temple',
    description: 'Meaning "The Sacred Bull," Preah Ko is one of the oldest temples in the Roluos Group, built by King Indravarman I in the late 9th century. It consists of six brick towers arranged in two rows, dedicated to the king\'s ancestors. The temple is renowned for its beautifully preserved stucco carvings of male and female divinities.',
    image: 'https://media-cdn.tripadvisor.com/media/photo-s/12/a0/07/a3/preah-ko-temple.jpg',
    images: [
      'https://media-cdn.tripadvisor.com/media/photo-s/12/a0/07/a3/preah-ko-temple.jpg',
      'https://angkorfocus.com/userfiles/thumbs/preah-ko-temple.jpg',
      'https://lp-cms-production.imgix.net/2023-07/LPI-26408-45.jpg?fit=crop&ar=1%3A1&w=1200&auto=format&q=75',
      'https://midlifeglobetrotter.com/wp-content/uploads/2020/03/guardian-lions-preah-ko.jpg',
      'https://www.cambotours.com/userfiles/thumbs/preah-ko-temple-stung-treng.jpg',
      'https://visitlocaltravel.com/blog/wp-content/uploads/2024/06/Preah-Ko-Temple-3.png'
    ],
    rating: 4.5,
    location: { lat: 13.3447, lng: 103.9731 },
    highlights: ['Part of the Roluos Group', 'Six brick towers', 'Dedicated to royal ancestors', 'Intricate stucco carvings', 'Early example of Khmer architecture'],
    bestTimeToVisit: 'November to March (dry season)',
    entryFee: 'Included in Angkor Pass (or separate Roluos Group pass)',
    duration: '30-45 minutes',
    difficulty: 'Easy',
    facilities: ['Parking', 'Local guides available', 'Souvenir and drink stalls'],
    nearbyAttractions: ['Bakong Temple', 'Lolei Temple', 'Siem Reap town', 'Tonle Sap Lake']
  },
  {
    id: '34',
    name: 'Beng Mealea',
    province: 'Siem Reap',
    type: 'temple',
    description: 'A sprawling jungle temple from the 12th century, Beng Mealea (meaning "lotus pond") is largely unrestored and offers a true adventure experience. Its collapsed galleries and towers, overgrown by vegetation, evoke a sense of discovery similar to how early explorers first encountered Angkor. Wooden walkways have been installed over the rubble to allow for safe exploration.',
    image: 'https://toursbyjeeps.com/wp-content/uploads/2021/06/B.jpg',
    images: [
      'https://toursbyjeeps.com/wp-content/uploads/2021/06/B.jpg',
      'https://media.tacdn.com/media/attractions-splice-spp-674x446/07/99/5e/82.jpg',
      'https://helloangkor.com/wp-content/uploads/2023/07/HA5D9211.jpg',
      'https://anywhereweroam.com/wp-content/uploads/2024/03/cambodia-travel-guides.jpg',
      'https://i0.wp.com/www.travelworldheritage.com/wp-content/uploads/2015/02/DSC06475.jpg',
      'https://www.dailyartmagazine.com/wp-content/uploads/2020/05/4dde76e392e03370d55a64ca23c31831-beng-mealea.jpeg',
      'https://i0.wp.com/www.travelworldheritage.com/wp-content/uploads/2015/02/DSC06411.jpg?resize=737%2C375',
      'https://www.pelago.com/img/products/KH-Cambodia/beng-mealea-rolous-group-and-tonle-sap-sunset-boat-cruise/3e544821-2f96-464f-90f0-7c874a7e6f80_beng-mealea-rolous-group-and-tonle-sap-sunset-boat-cruise-medium.jpg',
      'https://kampatour.com/pic/blog/images/02(2).jpg'
    ],
    rating: 4.7,
    location: { lat: 13.4750, lng: 104.2333 },
    highlights: ['Jungle temple', 'Unrestored ruins', 'Exploration experience', 'Wooden walkways', 'Angkor Wat style'],
    bestTimeToVisit: 'November to March (dry season)',
    entryFee: '$5 (separate from Angkor Pass)',
    duration: '2-3 hours',
    difficulty: 'Moderate',
    facilities: ['Parking', 'Wooden walkways', 'Local guides', 'Basic food/drink stalls', 'Restrooms'],
    nearbyAttractions: ['Koh Ker temples', 'Banteay Srei', 'Kulen Mountain']
  },
  {
    id: '35',
    name: 'Kbal Spean',
    province: 'Siem Reap',
    type: 'cultural',
    description: 'Known as the "River of a Thousand Lingas," Kbal Spean is an archaeological site featuring intricate Hindu mythological carvings in the sandstone riverbed. The site requires a moderate 1.5km uphill jungle hike to reach, passing a beautiful waterfall. The carvings, which date back to the 11th century, were meant to sanctify the water that flowed over them down to the Angkorian plains.',
    image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2e/9b/24/4f/caption.jpg?w=1200&h=-1&s=1',
    images: [
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2e/9b/24/4f/caption.jpg?w=1200&h=-1&s=1',
      'https://www.siemreap.net/wp-content/uploads/2017/11/kbal-spean.jpg',
      'https://cambotours.com/uploads/kbal-spean-temple.jpg',
      'https://helloangkor.com/wp-content/uploads/2021/01/HA5D8519-2.jpg',
      'https://cdn.getyourguide.com/img/tour/6496775cbeb4b.jpeg/98.jpg',
      'https://le-cambodge-autrement.com/images/0-0.attractions/23-kbal-spean-cambodia.JPG',
      'https://merryadventures.com/wp-content/uploads/Phnom-Kbal-Spean.jpg'
    ],
    rating: 4.6,
    location: { lat: 13.6783, lng: 104.0158 },
    highlights: ['River of a Thousand Lingas', 'Jungle hike', 'Waterfall', 'Ancient riverbed carvings', 'Hindu mythology'],
    bestTimeToVisit: 'November to April (dry season for easier hiking and clearer carvings)',
    entryFee: 'Included in Angkor Pass',
    duration: '2-3 hours (including hike)',
    difficulty: 'Moderate',
    facilities: ['Parking at the base', 'Marked hiking trail', 'Information center', 'Basic restrooms', 'Local guides available'],
    nearbyAttractions: ['Banteay Srei', 'Angkor Centre for Conservation of Biodiversity (ACCB)', 'Cambodia Landmine Museum', 'Beng Mealea']
  },
  {
    id: '36',
    name: 'Angkor National Museum',
    province: 'Siem Reap',
    type: 'cultural',
    description: 'A state-of-the-art museum dedicated to preserving and presenting the rich history and art of the Khmer civilization. The museum features eight galleries with impressive collections of artifacts from the Angkorian period, providing valuable context before or after visiting the temples themselves.',
    image: 'https://lp-cms-production.imgix.net/2023-08/iStock-991715344.jpg',
    images: [
      'https://lp-cms-production.imgix.net/2023-08/iStock-991715344.jpg',
      'https://angkornationalmuseum.com/wp-content/uploads/2022/12/Gallery-1000-Buddha-2023-1-1.jpg',
      'https://helloangkor.com/wp-content/uploads/2022/04/IMG_20220413_120639.jpg',
      'https://www.privilegefloor.com/uploads/page-gallery/national-museum-02.jpg',
      'https://i.redd.it/angkor-national-museum-v0-pe88odb0xvyd1.jpg?width=3000&format=pjpg&auto=webp&s=27e2c3ae33449dc2d39fca0f40ed22d59ded8c6f'
    ],
    rating: 4.7,
    location: { lat: 13.3700, lng: 103.8590 },
    highlights: ['Khmer artifacts', 'State-of-the-art exhibits', 'Gallery of 1,000 Buddhas', 'History of Angkor', 'Multimedia presentations'],
    bestTimeToVisit: 'Year-round, good for a rainy day or to escape midday heat',
    entryFee: '$12 (adults), audio guide extra',
    duration: '2-3 hours',
    difficulty: 'Easy',
    facilities: ['Air-conditioned galleries', 'Audio guides (multiple languages)', 'Gift shop', 'Cafe', 'Parking', 'Restrooms'],
    nearbyAttractions: ['Royal Independence Gardens', 'Siem Reap town center', 'Angkor Wat', 'T Galleria by DFS']
  },
  {
    id: '37',
    name: 'War Museum Cambodia',
    province: 'Siem Reap',
    type: 'cultural',
    description: 'The War Museum Cambodia in Siem Reap offers a unique and sobering insight into the turmoil of Cambodia\'s civil war. It features a vast collection of military hardware, including tanks, artillery, and aircraft, as well as a wide array of small arms and landmines. Many of the guides are war veterans who share personal stories, providing a poignant and educational experience.',
    image: 'https://toursbyjeeps.com/wp-content/uploads/2022/02/Museum-Cover.jpg',
    images: [
      'https://toursbyjeeps.com/wp-content/uploads/2022/02/Museum-Cover.jpg',
      'https://t.plnspttrs.net/02675/997003_32c494cc8a_280.jpg',
      'https://t.plnspttrs.net/02675/997003_32c494cc8a_280.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/0/03/Cambodian_Civil_War-era_T-54_or_Type_59.jpg',
      'https://i0.wp.com/www.heliotropicmango.com/wp-content/uploads/2020/02/War-Tank-scaled.jpeg?fit=2560%2C1920&ssl=1',
      'https://data.agatetravel.com/images/photogallery/2021/cambodia-war-museum.jpg',
      'https://cdn.getyourguide.com/image/format=auto,fit=crop,gravity=auto,quality=60,dpr=1/tour_img/4a2894860998092981c00593a77c2be2191bd4bb2fdd19c33276a8dd75d70fd3.jpg',
      'https://cdn.getyourguide.com/image/format=auto,fit=crop,gravity=auto,quality=60,width=450,height=450,dpr=2/tour_img/13e40eb1581298309718787eb4f170e8c81c3f1ef5bc40a5bb75898cbb224d17.jpg'
    ],
    rating: 4.5,
    location: { lat: 13.3733, lng: 103.8150 },
    highlights: ['Civil war history', 'Outdoor military hardware collection', 'Landmine education', 'Personal stories from guides', 'Hands-on exhibits'],
    bestTimeToVisit: 'Year-round',
    entryFee: '$5 (adults)',
    duration: '1-2 hours',
    difficulty: 'Easy',
    facilities: ['Guided tours', 'Parking', 'Gift shop', 'Outdoor exhibits', 'Restrooms'],
    nearbyAttractions: ['Angkor National Museum', 'Siem Reap town center', 'Phnom Krom', 'Angkor Wat']
  },
  {
    id: '39',
    name: 'APOPO Visitor Center',
    province: 'Siem Reap',
    type: 'cultural',
    description: 'The APOPO Visitor Center showcases the innovative HeroRAT program, where trained African giant pouched rats detect landmines and tuberculosis. Cambodia, heavily affected by landmines from decades of conflict, benefits greatly from these "HeroRATs" that can search an area the size of a tennis court in 30 minutes - a task that would take a human with a metal detector up to 4 days.',
    image: 'https://apopo.org/wp-content/uploads/2022/06/New-rat-recruits-in-SiemReap.jpeg',
    images: [
      'https://apopo.org/wp-content/uploads/2022/06/New-rat-recruits-in-SiemReap.jpeg',
      'https://apopo.org/wp-content/uploads/2024/05/KAT_1668-VC-copia-1-scaled.jpg',
      'https://media.assettype.com/outlooktraveller/2024-11-02/cfvq3dxy/shutterstock2508987863.jpg?w=1200&h=675&auto=format%2Ccompress&fit=max&enlarge=true',
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2e/2c/08/16/caption.jpg?w=900&h=500&s=1',
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/6b/46/22/apopo-team-is-happy-to.jpg?w=900&h=500&s=1'
    ],
    rating: 4.8,
    location: { lat: 13.3584, lng: 103.8608 },
    highlights: ['Live HeroRAT demonstrations', 'Landmine detection program', 'Tuberculosis detection program', 'Interactive exhibits', 'Conservation efforts'],
    bestTimeToVisit: 'Year-round, morning demonstrations are best',
    entryFee: '$5 (adults), free for children under 12',
    duration: '1-2 hours',
    difficulty: 'Easy',
    facilities: ['Guided tours', 'Gift shop', 'Information center', 'Restrooms', 'Wheelchair accessible'],
    nearbyAttractions: ['Angkor National Museum', 'Siem Reap town center', 'Cambodia Landmine Museum', 'Pub Street']
  },
  {
    id: '40',
    name: 'Angkor Panorama Museum',
    province: 'Siem Reap',
    type: 'cultural',
    description: 'The Angkor Panorama Museum is a modern museum in Siem Reap dedicated to the history and grandeur of the Angkor civilization. Its highlight is a massive 360-degree panoramic painting depicting scenes from the Angkor era, including daily life, battles, and temple construction. The museum also features 3D models, multimedia exhibits, and a rooftop viewing area.',
    image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/06/b8/b2/dsc-0829-largejpg.jpg?w=1200&h=-1&s=1',
    images: [
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/06/b8/b2/dsc-0829-largejpg.jpg?w=1200&h=-1&s=1',
      'https://cdn.i-scmp.com/sites/default/files/styles/landscape_250_99/public/2016/01/21/49a7406b99a64c13261a89f03e5903e8.jpg?itok=1qwyQ5-L',
      'https://www.shutterstock.com/editorial/image-editorial/Nez5k044Mdj7kc03ODU0NQ==/exterior-view-angkor-panorama-museum-siem-reap-440nw-7929571k.jpg',
      'https://www.southeastasianarchaeology.com/wp-content/uploads/2016/02/26panorama-span2-master1050-v2.jpg',
      'https://media.urbanistnetwork.com/saigoneer/article-images/legacy/M2nt8Gqb.jpg'
    ],
    rating: 4.3,
    location: { lat: 13.3742, lng: 103.8578 },
    highlights: [
      '360-degree panoramic painting',
      'Angkor history exhibits',
      '3D models and multimedia',
      'Rooftop viewing area'
    ],
    bestTimeToVisit: 'Year-round, especially midday to escape the heat',
    entryFee: '$15 (adults), discounts for children and groups',
    duration: '1-2 hours',
    difficulty: 'Easy',
    facilities: [
      'Air-conditioned galleries',
      'Gift shop',
      'Cafe',
      'Parking',
      'Restrooms',
      'Elevator'
    ],
    nearbyAttractions: [
      'Angkor National Museum',
      'Royal Independence Gardens',
      'Siem Reap town center',
      'Angkor Wat'
    ]
  },
  {
    id: '41',
    name: 'Phnom Kulen National Park',
    province: 'Siem Reap',
    type: 'nature',
    description: 'Phnom Kulen National Park is a sacred mountain plateau and protected area northeast of Siem Reap. It is revered as the birthplace of the ancient Khmer Empire and is famous for its lush jungle, waterfalls, ancient temples, and the River of a Thousand Lingas. The park is a popular pilgrimage site and offers a refreshing escape from the heat, with opportunities for hiking, swimming, and exploring historical sites.',
    image: 'https://www.siemreap.net/wp-content/uploads/2017/12/phnom-kulen-waterfall.jpg',
    images: [
      'https://www.siemreap.net/wp-content/uploads/2017/12/phnom-kulen-waterfall.jpg',
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/30/03/24/ec/caption.jpg?w=900&h=500&s=1',
      'https://dynamic-media.tacdn.com/media/photo-o/2f/ab/5f/68/caption.jpg?w=700&h=500&s=1',
      'https://visitlocaltravel.com/blog/wp-content/uploads/2023/12/Phom-Kulen.png',
      'https://visitlocaltravel.com/blog/wp-content/uploads/2023/12/Phom-Kulen.png',
      'https://powertraveller.com/wp-content/uploads/2024/10/1_unveiling-the-mystical-beauty-of-phnom-kulen-national-park.jpg',
      'https://res.cloudinary.com/tourhq/image/upload/fl_progressive,f_auto,h_507,w_900,g_auto,c_fill,q_auto/aeqrrvn8gi002jqak3qy'
    ],
    rating: 4.7,
    location: { lat: 13.6281, lng: 104.0450 },
    highlights: [
      'Waterfalls for swimming',
      'River of a Thousand Lingas',
      'Sacred reclining Buddha',
      'Jungle hiking trails',
      'Ancient temples and carvings'
    ],
    bestTimeToVisit: 'November to March (dry season, cooler weather)',
    entryFee: '$20 (foreigners), free for Cambodians',
    duration: 'Full day',
    difficulty: 'Moderate',
    facilities: [
      'Parking',
      'Restrooms',
      'Food stalls',
      'Picnic areas',
      'Local guides available'
    ],
    nearbyAttractions: [
      'Beng Mealea',
      'Banteay Srei',
      'Kbal Spean',
      'River of a Thousand Lingas'
    ]
  },
  {
    id: '42',
    name: 'Chong Khneas',
    province: 'Siem Reap',
    type: 'nature',
    description: 'Chong Khneas is a floating village at the edge of Tonle Sap Lake, famous for its stilted houses, floating schools, and vibrant local life on the water. It serves as the main gateway for boat trips onto the lake and offers a unique glimpse into the lifestyle of communities who depend on the lake for their livelihood.',
    image: 'https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/12/5c/51/b0.jpg',
    images: [
      'https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/12/5c/51/b0.jpg',
      'https://angkorfocus.com/userfiles/attraction-Chong-Kneas-Floating-Village-View.jpg',
      'https://angkorfocus.com/userfiles/attraction-Chong-Kneas-Floating-Village-View.jpg',
      'hhttps://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/30/a0/b6/floating-village-at-tonle.jpg?w=900&h=500&s=1',
      'https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/12/5c/51/b5.jpg'
    ],
    rating: 4.2,
    location: { lat: 13.2736, lng: 103.8500 },
    highlights: [
      'Floating village life',
      'Boat tours on Tonle Sap Lake',
      'Stilted houses and floating schools',
      'Birdwatching opportunities',
      'Local fish and crocodile farms'
    ],
    bestTimeToVisit: 'June to October (wet season, higher water levels)',
    entryFee: '$20-25 (boat tour, varies by operator)',
    duration: '2-3 hours',
    difficulty: 'Easy',
    facilities: [
      'Boat rentals',
      'Parking at the pier',
      'Souvenir stalls',
      'Local restaurants',
      'Restrooms at the dock'
    ],
    nearbyAttractions: [
      'Tonle Sap Lake',
      'Phnom Krom Temple',
      'Siem Reap town',
      'Prek Toal Bird Sanctuary'
    ]
  },
  {
    id: '43',
    name: 'Kampong Phluk',
    province: 'Siem Reap',
    type: 'nature',
    description: 'Kampong Phluk is a traditional stilted village on the floodplains of Tonle Sap Lake, renowned for its unique wooden houses built high above the water. The village is surrounded by a flooded mangrove forest, which can be explored by boat, offering a glimpse into the daily life of fishing communities and the rich biodiversity of the area.',
    image: 'https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/15/39/f5/3f.jpg',
    images: [
      'https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/15/39/f5/3f.jpg',
      'https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/15/39/f5/3f.jpg',
      'https://fareasttravels.com/wp-content/uploads/2015/01/Kampong-Pluk-6.jpg',
      'https://www.awaygowe.com/wp-content/uploads/2012/11/cambodia-kompong-phluk-featured.webp',
      'https://www.greeneratravel.com/userfiles/850phluk.jpg'
    ],
    rating: 4.4,
    location: { lat: 13.2175, lng: 104.0222 },
    highlights: [
      'Stilted wooden houses',
      'Flooded mangrove forest',
      'Traditional fishing village life',
      'Boat tours and canoe rides',
      'Seasonal floating school and pagoda'
    ],
    bestTimeToVisit: 'June to October (wet season for high water and mangrove exploration)',
    entryFee: '$20-25 (boat tour, varies by operator)',
    duration: '2-3 hours',
    difficulty: 'Easy',
    facilities: [
      'Boat rentals',
      'Parking at the pier',
      'Local restaurants',
      'Restrooms at the dock',
      'Guided tours'
    ],
    nearbyAttractions: [
      'Tonle Sap Lake',
      'Chong Khneas',
      'Phnom Krom Temple',
      'Prek Toal Bird Sanctuary',
      'Siem Reap town'
    ]
  },
  {
    id: '44',
    name: 'Kampong Khleang',
    province: 'Siem Reap',
    type: 'nature',
    description: 'Kampong Khleang is the largest stilted village on the Tonle Sap Lake floodplain, located about 55km from Siem Reap. Unlike the more touristy floating villages, Kampong Khleang offers an authentic glimpse into the daily life of Cambodian fishing communities. The village features impressive stilted wooden houses, floating homes during the wet season, and is surrounded by flooded forests and rice paddies. Visitors can explore the village by boat, interact with locals, and witness the seasonal transformation of the landscape.',
    image: 'https://media.tacdn.com/media/attractions-splice-spp-674x446/0b/d7/ed/20.jpg',
    images: [
      'https://media.tacdn.com/media/attractions-splice-spp-674x446/0b/d7/ed/20.jpg',
      'https://silbersteintravel.wordpress.com/wp-content/uploads/2020/01/img_0925.jpg?w=1024',
      'https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/09/9d/e0/0c.jpg',
      'https://www.audleytravel.com/-/media/images/home/southeast-asia/cambodia/activities/gettyimages_1168263993_kompong_khleang_3000x1000.jpg',
      'https://www.audleytravel.com/-/media/images/home/southeast-asia/cambodia/activities/gettyimages_1168263993_kompong_khleang_3000x1000.jpg',
      'https://storage.googleapis.com/inspitrip-blog/global/2018/06/32471084_204936846782116_4923788187882487808_n.jpg',
      'https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/0b/87/ce/be.jpg',
      'https://www.centralsuiteresidence.com/userfiles/image/floating-villages-tonle-sap-lake-and-mangrove-forest-tour-2-330035_1513699409.jpg'
    ],
    rating: 4.5,
    location: { lat: 13.2125, lng: 104.1011 },
    highlights: [
      'Largest stilted village on Tonle Sap',
      'Authentic local life',
      'Floating houses (wet season)',
      'Flooded forests and rice paddies',
      'Boat tours through the village'
    ],
    bestTimeToVisit: 'June to October (wet season for floating houses), November to May (dry season for stilted houses)',
    entryFee: '$20-25 (boat tour, varies by operator)',
    duration: '3-4 hours',
    difficulty: 'Easy',
    facilities: [
      'Boat rentals',
      'Parking at the pier',
      'Local restaurants',
      'Restrooms at the dock',
      'Guided tours'
    ],
    nearbyAttractions: [
      'Tonle Sap Lake',
      'Kampong Phluk',
      'Chong Khneas',
      'Siem Reap town',
      'Prek Toal Bird Sanctuary'
    ]
  },
  {
    id: '45',
    name: 'Angkor Botanical Garden',
    province: 'Siem Reap',
    type: 'nature',
    description: 'Angkor Botanical Garden is a lush, landscaped garden in Siem Reap, dedicated to the conservation and display of Cambodia’s native flora. The garden features themed zones, rare plant collections, orchid houses, butterfly gardens, and tranquil walking paths. It offers educational exhibits on biodiversity and is a peaceful retreat for nature lovers, families, and photographers.',
    image: 'https://morethantemples.com/wp-content/uploads/2024/10/Angkor-Botanical-Gardens-Siem-Reap-near-Angkor-Wat-12-1024x768.webp',
    images: [
      'https://morethantemples.com/wp-content/uploads/2024/10/Angkor-Botanical-Gardens-Siem-Reap-near-Angkor-Wat-12-1024x768.webp',
      'https://www.livingcambodia.asia/media/images/templation/entries/activities/angkor-botanical-garden/angkorbotanicalgardenfeb202300.jpg',
      'https://morethantemples.com/wp-content/uploads/2024/10/462210106_939511184863856_162079455945589840_n-Large-1024x768.webp',
      'https://morethantemples.com/wp-content/uploads/2024/10/457469931_912477270900581_2196177160340324315_n-Large-1-1024x768.webp',
      'https://www.livingcambodia.asia/m/i/images/templation/entries/activities/angkor-botanical-garden/70551/angkor-botanical-garden-082022_90d9d6be7fdafea1314e05dfa5e7fe97.jpg',
      'https://www.khmertimeskh.com/wp-content/uploads/2024/03/79060.jpg'
    ],
    rating: 4.5,
    location: { lat: 13.3747, lng: 103.8662 },
    highlights: [
      'Native Cambodian flora',
      'Orchid and butterfly gardens',
      'Educational exhibits',
      'Peaceful walking trails',
      'Family-friendly activities'
    ],
    bestTimeToVisit: 'November to March (dry season), mornings or late afternoons for cooler weather',
    entryFee: '$10 (adults), $5 (children under 12)',
    duration: '1-2 hours',
    difficulty: 'Easy',
    facilities: [
      'Parking',
      'Restrooms',
      'Cafe',
      'Gift shop',
      'Guided tours',
      'Picnic areas'
    ],
    nearbyAttractions: [
      'Angkor National Museum',
      'Royal Independence Gardens',
      'Siem Reap town center',
      'Angkor Wat'
    ]
  },
  {
    id: '46',
    name: 'Phare, The Cambodian Circus',
    province: 'Siem Reap',
    type: 'cultural',
    description: 'Phare, The Cambodian Circus is a world-renowned performing arts show in Siem Reap, blending traditional and modern theater, music, dance, and acrobatics. Created by graduates of Phare Ponleu Selpak, a non-profit arts school, the circus tells uniquely Cambodian stories through energetic performances and stunning visual artistry. It is a must-see for visitors seeking an authentic and entertaining cultural experience.',
    image: 'https://www.remotelands.com/travelogues/app/uploads/2020/02/Cambodian-Circus-1.jpg',
    images: [
      'https://www.remotelands.com/travelogues/app/uploads/2020/02/Cambodian-Circus-1.jpg',
      'https://www.siemreapshuttle.com/wp-content/uploads/2022/08/Phare-Circus-SiemreapShuttle.jpg',
      'https://www.areacambodia.com/wp-content/uploads/2023/09/Phare-Circus-The-Cambodian-Circus-Show-in-Siem-Reap.jpg',
      'https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2024/07/16114032/Featured-Inside-1-10-1600x900.jpg',
      'https://pharecircus.org/wp-content/uploads/2014/11/IMG_9014_opt-1.webp',
      'https://www.yourtourdesk.com/wp-content/uploads/2024/03/Phare-the-Cambodian-Circus-5.jpg',
      'https://media.tacdn.com/media/attractions-splice-spp-674x446/07/99/31/0c.jpg',
      'https://media.cnn.com/api/v1/images/stellar/prod/130906113122-cambodia-phare-circus-siem-reap-4.jpg?q=w_1200,h_801,x_0,y_0,c_fill/h_447'
    ],
    rating: 4.9,
    location: { lat: 13.3617, lng: 103.8597 },
    highlights: [
      'Acrobatics and live music',
      'Original Cambodian stories',
      'Social enterprise supporting local youth',
      'Energetic and family-friendly performances'
    ],
    bestTimeToVisit: 'Evenings, year-round (shows typically start at 8:00 PM)',
    entryFee: '$18-38 (varies by seat category)',
    duration: '1 hour',
    difficulty: 'Easy',
    facilities: [
      'Parking',
      'Souvenir shop',
      'Snack bar',
      'Restrooms',
      'Wheelchair accessible'
    ],
    nearbyAttractions: [
      'Siem Reap town center',
      'Angkor National Museum',
      'Pub Street',
      'Angkor Wat'
    ]
  },
  {
    id: '47',
    name: 'Little Red Fox Espresso',
    province: 'Siem Reap',
    type: 'cafe',
    description: 'A cozy cafe known for its excellent coffee, creative drinks, and friendly atmosphere. Little Red Fox Espresso is a favorite among locals and tourists alike, offering a range of espresso-based beverages and locally sourced teas.',
    image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/7e/a1/4f/the-little-red-fox-espresso.jpg?w=900&h=500&s=1',
    images: [
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/7e/a1/4f/the-little-red-fox-espresso.jpg?w=900&h=500&s=1',
      'https://leightontravels.com/wp-content/uploads/2020/02/Little-Red-Fox-Espresso-Siem-Reap.jpeg',
      'https://thelittleredfoxespresso.com/wp-content/uploads/2021/10/Cafe-Siem-Reap-The-Little-Red-Fox-Espresso-Door-Logo-scaled.jpg',
      'https://thelittleredfoxespresso.com/wp-content/uploads/2021/10/Cafe-The-Little-Red-Fox-Espresso-Coffee-Beans.jpg'
    ],
    rating: 4.8,
    location: { lat: 13.3633, lng: 103.8590 },
    highlights: ['Specialty coffee', 'Creative drinks', 'Friendly atmosphere', 'Locally sourced teas'],
    bestTimeToVisit: 'Morning or afternoon',
    entryFee: 'Free (pay for drinks)',
    duration: '1-2 hours',
    difficulty: 'Easy',
    facilities: ['Wi-Fi', 'Outdoor seating', 'Air-conditioned indoor seating'],
    nearbyAttractions: ['Pub Street', 'Angkor National Museum', 'Siem Reap town center']
  },
  {
    id: '48',
    name: 'The Hive Cafe',
    province: 'Siem Reap',
    type: 'cafe',
    description: 'A trendy cafe offering a variety of coffee, smoothies, and healthy food options. The Hive Cafe is popular for its relaxed vibe and focus on sustainability, making it a great spot for brunch or a quick coffee break.',
    image: 'https://loveswah.com/wp-content/uploads/the-hive-siem-reap-700x490.jpg',
    images: [
      'https://loveswah.com/wp-content/uploads/the-hive-siem-reap-700x490.jpg',
      'https://www.rustycompass.com/uploads/destinations/the-hive-cafe-siem-reap-2-of-4_14295849707.jpg'
    ],
    rating: 4.7,
    location: { lat: 13.3640, lng: 103.8605 },
    highlights: ['Sustainable practices', 'Healthy food options', 'Relaxed vibe', 'Great brunch menu'],
    bestTimeToVisit: 'Morning or lunchtime',
    entryFee: 'Free (pay for food and drinks)',
    duration: '1-2 hours',
    difficulty: 'Easy',
    facilities: ['Wi-Fi', 'Outdoor seating', 'Air-conditioned indoor seating'],
    nearbyAttractions: ['Pub Street', 'Angkor National Museum', 'Siem Reap town center']
  },
  {
    id: '49',
    name: 'Footprint Cafes',
    province: 'Siem Reap',
    type: 'cafe',
    description: 'A socially responsible cafe that reinvests profits into local community projects. Footprint Cafes offers delicious coffee, international cuisine, and a welcoming space for travelers and locals to connect.',
    image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/49/fb/0f/20180613-113544-largejpg.jpg?w=800&h=500&s=1',
    images: [
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/49/fb/0f/20180613-113544-largejpg.jpg?w=800&h=500&s=1',
      'https://myindie.world/wp-content/uploads/2024/06/Screenshot-2023-06-28-at-11.14.57-PM.png',
      'https://myindie.world/wp-content/uploads/2024/06/Screenshot-2023-06-28-at-11.14.57-PM.png',
      'https://www.khmertimeskh.com/wp-content/uploads/2022/02/33957.jpg'
    ],
    rating: 4.6,
    location: { lat: 13.3625, lng: 103.8600 },
    highlights: ['Socially responsible', 'Community reinvestment', 'Delicious coffee', 'International cuisine'],
    bestTimeToVisit: 'Morning or afternoon',
    entryFee: 'Free (pay for food and drinks)',
    duration: '1-2 hours',
    difficulty: 'Easy',
    facilities: ['Wi-Fi', 'Outdoor seating', 'Air-conditioned indoor seating'],
    nearbyAttractions: ['Pub Street', 'Angkor National Museum', 'Siem Reap town center']
  },
  {
    id: '50',
    name: 'Sister Srey Cafe',
    province: 'Siem Reap',
    type: 'cafe',
    description: 'A charming cafe with a mission to support local youth through employment and training. Sister Srey Cafe serves excellent coffee, healthy meals, and offers a cozy atmosphere overlooking the river.',
    image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjZL_R9ZQqzK3F1BAM9spdJSYvC9w0xfSE_PoK1I1cAFOtL-wthjz0ve5qgCO8fXwiZuunxx2GmTttiIdTDu1XgYaCcNh1DByHO53Eam7cmJQQySsIJOSMDNrApeOqwUQ0V2KMOg0WoyO6c/s1600/L9994732-001.jpg',
    images: [
      'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjZL_R9ZQqzK3F1BAM9spdJSYvC9w0xfSE_PoK1I1cAFOtL-wthjz0ve5qgCO8fXwiZuunxx2GmTttiIdTDu1XgYaCcNh1DByHO53Eam7cmJQQySsIJOSMDNrApeOqwUQ0V2KMOg0WoyO6c/s1600/L9994732-001.jpg',
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/5d/c5/26/perfect-place-to-chill.jpg?w=900&h=500&s=1',
      'https://morethantemples.com/wp-content/uploads/2025/02/Sister-Srey-Cafe-Siem-Reap-featured-image.webp',
      'https://d1r9hss9q19p18.cloudfront.net/uploads/2019/11/DSC05522.jpg',
      'https://d1r9hss9q19p18.cloudfront.net/uploads/2019/11/DSC05527.jpg'
    ],
    rating: 4.8,
    location: { lat: 13.3630, lng: 103.8610 },
    highlights: ['Support for local youth', 'Healthy meals', 'Riverfront location', 'Cozy atmosphere'],
    bestTimeToVisit: 'Morning or lunchtime',
    entryFee: 'Free (pay for food and drinks)',
    duration: '1-2 hours',
    difficulty: 'Easy',
    facilities: ['Wi-Fi', 'Outdoor seating', 'Air-conditioned indoor seating'],
    nearbyAttractions: ['Pub Street', 'Angkor National Museum', 'Siem Reap town center']
  }
];
