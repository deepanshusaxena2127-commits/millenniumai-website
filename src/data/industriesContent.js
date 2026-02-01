import {
  Heart,
  Truck,
  Landmark,
  ShoppingCart,
  Activity,
  Shield,
  Cpu,
  Leaf,
  Home,
  Globe,
  Monitor,
  Box,
} from 'lucide-react';

export const industriesContent = {
  /* ===============================
     HEALTHCARE & LIFE SCIENCES
     =============================== */
  'healthcare-life-sciences': {
    pageTitle: "AI Solutions for Healthcare & Life Sciences",
    metaDescription:
      "Support medical AI initiatives with privacy-aware, quality-driven data services for imaging, clinical NLP, and life sciences research.",
    pageSlug: "healthcare-life-sciences",
    heroSection: {
      title: "Healthcare & Life Sciences",
      subtitle: "Precision Data for Medical AI",
      description:
        "Enable responsible medical AI development with high-quality datasets. From imaging annotation to clinical text structuring, MillenniumAi supports healthcare innovation with security-aligned workflows.",
      heroImage: "https://images.unsplash.com/photo-1682663947090-b35e4f2c23cc",
    },
    features: [
      { icon: Heart, title: "Medical Imaging", desc: "Radiology and pathology annotation with domain-trained experts." },
      { icon: Activity, title: "Clinical NLP", desc: "Structuring insights from clinical and research text." },
    ],
    sections: [
      {
        title: "AI-Driven Diagnostics",
        content:
          "Medical AI systems rely on precise, expert-reviewed data. We support imaging datasets for X-rays, MRIs, CT scans, and pathology slides using structured annotation guidelines and multi-stage quality review processes.",
      },
      {
        title: "Life Sciences & Research Support",
        content:
          "We assist life sciences teams by structuring biomedical literature, molecular datasets, and research corpora to support discovery workflows and downstream analytics.",
      },
      {
        title: "Privacy-Aware Data Handling",
        content:
          "Our healthcare workflows are designed to align with applicable data protection regulations. De-identification, access controls, and audit logging are integrated throughout the data lifecycle.",
      },
      {
        title: "Clinical Workflow Enablement",
        content:
          "AI-enabled automation can reduce administrative burden. We help build datasets for transcription, summarization, and coding models that support clinical operations.",
      },
      {
        title: "Case Example: Pathology AI",
        content:
          "For a medical AI initiative, MillenniumAi supported large-scale pathology image annotation using expert-reviewed guidelines, contributing to improved model reliability during validation.",
      },
    ],
  },

  /* ===============================
     AUTONOMOUS MOBILITY
     =============================== */
  'autonomous-mobility': {
    pageTitle: "AI for Autonomous Mobility & Automotive",
    metaDescription:
      "High-quality sensor data annotation for ADAS and autonomous vehicle development.",
    pageSlug: "autonomous-mobility",
    heroSection: {
      title: "Autonomous Mobility",
      subtitle: "Data for Safer Autonomy",
      description:
        "Support autonomous driving systems with large-scale, quality-controlled annotation for camera, LiDAR, and radar data.",
      heroImage: "https://images.unsplash.com/photo-1685984351715-1d60f47366d6",
    },
    features: [
      { icon: Truck, title: "Sensor Fusion", desc: "Aligned 2D and 3D perception datasets." },
      { icon: Cpu, title: "Driver Monitoring", desc: "In-cabin vision and behavior analysis data." },
    ],
    sections: [
      {
        title: "Edge-Case Coverage",
        content:
          "Rare and complex driving scenarios are critical for autonomy. We support the identification and annotation of edge cases such as construction zones, unusual weather, and atypical road behavior.",
      },
      {
        title: "3D Perception Data",
        content:
          "Our workflows align camera imagery with LiDAR and radar data to support robust perception model training.",
      },
      {
        title: "In-Cabin Intelligence",
        content:
          "We help enable driver monitoring and occupant awareness systems through structured annotation of in-cabin visual and behavioral data.",
      },
      {
        title: "Simulation & Scenario Design",
        content:
          "Annotated metadata supports simulation environments used for validation and safety testing prior to real-world deployment.",
      },
      {
        title: "Regional Driving Contexts",
        content:
          "Localization support ensures perception systems adapt to regional signage, road structures, and driving behaviors.",
      },
    ],
  },

  /* ===============================
     FINTECH & BANKING
     =============================== */
  'fintech': {
    pageTitle: "AI Solutions for FinTech & Banking",
    metaDescription:
      "Secure, high-quality data services for financial AI applications.",
    pageSlug: "fintech",
    heroSection: {
      title: "FinTech & Banking",
      subtitle: "Intelligent Finance, Responsibly Built",
      description:
        "Enable AI-driven finance solutions with structured, quality-reviewed datasets for fraud detection, risk analysis, and customer intelligence.",
      heroImage: "https://images.unsplash.com/photo-1687969961103-ba6ece2a186f",
    },
    features: [
      { icon: Landmark, title: "Fraud Detection", desc: "Transaction pattern and anomaly datasets." },
      { icon: Shield, title: "Risk Analytics", desc: "Structured data for credit and market risk models." },
    ],
    sections: [
      {
        title: "Financial Crime Detection",
        content:
          "We support fraud and AML initiatives by structuring transactional and behavioral data to help train anomaly detection models.",
      },
      {
        title: "Market & Sentiment Analysis",
        content:
          "Natural language processing of financial news, reports, and disclosures supports market intelligence and trading research.",
      },
      {
        title: "Personalized Banking",
        content:
          "Datasets structured from customer interactions enable personalization engines and digital banking assistants.",
      },
      {
        title: "Document Automation",
        content:
          "We assist with intelligent document processing for forms, statements, and financial records.",
      },
      {
        title: "Model Governance Support",
        content:
          "Diverse datasets support fairness evaluation, explainability, and regulatory review processes.",
      },
    ],
  },

  /* ===============================
     RETAIL & CONSUMER TECH
     =============================== */
  'retail-consumer-tech': {
    pageTitle: "AI for Retail & Consumer Tech",
    metaDescription:
      "Data services for visual commerce, personalization, and inventory intelligence.",
    pageSlug: "retail-consumer-tech",
    heroSection: {
      title: "Retail & Consumer Tech",
      subtitle: "Smarter Shopping Experiences",
      description:
        "Power next-generation retail experiences with AI-ready data for visual search, recommendations, and operational intelligence.",
      heroImage: "https://images.unsplash.com/photo-1692914274321-d8d1b0c01d97",
    },
    features: [
      { icon: ShoppingCart, title: "Visual Search", desc: "Fine-grained product image annotation." },
      { icon: Box, title: "Inventory AI", desc: "Shelf monitoring and stock analysis datasets." },
    ],
    sections: [
      {
        title: "Visual Commerce Enablement",
        content:
          "Product image annotation supports visual discovery and recommendation engines across digital storefronts.",
      },
      {
        title: "Store Intelligence",
        content:
          "Computer vision datasets enable shelf monitoring, planogram compliance, and in-store analytics.",
      },
      {
        title: "Personalization Systems",
        content:
          "User behavior datasets support recommendation and merchandising optimization models.",
      },
      {
        title: "AR & Immersive Shopping",
        content:
          "3D annotation and keypoint labeling enable augmented reality shopping experiences.",
      },
      {
        title: "Customer Sentiment Analysis",
        content:
          "NLP workflows structure feedback from reviews and social platforms for brand intelligence.",
      },
    ],
  },

  /* ===============================
     OTHER INDUSTRIES (STANDARDIZED)
     =============================== */
  'insurance-analytics': {
    pageTitle: "AI for Insurance Analytics",
    metaDescription: "Data services for claims, risk, and insurance automation.",
    pageSlug: "insurance-analytics",
    heroSection: {
      title: "Insurance Analytics",
      subtitle: "Smarter Risk Decisions",
      description:
        "Support insurance modernization with AI-ready data for claims assessment and underwriting.",
      heroImage: "https://images.unsplash.com/photo-1642364706752-3af64cc1af5e",
    },
    features: [{ icon: Shield, title: "Claims AI", desc: "Damage assessment datasets." }],
    sections: [
      { title: "Claims Automation", content: "Image-based damage analysis support." },
      { title: "Risk Modeling", content: "Predictive datasets for underwriting." },
      { title: "Fraud Detection", content: "Behavioral pattern analysis." },
      { title: "Customer Experience", content: "Conversational AI support data." },
      { title: "Telematics", content: "Usage-based insurance datasets." },
    ],
  },

  'logistics-supply-chain': {
    pageTitle: "AI for Logistics & Supply Chain",
    metaDescription: "Data-driven optimization for global logistics.",
    pageSlug: "logistics-supply-chain",
    heroSection: {
      title: "Logistics & Supply Chain",
      subtitle: "Operational Intelligence",
      description:
        "Improve supply chain resilience with AI-ready datasets for routing, forecasting, and automation.",
      heroImage: "https://images.unsplash.com/photo-1678132085824-80d99fd48a8e",
    },
    features: [{ icon: Truck, title: "Route Optimization", desc: "Delivery path intelligence." }],
    sections: [
      { title: "Warehouse Automation", content: "Robotics and vision datasets." },
      { title: "Demand Forecasting", content: "Predictive inventory modeling." },
      { title: "Fleet Intelligence", content: "Maintenance and telematics data." },
      { title: "Last-Mile Delivery", content: "Urban delivery optimization." },
      { title: "Supply Visibility", content: "End-to-end analytics support." },
    ],
  },

  'robotics-automation': {
    pageTitle: "AI for Robotics & Automation",
    metaDescription: "Training intelligent robotic systems.",
    pageSlug: "robotics-automation",
    heroSection: {
      title: "Robotics & Automation",
      subtitle: "Teaching Machines to Act",
      description:
        "Provide perception and control datasets that enable robotic autonomy and precision.",
      heroImage: "https://images.unsplash.com/photo-1678995635432-d9e89c7a8fc5",
    },
    features: [{ icon: Cpu, title: "Robot Vision", desc: "Perception and manipulation data." }],
    sections: [
      { title: "Industrial Robotics", content: "Assembly and inspection datasets." },
      { title: "Service Robots", content: "Navigation and obstacle detection." },
      { title: "Human-Robot Interaction", content: "Safe collaboration data." },
      { title: "Simulation to Reality", content: "Training transfer datasets." },
      { title: "Manipulation Tasks", content: "Grasping and dexterity modeling." },
    ],
  },

  'security-surveillance-ai': {
    pageTitle: "AI for Security & Surveillance",
    metaDescription: "Data services for intelligent security systems.",
    pageSlug: "security-surveillance-ai",
    heroSection: {
      title: "Security & Surveillance",
      subtitle: "Proactive Safety Intelligence",
      description:
        "Support video analytics and monitoring systems with responsibly curated datasets.",
      heroImage: "https://images.unsplash.com/photo-1654588836190-d8e6c12122f8",
    },
    features: [{ icon: Shield, title: "Threat Detection", desc: "Anomaly and behavior datasets." }],
    sections: [
      { title: "Perimeter Monitoring", content: "Intrusion detection data." },
      { title: "Identity Analytics", content: "Access and verification workflows." },
      { title: "Crowd Safety", content: "Public space analytics." },
      { title: "Loss Prevention", content: "Retail security datasets." },
      { title: "Privacy Protection", content: "Redaction and anonymization support." },
    ],
  },

  'smart-agriculture': {
    pageTitle: "AI for Smart Agriculture",
    metaDescription: "Data-driven precision agriculture.",
    pageSlug: "smart-agriculture",
    heroSection: {
      title: "Smart Agriculture",
      subtitle: "Data for Sustainable Farming",
      description:
        "Enable precision agriculture with annotated imagery and sensor datasets.",
      heroImage: "https://images.unsplash.com/photo-1678995635432-d9e89c7a8fc5",
    },
    features: [{ icon: Leaf, title: "Crop Intelligence", desc: "Field and vegetation analysis." }],
    sections: [
      { title: "Crop Monitoring", content: "Health and stress detection." },
      { title: "Yield Forecasting", content: "Production estimation datasets." },
      { title: "Livestock Analysis", content: "Behavioral monitoring." },
      { title: "Harvest Automation", content: "Robotic harvesting data." },
      { title: "Soil Insights", content: "Nutrient and condition modeling." },
    ],
  },

  'real-estate-technology': {
    pageTitle: "AI for Real Estate Technology",
    metaDescription: "Data services for PropTech innovation.",
    pageSlug: "real-estate-technology",
    heroSection: {
      title: "Real Estate Technology",
      subtitle: "Intelligent Property Systems",
      description:
        "Support property analytics and digital infrastructure with AI-ready datasets.",
      heroImage: "https://images.unsplash.com/photo-1491499661251-7f7eee4be692",
    },
    features: [{ icon: Home, title: "Valuation Models", desc: "Property analytics datasets." }],
    sections: [
      { title: "Virtual Tours", content: "3D interior modeling." },
      { title: "Market Analytics", content: "Price trend analysis." },
      { title: "Smart Buildings", content: "IoT and energy data." },
      { title: "Construction Monitoring", content: "Progress tracking datasets." },
      { title: "Tenant Experience", content: "Facility intelligence systems." },
    ],
  },

  'geospatial-intelligence': {
    pageTitle: "AI for Geospatial Intelligence",
    metaDescription: "Satellite and aerial imagery analysis.",
    pageSlug: "geospatial-intelligence",
    heroSection: {
      title: "Geospatial Intelligence",
      subtitle: "Spatial Insights at Scale",
      description:
        "Extract actionable insights from satellite and aerial imagery using AI-ready datasets.",
      heroImage: "https://images.unsplash.com/photo-1547619938-65659b613c85",
    },
    features: [{ icon: Globe, title: "Remote Sensing", desc: "Earth observation datasets." }],
    sections: [
      { title: "Urban Analysis", content: "Infrastructure mapping." },
      { title: "Disaster Response", content: "Damage assessment." },
      { title: "Environmental Monitoring", content: "Climate and land-use change." },
      { title: "Maritime Analytics", content: "Vessel and route tracking." },
      { title: "Strategic Intelligence", content: "Site monitoring support." },
    ],
  },

  'digital-commerce': {
    pageTitle: "AI for Digital Commerce",
    metaDescription: "Data services for modern e-commerce platforms.",
    pageSlug: "digital-commerce",
    heroSection: {
      title: "Digital Commerce",
      subtitle: "Frictionless Buying Experiences",
      description:
        "Enable seamless digital commerce with AI-ready customer and transaction datasets.",
      heroImage: "https://images.unsplash.com/photo-1553472073-180ea1da3aa7",
    },
    features: [{ icon: Monitor, title: "Customer Experience AI", desc: "Journey optimization data." }],
    sections: [
      { title: "Personalization", content: "Adaptive storefront intelligence." },
      { title: "Conversational AI", content: "Customer support automation." },
      { title: "Pricing Intelligence", content: "Dynamic pricing datasets." },
      { title: "Feedback Analysis", content: "Review and sentiment mining." },
      { title: "Commerce Operations", content: "Sales-to-supply alignment." },
    ],
  },
};
