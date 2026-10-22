import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: "/services/company-incorporation",
        destination: "/services/management-consultancies",
        permanent: true,
      },
      {
        source: "/services/feasibility-studies",
        destination: "/services/feasibility-studies-consultancies",
        permanent: true,
      },
      {
        source: "/services/corporate-structuring",
        destination: "/services/project-development-consultant",
        permanent: true,
      },
      {
        source: "/services/manufacturing-setup",
        destination: "/services/project-development-consultant",
        permanent: true,
      },
      {
        source: "/services/real-estate-premises",
        destination: "/services/real-estate-consultancies",
        permanent: true,
      },
      {
        source: "/services/sourcing-procurement",
        destination: "/services/sourcing-procurement-consultant",
        permanent: true,
      },
      {
        source: "/services/financial-audit-tax",
        destination: "/services/management-consultancies",
        permanent: true,
      },
      {
        source: "/services/investment-financing",
        destination: "/services/management-consultancies",
        permanent: true,
      },
      {
        source: "/services/logistics-trade",
        destination: "/services/logistics-consultancy",
        permanent: true,
      },
      {
        source: "/services/market-entry-research",
        destination: "/services/marketing-research-consultancies",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
