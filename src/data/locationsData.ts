export interface Location {
  id: string;
  name: string;
  location: string;
  description: string;
  longDescription: string;
  image: string;
  modelPath: string;
  latitude: number;
  longitude: number;
  famousFor: string[];
  nearbyAttractions: string[];
  bestTimeToVisit: string;
  historicalFacts: string[];
}

export const locationsData: Location[] = [
  {
    id: "taj-mahal",
    name: "Taj Mahal",
    location: "Agra, Uttar Pradesh",
    description: "The iconic ivory-white marble mausoleum on the south bank of the Yamuna river, built by Emperor Shah Jahan in memory of his wife Mumtaz Mahal.",
    longDescription: "The Taj Mahal is an ivory-white marble mausoleum on the south bank of the Yamuna river in the Indian city of Agra. It was commissioned in 1632 by the Mughal emperor, Shah Jahan, to house the tomb of his favorite wife, Mumtaz Mahal. The tomb is the centerpiece of a 17-hectare complex, which includes a mosque and a guest house, and is set in formal gardens bounded on three sides by a crenellated wall. The Taj Mahal is widely recognized as 'the jewel of Muslim art in India' and remains one of the world's most celebrated structures and a symbol of India's rich history.",
    image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
    modelPath: "/models/taj-mahal.glb",
    latitude: 27.1751,
    longitude: 78.0421,
    famousFor: [
      "Stunning white marble architecture",
      "One of the Seven Wonders of the World",
      "Symbol of eternal love",
      "Intricate inlay work and calligraphy",
      "Perfectly symmetrical design"
    ],
    nearbyAttractions: [
      "Agra Fort",
      "Fatehpur Sikri",
      "Mehtab Bagh",
      "Itimad-ud-Daulah's Tomb",
      "Akbar's Tomb"
    ],
    bestTimeToVisit: "October to March when the weather is pleasant",
    historicalFacts: [
      "Built between 1632 and 1653",
      "Took over 20,000 artisans to complete",
      "The main dome is 73 meters tall",
      "Changes color throughout the day based on sunlight",
      "Declared a UNESCO World Heritage Site in 1983"
    ]
  },
  {
    id: "jaipur-city-palace",
    name: "City Palace",
    location: "Jaipur, Rajasthan",
    description: "A stunning complex of courtyards, gardens, and buildings in the heart of Jaipur, showcasing a blend of Rajasthani and Mughal architecture.",
    longDescription: "The City Palace, Jaipur was established at the same time as the city of Jaipur, by Maharaja Sawai Jai Singh II, who moved his court to Jaipur from Amber, in 1727. The palace complex, which is located northeast of the centre of the grid-patterned Jaipur city, incorporates an impressive and vast array of courtyards, gardens and buildings. The palace was built between 1729 and 1732, initially by Sawai Jai Singh II, and additions were made through the centuries by his successors. It once served as the ceremonial and administrative seat of the Maharaja of Jaipur. Today, it houses a museum but a large part of it is still a royal residence.",
    image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    modelPath: "/models/jaipur-palace.glb",
    latitude: 26.9255,
    longitude: 75.8236,
    famousFor: [
      "Blend of Rajasthani and Mughal architecture",
      "Peacock Gate with intricate designs",
      "Mubarak Mahal (Welcome Palace)",
      "Chandra Mahal (still a royal residence)",
      "Extensive collection of royal costumes and artifacts"
    ],
    nearbyAttractions: [
      "Hawa Mahal",
      "Jantar Mantar",
      "Amber Fort",
      "Jal Mahal",
      "Nahargarh Fort"
    ],
    bestTimeToVisit: "October to March when the weather is cool and pleasant",
    historicalFacts: [
      "Built by Maharaja Sawai Jai Singh II, the founder of Jaipur",
      "Construction began in 1729 and continued for many years",
      "The palace complex occupies one-seventh of the walled city area",
      "Features a unique blend of Rajput and Mughal architectural styles",
      "The Chandra Mahal has seven floors, each with a distinctive name"
    ]
  },
  {
    id: "varanasi-ghats",
    name: "Varanasi Ghats",
    location: "Varanasi, Uttar Pradesh",
    description: "The sacred steps leading to the banks of the River Ganges, where spiritual ceremonies, yoga, and cremations take place in India's holiest city.",
    longDescription: "The Ghats of Varanasi are riverfront steps leading to the banks of the River Ganges. The city has 88 ghats, most of which are used for bathing and puja ceremony, while a few are used exclusively as cremation sites. Most of the ghats were built after 1700 AD, when the city was part of the Maratha Empire. The ghats are an integral complement to the Hindu concept of divinity represented in physical, metaphysical, and supernatural elements. Varanasi is also known as the city of ghats. Morning boat rides on the Ganges across the ghats is a popular visitor attraction.",
    image: "https://images.unsplash.com/photo-1561361058-c24cecae35ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    modelPath: "/models/varanasi-ghats.glb",
    latitude: 25.3176,
    longitude: 83.0064,
    famousFor: [
      "Spiritual rituals and ceremonies",
      "Ganga Aarti (evening prayer ceremony)",
      "Cremation ghats (Manikarnika and Harishchandra)",
      "Sunrise boat rides on the Ganges",
      "Ancient temples and religious practices"
    ],
    nearbyAttractions: [
      "Kashi Vishwanath Temple",
      "Sarnath (Buddha's first sermon site)",
      "Ramnagar Fort",
      "Banaras Hindu University",
      "Alamgir Mosque"
    ],
    bestTimeToVisit: "October to March when the weather is pleasant and major festivals occur",
    historicalFacts: [
      "Varanasi is one of the oldest continuously inhabited cities in the world",
      "Mark Twain said: 'Banaras is older than history, older than tradition, older even than legend'",
      "The city has been a cultural and religious center for thousands of years",
      "Many ghats were rebuilt in the 18th century under Maratha patronage",
      "Dashashwamedh Ghat is the most prominent and popular of all the ghats"
    ]
  },
  {
    id: "kerala-backwaters",
    name: "Kerala Backwaters",
    location: "Alleppey, Kerala",
    description: "A network of interconnected canals, rivers, lakes, and inlets formed by more than 900 km of waterways, famous for houseboat cruises and serene landscapes.",
    longDescription: "The Kerala backwaters are a network of interconnected canals, rivers, lakes, and inlets, a labyrinthine system formed by more than 900 km of waterways. The backwaters have a unique ecosystem - freshwater from the rivers meets the seawater from the Arabian Sea. In certain areas, such as the Vembanad Kayal, which is the largest backwater stretch in Kerala, it supports a unique wetland ecosystem. A houseboat cruise in these backwaters is a delightful experience. The houseboats, known as Kettuvallams, are modified cargo vessels which were traditionally used to transport rice and spices.",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    modelPath: "/models/kerala-backwaters.glb",
    latitude: 9.4981,
    longitude: 76.3388,
    famousFor: [
      "Houseboat (Kettuvallam) cruises",
      "Lush green landscapes and coconut groves",
      "Traditional village life along the waterways",
      "Rich biodiversity and bird watching",
      "Ayurvedic treatments and resorts"
    ],
    nearbyAttractions: [
      "Alleppey Beach",
      "Kumarakom Bird Sanctuary",
      "Marari Beach",
      "Pathiramanal Island",
      "St. Mary's Church"
    ],
    bestTimeToVisit: "September to March when the weather is pleasant and ideal for houseboat cruises",
    historicalFacts: [
      "The backwaters have been used for transportation for centuries",
      "Traditional houseboats (Kettuvallams) were originally used to transport rice and spices",
      "The Nehru Trophy Boat Race is a famous snake boat race held in the backwaters",
      "The backwater region is known as 'Venice of the East'",
      "The unique ecosystem supports rare aquatic species and mangrove forests"
    ]
  },
  {
    id: "golden-temple",
    name: "Golden Temple",
    location: "Amritsar, Punjab",
    description: "The holiest gurdwara and the most important pilgrimage site of Sikhism, known for its stunning gold-plated sanctum and the world's largest free community kitchen.",
    longDescription: "The Golden Temple, also known as Sri Harmandir Sahib, is a gurdwara located in the city of Amritsar, Punjab, India. It is the preeminent spiritual site of Sikhism. The temple is built around a man-made pool (sarovar) that was completed by the fourth Sikh Guru, Guru Ram Das, in 1577. The gurdwara was repeatedly rebuilt by the Sikhs after it became a target of persecution and was destroyed several times by the Mughal and invading Afghan armies. Maharaja Ranjit Singh, after founding the Sikh Empire, rebuilt it in marble and copper in 1809, and overlaid the sanctum with gold foil in 1830, which gives it its distinctive appearance and its name.",
    image: "https://images.unsplash.com/photo-1589738217317-8c63a58fa645?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    modelPath: "/models/golden-temple.glb",
    latitude: 31.6200,
    longitude: 74.8765,
    famousFor: [
      "Gold-plated sanctum (Harmandir Sahib)",
      "Amrit Sarovar (Pool of Nectar) surrounding the temple",
      "Langar (free community kitchen) serving 100,000+ people daily",
      "Guru Granth Sahib (Sikh holy book) recitation 24/7",
      "Beautiful marble walkway (Parikrama) around the temple"
    ],
    nearbyAttractions: [
      "Jallianwala Bagh",
      "Wagah Border Ceremony",
      "Partition Museum",
      "Gobindgarh Fort",
      "Maharaja Ranjit Singh Museum"
    ],
    bestTimeToVisit: "October to March when the weather is pleasant",
    historicalFacts: [
      "Founded by the fourth Sikh Guru, Guru Ram Das Ji in 1577",
      "The temple was rebuilt multiple times after being destroyed by invaders",
      "Maharaja Ranjit Singh covered it with gold in the early 19th century",
      "The foundation stone was laid by a Muslim saint, Sai Mian Mir",
      "The temple has four entrances symbolizing openness to all religions and communities"
    ]
  },
  {
    id: "hampi-ruins",
    name: "Hampi Ruins",
    location: "Hampi, Karnataka",
    description: "The ruins of the ancient Vijayanagara Empire, featuring stunning temples, palaces, and monuments spread across a surreal boulder-strewn landscape.",
    longDescription: "Hampi is an ancient village in the south Indian state of Karnataka. It's dotted with numerous ruined temple complexes from the Vijayanagara Empire. On the south bank of the River Tungabhadra is the 7th-century Hindu Virupaksha Temple, near the revived Hampi Bazaar. A carved stone chariot stands in front of the huge Vittala Temple site. Southeast of Hampi, Daroji Bear Sanctuary is home to the Indian sloth bear. The landscape around Hampi is as stunning as the ruins themselves - massive boulders perch precariously over miles of undulating terrain, their rusty hues offset by jade-green palm groves, banana plantations and paddy fields.",
    image: "https://images.unsplash.com/photo-1600100591221-1d9f3a4f2a7b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
    modelPath: "/models/hampi-ruins.glb",
    latitude: 15.3350,
    longitude: 76.4600,
    famousFor: [
      "Vittala Temple with its famous Stone Chariot",
      "Virupaksha Temple - still active Hindu worship site",
      "Unique boulder-strewn landscape",
      "Ancient bazaars and market complexes",
      "Impressive water systems and aqueducts"
    ],
    nearbyAttractions: [
      "Tungabhadra Dam",
      "Daroji Sloth Bear Sanctuary",
      "Anegundi Village",
      "Matanga Hill",
      "Hippie Island (Virupapur Gadde)"
    ],
    bestTimeToVisit: "October to February when the weather is pleasant and not too hot",
    historicalFacts: [
      "Hampi was the capital of the Vijayanagara Empire from 1336 to 1646",
      "At its peak, Hampi was one of the largest and richest cities in the world",
      "The city was destroyed and abandoned after a devastating defeat in 1565",
      "Declared a UNESCO World Heritage Site in 1986",
      "The empire's architectural style blends Hindu and Islamic influences"
    ]
  }
];