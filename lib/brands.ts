import { Brand, DisabilityType, StyleCategory } from '@/types'

export const brands: Brand[] = [
  {
    id: 'tommy-adaptive',
    logo: 'https://www.google.com/s2/favicons?domain=tommy.com&sz=128',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=600&h=240&q=80',
    name: 'Tommy Adaptive',
    company: 'Tommy Hilfiger',
    description:
      'A full adaptive clothing line featuring magnetic button closures, Velcro fasteners, open-back and side-entry options, and seated-fit silhouettes. Covers everyday wear, denim, outerwear, and footwear for adults and kids.',
    adaptiveDescription:
      'Tommy Adaptive uses high-strength neodymium magnets concealed within button plackets, creating secure closures that require only one hand. Seated-fit pants are engineered with a lowered back rise and raised front rise, preventing waistband bunching during long periods of seated use. Open-back tops and dresses allow for full dressing assistance without removing the garment, while adjustable hems on trousers accommodate wheelchairs and leg rests. Wide velcro-closure loop-and-hook systems replace traditional zippers on many outerwear items.',
    url: 'https://usa.tommy.com/en/tommy-adaptive',
    socialLinks: { instagram: 'https://www.instagram.com/tommyhilfiger/' },
    categories: ['wheelchair', 'limb-difference', 'paralysis', 'arthritis'],
    productCategories: ['Tops', 'Bottoms', 'Denim', 'Outerwear', 'Footwear', 'Accessories'],
    features: ['Magnetic closures', 'Velcro fasteners', 'Seated fit', 'Open-back options', 'One-hand dressing'],
    certifications: ['ADA-informed Design Guidelines'],
    priceRange: '$$',
    shipping: ['US', 'Canada', 'UK', 'Australia', 'EU'],
    ageGroups: ['adults', 'kids'],
    badge: "Editor's Pick",
    styles: ['casual', 'formal', 'streetwear'],
  },
  {
    id: 'nike-flyease',
    logo: 'https://www.google.com/s2/favicons?domain=nike.com&sz=128',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&h=240&q=80',
    name: 'Nike FlyEase',
    company: 'Nike',
    description:
      'Hands-free footwear technology designed for easy entry and exit. The Go FlyEase sneaker can be put on and taken off without bending over or using hands. Offers multiple styles for adults and kids.',
    adaptiveDescription:
      'The FlyEase system uses a bi-stable hinge mechanism that props the heel counter open while putting on the shoe, then snaps shut once the foot is fully seated — requiring zero hand involvement. The rubber heel pull is oversized for easier manipulation with limited grip strength, and the wide opening accommodates ankle-foot orthotics. Available in multiple widths (Medium, Wide, Extra Wide), the line addresses fitting challenges caused by edema, AFOs, and prosthetic feet. The knit upper provides natural stretch to accommodate varying foot volumes throughout the day.',
    url: 'https://www.nike.com/flyease',
    socialLinks: { instagram: 'https://www.instagram.com/nike/' },
    categories: ['wheelchair', 'limb-difference', 'arthritis', 'paralysis'],
    productCategories: ['Footwear'],
    features: ['Hands-free entry/exit', 'No bending required', 'Biometric closure', 'Multiple widths'],
    certifications: ['Universal Design Award'],
    priceRange: '$$',
    shipping: ['US', 'Canada', 'UK', 'Australia', 'EU', 'Global'],
    ageGroups: ['adults', 'kids'],
    badge: 'Popular',
    styles: ['sportswear', 'casual', 'streetwear'],
  },
  {
    id: 'zappos-adaptive',
    logo: 'https://www.google.com/s2/favicons?domain=zappos.com&sz=128',
    image: 'https://images.unsplash.com/photo-1600185365483-26d7a4cc4519?auto=format&fit=crop&w=600&h=240&q=80',
    name: 'Zappos Adaptive',
    company: 'Zappos',
    description:
      'A dedicated adaptive fashion storefront curated from hundreds of brands. Includes clothing, shoes, and accessories with easy-on features. Excellent filters by disability type and feature.',
    adaptiveDescription:
      'Zappos Adaptive aggregates hundreds of adaptive and easy-on products into a single searchable catalog, filterable by specific features like magnetic closures, velcro, elastic waists, and sensory-friendly properties. Free two-way shipping eliminates financial risk when trying adaptive styles, which often requires multiple size or feature iterations. The platform partners directly with specialty adaptive brands and mainstream labels with adaptive lines, ensuring current inventory and accurate feature labeling. Their customer service team includes trained associates who can assist with adaptive-specific fit questions.',
    url: 'https://www.zappos.com/adaptive',
    categories: ['wheelchair', 'limb-difference', 'arthritis', 'sensory', 'paralysis', 'visual'],
    productCategories: ['Tops', 'Bottoms', 'Footwear', 'Accessories'],
    features: ['Curated marketplace', 'Filter by feature', 'Wide selection', 'Free returns'],
    priceRange: '$$',
    shipping: ['US', 'Canada'],
    ageGroups: ['adults', 'kids'],
    styles: ['casual', 'sportswear', 'formal', 'minimalist', 'streetwear'],
  },
  {
    id: 'iz-adaptive',
    logo: 'https://www.google.com/s2/favicons?domain=izadaptive.com&sz=128',
    image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=600&h=240&q=80',
    name: 'IZ Adaptive',
    description:
      'Canadian adaptive clothing brand founded by a wheelchair user. Specializes in seated-fit tops, bottoms, and outerwear that look great whether sitting or standing. Form meets function.',
    adaptiveDescription:
      'Founded by wheelchair user Izzy Camilleri, IZ Adaptive specializes in seated-fit garments that look as intentional in a wheelchair as standing clothes look on their wearers. Pants have a shorter front rise, a longer back rise, and no rear pockets to prevent pressure points during seated use. Jackets and outerwear are cut shorter in the back with extended front panels, keeping the lap dry while remaining visually balanced. Many pieces use side-zip openings or side-snap closures to facilitate dressing without standing or transferring.',
    url: 'https://www.izadaptive.com',
    socialLinks: { instagram: 'https://www.instagram.com/izadaptive/' },
    categories: ['wheelchair', 'paralysis'],
    productCategories: ['Tops', 'Bottoms', 'Outerwear', 'Dresses'],
    features: ['Seated fit', 'Stylish design', 'Open-back closure', 'Moisture-wicking'],
    certifications: ['Founded by a wheelchair user'],
    priceRange: '$$',
    shipping: ['US', 'Canada', 'UK', 'EU'],
    ageGroups: ['adults'],
    badge: 'Wheelchair Specialist',
    styles: ['casual', 'formal', 'minimalist'],
  },
  {
    id: 'silverts',
    logo: 'https://www.google.com/s2/favicons?domain=silverts.com&sz=128',
    image: 'https://images.unsplash.com/photo-1489987707849-d9d97f8b10af?auto=format&fit=crop&w=600&h=240&q=80',
    name: "Silvert's Adaptive Clothing",
    description:
      'Adaptive and easy-dressing clothing for seniors and people with disabilities since 1949. Specializes in open-back garments, side-snap pants, and Velcro shoes. A trusted name with broad selection.',
    adaptiveDescription:
      "Silvert's has specialized in open-back adaptive clothing since 1949, pioneering many design features now standard in the adaptive clothing industry. Their signature open-back shirts and dresses use discreet hook-and-loop closures at the neckline and center back, allowing full caregiver-assisted dressing while the wearer remains seated. Elastic side panels in waistbands reduce the strength needed to pull garments up, while side-snap pants fully open along the outer seams for over-cast or brace dressing. Their Velcro shoe line eliminates the need for any lacing manipulation.",
    url: 'https://www.silverts.com',
    categories: ['arthritis', 'wheelchair', 'visual', 'paralysis'],
    productCategories: ['Tops', 'Bottoms', 'Footwear', 'Sleepwear', 'Accessories'],
    features: ['Open-back garments', 'Side-snap pants', 'Velcro shoes', 'Easy-grip closures'],
    priceRange: '$',
    shipping: ['US', 'Canada', 'UK', 'Australia'],
    ageGroups: ['adults'],
    styles: ['casual', 'formal'],
  },
  {
    id: 'buck-and-buck',
    logo: 'https://www.google.com/s2/favicons?domain=buckandbuck.com&sz=128',
    image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=600&h=240&q=80',
    name: 'Buck & Buck',
    description:
      'Pioneering adaptive clothing brand since 1982. Offers a full range of open-back and side-snap clothing, bibs, aprons, and accessories designed for people with physical disabilities.',
    adaptiveDescription:
      'Buck & Buck, founded in 1982, specializes in dignified adaptive clothing that maintains a conventional appearance while accommodating a wide range of physical limitations. Their open-back designs use concealed hook-and-loop tape at the neckline and center back, providing complete back openings for bed or chair dressing. Side-snap closures on pants allow full opening along the outer leg seam, essential for users with leg braces, catheters, or significant lower-limb limitations. Wide-neck openings reduce the reaching and lifting required for overhead dressing.',
    url: 'https://www.buckandbuck.com',
    categories: ['arthritis', 'wheelchair', 'paralysis'],
    productCategories: ['Tops', 'Bottoms', 'Bibs', 'Accessories'],
    features: ['Open-back designs', 'Side-snap closures', 'Elastic waistbands', 'Wide fit options'],
    priceRange: '$',
    shipping: ['US', 'Canada'],
    ageGroups: ['adults'],
    styles: ['casual', 'formal'],
  },
  {
    id: 'joe-and-bella',
    logo: 'https://www.google.com/s2/favicons?domain=joeandbella.com&sz=128',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&h=240&q=80',
    name: 'Joe & Bella',
    description:
      "Modern adaptive clothing that looks like mainstream fashion. Designed for people with arthritis, Parkinson's, and limited mobility. Features hidden magnetic and Velcro closures that mimic buttons and snaps.",
    adaptiveDescription:
      "Joe & Bella's designs use rare-earth magnets hidden behind the visual button position, creating the aesthetic of traditional button-down shirts while functioning with a simple push-together motion. Garments designed for Parkinson's disease include interior weighted cuffs to reduce tremor-related dressing difficulty, and feature extra-long shirttails that stay tucked during movement. Pants use elastic waistbands disguised behind a false fly front, maintaining the formal appearance of tailored trousers. Snap-and-go pullovers use large ring pulls on hidden zippers running to the base of the collar.",
    url: 'https://www.joeandbella.com',
    socialLinks: { instagram: 'https://www.instagram.com/joeandbella_adaptive/' },
    categories: ['arthritis', 'paralysis'],
    productCategories: ['Tops', 'Bottoms', 'Outerwear'],
    features: ['Hidden magnetic closures', 'Mainstream look', "Parkinson's friendly", 'Soft fabrics'],
    certifications: ['Occupational Therapist Approved'],
    priceRange: '$$',
    shipping: ['US', 'Canada', 'UK', 'EU'],
    ageGroups: ['adults'],
    badge: 'Best for Seniors',
    styles: ['casual', 'formal', 'minimalist'],
  },
  {
    id: 'slick-chicks',
    logo: 'https://www.google.com/s2/favicons?domain=slickchicksonline.com&sz=128',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=600&h=240&q=80',
    name: 'Slick Chicks',
    description:
      'Adaptive underwear and intimates using magnetic closures on the sides instead of waistbands. Designed for wheelchair users, amputees, and anyone who struggles with traditional underwear.',
    adaptiveDescription:
      'Slick Chicks redesigned underwear from the ground up, replacing the conventional waistband-and-crotch system with a fully side-opening design secured by magnetic snaps. The side openings allow the underwear to be placed beneath and fastened around the wearer from a seated position, eliminating the need for stepping in or pulling up. Magnetic snaps provide secure closure that can be manipulated with a single hand or by a caregiver without repositioning the wearer. The fabric is 100% cotton with flat-lock seams to eliminate pressure points for users with reduced sensation.',
    url: 'https://www.slickchicksonline.com',
    socialLinks: { instagram: 'https://www.instagram.com/slickchicksonline/' },
    categories: ['arthritis', 'limb-difference', 'wheelchair', 'paralysis'],
    productCategories: ['Underwear', 'Bralettes', 'Intimates'],
    features: ['Side-opening magnetic', 'No waistband pull', 'Easy one-hand dressing', 'Soft cotton'],
    priceRange: '$$',
    shipping: ['US', 'Canada', 'UK'],
    ageGroups: ['adults'],
    styles: ['casual', 'minimalist'],
  },
  {
    id: 'rebirth-garments',
    logo: 'https://www.google.com/s2/favicons?domain=rebirthgarments.com&sz=128',
    image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=600&h=240&q=80',
    name: 'Rebirth Garments',
    description:
      'Size-inclusive, gender-expansive adaptive clothing made for people with disabilities, scars, and body differences. Every piece is handmade and celebrates the full spectrum of ability.',
    adaptiveDescription:
      'Rebirth Garments makes each piece by hand, allowing for fully custom fit accommodation for wheelchair frames, assistive devices, prosthetics, and post-surgical body changes. Their gender-expansive sizing system uses body measurements rather than gendered categories, with each garment available across a continuous size range covering XS–6X. Fabrics are selected for sensory compatibility, prioritizing smooth textures, flat seams, and natural fibers. Custom modifications including extra-wide necklines, side openings, and reinforced pressure points are available at no additional cost.',
    url: 'https://rebirthgarments.com',
    socialLinks: { instagram: 'https://www.instagram.com/rebirthgarments/' },
    categories: ['burns', 'sensory', 'wheelchair', 'limb-difference'],
    productCategories: ['Custom Garments', 'Swimwear', 'Eveningwear', 'Activewear'],
    features: ['Handmade', 'Gender-neutral', 'Scar/skin sensitive', 'Size-inclusive'],
    certifications: ['Disability-owned business'],
    priceRange: '$$$',
    shipping: ['US'],
    ageGroups: ['adults'],
    badge: 'Inclusive Design',
    styles: ['streetwear', 'minimalist'],
  },
  {
    id: 'care-wear',
    logo: 'https://www.google.com/s2/favicons?domain=careandwear.com&sz=128',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=600&h=240&q=80',
    name: 'Care+Wear',
    description:
      'Medical-grade adaptive wear designed with healthcare providers. Offers PICC line covers, post-surgical clothing, and soft recovery wear that is functional, dignified, and comfortable.',
    adaptiveDescription:
      'Care+Wear designs medical-grade adaptive wear with the dual requirement of clinical function and personal dignity. Their PICC line sleeves are the first to achieve both PICC line access and full waterproofing while maintaining a soft jersey appearance suitable for daily wear. Post-surgical clothing uses proprietary snap systems at all major joints that allow access without removing the entire garment, reducing the risk of disrupting surgical sites. All fabric is OEKO-TEX certified and pre-washed, eliminating chemical finishes that can irritate post-surgical or compromised skin.',
    url: 'https://www.careandwear.com',
    categories: ['paralysis', 'wheelchair', 'burns'],
    productCategories: ['PICC Line Covers', 'Recovery Wear', 'Tops', 'Bottoms'],
    features: ['PICC line covers', 'Post-surgical', 'Hospital-grade soft', 'Dignified design'],
    certifications: ['OEKO-TEX Certified', 'Healthcare Provider Endorsed'],
    priceRange: '$$',
    shipping: ['US', 'Canada', 'UK'],
    ageGroups: ['adults'],
    styles: ['minimalist'],
  },
  {
    id: 'target-adaptive',
    logo: 'https://www.google.com/s2/favicons?domain=target.com&sz=128',
    image: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=600&h=240&q=80',
    name: 'Target Adaptive (Cat & Jack)',
    company: 'Target',
    description:
      "Target's Cat & Jack and A New Day lines include adaptive options: tagless, sensory-friendly kids clothes, and easy-dressing adult clothing. Affordable and widely available.",
    adaptiveDescription:
      "Target's adaptive lines — Cat & Jack for children and A New Day for adults — use tagless construction throughout, eliminating the most common sensory irritant in conventional children's clothing. Easy-on elastic waistbands and wide neck openings reduce the reaching, coordination, and fine motor precision required for dressing independently. Sensory-friendly finishes remove standard fabric stiffeners and heavy dyes while maintaining machine-washable durability. Snap-closure panels on select styles allow dressing from the front rather than overhead.",
    url: 'https://www.target.com/c/adaptive-clothing/-/N-4y6e6',
    categories: ['sensory', 'kids', 'arthritis'],
    productCategories: ['Tops', 'Bottoms', 'Dresses', 'Accessories'],
    features: ['Tagless', 'Sensory-friendly', 'Easy-snap', 'Affordable'],
    priceRange: '$',
    shipping: ['US'],
    ageGroups: ['adults', 'kids'],
    badge: 'Budget Friendly',
    styles: ['casual', 'sportswear'],
  },
  {
    id: 'gap-adaptive',
    logo: 'https://www.google.com/s2/favicons?domain=gap.com&sz=128',
    image: 'https://images.unsplash.com/photo-1555689502-c4b22d76c56f?auto=format&fit=crop&w=600&h=240&q=80',
    name: 'Gap Adaptive',
    company: 'Gap',
    description:
      "Gap's adaptive line offers easy-on clothing for adults and kids — featuring magnetic closures, elastic waists, and sensory-friendly construction while keeping the classic Gap look.",
    adaptiveDescription:
      "Gap's adaptive line integrates functional modifications into their classic silhouettes, making adaptive features invisible in the final garment. Magnetic button closures use a pull-apart and snap-together mechanism rated at 18N pull strength — strong enough to stay closed during activity but manageable with minimal grip strength. Adjustable inseam hems on pants are modified after purchase by Gap's adaptive alteration service, accommodating various wheelchair heights. Tagless construction and soft waistbands address sensory needs across both the kids and adult lines.",
    url: 'https://www.gap.com/browse/category.do?cid=1101622',
    categories: ['sensory', 'kids', 'arthritis'],
    productCategories: ['Tops', 'Bottoms', 'Outerwear', 'Denim'],
    features: ['Magnetic closures', 'Elastic waists', 'Sensory-friendly', 'Classic styles'],
    priceRange: '$',
    shipping: ['US', 'Canada'],
    ageGroups: ['adults', 'kids'],
    styles: ['casual', 'minimalist'],
  },
  {
    id: 'lands-end-adaptive',
    logo: 'https://www.google.com/s2/favicons?domain=landsend.com&sz=128',
    image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=600&h=240&q=80',
    name: "Lands' End Adaptive",
    company: "Lands' End",
    description:
      "Lands' End offers a dedicated adaptive line with seated-fit pants, easy-dressing tops, and adaptive swimwear. Known for quality fabrics and size inclusivity.",
    adaptiveDescription:
      "Lands' End Adaptive centers its line on seated-fit essentials engineered from their existing performance fabrics. Seated-fit pants use a lower front rise and higher back rise, ensuring comfort during extended periods of sitting. Adaptive swimwear is particularly notable, featuring magnetic closure rash guards and side-zip one-pieces that allow pool entry and exit without full garment removal. Extended sizes throughout the adaptive line ensure access for users at all body sizes, reaching up to 5X in select styles.",
    url: 'https://www.landsend.com/c/adaptive-clothing',
    categories: ['wheelchair', 'arthritis'],
    productCategories: ['Tops', 'Bottoms', 'Swimwear', 'Outerwear'],
    features: ['Seated-fit pants', 'Elastic waistbands', 'Adaptive swimwear', 'Extended sizes'],
    priceRange: '$$',
    shipping: ['US', 'Canada'],
    ageGroups: ['adults'],
    styles: ['casual', 'minimalist', 'sportswear'],
  },
  {
    id: 'ffora',
    logo: 'https://www.google.com/s2/favicons?domain=ffora.com&sz=128',
    image: 'https://images.unsplash.com/photo-1548036161-166a6538a094?auto=format&fit=crop&w=600&h=240&q=80',
    name: 'Ffora',
    description:
      'Stylish wheelchair bag and accessory system that clips securely to any wheelchair. Modular bags that work like a hands-free purse or backpack for daily use.',
    adaptiveDescription:
      "Ffora's modular bag system clips directly onto wheelchairs, walkers, and other mobility aids via a universal quick-release mount that installs without tools. The primary bag uses a waterfall opening rather than a zip, eliminating the need for any grip or zip manipulation to access contents. Individual modular pods for keys, phones, wallets, and medical supplies connect magnetically to the main bag and can be detached and handed to others without removing the full system. The frame is impact-resistant polymer that maintains shape in the tight spaces common around wheelchair wheels and frames.",
    url: 'https://www.ffora.com',
    socialLinks: { instagram: 'https://www.instagram.com/shopffora/' },
    categories: ['wheelchair', 'paralysis'],
    productCategories: ['Bags', 'Accessories', 'Modular Systems'],
    features: ['Wheelchair-mounted bags', 'Modular system', 'Hands-free carry', 'Sleek design'],
    priceRange: '$$',
    shipping: ['US', 'Canada', 'UK', 'EU', 'Australia'],
    ageGroups: ['adults'],
    badge: 'Accessories',
    styles: ['streetwear', 'casual', 'minimalist'],
  },
  {
    id: 'adaptations-by-adrian',
    logo: 'https://www.google.com/s2/favicons?domain=adaptationsbyadrian.com&sz=128',
    image: 'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&w=600&h=240&q=80',
    name: 'Adaptations by Adrian',
    description:
      'Custom adaptive clothing tailored to individual needs. Specializes in one-of-a-kind garments modified for wheelchair users, amputees, and people with specific dressing challenges.',
    adaptiveDescription:
      'Adaptations by Adrian offers one-on-one consultations to design clothing modifications precisely matched to each individual\'s limitations, adaptive devices, and dressing routine. Their custom modifications include off-center closures for users with limited range of motion on one side, reinforced fabric panels for users with skin fragility or pressure-sore risk, and built-in loops or rings for self-dressing with limited grip. Unlike standard adaptive brands, they can modify any garment — including high-end fashion pieces brought in by clients — rather than working only from their own catalog. All modifications are made in-house with the original garment\'s materials where possible.',
    url: 'https://www.adaptationsbyadrian.com',
    categories: ['wheelchair', 'limb-difference', 'paralysis'],
    productCategories: ['Custom Garments', 'Modified Fashion', 'All Categories'],
    features: ['Custom made', 'Individual fitting', 'Any modification', 'Personal consultation'],
    priceRange: '$$$',
    shipping: ['US', 'Canada'],
    ageGroups: ['adults'],
    styles: ['casual', 'formal', 'sportswear', 'minimalist', 'old-money'],
  },
  {
    id: 'primary-adaptive',
    logo: 'https://www.google.com/s2/favicons?domain=primary.com&sz=128',
    image: 'https://images.unsplash.com/photo-1503944168849-8bf86875bcd8?auto=format&fit=crop&w=600&h=240&q=80',
    name: 'Primary Adaptive',
    company: 'Primary',
    description:
      'Bright, colorful, tagless sensory-friendly kids clothing. Simple construction with no itchy seams, tags, or tight elastic. Easy-on designs perfect for children with sensory processing differences.',
    adaptiveDescription:
      "Primary's adaptive children's clothing eliminates all sources of sensory discomfort without sacrificing visual simplicity. Tags are screen-printed rather than sewn, removing fabric tag irritation at the neck. Flat seams throughout the garment prevent raised ridges along the arms, legs, and torso — a primary complaint from children with sensory processing differences. Waistbands use a double-panel elastic construction with no hard inner elastic for even pressure distribution, and all fabric is pre-washed to a soft finish without chemical stiffeners.",
    url: 'https://www.primary.com/pages/adaptive',
    categories: ['sensory', 'kids'],
    productCategories: ['Tops', 'Bottoms', 'Dresses', 'Activewear'],
    features: ['Tagless', 'No itchy seams', 'Easy-on', 'Sensory-friendly', 'Bright colors'],
    priceRange: '$',
    shipping: ['US', 'Canada'],
    ageGroups: ['kids'],
    badge: 'Great for Kids',
    styles: ['casual', 'sportswear'],
  },
  {
    id: 'open-style-lab',
    logo: 'https://www.google.com/s2/favicons?domain=openstylelab.org&sz=128',
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=600&h=240&q=80',
    name: 'Open Style Lab',
    description:
      'A research-driven nonprofit designing wearable solutions for people with disabilities. Products include the FFORA bag and research partnerships. Focus on visual and mobility impairments.',
    adaptiveDescription:
      'Open Style Lab is a research-driven design nonprofit that produces evidence-based adaptive fashion through cross-disciplinary collaborations between fashion designers, occupational therapists, and engineers. Their research partnerships with MIT and Parsons generate peer-reviewed insights into how clothing design affects independence and dignity for users with disabilities. Product development involves extended user-testing periods with real adaptive fashion users, ensuring solutions address actual limitations rather than assumed ones. Their design documentation and patterns are open-sourced for replication by other designers and occupational therapists.',
    url: 'https://www.openstylelab.org',
    categories: ['visual', 'wheelchair', 'limb-difference'],
    productCategories: ['Research Wear', 'Accessories'],
    features: ['Research-driven', 'Universal design', 'Award-winning', 'Nonprofit'],
    certifications: ['MIT Media Lab Partnership', 'Parsons Design Collaboration'],
    priceRange: '$$',
    shipping: ['US'],
    ageGroups: ['adults'],
    badge: 'Nonprofit',
    styles: ['minimalist'],
  },
  {
    id: 'columbia-adaptive',
    logo: 'https://www.google.com/s2/favicons?domain=columbia.com&sz=128',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=600&h=240&q=80',
    name: 'Columbia Adaptive Outerwear',
    company: 'Columbia Sportswear',
    description:
      "Columbia's adaptive outdoor collection includes one-handed zip systems, wheelchair-friendly outerwear with extended back coverage, and adaptive ski jackets.",
    adaptiveDescription:
      "Columbia Adaptive's Tough Mama program redesigns their standard technical outerwear for one-handed use and wheelchair compatibility. One-zip entry systems allow the entire jacket to be donned from a seated position using a single zipper pull, which runs from the base hem diagonally across the body to the opposite shoulder. Extended back panels prevent back exposure when seated, addressing the gap that forms between a standard jacket and the wheelchair seat during use. Magnetic cuff closures replace conventional snaps or velcro on gloves and jacket cuffs, requiring no pinching action to fasten.",
    url: 'https://www.columbia.com/c/adaptive-outerwear',
    socialLinks: { instagram: 'https://www.instagram.com/columbia1938/' },
    categories: ['wheelchair', 'limb-difference', 'arthritis'],
    productCategories: ['Outerwear', 'Jackets', 'Activewear', 'Accessories'],
    features: ['One-hand zip', 'Extended back coverage', 'Weather protection', 'Outdoor performance'],
    certifications: ['Bluesign Certified Materials'],
    priceRange: '$$$',
    shipping: ['US', 'Canada', 'UK', 'EU', 'Australia'],
    ageGroups: ['adults'],
    badge: 'Outdoor / Active',
    styles: ['sportswear', 'casual'],
  },
]

