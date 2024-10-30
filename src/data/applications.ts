import { Brain, Car, Pencil, Grid3X3, Image as ImageIcon, Sparkles, Baby, Users, Music2, Newspaper, Languages } from 'lucide-react';
import { Application } from '@/types';

export const applications: Application[] = [
  {
    title: "Self-Driven Cars",
    description: "Autonomous vehicles that navigate and operate without human intervention, using deep learning to understand and react to their environment.",
    icon: Car,
    features: [
      "Real-time object detection and tracking",
      "Path planning and navigation",
      "Traffic sign and signal recognition",
      "Pedestrian detection and prediction",
      "Environmental condition adaptation"
    ],
    applications: [
      "Personal transportation",
      "Logistics and delivery services",
      "Public transportation",
      "Industrial automation"
    ],
    futurePotential: "As self-driving technology continues to evolve, we can expect to see fully autonomous vehicles becoming commonplace, revolutionizing transportation and urban planning while significantly reducing accidents and emissions."
  },
  {
    title: "Automatic Handwriting Generation",
    description: "AI systems that can generate human-like handwriting, learning from vast datasets of handwritten text.",
    icon: Pencil,
    features: [
      "Style transfer and adaptation",
      "Multiple handwriting style generation",
      "Character consistency",
      "Natural variation simulation",
      "Language-agnostic capabilities"
    ],
    applications: [
      "Personalized digital content",
      "Educational tools",
      "Artistic projects",
      "Document personalization"
    ],
    futurePotential: "Future developments could enable perfect replication of historical handwriting styles, creating new possibilities for document restoration and personalized communication."
  },
  {
    title: "Pixel Restoration",
    description: "Advanced algorithms that restore and enhance damaged or low-quality images by intelligently filling in missing pixels.",
    icon: Grid3X3,
    features: [
      "Super-resolution enhancement",
      "Noise reduction",
      "Detail reconstruction",
      "Artifact removal",
      "Color correction"
    ],
    applications: [
      "Photo restoration",
      "Medical imaging",
      "Surveillance footage enhancement",
      "Historical document preservation"
    ],
    futurePotential: "Future advancements could enable perfect restoration of severely damaged images and real-time enhancement of video streams."
  },
  {
    title: "Colorization of Black & White Images",
    description: "Technology that breathes new life into monochrome photos by adding realistic colors through deep learning.",
    icon: ImageIcon,
    features: [
      "Automatic color prediction",
      "Historical accuracy",
      "Texture preservation",
      "Style consistency",
      "Batch processing capabilities"
    ],
    applications: [
      "Historical photo restoration",
      "Film restoration",
      "Archive digitization",
      "Educational materials"
    ],
    futurePotential: "Future systems could provide historically accurate colorization with multiple style options and real-time video colorization capabilities."
  },
  {
    title: "Deep Dreaming",
    description: "Neural networks that create surreal, dream-like images by enhancing and interpreting patterns within existing images.",
    icon: Sparkles,
    features: [
      "Pattern recognition enhancement",
      "Style transfer",
      "Artistic interpretation",
      "Visual pattern generation",
      "Interactive manipulation"
    ],
    applications: [
      "Artistic creation",
      "Visual effects",
      "Creative inspiration",
      "Digital art"
    ],
    futurePotential: "The future of deep dreaming could include real-time video processing and interactive installations that respond to viewer input."
  },
  {
    title: "Detection of Growth Delays",
    description: "AI-powered analysis of medical data to identify developmental issues in children at early stages.",
    icon: Baby,
    features: [
      "Early detection algorithms",
      "Growth pattern analysis",
      "Risk factor identification",
      "Developmental milestone tracking",
      "Predictive analytics"
    ],
    applications: [
      "Pediatric care",
      "Public health screening",
      "Research studies",
      "Preventive healthcare"
    ],
    futurePotential: "Future systems could provide personalized growth predictions and intervention recommendations based on individual genetic and environmental factors."
  },
  {
    title: "Demographic Prediction",
    description: "Machine learning models that analyze data to predict population trends and demographic characteristics.",
    icon: Users,
    features: [
      "Population trend analysis",
      "Behavioral pattern recognition",
      "Socioeconomic prediction",
      "Migration pattern analysis",
      "Age distribution forecasting"
    ],
    applications: [
      "Urban planning",
      "Market research",
      "Policy making",
      "Resource allocation"
    ],
    futurePotential: "Advanced systems could provide highly accurate long-term demographic predictions, helping shape policy and planning decisions."
  },
  {
    title: "Sound Addition to Silent Films",
    description: "Deep learning technology that generates appropriate soundtracks and audio for silent movies.",
    icon: Music2,
    features: [
      "Scene-based sound generation",
      "Ambient noise creation",
      "Music score generation",
      "Voice synthesis",
      "Sound synchronization"
    ],
    applications: [
      "Film restoration",
      "Historical preservation",
      "Entertainment enhancement",
      "Educational materials"
    ],
    futurePotential: "Future systems could generate completely realistic soundscapes with period-accurate sounds and music for any silent film."
  },
  {
    title: "News Aggregation",
    description: "AI systems that collect, analyze, and summarize news from various sources to provide comprehensive coverage.",
    icon: Newspaper,
    features: [
      "Multi-source integration",
      "Content categorization",
      "Bias detection",
      "Summary generation",
      "Trend analysis"
    ],
    applications: [
      "Personal news feeds",
      "Research tools",
      "Media monitoring",
      "Business intelligence"
    ],
    futurePotential: "Future aggregators could provide real-time, personalized news analysis with fact-checking and bias detection capabilities."
  },
  {
    title: "Automatic Machine Translation",
    description: "Neural networks that enable accurate, context-aware translation between different languages.",
    icon: Languages,
    features: [
      "Context-aware translation",
      "Idiom handling",
      "Cultural adaptation",
      "Real-time processing",
      "Multi-language support"
    ],
    applications: [
      "International business",
      "Travel and tourism",
      "Educational tools",
      "Content localization"
    ],
    futurePotential: "Future systems could provide near-perfect translations with cultural context adaptation and real-time spoken language translation."
  }
];