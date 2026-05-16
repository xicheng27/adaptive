import { Brand, DisabilityType } from '@/types'

export const brands: Brand[] = [
  {
    id: 'tommy-adaptive',
    name: 'Tommy Adaptive',
    company: 'Tommy Hilfiger',
    description:
      'A full adaptive clothing line featuring magnetic button closures, Velcro fasteners, open-back and side-entry options, and seated-fit silhouettes. Covers everyday wear, denim, outerwear, and footwear for adults and kids.',
    url: 'https://usa.tommy.com/en/tommy-adaptive',
    categories: ['wheelchair', 'limb-difference', 'paralysis', 'arthritis'],
    features: ['Magnetic closures', 'Velcro fasteners', 'Seated fit', 'Open-back options', 'One-hand dressing'],
    priceRange: '$$',
    shipping: ['US', 'Canada', 'UK', 'Australia', 'EU'],
    ageGroups: ['adults', 'kids'],
    badge: "Editor's Pick",
  },
  {
    id: 'nike-flyease',
    name: 'Nike FlyEase',
    company: 'Nike',
    description:
      'Hands-free footwear technology designed for easy entry and exit. The Go FlyEase sneaker can be put on and taken off without bending over or using hands. Offers multiple styles for adults and kids.',
    url: 'https://www.nike.com/flyease',
    categories: ['wheelchair', 'limb-difference', 'arthritis', 'paralysis'],
    features: ['Hands-free entry/exit', 'No bending required', 'Biometric closure', 'Multiple widths'],
    priceRange: '$$',
    shipping: ['US', 'Canada', 'UK', 'Australia', 'EU', 'Global'],
    ageGroups: ['adults', 'kids'],
    badge: 'Popular',
  },
  {
    id: 'zappos-adaptive',
    name: 'Zappos Adaptive',
    company: 'Zappos',
    description:
      'A dedicated adaptive fashion storefront curated from hundreds of brands. Includes clothing, shoes, and accessories with easy-on features. Excellent filters by disability type and feature.',
    url: 'https://www.zappos.com/adaptive',
    categories: ['wheelchair', 'limb-difference', 'arthritis', 'sensory', 'paralysis', 'visual'],
    features: ['Curated marketplace', 'Filter by feature', 'Wide selection', 'Free returns'],
    priceRange: '$$',
    shipping: ['US', 'Canada'],
    ageGroups: ['adults', 'kids'],
  },
  {
    id: 'iz-adaptive',
    name: 'IZ Adaptive',
    description:
      'Canadian adaptive clothing brand founded by a wheelchair user. Specializes in seated-fit tops, bottoms, and outerwear that look great whether sitting or standing. Form meets function.',
    url: 'https://www.izadaptive.com',
    categories: ['wheelchair', 'paralysis'],
    features: ['Seated fit', 'Stylish design', 'Open-back closure', 'Moisture-wicking'],
    priceRange: '$$',
    shipping: ['US', 'Canada', 'UK', 'EU'],
    ageGroups: ['adults'],
    badge: 'Wheelchair Specialist',
  },
  {
    id: 'silverts',
    name: "Silvert's Adaptive Clothing",
    description:
      'Adaptive and easy-dressing clothing for seniors and people with disabilities since 1949. Specializes in open-back garments, side-snap pants, and Velcro shoes. A trusted name with broad selection.',
    url: 'https://www.silverts.com',
    categories: ['arthritis', 'wheelchair', 'visual', 'paralysis'],
    features: ['Open-back garments', 'Side-snap pants', 'Velcro shoes', 'Easy-grip closures'],
    priceRange: '$',
    shipping: ['US', 'Canada', 'UK', 'Australia'],
    ageGroups: ['adults'],
  },
  {
    id: 'buck-and-buck',
    name: 'Buck & Buck',
    description:
      'Pioneering adaptive clothing brand since 1982. Offers a full range of open-back and side-snap clothing, bibs, aprons, and accessories designed for people with physical disabilities.',
    url: 'https://www.buckandbuck.com',
    categories: ['arthritis', 'wheelchair', 'paralysis'],
    features: ['Open-back designs', 'Side-snap closures', 'Elastic waistbands', 'Wide fit options'],
    priceRange: '$',
    shipping: ['US', 'Canada'],
    ageGroups: ['adults'],
  },
  {
    id: 'joe-and-bella',
    name: 'Joe & Bella',
    description:
      "Modern adaptive clothing that looks like mainstream fashion. Designed for people with arthritis, Parkinson's, and limited mobility. Features hidden magnetic and Velcro closures that mimic buttons and snaps.",
    url: 'https://www.joeandbella.com',
    categories: ['arthritis', 'paralysis'],
    features: ['Hidden magnetic closures', 'Mainstream look', "Parkinson's friendly", 'Soft fabrics'],
    priceRange: '$$',
    shipping: ['US', 'Canada', 'UK', 'EU'],
    ageGroups: ['adults'],
    badge: 'Best for Seniors',
  },
  {
    id: 'slick-chicks',
    name: 'Slick Chicks',
    description:
      'Adaptive underwear and intimates using magnetic closures on the sides instead of waistbands. Designed for wheelchair users, amputees, and anyone who struggles with traditional underwear.',
    url: 'https://www.slickchicksonline.com',
    categories: ['arthritis', 'limb-difference', 'wheelchair', 'paralysis'],
    features: ['Side-opening magnetic', 'No waistband pull', 'Easy one-hand dressing', 'Soft cotton'],
    priceRange: '$$',
    shipping: ['US', 'Canada', 'UK'],
    ageGroups: ['adults'],
  },
  {
    id: 'rebirth-garments',
    name: 'Rebirth Garments',
    description:
      'Size-inclusive, gender-expansive adaptive clothing made for people with disabilities, scars, and body differences. Every piece is handmade and celebrates the full spectrum of ability.',
    url: 'https://rebirthgarments.com',
    categories: ['burns', 'sensory', 'wheelchair', 'limb-difference'],
    features: ['Handmade', 'Gender-neutral', 'Scar/skin sensitive', 'Size-inclusive'],
    priceRange: '$$$',
    shipping: ['US'],
    ageGroups: ['adults'],
    badge: 'Inclusive Design',
  },
  {
    id: 'care-wear',
    name: 'Care+Wear',
    description:
      'Medical-grade adaptive wear designed with healthcare providers. Offers PICC line covers, post-surgical clothing, and soft recovery wear that is functional, dignified, and comfortable.',
    url: 'https://www.careandwear.com',
    categories: ['paralysis', 'wheelchair', 'burns'],
    features: ['PICC line covers', 'Post-surgical', 'Hospital-grade soft', 'Dignified design'],
    priceRange: '$$',
    shipping: ['US', 'Canada', 'UK'],
    ageGroups: ['adults'],
  },
  {
    id: 'target-adaptive',
    name: 'Target Adaptive (Cat & Jack)',
    company: 'Target',
    description:
      'Target\'s Cat & Jack and A New Day lines include adaptive options: tagless, sensory-friendly kids clothes, and easy-dressing adult clothing. Affordable and widely available.',
    url: 'https://www.target.com/c/adaptive-clothing/-/N-4y6e6',
    categories: ['sensory', 'kids', 'arthritis'],
    features: ['Tagless', 'Sensory-friendly', 'Easy-snap', 'Affordable'],
    priceRange: '$',
    shipping: ['US'],
    ageGroups: ['adults', 'kids'],
    badge: 'Budget Friendly',
  },
  {
    id: 'gap-adaptive',
    name: 'Gap Adaptive',
    company: 'Gap',
    description:
      'Gap\'s adaptive line offers easy-on clothing for adults and kids — featuring magnetic closures, elastic waists, and sensory-friendly construction while keeping the classic Gap look.',
    url: 'https://www.gap.com/browse/category.do?cid=1101622',
    categories: ['sensory', 'kids', 'arthritis'],
    features: ['Magnetic closures', 'Elastic waists', 'Sensory-friendly', 'Classic styles'],
    priceRange: '$',
    shipping: ['US', 'Canada'],
    ageGroups: ['adults', 'kids'],
  },
  {
    id: 'lands-end-adaptive',
    name: "Lands' End Adaptive",
    company: "Lands' End",
    description:
      "Lands' End offers a dedicated adaptive line with seated-fit pants, easy-dressing tops, and adaptive swimwear. Known for quality fabrics and size inclusivity.",
    url: 'https://www.landsend.com/c/adaptive-clothing',
    categories: ['wheelchair', 'arthritis'],
    features: ['Seated-fit pants', 'Elastic waistbands', 'Adaptive swimwear', 'Extended sizes'],
    priceRange: '$$',
    shipping: ['US', 'Canada'],
    ageGroups: ['adults'],
  },
  {
    id: 'ffora',
    name: 'Ffora',
    description:
      'Stylish wheelchair bag and accessory system that clips securely to any wheelchair. Modular bags that work like a hands-free purse or backpack for daily use.',
    url: 'https://www.ffora.com',
    categories: ['wheelchair', 'paralysis'],
    features: ['Wheelchair-mounted bags', 'Modular system', 'Hands-free carry', 'Sleek design'],
    priceRange: '$$',
    shipping: ['US', 'Canada', 'UK', 'EU', 'Australia'],
    ageGroups: ['adults'],
    badge: 'Accessories',
  },
  {
    id: 'adaptations-by-adrian',
    name: 'Adaptations by Adrian',
    description:
      'Custom adaptive clothing tailored to individual needs. Specializes in one-of-a-kind garments modified for wheelchair users, amputees, and people with specific dressing challenges.',
    url: 'https://www.adaptationsbyadrian.com',
    categories: ['wheelchair', 'limb-difference', 'paralysis'],
    features: ['Custom made', 'Individual fitting', 'Any modification', 'Personal consultation'],
    priceRange: '$$$',
    shipping: ['US', 'Canada'],
    ageGroups: ['adults'],
  },
  {
    id: 'primary-adaptive',
    name: 'Primary Adaptive',
    company: 'Primary',
    description:
      'Bright, colorful, tagless sensory-friendly kids clothing. Simple construction with no itchy seams, tags, or tight elastic. Easy-on designs perfect for children with sensory processing differences.',
    url: 'https://www.primary.com/pages/adaptive',
    categories: ['sensory', 'kids'],
    features: ['Tagless', 'No itchy seams', 'Easy-on', 'Sensory-friendly', 'Bright colors'],
    priceRange: '$',
    shipping: ['US', 'Canada'],
    ageGroups: ['kids'],
    badge: 'Great for Kids',
  },
  {
    id: 'open-style-lab',
    name: 'Open Style Lab',
    description:
      'A research-driven nonprofit designing wearable solutions for people with disabilities. Products include the FFORA bag and research partnerships. Focus on visual and mobility impairments.',
    url: 'https://www.openstylelab.org',
    categories: ['visual', 'wheelchair', 'limb-difference'],
    features: ['Research-driven', 'Universal design', 'Award-winning', 'Nonprofit'],
    priceRange: '$$',
    shipping: ['US'],
    ageGroups: ['adults'],
    badge: 'Nonprofit',
  },
  {
    id: 'columbia-adaptive',
    name: 'Columbia Adaptive Outerwear',
    company: 'Columbia Sportswear',
    description:
      "Columbia's adaptive outdoor collection includes one-handed zip systems, wheelchair-friendly outerwear with extended back coverage, and adaptive ski jackets.",
    url: 'https://www.columbia.com/c/adaptive-outerwear',
    categories: ['wheelchair', 'limb-difference', 'arthritis'],
    features: ['One-hand zip', 'Extended back coverage', 'Weather protection', 'Outdoor performance'],
    priceRange: '$$$',
    shipping: ['US', 'Canada', 'UK', 'EU', 'Australia'],
    ageGroups: ['adults'],
    badge: 'Outdoor / Active',
  },
]

export function filterBrands(
  allBrands: Brand[],
  disabilities: DisabilityType[],
  location: string,
): Brand[] {
  return allBrands.filter((brand) => {
    if (disabilities.length > 0) {
      const hasMatch = disabilities.some((d) => brand.categories.includes(d))
      if (!hasMatch) return false
    }

    if (location.trim()) {
      const loc = location.trim().toLowerCase()
      const shipsHere = brand.shipping.some((region) =>
        region.toLowerCase().includes(loc) ||
        loc.includes(region.toLowerCase())
      )
      if (!shipsHere) return false
    }

    return true
  })
}
