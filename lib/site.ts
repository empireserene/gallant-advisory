export const site = {
  name: "Gallant Advisory",
  legalName: "Gallant Advisory Services LLC",
  tagline: "Your one-stop partner for entering Dubai and building a business that actually runs.",
  phoneDisplay: "+971 50643 7651",
  phoneHref: "tel:+971506437651",
  phones: [
    { display: "+971 50643 7651", href: "tel:+971506437651" },
    { display: "+971 043993624", href: "tel:+97143993624" },
  ],
  address: "Unit 10, 3001 Rigga Business Center, Al Muraqabbat, Dubai",
  mapsQuery: "Rigga Business Center Al Muraqabat Dubai",
  email: "hello@gallantadvisory.com",
};

export type Service = {
  slug: string;
  title: string;
  summary: string;
  image: string;
  intro: string;
  points: string[];
};

export const services: Service[] = [
  {
    slug: "company-incorporation",
    title: "Company Incorporation",
    summary:
      "Mainland, free zone, and offshore formation — licence, trade name, and first approvals, sequenced correctly.",
    image: "/images/hero-dubai.jpg",
    intro:
      "Entering the UAE starts with the right vehicle. We help you choose between Dubai Mainland, a free zone, or an offshore holding structure based on who you will sell to, how many visas you need, whether you require a warehouse or factory, and how banks are likely to view the file. Then we manage trade-name reservation, activity selection, initial approvals, and licence issuance so you are not left with a licence you cannot bank, staff, or operate.",
    points: [
      "Mainland vs free zone vs offshore comparison against your commercial model",
      "Activity codes, trade name, and memorandum aligned to the real business",
      "Coordination with DED, free-zone authorities, and external approvals",
      "Establishment card, immigration file, and investor visa planning",
    ],
  },
  {
    slug: "feasibility-studies",
    title: "Feasibility Studies",
    summary:
      "Commercial, financial, and operational viability before you commit capital in the UAE.",
    image: "/images/hero-finance.jpg",
    intro:
      "A Dubai licence is inexpensive compared with a poorly chosen activity, location, or plant. We assess demand, competitive intensity, licensing constraints, premises cost, labour, utilities, and tax position so the decision to enter is grounded in numbers — not a brochure.",
    points: [
      "Market sizing and customer-channel mapping for UAE and re-export",
      "Capex, opex, and working-capital models with realistic setup timelines",
      "Licence, visa, and premises constraints built into the business case",
      "Go / no-go recommendations with a sequenced implementation plan",
    ],
  },
  {
    slug: "corporate-structuring",
    title: "Corporate Structuring",
    summary:
      "Ownership, holding, and operating structures designed for control, banking, and tax substance.",
    image: "/images/hero-office.jpg",
    intro:
      "How you hold the UAE company matters as much as forming it. We design structures that match shareholder goals — operating company, regional hub, manufacturing SPV, or holding layer — with attention to UAE corporate tax, qualifying free-zone income, economic substance, and banking KYC.",
    points: [
      "Shareholder and group charts that banks and authorities can follow",
      "Guidance on 100% foreign ownership pathways now available for most activities",
      "Substance, office, and staffing plans that support the chosen tax position",
      "Coordination of legal documentation with your counsel and local authorities",
    ],
  },
  {
    slug: "manufacturing-setup",
    title: "Manufacturing Setup",
    summary:
      "Industrial licensing, premises, and production readiness — from concept to a plant that can operate.",
    image: "/images/hero-factory.jpg",
    intro:
      "Manufacturing in Dubai is not a standard trade licence. You typically need industrial premises, the correct local industrial licence, and federal MOIAT industrial production licensing. We coordinate activity selection, factory or warehouse search, fit-out sequencing, and the federal layer that unlocks customs relief and in-country value pathways.",
    points: [
      "Industrial activity mapping and mainland vs industrial free-zone choice",
      "Premises, utilities, and layout requirements for a production licence",
      "MOIAT industrial production licence coordination and documentation",
      "Supplier, equipment, and commissioning support through our network",
    ],
  },
  {
    slug: "real-estate-premises",
    title: "Real Estate & Premises",
    summary:
      "Offices, flexi-desks, warehouses, and industrial land matched to licence, visas, and operations.",
    image: "/images/hero-build.jpg",
    intro:
      "Visa quota, Ejari, banking comfort, and manufacturing eligibility all depend on the space you take. We advise on whether a flexi-desk, dedicated office, warehouse, or industrial unit is the right first step — then help source and document it so the licence and immigration file stay aligned.",
    points: [
      "Office, warehouse, and industrial-unit shortlists against licence needs",
      "Ejari / lease documentation sequenced with company formation",
      "Visa-capacity planning tied to premises size and free-zone packages",
      "Fit-out and handover coordination for operational go-live",
    ],
  },
  {
    slug: "sourcing-procurement",
    title: "Sourcing & Procurement",
    summary:
      "Supplier identification, product sourcing, and procurement controls for UAE and re-export operations.",
    image: "/images/hero-trade.jpg",
    intro:
      "Once the company exists, it still has to buy well. We help you identify, qualify, and coordinate suppliers — local, regional, and international — covering raw materials, finished goods, equipment, and services. The aim is a reliable supply base with commercial terms, quality checks, and logistics that match your Dubai operating model.",
    points: [
      "Supplier mapping and RFQ coordination across GCC and origin markets",
      "Quality, lead-time, and Incoterms aligned to your warehouse or factory",
      "Procurement policies that reduce concentration and payment risk",
      "Introductions through our network for specialised categories",
    ],
  },
  {
    slug: "financial-audit-tax",
    title: "Financial Audit & Tax",
    summary:
      "Bookkeeping, VAT, corporate tax, and audit-ready accounts for a UAE entity that can renew and bank.",
    image: "/images/hero-finance.jpg",
    intro:
      "UAE companies must register for corporate tax, and many must register for 5% VAT once taxable supplies cross the threshold. Licence renewal, free-zone qualifying-income claims, and bank reviews all depend on clean books. We coordinate accounting setup, VAT and corporate-tax filings, and audit-ready financials so compliance is part of operations — not a scramble at year-end.",
    points: [
      "Chart of accounts and bookkeeping from day one of the licence",
      "VAT registration and return support (mandatory threshold AED 375,000)",
      "Corporate tax registration and return coordination with your auditors",
      "Audit-ready packs for banks, free zones, and shareholders",
    ],
  },
  {
    slug: "investment-financing",
    title: "Investment & Financing",
    summary:
      "Banking files, capital planning, and introductions to financing pathways for UAE operations.",
    image: "/images/hero-skyline.jpg",
    intro:
      "A licence without a bank account is not a business. We prepare corporate banking files with the substance, documents, and narrative banks expect, and we coordinate conversations on working capital, trade finance, and investment where your model requires it. We do not guarantee bank approval — we make the file bankable and stay with you through the process.",
    points: [
      "Corporate account file preparation and bank matching by activity",
      "Source-of-funds and KYC packs that reduce bounce-backs",
      "Working-capital and trade-finance discussion support",
      "Coordination with investors or group treasury for capitalisation",
    ],
  },
  {
    slug: "logistics-trade",
    title: "Logistics & Trade",
    summary:
      "Customs, warehousing, and supply-chain setup so goods can move once the company is live.",
    image: "/images/hero-port.jpg",
    intro:
      "Dubai’s value is as a trade and distribution hub. We help you connect the licence to actual movement of goods — customs codes, warehouse location, 3PL selection, and inbound/outbound flows through Jebel Ali and the wider UAE gateway network.",
    points: [
      "Import/export process design aligned to your licence activities",
      "Warehouse and 3PL shortlists near port, airport, or factory",
      "Documentation, HS codes, and duty/VAT treatment at a practical level",
      "Reliability and cost-to-serve reviews once operations start",
    ],
  },
  {
    slug: "market-entry-research",
    title: "Market Entry Research",
    summary:
      "Customer, channel, and competitor insight so you enter Dubai with a commercial plan, not only a licence.",
    image: "/images/hero-marina.jpg",
    intro:
      "Incorporation is the start, not the strategy. We research who buys, how tenders and distributors work, what pricing looks like, and where a new entrant can realistically win — in the UAE market, free-zone re-export, or both.",
    points: [
      "Channel maps: direct, distributor, government, and regional re-export",
      "Competitor and pricing snapshots for your category",
      "Regulatory and localisation considerations that affect go-to-market",
      "A 90-day commercial plan that sits on top of the legal setup",
    ],
  },
];

