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
    slug: "innovation-artificial-intelligence-research-consultancies",
    title: "Innovation & Artificial Intelligence Research & Consultancies",
    summary:
      "Turning emerging technologies into practical advantages for UAE operations, products, and decisions.",
    image: "/images/hero-office.jpg",
    intro:
      "We help businesses evaluate and apply innovation and artificial intelligence where it creates operating value — not as a slogan. For companies entering or expanding in the UAE, that means identifying use cases in trade, manufacturing, customer insight, and internal reporting, then scoping tools, vendors, and a realistic rollout. Research is paired with consultancy so findings become a plan your team can run.",
    points: [
      "Opportunity scans for AI and digital use cases in your sector",
      "Vendor and proof-of-concept evaluation with implementation support",
      "Data, process, and governance recommendations before you scale",
      "Practical roadmaps tied to UAE operations, not generic tech decks",
    ],
  },
  {
    slug: "logistics-consultancy",
    title: "Logistics Consultancy",
    summary:
      "Optimising supply chains for efficiency, cost control, and reliability through UAE trade gateways.",
    image: "/images/hero-port.jpg",
    intro:
      "Dubai’s advantage is as a logistics and re-export hub. We advise on how goods should move once your company is live — warehouse location, 3PL selection, inbound and outbound flows through Jebel Ali and the wider UAE network, and the documentation that keeps shipments aligned with your licence. The aim is a supply chain you can cost, staff, and trust.",
    points: [
      "Import, export, and distribution design matched to your licence",
      "Warehouse and 3PL shortlists near port, airport, or factory",
      "Practical guidance on documentation, routing, and service levels",
      "Cost-to-serve and reliability reviews after operations start",
    ],
  },
  {
    slug: "marketing-research-consultancies",
    title: "Marketing Research & Consultancies",
    summary:
      "Market and customer insight so you enter Dubai with a commercial plan, not only a licence.",
    image: "/images/hero-marina.jpg",
    intro:
      "Incorporation is the start, not the strategy. We research who buys, how channels and distributors work, what pricing looks like, and where a new entrant can realistically win — in the UAE market, free-zone re-export, or both. Findings are written as decisions: positioning, first customers, and a 90-day go-to-market sequence.",
    points: [
      "Channel maps: direct, distributor, government, and regional re-export",
      "Competitor and pricing snapshots for your category",
      "Customer and localisation insight that affects how you sell",
      "A commercial plan that sits on top of the legal setup",
    ],
  },
  {
    slug: "management-consultancies",
    title: "Management Consultancies",
    summary:
      "Strengthening strategy, leadership, structure, and organisational performance as you set up and scale.",
    image: "/images/hero-skyline.jpg",
    intro:
      "Entering the UAE is an operating change, not only a filing. We work with founders and management teams on the structure of the new entity, how decisions will be made, what to staff locally, and how the UAE company sits beside the overseas group. Advisory covers strategy, organisation, and the practical rhythm of running the business after the licence is issued.",
    points: [
      "Operating model for the UAE entity: roles, reporting, and controls",
      "Strategy for market entry, expansion, or a regional hub",
      "Coordination of incorporation, banking, and compliance as one programme",
      "Hands-on support so the company can hire, buy, sell, and report",
    ],
  },
  {
    slug: "sourcing-procurement-consultant",
    title: "Sourcing & Procurement Consultant",
    summary:
      "Supplier identification, product sourcing, and procurement controls for UAE and re-export operations.",
    image: "/images/hero-trade.jpg",
    intro:
      "Once the company exists, it still has to buy well. We help you identify, qualify, and coordinate suppliers — local, regional, and international — covering raw materials, finished goods, equipment, and services. The aim is a reliable supply base with commercial terms, quality checks, and logistics that match your Dubai operating model.",
    points: [
      "Supplier mapping and RFQ coordination across GCC and origin markets",
      "Quality, lead-time, and commercial terms aligned to your operation",
      "Procurement processes that reduce concentration and payment risk",
      "Introductions through our network for specialised categories",
    ],
  },
  {
    slug: "real-estate-consultancies",
    title: "Real Estate Consultancies",
    summary:
      "Advice on offices, warehouses, industrial space, and property decisions linked to your UAE licence.",
    image: "/images/hero-build.jpg",
    intro:
      "Visa quota, lease documentation, banking comfort, and manufacturing eligibility all depend on the space you take. We advise on whether a flexi-desk, dedicated office, warehouse, or industrial unit is the right first step — then help source and document it so the licence and immigration file stay aligned. We also support property strategy where investment or development is part of the mandate.",
    points: [
      "Office, warehouse, and industrial-unit shortlists against licence needs",
      "Lease and occupancy documentation sequenced with company formation",
      "Visa-capacity planning tied to premises size and free-zone packages",
      "Property strategy for occupation, investment, or development",
    ],
  },
  {
    slug: "information-technology-consultants",
    title: "Information Technology Consultants",
    summary:
      "Aligning technology, systems, and digital operations with how the UAE business will actually run.",
    image: "/images/hero-office.jpg",
    intro:
      "A new UAE company needs systems that match its size and compliance load — accounting, operations, trade documents, and customer processes. We advise on technology choices, vendor selection, and implementation so IT supports the licence, the warehouse or office, and the team, rather than becoming a separate project.",
    points: [
      "IT landscape for a new or expanding UAE entity",
      "Vendor evaluation and implementation coordination",
      "Systems for operations, reporting, and day-to-day control",
      "Practical digital setup that scales with visas, stock, and customers",
    ],
  },
  {
    slug: "project-development-consultant",
    title: "Project Development Consultant",
    summary:
      "Guiding projects from concept through planning to execution readiness in the UAE.",
    image: "/images/hero-factory.jpg",
    intro:
      "Whether you are opening a trading company, a factory, or a multi-entity structure, the work is a project: concept, permissions, premises, suppliers, and go-live. We develop that pathway with you — activity and location choices, industrial or commercial licensing where required, and the sequence of tasks that takes a plan from paper to a business that can operate.",
    points: [
      "Concept-to-readiness planning for UAE setup and expansion",
      "Manufacturing, trading, and multi-entity development pathways",
      "Licensing, premises, and counterpart coordination in one timeline",
      "Execution packs so contractors, authorities, and your team stay aligned",
    ],
  },
  {
    slug: "feasibility-studies-consultancies",
    title: "Feasibility Studies Consultancies",
    summary:
      "Assessing commercial, financial, and operational viability before you commit capital in the UAE.",
    image: "/images/hero-finance.jpg",
    intro:
      "A Dubai licence is inexpensive compared with a poorly chosen activity, location, or plant. We assess demand, competitive intensity, licensing constraints, premises cost, labour, utilities, and tax position so the decision to enter is grounded in numbers — not a brochure. The output is a go / no-go view and a sequenced plan if you proceed.",
    points: [
      "Market sizing and customer-channel mapping for UAE and re-export",
      "Capex, opex, and working-capital models with realistic timelines",
      "Licence, visa, and premises constraints built into the business case",
      "Clear recommendations with the next implementation steps",
    ],
  },
  {
    slug: "project-management-services",
    title: "Project Management Services",
    summary:
      "Delivering setup and operating projects on time, on budget, and aligned with agreed objectives.",
    image: "/images/hero-dubai.jpg",
    intro:
      "UAE market entry is a programme of work: incorporation, premises, visas, banking files, suppliers, and launch. We provide project management so those workstreams stay in sequence, owners are clear, and delays at one authority or vendor do not stall the rest. You get a single coordinating desk instead of chasing every party yourself.",
    points: [
      "End-to-end project plans for company setup and go-live",
      "Tracking of authorities, landlords, banks, and vendors",
      "Budget, timeline, and risk reporting to the client team",
      "Handover into operations once the company can run",
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
