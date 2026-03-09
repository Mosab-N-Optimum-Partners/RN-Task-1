export interface Place {
    id: string
    placeName: string
    country: string
    city: string
    rate: number
    price: number
    tripDuration: number
    temperature: number
    description: string
    image: any
}

export const mockPlaces: Record<string, Place> = {
    '1': {
        id: '1',
        placeName: 'Erawan National Park',
        country: 'Thailand',
        city: 'Kanchanaburi',
        rate: 4.5,
        price: 285,
        tripDuration: 8,
        temperature: 61,
        description: 'Erawan National Park is celebrated for its striking natural beauty and ecological variety. The park features dense tropical forests, dramatic limestone hills, serene caves, and its iconic seven-tiered Erawan Waterfall.',
        image: require('@/assets/places/Erawan_National_Park.jpg'),
    },
    '2': {
        id: '2',
        placeName: 'Dolomites',
        country: 'Italy',
        city: 'Udine',
        rate: 4.8,
        price: 520,
        tripDuration: 5,
        temperature: 55,
        description: 'Dramatic mountain peaks with breathtaking alpine scenery, perfect for hiking and skiing adventures.',
        image: require('@/assets/places/Dolomites.jpg'),
    },
    '3': {
        id: '3',
        placeName: 'Petra',
        country: 'Jordan',
        city: "Ma'an",
        rate: 4.9,
        price: 150,
        tripDuration: 6,
        temperature: 72,
        description: 'An ancient city carved into rose-red cliffs, one of the most iconic archaeological sites in the world.',
        image: require('@/assets/places/Petra.jpg'),
    },
    '4': {
        id: '4',
        placeName: 'Santorini',
        country: 'Greece',
        city: 'Thira',
        rate: 4.7,
        price: 890,
        tripDuration: 7,
        temperature: 78,
        description: 'A gorgeous volcanic island with iconic white-washed buildings, blue domes, and breathtaking sunset views.',
        image: require('@/assets/places/Santorini.jpg'),
    },
    '5': {
        id: '5',
        placeName: 'Banff National Park',
        country: 'Canada',
        city: 'Banff',
        rate: 4.6,
        price: 340,
        tripDuration: 10,
        temperature: 45,
        description: "Canada's oldest national park featuring turquoise glacial lakes, rugged mountains, and abundant wildlife.",
        image: require('@/assets/places/Banff_National_Park.jpg'),
    },
}

export const placeIds = Object.keys(mockPlaces)