export const faqs = [
  {
    q: "Who do you help set up in the UAE?",
    a: "We work with overseas founders, family businesses, manufacturers, traders, and professional firms that want a Dubai or UAE presence. Typical mandates include a first company, a regional hub, a factory or warehouse, or a holding structure. Sectors we regularly support include manufacturing, trading and logistics, real estate, professional services, and consumer goods.",
  },
  {
    q: "Do you only form the company, or do you stay through operations?",
    a: "We are built as an end-to-end partner. Incorporation is one step. We also help with structure, premises, visas, banking files, accounting and tax readiness, supplier sourcing, manufacturing licensing, and logistics — so you can move from a licence certificate to a company that can buy, sell, hire, and report.",
  },
  {
    q: "Mainland, free zone, or offshore — how do you decide?",
    a: "Mainland is usually right if you need to trade directly in the UAE market, bid for local contracts, or house a larger team. Free zones are often faster and well suited to international trade, holding, or sector clusters, with possible 0% corporate tax on qualifying income if substance rules are met. Offshore is for holding and asset ownership, not onshore trading or visas. We recommend the route from your customers, visas, premises, banking, and tax position — not from a packaged price.",
  },
  {
    q: "How long does a typical setup take?",
    a: "Licence issuance can be a matter of days once documents and activity approvals are in place. Visas, premises, and corporate banking usually take longer and should be planned as a programme, not a single appointment. A focused incorporation may complete in a few weeks; a manufacturing or multi-entity setup often runs over several months. We agree a timeline against your scope at the outset.",
  },
  {
    q: "Can you help with manufacturing, procurement, and financing — not only paperwork?",
    a: "Yes. That is the difference we are built around. We coordinate industrial licensing and plant readiness, source and qualify suppliers, and support investment and banking conversations through our network. You get one advisory team instead of a dozen disconnected vendors.",
  },
];

