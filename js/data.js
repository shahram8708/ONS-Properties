const fallbackData = {
  properties: [
    {
      id: 'res001',
      title: 'Elegant 3BHK Skyline Residence',
      type: 'Residential',
      location: 'Prahlad Nagar, Ahmedabad',
      price: 12500000,
      price_display: '₹1.25 Cr',
      size: '1980 sq ft',
      bhk: '3BHK',
      status: 'Featured',
      badge: 'Featured',
      badge_color: 'gold',
      image: 'https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?auto=format&fit=crop&w=1200&q=80',
      description: 'Premium 3BHK apartment in a gated community close to corporate offices, schools, and hospitals. The home offers natural light, cross ventilation, and a spacious balcony view. Ideal for families seeking a central Ahmedabad address.',
      features: ['Reserved Parking', 'Gym', '24x7 Security', 'Clubhouse', 'Power Backup'],
      whatsapp_text: 'I am interested in Elegant 3BHK Skyline Residence (RES001). Please share more details.',
      area: 'Prahlad Nagar'
    },
    {
      id: 'res002',
      title: 'Family 2BHK Garden Apartment',
      type: 'Residential',
      location: 'Bopal, Ahmedabad',
      price: 6800000,
      price_display: '₹68 Lakh',
      size: '1320 sq ft',
      bhk: '2BHK',
      status: 'Available',
      badge: 'Available',
      badge_color: 'green',
      image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80',
      description: 'Well planned 2BHK apartment in a family friendly township with landscaped open spaces. Daily needs, schools, and access roads are nearby for a practical lifestyle. Suitable for first time buyers and young professionals.',
      features: ['Children Play Area', 'Lift', 'Security', 'Covered Parking', 'Jogging Track'],
      whatsapp_text: 'I am interested in Family 2BHK Garden Apartment (RES002). Please share more details.',
      area: 'Bopal'
    },
    {
      id: 'res003',
      title: 'Premium 3BHK Corner Flat',
      type: 'Residential',
      location: 'Satellite, Ahmedabad',
      price: 14200000,
      price_display: '₹1.42 Cr',
      size: '2100 sq ft',
      bhk: '3BHK',
      status: 'Available',
      badge: 'Hot Deal',
      badge_color: 'red',
      image: 'https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=1200&q=80',
      description: 'Corner unit with wide living room, modular kitchen, and premium finish specification. Located in one of West Ahmedabad established micro markets with strong connectivity. Strong rental demand and long term value make it attractive.',
      features: ['Two Car Parking', 'CCTV', 'Intercom', 'Club Access', 'Senior Citizen Deck'],
      whatsapp_text: 'I am interested in Premium 3BHK Corner Flat (RES003). Please share more details.',
      area: 'Satellite'
    },
    {
      id: 'res004',
      title: 'Lakeside 2BHK Comfort Home',
      type: 'Residential',
      location: 'Vastrapur, Ahmedabad',
      price: 8900000,
      price_display: '₹89 Lakh',
      size: '1450 sq ft',
      bhk: '2BHK',
      status: 'Featured',
      badge: 'Featured',
      badge_color: 'gold',
      image: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80',
      description: 'Beautifully maintained 2BHK near Vastrapur Lake with smooth access to schools and retail avenues. The layout offers practical separation between living and bedroom spaces. A strong option for both self use and rental income.',
      features: ['Lake Proximity', 'Gym', 'Visitor Parking', 'Security', 'Power Backup'],
      whatsapp_text: 'I am interested in Lakeside 2BHK Comfort Home (RES004). Please share more details.',
      area: 'Vastrapur'
    },
    {
      id: 'res005',
      title: 'Ultra Spacious 4BHK Duplex',
      type: 'Residential',
      location: 'Thaltej, Ahmedabad',
      price: 23500000,
      price_display: '₹2.35 Cr',
      size: '3200 sq ft',
      bhk: '4BHK+',
      status: 'Available',
      badge: 'Available',
      badge_color: 'green',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
      description: 'Large duplex residence in a premium neighborhood with spacious decks and family centric planning. The property suits buyers looking for privacy and upscale living standards. Connectivity to SG Highway and key schools is excellent.',
      features: ['Private Deck', 'Servant Room', 'CCTV', 'Clubhouse', 'Two Level Parking'],
      whatsapp_text: 'I am interested in Ultra Spacious 4BHK Duplex (RES005). Please share more details.',
      area: 'Thaltej'
    },
    {
      id: 'res006',
      title: 'Smart 2BHK Metro Connected Flat',
      type: 'Residential',
      location: 'SG Highway, Ahmedabad',
      price: 7600000,
      price_display: '₹76 Lakh',
      size: '1260 sq ft',
      bhk: '2BHK',
      status: 'Available',
      badge: 'Hot Deal',
      badge_color: 'red',
      image: 'https://images.unsplash.com/photo-1560185007-5f0bb1866cab?auto=format&fit=crop&w=1200&q=80',
      description: 'Compact yet efficient 2BHK in a high demand corridor with rapid access to offices and shopping zones. The project has modern amenities and dependable maintenance. A practical choice for salaried families and investors.',
      features: ['Metro Access', 'Gym', 'EV Charging', 'Children Zone', 'Security'],
      whatsapp_text: 'I am interested in Smart 2BHK Metro Connected Flat (RES006). Please share more details.',
      area: 'SG Highway'
    },
    {
      id: 'res007',
      title: 'Contemporary 3BHK Family Home',
      type: 'Residential',
      location: 'South Bopal, Ahmedabad',
      price: 9800000,
      price_display: '₹98 Lakh',
      size: '1760 sq ft',
      bhk: '3BHK',
      status: 'Available',
      badge: 'Available',
      badge_color: 'green',
      image: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1200&q=80',
      description: 'Modern 3BHK with broad internal roads, green zones, and strong social infrastructure nearby. The layout is designed for families who need roomy bedrooms and versatile living area. Good appreciation track record in the micro market.',
      features: ['Clubhouse', 'Indoor Games', 'Security', 'Garden', 'Reserved Parking'],
      whatsapp_text: 'I am interested in Contemporary 3BHK Family Home (RES007). Please share more details.',
      area: 'South Bopal'
    },
    {
      id: 'res008',
      title: 'Value 2BHK in Growth Corridor',
      type: 'Residential',
      location: 'Gota, Ahmedabad',
      price: 6100000,
      price_display: '₹61 Lakh',
      size: '1185 sq ft',
      bhk: '2BHK',
      status: 'Available',
      badge: 'Hot Deal',
      badge_color: 'red',
      image: 'https://images.unsplash.com/photo-1572120360610-d971b9d7767c?auto=format&fit=crop&w=1200&q=80',
      description: 'Affordable 2BHK apartment in a rapidly developing residential pocket with dependable road links. Daily convenience stores and schools are within practical distance. Suitable for first time buyers looking at long term value.',
      features: ['Lift', 'CCTV', 'Parking', 'Garden', 'Power Backup'],
      whatsapp_text: 'I am interested in Value 2BHK in Growth Corridor (RES008). Please share more details.',
      area: 'Gota'
    },
    {
      id: 'com001',
      title: 'Grade A Office Suite',
      type: 'Commercial',
      location: 'SG Road, Ahmedabad',
      price: 15200000,
      price_display: '₹1.52 Cr',
      size: '2100 sq ft',
      bhk: null,
      status: 'Featured',
      badge: 'Featured',
      badge_color: 'gold',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
      description: 'Ready to move office space in a modern business tower with reception and dedicated parking. The floorplate supports cabins, meeting room, and open workstations. Strong connectivity to major business districts on SG Road.',
      features: ['Business Tower', 'Central AC', 'Power Backup', 'Visitor Parking', 'High Speed Elevators'],
      whatsapp_text: 'I am interested in Grade A Office Suite (COM001). Please share more details.',
      area: 'SG Road'
    },
    {
      id: 'com002',
      title: 'Premium Corporate Floor',
      type: 'Commercial',
      location: 'Vastrapur, Ahmedabad',
      price: 18500000,
      price_display: '₹1.85 Cr',
      size: '2650 sq ft',
      bhk: null,
      status: 'Available',
      badge: 'Available',
      badge_color: 'green',
      image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80',
      description: 'High visibility commercial floor ideal for consulting, technology, and design teams. The unit has efficient rectangular planning and quality frontage. Located close to key arterial routes and commercial activity hubs.',
      features: ['Conference Zone', 'Fire Safety', 'Cafeteria Access', 'Parking', '24x7 Security'],
      whatsapp_text: 'I am interested in Premium Corporate Floor (COM002). Please share more details.',
      area: 'Vastrapur'
    },
    {
      id: 'com003',
      title: 'Boutique Business Office',
      type: 'Commercial',
      location: 'Bodakdev, Ahmedabad',
      price: 13200000,
      price_display: '₹1.32 Cr',
      size: '1780 sq ft',
      bhk: null,
      status: 'Available',
      badge: 'Hot Deal',
      badge_color: 'red',
      image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=80',
      description: 'Well located office in Bodakdev suitable for professional firms and boutique agencies. Clean common areas, structured parking, and maintained building services improve day to day operations. A strong fit for owner occupiers.',
      features: ['Reception Lobby', 'Parking', 'Security', 'Power Backup', 'Pantry Space'],
      whatsapp_text: 'I am interested in Boutique Business Office (COM003). Please share more details.',
      area: 'Bodakdev'
    },
    {
      id: 'plot001',
      title: 'Residential Plot Near Ring Road',
      type: 'Residential',
      location: 'New Ranip, Ahmedabad',
      price: 5400000,
      price_display: '₹54 Lakh',
      size: '1800 sq ft',
      bhk: null,
      status: 'Available',
      badge: 'Available',
      badge_color: 'green',
      image: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80',
      description: 'Clear title residential plot in a steadily improving neighborhood with practical road access. Suitable for buyers planning custom bungalow construction. Utilities and key residential amenities are available nearby.',
      features: ['Clear Title', 'Road Facing', 'Water Line', 'Electricity', 'Residential Zone'],
      whatsapp_text: 'I am interested in Residential Plot Near Ring Road (PLOT001). Please share more details.',
      area: 'New Ranip'
    },
    {
      id: 'plot002',
      title: 'East Facing Residential Plot',
      type: 'Residential',
      location: 'Chandkheda, Ahmedabad',
      price: 6250000,
      price_display: '₹62.5 Lakh',
      size: '2000 sq ft',
      bhk: null,
      status: 'Available',
      badge: 'Featured',
      badge_color: 'gold',
      image: 'https://images.unsplash.com/photo-1472224371017-08207f84aaae?auto=format&fit=crop&w=1200&q=80',
      description: 'Well proportioned east facing plot in Chandkheda with good approach roads and neighborhood development. Ideal for self use construction or medium term holding. Location has convenient access to schools and transit links.',
      features: ['East Facing', 'Approach Road', 'Clear Documents', 'Gated Entry', 'Growth Location'],
      whatsapp_text: 'I am interested in East Facing Residential Plot (PLOT002). Please share more details.',
      area: 'Chandkheda'
    }
  ],
  services: [
    {
      id: 'svc-buying',
      title: 'Property Buying',
      icon: 'home',
      short_desc: 'End to end guidance for buying flats, villas, plots, and offices in Ahmedabad. We shortlist, verify, and negotiate for the right value.',
      full_desc: 'Our buying advisory starts with your budget, lifestyle, and commute needs. We shortlist verified projects and resale options across Ahmedabad, organize site visits, and compare legal and financial factors. Our team supports offer strategy, token process, agreement review, and final registration so you can buy with clarity and confidence.',
      cta_text: 'Get Consultation',
      whatsapp_text: 'I need help with Property Buying. Please get in touch.'
    },
    {
      id: 'svc-selling',
      title: 'Property Selling',
      icon: 'tag',
      short_desc: 'Strategic pricing, genuine buyer network, and complete deal management to help you sell faster at the right market rate.',
      full_desc: 'We help homeowners and investors sell residential and commercial assets through targeted marketing and serious buyer outreach. Our team prepares pricing benchmarks, listing presentation, and site visit handling. From negotiation to agreement closure and registration support, we ensure a transparent, time efficient sale process.',
      cta_text: 'Get Consultation',
      whatsapp_text: 'I need help with Property Selling. Please get in touch.'
    },
    {
      id: 'svc-rental',
      title: 'Rental Services',
      icon: 'key',
      short_desc: 'Reliable tenant and landlord assistance for homes and offices, including documentation support and rental value assessment.',
      full_desc: 'Whether you are a tenant or property owner, we streamline renting with verified profiles and clear expectations. We assist with locality selection, rental negotiations, leave and license paperwork, and move in planning. For landlords, we focus on dependable occupancy and low vacancy through quality tenant matching.',
      cta_text: 'Get Consultation',
      whatsapp_text: 'I need help with Rental Services. Please get in touch.'
    },
    {
      id: 'svc-investment',
      title: 'Investment Consultancy',
      icon: 'chart',
      short_desc: 'Data led advice on growth corridors, rental yield, and long term appreciation to build a smarter real estate portfolio.',
      full_desc: 'Our investment consultancy is designed for professionals, NRIs, and business owners seeking stable real estate returns in Ahmedabad. We analyze micro markets, infrastructure pipelines, builder credibility, and exit potential before recommending options. You get actionable guidance on timing, ticket size, and asset mix aligned with your risk appetite.',
      cta_text: 'Get Consultation',
      whatsapp_text: 'I need help with Investment Consultancy. Please get in touch.'
    },
    {
      id: 'svc-commercial',
      title: 'Commercial Properties',
      icon: 'building',
      short_desc: 'Office, retail, and showroom solutions in key business locations with support for lease, purchase, and expansion planning.',
      full_desc: 'From SG Road and Bodakdev to Vastrapur and Prahlad Nagar, we source high potential commercial spaces for business growth. Our team evaluates footfall, parking, visibility, and compliance readiness before closure. We also support lease structuring, lock in clauses, and investment comparisons for owner occupiers and investors.',
      cta_text: 'Get Consultation',
      whatsapp_text: 'I need help with Commercial Properties. Please get in touch.'
    },
    {
      id: 'svc-residential',
      title: 'Residential Properties',
      icon: 'family',
      short_desc: 'Carefully curated homes for families and first time buyers, from budget apartments to premium gated communities.',
      full_desc: 'We help families find well connected homes with the right balance of comfort, security, and future value. Our team covers ready to move and under construction options across West and North Ahmedabad localities. We manage unit comparison, builder verification, home loan coordination, and final possession handover support.',
      cta_text: 'Get Consultation',
      whatsapp_text: 'I need help with Residential Properties. Please get in touch.'
    }
  ],
  testimonials: [
    {
      id: 't1',
      name: 'Dhruv Patel',
      location: 'Prahlad Nagar, Ahmedabad',
      rating: 5,
      quote: 'ONS Properties understood exactly what my family needed and showed us only relevant 3BHK options. Their paperwork support was clear and fast, and we closed without stress. I genuinely felt they protected our interests at every stage.',
      initials: 'DP',
      date: 'Jan 2024'
    },
    {
      id: 't2',
      name: 'Riddhi Shah',
      location: 'Satellite, Ahmedabad',
      rating: 5,
      quote: 'I was relocating from Mumbai and had very little time to finalize a home in Ahmedabad. The team arranged virtual tours, shared transparent comparisons, and coordinated everything before my move. Their local insight saved me weeks of confusion.',
      initials: 'RS',
      date: 'Apr 2024'
    },
    {
      id: 't3',
      name: 'Sureshbhai Trivedi',
      location: 'Bopal, Ahmedabad',
      rating: 5,
      quote: 'I sold my old flat through ONS Properties and was impressed with their buyer quality and negotiation approach. They handled every follow up professionally and ensured documentation was complete. The final deal value was better than expected.',
      initials: 'ST',
      date: 'Jul 2024'
    },
    {
      id: 't4',
      name: 'Khushbu Mehta',
      location: 'Vastrapur, Ahmedabad',
      rating: 5,
      quote: 'As a first time buyer, I had many doubts about legal checks and hidden costs. ONS explained each step in simple language and connected me with trusted loan partners. Their process gave me confidence to make the right decision.',
      initials: 'KM',
      date: 'Oct 2024'
    },
    {
      id: 't5',
      name: 'Ankit Desai',
      location: 'SG Highway, Ahmedabad',
      rating: 5,
      quote: 'We were searching for a commercial office with parking and strong access to SG Road clients. ONS gave practical options and realistic rental yield numbers before purchase. Their market understanding and honesty stood out.',
      initials: 'AD',
      date: 'Jan 2025'
    },
    {
      id: 't6',
      name: 'Priyanka Joshi',
      location: 'South Bopal, Ahmedabad',
      rating: 5,
      quote: 'From site visits to registration day, the team stayed proactive and available on every call. They balanced my budget and lifestyle goals without pushing unsuitable projects. I would confidently recommend ONS Properties to anyone buying in Ahmedabad.',
      initials: 'PJ',
      date: 'Apr 2025'
    }
  ],
  faqs: [
    {
      id: 'faq1',
      question: 'How to buy property in Ahmedabad?',
      answer: 'Start by finalizing your budget, preferred localities, and loan eligibility. Shortlist RERA registered projects or verified resale options, then do site visits and compare legal documents. Once you select a property, complete token booking, agreement to sell, and bank processing if required. Final registration at the sub registrar office transfers legal ownership.'
    },
    {
      id: 'faq2',
      question: 'What are stamp duty and registration charges in Gujarat?',
      answer: 'In Gujarat, stamp duty and registration charges are applicable during property registration and can vary based on property type and ownership category. As a practical estimate, buyers should plan for both charges in addition to agreement value and government fees. Exact amounts are calculated at registration based on prevailing jantri and rules. We help clients estimate these costs before final commitment.'
    },
    {
      id: 'faq3',
      question: 'Is ONS Properties RERA registered?',
      answer: 'ONS Properties works with RERA compliant project sourcing and transaction practices. For specific project level validation, we verify and share the project RERA details before booking. This ensures buyers can review approved plans, promoter records, and registration status. Transparency in compliance checks is a standard part of our advisory process.'
    },
    {
      id: 'faq4',
      question: 'Which areas in Ahmedabad have the best property investment potential?',
      answer: 'High demand corridors such as SG Highway, Bodakdev, Prahlad Nagar, Thaltej, and selected pockets of South Bopal continue to show strong buyer interest. Locations near metro connectivity, schools, and business hubs generally attract better rental and resale traction. Investment suitability depends on your holding period and ticket size. We map options by capital appreciation and rental yield goals.'
    },
    {
      id: 'faq5',
      question: 'Can NRIs buy property in Ahmedabad?',
      answer: 'Yes, NRIs can buy residential and commercial properties in India under FEMA guidelines, subject to applicable conditions. Payment is typically routed through NRE, NRO, or FCNR accounts and proper KYC documentation is required. Agricultural land, plantation property, and farmhouses have separate restrictions for many NRI cases. We support NRI clients with legal coordination and execution planning.'
    },
    {
      id: 'faq6',
      question: 'How long does the property buying process take?',
      answer: 'A straightforward purchase can close in a few weeks, while loan dependent deals may take longer due to bank and legal timelines. Site visits and property selection can be completed quickly with focused shortlisting. Documentation checks, valuation, and agreement drafting add time based on complexity. ONS Properties keeps each stage structured to reduce delays and uncertainty.'
    },
    {
      id: 'faq7',
      question: 'What documents are required for property purchase?',
      answer: 'Commonly required documents include title papers, sale deed chain, property tax receipts, approved plans, and identity proofs of parties. For financed purchases, banks may also require income documents, account statements, and valuation reports. In project purchases, allotment letter and builder documentation are reviewed carefully. We provide a practical checklist based on your transaction type.'
    },
    {
      id: 'faq8',
      question: 'Do you provide home loan assistance?',
      answer: 'Yes, we coordinate with trusted banking and financial partners for home loan guidance. Our team helps compare interest structures, processing timelines, and eligibility requirements. We also assist with document readiness to improve approval efficiency. Clients receive end to end support until disbursal alignment with registration milestones.'
    }
  ]
};

async function fetchData(path, key) {
  try {
    const res = await fetch(path);
    if (!res.ok) {
      throw new Error(`HTTP ${res.status}`);
    }
    const data = await res.json();
    return data[key] || fallbackData[key] || [];
  } catch (error) {
    console.error(`Failed to load ${path}. Using fallback data.`, error);
    return fallbackData[key] || [];
  }
}

export async function getProperties() {
  return fetchData('data/properties.json', 'properties');
}

export async function getTestimonials() {
  return fetchData('data/testimonials.json', 'testimonials');
}

export async function getServices() {
  return fetchData('data/services.json', 'services');
}

export async function getFaqs() {
  return fetchData('data/faqs.json', 'faqs');
}
