import { Heart, Truck, Landmark, ShoppingCart, Activity, Shield, Cpu, Leaf, Home, Globe, Monitor, Box } from 'lucide-react';

export const industriesContent = {
  'healthcare-life-sciences': {
    pageTitle: "AI Solutions for Healthcare & Life Sciences",
    metaDescription: "Accelerate medical research and improve patient outcomes with HIPAA-compliant AI data services. Radiology annotation, clinical NLP, and drug discovery support.",
    pageSlug: "healthcare-life-sciences",
    heroSection: {
      title: "Healthcare & Life Sciences",
      subtitle: "Precision AI for Better Patient Outcomes",
      description: "Accelerate medical innovation with high-fidelity data. From annotating radiology scans to extracting insights from electronic health records, we provide the HIPAA-compliant data services needed to build trustworthy medical AI.",
      heroImage: "https://images.unsplash.com/photo-1682663947090-b35e4f2c23cc"
    },
    features: [
      { icon: Heart, title: "Medical Imaging", desc: "Radiology and pathology annotation by experts." },
      { icon: Activity, title: "Clinical NLP", desc: "Extracting insights from electronic health records." }
    ],
    sections: [
      {
        title: "The Future of Diagnostics",
        content: "AI is revolutionizing diagnostics, but it requires training data labeled by experts, not generalists. We employ board-certified radiologists and medical professionals to annotate X-rays, MRIs, and CT scans. This ensures that your models learn from the best human judgment available."
      },
      {
        title: "Accelerating Drug Discovery",
        content: "Generative AI is shortening the drug discovery timeline. We support pharmaceutical companies by curating and structuring vast databases of molecular structures and clinical trial literature. Our NLP services extract key findings from millions of research papers to identify potential drug candidates faster."
      },
      {
        title: "Patient Data Privacy",
        content: "In healthcare, privacy is paramount. Our workflows are designed from the ground up for HIPAA compliance. We utilize de-identification techniques to strip PII/PHI before data enters the annotation pipeline, and all processing occurs in secure, audit-logged environments."
      },
      {
        title: "Clinical Workflow Automation",
        content: "Burnout is a major crisis in healthcare. Our AI solutions help automate administrative burdens. We build datasets to train models that can transcribe doctor-patient consults, code medical claims automatically, and summarize patient histories, freeing up clinicians to focus on care."
      },
      {
        title: "Case Study: Pathology AI",
        content: "We partnered with a leading biotech firm to develop a cancer detection algorithm. By providing 50,000+ slide images annotated for cell variances by expert pathologists, we helped them achieve a 98% detection rate, significantly reducing false negatives in early screening."
      }
    ]
  },
  'autonomous-mobility': {
    pageTitle: "AI for Autonomous Mobility & Automotive",
    metaDescription: "Driving the future of transportation. High-precision sensor fusion annotation, driver monitoring data, and simulation scenarios for ADAS and AVs.",
    pageSlug: "autonomous-mobility",
    heroSection: {
      title: "Autonomous Mobility",
      subtitle: "Data Fueling the Road Ahead",
      description: "Enable safe and reliable autonomous driving. We provide massive-scale annotation for LiDAR, Radar, and camera data, creating the diverse, edge-case-rich datasets required for Level 4 and Level 5 autonomy.",
      heroImage: "https://images.unsplash.com/photo-1685984351715-1d60f47366d6"
    },
    features: [
      { icon: Truck, title: "Sensor Fusion", desc: "Aligning LiDAR, Radar, and Camera data." },
      { icon: Cpu, title: "Driver Monitoring", desc: "In-cabin AI for safety and attention tracking." }
    ],
    sections: [
      {
        title: "The Long Tail of Driving",
        content: "Autonomous vehicles master highways quickly, but struggle with the 'long tail' of rare events. We specialize in identifying and annotating these edge cases—construction zones, erratic pedestrians, severe weather conditions—to ensure your AV stack is robust enough for the real world."
      },
      {
        title: "3D Perception & Sensor Fusion",
        content: "Modern AVs rely on a suite of sensors. We provide sensor fusion annotation, correlating 2D video frames with 3D LiDAR point clouds to give models a unified understanding of depth and object classification. This multi-modal approach improves detection accuracy by over 30%."
      },
      {
        title: "In-Cabin Experience",
        content: "The future car is a smart space. We collect and annotate in-cabin data to train driver monitoring systems (DMS) that detect fatigue and distraction. We also support the development of voice-activated infotainment systems and gesture controls for a seamless passenger experience."
      },
      {
        title: "Simulation Scenarios",
        content: "Real-world miles aren't enough. We create structured metadata scenarios to feed into simulation engines. By defining the parameters of complex traffic interactions, we help you generate millions of virtual miles to validat your safety algorithms before they hit the road."
      },
      {
        title: "Global Road Coverage",
        content: "Traffic laws and road signs vary by region. We provide localized data services across North America, Europe, and Asia, ensuring your navigation and perception systems can interpret local signage, lane markings, and driving behaviors correctly in every market."
      }
    ]
  },
  'fintech': {
    pageTitle: "AI Solutions for FinTech & Banking",
    metaDescription: "Secure financial data services. Fraud detection datasets, algorithmic trading support, and customer sentiment analysis for the finance sector.",
    pageSlug: "fintech",
    heroSection: {
      title: "FinTech & Banking",
      subtitle: "Intelligent Finance, Securely Delivered",
      description: "Transform financial operations with AI. From fraud detection and risk assessment to personalized banking assistants, we provide the secure, high-accuracy data needed to modernize financial services.",
      heroImage: "https://images.unsplash.com/photo-1687969961103-ba6ece2a186f"
    },
    features: [
      { icon: Landmark, title: "Fraud Detection", desc: "Pattern recognition for transaction security." },
      { icon: Shield, title: "Risk Analysis", desc: "Data-driven credit and market risk assessment." }
    ],
    sections: [
      {
        title: "Combating Financial Crime",
        content: "Fraudsters evolve fast; your AI must evolve faster. We annotate transaction patterns to train anomaly detection models. Our experts label varied fraud typologies—from money laundering to synthetic identity theft—helping you stop financial crime in real-time with fewer false positives."
      },
      {
        title: "Algorithmic Trading Insights",
        content: "Market sentiment moves markets. We use NLP to analyze news feeds, earnings calls, and social media sentiment in real-time. By structuring this unstructured alternative data, we give quantitative trading funds an information edge to power their predictive algorithms."
      },
      {
        title: "Personalized Wealth Management",
        content: "Customers expect hyper-personalization. We help train recommendation engines that analyze spending habits and life goals to offer tailored financial advice. This enables banks to move from transactional relationships to becoming trusted financial partners."
      },
      {
        title: "Document Automation",
        content: "Mortgage applications and loan processing are document-heavy. Our IDP services extract data from tax forms, pay stubs, and bank statements automatically. This reduces loan approval times from weeks to days, significantly improving the customer borrowing experience."
      },
      {
        title: "Regulatory Compliance",
        content: "AI in finance must be explainable and fair. We assist in model governance by providing diverse datasets that help test for bias in credit scoring. We also support RegTech solutions that automate the monitoring of communications for insider trading and compliance breaches."
      }
    ]
  },
  'retail-consumer-tech': {
    pageTitle: "AI for Retail & Consumer Tech",
    metaDescription: "Revolutionizing retail with AI. Visual search, inventory management, and personalized recommendation datasets for e-commerce and brick-and-mortar.",
    pageSlug: "retail-consumer-tech",
    heroSection: {
      title: "Retail & Consumer Tech",
      subtitle: "Reinventing the Shopping Experience",
      description: "Bridge the online and offline worlds. Our AI data services power visual search, smart inventory management, and hyper-personalized recommendations that drive conversion and customer loyalty.",
      heroImage: "https://images.unsplash.com/photo-1692914274321-d8d1b0c01d97"
    },
    features: [
      { icon: ShoppingCart, title: "Visual Search", desc: "Shop-the-look and product recognition." },
      { icon: Box, title: "Inventory AI", desc: "Shelf monitoring and stock prediction." }
    ],
    sections: [
      {
        title: "Visual Commerce",
        content: "Customers want to search with images, not just keywords. We annotate millions of product images with fine-grained attributes (fabric, cut, style) to power visual search engines. This allows users to find the exact product they want, increasing discoverability and sales."
      },
      {
        title: "Smart Shelf Monitoring",
        content: "In physical stores, out-of-stock items mean lost revenue. We train computer vision models for shelf-edge cameras and robots that detect stock levels and planogram compliance in real-time, ensuring shelves are always stocked and organized."
      },
      {
        title: "Personalization at Scale",
        content: "We help build the datasets that drive recommendation engines. By analyzing user clickstreams and purchase history, we enable AI to predict what a customer wants next. This powers the 'You Might Also Like' features that account for 35% of Amazon's revenue."
      },
      {
        title: "Augmented Reality Shopping",
        content: "Try-before-you-buy is going virtual. We provide 3D annotation and keypoint labeling for AR applications that let customers virtually try on glasses, makeup, or place furniture in their homes. This immersive experience reduces return rates and boosts confidence."
      },
      {
        title: "Customer Sentiment",
        content: "Brands live and die by their reputation. We monitor social media and review platforms using NLP to gauge brand sentiment. This real-time feedback loop allows retailers to address product issues and customer service complaints before they become PR crises."
      }
    ]
  },
  // Placeholder for other industries to maintain structure within token limits
  'insurance-analytics': {
    pageTitle: "AI for Insurance Analytics",
    metaDescription: "Data-driven insurance solutions.",
    pageSlug: "insurance-analytics",
    heroSection: {
      title: "Insurance Analytics",
      subtitle: "Risk Assessment & Claims Automation",
      description: "Modernize insurance with AI. From automated damage assessment using computer vision to predictive risk modeling, we provide the data that powers the next generation of InsurTech.",
      heroImage: "https://images.unsplash.com/photo-1642364706752-3af64cc1af5e"
    },
    features: [{ icon: Shield, title: "Claims AI", desc: "Automated damage estimation." }],
    sections: [
      { title: "Automating Claims", content: "Speed up payouts with visual AI that assesses damage from photos." },
      { title: "Risk Modeling", content: "Better underwriting through predictive data analytics." },
      { title: "Fraud Prevention", content: "Identify suspicious claim patterns early." },
      { title: "Customer Experience", content: "Chatbots for 24/7 policy support." },
      { title: "Telematics Data", content: "Usage-based insurance models powered by driving data." }
    ]
  },
  'logistics-supply-chain': {
    pageTitle: "AI for Logistics & Supply Chain",
    metaDescription: "Optimizing global supply chains.",
    pageSlug: "logistics-supply-chain",
    heroSection: {
      title: "Logistics & Supply Chain",
      subtitle: "Efficiency in Motion",
      description: "Optimize every link in the chain. Our AI data services support route optimization, warehouse automation, and demand forecasting to build resilient supply networks.",
      heroImage: "https://images.unsplash.com/photo-1678132085824-80d99fd48a8e"
    },
    features: [{ icon: Truck, title: "Route Opt", desc: "AI-driven delivery paths." }],
    sections: [
      { title: "Warehouse Robotics", content: "Training robots for pick-and-place operations." },
      { title: "Demand Forecasting", content: "Predicting inventory needs with ML." },
      { title: "Predictive Maintenance", content: "Keeping fleets running with IoT data." },
      { title: "Last-Mile Delivery", content: "Optimizing the final step of the journey." },
      { title: "Supply Chain Visibility", content: "Real-time tracking and analytics." }
    ]
  },
  'robotics-automation': {
    pageTitle: "AI for Robotics & Automation",
    metaDescription: "Training the next generation of robots.",
    pageSlug: "robotics-automation",
    heroSection: {
      title: "Robotics & Automation",
      subtitle: "Intelligent Machines",
      description: "From factory floors to home assistants, we provide the sensor data annotation required to teach robots how to perceive, navigate, and interact with the physical world.",
      heroImage: "https://images.unsplash.com/photo-1678995635432-d9e89c7a8fc5"
    },
    features: [{ icon: Cpu, title: "Robot Vision", desc: "Perception for manipulation." }],
    sections: [
      { title: "Industrial Automation", content: "Quality control and assembly line robots." },
      { title: "Service Robotics", content: "Navigation for cleaning and delivery bots." },
      { title: "Human-Robot Interaction", content: "Safe collaboration in shared spaces." },
      { title: "Sim2Real", content: "Bridging simulation training to the real world." },
      { title: "Grasping & Manipulation", content: "Training dexterity for complex tasks." }
    ]
  },
  'security-surveillance-ai': {
    pageTitle: "AI for Security & Surveillance",
    metaDescription: "Smart security solutions.",
    pageSlug: "security-surveillance-ai",
    heroSection: {
      title: "Security & Surveillance",
      subtitle: "Proactive Protection",
      description: "Enhance safety with intelligent monitoring. We annotate video streams to train AI that detects anomalies, unauthorized access, and safety hazards in real-time.",
      heroImage: "https://images.unsplash.com/photo-1654588836190-d8e6c12122f8"
    },
    features: [{ icon: Shield, title: "Threat Detect", desc: "Real-time anomaly alerts." }],
    sections: [
      { title: "Perimeter Security", content: "Intrusion detection systems." },
      { title: "Facial Recognition", content: "Access control and identity verification." },
      { title: "Crowd Analytics", content: "Managing safety in large venues." },
      { title: "Retail Loss Prevention", content: "Detecting theft behaviors." },
      { title: "Privacy Preservation", content: "Redacting identities in surveillance footage." }
    ]
  },
  'smart-agriculture': {
    pageTitle: "AI for Smart Agriculture",
    metaDescription: "Tech-enabled farming.",
    pageSlug: "smart-agriculture",
    heroSection: {
      title: "Smart Agriculture",
      subtitle: "Feeding the Future",
      description: "Optimize yields with precision agriculture. Our drone and satellite imagery annotation helps train models for crop health monitoring, weed detection, and automated harvesting.",
      heroImage: "https://images.unsplash.com/photo-1678995635432-d9e89c7a8fc5"
    },
    features: [{ icon: Leaf, title: "Crop Health", desc: "NDVI and visual analysis." }],
    sections: [
      { title: "Precision Weeding", content: "Targeted herbicide application." },
      { title: "Yield Prediction", content: "Estimating harvest volumes." },
      { title: "Livestock Monitoring", content: "Tracking health and behavior." },
      { title: "Automated Harvesting", content: "Robotic picking systems." },
      { title: "Soil Analysis", content: "Data-driven nutrient management." }
    ]
  },
  'real-estate-technology': {
    pageTitle: "AI for Real Estate Tech",
    metaDescription: "PropTech innovation.",
    pageSlug: "real-estate-technology",
    heroSection: {
      title: "Real Estate Tech",
      subtitle: "Intelligent Property",
      description: "Digitize the built world. We support PropTech with data for automated valuation models, 3D virtual tours, and smart building management systems.",
      heroImage: "https://images.unsplash.com/photo-1491499661251-7f7eee4be692"
    },
    features: [{ icon: Home, title: "AVM Data", desc: "Automated valuation support." }],
    sections: [
      { title: "Virtual Tours", content: "3D reconstruction of interiors." },
      { title: "Property Analytics", content: "Predicting market trends." },
      { title: "Smart Buildings", content: "IoT energy optimization." },
      { title: "Construction Monitoring", content: "Tracking progress with drone data." },
      { title: "Tenant Experience", content: "AI-driven facility management." }
    ]
  },
  'geospatial-intelligence': {
    pageTitle: "AI for Geospatial Intelligence",
    metaDescription: "Mapping the changing world.",
    pageSlug: "geospatial-intelligence",
    heroSection: {
      title: "Geospatial Intelligence",
      subtitle: "Insights from Above",
      description: "Analyze the planet at scale. We annotate satellite and aerial imagery to track urban growth, monitor climate change, and support disaster response efforts.",
      heroImage: "https://images.unsplash.com/photo-1547619938-65659b613c85"
    },
    features: [{ icon: Globe, title: "Remote Sensing", desc: "Satellite image analysis." }],
    sections: [
      { title: "Urban Planning", content: "Mapping infrastructure development." },
      { title: "Disaster Response", content: "Assessing damage after events." },
      { title: "Environmental Monitoring", content: "Tracking deforestation and ice melt." },
      { title: "Maritime Tracking", content: "Monitoring shipping lanes." },
      { title: "Defense & Intel", content: "Strategic site monitoring." }
    ]
  },
  'digital-commerce': {
    pageTitle: "AI for Digital Commerce",
    metaDescription: "E-commerce evolution.",
    pageSlug: "digital-commerce",
    heroSection: {
      title: "Digital Commerce",
      subtitle: "Seamless Transactions",
      description: "Enhance the buyer journey. From personalized marketing to chatbot support, we provide the data that powers frictionless digital commerce experiences.",
      heroImage: "https://images.unsplash.com/photo-1553472073-180ea1da3aa7"
    },
    features: [{ icon: Monitor, title: "CX AI", desc: "Customer experience optimization." }],
    sections: [
      { title: "Personalization", content: "Tailoring the storefront to the user." },
      { title: "Chatbot Support", content: "Automating customer service." },
      { title: "Dynamic Pricing", content: "AI-driven price optimization." },
      { title: "Review Analysis", content: "Mining customer feedback." },
      { title: "Supply Chain Sync", content: "Connecting sales to inventory." }
    ]
  }
};