export const testimonials = [
  {
    quote:
      "They treated mainland versus free zone as a commercial decision, not a product to sell. The licence, office, and banking file finally lined up.",
    role: "Regional trading group",
  },
  {
    quote:
      "We needed a factory pathway, not a flexi-desk. Gallant sequenced industrial premises, licensing, and supplier introductions so we could actually produce.",
    role: "Manufacturing investor",
  },
  {
    quote:
      "Incorporation was the easy part. What we needed was procurement, VAT-ready books, and a bank that understood the model. They stayed through all three.",
    role: "Consumer goods importer",
  },
  {
    quote:
      "Clear advice, no theatre. Structure, visas, and a 90-day operating plan — then they helped execute it.",
    role: "Professional services firm",
  },
  {
    quote:
      "We were not looking for another report. We needed someone who could coordinate authorities, landlords, and suppliers in the same week.",
    role: "Family office, industrial mandate",
  },
];

export const values = [
  {
    title: "Integrity",
    text: "Honest advice, always aligned with the client’s commercial interest — including when the right answer is to wait or choose a simpler structure.",
  },
  {
    title: "Excellence",
    text: "High standards in research, filings, and delivery. A UAE file that is tidy enough for banks, free zones, and auditors.",
  },
  {
    title: "Clarity",
    text: "Mainland, tax, visas, and premises are confusing on purpose. We translate them into a sequence you can act on.",
  },
  {
    title: "Partnership",
    text: "Long-term operating support, not a one-off licence drop. We stay from incorporation through a running business.",
  },
];

export const steps = [
  {
    n: "01",
    title: "Discover",
    text: "We map your activity, customers, visas, premises, and capital so the jurisdiction is chosen for the business you will actually run.",
  },
  {
    n: "02",
    title: "Structure & incorporate",
    text: "Trade name, licence, constitutional documents, and immigration file — completed in the right order with the authorities that matter.",
  },
  {
    n: "03",
    title: "Enable operations",
    text: "Premises, banking file, VAT and corporate-tax readiness, suppliers, logistics, and — where needed — industrial licensing.",
  },
  {
    n: "04",
    title: "Run",
    text: "Ongoing accounting, renewals, procurement, and expansion support so the company does not stall after day one.",
  },
];
