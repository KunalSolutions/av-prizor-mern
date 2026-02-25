const products = [
  {
    name: "TRS Connectors",
    isTopDeal: true,
    isBestSeller: true,
    price: 699,
    offerPrice: 459,
    section: "Electronics",
    category: "Audio",
    subcategory: "Connectors",
    description:
      "A TRS (Tip-Ring-Sleeve) connector is a 3-pole audio plug used for balanced mono or unbalanced stereo signals.",
    image: "/images/connector1.jpg",
    brand: "xyz",
    countInStock: 10,
    rating: 3.8,
    numReviews: 10,
    content:
      "A TRS connector features a tip (left/positive), ring (right/negative), and sleeve (ground). Commonly found in 3.5mm and 1/4-inch sizes, essential for headphones, microphones, and studio gear.",
  },
  {
    name: "HDMI Face Plate",
    isTopDeal: true,
    isBestSeller: true,
    price: 899,
    offerPrice: 599,
    section: "Electronics",
    category: "Audio",
    subcategory: "HDMI",
    description:
      "HDMI Multimedia Modular Wall Socket Face Plate for Home/Office use.",
    image: "/images/HDMI1.webp",
    brand: "xyz",
    countInStock: 12,
    rating: 3.1,
    numReviews: 10,
    content:
      "Includes 1 HDMI port. Supports resolution up to 1080p. Suitable for HDTV, DVD players, set-top boxes. Made from durable polycarbonate material.",
  },
  {
    name: "HDMI Cable",
    isTopDeal: true,
    isBestSeller: false,
    price: 7999,
    offerPrice: 799,
    section: "Electronics",
    category: "Audio",
    subcategory: "Cable",
    description:
      "Honeywell HDMI Cable v2.0 with Ethernet, supports 4K@60Hz Ultra HD.",
    image: "/images/HDMI2.jpg",
    brand: "xyz",
    countInStock: 15,
    rating: 4.8,
    numReviews: 70,
    content:
      "18GBPS transmission speed. Compatible with laptops, TVs, gaming consoles, and set-top boxes.",
  },
  {
    name: "Microphone",
    isTopDeal: true,
    isBestSeller: false,
    price: 8599,
    offerPrice: 8299,
    section: "Electronics",
    category: "Audio",
    subcategory: "Mic",
    description:
      "Audio-Technica AT2020 Cardioid Condenser Studio XLR Microphone.",
    image: "/images/Mic1.jpg",
    brand: "xyz",
    countInStock: 11,
    rating: 4.3,
    numReviews: 51,
    content:
      "Ideal for project and home studio applications. High-quality condenser microphone with professional sound clarity.",
  },
  {
  name: "Smart LED TV",
  isTopDeal: true,
  isBestSeller: true,
  section: "Electronics",
  category: "Display",
  subcategory: "TV",
  description: "Ultra HD 4K Smart LED TV with Dolby Audio.",
  image: "/images/display.jpg",
  brand: "xyz",
  rating: 4.6,
  numReviews: 120,
  content:
    "Crystal clear 4K resolution with smart Android features and built-in apps.",

  variants: [
    {
      size: "32",
      price: 15999,
      offerPrice: 13999,
      countInStock: 8,
    },
    {
      size: "43",
      price: 25999,
      offerPrice: 22999,
      countInStock: 6,
    },
    {
      size: "55",
      price: 39999,
      offerPrice: 35999,
      countInStock: 5,
    },
    {
      size: "65",
      price: 59999,
      offerPrice: 54999,
      countInStock: 3,
    },
    {
      size: "75",
      price: 89999,
      offerPrice: 82999,
      countInStock: 2,
    },
  ],
}
];

export default products;