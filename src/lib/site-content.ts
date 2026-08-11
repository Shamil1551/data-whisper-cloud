export const COMPANY = {
  name: "Chain-Sys India Pvt Ltd",
  shortName: "ChainSys",
  phone: "044 3054 4100",
  phoneHref: "tel:+914430544100",
  website: "https://www.chainsys.ai/",
  addressLines: [
    "85 Ponniamman Nagar, Ayanambakam",
    "39, Poonniamman Nagar, Ayanambakkam",
    "Chennai, Tamil Nadu 600095",
  ],
  addressOneLine:
    "85 Ponniamman Nagar, Ayanambakam, 39, Poonniamman Nagar, Ayanambakkam, Chennai, Tamil Nadu 600095",
} as const;

export const CAPABILITIES = [
  {
    slug: "enterprise-data-management",
    title: "Enterprise Data Management",
    summary:
      "One governed foundation for every enterprise data domain, from customer and vendor to item, asset and finance.",
    outcomes: [
      "Single source of truth across ERP, CRM and cloud applications",
      "Domain models for customer, supplier, item, asset and chart of accounts",
      "Stewardship workflows with approvals and audit history",
    ],
  },
  {
    slug: "integration-migration",
    title: "Fast, scalable Integration & Migration",
    summary:
      "Move and synchronise data at enterprise volume with pre-built objects for Oracle, SAP and Salesforce.",
    outcomes: [
      "Thousands of pre-built templates for ERP objects and interfaces",
      "Extract, transform, validate and load with full error handling",
      "Reconciliation reports that prove every record landed correctly",
    ],
  },
  {
    slug: "data-quality-governance",
    title: "Data Quality & Governance",
    summary:
      "Profile, cleanse, standardise and match records continuously instead of once per project.",
    outcomes: [
      "Rule-based profiling and scorecards by domain and business unit",
      "De-duplication, merge and survivorship for master records",
      "Policy ownership with clear accountability and escalation",
    ],
  },
  {
    slug: "catalog-lineage",
    title: "Catalog and Lineage for Compliance",
    summary:
      "Know where every field came from, who changed it and which reports depend on it.",
    outcomes: [
      "Business glossary linked to physical technical metadata",
      "End-to-end lineage from source system to dashboard",
      "Evidence for audit, privacy and regulatory reporting",
    ],
  },
  {
    slug: "data-archival",
    title: "Data Archival",
    summary:
      "Retire legacy systems and trim production volumes while keeping records fully accessible.",
    outcomes: [
      "Application retirement with queryable archives",
      "Retention policies aligned to statutory requirements",
      "Lower infrastructure and licence cost on live systems",
    ],
  },
  {
    slug: "ai-ml-insights",
    title: "AI/ML-powered Insights",
    summary:
      "Turn trusted, real-time data into forecasts, anomaly detection and decision-ready analytics.",
    outcomes: [
      "Anomaly and exception detection across transactional data",
      "Forecasting and trend analysis on governed datasets",
      "Self-service visualisation for business teams",
    ],
  },
] as const;

export const PRODUCTS = [
  {
    name: "dataZap",
    tagline: "Data migration, integration and reconciliation",
    description:
      "Move data into and between enterprise applications at scale, with pre-built objects, transformation rules and reconciliation that proves the result.",
    points: ["Cloud data integration", "Legacy to cloud migration", "Automated reconciliation"],
  },
  {
    name: "dataZen",
    tagline: "Master data management and data quality governance",
    description:
      "Author, govern and distribute master data with stewardship workflows, quality rules and policy enforcement across every consuming system.",
    points: ["Multi-domain MDM", "Quality rules and scorecards", "Stewardship and approvals"],
  },
  {
    name: "dataZense",
    tagline: "Analytics, visualisation and cataloging",
    description:
      "Catalog your data estate, trace lineage for compliance and publish analytics and dashboards on top of governed data.",
    points: ["Data catalog and glossary", "Lineage and impact analysis", "Analytics and dashboards"],
  },
] as const;

export const PARTNERS = ["Oracle", "SAP", "Salesforce", "Microsoft", "Workday"] as const;

export const MAP_EMBED_SRC =
  "https://www.google.com/maps?q=" +
  encodeURIComponent("Chain-Sys India Pvt Ltd, " + COMPANY.addressOneLine) +
  "&output=embed";
