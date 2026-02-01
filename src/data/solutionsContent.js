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
      "RLHF & SFT datasets",
      "Prompt evaluation benchmarks",
      "Red-teaming reports",
      "Model alignment dashboards"
    ],

    outcomes: [
      "Faster enterprise GenAI deployment",
      "Reduced hallucinations",
      "Improved model alignment",
      "Higher user trust"
    ],

    security: [
      "ISO 27001 & SOC 2 Type II",
      "NDA-backed expert teams",
      "Secure VDI environments"
    ],

    sections: [
      {
        title: "The Critical Role of Data in Generative AI",
        content:
          "In Generative AI, data quality defines outcomes. MillenniumAi delivers high-fidelity human feedback to transform foundation models into enterprise-grade intelligence."
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
        "MillenniumAi transforms raw text into structured intelligence through expert-led NLP annotation across domains and languages.",
      heroImage:
        "https://miro.medium.com/v2/resize:fit:1400/0*_yNcOlMBIB3_XvMG"
    },

    features: [
      { icon: Search, title: "NER & Classification", desc: "Entity extraction and document labeling." },
      { icon: TrendingUp, title: "Sentiment Analysis", desc: "Emotion detection at scale." },
      { icon: Globe, title: "Multilingual NLP", desc: "50+ languages supported." }
    ],

    howWeHelp: {
      title: "How MillenniumAi Helps",
      points: [
        "Expert annotation by native linguists",
        "Domain-specific NLP datasets",
        "Multilingual scaling",
        "Human-in-the-loop validation"
      ]
    },

    deliverables: [
      "NER & sentiment datasets",
      "Multilingual corpora",
      "QA reports"
    ],

    outcomes: [
      "Higher NLP accuracy",
      "Reduced bias",
      "Faster regional deployment"
    ],

    security: [
      "GDPR-compliant workflows",
      "PII redaction",
      "Secure environments"
    ],

    sections: [
      {
        title: "Precision at the Token Level",
        content:
          "Our linguists understand nuance, context, and industry language to deliver enterprise-grade NLP data."
      }
    ]
  },

  /* =========================
     COMPUTER VISION
  ========================= */

  'computer-vision': {
    pageTitle: "Computer Vision Annotation Services",
    metaDescription:
      "Pixel-perfect image, video, and LiDAR annotation for autonomous systems and visual AI.",
    pageSlug: "computer-vision",

    heroSection: {
      title: "Computer Vision Solutions",
      subtitle: "Teaching Machines to See the World",
      description:
        "MillenniumAi delivers high-accuracy image, video, and LiDAR annotation for mission-critical computer vision systems.",
      heroImage:
        "https://i0.wp.com/ubiai.tools/wp-content/uploads/2023/12/yolo-nas-vehicle-counting-blog-1.png"
    },

    features: [
      { icon: Eye, title: "Object Detection", desc: "2D & 3D bounding boxes." },
      { icon: Cpu, title: "Segmentation", desc: "Pixel-accurate labeling." },
      { icon: Truck, title: "LiDAR Annotation", desc: "3D point cloud annotation." }
    ],

    howWeHelp: {
      title: "How MillenniumAi Helps",
      points: [
        "Pixel-perfect annotation with multi-stage QA",
        "Autonomous, retail, and healthcare CV expertise",
        "Large-scale video & LiDAR pipelines"
      ]
    },

    deliverables: [
      "Bounding boxes",
      "Segmentation masks",
      "LiDAR point clouds"
    ],

    outcomes: [
      "Higher detection accuracy",
      "Reduced edge-case failures",
      "Production-ready CV models"
    ],

    security: [
      "Secure data environments",
      "NDA-backed annotators",
      "Audit-ready workflows"
    ],

    sections: [
      {
        title: "The Foundation of Visual Intelligence",
        content:
          "Our QA-driven workflows consistently achieve 99.5%+ annotation accuracy."
      }
    ]
  },

  /* =========================
     CONTENT MODERATION
  ========================= */

  'content-moderation': {
    pageTitle: "Enterprise Content Moderation Services",
    metaDescription:
      "Human-in-the-loop content moderation for trust, safety, and policy enforcement.",
    pageSlug: "content-moderation",

    heroSection: {
      title: "Content Moderation",
      subtitle: "Trust & Safety at Scale",
      description:
        "MillenniumAi safeguards digital platforms through scalable, policy-driven content moderation.",
      heroImage:
        "https://www.anolytics.ai/upload/1703240416_text-moderation-services.webp"
    },

    features: [
      { icon: Shield, title: "Toxicity Detection", desc: "Hate, abuse, and harassment." },
      { icon: Lock, title: "Policy Enforcement", desc: "Consistent guideline application." }
    ],

    howWeHelp: {
      title: "How MillenniumAi Helps",
      points: [
        "Human judgment for complex moderation cases",
        "24/7 global moderation teams",
        "Feedback loops to improve AI safety models"
      ]
    },

    deliverables: [
      "Moderation decision datasets",
      "Safety model training data",
      "Policy compliance reports"
    ],

    outcomes: [
      "Safer digital communities",
      "Lower false positives",
      "Improved user trust"
    ],

    security: [
      "Moderator wellness programs",
      "Secure tooling",
      "NDA-backed teams"
    ],

    sections: [
      {
        title: "Trust & Safety at Scale",
        content:
          "We combine automation with human expertise to manage nuanced content decisions."
      }
    ]
  },

  /* =========================
     DOCUMENT PROCESSING
  ========================= */

  'document-processing': {
    pageTitle: "Intelligent Document Processing (IDP)",
    metaDescription:
      "OCR validation and structured data extraction from complex documents.",
    pageSlug: "document-processing",

    heroSection: {
      title: "Document Processing (IDP)",
      subtitle: "Turning Documents into Data",
      description:
        "MillenniumAi extracts high-accuracy structured data from unstructured documents.",
      heroImage:
        "https://natif.ai/wp-content/uploads/2023/05/Tutorial-Annotation-Overview-1.png"
    },

    features: [
      { icon: FileText, title: "OCR Validation", desc: "Human-verified OCR correction." },
      { icon: Database, title: "Data Extraction", desc: "Key-value and table extraction." }
    ],

    howWeHelp: {
      title: "How MillenniumAi Helps",
      points: [
        "Human-in-the-loop OCR validation",
        "Complex document handling",
        "Secure document workflows"
      ]
    },

    deliverables: [
      "Structured datasets",
      "Validation reports",
      "Integration-ready outputs"
    ],

    outcomes: [
      "Reduced manual effort",
      "Higher data accuracy",
      "Faster processing times"
    ],

    security: [
      "HIPAA & GDPR aligned",
      "Secure clean-room access"
    ],

    sections: [
      {
        title: "Beyond OCR",
        content:
          "We bridge the gap between raw OCR output and production-ready data."
      }
    ]
  },

  /* =========================
     SPEECH TRANSCRIPTION
  ========================= */

  'speech-transcription': {
    pageTitle: "Speech & Audio Transcription Services",
    metaDescription:
      "High-accuracy speech-to-text and audio annotation services.",
    pageSlug: "speech-transcription",

    heroSection: {
      title: "Speech & Audio AI",
      subtitle: "Understanding Human Voice",
      description:
        "MillenniumAi delivers transcription and audio annotation for robust speech AI systems.",
      heroImage:
        "https://exemplary.ai/img/blog/diarization/diarization-clustering-overview.png"
    },

    features: [
      { icon: Mic, title: "Transcription", desc: "Verbatim & clean-read." },
      { icon: Users, title: "Diarization", desc: "Speaker identification." }
    ],

    howWeHelp: {
      title: "How MillenniumAi Helps",
      points: [
        "Accent & dialect coverage",
        "Human QA for ASR systems",
        "Secure audio handling"
      ]
    },

    deliverables: [
      "Time-aligned transcripts",
      "Speaker-labeled audio",
      "WER reports"
    ],

    outcomes: [
      "Improved ASR accuracy",
      "Inclusive voice models"
    ],

    security: [
      "Biometric data protection",
      "PII redaction",
      "NDA-backed teams"
    ],

    sections: [
      {
        title: "Training Conversational AI",
        content:
          "We capture linguistic nuance to train human-like speech systems."
      }
    ]
  },

  /* =========================
     FULL-STACK DEVELOPMENT
  ========================= */

  'full-stack-development': {
    pageTitle: "Full-Stack Development & AI Integration",
    metaDescription:
      "End-to-end software engineering for AI-driven applications.",
    pageSlug: "full-stack-development",

    heroSection: {
      title: "Full-Stack Development",
      subtitle: "Engineering AI into Production",
      description:
        "MillenniumAi builds secure, scalable platforms to operationalize AI systems.",
      heroImage:
        "https://www.xavor.com/wp-content/uploads/2022/11/full-stack-development-2.jpg"
    },

    features: [
      { icon: Code, title: "Web & Mobile Apps", desc: "React, Node, Python." },
      { icon: Database, title: "Data Pipelines", desc: "ETL & ML infrastructure." }
    ],

    howWeHelp: {
      title: "How MillenniumAi Helps",
      points: [
        "From prototype to production",
        "Cloud-native architectures",
        "MLOps & CI/CD automation"
      ]
    },

    deliverables: [
      "Production-ready applications",
      "Scalable data pipelines",
      "MLOps frameworks"
    ],

    outcomes: [
      "Faster go-to-market",
      "Operational AI systems",
      "Reduced engineering overhead"
    ],

    security: [
      "DevSecOps practices",
      "Cloud IAM controls",
      "Enterprise compliance"
    ],

    sections: [
      {
        title: "From Prototype to Production",
        content:
          "We bridge the gap between data science and enterprise engineering."
      }
    ]
  }
};
