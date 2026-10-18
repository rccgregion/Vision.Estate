export interface Property {
  id: string;
  title: string;
  subtitle: string;
  price: string;
  location: string;
  beds: number;
  baths: number;
  sqft: string;
  year: number;
  image: string;
  additionalImages?: string[];
  description: string;
  features: string[];
  type: 'sale' | 'rent' | 'lease' | 'drop';
  categoryLabel: string;
}

export const PROPERTIES: Property[] = [
  {
    id: 'prop-1',
    title: 'The Solarium Dune Villa',
    subtitle: 'Cast Concrete & Panoramic Low-E Glazing',
    price: '$24,500,000',
    location: 'Mirage Highlands, California',
    beds: 5,
    baths: 6,
    sqft: '9,850 sq ft',
    year: 2026,
    image: '/src/assets/images/hero_futuristic_mansion_1791748995776.jpg',
    additionalImages: [
      '/src/assets/images/interior_luxury_living_1791749027793.jpg',
      '/src/assets/images/villa_left_wing_1791749007475.jpg',
      '/src/assets/images/futuristic_pod_house_1791749018366.jpg',
    ],
    description: 'An architectural custom estate featuring sculpted board-formed concrete and structural floor-to-ceiling thermal glazing. Spanning over two levels with a double-height helical staircase, infinity reflection pool, private primary suite wing, and deeded unobstructed panoramic ridge views.',
    features: [
      'Architectural Low-E acoustic curved glass panels',
      'Geothermal radiant floor heating and multi-zone climate systems',
      'Lutron HomeWorks automation and discrete access control',
      'Subterranean 4-car climate-controlled showroom garage',
      'Cantilevered entertaining terrace with panoramic sunset exposure',
    ],
    type: 'sale',
    categoryLabel: 'For Sale',
  },
  {
    id: 'prop-2',
    title: 'The Cantilever West Pavilion',
    subtitle: 'Ocean View Architectural Residence',
    price: '$18,200,000',
    location: 'Pacific Palisades, California',
    beds: 4,
    baths: 5,
    sqft: '7,400 sq ft',
    year: 2026,
    image: '/src/assets/images/villa_left_wing_1791749007475.jpg',
    additionalImages: [
      '/src/assets/images/interior_luxury_living_1791749027793.jpg',
      '/src/assets/images/hero_futuristic_mansion_1791748995776.jpg',
    ],
    description: 'Distinctive sculpted concrete residence offering seamless indoor-outdoor coastal living. Anchored by a bold cantilevered structural canopy, custom frameless glass walls, and an interior courtyard garden framed in hand-honed granite.',
    features: [
      'Sculpted board-formed architectural concrete shell',
      'Private landscaped stone courtyard and Zen reflection basin',
      'Curved panoramic salon with custom acoustic oak ceilings',
      'Temperature-controlled wine tasting salon and executive library',
    ],
    type: 'sale',
    categoryLabel: 'For Sale',
  },
  {
    id: 'prop-3',
    title: 'The Eclipse Desert Pod Villa',
    subtitle: 'High-Desert Architectural Retreat',
    price: '$95,000 / mo',
    location: 'Joshua Tree Reserve, California',
    beds: 3,
    baths: 3,
    sqft: '4,600 sq ft',
    year: 2026,
    image: '/src/assets/images/futuristic_pod_house_1791749018366.jpg',
    additionalImages: [
      '/src/assets/images/interior_luxury_living_1791749027793.jpg',
    ],
    description: 'A monolithic private estate set within a 10-acre private parcel. Highlights include an iconic horizontal panoramic aperture, illuminated terrace stone steps, bespoke bouclé salon furnishings, and dark-sky designated stargazing.',
    features: [
      'Seamless monolithic thermal mass building envelope',
      'Deeded 10-acre private natural reserve buffer',
      'Solar array with industrial battery reserve storage',
      'Custom curved built-in salon seating and stone fireplace',
    ],
    type: 'rent',
    categoryLabel: 'For Rent',
  },
  {
    id: 'prop-4',
    title: 'The Oceanic Horizon Cantilever',
    subtitle: 'Cliffside Waterfront Compound',
    price: '$140,000 / mo (Annual Lease)',
    location: 'Big Sur Coastline, California',
    beds: 6,
    baths: 7,
    sqft: '11,200 sq ft',
    year: 2026,
    image: '/src/assets/images/coastal_curved_villa_1791749843319.jpg',
    additionalImages: [
      '/src/assets/images/interior_luxury_living_1791749027793.jpg',
    ],
    description: 'A masterwork of coastal engineering anchored directly into granite cliffs. Boasting multi-tiered cantilevered sun decks, a curved heated saltwater infinity pool, double-height oceanfront living room, and private funicular ocean access.',
    features: [
      'Marine-grade salt-resistant structural concrete finishes',
      'Private cliffside funicular down to ocean-level overlook',
      'Heated saltwater pool with perimeter overflow trough',
      'Gated private security gatehouse and licensed helipad',
    ],
    type: 'lease',
    categoryLabel: 'Long-term Lease',
  },
  {
    id: 'prop-5',
    title: 'The Alpine Glade Atrium',
    subtitle: 'Trophy Mountain Estate',
    price: '$29,800,000',
    location: 'Aspen Highlands, Colorado',
    beds: 5,
    baths: 6,
    sqft: '8,900 sq ft',
    year: 2027,
    image: '/src/assets/images/alpine_glass_pavilion_1791749854190.jpg',
    additionalImages: [
      '/src/assets/images/interior_luxury_living_1791749027793.jpg',
    ],
    description: 'A ski-in, ski-out modern mountain estate designed with heavy thermal insulation and heated curved glazing to withstand alpine winters. Features panoramic mountain views, a floating suspended fireplace, and private wellness spa.',
    features: [
      'Suspended sculptural central hearth in the grand salon',
      'Snow-melt heated stone motor court and exterior steps',
      'Subterranean ski prep room, cedar sauna, and hydrotherapy plunge',
      'Triple-pane insulated high-altitude architectural glass',
    ],
    type: 'sale',
    categoryLabel: 'For Sale',
  },
  {
    id: 'prop-6',
    title: 'The Solitary Dune Compound',
    subtitle: 'Private Desert Estate with Center Lagoon',
    price: '$120,000 / mo',
    location: 'Scottsdale Mountain Reserve, Arizona',
    beds: 6,
    baths: 8,
    sqft: '13,500 sq ft',
    year: 2026,
    image: '/src/assets/images/monolithic_desert_compound_1791749863233.jpg',
    additionalImages: [
      '/src/assets/images/interior_luxury_living_1791749027793.jpg',
    ],
    description: 'An expansive gated residential compound centered around a 50-foot circular pool lagoon. Features curved continuous perimeter walls, separate detached guest residences, and native specimen desert landscaping.',
    features: [
      '50-foot circular swimming lagoon with underwater illumination',
      'Two detached private guest houses with private terraces',
      'Rammed-earth exterior walls with exceptional thermal mass',
      'Curated private desert cactus gardens and perimeter lighting',
    ],
    type: 'lease',
    categoryLabel: 'Long-term Lease',
  },
];

