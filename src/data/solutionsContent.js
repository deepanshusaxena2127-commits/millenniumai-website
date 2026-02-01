import {
  Database,
  Users,
  Code,
  Shield,
  Search,
  TrendingUp,
  Globe,
  Eye,
  Cpu,
  Truck,
  Lock,
  FileText,
  Mic
} from 'lucide-react';

export const solutionsContent = {

  /* =========================
     GENERATIVE AI
  ========================= */

  'generative-ai': {
    pageTitle: "Generative AI Data Services | MillenniumAi",
    metaDescription:
      "Enterprise-grade Generative AI data services for training, fine-tuning, and evaluating LLMs. RLHF, red teaming, and prompt engineering at scale.",
    pageSlug: "generative-ai",

    heroSection: {
      title: "Generative AI Data Services",
      subtitle: "Powering the Next Generation of Enterprise Intelligence",
      description:
        "MillenniumAi provides the critical human intelligence layer for Large Language Models. From RLHF and instruction tuning to red teaming and safety evaluation, we help enterprises deploy reliable, aligned, and production-ready Generative AI.",
      heroImage:
        "https://cdn.tokyotechlab.com/Blog/Blog%202025/T2/generative_ai_la_gi_bdb13e7dd1.webp"
    },

    features: [
      { icon: Database, title: "LLM Training Data", desc: "High-quality datasets for pre-training and fine-tuning." },
      { icon: Users, title: "RLHF Services", desc: "Human feedback to align models with intent and safety." },
      { icon: Code, title: "Prompt Engineering", desc: "Prompt design, optimization, and evaluation." },
      { icon: Shield, title: "Red Teaming", desc: "Adversarial testing for safety and robustness." }
    ],

    howWeHelp: {
      title: "How MillenniumAi Helps",
      points: [
        "Align LLMs with human intent using expert-led RLHF pipelines",
        "Fine-tune foundation models for enterprise and domain-specific use cases",
        "Design adversarial red-team scenarios to test model safety",
        "Scale human feedback operations globally without quality drift"
      ]
    },

    deliverables: [
      "RLHF & SFT datasets (JSON, Parquet, custom formats)",
      "Prompt–response evaluation benchmarks",
      "Red-teaming & safety assessment reports",
      "Model alignment and accuracy dashboards"
    ],

    outcomes: [
      "Faster enterprise GenAI deployment",
      "Reduced hallucinations and unsafe outputs",
      "Higher model alignment scores",
      "Improved user trust and adoption"
    ],

    security: [
      "ISO 27001 & SOC 2 Type II compliant workflows",
      "NDA-backed expert annotators",
      "Secure VDI & clean-room environments",
      "Optional on-premise execution"
    ],

    sections: [
      {
        title: "The Critical Role of Data in Generative AI",
        content:
          "In the era of Large Language Models, data quality—not architecture—is the true differentiator. MillenniumAi delivers high-fidelity human signal to transform foundation models into enterprise-ready intelligence."
      },
      {
        title: "Comprehensive GenAI Capabilities",
        content:
          "Our services span RLHF, supervised fine-tuning, prompt evaluation, and model safety testing across industries such as finance, healthcare, and legal."
      },
      {
        title: "Safety & Red Teaming",
        content:
          "We proactively test models for bias, toxicity, hallucinations, and misuse through structured adversarial evaluations."
      },
      {
        title: "Enterprise Scale & Security",
        content:
          "Our secure, compliant workflows scale to thousands of expert annotators without compromising quality or confidentiality."
      }
    ]
  },

  /* =========================
     NLP
  ========================= */

  'nlp': {
    pageTitle: "Natural Language Processing Data Services",
    metaDescription:
      "High-precision NLP data annotation for sentiment analysis, NER, and multilingual text classification.",
    pageSlug: "nlp",

    heroSection: {
      title: "Natural Language Processing",
      subtitle: "Unlocking Insights from Unstructured Text",
      description:
        "MillenniumAi transforms raw text into structured intelligence with expert-led NLP annotation across domains and languages.",
      heroImage:
        "https://miro.medium.com/v2/resize:fit:1400/0*_yNcOlMBIB3_XvMG"
    },

    features: [
      { icon: Search, title: "NER & Classification", desc: "Entity extraction and document labeling." },
      { icon: TrendingUp, title: "Sentiment Analysis", desc: "Emotion and opinion detection at scale." },
      { icon: Globe, title: "Multilingual NLP", desc: "50+ languages with native expertise." }
    ],

    howWeHelp: {
      title: "How MillenniumAi Helps",
      points: [
        "Build high-accuracy NLP datasets using native linguists",
        "Support domain-specific NLP in finance, healthcare, and legal",
        "Scale multilingual annotation globally",
        "Improve model precision through human-in-the-loop validation"
      ]
    },

    deliverables: [
      "NER, sentiment, and classification datasets",
      "Multilingual annotated corpora",
      "Quality and consistency reports"
    ],

    outcomes: [
      "Improved NLP accuracy",
      "Reduced model bias",
      "Faster deployment across regions"
    ],

    security: [
      "GDPR-compliant text handling",
      "PII redaction workflows",
      "Secure annotation environments"
    ],

    sections: [
      {
        title: "Precision at the Token Level",
        content:
          "Our linguists understand nuance, context, and industry-specific language to deliver enterprise-grade NLP data."
      },
      {
        title: "Multilingual Intelligence",
        content:
          "We support global NLP initiatives across 50+ languages and dialects with native expertise."
      }
    ]
  },

  /* =========================
     COMPUTER VISION
  ========================= */

  'computer-vision': {
    pageTitle: "Computer Vision Annotation Services",
    metaDescription:
      "Pixel-perfect image and video annotation for autonomous systems, retail analytics, and medical imaging.",
    pageSlug: "computer-vision",

    heroSection: {
      title: "Computer Vision Solutions",
      subtitle: "Teaching Machines to See the World",
      description:
        "MillenniumAi delivers high-accuracy image, video, and LiDAR annotation for mission-critical vision systems.",
      heroImage:
        "https://i0.wp.com/ubiai.tools/wp-content/uploads/2023/12/yolo-nas-vehicle-counting-blog-1.png"
    },

    features: [
      { icon: Eye, title: "Object Detection", desc: "2D/3D bounding boxes." },
      { icon: Cpu, title: "Segmentation", desc: "Pixel-level labeling." },
      { icon: Truck, title: "LiDAR Annotation", desc: "3D point cloud processing." }
    ],

    howWeHelp: {
      title: "How MillenniumAi Helps",
      points: [
        "Deliver pixel-perfect annotations with multi-stage QA",
        "Support autonomous, retail, and healthcare vision use cases",
        "Scale video and LiDAR annotation globally"
      ]
    },

    deliverables: [
      "2D/3D bounding boxes",
      "Polygon & semantic segmentation",
      "LiDAR point cloud annotations"
    ],

    outcomes: [
      "Higher model precision",
      "Reduced edge-case failures",
      "Production-ready CV models"
    ],

    security: [
      "Secure data environments",
      "NDA-bound annotators",
      "Audit-ready workflows"
    ],

    sections: [
      {
        title: "The Foundation of Visual Intelligence",
        content:
          "Computer vision models demand extreme accuracy. Our QA-driven workflows achieve 99.5%+ precision."
      }
    ]
  }

  // Remaining solutions (Content Moderation, IDP, Speech, Full Stack)
  // follow the SAME STRUCTURE you now have.
};
