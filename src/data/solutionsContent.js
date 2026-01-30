import { Database, Users, Code, Shield, Search, TrendingUp, Globe, Eye, Cpu, Truck, Lock, FileText, Mic } from 'lucide-react';

export const solutionsContent = {
  'generative-ai': {
    pageTitle: "Generative AI Data Services | MillenniumAi",
    metaDescription: "Enterprise-grade Generative AI data services for training, fine-tuning, and evaluating LLMs. RLHF, red teaming, and prompt engineering at scale.",
    pageSlug: "generative-ai",
    heroSection: {
      title: "Generative AI Data Services",
      subtitle: "Powering the Next Generation of Enterprise Intelligence",
      description: "We provide the critical human intelligence layer for Large Language Models (LLMs). From RLHF and instruction tuning to red teaming and safety evaluation, our data services ensure your Generative AI models are accurate, safe, and aligned with human intent.",
      heroImage: "https://cdn.tokyotechlab.com/Blog/Blog%202025/T2/generative_ai_la_gi_bdb13e7dd1.webp"
    },
    features: [
      { icon: Database, title: "LLM Training Data", desc: "Diverse datasets for pre-training and fine-tuning." },
      { icon: Users, title: "RLHF Services", desc: "Human feedback loops to align models with human intent." },
      { icon: Code, title: "Prompt Engineering", desc: "Crafting and refining prompts for optimal model output." },
      { icon: Shield, title: "Red Teaming", desc: "Adversarial testing to ensure model safety and robustness." }
    ],
    sections: [
      {
        title: "The Critical Role of Data in Generative AI",
        content: "In the era of Large Language Models (LLMs), data quality is the primary differentiator. While architectures are becoming commoditized, the proprietary data used to fine-tune and align these models determines their success in enterprise applications. MillenniumAi provides the high-fidelity human signal required to turn raw foundation models into specialized, reliable business tools."
      },
      {
        title: "Comprehensive GenAI Capabilities",
        content: "Our end-to-end service suite covers the entire model development lifecycle. We specialize in Reinforcement Learning from Human Feedback (RLHF) to align models with safety guidelines and brand voice. Our Supervised Fine-Tuning (SFT) datasets help models master domain-specific tasks, from legal reasoning to medical coding."
      },
      {
        title: "Safety & Red Teaming",
        content: "Deploying Generative AI in the enterprise requires rigorous safety assurance. Our expert red teams proactively probe models for vulnerabilities, bias, toxicity, and hallucinations. We design adversarial attack vectors tailored to your specific use case to ensure your model is robust against misuse before it reaches production."
      },
      {
        title: "Enterprise Scale & Security",
        content: "We understand that enterprise data is sensitive. Our workflows are ISO 27001 and SOC 2 Type II compliant, with options for on-premise annotation or secure remote environments (VDI). We scale to thousands of annotators while maintaining strict quality controls through our proprietary governance platform."
      },
      {
        title: "Why Trust MillenniumAi",
        content: "We partner with the world's leading foundation model builders and Fortune 500 enterprises. Our 'human-in-the-loop' approach combines subject matter experts (PhDs, lawyers, coders) with efficient operational workflows to deliver data that meets the highest standards of accuracy and nuance."
      }
    ]
  },
  'nlp': {
    pageTitle: "Natural Language Processing Data Services",
    metaDescription: "High-precision NLP data annotation for sentiment analysis, NER, and text classification. Multilingual support for global enterprise AI.",
    pageSlug: "nlp",
    heroSection: {
      title: "Natural Language Processing",
      subtitle: "Unlocking Insights from Unstructured Text",
      description: "Transform raw text into actionable intelligence. Our NLP data services cover the full spectrum of linguistic tasks, including Named Entity Recognition (NER), sentiment analysis, and multilingual translation, enabling you to build global-ready AI systems.",
      heroImage: "https://miro.medium.com/v2/resize:fit:1400/0*_yNcOlMBIB3_XvMG"
    },
    features: [
      { icon: Search, title: "Named Entity Recognition", desc: "Identify people, organizations, and locations." },
      { icon: TrendingUp, title: "Sentiment Analysis", desc: "Understand customer emotion and feedback." },
      { icon: Globe, title: "Translation & Localization", desc: "Native-speaker quality across 50+ languages." }
    ],
    sections: [
      {
        title: "Precision at the Token Level",
        content: "Effective NLP requires more than just labeling; it requires linguistic understanding. Our annotators are native speakers and subject matter experts who understand context, idiom, and nuance. This ensures that your models can detect subtle sentiment shifts and accurately classify complex industry jargon."
      },
      {
        title: "Multilingual Intelligence",
        content: "Global business requires global AI. We support data collection and annotation in over 50 languages and dialects. Whether you are building a customer support bot for Southeast Asia or a legal document analyzer for the European market, we provide the localized data expertise you need."
      },
      {
        title: "Domain-Specific Expertise",
        content: "Generic NLP models fail in specialized fields. We curate teams with backgrounds in finance, healthcare, law, and engineering to label high-complexity text. This domain expertise allows us to build datasets for tasks like clinical trial analysis, patent extraction, and financial risk assessment."
      },
      {
        title: "Scalable Text Workflows",
        content: "From processing millions of customer support tickets to categorizing vast archives of legal discovery documents, our platform handles volume without compromising speed. We utilize AI-assisted annotation tools to pre-label data, leaving humans to focus on validation and edge cases."
      },
      {
        title: "Proven Impact",
        content: "Our NLP datasets have powered customer satisfaction engines that reduced churn by 15%, automated compliance monitoring systems for global banks, and enabled real-time translation services for international media companies."
      }
    ]
  },
  'computer-vision': {
    pageTitle: "Computer Vision Annotation Services",
    metaDescription: "Pixel-perfect image and video annotation for autonomous systems, retail analytics, and visual inspection. 2D/3D bounding boxes and segmentation.",
    pageSlug: "computer-vision",
    heroSection: {
      title: "Computer Vision Solutions",
      subtitle: "Teaching Machines to See the World",
      description: "High-fidelity annotation for image and video data. From autonomous driving to medical imaging, we provide the pixel-perfect ground truth required to train state-of-the-art computer vision models.",
      heroImage: "https://i0.wp.com/ubiai.tools/wp-content/uploads/2023/12/yolo-nas-vehicle-counting-blog-1.png?fit=872%2C586&ssl=1"
    },
    features: [
      { icon: Eye, title: "Object Detection", desc: "2D/3D bounding boxes for precise localization." },
      { icon: Cpu, title: "Semantic Segmentation", desc: "Pixel-level classification for autonomous systems." },
      { icon: Truck, title: "LiDAR Annotation", desc: "3D point cloud processing for autonomous driving." }
    ],
    sections: [
      {
        title: "The Foundation of Visual Intelligence",
        content: "Computer vision models are only as good as their training data. A single mislabeled pixel in a medical scan or a missed pedestrian in a driving dataset can have critical consequences. We prioritize rigorous quality assurance protocols, achieving 99.5% accuracy benchmarks across complex visual tasks."
      },
      {
        title: "Advanced Annotation Capabilities",
        content: "We go beyond simple bounding boxes. Our capabilities include polygon segmentation for precise object outlines, keypoint annotation for pose estimation, and 3D cuboids for spatial depth. We also specialize in video object tracking, maintaining identity consistency across thousands of frames."
      },
      {
        title: "LiDAR & Sensor Fusion",
        content: "For autonomous mobility and robotics, we process 3D point cloud data from LiDAR sensors. Our teams are trained to interpret sparse 3D data, fusing it with 2D camera feeds to create comprehensive scene understanding datasets for Level 4 and Level 5 autonomous systems."
      },
      {
        title: "Industry Applications",
        content: "Our vision data powers quality control systems in manufacturing, inventory management robots in retail, crop health monitoring in agriculture, and diagnostic tools in radiology. We tailor our annotation guidelines to the specific visual nuances of your industry."
      },
      {
        title: "Quality Assurance Framework",
        content: "We employ a multi-tier QA process. Annotations are first generated (often with AI assistance), then reviewed by senior annotators, and finally audited by domain experts. This 'human-in-the-loop' verification ensures that edge cases—like occlusions, harsh lighting, or rare anomalies—are handled correctly."
      }
    ]
  },
  'content-moderation': {
    pageTitle: "Enterprise Content Moderation Services",
    metaDescription: "Scalable human-in-the-loop content moderation for user safety and brand protection. Toxicity detection, policy enforcement, and quality audits.",
    pageSlug: "content-moderation",
    heroSection: {
      title: "Content Moderation",
      subtitle: "Safeguarding Your Digital Community",
      description: "Protect your users and your brand reputation with enterprise-grade content moderation. We combine automated detection with human judgment to handle toxicity, hate speech, and policy violations at scale.",
      heroImage: "https://www.anolytics.ai/upload/1703240416_text-moderation-services.webp"
    },
    features: [
      { icon: Shield, title: "Toxicity Detection", desc: "Identify hate speech, harassment, and bullying." },
      { icon: Lock, title: "Policy Enforcement", desc: "Consistent application of community guidelines." }
    ],
    sections: [
      {
        title: "Trust & Safety at Scale",
        content: "User-generated content is growing exponentially. Automated filters catch the obvious, but they miss the nuance of context, satire, and evolving slang. MillenniumAi provides the human layer that handles the 'gray areas,' ensuring that your platform remains a safe and welcoming environment for all users."
      },
      {
        title: "Comprehensive Policy Enforcement",
        content: "We implement your Trust & Safety guidelines with precision. Our teams handle diverse categories including hate speech, violence, Nudity/NSFW, misinformation, and intellectual property violations. We offer 24/7 coverage to ensure rapid response times for reported content."
      },
      {
        title: "Wellness-Focused Operations",
        content: "Content moderation is psychologically demanding work. We prioritize the mental health of our moderators through industry-leading wellness programs, including mandatory psychological support, rotation schedules, and blurring tools for graphic content. A healthy team delivers higher quality decisions."
      },
      {
        title: "Data for Safety Models",
        content: "Beyond real-time moderation, we generate high-quality labeled datasets to train your automated safety classifiers. By analyzing the decisions made by human moderators, we help you close the feedback loop and continuously improve your automated detection systems."
      },
      {
        title: "Global Cultural Context",
        content: "What is offensive in one culture may be acceptable in another. Our global team brings local cultural understanding to moderation decisions, ensuring that your policies are applied appropriately across different regions and languages."
      }
    ]
  },
  'document-processing': {
    pageTitle: "Intelligent Document Processing (IDP)",
    metaDescription: "Extract value from unstructured documents. OCR correction, data extraction, and document classification services for finance, legal, and healthcare.",
    pageSlug: "document-processing",
    heroSection: {
      title: "Document Processing (IDP)",
      subtitle: "Turning Paper Trails into Data Streams",
      description: "Unlock the value trapped in your documents. Our Intelligent Document Processing services combine advanced OCR with human validation to extract structured data from invoices, contracts, forms, and medical records with near-perfect accuracy.",
      heroImage: "https://natif.ai/wp-content/uploads/2023/05/Tutorial-Annotation-Overview-1.png"
    },
    features: [
      { icon: FileText, title: "OCR Validation", desc: "Correcting and verifying optical character recognition." },
      { icon: Database, title: "Data Extraction", desc: "Pulling key fields from invoices, forms, and contracts." }
    ],
    sections: [
      {
        title: "Beyond Simple OCR",
        content: "Optical Character Recognition (OCR) is rarely 100% accurate, especially with handwritten text, low-quality scans, or complex layouts. MillenniumAi provides the 'human-in-the-loop' verification step that bridges the gap between raw OCR output and production-ready data accuracy."
      },
      {
        title: "Complex Data Extraction",
        content: "We specialize in extracting structured key-value pairs from unstructured documents. Whether it's pulling line items from diverse invoice templates, extracting clauses from legal contracts, or digitizing historical patient records, we format the data exactly as your downstream systems require."
      },
      {
        title: "Secure & Compliant Workflows",
        content: "Document processing often involves Personally Identifiable Information (PII) or Protected Health Information (PHI). Our facilities and workflows are HIPAA and GDPR compliant. We utilize redaction tools and secure cleanroom environments to ensure that sensitive data never leaks."
      },
      {
        title: "Scalable Back-Office Automation",
        content: "By outsourcing the manual burden of data entry and verification, enterprises can reduce operational costs by up to 40%. Our scalable teams allow you to handle seasonal spikes in document volume—like tax season or enrollment periods—without hiring permanent staff."
      },
      {
        title: "End-to-End Pipeline Integration",
        content: "We don't just process documents; we integrate into your digital workflow. From API-based document ingestion to direct upload into your ERP or CRM systems, we deliver a seamless data pipeline that accelerates decision-making and business velocity."
      }
    ]
  },
  'speech-transcription': {
    pageTitle: "Speech & Audio Transcription Services",
    metaDescription: "Accurate speech-to-text and audio annotation. Speaker diarization, audio classification, and multilingual transcription for AI voice assistants.",
    pageSlug: "speech-transcription",
    heroSection: {
      title: "Speech & Audio AI",
      subtitle: "Capturing the Nuance of Human Voice",
      description: "Power the next generation of voice interfaces. We provide high-fidelity transcription, speaker diarization, and audio classification services to train robust speech recognition models that understand accents, dialects, and context.",
      heroImage: "https://exemplary.ai/img/blog/diarization/diarization-clustering-overview.png"
    },
    features: [
      { icon: Mic, title: "Audio Transcription", desc: "Verbatim and clean-read speech-to-text." },
      { icon: Users, title: "Speaker Diarization", desc: "Identifying 'who spoke when' in multi-speaker audio." }
    ],
    sections: [
      {
        title: "Training Conversational AI",
        content: "Voice assistants and chatbots need to understand more than just words; they need to understand intent and emotion. Our transcription services capture paralinguistic features—like tone, pauses, and disfluencies—providing the rich data needed to train truly conversational AI agents."
      },
      {
        title: "Accents & Dialects",
        content: "Standard speech models often fail with non-standard accents or regional dialects. We collect and transcribe diverse audio datasets from around the world, helping you build inclusive AI systems that work for every user, regardless of how they speak."
      },
      {
        title: "Audio Event Classification",
        content: "Beyond speech, we annotate environmental sounds for applications like smart home security and industrial monitoring. We can classify events such as glass breaking, sirens, machinery faults, or background noise profiles to enhance audio scene understanding."
      },
      {
        title: "Quality Control for ASR",
        content: "We act as the ground truth for your Automated Speech Recognition (ASR) systems. By comparing ASR output against human-verified transcripts, we calculate Word Error Rates (WER) and provide targeted data to retrain and improve your models in specific failure domains."
      },
      {
        title: "Secure Audio Handling",
        content: "Voice data is biometric and highly sensitive. We enforce strict data privacy protocols. Audio files are processed in secure environments where download is disabled, and annotators sign strict NDAs. We also offer PII redaction from audio streams to ensure compliance."
      }
    ]
  },
  'full-stack-development': {
    pageTitle: "Full-Stack Development & AI Integration",
    metaDescription: "End-to-end software engineering for AI applications. Web & mobile development, cloud infrastructure, and MLOps for enterprise deployment.",
    pageSlug: "full-stack-development",
    heroSection: {
      title: "Full-Stack Development",
      subtitle: "Building the Infrastructure for AI Innovation",
      description: "We don't just label data; we build the systems that use it. Our full-stack engineering teams design, develop, and deploy enterprise-grade applications, data pipelines, and MLOps infrastructure to bring your AI initiatives to production.",
      heroImage: "https://www.xavor.com/wp-content/uploads/2022/11/full-stack-development-2.jpg"
    },
    features: [
      { icon: Code, title: "Web & Mobile Apps", desc: "React, Node.js, and Python expertise." },
      { icon: Database, title: "Data Pipelines", desc: "Scalable ETL and data warehousing solutions." }
    ],
    sections: [
      {
        title: "From Prototype to Production",
        content: "Many AI projects fail to leave the notebook. We bridge the gap between data science and software engineering. We build robust APIs, scalable microservices, and intuitive user interfaces that turn your machine learning models into usable, valuable products for your customers and employees."
      },
      {
        title: "Cloud-Native Architecture",
        content: "We design for the cloud. Whether on AWS, Azure, or Google Cloud, we build serverless and containerized architectures (Kubernetes, Docker) that auto-scale with demand. This ensures your AI applications are resilient, cost-effective, and always available."
      },
      {
        title: "MLOps & CI/CD",
        content: "Model deployment is just the beginning. We implement MLOps pipelines that automate retraining, versioning, and monitoring. Our CI/CD workflows ensure that code updates and model improvements are deployed safely and reliably, minimizing downtime and regression risks."
      },
      {
        title: "Data Engineering",
        content: "AI requires clean, accessible data. We build high-throughput data lakes and warehouses (Snowflake, Databricks, BigQuery). We design ETL/ELT processes that ingest real-time data from diverse sources, ensuring your models always have fresh information to act upon."
      },
      {
        title: "Security by Design",
        content: "We integrate security into every line of code. Following DevSecOps principles, we conduct automated vulnerability scanning, implement strict IAM policies, and ensure end-to-end encryption. We build systems that are secure enough for banking, healthcare, and government use."
      }
    ]
  }
};