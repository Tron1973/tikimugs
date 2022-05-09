const images = [
    {
    id: 1,
    src: "./1.jpg",
    title: "Yoda Tiki",
    year: "2020",
    color: "green",
    type: "novelty",
    text: "Star Wars themed tiki mug"
    },
    {
    id: 2,
    src: "./2.jpg",
    title: "Face Espresso Tiki",
    year: "2022",
    color: "brown",
    type: "modern",
    text: "Handmade Small espresso sized tiki cup from Mexico"
    },
    {
    id: 3,
    src: "./3.jpg",
    title: "Pufferfish Tiki",
    year: "2008",
    color: "green",
    type: "novelty",
    text: "Designed by Tiki Farm"
    },
    {
    id: 4,
    src: "./4.jpg",
    title: "Moai Tiki",
    year: "1999",
    color: "yellow",
    type: "modern",
    text: "Modern Moai style tiki mug"
    },
    {
    id: 5,
    src: "./5.jpg",
    title: "Bamboozler Tiki",
    year: "2005",
    color: "yellow",
    type: "modern",
    text: "Designed by Boojum Bros for Portasia International"
    },
    {
    id: 6,
    src: "./6.jpg",
    title: "Tiki's Grill Tiki Mug", 
    year: "2007",
    color: "red",
    type: "modern",
    text: "From Tiki's Grill in Las Vegas, NV"
    },
    {
    id: 7,
    src: "./7.jpg",
    title: "Pink Tiki",
    year: "2002",
    color: "pink",
    type: "modern",
    text: "Modern era tiki mug"
    },
    {
    id: 8,
    src: "./8.jpg",
    title: "Aloha Tiki", 
    year: "2005",
    color: "blue",
    type: "modern",
    text: "Designed by Tiki Farm"
    },
    {
    id: 9,
    src: "./9.jpg",
    title: "Tron the Beachcomber Tiki",
    year: "2007",
    color: "blue",
    type: "novelty",
    text: "Designed by Tiki Farm"
    },
    {
    id: 10,
    src: "./10.jpg",
    title: "Suffering Bastard Tiki",
    year: "1960's",
    color: "black",
    type: "vintage",
    text: "Authentic Trader Vic's original"
    },
    {
    id: 11,
    src: "./11.jpg",
    title: "Kon Tiki Mug", 
    year: "2000's",
    color: "green",
    type: "modern",
    text: "Mug from Kon Tiki in Tucson, AZ"
    },
    {
    id: 12,
    src: "./12.jpg",
    title: "Fu Manchu Tiki",
    year: "2010",
    color: "brown",
    type: "novelty",
    text: "Reproduction of vintage Fu Manchu styled Tiki mug"
    },
    {
    id: 13,
    src: "./13.jpg",
    title: "Bambooze Tiki", 
    year: "2007",
    color: "brown",
    type: "modern",
    text: "Designed by Thor in Hawaii"
    },
    {
    id: 14,
    src: "./14.jpg",
    title: "Green Modern Tiki", 
    year: "2001",
    color: "green",
    type: "modern",
    text: "Designed by Accoutrements"
    },
    {
    id: 15,
    src: "./15.jpg",
    title: "Blue Modern Tiki",
    year: "2011",
    color: "blue",
    type: "modern",
    text: "Designed by Libbey"
    },
    {
    id: 16,
    src: "./16.jpg",
    title: "Dark Blue Modern Tiki",
    year: "2002",
    color: "blue",
    type: "modern",
    text: "Designed by Tiki Farm"
    },
    {
    id: 17,
    src: "./17.jpg",
    title: "Brown Las Vegas Tiki", 
    year: "2003",
    color: "brown",
    type: "modern",
    text: "Designed by Chiki Tiki"
    },
    {
    id: 18,
    src: "./18.jpg",
    title: "Green Las Vegas Tiki",
    year: "2003",
    color: "green",
    type: "modern",
    text: "Designed by Chiki Tiki"
    },
    {
    id: 19,
    src: "./19.jpg",
    title: "Brown Tiki Shot Glass", 
    year: "2012",
    color: "brown",
    type: "modern",
    text: "Designed by KC Co."
    },
    {
    id: 20,
    src: "./20.jpg",
    title: "Green Tiki Shot Glass", 
    year: "2012",
    color: "green",
    type: "modern",
    text: "Designed by KC Co."
    },
    {
    id: 21,
    src: "./21.jpg",
    title: "Purple Tiki",
    year: "2001",
    color: "purple",
    type: "modern",
    text: "Designed by Accoutrements"
    },
    {
    id: 22,
    src: "./22.jpg",
    title: "Light Blue Tiki",
    year: "2002",
    color: "blue",
    type: "modern",
    text: "Modern era tiki mug"
    },
    {
    id: 23,
    src: "./23.jpg",
    title: "Turquoise",
    year: "2002",
    color: "turquoise",
    type: "modern",
    text: "Modern era tiki mug"
    },
    {
    id: 24,
    src: "./24.jpg",
    title: "Blue Tiki",
    year: "2002",
    color: "blue",
    type: "modern",
    text: "Modern era tiki mug"
    },
    {
    id: 25,
    src: "./25.jpg",
    title: "Vintage Midcentury Tiki", 
    year: "1950's",
    color: "brown",
    type: "vintage",
    text: "Authentic midcentury tiki mug from Fred Roberts Company in San Francisco, made in Japan"
    },
    {
    id: 26,
    src: "./26.jpg",
    title: "Brown Tiki Mug",
    year: "2001",
    color: "brown",
    type: "modern",
    text: "Modern era tiki mug"
    },
    {
    id: 27,
    src: "./27.jpg",
    title: "Kon Tiki Volcano Bowl",
    year: "2000's",
    color: "brown",
    type: "novelty",
    text: "Tiki volcano bowl from Kon Tiki in Tucson, AZ, designed by Tiki Farm"
    },
    {
    id: 28,
    src: "./28.jpg",
    title: "Vintage Tiki",
    year: "1960's",
    color: "brown",
    type: "vintage",
    text: "Midcentury era Tiki mug from Jimmy Wong's in Chicago, Illinois"
    },
    {
    id: 29,
    src: "./29.jpg",
    title: "Modern Brown Tiki",
    year: "2000",
    color: "brown",
    type: "modern",
    text: "Designed by KC Co. Hawaii"
    },
    {
    id: 30,
    src: "./30.jpg",
    title: "Brown Tiki Mug",
    year: "2000's",
    color: "brown",
    type: "modern",
    text: "Modern era tiki mug"
    },
    {
    id: 31,
    src: "./31.jpg",
    title: "Tahiti Joe's Tiki Mug",
    year: "2007",
    color: "brown",
    type: "modern",
    text: "Tiki mug from Tahiti Joe's in Las Vegas, NV"
    },
    {
    id: 32,
    src: "./32.jpg",
    title: "Brown Tiki Mug",
    year: "2000's",
    color: "brown",
    type: "modern",
    text: "Modern era tiki mug"
    },
    {
    id: 33,
    src: "./33.jpg",
    title: "Brown Tiki Mug",
    year: "2000's",
    color: "brown",
    type: "modern",
    text: "Modern era tiki mug from MGM Grand in Reno, NV"
    },
    {
    id: 34,
    src: "./34.jpg",
    title: "Salt & Pepper Shaker Tikis",
    year: "2000",
    color: "brown",
    type: "modern",
    text: "Set of salt and pepper shaker tikis"
    },
    {
    id: 35,
    src: "./35.jpg",
    title: "Moai Salt & Pepper Shaker Tikis",
    year: "1980's",
    color: "brown",
    type: "vintage",
    text: "Set of salt and pepper shaker tikis from Disneyland, CA"
    },
    {
    id: 36,
    src: "./36.jpg",
    title: "Green Tiki Mug Candle",
    year: "2000's",
    color: "green",
    type: "modern",
    text: "Tiki mug candle"
    },
    {
    id: 37,
    src: "./37.jpg",
    title: "Blue Tiki Mug Candle",
    year: "2000's",
    color: "blue",
    type: "modern",
    text: "Tiki mug candle"
    },
    {
    id: 38,
    src: "./38.jpg",
    title: "Bali Hai Headhunter Tiki",
    year: "1960's",
    color: "brown",
    type: "vintage",
    text: "Authentic vintage tiki mug from Bali Hai in San Diego, CA"
    },
    {
    id: 39,
    src: "./39.jpg",
    title: "Kon Tiki Mug",
    year: "2000's",
    color: "brown",
    type: "modern",
    text: "Tiki mug from Kon Tiki in Tucson, AZ"
    },
]