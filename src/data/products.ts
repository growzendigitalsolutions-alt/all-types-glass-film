import { Product } from '../types';

export const BUSINESS_INFO = {
  name: "All Types Glass Film | Sun Control Film | Frosted Glass",
  shortName: "All Types Glass Film",
  owner: "Md Tarik Shaikh",
  phone: "+91 7276600033",
  phoneRaw: "+917276600033",
  whatsAppUrl: "https://wa.me/917276600033",
  email: "tarikshaikh831@gmail.com",
  googleMapsUrl: "https://maps.app.goo.gl/5VsbNGeSMxjZUaJY7",
  operatingHours: "Monday – Sunday: 9:00 AM – 9:00 PM",
  serviceDescription: "Professional Glass Film Supply, Custom Cutting & On-Site Installation",
  address: "All Types Glass Film, Glass Tinting & Film Specialist",
  serviceAreas: ["Pune", "Mumbai", "Navi Mumbai", "Pimpri-Chinchwad", "Surrounding Maharashtra Regions"]
};

export const PRODUCTS: Product[] = [
  {
    id: "nano-ceramic-sun-control",
    name: "Architectural Sun Control Solar Film",
    category: "sun-control",
    categoryLabel: "Sun Control Film",
    tagline: "Solar radiation reduction with clear visible light transmission",
    description: "Multi-layer optical solar film designed for residential and commercial windows. Helps reduce harsh direct solar glare and filters ultraviolet radiation while preserving natural outdoor daylight.",
    vlt: "70%",
    heatRejection: "High Solar Cut",
    uvProtection: "UV Filter Layer",
    glareReduction: "Balanced Light",
    thickness: "2.0 Mil",
    warranty: "Standard Manufacturer Warranty",
    idealFor: ["Residential Balconies", "Office Windows", "Glass Facades", "Commercial Showrooms"],
    features: [
      "Helps reduce incoming solar glare without darkening interior rooms",
      "Assists in protecting curtains, rugs, and interior furniture from direct UV exposure",
      "Non-corrosive optical polyester construction",
      "Durable scratch-resistant hardcoat layer for easy cleaning"
    ],
    image: "/src/assets/images/hero_glass_architecture_1792940888119.jpg",
    popular: true
  },
  {
    id: "ceramic-car-tint",
    name: "Automotive Window Tinting Film",
    category: "car-tinting",
    categoryLabel: "Car Tinting Film",
    tagline: "Automotive glass tinting for heat comfort and anti-glare driving",
    description: "Specialized automotive tint designed for vehicle glass panels. Helps reduce cabin heating under direct sun and softens blinding headlight glare during night-time highway travel.",
    vlt: "50% - 70%",
    heatRejection: "Automotive Grade",
    uvProtection: "UV Blocking Layer",
    glareReduction: "Anti-Glare Shield",
    thickness: "1.5 - 2.0 Mil",
    warranty: "Manufacturer Warranty",
    idealFor: ["Sedans", "Hatchbacks", "SUVs", "Commercial Fleet"],
    features: [
      "Precision computer-cut and heat-shrunk for contoured car glass",
      "Non-conductive formulation compatible with GPS, mobile signals, and Fastag",
      "Reduces dashboard and upholstery sun deterioration",
      "Installed in clean bays with micro-edge glass finishing"
    ],
    image: "/src/assets/images/car_glass_tinting_1792940888899.jpg",
    popular: true
  },
  {
    id: "frosted-matte-crystal",
    name: "Architectural Dusted Matte Frosted Film",
    category: "frosted",
    categoryLabel: "Frosted Glass Film",
    tagline: "Translucent frosted finish for office partitions and privacy cabins",
    description: "High-grade acid-etched glass substitute film that diffuses light softly across conference rooms and cabins while providing effective visual privacy.",
    vlt: "55%",
    heatRejection: "Light Diffusing",
    uvProtection: "Standard",
    glareReduction: "Soft Diffusion",
    thickness: "3.2 Mil",
    warranty: "Commercial Grade",
    idealFor: ["Office Conference Cabins", "Meeting Rooms", "Shower Partitions", "Hospital Consultation Rooms"],
    features: [
      "Provides complete visual privacy while allowing pleasant daylight to enter",
      "Suitable for plotter-cut corporate logos, banding, and bespoke signage",
      "Resistant to normal indoor humidity and routine cleaning liquids",
      "Clean residue-free removal during office re-leasing"
    ],
    image: "/src/assets/images/frosted_office_partition_1792940890108.jpg",
    popular: true
  },
  {
    id: "geometric-frosted-stripes",
    name: "Custom Striped & Patterned Frosted Film",
    category: "frosted",
    categoryLabel: "Frosted Glass Film",
    tagline: "Designer horizontal bands, frosted stripes and privacy graphics",
    description: "Customizable frosted vinyl film featuring tailored horizontal stripes, graduated privacy gradients, and modern geometric patterns for glass doors and corridors.",
    vlt: "50%",
    heatRejection: "Translucent",
    uvProtection: "Standard",
    glareReduction: "Glare Cut",
    thickness: "3.0 Mil",
    warranty: "Commercial Grade",
    idealFor: ["Office Corridors", "Glass Partitions", "Boardrooms", "Co-Working Lounges"],
    features: [
      "Helps prevent accidental glass collisions with clear visual manifestation",
      "Custom stripe spacing and height according to client design preferences",
      "Clean, sharp edge alignment using precision plotter cutting",
      "Wipe-clean and easy maintenance"
    ],
    image: "/src/assets/images/corporate_glass_stripes_1792941609499.jpg"
  },
  {
    id: "one-way-privacy-film",
    name: "One-Way Daytime Privacy Film",
    category: "privacy",
    categoryLabel: "Privacy Film",
    tagline: "Clear outward daylight view with exterior daytime privacy",
    description: "Optical privacy film operating on daylight balance. During the day, outdoor onlookers see a subtle reflective surface while occupants inside enjoy clear visibility to the outside without heavy curtains.",
    vlt: "15% - 20%",
    heatRejection: "Solar Control",
    uvProtection: "High UV Cut",
    glareReduction: "High Glare Cut",
    thickness: "2.0 Mil",
    warranty: "Manufacturer Warranty",
    idealFor: ["Ground Floor Windows", "Balcony Glass Sliders", "Private Offices", "Residential Enclaves"],
    features: [
      "Provides daytime visual privacy from passing pedestrians and neighboring buildings",
      "Substantially softens strong daylight glare inside rooms",
      "Maintains natural external landscape views during sunlight hours",
      "Clean architectural appearance from the building exterior"
    ],
    image: "/src/assets/images/luxury_villa_balcony_1792941609829.jpg",
    popular: true
  },
  {
    id: "reflective-silver-solar",
    name: "Architectural Reflective Solar Film",
    category: "reflective",
    categoryLabel: "Reflective Film",
    tagline: "High-reflection solar shield with sleek metallic mirror finish",
    description: "Engineered sputtered metallic reflective film designed to bounce away intense radiant solar energy before it passes through the glass. Ideal for high-exposure west and south facades.",
    vlt: "15%",
    heatRejection: "High Reflective Shield",
    uvProtection: "High UV Cut",
    glareReduction: "Superior Glare Cut",
    thickness: "1.5 Mil",
    warranty: "Architectural Warranty",
    idealFor: ["Commercial Facades", "Factory Skylights", "West-Facing Glass", "Warehouse Windows"],
    features: [
      "Reflects incoming solar radiation away from building glass",
      "Offers exterior silver mirror finish for daytime privacy",
      "Substantially eases harsh glare on workstation computer screens",
      "Durable metallic coating designed for long-term architectural glass exposure"
    ],
    image: "/src/assets/images/privacy_mirror_film_1792940890666.jpg",
    popular: true
  },
  {
    id: "designer-textured-decorative",
    name: "Decorative Patterned & Textured Glass Film",
    category: "decorative",
    categoryLabel: "Decorative Film",
    tagline: "Textured, reeded, floral, and artistic decorative glass styling",
    description: "Decorative architectural films designed to transform plain transparent glass into textured, fluted, stained-glass, or designer artistic panels.",
    vlt: "45%",
    heatRejection: "Light Diffusing",
    uvProtection: "Standard",
    glareReduction: "Soft Lighting",
    thickness: "3.5 - 4.0 Mil",
    warranty: "Interior Grade",
    idealFor: ["Entrance Glass Doors", "Kitchen Partitions", "Bathroom Doors", "Showroom Displays"],
    features: [
      "Cost-effective alternative to expensive fabricated designer structural glass",
      "Adds distinct visual character to interior glass doors and panels",
      "Translucent textures that diffuse indoor lighting softly",
      "Easily updated or replaced to match evolving interior decor"
    ],
    image: "/src/assets/images/decorative_designer_glass_1792940890365.jpg"
  },
  {
    id: "clear-safety-security",
    name: "Clear Anti-Shatter Safety & Security Film",
    category: "safety",
    categoryLabel: "Safety & Security Film",
    tagline: "Heavy-duty optical polyester for impact containment and shatter protection",
    description: "Thick multi-ply optical film with heavy adhesive backing. Designed to hold broken glass fragments securely in frame during accidental impacts, storms, or attempted break-ins.",
    vlt: "88%",
    heatRejection: "Clear Transparent",
    uvProtection: "UV Cut Layer",
    glareReduction: "Minimal (Optically Clear)",
    thickness: "4 Mil / 8 Mil",
    warranty: "Heavy-Duty Grade",
    idealFor: ["Showroom Display Windows", "Balcony Glass Railings", "Glass Doors", "High-Traffic Corridors"],
    features: [
      "Holds fractured glass securely within frame upon severe impact",
      "Significantly reduces risk of injury from flying glass shards",
      "Optically clear formulation that remains virtually invisible once cured",
      "Tough polyester barrier that resists tearing and punctures"
    ],
    image: "/src/assets/images/safety_security_shatterproof_1792941608744.jpg"
  }
];