export function filterBrands(
  allBrands: Brand[],
  disabilities: DisabilityType[],
  location: string,
  styles: StyleCategory[] = [],
): Brand[] {
  return allBrands.filter((brand) => {
    if (disabilities.length > 0) {
      const hasMatch = disabilities.some((d) => brand.categories.includes(d))
      if (!hasMatch) return false
    }

    if (location.trim()) {
      const loc = location.trim().toLowerCase()
      const shipsHere = brand.shipping.some(
        (region) =>
          region.toLowerCase().includes(loc) || loc.includes(region.toLowerCase()),
      )
      if (!shipsHere) return false
    }

    if (styles.length > 0) {
      const hasStyleMatch = styles.some((s) => brand.styles.includes(s))
      if (!hasStyleMatch) return false
    }

    return true
  })
}

export function getSimilarBrands(currentId: string, limit = 3): Brand[] {
  const current = brands.find((b) => b.id === currentId)
  if (!current) return []
  return brands
    .filter((b) => b.id !== currentId)
    .map((b) => ({
      brand: b,
      score: current.categories.filter((c) => b.categories.includes(c)).length,
    }))
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(({ brand }) => brand)
}

export function sortBrandsByStyle(
  filteredBrands: Brand[],
  preferredStyles: StyleCategory[],
): Brand[] {
  if (preferredStyles.length === 0) return filteredBrands
  return [...filteredBrands].sort((a, b) => {
    const scoreA = preferredStyles.filter((s) => a.styles.includes(s)).length
    const scoreB = preferredStyles.filter((s) => b.styles.includes(s)).length
    return scoreB - scoreA
  })
}
