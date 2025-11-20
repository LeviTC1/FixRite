const barnImages = [
  "/images/Barn Project/BarnProject1.jpg",
  "/images/Barn Project/BarnProject2.jpg",
  "/images/Barn Project/BarnProject3.jpg",
  "/images/Barn Project/BarnProject4.jpg",
  "/images/Barn Project/BarnProject5.jpg",
];

export interface Project {
  slug: string;
  title: string;
  location: string;
  summary: string;
  tags: string[];
  hero: string;
  highlights: string[];
  gallery: Array<{ src: string; caption: string }>;
}

const captions = [
  "Setting out the porcelain border and planter bases for the barn courtyard.",
  "Freshly laid flags tying the barn interior to the landscaped lawn.",
  "Precision joints and drainage fall guiding visitors to the glazed doors.",
  "Side walkway connecting the patio to the rear garden without harsh edges.",
  "Ground prep and sub-base consolidation ahead of the courtyard pour.",
];

export const projects: Project[] = [
  {
    slug: "barn-refurbishment",
    title: "Barn conversion maintenance",
    location: "Cheshire countryside",
    summary:
      "Full internal refresh, bespoke joinery and ongoing maintenance for a heritage barn conversion. Delivered with minimal disruption to residents.",
    tags: ["Joinery", "Plastering", "Finish"],
    hero: barnImages[0],
    highlights: [
      "Bespoke carpentry and finishing touches",
      "Coordinated multi-trade scheduling",
      "Detailed photographic reporting for owners",
    ],
    gallery: barnImages.map((src, index) => ({
      src,
      caption: captions[index] ?? captions[captions.length - 1],
    })),
  },
];

export const projectMap = Object.fromEntries(projects.map((project) => [project.slug, project]));
