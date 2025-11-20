import type { IconName } from "../types/icon";

export interface Service {
  slug: string;
  title: string;
  excerpt: string;
  description: string;
  bullets: string[];
  tags: string[];
  icon: IconName;
  accent: string;
  image: string;
}

const accent = (from: string, to: string) => `linear-gradient(135deg, ${from}, ${to})`;
const serviceImage = (filename: string) => `/images/Services/${encodeURI(filename)}`;

export const services: Service[] = [
  {
    slug: "property-repairs",
    title: "Property repairs",
    excerpt: "Reactive support for leaks, locks, glazing and structural issues with rapid reporting.",
    description:
      "Dedicated coordinators triage the repair, dispatch certified trades and issue a work summary within the hour. Every visit is logged with photos for your compliance files.",
    bullets: [
      "24/7 helpdesk with under 15 minute acknowledgement",
      "Joinery, glazing and plaster patching",
      "Insurance-ready documentation",
      "Multi-property scheduling",
      "Clear tenant communication",
    ],
    tags: ["Reactive", "24/7", "Multi-trade"],
    icon: "shield",
    accent: accent("rgba(59,130,246,0.18)", "rgba(14,165,233,0.25)"),
    image: serviceImage("Property Repairs.jpg"),
  },
  {
    slug: "plumbing",
    title: "Plumbing",
    excerpt: "Stop leaks fast, swap cylinders and keep water systems compliant.",
    description:
      "From emergency leak detection to preventative valve replacements, our plumbing specialists protect assets and keep downtime minimal.",
    bullets: [
      "Burst pipe isolation and repair",
      "Tap, trap and cistern replacements",
      "Unvented cylinder servicing",
      "Trace & access reporting",
      "TMV testing and calibration",
    ],
    tags: ["Water", "Compliance", "Reactive"],
    icon: "bolt",
    accent: accent("rgba(14,165,233,0.18)", "rgba(6,182,212,0.3)"),
    image: serviceImage("Plumbing.jpg"),
  },
  {
    slug: "painting-decorating",
    title: "Painting & decorating",
    excerpt: "Freshen reception areas, tenanted flats and stair cores with durable finishes.",
    description:
      "Clean, low-odour paints and careful prep deliver premium finishes without disrupting occupants.",
    bullets: [
      "Void refresh programmes",
      "High-wear coatings for communal areas",
      "Airless spraying for speed",
      "Wallpaper repair and feature walls",
      "Night shift availability where required",
    ],
    tags: ["Finish", "Void turns", "Night work"],
    icon: "paint",
    accent: accent("rgba(191,219,254,0.4)", "rgba(59,130,246,0.25)"),
    image: serviceImage("Painting & decorating.jpg"),
  },
  {
    slug: "joinery-carpentry",
    title: "Joinery & carpentry",
    excerpt: "Doors, skirting, storage and bespoke joinery for residential blocks.",
    description:
      "We build and repair with precision, from fire doors to custom storage walls, ensuring compliance and long-term durability.",
    bullets: [
      "Fire door installation & inspections",
      "Kitchen cupboard rebuilds",
      "Partition walls and boxing",
      "Access hatches and loft ladders",
      "Timber floor repairs",
    ],
    tags: ["Fire doors", "Joinery", "Compliance"],
    icon: "ruler",
    accent: accent("rgba(148,163,184,0.25)", "rgba(59,130,246,0.25)"),
    image: serviceImage("Joinery & Carpentry.jpg"),
  },
  {
    slug: "kitchens-bathrooms",
    title: "Kitchens & bathrooms",
    excerpt: "Full strip-outs or targeted upgrades that keep assets rentable.",
    description:
      "Coordinated multi-trade partners deliver fast refurbishments with tiled, hygienic finishes and appliance installs ready for new tenants.",
    bullets: [
      "Void property refits",
      "Wet-room membranes and tiling",
      "Worktop and appliance swaps",
      "Ventilation improvements",
      "Silicone rejuvenation",
    ],
    tags: ["Void", "Multi-trade", "Hygiene"],
    icon: "kitchen",
    accent: accent("rgba(14,165,233,0.18)", "rgba(59,130,246,0.2)"),
    image: serviceImage("Kitchens & Bathrooms.jpg"),
  },
  {
    slug: "roofing-gutters",
    title: "Roofing & gutters",
    excerpt: "Keep the envelope watertight with inspections, patch repairs and cleaning.",
    description:
      "Drone inspections, rope access partners and scaffold support keep assets dry without delays.",
    bullets: [
      "Slate and tile replacements",
      "Lead flashing repairs",
      "Gutter cleansing & reporting",
      "Flat roof patching",
      "Bird-proofing installs",
    ],
    tags: ["Roof", "Safety", "Reports"],
    icon: "roof",
    accent: accent("rgba(59,130,246,0.2)", "rgba(14,116,144,0.25)"),
    image: serviceImage("Roofing & Gutters.jpg"),
  },
  {
    slug: "garden-exterior",
    title: "Gardening & exterior",
    excerpt: "Soft landscaping, jet washing and curb appeal upgrades for entrances.",
    description:
      "We keep communal grounds tidy with seasonal planting, lighting tweaks and cleanliness programmes.",
    bullets: [
      "Estate grounds maintenance",
      "Raised bed repairs",
      "Facade washing",
      "Bin store improvements",
      "Line painting for parking",
    ],
    tags: ["Grounds", "Cleaning", "Exterior"],
    icon: "leaf",
    accent: accent("rgba(16,185,129,0.2)", "rgba(59,130,246,0.2)"),
    image: serviceImage("Gardening & Exterior.jpg"),
  },
  {
    slug: "handyman-tasks",
    title: "Handyman tasks",
    excerpt: "Flexible day-works for snag lists, white goods and communal checks.",
    description:
      "Perfect for offices and residential blocks needing regular TLC with transparent day rates.",
    bullets: [
      "Door closers and handles",
      "Blind installs",
      "Furniture assembly",
      "Sealant refresh",
      "Signage and wayfinding",
    ],
    tags: ["Snags", "Day works", "Multi-site"],
    icon: "handyman",
    accent: accent("rgba(248,250,252,1)", "rgba(59,130,246,0.2)"),
    image: serviceImage("Handyman Tasks.jpg"),
  },
  {
    slug: "landlord-maintenance",
    title: "Landlord maintenance packages",
    excerpt: "Planned visits with compliance checks, reporting and budgeting support.",
    description:
      "Quarterly or monthly passes keep everything compliant from smoke alarms to gutters with a single report pack.",
    bullets: [
      "Statutory testing calendar",
      "Asset condition scoring",
      "Capital works forecasting",
      "Emergency preparedness reviews",
      "Dedicated account manager",
    ],
    tags: ["PPM", "Reporting", "Strategy"],
    icon: "clipboard",
    accent: accent("rgba(226,232,240,0.6)", "rgba(59,130,246,0.2)"),
    image: serviceImage("Landlord Maintenance Packages.jpg"),
  },
  {
    slug: "small-renovations",
    title: "Small renovations",
    excerpt: "Transform lobbies, amenity areas and show flats with minimal downtime.",
    description:
      "Design-led upgrades executed quickly with dust control, finishing specialists and branded signage.",
    bullets: [
      "Concept to install support",
      "Feature lighting and ceilings",
      "Acoustic panel systems",
      "Flooring swaps",
      "Micro plaster and microcement",
    ],
    tags: ["Design", "Amenity", "Upgrade"],
    icon: "refresh",
    accent: accent("rgba(129,140,248,0.2)", "rgba(59,130,246,0.25)"),
    image: serviceImage("Small Rennovations.jpg"),
  },
];

export const serviceMap = Object.fromEntries(services.map((service) => [service.slug, service]));