export const SERVICE_CATEGORIES = [
  {
    id: "sun-control",
    title: "Sun Control Film",
    kicker: "Solar Control",
    summary: "Filters intense sunlight and harsh glare while retaining natural illumination in homes, offices, and high-rises.",
    badge: "Architectural",
    stats: "Solar Light Control · UV Filter",
    highlights: ["Nano-Ceramic Films", "Neutral Solar Films", "Custom Width Installation"],
    image: "/src/assets/images/hero_glass_architecture_1792940888119.jpg"
  },
  {
    id: "car-tinting",
    title: "Car Tinting Film",
    kicker: "Automotive",
    summary: "Specialized automotive glass films installed in clean workshop conditions for heat comfort and anti-glare visibility.",
    badge: "Automotive",
    stats: "Non-Conductive · Anti-Glare",
    highlights: ["Front Windshield UV Care", "Side & Rear Window Tinting", "Fastag & Signal Friendly"],
    image: "/src/assets/images/car_glass_tinting_1792940888899.jpg"
  },
  {
    id: "frosted",
    title: "Frosted Glass Film",
    kicker: "Office Cabins",
    summary: "Translucent frosted matte vinyl for boardrooms, meeting cabins, shower glass, and corporate partitions.",
    badge: "Privacy & Frost",
    stats: "Daytime Privacy · Translucent",
    highlights: ["Dusted Matte Frost", "Plotter-Cut Stripes", "Company Logo Manifestation"],
    image: "/src/assets/images/frosted_office_partition_1792940890108.jpg"
  },
  {
    id: "privacy",
    title: "Privacy Film",
    kicker: "Confidentiality",
    summary: "Daytime one-way visibility films that prevent exterior prying while maintaining outward views.",
    badge: "One-Way Vision",
    stats: "Daytime Privacy · Glare Shield",
    highlights: ["Balcony Sliders", "Ground Floor Glazing", "Executive Cabins"],
    image: "/src/assets/images/luxury_villa_balcony_1792941609829.jpg"
  },
  {
    id: "reflective",
    title: "Reflective Film",
    kicker: "High Reflection",
    summary: "Metallic reflective solar films for high-exposure commercial facades and west-facing building glass.",
    badge: "Mirror Sheen",
    stats: "Sputtered Metal · Solar Shield",
    highlights: ["Silver Reflective", "Commercial Glazing", "Facade Heat Shield"],
    image: "/src/assets/images/privacy_mirror_film_1792940890666.jpg"
  },
  {
    id: "decorative",
    title: "Decorative Film",
    kicker: "Interior Styling",
    summary: "Patterned, textured, fluted, and designer films for internal glass doors, partitions, and display cabinets.",
    badge: "Artistic",
    stats: "Textured Vinyl · Designer Finishes",
    highlights: ["Reeded & Fluted Patterns", "Geometric Designs", "Door Manifestation"],
    image: "/src/assets/images/decorative_designer_glass_1792940890365.jpg"
  }
];
